var bird;
var bg;

var birdImg;

var obstacle_1;
var obstacle_2;
var obstacle_3;

function preload(){
    bg = loadImage("bg_image.jpg");
    birdImg = loadAnimation("bird_1.png","bird_2.png","bird_3.png","bird_4.png");

    obstacle_1 = loadImage("Obstacle_1.png");
    obstacle_2 = loadImage("Obstacle_2.png");
    obstacle_3 = loadImage("Obstacle_3.png");
}
    
    
function setup() {
    createCanvas(windowWidth,windowHeight);
    bird = createSprite(windowWidth-1000,windowHeight/2,40,40);
    bird.addAnimation('bird',birdImg);
}

function draw() {
    background(bg);

    spawnObstacle();

    drawSprites();
}

function spawnObstacle() {
    if (frameCount % 100 === 0){
        var obstacle = createSprite(1500,Math.round(random(100,500)),200,200);
        obstacle.velocityX = -6;
        
        var rand = Math.round(random(1,3));
        switch(rand){
            case 1: obstacle.addImage(obstacle_1);
                    break;
            case 2: obstacle.addImage(obstacle_2);
                    break;
            case 3: obstacle.addImage(obstacle_3);
                    break;
            default: break;
        }
       


    }
}