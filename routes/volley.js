var express = require('express');
var router = express.Router();
var mysql = require('mysql');



var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "12345",
	database: "volley"
});
con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
});







/* GET users listing. */
router.get('/', function(req, res, next) {

var tableChampionship = [];
var teamList = [];
var stageList = [];
var placeList = [];

	con.query("SELECT * FROM team", function (err, rows, fields) {
	//console.log(rows);
	teamList = [];
	stageList = [];
	placeList = [];
		rows.forEach(function (current, index, arr) {
			teamList.push(current.teamName);
		});
	});

	con.query("SELECT * FROM championship", function (err, rows, fields) {
	//console.log(rows);

	 rows.forEach(function (current, index, arr) {
	 	tableChampionship.push(current);
	 	stageList.push(current.stage);
	 	placeList.push(current.place);

	 });
		res.render('volley', { title:"volley", tableChampionship : tableChampionship , teamList : teamList, stageList : stageList, placeList : placeList});

	});





});

// 	con.query("SELECT * FROM championship", function (err, rows, fields) {
// 	//console.log(rows);

// 	// rows.forEach(function (current, index, arr) {
// 	// 	console.log(current);
// 	// });

// });





router.post('/da', function(req, res, next) {

	let stage = req.body.stage;
	let team1 = req.body.team1;
	let team2 = req.body.team2;
	let date = new Date(req.body.date + 'T' + req.body.time + 'Z');
	let place = req.body.place;
	let result = req.body.result;

	con.query("INSERT INTO championship (stage, team1, team2, date, place, result) VALUES ('"+stage+"', '"+team1+"', '"+team2+"', '"+date+"', '"+place+"', '"+result+"');", function (err, rows, fields) {
		res.redirect('/volley');
	});

});




module.exports = router;


// // создать объект для формы
//   var formData = new FormData(document.forms.person);

//   // добавить к пересылке ещё пару ключ - значение
//   formData.append("patronym", "Робертович");

//   // отослать
//   var xhr = new XMLHttpRequest();
//   xhr.open("POST", "/url");
//   xhr.send(formData);




// function postResult(){

// 	var xhr = new XMLHttpRequest();
// 	var sel_cat=document.getElementById("category_id").value;
// 	var result_cat = encodeURIComponent(sel_cat);
//  	xhr.open("POST", "test_selected_category.php", true)
// 	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
// 	xhr.send("result_cat=" + result_cat);
// 	xhr.onreadystatechange = function (){
// 		if(xhr.readyState == 4){
// 			alert(xhr.responseText);
// 			xhr.result_cat;
// 		}
// 	}
// }













