var express    = require('express');
var User       = require('../Models/index').User;
var jsonParser = require('body-parser').json();
var router     = express.Router();

router.route('/')
  .post(jsonParser, function(req, res) {
    var user = req.body.user;
    User.create(user).then(function(createdUser) {
      res.status(201).json({status: 'created', user: createdUser.dataValues});  
    }).catch(function(err) {
      res.status(400).json({status: 'ERROR', message: err});
    });   
  });

router.route('/:id')
  .get(function(req, res) {
    User.find(req.params.id).then(function(user) {
      res.status(200).json({user: user.dataValues});
    },function(err) {
      res.status(404).json({status: 'ERROR', message: err});
    });
  });

module.exports = router;
