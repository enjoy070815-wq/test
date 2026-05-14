/* ============================================
   Simple SPA Router for BioduHo Website
   ============================================ */

class Router {
    constructor() {
        this.routes = {};
        this.currentPage = null;

        window.addEventListener('hashchange', () => this.handleRoute());
        window.addEventListener('load', () => this.handleRoute());
    }

    addRoute(path, handler) {
        this.routes[path] = handler;
    }

    handleRoute() {
        const hash = window.location.hash || '#/';
        const raw = hash.replace('#', '') || '/';
        const [path, query] = raw.split('?');
        const section = new URLSearchParams(query || '').get('section');

        const app = document.getElementById('app');

        // Same page + section change: just scroll, don't re-render
        if (this.currentPage === path && app.innerHTML) {
            this.scrollToSection(section);
            return;
        }

        // Page exit animation
        if (app.innerHTML) {
            app.classList.add('page-transition-exit');
            setTimeout(() => {
                this.renderPage(path, app, section);
            }, 200);
        } else {
            this.renderPage(path, app, section);
        }
    }

    renderPage(path, app, section) {
        const handler = this.routes[path] || this.routes['/'];

        if (handler) {
            app.classList.remove('page-transition-exit');
            app.innerHTML = handler();
            app.classList.add('page-transition-enter');

            // Scroll to top (or to section) on page change
            if (section) {
                window.scrollTo({ top: 0, behavior: 'instant' });
            } else {
                window.scrollTo({ top: 0, behavior: 'instant' });
            }

            // Update active nav link
            this.updateActiveNav(path);

            // Re-initialize animations and icons
            setTimeout(() => {
                this.initScrollAnimations();
                if (window.lucide) {
                    window.lucide.createIcons();
                }
                app.classList.remove('page-transition-enter');
                if (section) this.scrollToSection(section);
            }, 50);

            this.currentPage = path;
        }
    }

    scrollToSection(section) {
        if (!section) return;
        const el = document.getElementById('section-' + section);
        if (!el) return;
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    updateActiveNav(path) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            const href = link.getAttribute('href').replace('#', '');
            if (href === path) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    initScrollAnimations() {
        const elements = document.querySelectorAll('.animate-on-scroll');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        elements.forEach(el => observer.observe(el));
    }
}

// Export router instance
const router = new Router();
