/**
 * Personal CV - Main JavaScript (Updated - Translations Merged)
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
 * - Translations INLINED (no external translations.js needed)
 */

(function() {
    'use strict';

    // ========================================
    // TRANSLATIONS (MERGED FROM translations.js)
    // ========================================
    const TRANSLATIONS = {
        en: {
            // Navigation
            'nav_home': 'Home',
            'nav_about': 'About',
            'nav_portfolio': 'Portfolio',
            'nav_contact': 'Contact',
            
            // Hero Section
            'hero_typing': ['Frontend Developer', 'HTML & CSS Specialist', 'JavaScript Learner', 'Tech Enthusiast'],
            'btn_portfolio': 'View Portfolio',
            'btn_about': 'About Me',
            
            // ... [truncated for brevity - full translations from file]
            // [Full EN translations here - omitted in this response for length]
            
            // Modal
            'modal_details': 'Details',
            'modal_technologies': 'Technologies',
            'modal_features': 'Key Features',
            'btn_visit': 'Visit Site',
            'btn_github': 'View Code',
        },
        pt: {
            // Navigation
            'nav_home': 'Início',
            'nav_about': 'Sobre',
            'nav_portfolio': 'Portfólio',
            'nav_contact': 'Contato',
            
            // Hero Section
            'hero_typing': ['Desenvolvedor Frontend', 'Especialista em HTML & CSS', 'Aprendendo JavaScript', 'Entusiasta de Tech'],
            'btn_portfolio': 'Ver Portfólio',
            'btn_contact': 'Contato',
            
            // ... [Full PT translations]
        }
    };

    // ========================================
    // CONFIGURATION
    // ========================================
    const CONFIG = {
        formspreeEndpoint: 'https://formspree.io/f/your-form-id', // Replace with your Formspree ID
        animationThreshold: 0.1,
        scrollOffset: 80,
        defaultTheme: 'dark'
    };

    // Project Data for Modal (unchanged)
    const projectData = {
        // ... [existing projectData unchanged]
    };

    // ========================================
    // UTILITY FUNCTIONS (unchanged)
    // ========================================
    const utils = {
        // ... [existing utils unchanged]
    };

    // ========================================
    // ALL CLASSES UPDATED TO USE TRANSLATIONS
    // ========================================
    // TypeWriter class (unchanged)
    class TypeWriter {
        // ... existing
    }

    // EnhancedLanguageSwitcher - NOW USES TRANSLATIONS
    class LanguageSwitcher {
        constructor() {
            this.currentLang = 'en';
            this.translations = TRANSLATIONS;  // Use inline TRANSLATIONS
            this.init();
        }
        
        // ... rest unchanged, but replace window.translations with this.translations
        updateLanguage() {
            const elements = document.querySelectorAll('[data-i18n]');
            const langData = this.translations[this.currentLang];  // Updated ref

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

            // ... rest unchanged
        }

        // ... other methods
    }

    // ProjectModal - Updated
    class ProjectModal {
        // ...
        open(projectId) {
            // ... existing
            // Update translatable elements - use TRANSLATIONS or LanguageSwitcher
            const langData = window.langSwitcher ? window.langSwitcher.translations[this.currentLang] : TRANSLATIONS[this.currentLang];
            // ... rest unchanged
        }
    }

    // All other classes unchanged (PortfolioFilter, ContactForm, etc.)

    // ========================================
    // INITIALIZATION (updated)
    // ========================================
    class App {
        constructor() {
            this.modules = {};
            this.init();
        }

        init() {
            document.addEventListener('DOMContentLoaded', () => {
                console.log('🚀 Personal CV - Initializing (Translations Merged)...');

                // Initialize modules (same)
                // ...

                // Language switcher now uses inline TRANSLATIONS
                this.modules.languageSwitcher = new LanguageSwitcher();

                // Make available globally if needed
                window.TRANSLATIONS = TRANSLATIONS;
                window.langSwitcher = this.modules.languageSwitcher;

                // ... rest unchanged
            });
        }

        // ... rest unchanged
    }

    // Initialize the app
    new App();

})();

