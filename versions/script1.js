const canvas =document.getElementById('canvas1')
const ctx = canvas.getContext("2d")

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = "./asset/shadow_dog.png";
const spritWidth =575;
const spritHeight =523;
let frameX=0;
let frameY=4;
let gameFrame = 0;
const staggerFrames = 4;


function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
    
    // ctx.fillRect(100,50,100,100);
    //ctx.drawImage(playerImage,sx,sy,sw,sh,dx,dy,dw,dh)

    ctx.drawImage(playerImage,frameX*spritWidth,frameY*spritHeight,
    spritWidth,spritHeight,0,0,spritWidth,spritHeight);
   if (gameFrame % staggerFrames==0 ){
    if(frameX < 6)frameX++;
    else frameX = 0 ;
   }
   gameFrame++
    requestAnimationFrame(animate)
}
animate()