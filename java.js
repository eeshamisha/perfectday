const scores = {
  rainy: 0,
  cold: 0,
  sunny: 0,
};

const buttons = document.querySelectorAll('.btn');
const nextButton = document.getElementById('nextButton');
const backButton = document.getElementById('backButton');

nextButton.addEventListener('click', function() {
  const input = document.querySelector('input:checked');
  const choice = input.value; 
  scores[choice] += 1;
  console.log(scores);
})
