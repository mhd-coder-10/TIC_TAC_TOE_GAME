
        // JAVASCRIPT CODE OF TIC_TAC_TOE GAME

let buttons = document.querySelectorAll(".btn");
let reset_Game_Btn = document.querySelector(".reset-btn");
let new_Game_Btn = document.querySelector(".new-btn");
let msg = document.querySelector(".win_msg");
let msg_cont = document.querySelector(".msg-cont");
let turnO = true;

let win_pattern = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [3, 4, 5],
    [6, 7, 8],
    [2, 5, 8],
    [2, 4, 6]
];

buttons.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        if(turnO) {               // if(turnO == true){} -->  this syntax is also right
            btn.innerText = "O";
            btn.style.color = "red";
            turnO = false;
        }
        else {
            btn.innerText = "X";
            btn.style.color = "darkblue";
            turnO = true;
        }
        btn.disabled = true;
        setTimeout(()=>{
            checkButton();
        }, 2500);
    });
});

// check Button function
const checkButton = ()=>{
    
    for(let pattern of win_pattern) {

        // for understand  :-
        // console.log(pattern[0], pattern[1], pattern[2]);  // here print the only one aaray (one patern) trough it's index
        //         // for ex : for pattern[1,4,7] -> index 0 = 1, index 1 = 4, index 2 = 7, 
        
        let pos1Val = buttons[pattern[0]].innerText;
        let pos2Val = buttons[pattern[1]].innerText;
        let pos3Val = buttons[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val===pos2Val && pos2Val===pos3Val) {
                showWinner(pos1Val);
            }   
        }
    }                                                     
}

// showWinner function 
const showWinner = (winner) => {
    msg.innerText = `${winner} is win`;
    msg_cont.classList.remove("hide"); 
    btnDisabled();
}

// btnDisabled function
const btnDisabled = () =>{
    for(let btn of buttons) {
        btn.disabled = true;
    }
}

// resetGame function
const resetGame = ()=>{
    turnO = true;
    msg_cont.classList.add("hide");
    enableButton();
}

// enableButton function
const enableButton = function () {
    for(let btn of buttons) {
        btn.disabled = false;
        btn.innerText = "";
    }
}

new_Game_Btn.addEventListener("click", resetGame);  // New game start 
reset_Game_Btn.addEventListener("click", resetGame); // game reset(means Game start again)
