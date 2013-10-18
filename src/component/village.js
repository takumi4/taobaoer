/**
 * @component Flower
 *
 */
Crafty.c('Flower', {
    init: function(){
        this.requires('Actor, Color, spr_flower');
    },

    visited: function(){
        this.destroy();
        //this.color('rgb(170, 125, 240)');
        Crafty.trigger('FlowerVisited', this);
    }
});
