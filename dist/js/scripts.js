import AOS from 'aos';
import 'aos/dist/aos.css'; // Jika Anda tidak ingin mengimpor CSS di HTML

// Inisialisasi AOS
AOS.init();

// Hamburger
const Hamburger = document.querySelector('#hamburger');
const navMenu   = document.querySelector('#nav-menu')

Hamburger.addEventListener('click', function () {
    Hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden')
});

// navbar FIXED
window.onscroll = function() {
    const header = document.querySelector('header');
    const navbarFixed = header.offsetTop;

    if (window.scrollY > navbarFixed) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}