//declare variables
let putt1 = 0;
let putt2 = 0;
let putt3 = 0;
let putt4 = 0;
let putt5 = 0;
let putt6 = 0;
let holeCount = 0;
let userScore = 0;

//prompt user for name
let userName = prompt ("Welcome to GC Minigolf!  What is your name?");
console.log("User's Name is: " + userName);

//prompt for how many holes to play
holeCount = parseInt(prompt ("Hi " + userName + "! Would you like to play 3 or 6 holes today?"));
console.log("Hole selection: " + holeCount);


if(holeCount === 3 || holeCount === 6) //catch invalid entries
{
    //prompt in loop for number of holes entered
    for (i=1; i<=holeCount; i++)
    {
        switch (i){ 
            case 1:
                putt1 = parseInt(prompt ("How many putts for hole " + i + "? (par: 3)"));
                console.log("Putt 1=" + putt1);
                break;
            case 2:
                putt2 = parseInt(prompt ("How many putts for hole " + i + "? (par: 3)"));
                console.log("Putt 2=" + putt2);
                break;
            case 3:
                putt3 = parseInt(prompt ("How many putts for hole " + i + "? (par: 3)"));
                console.log("Putt 3=" + putt3);
                break;
            case 4:
                putt4 = parseInt(prompt ("How many putts for hole " + i + "? (par: 3)"));
                console.log("Putt 4=" + putt4);
                break;
            case 5:
                putt5 = parseInt(prompt ("How many putts for hole " + i + "? (par: 3)"));
                console.log("Putt 5=" + putt5);
                break;
            case 6:
                putt6 = parseInt(prompt ("How many putts for hole " + i + "? (par: 3)"));
                console.log("Putt 6=" + putt6);
                break;
        }
  
    }

    //calculate user score for 3 or 6 holes
    if (holeCount === 3){
    
        userScore = (putt1 + putt2 + putt3) - 9; //par is 9 for 3 holes
        console.log("Over or under par by: " + userScore);
        if (userScore > 0) //over par
        {
            console.log("Nice try, " + userName + "... Your total par was: +" + userScore + ".");
        }
        else if (userScore < 0)
        {
            console.log("Great job, " + userName + "! Your total par was: " + userScore + "!");
        }
    }
    else{
        userScore = (putt1 + putt2 + putt3 + putt4 + putt5 + putt6) - 18; //par is 18 for 6 holes
        console.log("Over or under par by: " + userScore);
        if (userScore > 0)
        {
            console.log("Nice try, " + userName + "... Your total par was: +" + userScore + ".");
        }
        else if (userScore < 0)
        {
            console.log("Great job, " + userName + "! Your total par was: " + userScore + "!");
        }
    }
    if (userScore === 0)
    {
        console.log("Good game, " + userName + ". Your total par was: "+ userScore + ".");
    }

}
else{
    console.log("Invalid selection, no golf for you!");

}