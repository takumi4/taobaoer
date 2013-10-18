/**
 * @component Flowers
 *
 */
Crafty.c('Flowers', {
    init: function(){
        this.requires('Actor, Color, spr_flowers');
    },

    visited: function(){
        this.destroy();
        //this.color('rgb(170, 125, 240)');
        Crafty.trigger('FlowersVisited', this);
    }
});
