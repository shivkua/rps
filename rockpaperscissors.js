function computerPlay(){
    var cpuchoice = ["ROCK", "PAPER", "SCISSORS"];
    var choose = Math.floor(Math.random() * 3 + 1);
    return cpuchoice[choose];
}

function playerplay() {
    var cpuselection = computerPlay();
    var userselection = prompt("Enter ROCK, PAPER, or SCISSORS");
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
                return "LOSS";
            }
            else if(cpuselection == "PAPER"){
                return "WIN";
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
    for(var i = 0; i < 5; i++){
        const computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection)) 
    }
}