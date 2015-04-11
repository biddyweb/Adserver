var express    = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var router     = express.Router();
var _          = require('underscore');
var db         = require('./models/index');
var User       = db.User;
var ActionType = db.ActionType;

var paramsSanitizer = function(req, res, next) {
  var userAction        = req.body.userAction;
  req.body.userId       = userAction.userId;
  req.body.actionTypeId = userAction.actionTypeId;
  req.body.userAction   = _.omit(userAction, ['userId', 'actionTypeId']);
  next();
}

router.route('/')
  .post(jsonParser, UserActionBuilder, function(req, res){
    var userAction = req.body.userAction;
    var userActor;
    User.find(req.body.userId).then(function(user) {
      userActor = user;
      return ActionType.find(req.body.actionTypeId);
    }).then(function(action) {
      return userActor.addActionType(action)
    }).then(function(userAction){
      res.status(201).json({status: 'created', userAction: userAction});
    }).catch(function(err) {
      res.status(400).json({status: 'ERROR', message: err});
    });
  });

module.exports = router;
