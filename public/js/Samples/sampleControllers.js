(function(){

    var app = angular.module('sampleControllers', []);

    app.controller('sampleController', ['$scope', function ($scope) {

        $scope.data = {
            imie: 'Jan',
            nazwisko: 'Kowalski',
            email: 'jan.kowalski@mail.com'
        };

        $scope.changeData = function(){
            $scope.data = {
                imie: 'Paweł',
                nazwisko: 'Nowak',
                email: 'pawel.nowak@mail.com'
            };
        }

        $scope.consoleLogData = function(){
            console.log($scope.data);
        }

    }
    ]);


})();

