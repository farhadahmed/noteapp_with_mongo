var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var noteSchema = new Schema({
  note: {type: String, required: 'note required'}
});

module.exports = mongoose.model('Note', noteSchema);
