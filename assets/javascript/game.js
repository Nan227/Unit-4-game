$( document ).ready(function(){
  // Generates random number to guess
  var random=Math.floor(Math.random()*102+19);
  
  // Display random number
  $('#scoreToMatch').text(random);

   // Variables to keep track of wins, losses and total
   var playerTotal= 0; 
   var wins= 0;
   var losses = 0;
   
  //Generate random number for each crystal
  var num1= Math.floor(Math.random()*12+1);
  var num2= Math.floor(Math.random()*12+1);
  var num3= Math.floor(Math.random()*12+1);
  var num4= Math.floor(Math.random()*12+1);
  
 
$('#wins').text(wins);
$('#losses').text(losses);

// Reset game
function reset(){
      random=Math.floor(Math.random()*102+19);
      $('#scoreToMatch').text(random);
      playerTotal= 0;
      $('#totalScore').text(playerTotal);
      console.log(random);
      } 
// Display wins
function wingame(){
alert("Congrats! You won!");
  wins++; 
  $('#wins').text(wins);
  reset();
}
// Display losses
function loser(){
alert ("Sorry! You lose!");
  losses++;
  $('#losses').text(losses);
  reset();
}
// Clicking crystals
  $('#redc').on ('click', function(){
    playerTotal = playerTotal + num1;
    console.log("New playerTotal= " + playerTotal);
    $('#totalScore').text(playerTotal); 
          //Win & lose conditions
        if (playerTotal == random){
          wingame();
        }
        else if ( playerTotal > random){
          loser();
        }   
  })  
  $('#bluec').on ('click', function(){
    playerTotal = playerTotal + num2;
    console.log("New playerTotal= " + playerTotal);
    $('#totalScore').text(playerTotal); 
        if (playerTotal == random){
          wingame();
        }
        else if ( playerTotal > random){
          loser();
        } 
  })  
  $('#yellowc').on ('click', function(){
    playerTotal = playerTotal + num3;
    console.log("New playerTotal= " + playerTotal);
    $('#totalScore').text(playerTotal);
          if (playerTotal == random){
          wingame();
        }
        else if ( playerTotal > random){
          loser();
        } 
  })  
  $('#greenc').on ('click', function(){
    playerTotal = playerTotal + num4;
    console.log("New playerTotal= " + playerTotal);
    $('#totalScore').text(playerTotal); 
      
          if (playerTotal == random){
          wingame();
        }
        else if ( playerTotal > random){
          loser();
        }
  });   
}); 