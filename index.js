var counterPlayer=0;
var counterComputer=0;
const computerSelection = computerPlay();
function computerPlay (){
    var result = ["Rock","Paper",'Sciscors'];
    return result[(Math.floor(Math.random() *3))]
}
const btns = Array.from(document.querySelectorAll('input'));

btns.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})



function playRound(playerSelection) {
     
    let computerSelection = computerPlay();

    if ((playerSelection==="Rock"&&computerSelection==="Rock" || 
    (playerSelection==="Paper"&&computerSelection==="Paper") ||
    (playerSelection==="Sciscors"&&computerSelection==="Sciscors"))){
       return document.getElementById('results').innerHTML='Tie'
    }
    else  if ((playerSelection==="Rock"&&computerSelection==="Paper")||
    (playerSelection==="Paper"&&computerSelection==="Sciscors")||
    (playerSelection==="Sciscors"&&computerSelection==="Paper")){
     counterComputer++;   
     return document.getElementById('results').innerHTML='Lose'
    }
    else if ((playerSelection==="Rock"&&computerSelection==="Sciscors")||
    (playerSelection==="Paper"&&computerSelection==="Rock")||
    (playerSelection==="Sciscors"&&computerSelection==="Rock")){
       counterPlayer++; 
       return document.getElementById('results').innerHTML='Win'
        
    }
    
    
}















