const translations = {
    de: {
        heroTitle: 'Explorer & <span class="text-neonGreen">Architect</span>',
        heroSubtitle: 'IT-Solutions, Flugzeuge und die Welt.',
        aboutTitle: 'Über Mich',
        aboutText: 'Ich bin ein leidenschaftlicher IT-Spezialist, der es liebt, komplexe Lösungen zu entwickeln. Wenn ich nicht gerade code, findet man mich meistens am Flughafen oder über den Wolken. Reisen und Flugzeuge sind meine Welt.',
        ageLabel: 'Aktuelles Alter',
        solutionsTitle: 'IT Lösungen',
        airplaneTitle: 'Luftfahrt Passion',
        galleryTitle: 'Reisen & Leben',
        footerText: '&copy; Niklas | Beste Grüße von mir.',
        sol1Title: 'Architektur',
        sol1Text: 'Innovative und robuste Systemdesigns für moderne Herausforderungen.',
        sol2Title: 'Full Stack',
        sol2Text: 'Von der Datenbank bis zum Frontend, alles auf Skalierbarkeit ausgelegt.',
        sol3Title: 'Effizienz',
        sol3Text: 'Optimierung von Performance und Geschwindigkeit für maximale Wirkung.'
    },
    en: {
        heroTitle: 'Explorer & <span class="text-neonGreen">Architect</span>',
        heroSubtitle: 'IT-Solutions, Airplanes and the World.',
        aboutTitle: 'About Me',
        aboutText: 'I am a passionate IT specialist who loves developing complex solutions. When I\'m not coding, you\'ll usually find me at the airport or above the clouds. Traveling and airplanes are my world.',
        ageLabel: 'Current Age',
        solutionsTitle: 'IT Solutions',
        airplaneTitle: 'Aviation Passion',
        galleryTitle: 'Travel & Life',
        footerText: '&copy; Niklas | Best regards from me.',
        sol1Title: 'Architecture',
        sol1Text: 'Innovative and robust system designs for modern challenges.',
        sol2Title: 'Full Stack',
        sol2Text: 'From database to frontend, everything is built to scale.',
        sol3Title: 'Efficiency',
        sol3Text: 'Optimizing performance and speed for maximum impact.'
    },
    zh: {
        heroTitle: '探索者与 <span class="text-neonGreen">架构师</span>',
        heroSubtitle: 'IT 解决方案、飞机与世界。',
        aboutTitle: '关于我',
        aboutText: '我是一名热衷于开发复杂解决方案的 IT 专家。不写代码时，你通常会在机场或云端发现我。旅行和飞机是我的世界。',
        ageLabel: '当前年龄',
        solutionsTitle: 'IT 解决方案',
        airplaneTitle: '航空热情',
        galleryTitle: '旅行与生活',
        footerText: '&copy; Niklas | 来自我的诚挚问候。',
        sol1Title: '架构',
        sol1Text: '应对现代挑战的创新且稳健的系统设计。',
        sol2Title: '全栈',
        sol2Text: '从数据库到前端，一切都为扩展而生。',
        sol3Title: '效率',
        sol3Text: '优化性能和速度以产生最大影响。'
    },
    ru: {
        heroTitle: 'Исследователь и <span class="text-neonGreen">Архитектор</span>',
        heroSubtitle: 'IT-решения, самолеты и мир.',
        aboutTitle: 'Обо мне',
        aboutText: 'Я страстный IT-специалист, который любит разрабатывать сложные решения. Когда я не программирую, вы обычно найдете меня в аэропорту или над облаками. Путешествия и самолеты — это мой мир.',
        ageLabel: 'Текущий возраст',
        solutionsTitle: 'IT-решения',
        airplaneTitle: 'Авиационная страсть',
        galleryTitle: 'Путешествия и жизнь',
        footerText: '&copy; Niklas | С наилучшими пожеланиями от меня.',
        sol1Title: 'Архитектура',
        sol1Text: 'Инновационные и надежные системные решения для современных задач.',
        sol2Title: 'Full Stack',
        sol2Text: 'От базы данных до фронтенда — все создано для масштабирования.',
        sol3Title: 'Эффективность',
        sol3Text: 'Оптимизация производительности и скорости для максимального эффекта.'
    }
};

function setLanguage(lang) {
    document.documentElement.lang = lang;
    const t = translations[lang];

    document.getElementById('hero-title').innerHTML = t.heroTitle;
    document.getElementById('hero-subtitle').innerText = t.heroSubtitle;
    document.getElementById('about-title').innerHTML = `<span class="w-12 h-1 bg-neonGreen mr-4"></span> ${t.aboutTitle}`;
    document.getElementById('about-text').innerText = t.aboutText;
    document.getElementById('age-label').innerText = t.ageLabel;
    document.getElementById('solutions-title').innerText = t.solutionsTitle;

    const aviationTitle = document.getElementById('airplane-title');
    if (aviationTitle) {
        aviationTitle.querySelector('span').innerText = t.airplaneTitle;
    }

    document.getElementById('gallery-title').innerText = t.galleryTitle;
    document.getElementById('footer-text').innerHTML = t.footerText;

    const solutionCards = document.querySelectorAll('#solutions h3');
    if (solutionCards.length >= 3) {
        solutionCards[0].innerText = t.sol1Title;
        solutionCards[0].nextElementSibling.innerText = t.sol1Text;
        solutionCards[1].innerText = t.sol2Title;
        solutionCards[1].nextElementSibling.innerText = t.sol2Text;
        solutionCards[2].innerText = t.sol3Title;
        solutionCards[2].nextElementSibling.innerText = t.sol3Text;
    }

    document.querySelectorAll('#lang-toggle button').forEach(btn => {
        btn.classList.remove('text-neonGreen', 'font-bold');
        if(btn.getAttribute('onclick').includes(`'${lang}'`)) {
            btn.classList.add('text-neonGreen', 'font-bold');
        }
    });
}

// Age Counter Logic
const birthDate = new Date('2007-03-25T09:55:00+02:00');

function updateAge() {
    const now = new Date();
    const diffInMs = now - birthDate;
    const ageInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.242199);

    const counterEl = document.getElementById('age-counter');
    if (counterEl) {
        counterEl.innerText = ageInYears.toFixed(15);
    }
    requestAnimationFrame(updateAge);
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage('de');
    updateAge();
});
