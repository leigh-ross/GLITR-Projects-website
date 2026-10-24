const header = document.querySelector('header');
const logo = document.getElementById('main-logo');

// Check if the page has a hero section (this only exists on index.html)
const hasHero = document.querySelector('.hero') !== null;

function handleScroll() {
    // If the page has a hero AND we are at the top of the page
    if (hasHero && window.scrollY < 20) {
        header.classList.remove('scrolled'); 
        if (logo) logo.src = "images/testlogo.png"; // The dark logo
    } else {
        // For all other pages, OR if we scrolled down
        header.classList.add('scrolled'); 
        if (logo) logo.src = "images/GLITRLOGOLIGHTBG.png"; // The normal logo
    }
}

// Run it on page load and on scroll
handleScroll();
window.addEventListener('scroll', handleScroll);


// --- Date Restriction (Only runs on the Order page) ---
const dateInput = document.getElementById('event-date');

if (dateInput) { 
    const today = new Date();
    today.setDate(today.getDate() + 14);
    const minDate = today.toISOString().split('T')[0];
    dateInput.setAttribute('min', minDate);
}