/**
 * @component PlayerCharacter
 *
 */
Crafty.c('PlayerCharacter', {
    init: function(){
        this.requires('Actor, Fourway, Color, Collision, spr_taobao')
        .fourway(4)
        .color('rgba(1,1,1,0)')
        .onHit('Flower', this.visitFlower)
        .onHit('Flowers', this.visitFlowers)
        .stopOnSolids();
    },

    stopOnSolids: function(){
        this.onHit('Actor', this.stopMovement);
        return this;
    },

    stopMovement: function(){
        this._speed = 0;
        if(this._movement){
            this.x -= this._movement.x;
            this.y -= this._movement.y;
        }
    },

    visitFlower: function(data){
        flower = data[0].obj;
        flower.visited();
    },

    visitFlowers: function(data){
        flowers = data[0].obj;
        flowers.visited();
    }

});

