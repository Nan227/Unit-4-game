// jQuery Crystals Collector Game
$(document).ready(function (){

  // values a random number
  Var randomNumber = getNumber(19,120);
 
  // values crystal color
  var bluegem = getNumber(1,12);
  var green = getNumber(1,12);
  var red = getNumber(1,12);
  var yellow = getNumber(1,12);

  // check values
  console.log(bluegem, green, yellow,red);

  var totalNumber = 0;

  // var game score
  var wins = 0;
  var losses = 0;

  // start the game
  var startclick = true; 

  // game start
  getValues();
  $("tnumber").text(totalNumber);

  // get random Number
  function getNumber(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
  }


    function getValues(){
      $("#rnumber").text(randomNumber);

    // Add value of each crystal

    $("#bluec").on("click",function(){
      totalNumber += bluegem;
      $("tnumber").text(totalNumber);
      gamePlay();
    })

    $("#yellowc").on("click",function(){
      totalNumber += yellow;
      $("tnumber").text(totalNumber);
      gamePlay();
    })

    $("#greenc").on("click",function(){
      totalNumber += green;
      $("tnumber").text(totalNumber);
      gamePlay();
    })

    $("#yellowc").on("click",function(){
      totalNumber += yellow;
      $("tnumber").text(totalNumber);
      gamePlay();
    })
    }
    // new random number
    function resetGame(){
      getNumber();
      getValues();

    // reset the random number
    randomNumber = getNumber(19,120);
    $("#rnumber").text(randomNumber);

    //reset total number
    totalNumber = 0;
    $("#tnumber").text(totalNumber);

  // startclick working
    startclick === true;
  }

    function gamePlay(){
      // first click the game reset result message
      if (startclick === true) {
        startclick===false;
        $("#loseText").text("");
        $("#winText").text("");
      }
      // if player matches the target number
      if (totalNumber === randomNumber){
        win ++;
        $ ("#winText").text("You won!");
        // display win count
        $("win").text("wins: " + wins);
      // restart game
      resetGame();
      }
      //if total user number greater than random number, user losses
      else if (totalNumber>randomNumber){
        losses ++;
        //display message
        $("#losetext").text("You lost");
        $("#lose").text("LOSSES: "+ losses);
        resetGame();
      }
    }
}
