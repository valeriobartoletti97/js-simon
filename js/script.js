"use strict";
simonSays();
function simonSays(){
    /* variables section */
   const numbersContainer = document.getElementById('numbers-container');
   const inputContainer = document.getElementById('input-container');
   const numbersToGenerate = 5;
   const generatedNumbers = [];
   let score = 0;
   
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
   setTimeout(time, 3000);
   function time(){
    numbersContainer.classList.add('d-none');
    inputContainer.classList.remove('d-none');
   };

   const inputEl = document.getElementsByTagName('input');
   /* console.log(inputEl) */
   const btn = document.querySelector('.btn');
   
   /* button click */
   btn.addEventListener('click', function(){
    /* array of users numbers */
    let userNumbers = []
    for (let i = 0; i < inputEl.length; i++){
        let a = parseInt(inputEl[i].value);
        userNumbers.push(a);
    }
    console.log(userNumbers)
   })
};
