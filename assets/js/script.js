// Navbar Script Start
document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById('navbar');

    function updateNavbar() {
        if (window.scrollY > 140) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateNavbar);
});
// Navbar Script End

// Scroll Effect Start
// Scroll Reveal
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('#hero h1, .heading, #brand h2, #service h6, #service h3, #project h6, #project h3, #customer-section h3, #insight h3, #footer1 .contact-section,#services-hero h1, #contact-hero h1 ', { origin: 'top' });
ScrollReveal().reveal('.service-content-main, .project-content-main', { origin: 'bottom' });
ScrollReveal().reveal('.hero-button, .customer-section-main, .insight-content-main, #services-hero h2, .service-left, #contact-hero p, #contact-input ', { origin: 'left' });
ScrollReveal().reveal('.service-right', { origin: 'right' });

// Scroll Effect End



