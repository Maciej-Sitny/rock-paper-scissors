function computerPlay() {
    let decision = Math.floor(Math.random() * 3);
    if (decision ==0) {
        img.src="/img/rock.png";
        return "rock";      
    }
    else if (decision == 1) {
        img.src="/img/paper.png"
        return "paper";
    }
    else if (decision == 2) {
        img.src="/img/scissors.png"
        return "scissors";
    }
}
 
function reset() {
    playerCounter=0;
    computerCounter=0;
}

function game(playerLower) {
    
    console.log(playerLower);
    let computerLower = computerPlay().toLowerCase();
    if (playerLower == computerLower) {
        playerCounter++;
        computerCounter++;
        alert(`It's a draw!`);           
    }
    else if ((playerLower=="rock" && computerLower=="paper") || (playerLower=="scissors" && computerLower=="rock") || (playerLower=="paper" && computerLower=="scissors")) {
        computerCounter++;
        alert(`You lose, ${computerLower} beats ${playerLower}.`);
    }
    else if ((playerLower=="paper" && computerLower=="rock") || (playerLower=="rock" && computerLower=="scissors") || (playerLower=="scissors" && computerLower=="paper")) {       
        playerCounter++;
        alert(`You win, ${playerLower} beats ${computerLower}.`);
    }
    if (playerCounter == 5 || computerCounter ==5){
        if (playerCounter == computerCounter) {
            alert("You are as smart as a computer! I bet you won't be able to repeat that!");
            reset();
        }
        else if (playerCounter > computerCounter) {
            alert("You won the whole game! Congratulations! It had to be just a mistake in computer's calculation... I dare you repeat that score!");
            reset();
        }
        else if (playerCounter < computerCounter) {
            alert("You lost the whole game :( But you can try again!");
            reset();
    
        }
    };
    playerScore.innerText = playerCounter;
    compScore.innerText = computerCounter;
    
}
 
let playerCounter =0;
let computerCounter =0;
const div = document.querySelector(".main");
const img = document.querySelector(".compChoice")
const playerScore = document.querySelector(".playerScore")
const compScore = document.querySelector(".compScore")


let btns = document.querySelectorAll('button');
 
 
btns.forEach((button) => {
  button.addEventListener('click', () => {
    game(button.id);
  });
});

