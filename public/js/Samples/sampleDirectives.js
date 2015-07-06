(function(){

    var app = angular.module('sampleDirectives', []);

    app.directive('funnyButton', function(){
        return {
            transclude: true,
            scope: {
                atrybut: "@"
            },
            template: '<a class="cb" href="{{atrybut}}"><span><span><span><span><span ng-transclude></span></span></span></span></span></a>'
        };

    });

})();
