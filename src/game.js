/**
 * Game
 */
Game = {
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

    start: function(){
        Crafty.init(Game.width(), Game.height());
        Crafty.background('rgb(249, 223, 125)');

        Crafty.scene('Loading');

    }
}
var $textCss = {
    'font-size': '24px',
    'color': 'red',
    'text-align': 'center'
};
