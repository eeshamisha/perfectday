const scores = JSON.parse(localStorage.getItem('quizscore')) || {
  rainy: 0,
  cold: 0,
  sunny: 0,
};

const buttons = document.querySelectorAll('.btn');
const reset = document.getElementById('resetButton');

function saveScore() {
  const input = document.querySelector('input:checked');
  const choice = input.value; 
  scores[choice] += 1;
  localStorage.setItem('quizscore', JSON.stringify(scores));
  console.log(scores);
}

reset.addEventListener('click', () => {
  localStorage.clear();
})

const results = document.getElementById('resultspage');
if (results){
  console.log(scores);
  console.log(Math.max(...scores));
}