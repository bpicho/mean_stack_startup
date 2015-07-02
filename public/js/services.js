(function(){

    var app = angular.module('notesService', []);

    app.factory('notes', ['$http','$location', function($http, $location){

        var _postNote = function (formData, success) {

            success = success||function(){};
            $http({
                method: 'POST',
                url: '/note',
                data: formData,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data) {
                success(data);
            });
        };

        var _updateNote = function (note_id, formData, success) {

            success = success||function(){};
            $http({
                method: 'PUT',
                url: '/note/'+note_id,
                data: formData,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data) {
                success(data);
            });
        };

        var _getNote = function (note_id, success, error) {

            success = success||function(){};
            error = error||function(){};

            $http.get('note/'+note_id)
                .success(function (data) {
                    success(data);
                })
                .error(error);

        };

        var _getAllNotes= function (success, error) {

            success = success||function(){};
            error = error||function(){};

            $http.get('notes/')
                .success(function (data) {
                    success(data);
                })
                .error(error);

        };


        var _deleteNote = function (note_id, success) {
            success = success||function(){};
            $http.delete('note/'+note_id)
                .success(success);

        };


        return {
            postNote: _postNote,
            getNote: _getNote,
            deleteNote: _deleteNote,
            getAllNotes: _getAllNotes,
            updateNote: _updateNote
        };
    }]);


})();