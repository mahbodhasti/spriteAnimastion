let playerState = 'fall';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change',(e)=>{
    playerState = e.target.value
})
const canvas =document.getElementById('canvas1');
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = "./asset/shadow_dog.png";
const spritWidth =575;
const spritHeight =523;


let gameFrame = 5;
const staggerFrames = 4;
const spritAnimations =[];
const animationStates =[
{
    name:'idle',
    frames:7,
},
{
    name:'jump',
    frames:7,
},
{
    name:'fall',
    frames:7,
},
{
    name:'run',
    frames:9,
},
{
    name:'dizzy',
    frames:11,
},
{
    name:'sit',
    frames:5,
},
{
    name:'roll',
    frames:7,
},
{
    name:'bite',
    frames:7,
},
{
    name:'ko',
    frames:12,
},
{
    name:'getHit',
    frames:7,
}

];
animationStates.forEach((state,index)=>{
 let frames ={
    loc:[]
 }
 for (let j = 0 ;j< state.frames; j++){
    let positionX = j * spritWidth;
    let positionY =index * spritHeight ;
    frames.loc.push({x:positionX,y:positionY})
 }

 spritAnimations[state.name]=frames;
})
console.log(spritAnimations)

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
    let position = Math.floor(gameFrame/staggerFrames)%spritAnimations[playerState].loc.length;
   let frameX = spritWidth * position ;
   let frameY = spritAnimations[playerState].loc[position].y 

    
    ctx.drawImage(playerImage,frameX,frameY,
    spritWidth,spritHeight,0,0,spritWidth,spritHeight);
   if (gameFrame % staggerFrames==0 ){
    if(frameX < 6)frameX++;
    else frameX = 0 ;
   }
   
   gameFrame++
    requestAnimationFrame(animate)
}
animate()



function reminders(a,b){
   
    return console.log(a % b)
}

reminders(3,6)