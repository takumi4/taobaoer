/**
 * define
 */
define(function(require, exports, module){

    var _ = require('underscore'),
    crafty = require('crafty'),
    router = require('router'),
    gameConfig = require('game/config'),
    viewport = require('game/viewport'),
    mouse = require('game/mouse');


    var app = {
        initialize: function(){
            crafty.init(viewport.width(), viewport.height());

            viewport.initialize();
            mouse.initialize();
            router.initialize();
        }
    };

    exports = _.extend(exports, app);


});
