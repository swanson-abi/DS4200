/* function toggleMenu() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
} */

document.addEventListener('click', function(event) {
    const dropdownMenu = document.getElementById('dropdownMenu');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    
    if (dropdownMenu.style.display === 'block' && 
        !dropdownMenu.contains(event.target) && 
        !hamburgerMenu.contains(event.target)) {
        dropdownMenu.style.display = 'none';
    }
});
