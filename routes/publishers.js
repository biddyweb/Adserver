var express  = require('express');
var urlEncoded = require('body-parser').urlencoded({ extended: false });
var router = express.Router();
var Publisher = require('../Models/index.js').Publisher;

router.route('/')
  .post(urlEncoded, function(req, res) {
    var publisher = req.body.publisher;
    Publisher.create(publisher).then(function(createdPublisher) {
      res.status(201).json({status: 'created', publisherId: createdPublisher.dataValues.id});
    }, function(err) {
      res.status(404).json({status: 'ERROR', message: err});
    });
  });

router.route('/:id')
  .get(function(req, res) {
    Publisher.find(req.params.id)
      .then(function(publisher) {
        if(!publisher) return res.sendStatus(404);
        res.status(200).json({ publisher: publisher });
      }).catch(function(err) {
        res.status(404).json({ status: 'ERROR', message: err});
      });
  });
module.exports = router;
