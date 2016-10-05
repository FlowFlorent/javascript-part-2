function Warrior(name, gender){
    this.name = name;
    this.gender = gender;
    this.level = 1;
    this.weapon = "wooden sword";
    this.power = Math.floor(Math.random()*100 + 1);
}

Warrior.prototype = {
    fight: function(){
        if (this.gender === "male"){
            console.log(this.name + " rushes to the arena with his " + this.weapon);

        }
        else{
            console.log(this.name + " rushes to the arena with her " + this.weapon);
        }
    },
    faceoff: function(opponent){
            if (opponent.power > this.power){console.log("You fought a hardy battle, but you died against " + opponent.name + " just be better")}
            else if (opponent.power === this.power){console.log("It's a tie! You're both terrible!")}
            else {console.log("You won against " + opponent.name + "! Fight even better next time")}
    }
    
}

var zelda = new Warrior("Zelda", "female");
var link = new Warrior("Link", "male");
var optimus = new Warrior("Optimus", "male");
var decodator = new Warrior("decodator", "male");
var jeanne = new Warrior("Jeanne d'Arc", "female");

zelda.fight();
zelda.faceoff(jeanne);
zelda.faceoff(optimus);