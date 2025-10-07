// Select elements
const menuIcon = document.getElementById('menu');
const nav = document.querySelector('nav');
const insta = document.getElementById('insta');
const link = document.getElementById('link')

// Toggle menu on click
menuIcon.addEventListener('click', () => {
  nav.classList.toggle('active');

  // Change icon (menu ↔ close)
  if (nav.classList.contains('active')) {
    menuIcon.classList.remove('ri-menu-3-fill');
    menuIcon.classList.add('ri-close-fill');
  } else {
    menuIcon.classList.remove('ri-close-fill');
    menuIcon.classList.add('ri-menu-3-fill');
  }
});

insta.addEventListener("click",()=>{
    window.open("https://www.instagram.com/djs.nova/");
})
link.addEventListener("click",()=>{
    window.open("https://www.linkedin.com/company/djs-nova/");
})