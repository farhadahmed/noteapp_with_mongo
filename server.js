'use strict';
var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var Note = require('./models/Note');

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/notesapp_development');

var app = express();
var router = express.Router();
router.use(bodyparser.json());

router.get('/notes', function(req, res) {
  //Empty object tells mongoose to find every note. Also, data will be an array.
  Note.find({}, function(err, data) {
    if (err) return res.status(500).send({'msg': 'could not retrieve notes'});

    res.json(data);
  });
});

router.post('/notes', function(req, res) {
  var newNote = new Note(req.body);
  newNote.save(function(err, note) {
    if (err) return res.status(500).send({'msg': 'could not save note'});

    res.json(note);
  });
});

router.put('/notes/:id', function(req, res) {
  var updatedNote = req.body;
  delete updatedNote._id;
  Note.update({_id: req.params.id}, updatedNote, function(err) {
    if (err) return res.status(500).send({'msg': 'could not update note'});

    res.json(req.body);
  });
});

app.use('/api/v1', router);

app.listen(process.env.PORT || 3000, function() {
  console.log('server listening');
});

// 'use strict';
// var express = require('express');
// var mongoose = require('mongoose');
// var bodyparser = require('body-parser');
// var app = express();

// var dbConnect = process.env.MONGOLAB_URI ||
//   'mongodb://localhost/data';
// var port = process.env.PORT || 3000;

// var notesRoutes = express.Router();

// mongoose.connect(dbConnect);

// // Require routes function.
// require('./routes/notesRoutes')(notesRoutes);
// // app.use('path', function)
// app.use('/', notesRoutes);

// app.listen(port, function() {
//   console.log("Server running on port " + port);
// });
