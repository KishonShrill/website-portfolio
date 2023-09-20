const exploreButton = () => {
  const exploreBtnWeb = document.querySelector('.header__explore');
  const exploreBtnMobile = document.querySelector('.mobile-nav__btn');
  const closeBtn = document.querySelector('.explore-container__header');
  const exploreContainer = document.querySelector('.explore-container');

  let projectDiv = false;
  
  exploreBtnWeb.addEventListener('click', () => {
    projectDiv = !projectDiv;
    if (projectDiv) {
      exploreContainer.style.right = '0%';
      document.body.style.overflowY = 'fixed';
    } else {
      exploreContainer.style.right = '100%';
      document.body.style.overflowY = 'auto';
    }
  });

  exploreBtnMobile.addEventListener('click', () => {
    projectDiv = !projectDiv;
    if (projectDiv) {
      exploreContainer.style.right = '0%';
      document.body.style.overflowY = 'fixed';
    } else {
      exploreContainer.style.right = '100%';
      document.body.style.overflowY = 'auto';
    }
  });

  closeBtn.addEventListener('click', () => {
    projectDiv = !projectDiv;
    if (projectDiv) {
      exploreContainer.style.right = '0%';
      document.body.style.overflowY = 'fixed';
    } else {
      exploreContainer.style.right = '100%';
      document.body.style.overflowY = 'auto';
    }
  });
}

export default exploreButton;