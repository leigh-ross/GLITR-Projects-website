// Header for home page with the hero section
const header = document.querySelector('header');
const logo = document.getElementById('main-logo');

const hasHero = document.querySelector('.hero') !== null;

function handleScroll() {
    if (hasHero && window.scrollY < 20) {
        header.classList.remove('scrolled'); 
        if (logo) logo.src = "images/testlogo.png";
    } else {
        // For all other pages, OR if we scrolled down
        header.classList.add('scrolled'); 
        if (logo) logo.src = "images/GLITRLOGOLIGHTBG.png";
    }
};

handleScroll();
window.addEventListener('scroll', handleScroll);

// Order page date validation
const dateInput = document.getElementById('event-date');

if (dateInput) { 
    const today = new Date();                           // get todays date
    today.setDate(today.getDate() + 14);                // add 14 days to date and set as current date
    const minDate = today.toISOString().split('T')[0];  // store current date in string format for set attr
    dateInput.setAttribute('min', minDate);             // set min attribute to today+14, date pick range is (today+14, infinity)
}

/*
add pics input in order page
restrict orders to one order on a particular date
*/