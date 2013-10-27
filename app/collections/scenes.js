define(function(require, exports, module){
    var _ = require('underscore'),
    Backbone = require('backbone'),
    Scene = require('models/scene'),
    scenesData = require('game/scenes');

    debugger;

    Scenes = Backbone.Collection.extend({
        model: Scene,
        findByName: function(name){
            return this.where({name: name})[0];
        }
    });

    _.extend(exports, new Scenes(scenesData));
});
