(function(){

    var app = angular.module('notesDirectives', []);

    app.directive('singleNote', function(){

        return {
            /*template: '<h3><a href="#/note/{{note._id}}">{{note.title}}</a></h3><p>{{note.note}}</p><div class="delete col-md-12"><span ng-click="deleteNote(note._id)" class="glyphicon glyphicon-trash" aria-hidden="true"></span> </div> <div>{{note.created_at | date:"yyyy-MM-dd HH:mm:ss"}} </div>'*/
            templateUrl: 'views/templates/note-template.html'
        };

    });

})();
