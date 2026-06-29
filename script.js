// ==================== Navigation Active Link ==================== 
document.addEventListener('DOMContentLoaded', function() {
    updateActiveLink();
});

function updateActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ==================== Scroll to Section ==================== 
function scrollToSection() {
    const featuredSection = document.querySelector('.featured');
    if (featuredSection) {
        featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// ==================== Contact Form Handling ==================== 
function handleFormSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields');
        return;
    }
    
    // Display success message
    alert(`Thank you, ${name}! Your message has been received. I'll get back to you at ${email} soon!`);
    
    // Reset form
    document.querySelector('.contact-form').reset();
    
    console.log('Form submitted:', { name, email, message });
}

// ==================== Smooth Scrolling ==================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ==================== Add some interactivity to cards ==================== 
const cards = document.querySelectorAll('.card, .project-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.animation = 'none';
    });
});

// ==================== Mobile Menu Toggle (for future enhancement) ==================== 
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// ==================== Utility: Log page info ==================== 
console.log('Portfolio website loaded successfully!');
console.log('Current page:', window.location.pathname);
