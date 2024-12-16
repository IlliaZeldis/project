const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    themeToggle.textContent = 'Світла тема';
  } else {
    themeToggle.textContent = 'Темна тема';
  }
});
const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
burgerMenu.addEventListener('click', () => {
  // menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  // burgerMenu.classList.toggle('active');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }  
});
const listViewBtn = document.getElementById('list-view-btn');
const gridViewBtn = document.getElementById('grid-view-btn');
const newsContainer = document.getElementById('news-container');
listViewBtn.addEventListener('click', () => {
  newsContainer.className = 'list-view';
  listViewBtn.classList.add('active');
  gridViewBtn.classList.remove('active');
});
gridViewBtn.addEventListener('click', () => {
  newsContainer.className = 'grid-view';
  gridViewBtn.classList.add('active');
  listViewBtn.classList.remove('active');
});
const upButton = document.querySelector('.up-button');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
        upButton.classList.add('shown'); 
    } else {
        upButton.classList.remove('shown'); 
    }
});
upButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});
const cookiesAgreement = document.querySelector('.cookies-agreement');
const cookiesButton = document.querySelector('.cookies-button');
cookiesButton.addEventListener('click', () => {
  cookiesAgreement.classList.add('cookies-agreement-closed');
});