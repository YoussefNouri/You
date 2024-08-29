const choices = ["Rock", "Paper", "Scissors"];
const playerdisplay = document.getElementById("PlayerDisplay");
const computerdisplay = document.getElementById("ComputerDisplay");
const resultdisplay = document.getElementById("ResultDisplay");
const playerscoredisplay = document.getElementById("PlayerScoreDisplay");
const computerscoredisplay = document.getElementById("ComputerScoreDisplay");
let playerscore = 0;
let computerscore = 0;
function PlayGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    if(playerChoice === computerChoice){
        result = "IT'S A TIE !";
    }
    else{
        switch(playerChoice){
            case "Rock":
                result = (computerChoice === "Scissors") ? "YOU WIN !" : "YOU LOSE !";
                break;
            case "Paper":
                result = (computerChoice === "Rock") ? "YOU WIN !" : "YOU LOSE !";
                break;
            case "Scissors":
                result = (computerChoice === "Paper") ? "YOU WIN !" : "YOU LOSE !";
                break;
        }
    }
    playerdisplay.textContent = `PLAYER : ${playerChoice}`;
    computerdisplay.textContent = `COMPUTER : ${computerChoice}`;
    resultdisplay.textContent = result;
    resultdisplay.classList.remove("greenText","redText")
    switch(result){
        case "YOU WIN !":
        resultdisplay.classList.add("greenText");
        playerscore++;
        playerscoredisplay.textContent = playerscore;
        break;
        case "YOU LOSE !":
        resultdisplay.classList.add("redText");
        computerscore++;
        computerscoredisplay.textContent = computerscore;
        break;
    }
}