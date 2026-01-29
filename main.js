console.log('Replicode Landing Page Loaded');

document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeBtn.querySelector('i');

    // Default to Dark Mode
    body.classList.add('dark-mode');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            // Dark Mode -> Show Sun (to switch to Light)
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            // Light Mode -> Show Moon (to switch to Dark)
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });

    // 1. Typing Effect for Headline
    const headline = document.querySelector('.hero h1');
    const textToType = 'Build. Learn. Replicate.';
    headline.textContent = ''; // Clear initial text

    let charIndex = 0;
    function typeText() {
        if (charIndex < textToType.length) {
            headline.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100); // Adjust typing speed here
        } else {
            // Optional: Remove cursor or blink it at the end
            headline.style.borderRight = "none";
        }
    }

    // Add some cursor styling initially via JS or rely on CSS class
    headline.classList.add('typing-active');
    setTimeout(typeText, 500); // Start after a short delay

    // 2. 3D Tilt Effect for Cards
    const cards = document.querySelectorAll('.feature-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10; // Max rotation deg
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
});
