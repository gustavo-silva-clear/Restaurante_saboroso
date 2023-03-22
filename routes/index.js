var express = require('express');
var reservations = require('./../inc/reservations')
var router = express.Router();
var conn = require('./../inc/db');

/* GET home page. */

router.get('/', (req, res, next) => {

  conn.query(
    "SELECT * FROM tb_menus ORDER BY title",
    (err, results, fields) => {

      res.render('index', Object.assign({}, defaults, {
        title: 'Restaurante Saboroso!',
        menus: results,
        headerIndex: true
      }));

    }
  );

});


router.get('/contacts', function (req, res, next) {

  res.render('contacts', {
    title: 'Contatos - Restaurante Saboro',
    background: 'images/img_bg_3.jpg',
    h1: 'Diga um oi!'

  });

})

router.get('/menus', function (req, res, next) {

  conn.query(
    "SELECT * FROM tb_menus ORDER BY title",
    (err, results, fields) => {

      res.render('menu', Object.assign({}, defaults, {
        title: 'Menu - Restaurante Saboroso!',
        header: {
          background: 'images/img_bg_1.jpg',
          title: 'Saboreie nosso menu!'
        },
        menus: results
      }));

    });

})

router.get('/reservations', function (req, res, next) {

  reservations.render(req, res)

  })

router.post('/reservations', function (req, res, next) {

  if (!req.body.name) {

  reservations.render(req, res , "Digite o nome");
  

  } else if (!req.body.email) {

    reservations.render(req, res ,"Digite o email");
  

  } else if (!req.body.people) {

    reservations.render(req, res ,"insira a quantidade de pessoas");

  }
  else if (!req.body.date) {

    reservations.render(req, res , "Digite a data");

  } else if (!req.body.time) {

    reservations.render(req, res , "Digite o horario");

  } else {

    res.send(req.body);

  }
})

router.get('/services', function (req, res, next) {

  res.render('services', {
    title: 'Restaurante Saboro',
    background: 'images/img_bg_1.jpg',
    h1: 'É um prazer poder servir!'

  });

})
module.exports = router;
