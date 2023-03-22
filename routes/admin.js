var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('admin/index');
});

router.get('login' , function(req ,res , next){

if(!req.session.views) req.session.vies = 0;

console.log(req.session.views++);

res.render('admin/login');

})

router.get('/contacts', function(req, res, next) {

    res.send('admin/contacts');
    
  });

module.exports = router;