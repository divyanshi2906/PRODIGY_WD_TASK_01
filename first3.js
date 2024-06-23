let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-a');
    navbar.classList.toggle('active');
}

window.onclick = () => {
    menu.classList.remove('fa-a');
    navbar.classList.remove('active');
}

