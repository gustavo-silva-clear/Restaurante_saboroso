var conn = require('./../inc/db')
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  conn.query(` SELECT * FROM tb_menu ORDER BY title` , (err , results) => {

    if(err) {

      console.log(err);
    }

    res.render('index', { title: 'Restaurante Saboro' , menus: results });

  })
  
});

module.exports = router;
