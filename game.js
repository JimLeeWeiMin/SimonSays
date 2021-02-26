var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColour = buttonColors[nextSequence];
var gamePattern = [];

var currentUserIndex = 0;
var currentIndex = -1;
var userFirstTime = true;

var blue = new Audio("sounds/blue.mp3");
var green = new Audio("sounds/green.mp3");
var red = new Audio("sounds/red.mp3");
var wrong = new Audio("sounds/wrong.mp3");
var yellow = new Audio("sounds/yellow.mp3");

function reset()
{
  gamePattern = []
  currentUserIndex = 0;
  currentIndex = -1;
  userFirstTime = true;
}

function nextSequence()
{
    ++currentIndex;
    var color = buttonColors[Math.floor(Math.random() * 4)];
    gamePattern.push(color);
    eval(color).play();
    $("#"+color).fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });
    console.log(gamePattern);
}

// If button is click
$(".btn").click(function(e){

  if(userFirstTime)
  {
    userFirstTime = false;
    nextSequence();
  }
  else {
    userChosenColor = e.currentTarget.id;
    eval(userChosenColor).play();
    $("#"+userChosenColor).fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });

    if(userChosenColor === gamePattern[currentUserIndex])
    {
      $("h1").text("Stage " + (currentIndex+1));
      if(currentUserIndex < currentIndex)
      {
        ++currentUserIndex;
        console.log("yes");
      }
      else
      {
        currentUserIndex = 0;
        console.log("yes");

        setTimeout(function() { nextSequence(); }, 1000);

      }
    }
    else {
      $("h1").text("Wrong! Click anywhere to try again!");
      reset();
    }
  }

});
