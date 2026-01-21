/**
 * Personal CV - Main JavaScript
 * Reinaldo Passos Jr
 * 2025
 * 
 * Features:
 * - TypeWriter Animation (fixed)
 * - Portfolio Filter
 * - Contact Form (with Formspree integration)
 * - Scroll Animations
 * - Mobile Menu
 * - Smooth Scroll
 * - Active Navigation
 */

(function() {
    'use strict';

// ========================================
// CONFIGURATION
// ========================================
const CONFIG = {
    formspreeEndpoint: 'https://formspree.io/f/your-form-id', // Replace with your Formspree ID
    animationThreshold: 0.1,
    scrollOffset: 80,
    defaultTheme: 'dark'
};

// Project Data for Modal
const projectData = {
    en: {
        delicias: {
            title: '🍰 Delícias da Sil',
            description: 'A complete website for a confectionery with an elegant design and functional features to facilitate online orders. The project includes a complete product catalog, shopping cart functionality, and a responsive design that works on all devices.',
            fullDescription: 'Delícias da Sil is a complete e-commerce solution for a local confectionery business. The website features a modern, elegant design that reflects the quality of the products offered. Key features include a product catalog with high-quality images, a shopping cart system, and contact forms for custom orders.',
            tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'E-commerce'],
            features: [
                'Complete product catalog with categories',
                'Responsive design for all devices',
                'Contact form for custom orders',
                'Optimized images for fast loading',
                'SEO friendly structure'
            ],
            image: 'img/deliciasdasil2.png',
            link: 'https://deliciasdasil.free.nf',
            github: null
        },
        calculator: {
            title: '🧮 Calculator Pro',
            description: 'A modern and functional calculator with an intuitive interface and tech design. Developed with HTML, CSS and JavaScript.',
            fullDescription: 'Calculator Pro is a web-based calculator application featuring a sleek, modern interface inspired by cyberpunk aesthetics. It offers basic arithmetic operations plus advanced features like memory functions and percentage calculations.',
            tags: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX', 'Math Functions'],
            features: [
                'Basic arithmetic operations',
                'Memory functions (M+, M-, MR, MC)',
                'Percentage calculations',
                'Keyboard support',
                'History of calculations'
            ],
            image: 'https://images.unsplash.com/photo-1587145820266-a5951ee1f620?w=800&h=500&fit=crop',
            link: null,
            github: null
        },
        portfolio: {
            title: '💼 My Tech Portfolio',
            description: 'This personal website with ultra-technological design, CSS and JavaScript animations, particle effects and glassmorphism.',
            fullDescription: 'My Tech Portfolio is a personal website showcasing my skills and projects as a Frontend Developer. Built with modern web technologies, it features a stunning cyberpunk-inspired design with particle animations, glassmorphism effects, and smooth transitions.',
            tags: ['HTML5', 'CSS3', 'JavaScript', 'Cyberpunk', 'Glassmorphism', 'Particles'],
            features: [
                'Particle animation system',
                'Glassmorphism design elements',
                'Smooth scroll animations',
                'Multi-language support (EN/PT)',
                'Responsive design',
                'SEO optimized'
            ],
            image: 'img/rpjr2.png',
            link: null,
            github: null
        }
    },
    pt: {
        delicias: {
            title: '🍰 Delícias da Sil',
            description: 'Site completo para confeitaria com catálogo de produtos, design elegante e funcionalidades para facilitar pedidos online.',
            fullDescription: 'Delícias da Sil é uma solução completa de e-commerce para uma confeitaria local. O site apresenta um design moderno e elegante que reflete a qualidade dos produtos oferecidos. Os recursos principais incluem um catálogo de produtos com imagens de alta qualidade, um sistema de carrinho de compras e formulários de contato para pedidos personalizados.',
            tags: ['HTML5', 'CSS3', 'JavaScript', 'Design Responsivo', 'E-commerce'],
            features: [
                'Catálogo completo de produtos com categorias',
                'Design responsivo para todos os dispositivos',
                'Formulário de contato para pedidos personalizados',
                'Imagens otimizadas para carregamento rápido',
                'Estrutura otimizada para SEO'
            ],
            image: 'img/deliciasdasil2.png',
            link: 'https://deliciasdasil.free.nf',
            github: null
        },
        calculator: {
            title: '🧮 Calculator Pro',
            description: 'Uma calculadora moderna e funcional com interface intuitiva e design tech. Desenvolvida com HTML, CSS e JavaScript.',
            fullDescription: 'Calculator Pro é uma aplicação de calculadora baseada na web com uma interface elegante e moderna inspirada em estética cyberpunk. Ela oferece operações aritméticas básicas, além de recursos avançados como funções de memória e cálculos de porcentagem.',
            tags: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX', 'Funções Matemáticas'],
            features: [
                'Operações aritméticas básicas',
                'Funções de memória (M+, M-, MR, MC)',
                'Cálculos de porcentagem',
                'Suporte a teclado',
                'Histórico de cálculos'
            ],
            image: 'https://images.unsplash.com/photo-1587145820266-a5951ee1f620?w=800&h=500&fit=crop',
            link: null,
            github: null
        },
        portfolio: {
            title: '💼 Meu Portfólio Tech',
            description: 'Este site pessoal com design ultra-tecnológico, animações CSS e JavaScript, efeitos de partículas e glassmorphism.',
            fullDescription: 'Meu Portfólio Tech é um site pessoal que展示 minhas habilidades e projetos como Desenvolvedor Frontend. Construído com tecnologias web modernas, apresenta um design impressionante inspirado em cyberpunk com animações de partículas, efeitos de glassmorphism e transições suaves.',
            tags: ['HTML5', 'CSS3', 'JavaScript', 'Cyberpunk', 'Glassmorphism', 'Partículas'],
            features: [
                'Sistema de animação de partículas',
                'Elementos de design glassmorphism',
                'Animações de scroll suaves',
                'Suporte multi-idioma (EN/PT)',
                'Design responsivo',
                'Otimizado para SEO'
            ],
            image: 'img/rpjr2.png',
            link: null,
            github: null
        }
    }
};

    // ========================================
    // UTILITY FUNCTIONS
    // ========================================
    const utils = {
        // Debounce function
        debounce: (func, wait) => {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },

        // Throttle function
        throttle: (func, limit) => {
            let inThrottle;
            return function(...args) {
                if (!inThrottle) {
                    func.apply(this, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        },

        // Check if element is in viewport
        isInViewport: (element) => {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        },

        // Generate unique ID
        generateId: () => {
            return '_' + Math.random().toString(36).substr(2, 9);
        }
    };

    // ========================================
    // TYPEWRITER EFFECT (Fixed Version)
    // ========================================
    class TypeWriter {
        constructor(element, texts, options = {}) {
            this.element = element;
            this.texts = texts;
            this.typingSpeed = options.typingSpeed || 100;
            this.deletingSpeed = options.deletingSpeed || 50;
            this.pauseTime = options.pauseTime || 2000;
            this.textIndex = 0;
            this.charIndex = 0;
            this.isDeleting = false;
            this.isInitialized = false;
        }

        init() {
            if (this.isInitialized) return;
            this.isInitialized = true;
            this.type();
        }

        type() {
            const currentText = this.texts[this.textIndex];

            if (this.isDeleting) {
                this.element.textContent = currentText.substring(0, this.charIndex - 1);
                this.charIndex--;
            } else {
                this.element.textContent = currentText.substring(0, this.charIndex + 1);
                this.charIndex++;
            }

            let typeSpeed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

            if (!this.isDeleting && this.charIndex === currentText.length) {
                typeSpeed = this.pauseTime;
                this.isDeleting = true;
            } else if (this.isDeleting && this.charIndex === 0) {
                this.isDeleting = false;
                this.textIndex = (this.textIndex + 1) % this.texts.length;
                typeSpeed = 500;
            }

            setTimeout(() => this.type(), typeSpeed);
        }

        reset() {
            this.charIndex = 0;
            this.isDeleting = false;
            this.textIndex = 0;
            this.element.textContent = '';
        }

        updateTexts(newTexts) {
            this.texts = newTexts;
            this.reset();
        }
    }

    // ========================================
    // PORTFOLIO FILTER
    // ========================================
    class PortfolioFilter {
        constructor() {
            this.filterButtons = document.querySelectorAll('.filter-btn');
            this.projectCards = document.querySelectorAll('.project-card');
            this.init();
        }

        init() {
            if (this.filterButtons.length === 0) return;

            this.filterButtons.forEach(btn => {
                btn.addEventListener('click', (e) => this.handleFilter(e));
            });
        }

        handleFilter(e) {
            const button = e.currentTarget;
            const filter = button.dataset.filter;

            // Update active button
            this.filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects with animation
            this.filterProjects(filter);
        }

        filterProjects(filter) {
            this.projectCards.forEach((card, index) => {
                const category = card.dataset.category || 'web';
                const shouldShow = filter === 'all' || category === filter;

                if (shouldShow) {
                    card.style.display = '';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 400);
                }
            });
        }
    }

    // ========================================
    // CONTACT FORM
    // ========================================
    class ContactForm {
        constructor() {
            this.form = document.getElementById('contact-form');
            this.init();
        }

        init() {
            if (!this.form) return;

            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
            
            // Add input validation
            const inputs = this.form.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                input.addEventListener('blur', () => this.validateField(input));
                input.addEventListener('input', () => this.clearError(input));
            });
        }

        handleSubmit(e) {
            e.preventDefault();

            if (!this.validateForm()) {
                return;
            }

            const formData = new FormData(this.form);
            const data = Object.fromEntries(formData);

            // Show loading state
            const submitBtn = this.form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            // Simulate form submission (replace with actual Formspree integration)
            setTimeout(() => {
                this.showSuccess('Message sent successfully!', submitBtn, originalText);
            }, 1500);

            // For Formspree integration, uncomment below:
            // fetch(CONFIG.formspreeEndpoint, {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(data)
            // }).then(response => {
            //     if (response.ok) {
            //         this.showSuccess('Message sent successfully!', submitBtn, originalText);
            //     } else {
            //         this.showError('Failed to send message. Please try again.', submitBtn, originalText);
            //     }
            // });
        }

        validateForm() {
            let isValid = true;
            const inputs = this.form.querySelectorAll('input[required], textarea[required]');

            inputs.forEach(input => {
                if (!this.validateField(input)) {
                    isValid = false;
                }
            });

            return isValid;
        }

        validateField(input) {
            const value = input.value.trim();
            let isValid = true;

            if (input.type === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                isValid = emailRegex.test(value);
            } else if (input.type === 'text' || input.tagName === 'TEXTAREA') {
                isValid = value.length >= 2;
            }

            if (!isValid) {
                this.showError(input);
            } else {
                this.clearError(input);
            }

            return isValid;
        }

        showError(input) {
            input.style.borderColor = 'var(--neon-red)';
            input.style.boxShadow = '0 0 10px rgba(255, 0, 68, 0.3)';
        }

        clearError(input) {
            input.style.borderColor = 'var(--glass-border)';
            input.style.boxShadow = 'none';
        }

        showSuccess(message, btn, originalText) {
            btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
            btn.style.background = 'var(--neon-green)';
            btn.style.color = 'var(--bg-primary)';

            // Reset form
            this.form.reset();

            // Show alert
            alert(message);

            // Reset button
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.style.color = '';
                btn.disabled = false;
            }, 3000);
        }

        showError(message, btn, originalText) {
            btn.innerHTML = '<i class="fas fa-times"></i> Error';
            btn.style.background = 'var(--neon-red)';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.disabled = false;
            }, 3000);
        }
    }

    // ========================================
    // SCROLL ANIMATIONS
    // ========================================
    class ScrollAnimations {
        constructor() {
            this.animatedElements = [];
            this.init();
        }

        init() {
            // Observe all elements with animation classes
            const animatedElements = document.querySelectorAll(
                '.animate-on-scroll, .fade-in-up, .skill-card, .project-card, .contact-card'
            );

            animatedElements.forEach((el, index) => {
                el.classList.add('animate-on-scroll');
                this.animatedElements.push(el);
            });

            // Create intersection observer
            this.observer = new IntersectionObserver(
                (entries) => this.handleIntersection(entries),
                {
                    threshold: CONFIG.animationThreshold,
                    rootMargin: '0px 0px -50px 0px'
                }
            );

            // Start observing
            this.animatedElements.forEach(el => this.observer.observe(el));

            // Add scroll progress indicator
            this.createScrollProgress();
        }

        handleIntersection(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible', 'fade-in-up');
                    
                    // Add stagger effect for grid items
                    const parent = entry.target.parentElement;
                    if (parent && parent.classList.contains('skills-grid', 'portfolio-grid', 'contact-grid')) {
                        const siblings = Array.from(parent.children).filter(
                            child => child.classList.contains('animate-on-scroll')
                        );
                        const index = siblings.indexOf(entry.target);
                        entry.target.style.transitionDelay = `${index * 0.1}s`;
                    }
                }
            });
        }

        createScrollProgress() {
            const progressBar = document.createElement('div');
            progressBar.className = 'scroll-progress';
            document.body.appendChild(progressBar);

            window.addEventListener('scroll', utils.throttle(() => {
                const scrollTop = window.scrollY;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollPercent = (scrollTop / docHeight) * 100;
                progressBar.style.width = `${scrollPercent}%`;
            }, 10));
        }
    }

    // ========================================
    // MOBILE MENU - SIMPLIFIED AND RELIABLE
    // ========================================
    class MobileMenu {
        constructor() {
            this.menuToggle = document.getElementById('menu-toggle');
            this.navLinks = document.querySelector('.nav-links');
            this.navOverlay = document.getElementById('nav-overlay');
            this.navCloseBtn = document.getElementById('nav-close-btn');
            this.isOpen = false;
            this.init();
        }

        init() {
            if (!this.menuToggle || !this.navLinks) return;

            // Toggle menu on button click
            this.menuToggle.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggle();
            });

            // Close menu when clicking on the X button
            if (this.navCloseBtn) {
                this.navCloseBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.close();
                });
            }

            // Close menu when clicking on overlay
            if (this.navOverlay) {
                this.navOverlay.addEventListener('click', () => this.close());
            }

            // Close menu when clicking on a link
            this.navLinks.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => this.close());
            });

            // Close menu on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.isOpen) {
                    this.close();
                }
            });

            // Close menu on window resize to desktop
            window.addEventListener('resize', () => {
                if (window.innerWidth > 768 && this.isOpen) {
                    this.close();
                }
            });
        }

        toggle() {
            this.isOpen = !this.isOpen;
            this.updateUI();
        }

        close() {
            if (!this.isOpen) return;
            this.isOpen = false;
            this.updateUI();
        }

        updateUI() {
            // Toggle active classes
            this.menuToggle?.classList.toggle('active', this.isOpen);
            this.navLinks?.classList.toggle('active', this.isOpen);
            this.navOverlay?.classList.toggle('active', this.isOpen);

            // Prevent body scroll when menu is open
            document.body.style.overflow = this.isOpen ? 'hidden' : '';

            // Animate hamburger menu
            if (this.isOpen) {
                this.animateHamburger();
            } else {
                this.resetHamburger();
            }
        }

        animateHamburger() {
            const spans = this.menuToggle?.querySelectorAll('span');
            if (spans && spans.length >= 3) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            }
        }

        resetHamburger() {
            const spans = this.menuToggle?.querySelectorAll('span');
            if (spans && spans.length >= 3) {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }
    }

    // ========================================
    // SMOOTH SCROLL
    // ========================================
    class SmoothScroll {
        constructor() {
            this.init();
        }

        init() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', (e) => {
                    const href = anchor.getAttribute('href');
                    if (href === '#') return;

                    e.preventDefault();
                    const target = document.querySelector(href);

                    if (target) {
                        const offsetTop = target.offsetTop - CONFIG.scrollOffset;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        }
    }

    // ========================================
    // ACTIVE NAV LINK
    // ========================================
    class ActiveNavLink {
        constructor() {
            this.sections = document.querySelectorAll('section[id]');
            this.init();
        }

        init() {
            if (this.sections.length === 0) return;

            const updateActiveLink = utils.throttle(() => {
                const scrollY = window.pageYOffset;

                this.sections.forEach(section => {
                    const sectionHeight = section.offsetHeight;
                    const sectionTop = section.offsetTop - 150;
                    const sectionId = section.getAttribute('id');

                    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                        this.setActiveLink(sectionId);
                    }
                });
            }, 100);

            window.addEventListener('scroll', updateActiveLink);
        }

        setActiveLink(sectionId) {
            const navLinks = document.querySelectorAll('.nav-link');
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}` || 
                    link.getAttribute('href').includes(`${sectionId}.html`)) {
                    link.classList.add('active');
                }
            });
        }
    }

    // ========================================
    // NAVBAR SCROLL EFFECT
    // ========================================
    class NavbarScroll {
        constructor() {
            this.navbar = document.querySelector('.navbar');
            this.init();
        }

        init() {
            if (!this.navbar) return;

            const handleScroll = utils.throttle(() => {
                if (window.scrollY > 50) {
                    this.navbar.classList.add('scrolled');
                } else {
                    this.navbar.classList.remove('scrolled');
                }
            }, 10);

            window.addEventListener('scroll', handleScroll);
        }
    }

    // ========================================
    // PARTICLE BACKGROUND
    // ========================================
    class ParticleBackground {
        constructor() {
            this.container = document.querySelector('.bg-particles');
            this.init();
        }

        init() {
            if (!this.container) {
                this.createContainer();
            }
            this.createParticles();
        }

        createContainer() {
            const container = document.createElement('div');
            container.className = 'bg-particles';
            document.body.insertBefore(container, document.body.firstChild);
            this.container = container;
        }

        createParticles() {
            const particleCount = 30;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Random properties
                const size = Math.random() * 4 + 2;
                const left = Math.random() * 100;
                const delay = Math.random() * 5;
                const duration = Math.random() * 10 + 10;
                
                particle.style.cssText = `
                    left: ${left}%;
                    width: ${size}px;
                    height: ${size}px;
                    animation-delay: ${delay}s;
                    animation-duration: ${duration}s;
                `;
                
                this.container.appendChild(particle);
            }
        }
    }

    // ========================================
    // PROJECT MODAL
    // ========================================
    class ProjectModal {
        constructor() {
            this.currentLang = 'en';
            this.modal = null;
            this.init();
        }

        init() {
            this.createModal();
            this.setupEventListeners();
        }

        createModal() {
            // Check if modal already exists
            if (document.getElementById('project-modal')) return;

            // Create modal HTML
            const modalHTML = `
                <div class="modal-overlay" id="project-modal">
                    <div class="modal-content">
                        <button class="modal-close" id="modal-close">
                            <i class="fas fa-times"></i>
                        </button>
                        <div class="modal-image-container">
                            <img src="" alt="" class="modal-image" id="modal-image">
                            <div class="modal-image-overlay"></div>
                        </div>
                        <div class="modal-body">
                            <h2 class="modal-title" id="modal-title"></h2>
                            <p class="modal-subtitle" id="modal-description"></p>
                            
                            <div class="modal-section">
                                <h4 class="modal-section-title" data-i18n="modal_details">Details</h4>
                                <p id="modal-full-description" style="color: var(--text-secondary); line-height: 1.8;"></p>
                            </div>

                            <div class="modal-section">
                                <h4 class="modal-section-title" data-i18n="modal_technologies">Technologies</h4>
                                <div class="modal-tags" id="modal-tags"></div>
                            </div>

                            <div class="modal-section">
                                <h4 class="modal-section-title" data-i18n="modal_features">Key Features</h4>
                                <ul class="modal-features" id="modal-features"></ul>
                            </div>

                            <div class="modal-links" id="modal-links"></div>
                        </div>
                    </div>
                </div>
            `;

            document.body.insertAdjacentHTML('beforeend', modalHTML);
            this.modal = document.getElementById('project-modal');

            // Close button event
            document.getElementById('modal-close').addEventListener('click', () => this.close());

            // Close on overlay click
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) this.close();
            });

            // Close on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                    this.close();
                }
            });
        }

        setupEventListeners() {
            // Add click events to project cards
            document.querySelectorAll('.project-card').forEach(card => {
                card.style.cursor = 'pointer';
                card.addEventListener('click', () => {
                    const projectId = card.dataset.project;
                    if (projectId) {
                        this.open(projectId);
                    }
                });
            });
        }

        setLanguage(lang) {
            this.currentLang = lang;
        }

        open(projectId) {
            const data = projectData[this.currentLang]?.[projectId] || projectData.en[projectId];
            if (!data) return;

            // Update modal content
            document.getElementById('modal-image').src = data.image;
            document.getElementById('modal-image').alt = data.title;
            document.getElementById('modal-title').textContent = data.title;
            document.getElementById('modal-description').textContent = data.description;
            document.getElementById('modal-full-description').textContent = data.fullDescription;

            // Update tags
            const tagsContainer = document.getElementById('modal-tags');
            tagsContainer.innerHTML = data.tags.map(tag => 
                `<span class="modal-tag">${tag}</span>`
            ).join('');

            // Update features
            const featuresContainer = document.getElementById('modal-features');
            featuresContainer.innerHTML = data.features.map(feature => 
                `<li>${feature}</li>`
            ).join('');

            // Update links
            const linksContainer = document.getElementById('modal-links');
            let linksHTML = '';
            if (data.link) {
                linksHTML += `<a href="${data.link}" target="_blank" class="modal-link">
                    <i class="fas fa-external-link-alt"></i> <span data-i18n="btn_visit">Visit Site</span>
                </a>`;
            }
            if (data.github) {
                linksHTML += `<a href="${data.github}" target="_blank" class="modal-link secondary">
                    <i class="fab fa-github"></i> <span data-i18n="btn_github">View Code</span>
                </a>`;
            }
            linksContainer.innerHTML = linksHTML;

            // Update translatable elements
            const langData = window.translations?.[this.currentLang] || {};
            this.modal.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (langData[key]) {
                    el.textContent = langData[key];
                }
            });

            // Show modal
            this.modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        close() {
            this.modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // ========================================
    // LANGUAGE SWITCHER (Enhanced)
    // ========================================
    class EnhancedLanguageSwitcher {
        constructor() {
            this.currentLang = 'en';
            this.translations = window.translations || {};
            this.init();
        }

        init() {
            // Load saved preference or detect browser language
            const savedLang = localStorage.getItem('preferredLanguage');
            if (savedLang && (savedLang === 'en' || savedLang === 'pt')) {
                this.currentLang = savedLang;
            } else {
                // Default based on page
                const path = window.location.pathname;
                this.currentLang = (path.includes('index') || path.endsWith('/')) ? 'en' : 'pt';
            }

            this.updateLanguage();
            this.setupEventListeners();
        }

        setupEventListeners() {
            const enBtn = document.getElementById('lang-en');
            const ptBtn = document.getElementById('lang-pt');

            if (enBtn) {
                enBtn.addEventListener('click', () => this.switchLanguage('en'));
            }
            if (ptBtn) {
                ptBtn.addEventListener('click', () => this.switchLanguage('pt'));
            }
        }

        switchLanguage(lang) {
            this.currentLang = lang;
            localStorage.setItem('preferredLanguage', lang);
            this.updateLanguage();
            
            // Update button states
            document.getElementById('lang-en')?.classList.toggle('active', lang === 'en');
            document.getElementById('lang-pt')?.classList.toggle('active', lang === 'pt');

            // Reinitialize TypeWriter if it exists
            if (window.typeWriter) {
                const typingTexts = this.translations[lang]?.hero_typing || 
                    (lang === 'en' 
                        ? ['Frontend Developer', 'HTML & CSS Specialist', 'JavaScript Learner', 'Tech Enthusiast']
                        : ['Desenvolvedor Frontend', 'Especialista em HTML & CSS', 'Aprendendo JavaScript', 'Entusiasta de Tech']
                    );
                window.typeWriter.updateTexts(typingTexts);
            }
        }

        updateLanguage() {
            const elements = document.querySelectorAll('[data-i18n]');
            const langData = this.translations[this.currentLang];

            if (!langData) return;

            elements.forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (langData[key]) {
                    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        element.placeholder = langData[key];
                    } else {
                        element.innerHTML = langData[key];
                    }
                }
            });

            // Update HTML lang attribute
            document.documentElement.lang = this.currentLang;

            // Update button states
            document.getElementById('lang-en')?.classList.toggle('active', this.currentLang === 'en');
            document.getElementById('lang-pt')?.classList.toggle('active', this.currentLang === 'pt');
        }

        getCurrentLang() {
            return this.currentLang;
        }
    }

    // ========================================
    // INITIALIZATION
    // ========================================
    class App {
        constructor() {
            this.modules = {};
            this.init();
        }

        init() {
            // Initialize all modules when DOM is ready
            document.addEventListener('DOMContentLoaded', () => {
                console.log('🚀 Personal CV - Initializing...');

                // Initialize modules
                this.modules.navbarScroll = new NavbarScroll();
                this.modules.mobileMenu = new MobileMenu();
                this.modules.smoothScroll = new SmoothScroll();
                this.modules.activeNavLink = new ActiveNavLink();
                this.modules.scrollAnimations = new ScrollAnimations();
                this.modules.particleBackground = new ParticleBackground();
                this.modules.portfolioFilter = new PortfolioFilter();
                this.modules.contactForm = new ContactForm();
                this.modules.projectModal = new ProjectModal();
                this.modules.languageSwitcher = new EnhancedLanguageSwitcher();

                // Initialize TypeWriter
                this.initTypeWriter();

                // Add preloader handling
                this.handlePreloader();

                // Sync modal language with language switcher
                this.syncModalLanguage();

                // Log success
                console.log('✅ Personal CV initialized successfully!');
                console.log(`🌐 Language: ${this.modules.languageSwitcher.getCurrentLang() === 'en' ? 'English' : 'Português'}`);
            });
        }

        initTypeWriter() {
            const typingElement = document.querySelector('.typing-text');
            if (!typingElement) return;

            const lang = this.modules.languageSwitcher?.getCurrentLang() || 'en';
            const texts = lang === 'en' 
                ? ['Frontend Developer', 'HTML & CSS Specialist', 'JavaScript Learner', 'Tech Enthusiast']
                : ['Desenvolvedor Frontend', 'Especialista em HTML & CSS', 'Aprendendo JavaScript', 'Entusiasta de Tech'];

            window.typeWriter = new TypeWriter(typingElement, texts, {
                typingSpeed: 80,
                deletingSpeed: 40,
                pauseTime: 2000
            });
            window.typeWriter.init();
        }

        handlePreloader() {
            const preloader = document.querySelector('.preloader');
            if (!preloader) return;

            window.addEventListener('load', () => {
                setTimeout(() => {
                    preloader.classList.add('hidden');
                    setTimeout(() => {
                        preloader.style.display = 'none';
                    }, 500);
                }, 500);
            });
        }

        syncModalLanguage() {
            // Update modal language when language switcher changes
            const observer = new MutationObserver(() => {
                if (this.modules.languageSwitcher && this.modules.projectModal) {
                    this.modules.projectModal.setLanguage(this.modules.languageSwitcher.getCurrentLang());
                }
            });

            // Observe the document body for language changes
            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ['lang']
            });
        }
    }

    // Initialize the app
    new App();

})();

