function Tile(type){
    this.type = type;
    this.isWalkable = function(){
        if (this.type === "grass" || this.type === "sand"){
            return true;
        } else { return false; }
    }
}



var beach = new Tile("sand");

console.log(beach.isWalkable());

function randomType(){
    var type = Math.floor(Math.random()*3);
    var types = ["sand", "grass", "water"];
    return types[type];
}

function Map(width, height){
    this.width = width;
    this.height = height;
    this.tiles = new Array(this.width);
    for (var i = 0; i < this.width; i++){
        this.tiles[i] = new Array(this.height);
    }
    for (var i = 0; i < this.width; i++){
        for (var j = 0; j < this.height; j++){
            this.tiles[i][j] = new Tile(randomType());
        }
    };
    this.getWalkableOutput = function(){
        for (var i = 0; i < width; i++){
            var line = "";
            for (var j = 0; j < height; j++){
                if (this.tiles[i][j].isWalkable()){line += "o"}
                else {line += "x"}
            }
            console.log(line);
        }
    }
    this.getAsciiOutput = function(){
        for (var i = 0; i < width; i++){
            var line = "";
            for (var j = 0; j < height; j++){
                if (this.tiles[i][j].type === "sand"){line += ":"}
                else if (this.tiles[i][j].type === "grass"){line += "*"}
                else {line += "~"};
            }
            console.log(line);
        }        
    }
}

var mordor = new Map(100, 100);

mordor.getWalkableOutput();
mordor.getAsciiOutput();