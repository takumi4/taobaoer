define(function(require, exports, module){
    var _ = require('underscore'),
    Backbone = require('backbone'),
    Asset = require('models/asset'),
    assetsData = require('game/assets');


    var Assets = Backbone.Collection.extend({
        model: Asset,
        findByScene: function(scene){
            return this.filter(function(model){
                return _.contains(model.get('scenes'), scene);
            });
        },
        loadByScene: function(scene, callback){
            var assets = this.findByName(scene);

            var callbacks = {
                onLoad: callback || function(){},
                onProgress: function(e){},
                onError: function(e){}
            };

            return callbacks.onLoad();
        }
    });


    return new Assets(assetsData);

});
