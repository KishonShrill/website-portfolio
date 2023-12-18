const styledBtn = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const ratingButtons = document.querySelectorAll('button[name="rating"]');
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
  });
}

export default styledBtn;