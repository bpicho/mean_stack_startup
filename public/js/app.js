(function () {
    var app = angular.module('noteApp', ['ngRoute','notesService','wu.masonry','exampleDirectives']);

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
            .otherwise({
                redirectTo: '/notes'
            })


    }]);
    

    app.controller('notesListCtrl', ['$scope','notes', function ($scope, notes) {

        $scope.notes = {};

        $scope.reloadProducts = function(){
            notes.getAllNotes(
                function (data) {
                    $scope.notes = data;
                },
                function (data, status) {
                    console.log(data);
                    console.log(status);
                }
            );
        }

        $scope.reloadProducts();


        $scope.deleteNote = function (id) {
            if(!confirm('Czy na pewno chcesz usunąć tą notatkę?')) return;
            notes.deleteNote(id, function () {
                $.growl.error({title: "Good Job!", message: "You've successfully removed note!"});
                $scope.reloadProducts();
            });

        };


        //sorting

        $scope.orderByProperty = 'created_at';
        $scope.orderByDir = false;

        $scope.changeOrder = function(sortType){

            if($scope.orderByProperty == sortType) {
                $scope.orderByDir = !$scope.orderByDir ;
            }else{
                $scope.orderByProperty = sortType;
                $scope.orderByDir = false;
            }

        };



    }]);

    app.controller('singleNoteCtrl', ['$scope','$routeParams', 'notes','$location',  function ($scope, $routeParams, notes, $location) {

        notes.getNote(
            $routeParams.note_id, function (data) {
                $scope.formData = data;
            },
            function (data, status) {
                console.log(data);
                console.log(status);
            }
        );

        $scope.updateNote = function () {
            notes.updateNote($routeParams.note_id, $.param($scope.formData), function () {
                $.growl.warning({title: "Good Job!", message: "You've successfully updated note!"});
            });
        };

        $scope.deleteNote = function (id) {

            if(!confirm('Czy na pewno chcesz usunąć tą notatkę?')) return;

            notes.deleteNote(id, function () {
                $.growl.error({title: "Good Job!", message: "You've successfully removed note!"});
                $location.path('/notes' );
            });

        };


    }]);


    app.controller('noteAdd', ['$scope','notes', '$location', function ($scope, notes, $location) {

        $scope.formData = {
            priority: 'priority3'
        };

        $scope.addNewNote = function () {
            notes.postNote($.param($scope.formData), function () {
                $.growl.notice({title: "Good Job!", message: "You've successfully added note!"});
                $location.path('/notes' );
            });
        };

    }
    ]);


})();
