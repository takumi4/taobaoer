define(function(require, exports, module){
    var _ = require('underscore'),
    Backbone = require('backbone'),
    scenes = require('collections/scenes'),
    _htmls = require('templates/home/show.tpl');
    
    var Show = Backbone.View.extend({
        el: $('#wrapper'),
        render: function(){
            $('#inner_background').html('');
            scenes.findByName('blank').load();
            this.$el.html(_htmls);
            
        }
    });

    _.extend(exports, new Show);
});
