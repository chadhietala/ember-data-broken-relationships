module.exports = function(app) {
  var express = require('express');
  var activitiesRouter = express.Router();

  activitiesRouter.get('/', function(req, res) {
    res.send({
      "activities": [
        {id: 1, activityItem: { type: 'memberUpdate', id: 1} },
        {id: 2, activityItem: { type: 'imageShare', id: 1} }
      ],
      "member_updates": [
        {id: 1, name: 'Chad', template: 'member update'}
      ],
      "image_shares": [
        {id: 1, image: 'http://dummyimage.com/100x100/000/fff', template: 'image share'}
      ]
    });
  });

  activitiesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  activitiesRouter.get('/:id', function(req, res) {
    res.send({
      "activities": {
        "id": req.params.id
      }
    });
  });

  activitiesRouter.put('/:id', function(req, res) {
    res.send({
      "activities": {
        "id": req.params.id
      }
    });
  });

  activitiesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/activities', activitiesRouter);
};
