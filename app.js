//set value
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const h1 = document.querySelector("#text-header");

//first conversation on terminal
console.log("Hi there! let's play rock paper scissors.")
console.log("you can choose on the website to select one for fight computer!")
console.log("This game, you(as a player) need to play 5 round, to decision who gonna win!!")
console.log("you go first!")

// set event listener for button from queryselector
rock.addEventListener('click',()=>{btnChoice("rock")})
paper.addEventListener('click',()=>{btnChoice("paper")})
scissors.addEventListener('click',()=>{btnChoice("scissors")})


//create event listen for rock paper scissor
function btnChoice(choice){
       let playerChoice = choice;
       console.log(`you choose ${choice}`)
       

}

// inside of play (5 round) keep score and decision who gonna win this game.
function game(){
        for (let i = 0; i < 5; i++) {
                const playerSelection = playerChoice;
                const computerSelection = getComputerChoice();
                playRound(playerSelection, computerSelection);
}}

//function play compare player and computer choice
function playRound(playerSelection,computerSelection){
        let rockSelect = 1;
        let paperSelect = 2;
        let scissorSelect = 3;
}


//random choice for computer to choose it
function getComputerChoice(){
        const choices = ["rock","paper","scissors"]
        let randomNum = Math.floor(Math.random() * choices.length);
        return choices[randomNum]
}

// run program here
const computerSelection = getComputerChoice()







