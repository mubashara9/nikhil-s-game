const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var bg_img, sky_img, bg, main, sky;
var redballoon, yellowballoon, blueballoon, purpleballoon, greenballoon, pinkballoon;
var startbtn, mutebtn;
//var balloons;
var gameState = "serve";

function preload() {
  bg_img = loadAnimation("./assets/bg_main.png");
  sky = loadAnimation("./assets/transparent.png");
  sky_img = loadImage("./assets/skybg.png");
}

function setup() {
  var ismobile = /iPhone|iPad|iPod|Android|/i.test(navigator.userAgent);
  if (ismobile) {
    canW = displayWidth;
    canH = displayHeight;
    createCanvas(displayWidth + 80, displayHeight);
  } else {
    canW = windowWidth;
    canH = windowHeight;
    createCanvas(windowWidth, windowHeight);
  }

  frameRate(80);

  engine = Engine.create();
  world = engine.world;

  //balloons = createGroup();

  main = createSprite();

  main.addAnimation('skyA',sky);
  main.addAnimation('bg', bg_img);

  redballoon = new Red_Balloon(350,200,width/2, height/2);
  World.add(world, redballoon.body);

}

function draw() {
  background(51);
  Engine.update(engine);
  image(sky_img, 0, 0, displayWidth + 80, displayHeight);

  /*if (gameState === "serve") {
    startbtn = createImg("./assets/start.png");
    startbtn.position(width / 3.5, height / 2.5);
    startbtn.size(220, 100);
    //startbtn.mouseClicked(balloon);
    main.changeAnimation('bg');
  }*/

  if (gameState === "play") {
    main.changeAnimation('skyA');
  }
  redballoon.show();

  
  console.log(redballoon.body.position.y)
  //console.log(gameState);

  
  drawSprites();

}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setVelocity(redballoon.body, {x: 2, y: -6 });
    console.log(redballoon.body.position.y)
  }
  
}