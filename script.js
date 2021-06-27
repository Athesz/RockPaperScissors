var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");

const matchChoises_div = document.querySelector(".matchChoises > p");
const result_div = document.querySelector(".result > p");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

function getComputerChoice(){
    const choices = ["Rock","Paper","Scissor"];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function win(userChoise,computerChoise){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    matchChoises_div.innerHTML = "THE " + userChoise + " BEATS THE " + computerChoise;
    result_div.innerHTML = "YOU WIN !";
}

function lose(userChoise,computerChoise){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    matchChoises_div.innerHTML = "THE " + userChoise + " LOSES TO " + computerChoise;
    result_div.innerHTML = "YOU LOSE !";
}

function draw(userChoise,computerChoise){
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    matchChoises_div.innerHTML = "THE " + userChoise + " EQUALS " + computerChoise;
    result_div.innerHTML = "IT'S A DRAW.";
}

function game(userChoise){
    const computerChoise = getComputerChoice();
    switch (userChoise + computerChoise) {
        case "Rock"+"Scissor":
        case "Paper"+"Rock":  
        case "Scissor"+"Paper": 
            win(userChoise,computerChoise);
            break;
        case "Rock"+"Paper":
        case "Paper"+"Scissor":  
        case "Scissor"+"Rock": 
            lose(userChoise,computerChoise);
            break;   
        case "Rock"+"Rock":
        case "Paper"+"Paper":  
        case "Scissor"+"Scissor": 
            draw(userChoise,computerChoise);
            break; 
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game("Rock");
    })
    paper_div.addEventListener('click', function(){
        game("Paper");
    })
    scissor_div.addEventListener('click', function(){
        game("Scissor");
    })
}

main();


