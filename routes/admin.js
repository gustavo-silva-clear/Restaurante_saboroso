var express = require('express');
const user = require('../inc/users');
var users = require('../inc/users')
var router = express.Router();

router.use(function (req, res, next) {

  if (['/login'].indexOf(req.url) === -1 && !req.session.user) {

    res.redirect("/admin/login");
  } else {

    next();
  }
});

router.use(function(req, res ,next){

req.menus = admin.getMenus();

next(); 

})

router.get("/logout" , function(req, res , next){

delete req.session.user;

res.redirect("/admin/login");

})

/* GET users listing. */
router.get('/', function (req, res, next) {

    res.send('admin/index' , {

      menus: req.menus

    });

  
});

router.get('/login', function (req, res, next) {

  users.render(req, res, null , {

    menus: req.menus

  });

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

  res.send('admin/contacts' , {

    menus: req.menus

  });

});

router.get('/emails', function (req, res, next) {

  res.send('admin/emails' , {

    menus: req.menus

  });

});

router.get('/menus', function (req, res, next) {

  res.send('admin/menus' , {

    menus: req.menus

  });

});

router.get('/reservations', function (req, res, next) {

  res.send('admin/reservations' , {
    date:{},
    menus: req.menus

  });

});

router.get('/users', function (req, res, next) {

  res.send('admin/users' , {

    menus: req.menus

  });

});

module.exports = router;

