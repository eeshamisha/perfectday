if (page1){
    const radioButtons = document.querySelectorAll('input[name="sunny"]');
    const radioButtons = document.querySelectorAll('input[name="rainy"]');
    const radioButtons = document.querySelectorAll('input[name="cold"]');

radioButtons.forEach(radio => {
  radio.addEventListener('change', (event) => {
    const selectedValue = event.target.value;})
    let UserScore = localStorage.getItem('Score', selectedValue);
  })
  console.log(UserScore);




  }