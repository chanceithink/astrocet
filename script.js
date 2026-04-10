// Stars
const container = document.getElementById('stars');
for (let i = 0; i < 120; i++) {
    const s = document.createElement('span');
    s.className = 'star';
    s.style.left = Math.random() * 100 + '%';
    s.style.top = Math.random() * 100 + '%';
    s.style.animationDelay = (Math.random() * 4) + 's';
    s.style.width = s.style.height = (Math.random() * 2.5 + 1) + 'px';
    container.appendChild(s);
}

// Hamburger
function toggleMenu() {
    document.getElementById('nav-links').classList.toggle('open');
}

// Scroll-in animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.15 });
document.querySelectorAll('.vm-card, .event-card, .team-card, .stat').forEach(el => observer.observe(el));

// Contact form
function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    document.getElementById('form-thanks').style.display = 'block';
}