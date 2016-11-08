var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/:id', function(req, res, next) {
  if('1'==req.params.id){
    res.send('your input is 1, I am working well');
  }
  if('2'==req.params.id){
    res.send('your input is 2, I am working well');
  }
  for(var i=3;i<100;i++){
      if(i==req.params.id){
         res.send('your input is ' + i + ', I am working well , node is so perfect');
      }
  } 
});

module.exports = router;

