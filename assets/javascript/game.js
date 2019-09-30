var number_random;
var losses = 0;
var wins = 0;
var playerNumber = 0;
var random;
$( document ).ready(function(){
number_random = Math.floor(Math.random() * 69 ) + 30;


 $("#computer-number").html(' ' + number_random);
    
 var num1 = Math.floor(Math.random()*11+1)
 var num2= Math.floor(Math.random()*11+1)
 var num3= Math.floor(Math.random()*11+1)
 var num4= Math.floor(Math.random()*11+1)

 $("wins-text").text(wins);
 $("losses-text").text(losses);

 function reset(){
    number_random = Math.floor(Math.random() * 69) + 30;

    $('#number_random').text(number_random);
    num1 = Math.floor(Math.random()*11+1);
    num2 = Math.floor(Math.random()*11+1);
    num3 = Math.floor(Math.random()*11+1);
    num4 = Math.floor(Math.random()*11+1);
    playerNumber= 0;
    $('#your-score-text').text(playerNumber);
    } 

function youWin(){
alert("You Won!");
wins++; 
$('#wins-text').text(wins);
reset();
}

function youLose(){
alert ("You lose!");
losses++;
$('#losses-text').text(losses);
reset()
}

$('#ruby').on ('click', function(){
  playerNumber = playerNumber + num1;
  console.log("New playerNumber = " + playerNumber);
  $('#your-score-text').text(playerNumber); 
        
      if (playerNumber == number_random){
        youWin();
      }
      else if ( playerNumber > number_random){
        youLose();
      }   
})  
$('#diamond').on ('click', function(){
  playerNumber = playerNumber + num2;
  console.log("New playerNumber= " + playerNumber);
  $('#your-score-text').text(playerNumber); 
      if (playerNumber == number_random){
        youWin();
      }
      else if ( playerNumber > number_random){
        youLose();
      } 
})  
$('#gym').on ('click', function(){
  playerNumber = playerNumber + num3;
  console.log("New playerNumber= " + playerNumber);
  $('#your-score-text').text(playerNumber);

        if (playerNumber == number_random){
        youWin();
      }
      else if ( playerNumber > number_random){
        youLose();
      } 
})  
$('#emerald').on ('click', function(){
  playerNumber = playerNumber + num4;
  console.log("New playerNumber= " + playerNumber);
  $('#your-score-text').text(playerNumber); 
    
        if (playerNumber == number_random){
        youWin();
      }
      else if ( playerNumber > number_random){
        youLose();
      }
});  
}); 