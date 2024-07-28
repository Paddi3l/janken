function getComputerChoice(){
    var rand=Math.random();
    console.log(rand);
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
    input=input.toUpperCase;

    if (input=="ROCK"||input=="PAPER"||input=="SCISSORS")
        {
        return input;
        }
    else 

    console.log("Wrong value entered");
}
var humanScore=0, computerScore=0;


function playRound(humanChoice,compChoice)
{
    if (humanChoice=="ROCK")
    {
        if (compChoice=="SCISSORS")
        return "win";
        else if (compChoice=="PAPER")
        return "lose";
        else
        return "tie";
    }
    if (humanChoice=="PAPER")
        {
            if (compChoice=="ROCK")
            return "win";
            else if (compChoice=="SCISSORS")
            return "lose";
            else
            return "tie";
        }
    if (humanChoice=="SCISSORS")
         {
            if (compChoice=="PAPER")
            return "win";
            else if (compChoice=="ROCK")
            return "lose";
            else
            return "tie";
            }  
}
