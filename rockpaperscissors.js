function computerPlay(){
    let cpuchoice = ["ROCK", "PAPER", "SCISSORS"];
    console.log(cpuchoice[(Math.floor(Math.random() * 3 + 1))]);

}

function playerplay() {
    let cpuselection = computerPlay();
    let userselection = prompt("Enter ROCK, PAPER, or SCISSORS");
    switch(userselection){
        case "ROCK":
            if(cpuSelection == "ROCK"){
                return "DRAW"; 
            }
            else if(cpuselection == "PAPER"){
                return "LOSS";
            }
            else{
                return "WIN"
            }
        case "SCISSORS":
            if(cpuSelection == "ROCK"){
                return "WIN";
            }
            else if(cpuselection == "PAPER"){
                return "LOSS";
            }
            else{
                return "DRAW"
            }
        case "PAPER":
            if(cpuSelection == "ROCK"){
                return "WIN";
            }
            else if(cpuselection == "PAPER"){
                return "DRAW";
            }
            else{
                return "LOSS"
            }



    }

}
function Game() {
    //for(var i = 0; i < 5; i++){
        let computerSelection = computerPlay()
        console.log(playRound(userselection, computerSelection)) 
    }
//}