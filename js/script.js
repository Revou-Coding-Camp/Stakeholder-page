// TOGGLE MENU
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const body = document.body;

function toggleMenu() {
    navbar.classList.toggle('active');
    body.classList.toggle('no-scroll');

    if (navbar.classList.contains('active')) {
        menuToggle.textContent = '✖';
    } else {
        menuToggle.textContent = '☰';
    }
}

menuToggle.addEventListener('click', () => {
    toggleMenu();
    console.log('toggle active');
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navbar.classList.contains('active')) {
        toggleMenu();
    }
    else if (event.key === 'enter' && !navbar.classList.contains('active')) {
        event.preventDefault();
        toggleMenu();
    }
});

// THEME TOGGLE 

const themeToggle = document.getElementById('theme-toggle');
const themeImage = themeToggle.querySelector('img');

function toggleTheme() {
    const isDarkMode = body.classList.toggle('dark-mode');

    if (isDarkMode) {
        themeImage.setAttribute('inverted', '');
    } else {
        themeImage.removeAttribute('inverted');
    }

    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeImage.setAttribute('inverted', '');
    }
}

themeToggle.addEventListener('click', toggleTheme);

applySavedTheme();
