const emailGetter = () => {
  document.querySelector('.getEmail').innerText = localStorage.getItem("email");
}

export default emailGetter;