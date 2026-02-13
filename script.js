// Navegación móvil
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (hamburger) {
            hamburger.classList.remove('active');
        }
    });
});

// Navegación suave entre páginas
document.querySelectorAll('a[href$=".html"]').forEach(link => {
    link.addEventListener('click', (e) => {
        // Solo aplicar transición si es un enlace interno (no target="_blank")
        if (!link.hasAttribute('target')) {
            e.preventDefault();
            const targetUrl = link.getAttribute('href');
            
            // Cerrar menú móvil si está abierto
            if (navMenu) navMenu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
            
            // Scroll al top suavemente antes de la transición
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Añadir clase de transición
            const pageContent = document.querySelector('.page-content');
            const body = document.body;
            
            if (pageContent) {
                pageContent.classList.add('page-transition');
            } else {
                body.classList.add('page-transition');
            }
            
            // Navegar después de la animación (400ms para que coincida con la animación)
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 400);
        }
    });
});

// Prevenir flash en carga de página
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Scroll suave para anclas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
    }
    
    lastScroll = currentScroll;
});

// Cerrar menú al cambiar tamaño de ventana
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        if (navMenu) navMenu.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    }
});

// Animación de las barras de habilidades
const skillBars = document.querySelectorAll('.skill-progress');
if (skillBars.length > 0) {
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.style.width;
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Animación para elementos al hacer scroll
const fadeElements = document.querySelectorAll('.experiencia-card, .proyecto-card, .stat');

if (fadeElements.length > 0) {
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeObserver.observe(el);
    });
}

// Efecto de escritura en el hero (reutilizable)
let typewriterTimeout = null;

function startTypeWriter(element, text, delay = 1000) {
    if (!element) return;
    
    // Limpiar cualquier animación anterior
    if (typewriterTimeout) {
        clearTimeout(typewriterTimeout);
    }
    
    element.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            typewriterTimeout = setTimeout(typeWriter, 50);
        }
    }
    
    // Iniciar el efecto después del delay
    typewriterTimeout = setTimeout(typeWriter, delay);
}

// Iniciar la animación al cargar la página
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const initialText = heroSubtitle.textContent;
    startTypeWriter(heroSubtitle, initialText, 1000);
}

// Active link en navegación basado en scroll (solo para página con múltiples secciones)
const sections = document.querySelectorAll('section');
if (sections.length > 1) {
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href && href.startsWith('#') && href.slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Marcar el enlace activo basado en la URL actual
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
        link.classList.add('active');
    }
});

// ============================================
// Sistema de cambio de idioma
// ============================================

// Obtener idioma del localStorage o usar español por defecto
let currentLanguage = localStorage.getItem('language') || 'es';

// Función para cambiar el idioma
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateContent();
    updateLanguageButton();
}

// Función para actualizar el contenido de la página
function updateContent() {
    // Obtener todas las traducciones del idioma actual
    const texts = translations[currentLanguage];
    
    // Actualizar todos los elementos con atributo data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (texts[key]) {
            // Si es un input o textarea, actualizar el placeholder
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = texts[key];
            } else {
                // Para otros elementos, actualizar el texto
                element.textContent = texts[key];
            }
        }
    });
    
    // Reiniciar la animación del hero subtitle si existe
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle && texts['hero_subtitle']) {
        startTypeWriter(heroSubtitle, texts['hero_subtitle'], 300);
    }
}

// Función para actualizar el botón de idioma
function updateLanguageButton() {
    const langToggle = document.getElementById('languageToggle');
    if (langToggle) {
        const esOption = langToggle.querySelector('[data-lang="es"]');
        const enOption = langToggle.querySelector('[data-lang="en"]');
        
        // Actualizar clases active
        if (currentLanguage === 'es') {
            esOption.classList.add('active');
            enOption.classList.remove('active');
            langToggle.classList.remove('en');
        } else {
            enOption.classList.add('active');
            esOption.classList.remove('active');
            langToggle.classList.add('en');
        }
        
        langToggle.setAttribute('aria-label', currentLanguage === 'es' ? 'Switch to English' : 'Cambiar a Español');
    }
}

// Event listener para el botón de cambio de idioma
document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('languageToggle');
    
    if (langToggle) {
        // Click en el contenedor completo
        langToggle.addEventListener('click', () => {
            const newLang = currentLanguage === 'es' ? 'en' : 'es';
            changeLanguage(newLang);
        });
        
        // Click específico en cada opción
        const langOptions = langToggle.querySelectorAll('.lang-option');
        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const selectedLang = option.getAttribute('data-lang');
                if (selectedLang !== currentLanguage) {
                    changeLanguage(selectedLang);
                }
            });
        });
    }
    
    // Aplicar el idioma guardado al cargar la página
    updateContent();
    updateLanguageButton();
});
