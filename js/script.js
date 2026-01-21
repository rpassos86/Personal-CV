/**
 * ULTRA-TECHNOLOGICAL CV - JavaScript
 * Reinaldo Passos Jr
 * Created: 2025
 */

// ========================================
// TYPING EFFECT
// ========================================
class TypeWriter {
    constructor(element, texts, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
        this.element = element;
        this.texts = texts;
        this.typingSpeed = typingSpeed;
        this.deletingSpeed = deletingSpeed;
        this.pauseTime = pauseTime;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
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
}

// ========================================
// SCROLL ANIMATIONS
// ========================================
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.observer = null;
        this.init();
    }
    
    init() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, this.observerOptions);
        
        // Observe all animated elements
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            this.observer.observe(el);
        });
    }
}

// ========================================
// MOBILE MENU TOGGLE
// ========================================
class MobileMenu {
    constructor() {
        this.menuToggle = document.querySelector('.menu-toggle');
        this.navLinks = document.querySelector('.nav-links');
        this.init();
    }
    
    init() {
        if (this.menuToggle && this.navLinks) {
            this.menuToggle.addEventListener('click', () => this.toggle());
            
            // Close menu when clicking a link
            this.navLinks.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => this.close());
            });
        }
    }
    
    toggle() {
        this.menuToggle.classList.toggle('active');
        this.navLinks.classList.toggle('active');
        
        // Animate hamburger
        const spans = this.menuToggle.querySelectorAll('span');
        if (this.menuToggle.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }
    
    close() {
        this.menuToggle.classList.remove('active');
        this.navLinks.classList.remove('active');
        const spans = this.menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
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
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
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
        window.addEventListener('scroll', () => {
            const scrollY = window.pageYOffset;
            
            this.sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute('id');
                
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });
    }
}

// ========================================
// INITIALIZE EVERYTHING
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize typing effect (if element exists)
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const texts = [
            'Frontend Developer',
            'HTML & CSS Specialist',
            'JavaScript Learner',
            'Tech Enthusiast'
        ];
        new TypeWriter(typingElement, texts);
    }
    
    // Initialize other features
    new ScrollAnimations();
    new MobileMenu();
    new SmoothScroll();
    new ActiveNavLink();
    
    console.log('Portfolio loaded successfully!');
    console.log('Created by: Reinaldo Passos Jr');
});

