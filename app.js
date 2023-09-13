//set value
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const h1 = document.querySelector("#text-score");
const text = document.querySelector("#text");
const head = document.getElementById("text-header")

//first conversation on terminal
console.log("Hi there! let's play rock paper scissors.")
console.log("you can choose on the website to select one for fight computer!")
console.log("This game, you(as a player) need to play 5 round, to decision who gonna win!!")
console.log("you go first!")

// set event listener for button from queryselector
rock.addEventListener('click',()=>{btnChoice("rock")})
paper.addEventListener('click',()=>{btnChoice("paper")})
scissors.addEventListener('click',()=>{btnChoice("scissors")})
let playerChoice = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;
let play = 0;

//create event listen for rock paper scissor
function btnChoice(choice){
        playerChoice = choice;
        if (play != 5){
                console.log(`you choose ${choice}`)
                console.log("***************************")
                game()
                play +=1;
                if(play!= 5){
                        console.log("|||||||||Select again!|||||||||||")
                }
        }
        
        if(play == 5){
                if(computerScore < playerScore){
                        h1.textContent = `Player score : ${playerScore} Computer score : ${computerScore}`;
                        head.textContent = 'You win'
                        head.style.color = 'green';
                        console.log("Congrats! you win")
                }else if(playerScore < computerScore){
                        h1.textContent = `Player score : ${playerScore} Computer score : ${computerScore}`;
                        head.textContent = 'You lose'
                        head.style.color = 'red';
                        console.log("Computer win! you you lose....")
                }else{
                        h1.textContent = `Player score : ${playerScore} Computer score : ${computerScore}\n game tie`;
                        console.log("game tie!!")
        }
        setTimeout(() => {
                text.textContent = `please restart by reface website to play again`;
        }, 3000);
        console.log("game end, please restart by reface website to play again.")
        }
}
// inside of play (5 round) keep score and decision who gonna win this game.
function game(){
                const playerSelection = playerChoice;
                const computerSelection = getComputerChoice();
                console.log(`Computer choose ${computerSelection}`)
                console.log("***************************")
                playRound(playerSelection, computerSelection);
                text.textContent = `| Player select : ${playerSelection} | Computer select : ${computerSelection} |`
} 

//function play compare player and computer choice
function playRound(playerSelection,computerSelection){
        if(playerSelection == "rock"){
                if(computerSelection == "paper"){
                        computerScore +=1;  
                        console.log("Computer win 1 score")
                        head.textContent = 'Computer win 1 score'
                }else if(computerSelection == "scissors"){
                        playerScore +=1;
                        console.log("player win 1 score")
                        head.textContent = 'player win 1 score'
                }else{
                        console.log("tie")
                        head.textContent = 'tie'
                }
        }else if (playerSelection == "paper"){
                if(computerSelection == "scissors"){
                        computerScore +=1;  
                        console.log("Computer win 1 score")
                        head.textContent = 'Computer win 1 score'
                }else if(computerSelection == "rock"){
                        playerScore +=1;
                        console.log("player win 1 score")
                        head.textContent = 'player win 1 score'
                }else{
                        console.log("tie")
        }}else if(playerSelection == "scissors"){
                if(computerSelection == "rock"){
                        computerScore +=1;  
                        console.log("Computer win 1 score")
                        head.textContent = 'Computer win 1 score'
                }else if(computerSelection == "paper"){
                        playerScore +=1;
                        console.log("player win 1 score")
                        head.textContent = 'player win 1 score'
                }else{
                        console.log("tie")
                        head.textContent = 'tie'
        }}
        h1.textContent = `Player score : ${playerScore} Computer score : ${computerScore}`;
        console.log("Player score :",playerScore,"computer score : ",computerScore)
        console.log("***************************")
}


//random choice for computer to choose it
function getComputerChoice(){
        const choices = ["rock","paper","scissors"]
        let randomNum = Math.floor(Math.random() * choices.length);
        return choices[randomNum]
}


// run program here






