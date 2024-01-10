var navbar = document.querySelector('.Nav')
window.onscroll = () => {
    if (window.scrollY > 20) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};