var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
    title: String,
    note: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Note', NoteSchema);