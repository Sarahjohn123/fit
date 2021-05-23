const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    bg1Img=loadImage("sunrise1.png");
    bg2Img=loadImage("sunrise2.png");
    bg3Img=loadImage("sunrise10.png");
    bg4Img=loadImage("sunrise11.png");
    bg5Img=loadImage("sunrise12.png");
}


function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

  

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    var response =await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
      var responseJSON=await response.json;


      var datetime=responsJSON.datetime;
      var hour=datetme.slice(11,13);


      if(hour>=04 && hour<=06){
          bg="sunrise1.png";
      }else if(hour>=06 &&  hour<=08){
          bg="sunrise2.png";
      }else if(hour>=08 && hour<=10){
          bg="sunrise10.png";
      }else if(hour>=10 && hour<=12){
          bg="sunrise11.png";
      }else {
          bg="sunrise12.png";
      }
      backgroundImg=loadImage(bg);


}
