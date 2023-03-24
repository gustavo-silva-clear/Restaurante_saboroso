var express = require('express');
var admin = require('./../inc/admin');
var users = require('./../inc/users');
var router = express.Router();

router.use(function (req, res, next) {

  if (['/login'].indexOf(req.url) === -1 && !req.session.user) {

    res.redirect('/admin/login');
  } else {

    next();
  }
});

router.get('/logout', function (req, res, next) {

  delete req.session.user;

  res.redirect('/admin/login');

})


/* GET users listing. */
router.get('/', function (req, res, next) {

  res.render('admin/index');


});

router.get('/login', function (req, res, next) {

  users.render(req, res, null);
 
  res.render('/admin/login');



})

router.post('/login', function (req, res, next) {

  if (!req.body.email) {

    users.render(req, res, "Preencha o campo e-mail!");

  } else if (!req.body.password) {

    users.render(req, res, "Preencha o campo senha!")

  } else {

    users.login(req.body.email, req.body.password).then(user => {

      req.session.user = user;

      res.redirect("/admin")

    }).catch(err => {

      users.render(req, res, err.message || err)


    });

  }


})

router.get('/contacts', function (req, res, next) {

  res.send('admin/contacts');

});

router.get('/emails', function (req, res, next) {

  res.send('admin/emails');

});

router.get('/menus', function (req, res, next) {

  res.send('admin/menus');

});

router.get('/reservations', function (req, res, next) {

  res.send('admin/reservations', admin.getParams(req, { date: {} }));

});

router.get('/users', function (req, res, next) {

  res.send('admin/users');

});

module.exports = router;

