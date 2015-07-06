(function () {
    var app = angular.module('noteApp', ['ngRoute','notesControllers','wu.masonry','notesDirectives', 'sampleDirectives', 'sampleControllers', 'sampleFilters']);

    app.config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/add-note', {
                controller: 'noteAdd',
                templateUrl: 'views/add-note.html'
            })
            .when('/note/:note_id', {
                controller: 'singleNoteCtrl',
                templateUrl: 'views/single-note.html'
            })
            .when('/notes', {
                controller: 'notesListCtrl',
                templateUrl: 'views/notes.html'
            })
            .when('/samples', {
                controller: 'sampleController',
                templateUrl: 'views/samples.html'
            })
            .otherwise({
                redirectTo: '/notes'
            })

    }]);

})();
