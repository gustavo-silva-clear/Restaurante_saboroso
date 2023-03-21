var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function (req, res, next) {


  res.render('index', { title: 'Restaurante Saboro'});

});

router.get('/contacts', function (req, res, next) {

  res.render('contacts', {
    title: 'Contatos - Restaurante Saboro',
    background: 'images/img_bg_3.jpg',
    h1: 'Diga um oi!'

  });

})

router.get('/menus', function (req, res, next) {

  res.render('menus', {
    title: 'Menus - Restaurante Saboro',
    background: 'images/img_bg_1.jpg',
    h1: 'Saboreie nosso menu!'

  });

})

router.get('/reservations', function (req, res, next) {

  res.render('reservations', {
    title: 'Reservas -  Restaurante Saboro',
    background: 'images/img_bg_2.jpg',
    h1: 'Reserve uma Mesa!'

  });

})

router.get('/services', function (req, res, next) {

  res.render('services', {
    title: 'Restaurante Saboro',
    background: 'images/img_bg_1.jpg',
    h1: 'É um prazer poder servir!'

  });

})
module.exports = router;
