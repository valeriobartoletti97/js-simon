"use strict";
simonSays();
function simonSays(){
  /* variables section */
  const numbersContainer = document.getElementById('numbers-container');
  const inputContainer = document.getElementById('input-container');
  const result = document.getElementById('result');
  const resetBtn = document.getElementById('reset-btn');
  let score = 0;
  myReset();
  play();
  function play(){
   /* generating numbers */
  const numbersToGenerate = 5;
  const generatedNumbers = [];
  let userNumbers = [];
   while(generatedNumbers.length < numbersToGenerate){
    let numberGenerated = getRndInteger(1, 100);
    console.log(numberGenerated)
    if(!generatedNumbers.includes(numberGenerated)){
        generatedNumbers.push(numberGenerated);
    };
   };
   console.log(generatedNumbers);
   numbersContainer.innerHTML = generatedNumbers.join(' ')

   /* timeout */
   setTimeout(time, 3000);
   function time(){
    numbersContainer.classList.add('d-none');
    inputContainer.classList.remove('d-none');
   };

   const inputEl = document.getElementsByTagName('input');
   /* console.log(inputEl) */
   const btn = document.querySelector('.btn-success');
   
   /* button click */
   btn.addEventListener('click', function(){
    /* array of users numbers */
    for (let i = 0; i < inputEl.length; i++){
        let a = parseInt(inputEl[i].value);
        userNumbers.push(a);
    };
    console.log(userNumbers);
    userScore();
    console.log(score);
    results();
   });
   
   /* score */
   function userScore(){
    for(let i = 0; i < userNumbers.length; i++){
        for(let j = 0; j < generatedNumbers.length; j++){
            if(userNumbers[i] === generatedNumbers[j])
            score++;
        };
       }; 
   };

   /* result */
   function results(){
    let msg = score === 0 ? '<br> Sei veramente una frana... Riprova' : score === 5 ? '<br> Hai vinto! Complimenti non ho mai visto un giocatore così forte!' : '';
    console.log(msg)
    result.innerHTML = 'Il tuo punteggio è : ' + score + msg;
    inputContainer.classList.add('d-none');
    result.classList.remove('d-none');
    resetBtn.classList.remove('d-none');
   };
  };

  /* reset */
  resetBtn.addEventListener('click',myReset);
  function myReset(){
   score = 0
   result.classList.add('d-none');
   resetBtn.classList.add('d-none');
   numbersContainer.classList.remove('d-none')
   play();
  };
};
