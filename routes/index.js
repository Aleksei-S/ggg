var express = require('express');
var router = express.Router();



 const fs = require('fs');

 let rawdata = fs.readFileSync('./file.json');  
 let student = JSON.parse(rawdata);  



// let student = {  
//     name: 'Mike',
//     age: 23, 
//     gender: 'Male',
//     department: 'English',
//     car: 'Honda' 
// };

// let data = JSON.stringify(student);  
// fs.writeFileSync('student-2.json', data); 



var a = "ff";

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: a});

});





router.post('/users/fa', function(req, res, next) {
  res.render('index', { title: req.body.auto});
});



module.exports = router;
