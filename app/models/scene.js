define(function(require, exports, module){

    var _ = require('underscore'),
    Backbone = require('backbone'),
    Crafty = require('crafty'),
    assets = require('collections/assets');

    var Scene = Backbone.Model.extend({
        defaults: {
            optionsBuffer: {},
            init: function(){},
            uninit: function(){}
        },
        initialize: function(){
            var init = this.get('init'),
            scene = this;


            return Crafty.scene(this.get('name'), function(){
                init(scene.optionBuffer);
            }, this.get('uninit'));

        },
        load: function(opitons){
            this.optionsBuffer = options || {};

            var sceneName = this.get('name');
            assets.loadByScene(sceneName, function(){
                Crafty.scene(sceneName);
                this.optionsBuffer = {};
            });


        }
    });

    _.extend(exports, Scene);
    


});
