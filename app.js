//set value
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const h1 = document.querySelector("#text-header");

//first conversation on terminal
console.log("Hi there! let's play rock paper scissors")
console.log("you can choose on the website to select one for fight computer!")
console.log("you go first!")

//create event listen for rock paper scissor
rock.addEventListener('click',()=>{
        console.log("You choose rock");
        let playerChoice = "rock";
        compare(playerChoice)
})
paper.addEventListener('click',()=>{
        console.log("You choose paper");
        let playerChoice = "paper";
        compare(playerChoice)
})
scissors.addEventListener('click',()=>{
        console.log("You choose scissors");
        let playerChoice = "scissors";
        compare(playerChoice)
})

//compare user and computer
function compare(playerChoice){
        if (choice == "rock"){
                console.log("playease");
        }else{
                console.log('wtf')
        }

}

// inside of play (5 round) keep score and decision who gonna win this game.
function game(){

}

//function play game
function playRound(playerSelection,computerSelection){

}


//random choice for computer
function getComputerChoice(){

}


const computerSelection = getComputerChoice()

//console.log(playRound(playerSelection,computerSelection));