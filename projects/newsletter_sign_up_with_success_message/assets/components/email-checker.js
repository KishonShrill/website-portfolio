const emailChecker = () => {
  const emailBtn = document.querySelector('.sign-up__btn');

  emailBtn.addEventListener('click', () => {
    const emptyWarningText = document.querySelector('.sign-up__warning');
    const emailInputBox = document.querySelector('#email');
    const emailInput = emailInputBox.value.trim(); // Trim removes leading and trailing whitespaces just so you don't know
    
    if (!isValidEmail(emailInput)) {
      console.error("Not a valid email");
      emptyWarningText.innerText = 'Valid email required'
      emailInputBox.style.border = '2px solid red';
      return 0; // This will immediately exit the function and will not execute the code below this
    }

    localStorage.removeItem("email");
    localStorage.setItem("email", emailInput.toLowerCase());
    emptyWarningText.innerText = ''; // Clear any previous warning
    emailInputBox.style.border = '1px solid #252525'; // Reset border
    window.location.href = './success/';
  });

  const isValidEmail = (email) => {
    const emailRegex = /^(?=.*[@])((?=.*yahoo\.com)|(?=.*gmail\.com)|(?=.*email\.com)|(?=.*hotmail\.com))\S*$/;
    return emailRegex.test(email.toLowerCase()); // Case-insensitive matching
  };
};

export default emailChecker;