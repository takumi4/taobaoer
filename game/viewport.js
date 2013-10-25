define(function(require, exports, module){
    var $ = require('jquery'),
    _ = require('underscore');


    _.extend(exports, {
        map_grid: {
            width: 24,
            height: 16,
            tile: {
                width: 32,
                height: 32
            }
        },

        width: function(){
            return this.map_grid.width * this.map_grid.tile.width;
        },

        height: function(){
            return this.map_grid.height * this.map_grid.tile.height
        },

        initialize: function(){
            var viewport = this,
            $viewport = $('#cr-stage, #wrapper, #inner_background'),
            $outer = $('#outer_background');


            function replaceViewport(){
                if(viewport.height > $('body').height()){
                    
                }

                viewport.offset = $('#cr-stage').offset();
            }

            $(replaceViewport);
            $(window).resize(replaceViewport);
        }
    });

});
