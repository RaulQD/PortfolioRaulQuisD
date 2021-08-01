const openMenu = document.querySelector('.openMenu');
const navbarLink = document.querySelector('.navbar__link');

openMenu.addEventListener('click', () => {
    navbarLink.classList.toggle('show');
});
