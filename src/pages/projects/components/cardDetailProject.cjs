const cardDetails = () => {
  /* Input Pointers */
  const name = document.querySelector('#card-name');
  const number = document.querySelector('#card-nmbr');
  const month = document.querySelector('#card-month');
  const year = document.querySelector('#card-year');
  const cvc = document.querySelector('#card-cvc');
  const submit = document.querySelector('.form__submit');

  /* Output Pointers */
  const outName = document.querySelector('.card__owner');
  const outNumber = document.querySelector('.card__number');
  const outExpiry = document.querySelector('.card__expiry');
  const outCVC = document.querySelector('.card__cvv');

  /* Error Pointers */
  const error_name = document.querySelector('.error-name');
  const error_number = document.querySelector('.error-number');
  const error_calendar = document.querySelector('.error-date');
  const error_cvc = document.querySelector('.error-cvc');

  /* Div States */
  const form = document.querySelector('.form');
  const form_complete = document.querySelector('.form-complete');
  const complete = document.querySelector('#btn-complete');

  /* States */
  let isName = false;
  let isNumber = false;
  let isMonth = false;
  let isYear = false;
  let isCVC = false;

  /* Stored Value */
  let getName;
  let getNumber;
  let getMonth;
  let getYear;
  let getCvc;

  function notMonth(date) {
    let valid = false;
    if ((date > 12) || (date < 1)) {valid = true;}
    return valid;
  }
  function isNumberLessThan16Digits(number) {
    const numberString = number.toString();
    return ((numberString.length < 16) || (numberString.length > 16));
  }
  function isCVCnumber(number) {
    const numberString = number.toString();
    return ((numberString.length < 3) || (numberString.length > 3));
  }
  function formatCreditCardNumber(inputNumber) {
    const cleanedNumber = inputNumber.replace(/\s/g, '');
    const formattedNumber = cleanedNumber.replace(/(\d{4})/g, '$1 ');
    return formattedNumber.trim();
  }

  submit.addEventListener('click', () => {
    getName = name.value;
    getNumber = number.value;
    getMonth = parseInt(month.value);
    getYear = parseInt(year.value);
    getCvc = cvc.value;
    var i = 0;

    /* Name Checker */
    if (getName == '' || getName == null) {
      error_name.style.display = 'block';
      name.style.border = "1px solid var(--clr-error)";
      error_name.innerText = "Can't be blank";
    } else {
      error_name.style.display = 'none';
      name.style.border = "1px solid var(--clr-lightGrayishViolet)";
      isName = true;
    }

    /* Card Number Checker */
    if (getNumber == '' || getNumber == null) {
      error_number.style.display = 'block';
      number.style.border = "1px solid var(--clr-error)";
      error_number.innerText = "Can't be blank";
    } else if (isNumberLessThan16Digits(getNumber)) {
      error_number.style.display = 'block';
      number.style.border = "1px solid var(--clr-error)";
      error_number.innerText = "Number is not valid";
    } else {
      error_number.style.display = 'none';
      number.style.border = "1px solid var(--clr-lightGrayishViolet)";
      isNumber = true;
    }

    /* Calendar Checker */
    // Both are Blank
    if ((month.value == '' || month.value == null) && (year.value == '' || year.value == null)) {
      error_calendar.style.display = 'block';
      month.style.border = '1px solid var(--clr-error)';
      year.style.border = '1px solid var(--clr-error)';
      error_calendar.innerText = "Can't be blank";
    } else {
      // Month Error
      if (notMonth(getMonth)) {
        error_calendar.style.display = 'block';
        month.style.border = "1px solid var(--clr-error)";
        error_calendar.innerText = "Must be a valid date";
      } else if (month.value == '' || month.value == null) {
        error_calendar.style.display = 'block';
        month.style.border = "1px solid var(--clr-error)"; 
        error_calendar.innerText = "Must not be blank";
      } else {
        isMonth = true;
      }
      /* Year Error */
      if (getYear < 24) {
        error_calendar.style.display = 'block';
        year.style.border = '1px solid var(--clr-error)';
        error_calendar.innerText = 'Must be a valid year';
      } else if (year.value == '' || year.value == null || year.value == 0) {
        error_calendar.style.display = 'block';
        year.style.border = "1px solid var(--clr-error)";
        error_calendar.innerText = "Must not be blank";
      } else {
        isYear = true;
      }
      if (isMonth && isYear) {
        error_calendar.style.display = 'none';
        month.style.border = "1px solid var(--clr-lightGrayishViolet)";
        year.style.border = "1px solid var(--clr-lightGrayishViolet)";
      }
    }

    /* CVC Checker */
    if (getCvc == '' || getCvc == null) {
      error_cvc.style.display = 'block';
      cvc.style.border = "1px solid var(--clr-error)";
      error_cvc.innerText = "Can't be blank";
    } else if (isCVCnumber(getCvc)) {
      error_cvc.style.display = 'block';
      cvc.style.border = "1px solid var(--clr-error)";
      error_cvc.innerText = "Number is not valid";
    } else {
      error_cvc.style.display = 'none';
      cvc.style.border = "1px solid var(--clr-lightGrayishViolet)";
      isCVC = true;
    }

    console.table([isName, isNumber, isMonth, isYear, isCVC]);
    if (isName && isNumber && isMonth && isYear && isCVC) {
      outName.innerText = name.value.toUpperCase();
      outNumber.innerText = formatCreditCardNumber(number.value);
      outExpiry.innerText = `${getMonth}/${getYear}`;
      outCVC.innerText = cvc.value;
      form.style.display = 'none';
      form_complete.style.display = 'flex';
    }
  });

  complete.addEventListener('click', () => {
    name.value = "";
    number.value = "";
    month.value = "";
    year.value = "";
    cvc.value = "";
    outName.innerText = 'Jane Appleseed';
    outNumber.innerText = '0000 0000 0000 0000';
    outExpiry.innerText = '00/00';
    outCVC.innerText = '000';
    form.style.display = 'grid';
    form_complete.style.display = 'none';
  });
}

export default cardDetails;