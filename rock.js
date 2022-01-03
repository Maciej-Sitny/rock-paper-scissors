function computerPlay() {
    let decision = Math.floor(Math.random() * 3);
    if (decision ==0) {
        return "Rock";
    }
    else if (decision == 1) {
        return "Paper";
    }
    else if (decision == 2) {
        return "Scissors";
    }
}
 
 
 
function game() {
    let playerCounter =0;
    let computerCounter =0;
    for (let i = 0; i <5;i++){
        let playerLower = prompt("Rock, paper or scissors?").toLowerCase();
        let computerLower = computerPlay().toLowerCase();
        if (playerLower == computerLower) {
            playerCounter++;
            computerCounter++;
            alert(`It's a draw! Current score: you: ${playerCounter}; computer: ${computerCounter}`);
           
        }
        else if ((playerLower=="rock" && computerLower=="paper") || (playerLower=="scissors" && computerLower=="rock") || (playerLower=="paper" && computerLower=="scissors")) {
            computerCounter++;
            alert(`You lose, ${computerLower} beats ${playerLower}. Current score: you: ${playerCounter}; computer: ${computerCounter}`);
           
        }
        else if ((playerLower=="paper" && computerLower=="rock") || (playerLower=="rock" && computerLower=="scissors") || (playerLower=="scissors" && computerLower=="paper")) {
           
            playerCounter++;
            alert(`You win, ${playerLower} beats ${computerLower}. Current score: you: ${playerCounter}; computer: ${computerCounter}`);
        }
        else if (playerLower != "rock" || playerLower!= "paper" || playerLower != "scissors"){
            alert("Insert a correct decision!");
            i--;
        }
    }
    if (playerCounter == computerCounter) {alert("You are as smart as a computer!");}
    else if (playerCounter > computerCounter) {alert("You won the whole game! Congratulations!");}
    else if (playerCounter < computerCounter) {alert("You lost the whole game :( But you can try again!");}
}
 
 
game();