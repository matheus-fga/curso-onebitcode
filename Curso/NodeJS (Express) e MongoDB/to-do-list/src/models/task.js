const moongose = require('mongoose');

const taskSchema = moongose.Schema({
  name: {type: String, required: true},
  done: {type: Boolean, default: false},
  checklist: {
    type: moongose.Schema.Types.ObjectId,
    ref: 'Checklist',
    required: true
  }
});

module.exports = moongose.model('Task', taskSchema);