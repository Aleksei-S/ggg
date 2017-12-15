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


	var teamList = ["team1","team2","team3","team4"];

//con.query("SELECT * FROM team", function (err, rows, fields) {
//	console.log(rows);
//	console.log(fields);
//	//res.send(rows);
//})


res.render('volley', { title:"volley", teamList : teamList});

});



router.post('/da', function(req, res, next) {
 //res.send("dadada");
 var teamList = ["team1","team2","team3","team4"];
 res.render('volley', { title: "gggggg", teamList : teamList});
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













