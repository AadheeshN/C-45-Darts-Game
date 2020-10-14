const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var dartObject, launcherObject, targetObject, backgroundImage, timerObject;

function preload() {
  backgroundImage = loadImage("assets/arenaBackground.jpg");
}

function setup() {
  var canvas = createCanvas(1200,620);
  engine = Engine.create();
  world = engine.world;

  dartObject = new Dart(200, 300, 100, 100);

  launcherObject = new Launcher(dartObject.body, {x: 200, y: 300});

  targetObject = new Target(900, 300, 200, 200);

  timerObject = 20;

  createTimer();
  
}

function draw() {
  background(backgroundImage);  
  Engine.update(engine);

  dartObject.display();
  launcherObject.display();
  targetObject.display();

  textSize(30);
  fill(255);
  text("Time Left: " + timerObject, 500, 100);

}

function mouseDragged() {
  Matter.Body.setPosition(dartObject.body, {x: mouseX , y: mouseY});
}

function mouseReleased() {
  launcherObject.fly();
}

async function getTime() {
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
}

function createTimer(){
  var timeleft = 20;
  var downloadTimer = setInterval(function(){

  if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  
  document.getElementById("progressBar").value = 20 - timeleft;
  timeleft -= 1;
}, 2000);
}