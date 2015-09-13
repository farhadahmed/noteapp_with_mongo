// var Note = require('../models/Note')
// var bodyParser = require('body-parser');

// //This message will log for 500 errors
// var message = 'A 500 error has occurred';

// module.exports = function(router) {
//   router.use(bodyParser.json());
//   //Posts a new note to the note collection
//   router.post('/data', function(req, res) {
//     var newNote = new Note(req.body);
//     newNote.save(function(err, data) {
//       if (err) {
//         console.log(err);
//         return res.status(500).json({msg: message});
//       }
//       res.json(data);
//     });
//   });
//   //Retrieves all note docs/fields from the note collection
//   router.get('/data', function(req, res) {
//     Note.find({}, function(err, data) {
//       if (err) {
//         console.log(err);
//         return res.status(500).json({msg: message});
//       }
//       res.json(data);
//     });
//   });

// };//end router module
