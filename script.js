//Write a NEW function called game(). 
function game() {

    let playerScore = 0;
    let computerScore = 0;

    //Loop playRound function 5 times in a row and use console.log() to display the results of each round and the winner at the end.
    for (var i = 0; i < 5; i++) {

        //Use prompt() to get input from the user
        const playerSelection = prompt('Enter Paper, Rock or Scissors');
        const computerSelection = computerPlay();

        console.log(playRound(playerSelection, computerSelection));

        keepScore();
        
    }

    //Created function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
    function computerPlay() {

        let array = ['Rock', 'Paper', 'Scissors'];

        return array[Math.floor(Math.random() * 3)];

    }

    //Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock". Make the function case insensitive

    function playRound(playerSelection, computerSelection) {

        switch (true) {

            case (playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'ROCK'):
                return roundResult = 'Draw! Try Again!';
                break;

            case (playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'PAPER'):
                return roundResult = 'Draw! Try Again!';
                break;

            case (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'SCISSORS'):
                return roundResult = 'Draw! Try Again!';
                break;

            case (playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'SCISSORS'):
                return roundResult = 'You Won! Rock beats Scissors.';
                break;

            case (playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'ROCK'):
                return roundResult = 'You Won! Paper beats Rock.';
                break;

            case (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'PAPER'):
                return roundResult = 'You Won! Scissors beats Paper.';
                break;

            case (playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'PAPER'):
                return roundResult = 'You Lose! Paper beats Rock.';
                break;

            case (playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'SCISSORS'):
                return roundResult = 'You Lose! Scissors beats Paper.';
                break;

            case (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'ROCK'):
                return roundResult = 'You Lose! Rock beat Scissors.';
                break;
        }
    }


    //Create the function that keep the score
    function keepScore() {

        if (roundResult === 'You Won! Rock beats Scissors.' || roundResult === 'You Won! Scissors beats Paper.' || roundResult ===
            'You Won! Paper beats Rock.') {

            playerScore++;

        } else if (roundResult === 'You Lose! Paper beats Rock.' || roundResult === 'You Lose! Scissors beats Paper.' || roundResult ===
            'You Lose! Rock beat Scissors.') {

            computerScore++;

        }
    }

    //Create a function that shows the final result
    function showResult() {

        if (playerScore > computerScore) {

            console.log(`Good Job! You Won! \nPlayer: ${playerScore} | Computer: ${computerScore}`);

        } else if (playerScore < computerScore) {

            console.log(`You Suck! You Lost! \nPlayer: ${playerScore} | Computer: ${computerScore}`);

        }
    }

    showResult();

}

game();