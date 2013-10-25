define(function(require, exports, module){
    var $ = require('jquery'),
    _ = require('underscore'),
    viewport = require('game/viewport');


    _.extend(exports, {
        position: {
            absolute: {x: 0, y: 0},
            relative: {x: 0, y: 0}
        },
        onMove: function(e){
            this.position.absolute = {
                x: e.clientX,
                y: e.clientY
            };
            this.position.relative = {
                x: e.clientX - viewport.offset.left,
                y: e.clientY - viewport.offset.top
            };
        },
        initialize: function(){
            var mouse = this;
            $(document).mousemove(function(e){
                mouse.onMove(e);
            });
        }
    });
});
