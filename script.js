// Portfolio — motion-driven redesign

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
    timeZone: 'Asia/Kolkata',
    github: 'isekhon',
    twitter: 'isekhonn',
    linkedin: 'https://www.linkedin.com/in/jagdeep-singh-224b62194/',

    // Hero Section
    subtitle: 'Computer Science student and Android developer crafting fast, polished mobile apps with Kotlin & Jetpack Compose — now growing into full-stack web.',

    // Rotating roles under the hero title
    roles: ['Android Developer', 'Mobile App Specialist', 'Frontend & Backend Developer', 'Learning Web Technologies'],

    // About Section — words wrapped in *asterisks* get highlighted
    aboutStatement: "I design and build *Android apps* that are fast, thoughtful and a joy to use — turning ideas into products people *actually love* to open every day.",
    aboutHeading: "A passionate Android developer building the future, one screen at a time.",
    aboutText: [
        "I'm a Computer Science student from India, coding since 2020. I specialize in Android development with Java, Kotlin, XML & Jetpack Compose, building user-friendly mobile apps that solve real-world problems and deliver exceptional user experiences.",
        "As a full-stack developer, I'm comfortable on both the frontend and backend. I'm currently learning web technologies (Next.js, TypeScript, Vue) and exploring AI. Open source matters to me — always learning, always building, always growing."
    ],
    currentlyBuilding: 'Building FalconGfx',

    // Stats
    stats: {
        projects: 50,
        experience: 5,
        clients: 100
    },

    // Skills — `size` controls the card width: 'wide', 'half' or '' (third)
    skills: [
        {
            title: 'Languages', size: 'wide',
            items: [['Kotlin', '#7F52FF'], ['Java', '#ED8B00'], ['Python', '#3776AB'], ['C', '#5C8DBC'], ['C++', '#00599C'], ['C#', '#9B4F96'], ['JavaScript', '#F7DF1E'], ['TypeScript', '#3178C6'], ['PHP', '#777BB4']]
        },
        {
            title: 'Mobile', size: '',
            items: [['Android', '#3DDC84'], ['Jetpack Compose', '#4285F4'], ['React Native', '#61DAFB']]
        },
        {
            title: 'Web', size: 'half',
            items: [['Next.js', '#FFFFFF'], ['React', '#61DAFB'], ['Vue.js', '#4FC08D'], ['Node.js', '#339933'], ['Spring', '#6DB33F']]
        },
        {
            title: 'Tools & DevOps', size: 'half',
            items: [['Android Studio', '#3DDC84'], ['VS Code', '#007ACC'], ['IntelliJ IDEA', '#FE315D'], ['Postman', '#FF6C37'], ['Figma', '#F24E1E'], ['Docker', '#2496ED'], ['Git', '#F05032']]
        },
        {
            title: 'Cloud & Database', size: 'wide',
            items: [['Firebase', '#FFCA28'], ['MongoDB', '#47A248'], ['PostgreSQL', '#4169E1'], ['MySQL', '#4479A1'], ['SQLite', '#0F80CC'], ['Redis', '#DC382D'], ['Vercel', '#FFFFFF'], ['Railway', '#A855F7'], ['Appwrite', '#F02E65']]
        },
        {
            title: 'AI & ML', size: '',
            items: [['Ollama', '#FFFFFF']]
        }
    ],

    // Projects — use link: '#' for work that isn't public yet
    projects: [
        {
            title: 'FalconGfx',
            description: 'An innovative graphics and design platform with powerful features and a modern UI/UX. Currently in active development.',
            tags: ['Android', 'Kotlin', 'Jetpack Compose'],
            link: '#',
            colors: ['#1d1033', '#8b5cf6', '#f472b6']
        },
        {
            title: 'DrawableTuner',
            description: 'A Material 3 app for designing gradient drawables. Create complex shapes and gradients, then export them as XML ready to drop into any Android project.',
            tags: ['Kotlin', 'Jetpack Compose', 'Material3'],
            link: 'https://github.com/ISEKHON/DrawableTuner',
            colors: ['#0b2a1a', '#b8ff3c', '#22d3ee']
        },
        {
            title: 'Real-Time Chat',
            description: 'An Android messaging app with Firebase realtime database, push notifications, media sharing and a clean Material Design UI.',
            tags: ['Kotlin', 'Firebase', 'Material Design'],
            link: '#',
            colors: ['#0b1733', '#3b82f6', '#f59e0b']
        }
    ],

    // Footer
    footerText: 'Crafted with 💜 and Android.'
};

// ============================================
// Helpers
// ============================================
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const escapeHTML = (str) => String(str).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[c]));

const setExternal = (el, href) => {
    el.href = href;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
};

const arrowSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M9 7h8v8"/></svg>';

// ============================================
// Render content from config
// ============================================
function renderContent() {
    const c = portfolioConfig;

    $$('.user-name').forEach((el) => { el.textContent = c.name; });
    $('.hero-subtitle').textContent = c.subtitle;
    $('.location-text').textContent = `Based in ${c.location}`;
    $('.year').textContent = new Date().getFullYear();

    // Roles (first one cloned at the end for a seamless loop)
    $('.role-track').innerHTML = [...c.roles, c.roles[0]]
        .map((r) => `<span>${escapeHTML(r)}</span>`).join('');

    // Stats
    const statNumbers = $$('.stat-number');
    [c.stats.projects, c.stats.experience, c.stats.clients].forEach((v, i) => {
        if (statNumbers[i]) statNumbers[i].dataset.target = v;
    });

    // About
    $('.about-statement').innerHTML = escapeHTML(c.aboutStatement)
        .replace(/\*(.+?)\*/g, '<span class="hl">$1</span>');
    $('.about-heading').textContent = c.aboutHeading;
    $('.about-paragraphs').innerHTML = c.aboutText
        .map((t) => `<p class="reveal-up">${escapeHTML(t)}</p>`).join('');
    $('.now-text').textContent = c.currentlyBuilding;

    const profileImg = $('.profile-image');
    profileImg.src = `https://github.com/${c.github}.png`;
    profileImg.alt = `${c.name} — ${c.title}`;

    // Marquee
    const allSkills = c.skills.flatMap((g) => g.items.map(([name]) => name));
    const half = Math.ceil(allSkills.length / 2);
    const rows = [allSkills.slice(0, half), allSkills.slice(half)];
    $$('.marquee').forEach((marquee, i) => {
        const track = $('.marquee-track', marquee);
        track.innerHTML = rows[i].map((s) => `<span class="marquee-item">${escapeHTML(s)}</span>`).join('');
        const clone = track.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        marquee.appendChild(clone);
    });

    // Skills bento
    $('.bento').innerHTML = c.skills.map((group, i) => `
        <article class="bento-card ${group.size}">
            <div class="bento-top">
                <h3 class="bento-title">${escapeHTML(group.title)}</h3>
                <span class="mono">${String(i + 1).padStart(2, '0')} / ${String(group.items.length).padStart(2, '0')}</span>
            </div>
            <div class="chips">
                ${group.items.map(([name, color]) => `<span class="chip" style="--c:${color}">${escapeHTML(name)}</span>`).join('')}
            </div>
        </article>
    `).join('');

    // Projects
    $('.projects').innerHTML = c.projects.map((p, i) => {
        const isLive = p.link && p.link !== '#';
        const [g1, g2, g3] = p.colors || ['#15151a', '#8b5cf6', '#3b82f6'];
        const initials = (p.title.match(/[A-Z]/g) || [p.title[0]]).slice(0, 2).join('');
        return `
        <div class="project">
            <article class="project-card">
                <div class="project-info">
                    <div class="project-index">
                        <span>${String(i + 1).padStart(2, '0')} / ${String(c.projects.length).padStart(2, '0')}</span>
                        <span class="project-status ${isLive ? 'live' : ''}">${isLive ? 'Open source' : 'In progress'}</span>
                    </div>
                    <div>
                        <h3 class="project-title">${escapeHTML(p.title)}</h3>
                        <p class="project-desc">${escapeHTML(p.description)}</p>
                    </div>
                    <div>
                        <div class="project-tags">${p.tags.map((t) => `<span>${escapeHTML(t)}</span>`).join('')}</div>
                        ${isLive
                            ? `<a class="project-link" href="${escapeHTML(p.link)}" target="_blank" rel="noopener noreferrer" data-cursor="Open"><span class="circle">${arrowSVG}</span>View project</a>`
                            : `<span class="project-link disabled"><span class="circle">${arrowSVG}</span>Coming soon</span>`}
                    </div>
                </div>
                <div class="project-art" style="--g1:${g1};--g2:${g2};--g3:${g3}" aria-hidden="true">
                    <span class="art-glyph">${escapeHTML(initials)}</span>
                </div>
            </article>
        </div>`;
    }).join('');

    // Contact
    $$('.email-text').forEach((el) => { el.textContent = c.email; });
    $$('.email-link').forEach((el) => { el.href = `mailto:${c.email}`; });

    $$('.discord-text').forEach((el) => { el.textContent = c.discord; });
    $$('.discord-link').forEach((el) => {
        if (c.discordUserId) {
            setExternal(el, `https://discord.com/users/${c.discordUserId}`);
        } else {
            el.removeAttribute('data-cursor');
            el.addEventListener('click', (e) => {
                e.preventDefault();
                copyText(c.discord, 'Discord username copied');
            });
        }
    });

    $$('.telegram-text').forEach((el) => { el.textContent = c.telegram; });
    $$('.telegram-link').forEach((el) => setExternal(el, `https://t.me/${c.telegram.replace('@', '')}`));

    $$('.github-text').forEach((el) => { el.textContent = c.github; });
    $$('.github-link').forEach((el) => setExternal(el, `https://github.com/${c.github}`));

    $$('.twitter-text').forEach((el) => { el.textContent = `@${c.twitter}`; });
    $$('.twitter-link').forEach((el) => setExternal(el, `https://twitter.com/${c.twitter}`));

    $$('.linkedin-link').forEach((el) => setExternal(el, c.linkedin));

    $('.footer-text').textContent = `© ${new Date().getFullYear()} ${c.name}. ${c.footerText}`;
    document.title = `${c.name} — ${c.title}`;
}

// ============================================
// Interface behaviour (works with or without motion)
// ============================================
let toastTimer;
function showToast(message) {
    const toast = $('.toast');
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2200);
}

function copyText(text, message) {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(text).then(() => showToast(message));
}

function initInterface() {
    const root = document.documentElement;
    const nav = $('.nav');
    const toggle = $('.menu-toggle');
    const mobileMenu = $('.mobile-menu');

    // Mobile menu
    const setMenu = (open) => {
        root.classList.toggle('menu-open', open);
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        mobileMenu.setAttribute('aria-hidden', String(!open));
        if (window.lenis) open ? window.lenis.stop() : window.lenis.start();
        else document.body.style.overflow = open ? 'hidden' : '';
    };
    toggle.addEventListener('click', () => setMenu(!root.classList.contains('menu-open')));
    $$('a', mobileMenu).forEach((a) => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && root.classList.contains('menu-open')) setMenu(false);
    });

    // Copy email
    $('.copy-btn').addEventListener('click', () => {
        copyText(portfolioConfig.email, 'Email copied to clipboard');
        const label = $('.copy-label');
        label.textContent = 'Copied!';
        setTimeout(() => { label.textContent = 'Copy'; }, 2000);
    });

    // Nav: background once scrolled, hide on scroll down, show on scroll up
    // + top progress bar
    const bar = $('.progress span');
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
        nav.classList.toggle('is-scrolled', y > 40);
        if (!root.classList.contains('menu-open')) {
            nav.classList.toggle('is-hidden', y > lastY && y > 300);
        }
        lastY = y;
        ticking = false;
    };
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(onScroll);
            ticking = true;
        }
    }, { passive: true });
    onScroll();

    // Active section in nav
    const links = $$('.nav-link');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            links.forEach((l) => l.classList.toggle('is-active', l.getAttribute('href') === `#${entry.target.id}`));
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('main section[id]').forEach((s) => sectionObserver.observe(s));

    // Rotating roles
    const track = $('.role-track');
    const roleCount = portfolioConfig.roles.length;
    let roleIndex = 0;
    const easing = 'transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)';
    setInterval(() => {
        roleIndex++;
        track.style.transition = easing;
        track.style.transform = `translateY(${-roleIndex * 1.3}em)`;
        if (roleIndex === roleCount) {
            setTimeout(() => {
                track.style.transition = 'none';
                track.style.transform = 'translateY(0)';
                roleIndex = 0;
            }, 850);
        }
    }, 2600);

    // Local clock in footer
    const clock = $('.clock');
    const tick = () => {
        clock.textContent = new Date().toLocaleTimeString('en-GB', {
            hour: '2-digit', minute: '2-digit', timeZone: portfolioConfig.timeZone
        });
    };
    tick();
    setInterval(tick, 15000);

    // Spotlight follows the pointer on cards
    $$('.bento-card, .project-card').forEach((card) => {
        card.addEventListener('pointermove', (e) => {
            const r = card.getBoundingClientRect();
            card.style.setProperty('--mx', `${e.clientX - r.left}px`);
            card.style.setProperty('--my', `${e.clientY - r.top}px`);
        });
    });
}

// ============================================
// Static fallback (no GSAP or reduced motion)
// ============================================
function initStatic() {
    $('.preloader')?.remove();
    document.documentElement.classList.remove('is-loading');
    $$('.stat-number').forEach((el) => { el.textContent = el.dataset.target; });
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        $$('.marquee-track').forEach((t) => t.classList.add('css-anim'));
    }
    $$('a[href^="#"]').forEach((a) => {
        a.addEventListener('click', (e) => {
            const target = a.getAttribute('href') === '#home' ? document.body : $(a.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// ============================================
// Motion
// ============================================
function splitLines(el) {
    el.innerHTML = el.innerHTML
        .split(/<br\s*\/?>/i)
        .map((part) => `<span class="line"><span class="line-inner">${part.trim()}</span></span>`)
        .join('');
}

function splitWords(el) {
    const walk = (node) => {
        [...node.childNodes].forEach((child) => {
            if (child.nodeType === Node.TEXT_NODE) {
                const frag = document.createDocumentFragment();
                child.textContent.split(/(\s+)/).forEach((part) => {
                    if (!part) return;
                    if (/^\s+$/.test(part)) {
                        frag.appendChild(document.createTextNode(part));
                    } else {
                        const span = document.createElement('span');
                        span.className = 'word';
                        span.textContent = part;
                        frag.appendChild(span);
                    }
                });
                child.replaceWith(frag);
            } else {
                walk(child);
            }
        });
    };
    walk(el);
}

function initMotion() {
    const { gsap, ScrollTrigger } = window;
    gsap.registerPlugin(ScrollTrigger);
    const root = document.documentElement;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    // ---- Smooth scroll ----
    let lenis = null;
    if (window.Lenis) {
        lenis = new window.Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
        window.lenis = lenis;
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);
        lenis.stop();
    }

    $$('a[href^="#"]').forEach((a) => {
        a.addEventListener('click', (e) => {
            const href = a.getAttribute('href');
            const target = href === '#home' ? 0 : $(href);
            if (target === null) return;
            e.preventDefault();
            if (lenis) lenis.scrollTo(target, { duration: 1.6 });
            else (target === 0 ? document.body : target).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // ---- Text splitting ----
    $$('.split-lines').forEach(splitLines);
    $$('.split-words').forEach(splitWords);

    // ---- Hero initial states ----
    const heroLines = $$('.hero-title .line-inner');
    const heroReveals = $$('.hero .reveal-up');
    gsap.set(heroLines, { yPercent: 115, rotate: 4 });
    gsap.set(heroReveals, { y: 40, opacity: 0 });
    gsap.set('.nav', { yPercent: -100 });
    gsap.set('.phone', { y: 80, opacity: 0, rotateY: -40 });
    gsap.set('.float-chip', { opacity: 0 });

    // ---- Preloader -> intro ----
    const counter = { v: 0 };
    const countEl = $('.preloader-count');
    const intro = gsap.timeline({ defaults: { ease: 'expo.out' } });

    intro
        .to(counter, {
            v: 100,
            duration: 1.6,
            ease: 'power2.inOut',
            onUpdate: () => { countEl.textContent = Math.round(counter.v); }
        })
        .to('.preloader-bar span', { scaleX: 1, duration: 1.6, ease: 'power2.inOut' }, 0)
        .to('.preloader-inner', { y: -40, opacity: 0, duration: 0.5, ease: 'power2.in' })
        .to('.preloader', {
            yPercent: -100,
            duration: 1.1,
            ease: 'expo.inOut',
            onComplete: () => {
                $('.preloader').remove();
                root.classList.remove('is-loading');
                lenis?.start();
            }
        }, '-=0.15')
        .to(heroLines, { yPercent: 0, rotate: 0, duration: 1.4, stagger: 0.1 }, '-=0.55')
        .to('.nav', { yPercent: 0, duration: 1.2, clearProps: 'transform' }, '<0.2')
        .to(heroReveals, { y: 0, opacity: 1, duration: 1.2, stagger: 0.07 }, '<0.1')
        .to('.phone', { y: 0, opacity: 1, rotateY: -14, duration: 1.6 }, '<')
        .to('.float-chip', { opacity: 1, duration: 1, stagger: 0.15, ease: 'power2.out' }, '<0.4')
        .add(() => {
            $$('.hero .stat-number').forEach((el) => {
                const o = { v: 0 };
                gsap.to(o, {
                    v: Number(el.dataset.target),
                    duration: 2,
                    ease: 'power3.out',
                    onUpdate: () => { el.textContent = Math.round(o.v); }
                });
            });
        }, '<');

    // ---- Hero scroll-out ----
    gsap.to('.hero-title', {
        yPercent: -18,
        opacity: 0.2,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
    });
    gsap.to('.hero-visual', {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
    });

    // ---- Generic reveals ----
    const outsideHero = $$('.reveal-up').filter((el) => !el.closest('.hero'));
    gsap.set(outsideHero, { y: 50, opacity: 0 });
    ScrollTrigger.batch(outsideHero, {
        start: 'top 90%',
        once: true,
        onEnter: (batch) => gsap.to(batch, { y: 0, opacity: 1, duration: 1.2, stagger: 0.08, ease: 'expo.out' })
    });

    $$('.split-lines, .contact-title').forEach((title) => {
        gsap.from($$('.line-inner', title), {
            yPercent: 115,
            rotate: 3,
            duration: 1.3,
            stagger: 0.1,
            ease: 'expo.out',
            scrollTrigger: { trigger: title, start: 'top 85%' }
        });
    });

    // ---- Marquee: drifts on its own, accelerates & flips with scroll ----
    $$('.marquee').forEach((marquee, i) => {
        const tracks = $$('.marquee-track', marquee);
        const base = i === 0 ? -1 : 1;
        let x = 0;
        let dir = 1;
        let width = tracks[0].offsetWidth;
        window.addEventListener('resize', () => { width = tracks[0].offsetWidth; });
        gsap.ticker.add((_, delta) => {
            const v = lenis ? lenis.velocity : 0;
            if (v > 0.5) dir = 1;
            else if (v < -0.5) dir = -1;
            const speed = (0.05 + Math.min(Math.abs(v) * 0.04, 1.2)) * delta * 0.6;
            x += speed * base * dir;
            if (x <= -width) x += width;
            if (x > 0) x -= width;
            tracks.forEach((t) => { t.style.transform = `translate3d(${x}px,0,0)`; });
        });
    });

    // ---- About ----
    gsap.fromTo('.about-statement .word',
        { opacity: 0.12 },
        {
            opacity: 1,
            stagger: 0.05,
            ease: 'none',
            scrollTrigger: { trigger: '.about-statement', start: 'top 80%', end: 'bottom 45%', scrub: true }
        });

    gsap.fromTo('.photo-mask',
        { clipPath: 'inset(100% 0% 0% 0% round 20px)' },
        {
            clipPath: 'inset(0% 0% 0% 0% round 20px)',
            duration: 1.6,
            ease: 'expo.inOut',
            scrollTrigger: { trigger: '.about-photo', start: 'top 80%' }
        });
    gsap.fromTo('.photo-mask img',
        { yPercent: -12, scale: 1.2 },
        {
            yPercent: 0,
            scale: 1,
            ease: 'none',
            scrollTrigger: { trigger: '.about-grid', start: 'top bottom', end: 'bottom top', scrub: true }
        });

    // ---- Skills ----
    gsap.from('.bento-card', {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.08,
        ease: 'expo.out',
        scrollTrigger: { trigger: '.bento', start: 'top 85%' }
    });
    $$('.bento-card').forEach((card) => {
        gsap.from($$('.chip', card), {
            y: 20,
            opacity: 0,
            scale: 0.85,
            duration: 0.8,
            stagger: 0.035,
            ease: 'back.out(1.8)',
            scrollTrigger: { trigger: card, start: 'top 85%' }
        });
    });

    // ---- Projects: stacking cards ----
    const projects = $$('.project');
    const mm = gsap.matchMedia();
    projects.forEach((project, i) => {
        const card = $('.project-card', project);
        gsap.from(card, {
            y: 120,
            rotateX: -8,
            opacity: 0,
            duration: 1.4,
            ease: 'expo.out',
            scrollTrigger: { trigger: project, start: 'top 90%' }
        });
        gsap.fromTo($('.art-glyph', project),
            { yPercent: 40, scale: 0.8 },
            {
                yPercent: -20,
                scale: 1.1,
                ease: 'none',
                scrollTrigger: { trigger: project, start: 'top bottom', end: 'bottom top', scrub: true }
            });

        // Cards stack on wider screens only; on phones they scroll normally
        const next = projects[i + 1];
        if (!next) return;
        mm.add('(min-width: 901px)', () => {
            gsap.to(card, {
                scale: 0.9,
                filter: 'brightness(0.45)',
                ease: 'none',
                scrollTrigger: { trigger: next, start: 'top bottom', end: 'top top+=100', scrub: true }
            });
        });
    });

    // ---- Contact ----
    gsap.from('.contact-card', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.07,
        ease: 'expo.out',
        scrollTrigger: { trigger: '.contact-grid', start: 'top 92%' }
    });

    // ---- Footer ----
    gsap.from('.footer-big span', {
        yPercent: 60,
        ease: 'none',
        scrollTrigger: { trigger: '.footer', start: 'top bottom', end: 'bottom bottom', scrub: true }
    });

    if (finePointer) initPointerEffects(gsap);

    // Images / fonts can shift layout — keep triggers accurate
    window.addEventListener('load', () => ScrollTrigger.refresh());
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
}

function initPointerEffects(gsap) {
    const root = document.documentElement;
    root.classList.add('has-cursor');

    // ---- Custom cursor ----
    const cursor = $('.cursor');
    const dot = $('.cursor-dot');
    const label = $('.cursor-label');
    const ringX = gsap.quickTo(cursor, 'x', { duration: 0.55, ease: 'power3' });
    const ringY = gsap.quickTo(cursor, 'y', { duration: 0.55, ease: 'power3' });
    const dotX = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3' });
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3' });

    window.addEventListener('pointermove', (e) => {
        cursor.classList.remove('is-hidden');
        ringX(e.clientX); ringY(e.clientY);
        dotX(e.clientX); dotY(e.clientY);
    });
    document.addEventListener('pointerleave', () => cursor.classList.add('is-hidden'));
    document.addEventListener('pointerenter', () => cursor.classList.remove('is-hidden'));

    document.addEventListener('pointerover', (e) => {
        const labelled = e.target.closest('[data-cursor]');
        const interactive = e.target.closest('a, button, .chip');
        cursor.classList.toggle('is-label', !!labelled);
        cursor.classList.toggle('is-hover', !labelled && !!interactive);
        if (labelled) label.textContent = labelled.dataset.cursor;
    });

    // ---- Magnetic elements ----
    $$('[data-magnetic]').forEach((el) => {
        const xTo = gsap.quickTo(el, 'x', { duration: 0.8, ease: 'elastic.out(1, 0.4)' });
        const yTo = gsap.quickTo(el, 'y', { duration: 0.8, ease: 'elastic.out(1, 0.4)' });
        el.addEventListener('pointermove', (e) => {
            const r = el.getBoundingClientRect();
            xTo((e.clientX - (r.left + r.width / 2)) * 0.35);
            yTo((e.clientY - (r.top + r.height / 2)) * 0.35);
        });
        el.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
    });

    // ---- Phone tilts toward the pointer ----
    const phone = $('.phone');
    const rotY = gsap.quickTo(phone, 'rotateY', { duration: 1.2, ease: 'power3' });
    const rotX = gsap.quickTo(phone, 'rotateX', { duration: 1.2, ease: 'power3' });
    $('.hero').addEventListener('pointermove', (e) => {
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        rotY(-14 + nx * 30);
        rotX(8 - ny * 20);
    });

    // ---- Ambient orbs follow the pointer softly ----
    const orbs = $$('.orb');
    window.addEventListener('pointermove', (e) => {
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        orbs.forEach((orb, i) => {
            gsap.to(orb, { '--px': `${nx * 80 * (i + 1)}px`, '--py': `${ny * 60 * (i + 1)}px`, duration: 2, ease: 'power3.out', overwrite: 'auto' });
        });
    });
}

// ============================================
// Boot
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderContent();
    initInterface();

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (window.gsap && window.ScrollTrigger && !reduceMotion) {
        document.documentElement.classList.add('is-loading');
        initMotion();
    } else {
        initStatic();
    }
});
