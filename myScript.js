
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


    let computerChoice = computerPlay();


    if (userChoice === 1 && computerChoice === 3 || userChoice === 2 && computerChoice === 1 || userChoice === 3 && computerChoice === 2 ) {
        return ("You win! " + userChoiceValue + " beats " + randomNumberValue);
    } else if (userChoice === 1 && computerChoice === 1 || userChoice === 2 && computerChoice === 2 || userChoice === 3 && computerChoice === 3 ) {
        return "Draw!";
    } else { return ("You lose! " + userChoiceValue + " is destroyed by " + randomNumberValue)};
}


function computerPlay () {
    let randomNumber = Math.floor(Math.random() * 3) +1;
    let randomNumberValue;
    if (randomNumber === 1 ) {
        randomNumberValue = "Rock";
    }
    else if (randomNumber === 2) {
        randomNumberValue = "Paper";
    } else {
        randomNumberValue = "Scissors";
    }
    return randomNumber;
}

/*
1 = ROCK
2 = PAPER
3= SCISSORS
*/