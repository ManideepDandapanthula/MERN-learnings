let gameSeq=[];
let userSeq=[];
 let start = false;
 let level = 0;

let colorBtn = [`yellow`,`red`,`purple`,`green`];

let head = document.querySelector("h4");
 document.addEventListener("keypress",function(){
    if(start == false){
        console.log("Game started");
        start = true;
        levelUp();
    }
 });

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function clearSeq(){

}

function checkSeq(idx){
    // console.log(`current level ${level}`);
    // let idx = level -1;
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000)
            // levelUp();
        }
        // console.log("same value");
    }
    else{
        head.innerHTML=`game is over <b>Your Score Was ${level}</b> refresh to start the game`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
 document.querySelector("body").style.backgroundColor = "white";
        },150)
        reset();
    }
}

 function levelUp(){
        userSeq=[];
        level++;
        head.innerText = `level ${level}`;
        let rnadIndex = Math.floor(Math.random()*4);
        let randColor = colorBtn[rnadIndex];
        let ranbtn = document.querySelector(`.${randColor}`);
        gameSeq.push(randColor);
        console.log(gameSeq); 
        gameFlash(ranbtn);
 }

function btnPress(){
    let btn = this;
    let userButton = btn.getAttribute("id");
    userFlash(btn);
    userSeq.push(userButton);
    checkSeq(userSeq.length -1);
}

 let allBtns = document.querySelectorAll(`.btn`);
 for(let btn of allBtns){
    btn.addEventListener("click",btnPress)
 }
 function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
 }