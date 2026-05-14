/* ============================================
   Main Application Script for BioduHo Website
   ============================================ */

// Register routes
router.addRoute('/', homePage);
router.addRoute('/about', aboutPage);
router.addRoute('/products', productsPage);
router.addRoute('/partners', partnersPage);
router.addRoute('/contact', contactPage);

// ==========================================
// Unified Scroll Handler (rAF-throttled)
// ==========================================
const navbar = document.getElementById('navbar');
const scrollTop = document.getElementById('scroll-top');

let _scrollTicking = false;

function onScrollFrame() {
    const currentScrollY = window.scrollY;

    // Navbar background on scroll
    if (currentScrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Scroll to top button
    if (currentScrollY > 500) {
        scrollTop.classList.add('visible');
    } else {
        scrollTop.classList.remove('visible');
    }

    // Parallax on hero section (only while hero is in view)
    const hero = document.querySelector('.hero');
    if (hero && currentScrollY < window.innerHeight) {
        const heroImage = hero.querySelector('.hero-image-wrapper');
        if (heroImage) {
            heroImage.style.transform = `translateY(${currentScrollY * 0.1}px)`;
        }
    }

    _scrollTicking = false;
}

window.addEventListener('scroll', () => {
    if (!_scrollTicking) {
        window.requestAnimationFrame(onScrollFrame);
        _scrollTicking = true;
    }
}, { passive: true });

// Scroll to top click
scrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==========================================
// Mobile Navigation
// ==========================================
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
const mobileOverlay = document.getElementById('mobile-overlay');

function toggleMobileMenu() {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
}

function closeMobileMenu() {
    navToggle.classList.remove('active');
    navLinks.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

navToggle.addEventListener('click', toggleMobileMenu);
mobileOverlay.addEventListener('click', closeMobileMenu);

// Close mobile menu when a nav link is clicked
navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// ==========================================
// Smooth Number Counter Animation
// ==========================================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const text = counter.textContent;
        const match = text.match(/(\d+)/);

        if (match && !counter.dataset.animated) {
            const target = parseInt(match[0]);
            const suffix = text.replace(match[0], '');
            let current = 0;
            const increment = target / 60;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = Math.floor(current) + suffix;
            }, 16);
            counter.dataset.animated = 'true';
        }
    });
}

// Observe stats section for counter animation
const statsObserver = new MutationObserver(() => {
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounters();
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );
        observer.observe(statsSection);
    }
});

statsObserver.observe(document.getElementById('app'), {
    childList: true,
    subtree: false
});

// ==========================================
// Image lazy loading enhancement
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Add loading="lazy" to images loaded after initial render
    const imageObserver = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) {
                    const images = node.querySelectorAll ? node.querySelectorAll('img') : [];
                    images.forEach(img => {
                        if (!img.hasAttribute('loading')) {
                            img.setAttribute('loading', 'lazy');
                        }
                    });
                }
            });
        });
    });

    imageObserver.observe(document.getElementById('app'), {
        childList: true,
        subtree: true
    });
});

// ==========================================
// Console branding
// ==========================================
console.log(
    '%c🍓 (농)바이오두호 %c BIODUHO ',
    'background: #C62828; color: white; padding: 8px 12px; border-radius: 4px 0 0 4px; font-weight: bold;',
    'background: #2D2424; color: white; padding: 8px 12px; border-radius: 0 4px 4px 0;'
);
console.log('세종동굴 식물공장 · 프리미엄 딸기의 새로운 기준');

// ==========================================
// Hero Particle Effect
// ==========================================
function initParticles() {
    const container = document.getElementById('hero-particles');
    if (!container) return;
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 6 + 2}px;
            height: ${Math.random() * 6 + 2}px;
            background: rgba(198, 40, 40, ${Math.random() * 0.12 + 0.03});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 4 + 3}s ease-in-out infinite;
            animation-delay: ${Math.random() * 3}s;
        `;
        container.appendChild(particle);
    }
}

// Initialize particles on home page
const particleObserver = new MutationObserver(() => {
    const heroParticles = document.getElementById('hero-particles');
    if (heroParticles && heroParticles.children.length === 0) {
        initParticles();
    }
});
particleObserver.observe(document.getElementById('app'), { childList: true, subtree: false });
