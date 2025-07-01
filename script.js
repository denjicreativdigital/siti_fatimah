// toggle class active
const navbarnav = document.querySelector('.navbar-opsi');

// ketika navbar hamburger menu di click
document.querySelector('#menu').
onclick = () => {
    navbarnav.classList.toggle('active');
};

// menghilangkan navbar hamburger menu diluar sidebar
const hamburger = document.querySelector('#menu');

document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active');
    }
});


