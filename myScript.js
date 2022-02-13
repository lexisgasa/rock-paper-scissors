
function gameStart () {
    let userChoice = prompt("Choose your option; Rock, paper or scissors;").toLowerCase();
    let userChoiceValue;
    if (userChoice === "rock") {
        userChoiceValue = 1;
    } else if (userChoice === "paper") {
        userChoiceValue = 2;
    } else if (userChoice === "scissors") {
        userChoiceValue = 3;
    } else { console.log("Invalid choice");
        return; 
    }
    userChoice = userChoice.charAt(0) .toUpperCase() + userChoice.slice(1).toLowerCase();
   
    let randomNumber = Math.floor((Math.random() * 3) +1);
        if (randomNumber === 1) {
            randomNumberValue = "Rock";
        }
        else if (randomNumber === 2) {
            randomNumberValue = "Paper";
        }
        else { randomNumberValue = "Scissors"
        }


    if (userChoiceValue === 1 && randomNumber === 3 || userChoiceValue === 2 && randomNumber === 1 || userChoiceValue === 3 && randomNumber === 2 ) {
        return ("You win! " + userChoice + " beats " + randomNumberValue);
    } else if (userChoiceValue === 1 && randomNumber === 1 || userChoiceValue === 2 && randomNumber === 2 || userChoiceValue === 3 && randomNumber === 3 ) {
        return "Draw!";
    } else { return ("You lose! " + userChoice + " is destroyed by " + randomNumberValue)};
    }


 


/*
1 = ROCK
2 = PAPER
3= SCISSORS
*/