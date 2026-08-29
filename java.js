if (page1){
    const radioButtons = document.querySelectorAll('input[name="sunny"]');
    const radioButtons = document.querySelectorAll('input[name="rainy"]');
    const radioButtons = document.querySelectorAll('input[name="cold"]');

radioButtons.forEach(radio => {
  radio.addEventListener('change', (event) => {
    const selectedValue = event.target.value;})
    //let UserAnswers = localStorage.getItem('Answers', selectedValue);
  localStorage.setItem("answers", JSON.stringify(selectedValue));
  let result = JSON.parse(localStorage.getItem("answers")) || [];
})

  console.log(result);




  }