/* src/js/main.js */
import { smoothScroll, printGreeting } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    printGreeting();

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            smoothScroll(targetId);
            // Close mobile nav if open
            navList.classList.remove('open');
        });
    });

    // Header scroll styling (dark theme aware)
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Hamburger mobile nav toggle
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');
    if (hamburger && navList) {
        hamburger.addEventListener('click', () => {
            navList.classList.toggle('open');
        });
    }

    // Intersection Observer for scroll-reveal animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card, .stat-card, .testimonial-card, .about-card, .contact-method').forEach((el, i) => {
        el.classList.add('reveal');
        el.style.transitionDelay = `${(i % 4) * 0.1}s`;
        observer.observe(el);
    });

    // Contact form — simple UX feedback (no backend)
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            btn.textContent = 'Request Sent!';
            btn.disabled = true;
            btn.style.background = '#22c55e';
            btn.style.color = '#fff';
            setTimeout(() => {
                btn.textContent = 'Send My Request';
                btn.disabled = false;
                btn.style.background = '';
                btn.style.color = '';
                form.reset();
            }, 4000);
        });
    }
});
