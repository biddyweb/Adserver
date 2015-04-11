var express = require('express');
var urlEncoded = require('body-parser').urlencoded({extended: false});
var router = express.Router();
var ActionType = require('../models/index.js').ActionType;

router.route('/')
  .post(urlEncoded, function(req, res){
    var actionType = req.body.actionType;
    ActionType.create(actionType).then(function(createdActionType) {
      res.status(201).json({status: 'created', actionType: createdActionType.dataValues});
    }, function(err){
      res.status(404).json({status: 'ERROR', message: err});
    });
  });

router.route('/:id')
  .get(function(req, res) {
    ActionType.find(req.params.id).then(function(actionType) {
      res.status(200).json({actionType: actionType.dataValues});
    },function(err) {
      res.status(404).json({status: 'ERROR', message: err});
    });
  })
  .put(urlEncoded,function(req, res) {
    ActionType.find(req.params.id).then(function(actionType) {
      actionType.update(req.body.actionType).then(function(updatedActionType) {
        res.status(200).json({status: 'updated'});
      }).catch(function(err){
        res.status(404).json({status: 'ERROR', message: err});
      });
    });
  })
  .delete(function(req,res) {
    ActionType.find(req.params.id).then(function(toBeDeletedActionType) {
      toBeDeletedActionType.destroy();
    res.status(200).json({status: 'deleted'});
    }, function(err) {
      res.status(404).json({status: 'ERROR', message: err});
    });
    
  });


module.exports = router;
