const scores = {
  rainy: 0,
  cold: 0,
  sunny: 0,
};

const buttons = document.querySelectorAll('.btn');
const nextButton = document.getElementById('nextButton');
const backButton = document.getElementById('backButton');

function saveScore() {
  const input = document.querySelector('input:checked');
  const choice = input.value; 
  scores[choice] += 1;
  console.log(scores);
}

const results = document.getElementById('resultspage');
const here = document.getElementById('here');
const rBtn = document.getElementById("resultsBtn");
rBtn.addEventListener("click",function(){
  
})
if (results){
  const highestPlayer = scores.reduce((max, item) => item > max.item ? item : max);
  console.log(highestPlayer);
  here.innerHTML+=`
  ${highestPlayer}
  `;
}
