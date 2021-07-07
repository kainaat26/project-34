//Create variables here
var dog, dogImg, happydog,database, foodS , foodStock;
function preload()
{
	//load images here
  happydog = loadImage("images/dogImg1.png");
  dogImg = loadImage("images/dogImg.png");
  
}

function setup() {
	createCanvas(500, 500);

 dog = createSprite(250,250,20,20);
dog.addImage(dogImg);
dog.scale = 0.25;

  database = firebase.database();
  foodStock = database.ref("/food");
  foodStock.on("value", readStock);
}


function draw() {  
  background("green")
  textSize(20)
  fill(255)
  text("Note:Press Up Arrow to feed Drago Milk",50,50);
  text("Remaining Bottle:"+ foodS,170,400);
  

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happydog)
  }
  drawSprites();
  //add styles here

}
function readStock(data){
foodS = data.val();

}

function writeStock(x){
if(x<-0){
  x-0;
}else{
  x=x -1
}

database.ref('/').update({
  food:x
})

}



