const moongose = require('mongoose');

const checklistSchema = moongose.Schema({
  name: {type: String, required: true},
  tasks: [{type: moongose.Schema.Types.ObjectId,
           ref: 'Task'}]
});

module.exports = moongose.model('Checklist', checklistSchema);