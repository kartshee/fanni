function nextPage(id){

document.querySelectorAll(".card").forEach(c=>c.style.display="none");

document.getElementById(id).style.display="block";

}

function correct(id){

nextPage(id);

}

function wrong(){

alert("Ez nem a jó válasz 😄");

}



const startDate=new Date("2024-02-16");

const today=new Date();

const diff=Math.floor((today-startDate)/(1000*60*60*24));

document.getElementById("daysCounter").innerText=diff+" napja vagyunk együtt";



const funny=[];

for(let i=1;i<=12;i++){

funny.push("images/funny"+i+".jpg");

}



const love=[];

for(let i=1;i<=11;i++){

love.push("images/love"+i+".jpg");

}



let fIndex=0;

let lIndex=0;



function updateFunny(){

document.getElementById("funnyImg").src=funny[fIndex];

document.getElementById("funnyCounter").innerText=(fIndex+1)+" / "+funny.length;

}



function updateLove(){

document.getElementById("loveImg").src=love[lIndex];

document.getElementById("loveCounter").innerText=(lIndex+1)+" / "+love.length;

}



function nextFunny(){

fIndex=(fIndex+1)%funny.length;

updateFunny();

}



function prevFunny(){

fIndex=(fIndex-1+funny.length)%funny.length;

updateFunny();

}



function nextLove(){

lIndex=(lIndex+1)%love.length;

updateLove();

}



function prevLove(){

lIndex=(lIndex-1+love.length)%love.length;

updateLove();

}



updateFunny();

updateLove();



let startX=0;

let endX=0;



function touchStart(e){

startX=e.changedTouches[0].screenX;

}



function touchEnd(e,type){

endX=e.changedTouches[0].screenX;

handleSwipe(type);

}



function handleSwipe(type){

const distance=endX-startX;

if(Math.abs(distance)<50)return;

if(type==="funny"){

if(distance<0) nextFunny();
else prevFunny();

}

if(type==="love"){

if(distance<0) nextLove();
else prevLove();

}

}



function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

heart.style.animationDuration=3+Math.random()*4+"s";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>heart.remove(),7000);

}



setInterval(createHeart,400);



function showFinal(){

nextPage("final");

confetti();

}



function confetti(){

for(let i=0;i<150;i++){

const c=document.createElement("div");

c.style.position="fixed";

c.style.width="8px";

c.style.height="8px";

c.style.background="pink";

c.style.left=Math.random()*100+"vw";

c.style.top="-10px";

c.style.opacity=Math.random();

c.style.transform="rotate("+Math.random()*360+"deg)";

c.style.transition="top 3s linear";

document.body.appendChild(c);

setTimeout(()=>{c.style.top="100vh";},10);

setTimeout(()=>c.remove(),3000);

}

}
