const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preLoad(){
    human=loadAnimation("human.gif")
}
function setup(){
    var canvas = createCanvas (1200,400)
    engine = engine.create();
    world = engine.world 

    
    ground = new ground (600,height,1200,20)

    key = new key ()


}

function draw(){
    var bg = "images/bg.png";
    var line = new line (50,500)
    var line1 = new line1 ()
}
