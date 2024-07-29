let playerScore=0;
let compScore=0;

// rock:1, paper:2, scissor:3
// 1:3 2:1 3:2
const winningPatterns = new Map();
winningPatterns.set("1",3);
winningPatterns.set("2",1);
winningPatterns.set("3",2);


let userClickedOptions = document.querySelectorAll(".btn1,.btn2,.btn3");
let resultBox = document.querySelector(".result-message");
let playerScoreHTML = document.querySelector("#player-score");
let computerScoreHTML = document.querySelector("#computer-score");


userClickedOptions.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        let compNum = Math.floor(Math.random()*3 +1);
        let playerNum = btn.id;
        if(compNum==playerNum){
            resultBox.innerText="It's draw";
        }
        else {
            if(winningPatterns.get(playerNum)==compNum){
                playerScore+=1;
                playerScoreHTML.innerText=playerScore;
                resultBox.innerText="You won this round";
            }
            else{
                compScore+=1;
                computerScoreHTML.innerText=compScore;
                resultBox.innerText="Computer won this round";
            }
        }
    })
})

const displayResult =()=>{

}