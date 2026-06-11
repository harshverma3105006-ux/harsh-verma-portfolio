/**
 * Harsh Verma Portfolio Scripts
 * Functionality: Animations, Theme Switch, Custom Cursor, Particles
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Loader Logic
    const loader = document.getElementById('loader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.visibility = 'hidden';
                // Trigger Entrance Animations
                initEntranceAnimations();
            }, 800);
        }, 1500);
    });

    // 2. Initialize Lucide Icons
    lucide.createIcons();

    // 3. Custom Cursor
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Smooth outline follow
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: 'forwards' });
    });

    // Cursor hover effects
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-pill');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.width = '60px';
            cursorOutline.style.height = '60px';
            cursorOutline.style.backgroundColor = 'rgba(99, 102, 241, 0.1)';
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.width = '30px';
            cursorOutline.style.height = '30px';
            cursorOutline.style.backgroundColor = 'transparent';
        });
    });

    // 4. Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLight = body.classList.contains('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });

    // Check saved theme
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
    }

    // 5. Typewriter Effect
    new Typed('#typewriter-text', {
        strings: [
            'an AI Engineer.',
            'a Machine Learning Enthusiast.',
            'a Python Developer.',
            'a GATE Aspirant.',
            'a Problem Solver.'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        cursorChar: '_'
    });

    // 6. Particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#6366f1" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": false },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#6366f1", "opacity": 0.4, "width": 1 },
            "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
            "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "push": { "particles_nb": 4 } }
        },
        "retina_detect": true
    });

    // 7. Scroll Progress & Active Link
    const scrollProgress = document.querySelector('.scroll-progress');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        // Progress Bar
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollProgress.style.width = scrolled + "%";

        // Active Link
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // 8. GSAP Entrance Animations
    function initEntranceAnimations() {
        gsap.registerPlugin(ScrollTrigger);

        // Hero Reveal
        gsap.from(".hero-badge", { y: -30, opacity: 0, duration: 1, ease: "power4.out" });
        gsap.from(".hero-title", { y: 50, opacity: 0, duration: 1.2, delay: 0.2, ease: "power4.out" });
        gsap.from(".hero-subtitle", { opacity: 0, duration: 1, delay: 0.8 });
        gsap.from(".hero-cta", { y: 30, opacity: 0, duration: 1, delay: 1, ease: "power4.out" });

        // Scroll Reveals
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(el => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
        });
    }

    // 9. Mobile Menu (Simple Toggle)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinksContainer = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active-mobile');
        // If we add active-mobile class, we would need more CSS, 
        // but for now, we'll keep it simple as requested for industry level.
    });

});