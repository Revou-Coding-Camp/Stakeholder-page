// TOGGLE MENU
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const body = document.body;
const introduction = document.getElementById('introduction');
const portofolio = document.getElementById('portofolio');
const message = document.getElementById('message');
const profile = document.getElementById('profile');
const footer = document.querySelector('footer');

// INPUT
const nameForm1 = document.getElementById('name-form');
const nameInput1 = document.getElementById('name-input');
const formSection1 = document.getElementById('form-section1');

const nameForm2 = document.getElementById('name-form2');
const nameInput2 = document.getElementById('name-input2');

const userName = document.getElementById('user-name');
const nameInForm = document.getElementById('name');
const resultName = document.getElementById('resultName');



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

    themeImage.classList.remove('muter');
    void themeImage.offsetWidth;
    themeImage.classList.add('muter');

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


// INPUT 


function handleSubmit(inputElement, event) {
    event.preventDefault();

    const name = inputElement.value;

    if (name) {
        userName.textContent = `Hi, ${name}!`;
        resultName.textContent = name;
        nameInForm.textContent = `Name: ${name}`;
        
        introduction.textContent = 'Ini adalah Website latihan pertama';

        body.classList.remove('no-scroll');
        navbar.classList.remove('view');


        footer.style.display = 'flex';
        portofolio.style.display = 'flex';
        message.style.display = 'flex';
        profile.style.display = 'flex';
        formSection1.style.display = 'none';
        nameForm2.style.display = 'none';
        window.location.href = '#home';
    }
}

nameForm1.addEventListener('submit', (event) => {
    handleSubmit(nameInput1, event);
});

nameForm2.addEventListener('submit', (event) => {
    handleSubmit(nameInput2, event);
});

// Dapatkan semua elemen yang dibutuhkan
// Dapatkan semua elemen yang dibutuhkan
const messageForm = document.getElementById('messageForm');
const infoBox = document.getElementById('infoBox');
const resultEmail = document.getElementById('resultEmail');
const resultPhone = document.getElementById('resultPhone');
const resultMessage = document.getElementById('resultMessage');
const userNameDisplay = document.getElementById('user-name');

messageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const userName = userNameDisplay.textContent.replace('Hi, ', '').replace('!', '');
    
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const message = event.target.message.value;

    resultName.textContent = userName || '-'; 
    resultEmail.textContent = email || '-';
    resultPhone.textContent = phone || '-';
    resultMessage.textContent = message || '-';
});