var mouse, mouse1img, mouse2img, mouse3img;
var cat, cat1img, cat2img, cat3img;
var bg;

function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    cat1img = loadImage("images/cat1.png");
    cat2img = loadAnimation("images/cat2.png", "images/cat3.png");
    cat3img = loadAnimation("images/cat4.png");
    mouse1img = loadImage("images/mouse1.png");
    mouse2img = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouse3img = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   mouse = createSprite(200, 600);
   mouse.addImage(mouse1img);
   mouse.addAnimation("movingMouse", mouse2img);
   mouse.addAnimation("mouseMirror", mouse3img);
   mouse.scale = 0.15;

   cat = createSprite(800, 600);
   cat.addImage(cat1img);
   cat.addAnimation("movingCat", cat2img);
   cat.addAnimation("sittingCat", cat3img);
   cat.scale = 0.15;

   mouse.debug = false;
   mouse.setCollider("rectangle", 0, 0, 600, 600);

   cat.debug = false;
   cat.setCollider("rectangle", 0, 0, 700, 600);
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    if(keyDown(LEFT_ARROW)) {
        
        cat.changeAnimation("movingCat", cat2img);
        cat.velocityX = -2;

       mouse.changeAnimation("movingMouse", mouse2img);

    }

    if(cat.isTouching(mouse)) {
        mouse.changeAnimation("mouseMirror", mouse3img);
        cat.changeAnimation("sittingCat", cat3img);
        cat.velocityX = 0;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
