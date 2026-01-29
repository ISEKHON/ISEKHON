// Modern Dark Portfolio JavaScript

// ============================================
// CONFIGURATION - Change these values easily
// ============================================
const portfolioConfig = {
    name: 'Jagdeep',
    title: 'Android Developer',
    email: 'jagdeepsekhonn@gmail.com',
    discord: 'SEKHON#9378',
    discordUserId: '442551893638512660',
    telegram: '@iSekhon',
    location: 'India',
    github: 'isekhon',
    twitter: 'isekhonn',
    linkedin: 'https://www.linkedin.com/in/jagdeep-singh-224b62194/',
    
    // Hero Section
    subtitle: 'Computer Science Student | Android Developer | Mobile App Specialist | Full-stack Developer learning Web Technologies',
    
    // About Section
    aboutHeading: "I'm a Passionate Android Developer Building the Future",
    aboutText: [
        "I'm a Computer Science Student from India, coding since 2020. I specialize in Android Development with Java, Kotlin, XML & Jetpack Compose, building user-friendly mobile apps that solve real-world problems and deliver exceptional user experiences.",
        "As a full-stack developer, I'm proficient in both Frontend & Backend development. Currently learning Web Technologies (Next.js, TypeScript, Vue) and exploring AI & emerging technologies. I'm passionate about open source contributions and always learning, always building, always growing."
    ],
    
    // Stats
    stats: {
        projects: 50,
        experience: 5,
        clients: 100
    },
    
    // Typing Animation Roles
    roles: ['Android Developer', 'Mobile App Specialist', 'Frontend & Backend Developer', 'Learning Web Technologies'],
    
    // Projects
    projects: [
        {
            title: 'FalconGfx',
            description: 'Currently working on FalconGfx - An innovative graphics and design platform with powerful features and modern UI/UX.',
            tags: ['Android', 'Kotlin', 'Jetpack Compose'],
            link: '#'
        },
        {
            title: 'DrawableTuner',
            description: 'A modern Android app for creating and designing gradient drawables with a beautiful Material 3 UI. Create complex shapes, gradients, and export them as XML code ready to use in your Android projects.',
            tags: ['Kotlin', 'Jetpack Compose', 'Material3'],
            link: '#'
        },
        {
            title: 'Real-Time Chat App',
            description: 'An Android messaging app with Firebase real-time database, push notifications, media sharing, and beautiful Material Design UI.',
            tags: ['Kotlin', 'Firebase', 'Material Design'],
            link: '#'
        }
    ],
    
    // Footer
    footerText: 'Crafted with 💜 and Android.'
};

// Update all content in the page
document.addEventListener('DOMContentLoaded', () => {
    // Update title
    document.title = `Portfolio - ${portfolioConfig.name}`;
    
    // Update name
    document.querySelectorAll('.user-name').forEach(el => {
        el.textContent = portfolioConfig.name;
    });
    
    // Update hero subtitle
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = portfolioConfig.subtitle;
    
    // Update about section
    const aboutHeading = document.querySelector('.about-text h3');
    if (aboutHeading) aboutHeading.textContent = portfolioConfig.aboutHeading;
    
    const aboutParagraphs = document.querySelectorAll('.about-text > p');
    portfolioConfig.aboutText.forEach((text, index) => {
        if (aboutParagraphs[index]) aboutParagraphs[index].textContent = text;
    });
    
    // Update stats
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers[0]) statNumbers[0].dataset.target = portfolioConfig.stats.projects;
    if (statNumbers[1]) statNumbers[1].dataset.target = portfolioConfig.stats.experience;
    if (statNumbers[2]) statNumbers[2].dataset.target = portfolioConfig.stats.clients;
    
    // Update projects
    const projectCards = document.querySelectorAll('.project-card');
    portfolioConfig.projects.forEach((project, index) => {
        if (projectCards[index]) {
            const card = projectCards[index];
            
            // Update tags
            const tagsContainer = card.querySelector('.project-tags');
            if (tagsContainer) {
                tagsContainer.innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');
            }
            
            // Update title
            const title = card.querySelector('h3');
            if (title) title.textContent = project.title;
            
            // Update description
            const description = card.querySelector('p');
            if (description) description.textContent = project.description;
            
            // Update links
            const links = card.querySelectorAll('a');
            links.forEach(link => link.href = project.link);
        }
    });
    
    // Update all email elements
    document.querySelectorAll('.email-text').forEach(el => {
        el.textContent = portfolioConfig.email;
    });
    
    // Update email links
    document.querySelectorAll('.email-link').forEach(el => {
        el.href = `mailto:${portfolioConfig.email}`;
    });
    
    // Update Discord
    document.querySelectorAll('.discord-text').forEach(el => {
        el.textContent = portfolioConfig.discord;
    });
    
    // Update Discord links - if userId provided, link to profile, otherwise copy to clipboard on click
    document.querySelectorAll('.discord-link').forEach(el => {
        if (portfolioConfig.discordUserId) {
            el.href = `https://discord.com/users/${portfolioConfig.discordUserId}`;
            el.target = '_blank';
            el.rel = 'noopener noreferrer';
        } else {
            el.href = '#';
            el.addEventListener('click', (e) => {
                e.preventDefault();
                navigator.clipboard.writeText(portfolioConfig.discord).then(() => {
                    const originalText = el.querySelector('.method-value').textContent;
                    el.querySelector('.method-value').textContent = 'Copied to clipboard!';
                    setTimeout(() => {
                        el.querySelector('.method-value').textContent = originalText;
                    }, 2000);
                });
            });
        }
    });
    
    // Update Telegram
    document.querySelectorAll('.telegram-text').forEach(el => {
        el.textContent = portfolioConfig.telegram;
    });
    
    document.querySelectorAll('.telegram-link').forEach(el => {
        el.href = `https://t.me/${portfolioConfig.telegram.replace('@', '')}`;
        el.target = '_blank';
        el.rel = 'noopener noreferrer';
    });
    
    // Update social links
    document.querySelectorAll('.github-link').forEach(el => {
        el.href = `https://github.com/${portfolioConfig.github}`;
        el.target = '_blank';
        el.rel = 'noopener noreferrer';
    });
    
    document.querySelectorAll('.twitter-link').forEach(el => {
        el.href = `https://twitter.com/${portfolioConfig.twitter}`;
        el.target = '_blank';
        el.rel = 'noopener noreferrer';
    });
    
    document.querySelectorAll('.linkedin-link').forEach(el => {
        el.href = portfolioConfig.linkedin;
        el.target = '_blank';
        el.rel = 'noopener noreferrer';
    });
    
    // Update footer
    const footerText = document.querySelector('footer p');
    if (footerText) footerText.innerHTML = `&copy; 2026 ${portfolioConfig.name}. ${portfolioConfig.footerText}`;
    
    // Update profile image alt text
    const profileImg = document.querySelector('.profile-image');
    if (profileImg) {
        profileImg.src = `https://github.com/${portfolioConfig.github}.png`;
        profileImg.alt = `${portfolioConfig.name} - ${portfolioConfig.title}`;
    }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const body = document.body;

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open on mobile
    if (navMenu.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
    
    // Animate hamburger
    const spans = menuToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        body.style.overflow = '';
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !menuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        body.style.overflow = '';
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Typing Animation
const typingElement = document.querySelector('.typing-text');
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentRole = portfolioConfig.roles[roleIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
        return;
    }
    
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % portfolioConfig.roles.length;
    }
    
    const speed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, speed);
}

typeEffect();

// Counter Animation
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + '+';
    }, 20);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Animate counters
            if (entry.target.classList.contains('stat')) {
                const number = entry.target.querySelector('.stat-number');
                const target = parseInt(number.dataset.target);
                animateCounter(number, target);
            }
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.section-header, .about-content, .tech-category, .project-card, .stat, .contact-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Only handle internal links (starting with #)
        if (href && href.startsWith('#') && href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Cursor glow trail effect (disabled on mobile/touch devices for better performance)
const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

if (!isTouchDevice) {
    let lastGlowTime = 0;
    const glowThrottle = 30; // ms between glow effects for better performance
    
    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastGlowTime < glowThrottle) return;
        lastGlowTime = now;
        
        const glow = document.createElement('div');
        glow.style.cssText = `
            position: fixed;
            left: ${e.clientX - 10}px;
            top: ${e.clientY - 10}px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: rgba(139, 92, 246, 0.5);
            pointer-events: none;
            filter: blur(8px);
            z-index: 9999;
            opacity: 1;
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        `;
        
        document.body.appendChild(glow);
        
        setTimeout(() => {
            glow.style.opacity = '0';
            glow.style.transform = 'scale(1.5)';
        }, 10);
        
        setTimeout(() => {
            glow.remove();
        }, 600);
    });
}

// Parallax Effect for Background Shapes (disabled on mobile for better performance)
if (!isTouchDevice && window.innerWidth > 768) {
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const shapes = document.querySelectorAll('.shape');
                
                shapes.forEach((shape, index) => {
                    const speed = (index + 1) * 0.5;
                    shape.style.transform = `translateY(${scrolled * speed}px)`;
                });
                
                ticking = false;
            });
            
            ticking = true;
        }
    });
}

// Add active link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.style.color = 'var(--text-secondary)';
            });
            if (navLink) {
                navLink.style.color = 'var(--text-primary)';
            }
        }
    });
});

console.log('%c Portfolio Loaded Successfully! ', 'background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%); color: white; font-size: 16px; font-weight: bold; padding: 10px 20px; border-radius: 5px;');
