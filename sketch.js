var canvas, backgroundImage;
var car1
var car2
var car3
var car4
var cars
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;


function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  console.log(displayWidth)
console.log(displayHeight)
console.log(windowWidth)
console.log(windowHeight)
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

}