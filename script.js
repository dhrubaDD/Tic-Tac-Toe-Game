// sfx
let pop1=document.querySelector("#pop1");
let pop2=document.querySelector("#pop2");



// Theme changer
let body=document.querySelector("body");
let thm=document.querySelector(".theme button");

let theme="dark";
thm.addEventListener("click",()=>{
    if(theme==="dark"){
        theme= "light";
        body.setAttribute("class","light");
        thm.innerText="Dark Mode";
    }
    else{
        theme="dark";
        body.setAttribute("class","dark");
        thm.innerText="Light Mode";
    }
})

//game code
let boxes=document.querySelectorAll(".box");
let newgame=document.querySelector("#newgame");
let reset=document.querySelector("#resetgame");

let turn0=true;// turn= 0 and X
let starter=turn0;
let gameCount=0;



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (box.innerHTML !== "") return;
        if(turn0===true){
            box.innerHTML='<i class="fa-regular fa-circle"></i>';
            pop1.play();
            turn0=false;
            gameCount++;
        }
        else{
            box.innerHTML='<i class="fa-solid fa-xmark"></i>';
            pop2.play();
            turn0=true;
            gameCount++;
        }
        let winner=checkWinner();
        if(gameCount===9 && !winner){
            draw();
            drawSound.play();
            setTimeout(resetGame,100);
            gameCount=0;
        }
        showTurn(turn0);
    })
})

draw=()=>{
    boxes.forEach(box => {
        box.classList.add("box-draw");
        setTimeout(() => {
            box.classList.remove("box-draw");
        }, 1000);
    });
}


// Winning Logic
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
//score counter
let score1=document.querySelector("#p1-score");
let score2=document.querySelector("#p2-score");
let scr1=0;
let scr2=0;
let popup=document.querySelector(".pop-up");
let gStart=document.querySelector("#gStart")
let winSong=document.querySelector("#winSong");
let round=document.querySelector("#round");
let drawSound=document.querySelector("#drawSound");
showPop=()=>{
    let main=document.querySelector(".main-game");
    main.style.opacity="0.5";
    popup.classList.remove("hide");

    setTimeout(() => {
        main.style.opacity="1";
        popup.classList.add("hide"); // hide after 3 sec
    }, 3000);
}
checkWinner =()=>{
    for(let pattern of winPatterns){
        let val1=boxes[pattern[0]].innerHTML;
        let val2=boxes[pattern[1]].innerHTML;
        let val3=boxes[pattern[2]].innerHTML;
        if(val1!=="" && val2!=="" && val3!==""){
            if(val1===val2 && val2===val3){
                boxes[pattern[0]].classList.add("box-win");
                boxes[pattern[1]].classList.add("box-win");
                boxes[pattern[2]].classList.add("box-win");
                gameCount=0;
                round.play();
                if(val1==='<i class="fa-regular fa-circle"></i>'){
                    console.log("player 0 won!");
                    scr2++;
                    score2.innerText=`${scr2}`;
                }
                else{
                    console.log("player X won!");
                    scr1++;
                    score1.innerText=`${scr1}`;
                }
                resetGame();
                if(scr1===3||scr2===3){
                    boom();
                    winSong.play();
                    if(scr1==3){
                        popup.innerText="Player1 Wins!";
                    }
                    else{
                        popup.innerText="Player2 Wins!";
                    }
                    
                    showPop();
                    newGame();
                }  
                return true;
            }
        }
    }
    return false;
}

//reset game
resetGame=()=>{
    setTimeout(() => {
        gameCount=0;
        boxes.forEach((b) => {
        b.innerHTML="";
        b.classList.remove("box-win");
        gStart.play();
        
    });
    }, 1300);
    starter = !starter; // change starter
    turn0 = starter;    // apply starter
}
reset.addEventListener("click",resetGame);

//new game
newGame=()=>{
    scr1=scr2=0;
    score1.innerText=0;
    score2.innerText=0;
    resetGame();
}
newgame.addEventListener("click",newGame);

//turn shower
let p1=document.querySelector(".p1");
let p2=document.querySelector(".p2");
p2.classList.add("high");
showTurn=(turn0)=>{
    if(turn0===true){
    p2.classList.add("high");
    p1.classList.remove("high");
}
else{
    p2.classList.remove("high");
    p1.classList.add("high");
}
};

//music
let music = document.querySelector("#bgm");
let playPause=document.querySelector(".play-pause");

let musicOn=false;
playPause.addEventListener("click", () => {
    if(musicOn===true){
        music.pause();
        playPause.innerHTML='<i class="fa-solid fa-play"></i>';
        musicOn=false;
    }else if(musicOn===false){
        music.play();
        playPause.innerHTML='<i class="fa-solid fa-pause"></i>';
        musicOn=true;
    }
    
    
});

music.volume = 0.8;