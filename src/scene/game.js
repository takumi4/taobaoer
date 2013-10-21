/**
 * @scene Game
 *
 */
Crafty.scene('Game', function(){

    this.occupied = new Array(Game.map_grid.width);

    for(var x=0; x<Game.map_grid.width; x++){
        this.occupied[x] = new Array(Game.map_grid.height);
        for(var y=0; y<Game.map_grid.height; y++){
            this.occupied[x][y] = 'none';
        }
    }

    this.player = Crafty.e('PlayerCharacter').at(5, 5);
    this.occupied[this.player.at().x][this.player.at().y] = 'character';



    for(var x=0; x<Game.map_grid.width; x++){
        for(var y=0; y<Game.map_grid.height; y++){
            var at_edge = x == 0 || x == Game.map_grid.width - 1 || y == 0 || y == Game.map_grid.height - 1;

            if(at_edge){
                Crafty.e('Tree').at(x, y);
                this.occupied[x][y] = 'tree';

            }
        }

    }

    max_villages = 20;
    for(var x=0; x<Game.map_grid.width; x++){
        for(var y=0; y<Game.map_grid.height; y++){
            if(Math.random() < 0.22){

                if(Crafty('Flower').length < max_villages && this.occupied[x][y] == 'none'){
                    Crafty.e('Flower').at(x, y);
                    this.occupied[x][y] = 'flower';
                }
            }
        }
    }
    for(var x=0; x<Game.map_grid.width; x++){
        for(var y=0; y<Game.map_grid.height; y++){
            if(Math.random() < 0.22){

                if(Crafty('Flowers').length < max_villages && this.occupied[x][y] == 'none'){
                    Crafty.e('Flowers').at(x, y);
                    this.occupied[x][y] = 'flowers';
                }
            }
        }
    }



    function isVisited(occupiedMap, x, y){

        var testMap = [];

        occupiedMap.forEach(function(row, idx){
            testMap[idx] = row.concat();
        });

        console.log(testMap);



        var maxX = occupiedMap.length,
        maxY = occupiedMap[x].length;

        return ture;

    }

    
    for(var x=0; x<Game.map_grid.width; x++){
        for(var y=0; y<Game.map_grid.height; y++){

            if(Math.random() < 0.26 && this.occupied[x][y] == 'none'){
                Crafty.e('Bush').at(x, y);
                this.occupied[x][y] = 'bush';
            }
        }
    }

    
    function visit(){
        console.log(Crafty('Flowers').length , Crafty('Flower').length);
        if(!(Crafty('Flowers').length + Crafty('Flower').length)){
            Crafty.scene('Victory');
        }
    }
    this.show_visited = this.bind('FlowerVisited', visit);
    this.show_visited = this.bind('FlowersVisited', visit);

}, function(){
    this.unbind('FlowerVisited', this.show_visited);
    this.unbind('FlowersVisited', this.show_visited);
});
