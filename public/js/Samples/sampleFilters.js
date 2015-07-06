(function(){

    var app = angular.module('sampleFilters', []);

    app.filter('maskEmail', function () {

        return function (email, length, maskSign) {

            email = email||'';
            length = length||3;
            maskSign = maskSign||'*';

            var parts = email.split('@');
            var masked = parts[0].substr(0, length);
            var maskLength = parts[0].length - length;

            for(var i=0; i<maskLength; i++){
                masked += maskSign;
            }

            parts[0] = masked;

            return parts.join('@');
        };

    });


})();
