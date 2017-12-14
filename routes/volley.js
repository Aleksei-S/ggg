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

//con.query("SELECT * FROM team", function (err, rows, fields) {
//	console.log(rows);
//	console.log(fields);
//	//res.send(rows);
//})


   res.render('volley', { title:"volley" });

});

module.exports = router;
