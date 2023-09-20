const navButton = () => {
  const navBtn = document.querySelector('.comment__btn')
  const commentDiv = document.querySelector('.comment-container');
  // const websiteBody = document.

  // State
  let mobileNavOpen = false;

  navBtn.addEventListener('click', () => {
    mobileNavOpen = !mobileNavOpen;
    if (mobileNavOpen) {
      commentDiv.style.right = '0%';
      document.body.style.overflowY = 'fixed';
    } else {
      commentDiv.style.right = '100%';
      document.body.style.overflowY = 'auto';
    }

    console.log(mobileNavOpen);
  });
}

export default navButton;