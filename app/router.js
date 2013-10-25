define(function(require, exports, module){

    var _ = require('underscore'),
    crafty = require('crafty'),
    backbone = require('backbone'),
    home = require('app/views/home/show');

    var AppRouter = backbone.Router.extend({
        routes: {
            '': 'home',
            'levels/:id': 'level'
        },
        home: function() {
            home.render();
        },
        level: function(id) {
            level.render(id);
        }
    });

    var router;

    exports = _.extend(exports, {
        initialize: function(){
            router = new AppRouter;
            backbone.history.start();
        },
        go: function(to){
            router.navigate(to, {trigger:true, replace:true});
        }
    });

});
