// Dołączenie modułu Mongoose
var mongoose = require('mongoose');

// Utworzenie schematu danych
var NoteSchema = new mongoose.Schema({
    title: String,
    note: String,
    priority: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Note', NoteSchema);