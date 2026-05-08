const styledBtn = () => {
  const ratingButtons = document.querySelectorAll('button[name="rating"]');
  const submitButton = document.querySelector('.component__submit');
  const scorePick = document.querySelector('.score-rating');
  var frontCard = document.querySelector('.front-card');
  var backCard = document.querySelector('.back-card');
  let rating = 0;

  function rate(star) {
    rating = star; 
    for (let i = 1; i <= 5; i++) {
      const rateElement = document.getElementById(`rateBtn${i}`);
      rateElement.style.color = "var(--clr-mediumGrey)";
      rateElement.style.backgroundColor = "var(--clr-mediumBlue)";
    }
    for (let i = 1; i <= star; i++) {
      const rateElement = document.getElementById(`rateBtn${i}`);
      rateElement.style.color = "var(--clr-light)";
      rateElement.style.backgroundColor = "var(--clr-primary)";
    }
  }

  ratingButtons.forEach((rateBtn) => {
    rateBtn.addEventListener('click', function () {
      console.log(this.value);
      console.log("value is: " + rating);
      rate(this.value);
    });
  });

  submitButton.addEventListener('click', () => {
    if (0 == rating) { 
      alert("You must leave a rating to proceed."); 
      return;
    }
    frontCard.style.transform = 'rotateY(180deg)';
    backCard.style.transform ='rotateY(0deg)';
    scorePick.innerText = `${rating}`;
  });
}

export default styledBtn;