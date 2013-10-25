define(function(require, exports, module){
    var _ = require('underscore'),
    Backbone = require('backbone'),
    _htmls = require('templates/home/show.tpl');
    
    var Show = Backbone.View.extend({
        el: $('#wrapper'),
        render: function(){
            $('#inner_background').html('');
            
        }
    });

    _.extend(exports, new Show);
});
