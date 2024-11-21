function toggleMenu() {
    const menu = document.getElementById('dropdownMenu');
    menu.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    const menu = document.getElementById('dropdownMenu');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    
    if (!menu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        menu.classList.remove('active');
    }
});
