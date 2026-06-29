const menuToggle = document.querySelector('.menu-toggle');
const navLink = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () =>{
    navLink.classList.toggle('active');
});
console.log("Script jalan");