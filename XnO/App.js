let winning_patterns= [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7], [2,5,8],[0,4,8],[2,4,6]];

let boxes= document.querySelectorAll(".box");
let msg = document.querySelector("#msg1");
let reset = document.querySelector("#reset-btn");

let turnOfPlayer1= true; //true for player1
let moves=0;

boxes.forEach((box)=> {
    box.addEventListener("click", ()=>{
        if(turnOfPlayer1){
            box.innerText="O";
            turnOfPlayer1=false;
        }
        else{
            box.innerText="X";
            turnOfPlayer1=true;
        }
        moves+=1;
        box.disabled=true;
        winner=check();

        if(moves==9 && !winner){
            draw();
            drawmessage();
        }
    })
})

reset.addEventListener("click",()=>{
    enableBoxes();
    clearmessage();
})

const check=()=>{
    for (arr of winning_patterns) {
        let pos1Val = boxes[arr[0]].innerText;
        let pos2Val = boxes[arr[1]].innerText;
        let pos3Val = boxes[arr[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val==pos2Val && pos3Val==pos2Val){
                disableBoxes();
                console.log("Player ",pos1Val," has won");
                winnermessage(pos1Val);
                return pos1Val;
            }
        }

    }
}

const draw=()=>{
    console.log("Match drawn");
}


const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };

  const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };

  const clearmessage= ()=>{
    msg.innerText=``;
  }

  const winnermessage= (pos1Val)=>{
    msg.innerText=`Congratulations, Winner is ${pos1Val}`;
  }

  const drawmessage= ()=>{
    msg.innerText=`Match drawn`;
  }