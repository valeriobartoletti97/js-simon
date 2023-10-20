"use strict";
simonSays();
function simonSays(){
    /* variables section */
   const numbersContainer = document.getElementById('numbers-container');
   const numbersToGenerate = 5;
   const generatedNumbers = [];
   
   /* generating numbers */
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
   setTimeout(play, 3000);
   function play(){
    numbersContainer.classList.add('d-none');

   };

};
