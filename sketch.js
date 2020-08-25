var dog,happyDog,database,foodS,foodStock;
var dogImg,happyDogImg
function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
  
}

function setup() {
  database = firebase.database();
  console.log(database);
	createCanvas(500, 500);
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  dog = createSprite (250,250,50,20);
  dog.addImage(dogImg);
  dog.scale = 0.2;

}


function draw() { 
  background(46,139,87);
  fill("white");
  textSize(20);
  text("Press UP_ARROW to feed the dog",110,20);
  text("Remaning food: "+foodS,190,170)
  // text(mouseX+":"+mouseY,mouseX,mouseY);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }
 

  drawSprites();

}
  //add styles here
  function readStock(data){
    foodS = data.val();

  }
  function writeStock(x){
    if(x<=0){
      x = 0;
    }else{
      x=x-1;
    }
    database.ref("/").update({
      Food:x
    })
  }





