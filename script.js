window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50){
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        });
    });
}

const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 120);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

cards.forEach(card => observer.observe(card));

const form = document.querySelector('form');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.querySelector('input[name="name"]').value.trim();
        const email = document.querySelector('input[name="email"]').value.trim();
        const message = document.querySelector('textarea[name="message"]').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        console.log('Form submitted:', { name, email, message });

        const btn = form.querySelector('button[type="submit"]');
        btn.textContent = 'Message Sent ✓';
        btn.disabled = true;
        btn.style.background = '#4A7C5F';
    });
}
