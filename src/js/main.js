/* src/js/main.js */
import { smoothScroll, printGreeting } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    // Signal to CSS that Anime.js is active (suppresses CSS fallback hero animations)
    document.body.classList.add('anime-ready');

    printGreeting();

    // ── Smooth scroll for all anchor links ──────────
    const navList = document.getElementById('nav-list');

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            smoothScroll(targetId);
            navList.classList.remove('open');
        });
    });

    // ── Header scroll styling ───────────────────────
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // ── Hamburger mobile nav toggle ─────────────────
    const hamburger = document.getElementById('hamburger');
    if (hamburger && navList) {
        hamburger.addEventListener('click', () => {
            navList.classList.toggle('open');
        });
    }

    // ── 1. Hero entrance timeline ───────────────────
    const heroTl = anime.timeline({ easing: 'easeOutExpo' });
    heroTl
        .add({
            targets: '.hero-badge',
            opacity: [0, 1],
            translateY: [16, 0],
            duration: 600,
            delay: 100
        })
        .add({
            targets: '.hero-title .word',
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 700,
            delay: anime.stagger(80)
        }, '-=200')
        .add({
            targets: '.hero-subtitle',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 650
        }, '-=300')
        .add({
            targets: '.cta-group .btn',
            opacity: [0, 1],
            translateY: [18, 0],
            scale: [0.95, 1],
            duration: 500,
            delay: anime.stagger(100)
        }, '-=200');

    // ── 2. Trust bar sequential slide-in ────────────
    const trustObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: '.trust-item',
                    opacity: [0, 1],
                    translateX: [-24, 0],
                    duration: 500,
                    delay: anime.stagger(90),
                    easing: 'easeOutCubic'
                });
                trustObserver.disconnect();
            }
        });
    }, { threshold: 0.2 });

    const trustBar = document.querySelector('.trust-bar');
    if (trustBar) trustObserver.observe(trustBar);

    // ── 3. Service cards spring entrance ────────────
    const serviceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: '.service-card',
                    opacity: [0, 1],
                    translateY: [50, 0],
                    scale: [0.94, 1],
                    duration: 700,
                    delay: anime.stagger(120, { start: 100 }),
                    easing: 'spring(1, 80, 12, 0)'
                });
                serviceObserver.disconnect();
            }
        });
    }, { threshold: 0.1 });

    const serviceGrid = document.querySelector('.service-grid');
    if (serviceGrid) serviceObserver.observe(serviceGrid);

    // ── 4. Stat counter animation ───────────────────
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate card entrance
                anime({
                    targets: '.stat-card',
                    opacity: [0, 1],
                    translateY: [30, 0],
                    duration: 600,
                    delay: anime.stagger(100),
                    easing: 'easeOutExpo'
                });

                // Count up numeric stats
                document.querySelectorAll('.stat-number[data-target]').forEach(el => {
                    const target = parseInt(el.dataset.target, 10);
                    const suffix = el.dataset.suffix || '';
                    const prefix = el.dataset.prefix || '';
                    const counter = { val: 0 };

                    anime({
                        targets: counter,
                        val: target,
                        duration: 1800,
                        easing: 'easeOutCubic',
                        update: () => {
                            el.textContent = prefix + Math.round(counter.val) + suffix;
                        }
                    });
                });

                statsObserver.disconnect();
            }
        });
    }, { threshold: 0.3 });

    const statsGrid = document.querySelector('.stats-grid');
    if (statsGrid) statsObserver.observe(statsGrid);

    // ── 5. Magnetic button effect ───────────────────
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            anime({
                targets: btn,
                translateX: x * 0.18,
                translateY: y * 0.18,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });

        btn.addEventListener('mouseleave', () => {
            anime({
                targets: btn,
                translateX: 0,
                translateY: 0,
                duration: 500,
                easing: 'easeOutElastic(1, 0.5)'
            });
        });
    });

    // ── 6. Testimonial cards rotateX entrance ───────
    const testimonialObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: '.testimonial-card',
                    opacity: [0, 1],
                    translateY: [40, 0],
                    rotateX: [8, 0],
                    duration: 750,
                    delay: anime.stagger(150, { start: 50 }),
                    easing: 'easeOutExpo'
                });
                testimonialObserver.disconnect();
            }
        });
    }, { threshold: 0.15 });

    const testimonialGrid = document.querySelector('.testimonial-grid');
    if (testimonialGrid) testimonialObserver.observe(testimonialGrid);

    // ── Scroll reveal for about-card + contact-method
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.about-card, .contact-method').forEach((el, i) => {
        el.classList.add('reveal');
        el.style.transitionDelay = `${(i % 3) * 0.12}s`;
        revealObserver.observe(el);
    });

    // ── Developer Note Typewriter Effect ────────────
    const devNoteElement = document.getElementById('dev-note-text');
    if (devNoteElement) {
        const text = "Lead Developer Pedro M. Dominguez is currently engineering a suite of modern features to elevate your digital experience. The next generation of Heavenly Roofing LLC is under construction and will be unveiled shortly.";
        let i = 0;
        let isTyping = false;
        const speed = 35; // typing speed in ms

        function typeWriter() {
            if (isTyping) return;
            isTyping = true;

            function next() {
                if (i < text.length) {
                    devNoteElement.textContent += text.charAt(i);
                    i++;
                    setTimeout(next, speed);
                }
            }
            next();
        }

        // Use IntersectionObserver to start typing when visible
        const devNoteObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter();
                    devNoteObserver.disconnect();
                }
            });
        }, { threshold: 0.05 });
        devNoteObserver.observe(devNoteElement);

        // Failsafe: Start typing after 5 seconds if not triggered by scroll
        setTimeout(() => {
            if (!isTyping) {
                typeWriter();
                devNoteObserver.disconnect();
            }
        }, 5000);
    }
});
