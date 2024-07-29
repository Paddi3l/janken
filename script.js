function getComputerChoice(){
    var rand=Math.random();
    if (rand<0.33)
        return "ROCK";
    else if(rand>=0.66)
        return "PAPER";
    else
        return "SCISSORS";
}
console.log(getComputerChoice())

function getHumanChoice(){

    var input=prompt("Enter ROCK, PAPER or SCISSORS");
    input=input.toUpperCase();

    if (input=="ROCK"||input=="PAPER"||input=="SCISSORS")
        {
        return input;
        }
    else 

    console.log("Wrong value entered");
}
var humanScore=0, computerScore=0;


function playRound(humanChoice,compChoice)
{   var outcome;
    if (humanChoice=="ROCK")
    {
        if (compChoice=="SCISSORS")
        outcome= "win";
        else if (compChoice=="PAPER")
        outcome= "lose";
        else
        outcome= "tie";
    }
    if (humanChoice=="PAPER")
        {
            if (compChoice=="ROCK")
            outcome= "win";
            else if (compChoice=="SCISSORS")
            outcome= "lose";
            else
            outcome= "tie";
        }
    if (humanChoice=="SCISSORS")
         {
            if (compChoice=="PAPER")
            outcome= "win";
            else if (compChoice=="ROCK")
            outcome= "lose";
            else
            outcome= "tie";
            }  
    if(outcome=="win")
        { 
        console.log("You win! "+humanChoice+" beats "+compChoice);
        humanScore++;
        }
    else if(outcome=="lose")
        {
        console.log("You win! "+humanChoice+" beats "+compChoice);
        computerScore++;
        }
            else 
            console.log("You tied. You and the computer picked the same");
    console.log("Your score is "+humanScore+" and the computer's score is "+computerScore)
}

function giveResult(outcome)
{
    
}

function playGame()
{
for(var i=0;i<5;i++)
    {
    var humanSelection=getHumanChoice();
    var compSelection=getComputerChoice();
    var result=playRound(humanSelection,compSelection);
    
    }
}
//main
playGame();
if(humanScore>computerScore)
    console.log("You won the game");
else
    console.log("You lost the game");


