var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.post('/calculate', function(req, res){

  var result = 0;

//Cases according operations
  //var result takes the values of the input and does the operations

  //$('.operators').click(function(){
    switch(req.body.operator){
      case 'addition': res.json(parseInt(req.body.firstNumber) + parseInt(req.body.secondNumber));
        //console.log(result);
        break;
      case 'subtraction': res.json(parseInt(req.body.firstNumber) - parseInt(req.body.secondNumber));
        //console.log(result);
        break;
      case 'multiplication': res.json(parseInt(req.body.firstNumber) * parseInt(req.body.secondNumber));
        //console.log(result);
        break;
      case 'division': res.json(parseInt(req.body.firstNumber) / parseInt(req.body.secondNumber));
        //console.log(result);
        break;

    }
});



module.exports = router;
