// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/urR596FsU68

// module aliases
var Engine = Matter.Engine,
// Render = Matter.Render,
World = Matter.World,
Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];

var ground;


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  y = height * 0.5;
  
  //Engine.run(engine);
  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(100, height, width, 100, options);

  World.add(world, ground);
}

// function keyPressed() {
//   if (key == ' ') {
//   }
// }


function mousePressed() {
  boxes.push(new Box(mouseX, mouseY, random(50, 50), random(50, 50)));
}


function draw() {
  background(51);
  Engine.update(engine);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
  noStroke(255);
  fill(170);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 100);

  fill(255);
  ellipse(500,200,100);

  fill(255);
  ellipse(400,100,2);

  fill(255);
  ellipse(370,90,1);

  fill(255);
  ellipse(570,110,1);

  fill(255);
  ellipse(500,60,2);
  
  fill(255);
  ellipse(420,40,2);
  
  fill(255);
  ellipse(510,180,2);

  fill(255);
  ellipse(600,100,2);

  fill(255);
  ellipse(580,120,2);

  fill(255);
  ellipse(300,80,2);

}


var number = 0;

document.onclick = function(){
  number ++;
  document.getElementById("clicks").innerHTML = number;

  while (number >= 20) {
    alert('loose!!')
  }

}  