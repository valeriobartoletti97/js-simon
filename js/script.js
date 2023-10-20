"use strict";
simonSays();
function simonSays(){
   const appContainer = document.getElementById('container');
   const numbersToGenerate = 5;
   const generatedNumbers = [];

   while(generatedNumbers.length < numbersToGenerate){
    let numberGenerated = getRndInteger(1, 100);
    console.log(numberGenerated)
    if(!generatedNumbers.includes(numberGenerated)){
        generatedNumbers.push(numberGenerated);
    };
   };
   console.log(generatedNumbers);
   appContainer.innerHTML = generatedNumbers.join(' ')
}