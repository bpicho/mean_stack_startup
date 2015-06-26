var mongoose = require('mongoose');
var note = require('../models/note');

module.exports = function(router) {
    /**
     * Fetch all notes
     */
    router.get('/notes', function (req, res) {
        note.find(function (err, notes) {
            if (err) return next(err);
            res.json(notes);
        });
    });

    /**
     * Create new note
     */
    router.post('/note/', function (req, res) {
        note.create(req.body, function (err, note) {
            if (err) return next(err);
            res.json(note);
        });
    });

    /**
     * Fetch single note
     */
    router.get('/note/:note_id', function (req, res) {
        note.findById(req.params.note_id, function (err, note) {
            if (err) return next(err);
            res.json(note);
        });
    });

    /**
     * Update note
     */
    router.put('/note/:note_id', function (req, res) {
        note.findByIdAndUpdate(req.params.note_id, req.body, function (err, note) {
            if (err) return next(err);
            res.json(note);
        });
    });

    /**
     * Delete note
     */
    router.delete('/note/note_id', function (req, res) {
        note.findByIdAndRemove(req.params.note_id, req.body, function (err, note) {
            if (err) return next(err);
            res.json(note);
        });
    });

    return router;
};

//res.download()	Prompt a file to be downloaded.
//res.end()	End the response process.
//res.json()	Send a JSON response.
//res.jsonp()	Send a JSON response with JSONP support.
//res.redirect()	Redirect a request.
//res.render()	Render a view template.
//res.send()	Send a response of various types.
//res.sendFile	Send a file as an octet stream.
//res.sendStatus()	Set the response status code and send its string representation as the response body