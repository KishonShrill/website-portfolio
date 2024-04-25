export const ageCalculator = () => {
  const ageBtn = document.querySelector('.checker__btn');

  /* Output Pointers */
  const dayOutput = document.querySelector('#days');
  const monthOutput = document.querySelector('#months');
  const yearOutput = document.querySelector('#years');

  /* Error Pointers */
  const dayError = document.querySelector('.error-day');
  const monthError = document.querySelector('.error-month');
  const yearError = document.querySelector('.error-year');
  const date__inputs = document.querySelectorAll('.date__input');
  const date__legends = document.querySelectorAll('.date__legend');
  
  ageBtn.addEventListener('click', () => {
    let dd = parseInt(document.querySelector('.input__day').value);
    let mm = parseInt(document.querySelector('.input__month').value);
    let yyyy = parseInt(document.querySelector('.input__year').value);

    /* State restarter */
    dayError.innerText = "";
    monthError.innerText = "";
    yearError.innerText ="";
    
    const calculateAge = (birthday) => {
      const today = new Date();
      const birthDate = new Date(birthday);
      const ageInMilliseconds = today - birthDate;
      let error = false;

      if (isNaN(dd) || isNaN(mm) || isNaN(yyyy) || dd == 0 || mm == 0 || yyyy == 0) {
        dayError.innerText = "This field is required";
        monthError.innerText = "This field is required";
        yearError.innerText = "This field is required";
        error = true;
      }

      if (yyyy > today.getFullYear()) {
        yearError.innerText = "Must be in the past";
        error = true;
      } 
      if ((dd > today.getDate()) && (mm == today.getMonth())) {
        dayError.innerText = "Must be in the past";
        error = true;
      }
      if (dd == 0) {dayError.innerText = "Must be a valid date";}
      if (yyyy == 0) {yearError.innerText = "Must be a valid date";}
      
      switch (mm) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
          if (dd > 31 || dd < 0) {
            dayError.innerText = "Must be a valid day";
            error = true;
          }
          break;

        case 4: case 6: case 9: case 11:
          if (dd > 31 || dd < 0) {
            dayError.innerText = "Must be a valid day";
            error = true;
          } else if (dd == 30) { 
            dayError.innerText = "Must be a valid date";
            error = true;
          }
          break;

        case 2:
          if (dd > 31 || dd < 0) {
            dayError.innerText = "Must be a valid day";
            error = true;
          } else if (dd > 29) {
            dayError.innerText = "Must be a valid date";
            error = true;
          }
          break;

        default:
          dayError.innerText = "Must be a valid date";
          monthError.innerText = "Must be a valid month";
          error = true;
          break;
      }

      const years = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
      const months = Math.floor((ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
      const days = Math.floor((ageInMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

      return {
        years,
        months,
        days,
        error
      };
    };
    
    const age = calculateAge(`${yyyy}-${mm}-${dd}`);
    
    if (age.error === true) {
      dayOutput.innerText = "- -";
      monthOutput.innerText = "- -";
      yearOutput.innerText = "- -";

      date__legends.forEach(legend => {
        legend.style.color = "var(--clr-lightred)";
      });
      date__inputs.forEach(inputs => {
        inputs.style.borderColor = "var(--clr-lightred)";
      });
    }
    
    if (age.error === false) {  
      date__legends.forEach(legend => {
        legend.style.color = "var(--clr-smokegrey)";
      });
      date__inputs.forEach(inputs => {
        inputs.style.borderColor = "var(--clr-lightgrey)";
      });

      dayOutput.innerText = `${age.days}`;
      monthOutput.innerText = `${age.months}`;
      yearOutput.innerText = `${age.years}`;
    } 
  });
};

export default ageCalculator;