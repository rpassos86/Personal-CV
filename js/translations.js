/**
 * Language Translation System
 * Reinaldo Passos Jr
 * 2025
 */

const translations = {
    en: {
        // Navigation
        'nav_home': 'Home',
        'nav_about': 'About',
        'nav_portfolio': 'Portfolio',
        'nav_contact': 'Contact',
        
        // Hero Section
        'hero_welcome': '/// WELCOME TO MY DIGITAL UNIVERSE',
        'hero_title': 'Reinaldo Passos Jr',
        'hero_subtitle': 'Frontend Developer | Digital Experience Creator',
        'hero_typing': ['Frontend Developer', 'HTML & CSS Specialist', 'JavaScript Learner', 'Tech Enthusiast'],
        'btn_portfolio': 'View Portfolio',
        'btn_about': 'About Me',
        
        // Preview Section
        'preview_title': 'What I Do',
        'preview_subtitle': 'Turning ideas into digital reality',
        
        // Skills
        'skill_html': 'HTML5',
        'skill_html_desc': 'Semantic and accessible structure for modern websites',
        'skill_css': 'CSS3',
        'skill_css_desc': 'Responsive design, animations and advanced visual effects',
        'skill_js': 'JavaScript',
        'skill_js_desc': 'Interactivity and dynamism for your web applications',
        'skill_ai': 'AI Tools',
        'skill_ai_desc': 'Using AI tools for optimization',
        
        // Featured Project
        'featured_title': 'Featured Project',
        'featured_subtitle': 'One of my main works',
        'delicias_title': '🍰 Delícias da Sil',
        'delicias_desc': 'A complete website for a confectionery, developed with HTML, CSS and JavaScript. Elegant and functional design to present products and facilitate orders.',
        'delicias_tags': ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
        'btn_visit': '<i class="fas fa-external-link-alt"></i> Visit Site',
        
        // CTA Section
        'cta_title': "Let's Work Together?",
        'cta_desc': "I'm always open to new projects and opportunities. Contact me and let's create something amazing together!",
        'btn_contact': '<i class="fas fa-paper-plane"></i> Contact Me',
        
        // About Page
        'about_title': 'About Me',
        'about_subtitle': 'Who is behind the code',
        'about_fullname': 'Reinaldo Assis dos Passos Junior',
        'about_role': 'Frontend Developer & Tech Enthusiast',
        'about_bio1': `Hello! My name is <strong style="color: var(--neon-cyan);">Reinaldo Passos Jr</strong>, 
            and I'm a frontend developer passionate about technology and design. 
            Specialized in <strong>HTML</strong> and <strong>CSS</strong>, 
            I'm constantly expanding my knowledge in 
            <strong>JavaScript</strong> and exploring the possibilities that 
            <strong>Artificial Intelligence</strong> tools offer for development optimization.`,
        'about_bio2': `My goal is to create unique and functional digital experiences, 
            combining clean code with intuitive design. Each project is an 
            opportunity to learn something new and overcome technical challenges.`,
        'about_future': `<strong style="color: var(--neon-magenta);">Next steps:</strong> 
            Soon, I plan to master languages for mobile app development, 
            further expanding my skills in the world of technology.`,
        
        'skills_title': 'My Skills',
        'skills_subtitle': 'Technologies I master',
        
        'journey_title': 'My Journey',
        'journey_subtitle': 'The path so far',
        
        'journey_1_title': 'Start of Programming',
        'journey_1_desc': 'Started my journey in web development with focus on Frontend, mastering HTML and CSS to create.',
        
        'journey_2_title': 'Expansion with JavaScript',
        'journey_2_desc': 'Currently learning JavaScript to add interactivity and dynamism to my projects, creating unique experiences for users.',
        
        'journey_3_title': 'Future: Mobile Development',
        'journey_3_desc': 'Planning to learn mobile app development soon, expanding my technical repertoire to create complete solutions.',
        
        'cta_about_title': 'Liked Getting to Know Me?',
        'cta_about_desc': 'Check out my projects and lets build something amazing together!',
        'btn_portfolio_alt': '<i class="fas fa-briefcase"></i> View Portfolio',
        'btn_contact_alt': '<i class="fas fa-envelope"></i> Contact',
        
        // Portfolio Page
        'portfolio_title': 'My Portfolio',
        'portfolio_subtitle': 'Projects I developed with dedication',
        
        'filter_all': '<i class="fas fa-th"></i> All',
        'filter_web': '<i class="fas fa-globe"></i> Web',
        'filter_app': '<i class="fas fa-mobile-alt"></i> Apps',
        
        'project_delicias': '🍰 Delícias da Sil',
        'project_delicias_desc': 'Complete website for a confectionery with product catalog, elegant design and functionalities to facilitate online orders.',
        
        'project_calc_soon': '<i class="fas fa-clock"></i> Coming Soon',
        'project_calc': '🧮 Calculator Pro',
        'project_calc_desc': 'A modern and functional calculator with intuitive interface and tech design. Developed with HTML, CSS and JavaScript.',
        
        'project_portfolio_current': '<i class="fas fa-check-circle"></i> Current',
        'project_portfolio_title': '💼 My Tech Portfolio',
        'project_portfolio_desc': 'This personal website with ultra-technological design, CSS and JavaScript animations, particles effects and glassmorphism.',
        
        'project_new_title': '🚀 In Development',
        'project_new_desc': 'New projects are being developed. Stay tuned for more updates soon!',
        
        'stats_title': 'Statistics',
        'stats_subtitle': 'Journey summary',
        'stats_projects': 'Projects Completed',
        'stats_lines': 'Lines of Code',
        'stats_coffee': 'Cups of Coffee',
        'stats_tech': 'Technologies Mastered',
        
        'cta_portfolio_title': 'Have a Project in Mind?',
        'cta_portfolio_desc': "Contact me and let's build something amazing together!",
        
// Consistent Contact Info
        'contact_email_value': 'reinaldo.passos@gmail.com',
        'contact_linkedin_url': 'https://www.linkedin.com/in/rpassosjr86',
        'contact_github_url': 'https://github.com/reinaldopassosjr',
        'contact_instagram_url': 'https://www.instagram.com/reinaldopassosjr/',
        'form_name': '<i class="fas fa-user" style="color: var(--neon-cyan);"></i> Name',
        'form_name_placeholder': 'Your name',
        'form_email': '<i class="fas fa-envelope" style="color: var(--neon-cyan);"></i> E-mail',
        'form_email_placeholder': 'your@email.com',
        'form_subject': '<i class="fas fa-tag" style="color: var(--neon-cyan);"></i> Subject',
        'form_subject_placeholder': 'Message subject',
        'form_message': '<i class="fas fa-comment" style="color: var(--neon-cyan);"></i> Message',
        'form_message_placeholder': 'Your message...',
        'form_btn': '<i class="fas fa-paper-plane"></i> Send Message',
        'form_note': '<i class="fas fa-info-circle"></i> This is a visual form. To send, use email directly.',
        
        'available_title': 'Available for projects',
        'available_desc': 'Currently accepting new freelance projects and collaboration opportunities.',
        
        // Footer
        'footer_rights': 'All rights reserved',
        'footer_made': 'Made with',

        // Modal
        'modal_details': 'Details',
        'modal_technologies': 'Technologies',
        'modal_features': 'Key Features',
        'btn_github': 'View Code',
    },
    
    pt: {
        // Navigation
        'nav_home': 'Início',
        'nav_about': 'Sobre',
        'nav_portfolio': 'Portfólio',
        'nav_contact': 'Contato',
        
        // Hero Section (Index)
        'hero_subtitle': 'DESENVOLVEDOR FRONTEND | ESPECIALISTA EM HTML & CSS',
        'hero_tagline': 'Desenvolvedor Frontend | HTML & CSS Specialist',
        
        // Preview Section
        'preview_title': 'O Que Eu Faço',
        'preview_subtitle': 'Transformando ideias em realidade digital',
        
        // Skills
        'skill_html': 'HTML5',
        'skill_html_desc': 'Estrutura semântica e acessível para websites modernos',
        'skill_css': 'CSS3',
        'skill_css_desc': 'Design responsivo, animações e efeitos visuais avançados',
        'skill_js': 'JavaScript',
        'skill_js_desc': 'Interatividade e dinamismo para suas aplicações web',
        'skill_ai': 'Ferramentas de IA',
        'skill_ai_desc': 'Utilização de ferramentas de IA para otimização',
        
        // Featured Project
        'featured_title': 'Projeto em Destaque',
        'featured_subtitle': 'Um dos meus principais trabalhos',
        'delicias_title': '🍰 Delícias da Sil',
        'delicias_desc': 'Site completo para confeitaria com catálogo de produtos, design elegante e funcionalidades para facilitar pedidos online.',
        'delicias_tags': ['HTML5', 'CSS3', 'JavaScript', 'Responsivo'],
        'btn_visit': '<i class="fas fa-external-link-alt"></i> Visitar Site',
        
        // CTA Section
        'cta_title': 'Vamos Trabalhar Juntos?',
        'cta_desc': 'Estou sempre aberto a novos projetos e oportunidades. Entre em contato e vamos criar algo incrível juntos!',
        'btn_contact': '<i class="fas fa-paper-plane"></i> Entre em Contato',
        
        // About Page
        'about_title': 'Sobre Mim',
        'about_subtitle': 'Quem está por trás do código',
        'about_fullname': 'Reinaldo Assis dos Passos Junior',
        'about_role': 'Desenvolvedor Frontend & Entusiasta de Tech',
        'about_bio1': `Olá! Meu nome é <strong style="color: var(--neon-cyan);">Reinaldo Passos Jr</strong>, 
            e sou um desenvolvedor frontend apaixonado por tecnologia e design. 
            Especializado em <strong>HTML</strong> e <strong>CSS</strong>, 
            estou constantemente expandindo meus conhecimentos em 
            <strong>JavaScript</strong> e explorando as possibilidades que 
            as ferramentas de <strong>Inteligência Artificial</strong> oferecem para otimização do desenvolvimento.`,
        'about_bio2': `Meu objetivo é criar experiências digitais únicas e funcionais, 
            combinando código limpo com design intuitivo. Cada projeto é uma 
            oportunidade de aprender algo novo e superar desafios técnicos.`,
        'about_future': `<strong style="color: var(--neon-magenta);">Próximos passos:</strong> 
            Em breve, pretendo dominar linguagens para desenvolvimento de 
            aplicativos mobile, expandindo ainda mais minhas habilidades no 
            mundo da tecnologia.`,
        
        'skills_title': 'Minhas Skills',
        'skills_subtitle': 'Tecnologias que domino',
        
        'journey_title': 'Minha Jornada',
        'journey_subtitle': 'O caminho até aqui',
        
        'journey_1_title': 'Início na Programação',
        'journey_1_desc': 'Comecei minha jornada no desenvolvimento web com foco em Frontend, dominando HTML e CSS para criar interfaces modernas e responsivas.',
        
        'journey_2_title': 'Expansão com JavaScript',
        'journey_2_desc': 'Atualmente estou aprendendo JavaScript para adicionar interatividade e dinamismo aos meus projetos, criando experiências únicas para os usuários.',
        
        'journey_3_title': 'Futuro: Desenvolvimento Mobile',
        'journey_3_desc': 'Planejo aprender desenvolvimento de aplicativos mobile em breve, expandindo meu repertório técnico para criar soluções completas.',
        
        'cta_about_title': 'Gostou de Me Conhecer?',
        'cta_about_desc': 'Veja meus projetos e vamos criar algo incrível juntos!',
        'btn_portfolio_alt': '<i class="fas fa-briefcase"></i> Ver Portfólio',
        'btn_contact_alt': '<i class="fas fa-envelope"></i> Contato',
        
        // Portfolio Page
        'portfolio_title': 'Meu Portfólio',
        'portfolio_subtitle': 'Projetos que desenvolvi com dedicação',
        
        'filter_all': '<i class="fas fa-th"></i> Todos',
        'filter_web': '<i class="fas fa-globe"></i> Web',
        'filter_app': '<i class="fas fa-mobile-alt"></i> Apps',
        
        'project_delicias': '🍰 Delícias da Sil',
        'project_delicias_desc': 'Site completo para confeitaria com catálogo de produtos, design elegante e funcionalidades para facilitar pedidos online.',
        
        'project_calc_soon': '<i class="fas fa-clock"></i> Em breve',
        'project_calc': '🧮 Calculator Pro',
        'project_calc_desc': 'Uma calculadora moderna e funcional com interface intuitiva e design tech. Desenvolvida com HTML, CSS e JavaScript.',
        
        'project_portfolio_current': '<i class="fas fa-check-circle"></i> Atual',
        'project_portfolio_title': '💼 Meu Portfólio Tech',
        'project_portfolio_desc': 'Este site pessoal com design ultra-tecnológico, animações CSS e JavaScript, effects de partículas e glassmorphism.',
        
        'project_new_title': '🚀 Em Desenvolvimento',
        'project_new_desc': 'Novos projetos estão sendo desenvolvidos. Fique atento para mais atualizações em breve!',
        
        'stats_title': 'Estatísticas',
        'stats_subtitle': 'Resumo da jornada',
        'stats_projects': 'Projetos Completos',
        'stats_lines': 'Linhas de Código',
        'stats_coffee': 'Xícaras de Café',
        'stats_tech': 'Tecnologias Dominadas',
        
        'cta_portfolio_title': 'Tem um Projeto em Mente?',
        'cta_portfolio_desc': 'Entre em contato e vamos criar algo incrível juntos!',
        
        // Contact Page
        'contact_title': 'Entre em Contato',
        'contact_subtitle': 'Vamos conversar sobre seu próximo projeto',

        'contact_email': 'E-mail',
        'contact_linkedin': 'LinkedIn',
        'contact_instagram': 'Instagram',
        'contact_github': 'GitHub',

        'contact_form_title': '<i class="fas fa-paper-plane" style="color: var(--neon-cyan);"></i> Envie uma Mensagem',
        'form_name': '<i class="fas fa-user" style="color: var(--neon-cyan);"></i> Nome',
        'form_name_placeholder': 'Seu nome',
        'form_email': '<i class="fas fa-envelope" style="color: var(--neon-cyan);"></i> E-mail',
        'form_email_placeholder': 'seu@email.com',
        'form_subject': '<i class="fas fa-tag" style="color: var(--neon-cyan);"></i> Assunto',
        'form_subject_placeholder': 'Assunto da mensagem',
        'form_message': '<i class="fas fa-comment" style="color: var(--neon-cyan);"></i> Mensagem',
        'form_message_placeholder': 'Sua mensagem...',
        'form_btn': '<i class="fas fa-paper-plane"></i> Enviar Mensagem',
        'form_note': '<i class="fas fa-info-circle"></i> Este é um formulário visual. Para enviar, use o e-mail diretamente.',

        'available_title': 'Disponível para projetos',
        'available_desc': 'Atualmente aceitando novos projetos freelance e oportunidades de colaboração.',

        // Footer
        'footer_rights': 'Todos os direitos reservados',
        'footer_made': 'Feito com',

        // Modal
        'modal_details': 'Detalhes',
        'modal_technologies': 'Tecnologias',
        'modal_features': 'Principais Recursos',
        'btn_github': 'Ver Código',
    }
};

// Language Switcher Class - Single Instance
class LanguageSwitcher {
    constructor() {
        this.currentLang = 'en';
        this.init();
    }
    
    init() {
        // Check for saved language preference
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang && (savedLang === 'en' || savedLang === 'pt')) {
            this.currentLang = savedLang;
        } else {
            // Default to English for index.html, Portuguese for other pages
            if (window.location.pathname.includes('index') || window.location.pathname.endsWith('/')) {
                this.currentLang = 'en';
            } else {
                this.currentLang = 'pt';
            }
        }
        
        this.updateLanguage();
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Language toggle buttons
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
        
        // Update active state on buttons
        document.getElementById('lang-en')?.classList.toggle('active', lang === 'en');
        document.getElementById('lang-pt')?.classList.toggle('active', lang === 'pt');
        
        // Dispatch custom event for other components
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    }
    
    updateLanguage() {
        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[this.currentLang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[this.currentLang][key];
                } else {
                    element.innerHTML = translations[this.currentLang][key];
                }
            }
        });
        
        // Update typing animation texts
        this.updateTypingTexts();
        
        // Update active state
        const enBtn = document.getElementById('lang-en');
        const ptBtn = document.getElementById('lang-pt');
        
        if (enBtn) enBtn.classList.toggle('active', this.currentLang === 'en');
        if (ptBtn) ptBtn.classList.toggle('active', this.currentLang === 'pt');
        
        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang;
    }
    
    updateTypingTexts() {
        const typingElement = document.querySelector('.typing-text');
        if (typingElement && window.typeWriter) {
            const texts = translations[this.currentLang].hero_typing || [];
            window.typeWriter.updateTexts(texts);
        }
    }
    
    getCurrentLang() {
        return this.currentLang;
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    window.langSwitcher = new LanguageSwitcher();
    console.log(`🌐 Language: ${window.langSwitcher.getCurrentLang() === 'en' ? 'English' : 'Português'}`);
});

