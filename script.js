// Loading Screen
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1000);
});

// Navigation Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Floating Particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}



// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile Menu Toggle
document.getElementById('mobileMenu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
        mobileMenu.classList.remove('active');
    } else {
        navLinks.style.display = 'flex';
        mobileMenu.classList.add('active');
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        const navLinks = document.querySelector('.nav-links');
        const mobileMenu = document.getElementById('mobileMenu');
        navLinks.style.display = 'none';
        mobileMenu.classList.remove('active');
    });
});

// Download CV Functionality
document.getElementById('downloadCV').addEventListener('click', function(e) {
    e.preventDefault();
    
    const downloadBtn = this;
    const originalText = downloadBtn.querySelector('span:first-child').textContent;
    
    // Add downloading state
    downloadBtn.classList.add('downloading');
    downloadBtn.querySelector('span:first-child').textContent = 'Downloading...';
    
    try {
        // Method 1: Direct download
        const link = document.createElement('a');
        link.href = 'CV_Mohamed_Fayad_5_2025.pdf';
        link.download = 'CV_Mohamed_Fayad.pdf';
        link.target = '_blank';
        
        // Append to body, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Success feedback
        setTimeout(() => {
            downloadBtn.querySelector('span:first-child').textContent = 'Downloaded!';
            downloadBtn.style.background = 'var(--success-color)';
            
            setTimeout(() => {
                downloadBtn.classList.remove('downloading');
                downloadBtn.querySelector('span:first-child').textContent = originalText;
                downloadBtn.style.background = '';
            }, 1500);
        }, 1000);
        
    } catch (error) {
        // Fallback: Open in new tab
        window.open('CV_Mohamed_Fayad_5_2025.pdf', '_blank');
        
        setTimeout(() => {
            downloadBtn.classList.remove('downloading');
            downloadBtn.querySelector('span:first-child').textContent = originalText;
        }, 2000);
    }
});

// Initialize particles
createParticles();

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// Animated Statistics Counter
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Intersection Observer for statistics
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe statistics section
const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Enhanced particle system
function createEnhancedParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        particle.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
        particlesContainer.appendChild(particle);
    }
}

// Initialize enhanced particles
createEnhancedParticles(); 