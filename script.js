// for multiple use of a function
function hideElements(elementId){
const element = document.getElementById(elementId);
element.classList.add('hidden');
}

function showElements(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
    }


 function setbackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
 } 
 function removebackgroundColor(elementId){
   const element = document.getElementById(elementId);
   element.classList.remove('bg-orange-400');
} 
    
    function getRandomAlfa(){
        const alfastring ='abcdefghijklmnopqrstuvwxyz';
        const alfabates = alfastring.split(''); 
        const randomNumber = Math.random()*25;
        const index = Math.round(randomNumber);

        const alphabet = alfabates[index];

        return alphabet;
    }

function playNow(){
   hideElements('home-screen');
   hideElements('final-score');
showElements('play-ground');

//reset score and life
setTextElementValueById('current-life', 5);
setTextElementValueById('current-score', 0);

continueGame() ;
}

function continueGame(){
const alfa = getRandomAlfa();
document.getElementById('current-alphabet').innerText= alfa;
setbackgroundColor(alfa);
}




function handleKeyboardKeyUpEvent(event){
   //get the pressed alphabet
const playerPressed = event.key;
//stop the game
if(playerPressed==='Escape'){
   gameOver();
}

//get the screen's alphabet in lower case
const currentAlphabetElement = document.getElementById('current-alphabet').innerText.toLowerCase();


//check matched or not
if(playerPressed === currentAlphabetElement){
   console.log('You got a point');
   removebackgroundColor(currentAlphabetElement);
   continueGame();
   //update score:
   // 1.get the current score
   const currentScore = getTextElementValueById('current-score');
   // 2. increase the score by 1
   const newScore = currentScore + 1;
   // 3. show the updated score
  setTextElementValueById('current-score', newScore );

  
}
else{
   //step1-get the current life Number
const life=getTextElementValueById('current-life');
   //step2- reduce the life count
   const newlife = life - 1;
   //step3- display the duplicated life count
  setTextElementValueById('current-life' , newlife)

if(newlife === 0){
  gameOver();
 
}

}
}

document.addEventListener('keyup',handleKeyboardKeyUpEvent);



function gameOver(){
   hideElements('play-ground');
   showElements('final-score');
   //update final score
   //1. get the final Score
const lastScore= getTextElementValueById('current-score');

setTextElementValueById('game-score', lastScore);

//clear the last selected key
  const currentAlphabet = getElement('current-alphabet');
  removebackgroundColor(currentAlphabet);
}


function getTextElementValueById(elementId){
const element = document.getElementById(elementId).innerText;
const value= parseInt(element);
return value;
}

function setTextElementValueById(elementId , value){
const element = document.getElementById(elementId);
 element.innerText=value;
}

function getElement(elementId){
   const element = document.getElementById(elementId);
   const value = element.innerText;
   return value;
}