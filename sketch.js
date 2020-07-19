var allPlayers;
var canvas,bgIMG;
var database,playerCount;
var gameState=0;
var form,player,game;
var car1,car2,car3,car4,cars;
var track,car1IMG,car2IMG,car3IMG,car4IMG;

function preload(){
    track=loadImage("images/track.jpg");
    car1IMG=loadImage("images/car1.png");
    car2IMG=loadImage("images/car2.png");
    car3IMG=loadImage("images/car3.png");
    car4IMG=loadImage("images/car4.png");
    ground=loadImage("images/ground.png");
}

function setup(){
    createCanvas(displayWidth-10,displayHeight-100);
    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();

   
}

function draw(){
  if(playerCount===4){
      game.update(1);
  }
  if(gameState===1){
      clear();
      game.play();
  }
  if(gameState===2){
   game.end();
  }
}

