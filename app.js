var score={	player:0,
			computer:0,
			computerChoice:''		   		   
		  }
		   	

// When user clicks on a button, Run related function
document.getElementById('rock').onclick=playerSelectRock;
function playerSelectRock(){		
	findWinner(getRandomSelection(),'rock');
}
document.getElementById('scissors').onclick=playerSelectScissors;
function playerSelectScissors(){	
	findWinner(getRandomSelection(),'scissors');
}
document.getElementById('paper').onclick=playerSelectPaper;
function playerSelectPaper(){	
	findWinner(getRandomSelection(),'paper');
}

// Computer randomly makes a selection 
// if randomly selected number is less than 34 then "scissors"
// if randomly selected number is more than 66 then "paper"
// if randomly selected number is between 34 and 66 then "rock"

function getRandomSelection(){
	var randomNumber=Math.random()*100;
	score.computerChoice='rock';
	if(randomNumber<=33){
		score.computerChoice='scissors';
	}
	else if(randomNumber>66){
		score.computerChoice='paper';
	}
	return score.computerChoice;
}


// This function checks the user answer and computer answer and then says who is winner
// Also, this function increases winner score

function findWinner(computerChoice,playerChoice){	
	if ( playerChoice === computerChoice) {		
		displayScoreMessage('Tie');
	} else {
		var whoWins = {
			'rock': 'scissors',
			'scissors': 'paper',
			'paper': 'rock'
		};						
		(whoWins[playerChoice] === computerChoice) ? increasePlayerScore() : increaseComputerScore();				
	}
}

// Update score and text under buttons

function increaseComputerScore(){
	score.computer+=1;
	document.getElementById('computerScore').innerHTML=score.computer;
	displayScoreMessage('You lost, because computer selected '+score.computerChoice);
}
function increasePlayerScore(){
	score.player+=1;
	document.getElementById('playerScore').innerHTML=score.player;
	displayScoreMessage('You won! because computer selected '+score.computerChoice);
}

function displayScoreMessage(msg){
	document.getElementById('status').innerHTML=msg;
}
