const navSideBar = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const navigationPane = document.querySelector('.navigation-sidebar');
    const openBtn = document.querySelector('.navbar-btnOpen');
    const closeBtn = document.querySelector('.navbar-btnClose');

    openBtn.addEventListener('click', () => {
      navigationPane.style.right = '0';
      body.style.overflowY = 'hidden';
    });
    closeBtn.addEventListener('click', () => {
      navigationPane.style.right = '-100%';
      body.style.overflowY = 'auto';
    });
  });
}

export default navSideBar;