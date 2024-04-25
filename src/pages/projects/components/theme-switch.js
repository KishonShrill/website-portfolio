const themeSwitcher = () => {
  const radioButtons = document.querySelectorAll('input[name="toggle-state"]');
  const firstRadio = document.querySelector('#first');
  const secondRadio = document.querySelector('#second');
  const thirdRadio = document.querySelector('#third');

  if (localStorage.getItem('localTheme')) {
    const savedTheme = localStorage.getItem('localTheme');
    themeSwitcher(savedTheme);

    // Change the cheked radio button according to localTheme
    switch (savedTheme) {
      case 'first':
        secondRadio.removeAttribute('checked');
        thirdRadio.removeAttribute('checked');
        firstRadio.setAttribute('checked', '');
        break;
      case 'second':
        firstRadio.removeAttribute('checked');
        thirdRadio.removeAttribute('checked');
        secondRadio.setAttribute('checked', '');
        break;
      case 'third':
        firstRadio.removeAttribute('checked');
        secondRadio.removeAttribute('checked');
        thirdRadio.setAttribute('checked', '');
        break;
      default:
        break;
    }
  } else {firstRadio.setAttribute('checked', 'checked');}

  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener('change', function () {
      if (this.checked) {
        // Retrieve the value of the selected radio button
        const selectedValue = this.value;
        themeSwitcher(selectedValue);
      }
    });
  });

  function themeSwitcher(theme) {
    // Apply styles based on the selected value
    switch (theme) {
      case 'first':
        document.documentElement.style.setProperty('--clr-main', 'hsl(222, 26%, 31%)');
        document.documentElement.style.setProperty('--clr-keypad', 'hsl(223, 31%, 20%)');
        document.documentElement.style.setProperty('--clr-screen', 'hsl(224, 36%, 15%)');
        
        document.documentElement.style.setProperty('--clr-secondaryBackground', 'hsl(225, 21%, 49%)');
        document.documentElement.style.setProperty('--clr-secondaryShadow', 'hsl(224, 28%, 35%)');
        
        document.documentElement.style.setProperty('--clr-primaryBackground', 'hsl(6, 63%, 50%)');
        document.documentElement.style.setProperty('--clr-primaryShadow', 'hsl(6, 70%, 34%)');

        document.documentElement.style.setProperty('--clr-keyBackground', 'hsl(30, 25%, 89%)');
        document.documentElement.style.setProperty('--clr-keyShadow', 'hsl(28, 16%, 65%)');

        document.documentElement.style.setProperty('--text-clr', 'hsl(221, 14%, 31%)');
        document.documentElement.style.setProperty('--clr-deleteHover', 'hsl(226, 65%, 83%)');
        document.documentElement.style.setProperty('--clr-keysHover', 'hsl(30, 100%, 98%)');
        document.documentElement.style.setProperty('--clr-equalHover', 'hsl(6, 84%, 70%)');
        document.documentElement.style.setProperty('--clr-theme', 'aliceblue');
        document.documentElement.style.setProperty('--clr-equalColor', 'aliceblue');
        localStorage.setItem("localTheme", "first");
        break;
      case 'second':
        document.documentElement.style.setProperty('--clr-main', 'hsl(0, 0%, 90%)');
        document.documentElement.style.setProperty('--clr-keypad', 'hsl(0, 5%, 81%)');
        document.documentElement.style.setProperty('--clr-screen', 'hsl(0, 0%, 93%)');
        
        document.documentElement.style.setProperty('--clr-secondaryBackground', 'hsl(185, 42%, 37%)');
        document.documentElement.style.setProperty('--clr-secondaryShadow', 'hsl(224, 28%, 35%)');
        
        document.documentElement.style.setProperty('--clr-primaryBackground', 'hsl(25, 98%, 40%)');
        document.documentElement.style.setProperty('--clr-primaryShadow', 'hsl(25, 99%, 27%)');

        document.documentElement.style.setProperty('--clr-keyBackground', 'hsl(45, 7%, 89%)');
        document.documentElement.style.setProperty('--clr-keyShadow', 'hsl(35, 11%, 61%)');

        document.documentElement.style.setProperty('--text-clr', 'hsl(60, 10%, 19%)');
        document.documentElement.style.setProperty('--clr-deleteHover', 'hsl(185, 48%, 56%)');
        document.documentElement.style.setProperty('--clr-keysHover', 'hsl(30, 100%, 98%)');
        document.documentElement.style.setProperty('--clr-equalHover', '#ff8b38');
        document.documentElement.style.setProperty('--clr-theme', 'var(--text-clr)');
        document.documentElement.style.setProperty('--clr-equalColor', 'aliceblue');
        localStorage.setItem("localTheme", "second");
        break;
      case 'third':
        document.documentElement.style.setProperty('--clr-main', 'hsl(268, 75%, 9%)');
        document.documentElement.style.setProperty('--clr-keypad', 'hsl(268, 71%, 12%)');
        document.documentElement.style.setProperty('--clr-screen', 'hsl(268, 71%, 12%)');
        
        document.documentElement.style.setProperty('--clr-secondaryBackground', 'hsl(281, 89%, 26%)');
        document.documentElement.style.setProperty('--clr-secondaryShadow', 'hsl(285, 91%, 52%)');
        
        document.documentElement.style.setProperty('--clr-primaryBackground', 'hsl(176, 100%, 44%)');
        document.documentElement.style.setProperty('--clr-primaryShadow', 'hsl(177, 92%, 70%)');

        document.documentElement.style.setProperty('--clr-keyBackground', 'hsl(268, 47%, 21%)');
        document.documentElement.style.setProperty('--clr-keyShadow', 'hsl(290, 70%, 36%)');

        document.documentElement.style.setProperty('--text-clr', 'hsl(52, 100%, 62%)');
        document.documentElement.style.setProperty('--clr-deleteHover', '#8631b0');
        document.documentElement.style.setProperty('--clr-keysHover', '#6b34ac');
        document.documentElement.style.setProperty('--clr-equalHover', '#94fff9');
        document.documentElement.style.setProperty('--clr-theme', 'hsl(52, 100%, 62%)');
        document.documentElement.style.setProperty('--clr-equalColor', 'hsl(198, 20%, 13%)');
        localStorage.setItem("localTheme", "third");
        break;
      default:
        break;
    }
  }
}

export default themeSwitcher;