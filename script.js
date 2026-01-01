// Interactive Resume Script

document.addEventListener('DOMContentLoaded', () => {

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load


    // --- Dynamic Particle Background ---
    const particlesContainer = document.getElementById('particles');
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }

    function createParticle() {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.borderRadius = '50%';
        particle.style.background = 'rgba(255, 255, 255, 0.4)';
        particle.style.backdropFilter = 'blur(2px)';

        // Random size
        const size = Math.random() * 50 + 10;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random position
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;

        // Animation params
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;

        particle.style.animation = `float ${duration}s ${delay}s infinite linear`;

        // Add styling for keyframes dynamically if strict CSP allows, 
        // but here we rely on inline or CSS. Let's add float keyframes to styles.css or inline.
        // ACTUALLY, let's just animate via JS to be safe/smoother or add inline styles.
        // Let's use CSS transition for simplicity in loop? 
        // Better: Use styling.

        particle.style.transition = 'transform 0.5s';

        particlesContainer.appendChild(particle);

        animateParticle(particle);
    }

    function animateParticle(particle) {
        // Simple random floating
        const moveX = (Math.random() - 0.5) * 200;
        const moveY = (Math.random() - 0.5) * 200;

        particle.animate([
            { transform: 'translate(0, 0)' },
            { transform: `translate(${moveX}px, ${moveY}px)` }
        ], {
            duration: Math.random() * 10000 + 10000,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out'
        });
    }


    // --- Mobile Menu Toggle ---
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileBtn.addEventListener('click', () => {
        // Toggle display or add a class
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'rgba(255,255,255,0.95)';
            navLinks.style.padding = '2rem';
            navLinks.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        }
    });

    // --- Typing Effect Restart Loop (Optional) ---
    // The CSS animation runs once. If we want it to loop with a pause:
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        typingText.addEventListener('animationend', () => {
            setTimeout(() => {
                typingText.style.animation = 'none';
                typingText.offsetHeight; /* trigger reflow */
                typingText.style.animation = null;
            }, 5000);
        });
    }

    // --- Dark Mode Toggle ---
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = themeToggle.querySelector('span');
    const body = document.body;

    // Check saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.textContent = 'light_mode';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            themeIcon.textContent = 'light_mode';
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.textContent = 'dark_mode';
            localStorage.setItem('theme', 'light');
        }
    });
});
