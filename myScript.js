
function gameStart () {
    let userChoice = prompt("Choose your option; Rock, paper or scissors;").toLowerCase();
    if (userChoice === "rock") {
        userChoice = 1;
    } else if (userChoice === "paper") {
        userChoice = 2;
    } else { userChoice = 3};



    let computerChoice = computerPlay();


    if (userChoice === 1 && computerChoice === 3 || userChoice === 2 && computerChoice === 1 || userChoice === 3 && computerChoice === 2 ) {
        return "You win!";
    } else if (userChoice === 1 && computerChoice === 1 || userChoice === 2 && computerChoice === 2 || userChoice === 3 && computerChoice === 3 ) {
        return "Draw!";
    } else { return "You lose!"};
}


function computerPlay () {
    let randomNumber = Math.floor(Math.random() * 3) +1;
    return(randomNumber);
}

/*
1 = ROCK
2 = PAPER
3= SCISSORS
*/