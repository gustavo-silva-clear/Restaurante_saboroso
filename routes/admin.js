var express = require('express');
const user = require('../inc/users');
var users = require('../inc/users')
var router = express.Router();

router.use(function (req, res, next) {

  if (!req.session.user) {

    res.redirect("/admin/login");
  } else {

    next();
  }
})

/* GET users listing. */
router.get('/', function (req, res, next) {

    res.send('admin/index');
  
});

router.get('/login', function (req, res, next) {

  users.render(req, res, null);

})

router.post('/login', function (req, res, next) {

  if (!req.body.email) {

    users.render(req, res, "Preencha o campo e-mail!");

  } else if (req.body.password) {

    users.render(req, res, "preencha o campo senha!")

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

module.exports = router;

