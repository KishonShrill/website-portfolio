const calculator = () => {
  const display = document.querySelector(".screen");
  const buttons = document.querySelectorAll("#keys");
  const equalsButton = document.querySelector(".equals");

  const calculate = (expression) => {
    try {
      // Use Function constructor to create a function that calculates the expression
      const calculationFunction = new Function('return ' + expression);
      // Execute the function to get the result
      return calculationFunction();
    } catch (error) {
      // Handle errors, e.g., invalid expressions
      console.error('Calculation error:', error);
      return null;
    }
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const buttonValue = button.value;

      if (buttonValue === 'DEL') {
        // Handle DEL button (remove the last character)
        display.value = display.value.slice(0, -1);
      } else if (buttonValue === 'AC') {
        // Handle DELETE button (clear the display)
        display.value = '';
      } else if (buttonValue === '=') {
        display.value = calculate(display.value);
      } else {
        // Default behavior for other buttons (append the button's value)
        display.value += buttonValue;
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    // Check if the pressed key is the Enter key (key code 13)
    if (event.key === 'Enter') {
      // Programmatically click the equals button
      equalsButton.click();
    }
  });
}

export default calculator;
