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
showElements('play-ground');
continueGame() ;
}

function continueGame(){
const alfa = getRandomAlfa();
document.getElementById('current-alphabet').innerText= alfa;
setbackgroundColor(alfa);
}