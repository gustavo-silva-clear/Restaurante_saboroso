var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('admin/index');
});

router.get('/login' , function(req ,res , next){

res.render('admin/login');

})

router.post('/login' , function(req, res, next){

    

})

router.get('/contacts', function(req, res, next) {

    res.send('admin/contacts');
    
  });

module.exports = router;

