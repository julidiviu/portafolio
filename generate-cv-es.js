const puppeteer = require('puppeteer');
const fs = require('fs');
const os = require('os');
const path = require('path');

const cv = {
  name: 'Julián Cañar',
  role: 'Full Stack Developer',
  photo: 'julian-canar.jpg',
  location: 'Pasto · Colombia',
  linkedin: 'https://www.linkedin.com/in/julian-canar-stanxed/',
  github: 'https://github.com/julidiviu',
  profile: [
    'Soy egresado de la Universidad de Nariño y disfruto desarrollar soluciones tecnológicas que resuelvan problemas reales. Durante mi formación participé en proyectos académicos y profesionales que me permitieron fortalecer mis conocimientos en desarrollo de software, bases de datos y aplicaciones web.',
    'Mi principal interés está en el desarrollo backend, aunque también cuento con experiencia en frontend y bases de datos. He trabajado con tecnologías como Java, Python, Django, Angular, PostgreSQL, Docker y Git, disfrutando especialmente diseñar aplicaciones organizadas, escalables y fáciles de mantener. Siempre estoy dispuesto a aprender nuevas herramientas y enfrentar nuevos retos.'
  ],
  skills: [
    ['Backend', ['Python', 'Django', 'Java', 'Node.js']],
    ['Frontend', ['React', 'Next.js', 'Angular', 'TypeScript']],
    ['Bases de datos', ['PostgreSQL', 'MySQL', 'SQLite']],
    ['Herramientas', ['Git', 'Docker', 'Postman']],
    ['Sistemas', ['Ubuntu', 'Fedora', 'Windows']],
    ['Metodologías y Arquitectura', ['Scrum']]
  ],
  languages: [['Español', 'Nativo'], ['Inglés', 'B2']],
  experience: [
    ['Nov. 2025 – Abr. 2026', 'Desarrollador Full Stack', 'IPSUS S.A.S.', 'Participé en el desarrollo de una plataforma web para la gestión administrativa de IPSUS utilizando Django, Angular y PostgreSQL. Implementé funcionalidades backend y frontend, autenticación con JWT, estadisticas y mejoras en la experiencia de usuario.'],
    ['2025 – 2026', 'Monitor Académico', 'Universidad de Nariño', 'Participé como monitor académico en el desarrollo de un sistema web para la gestión de préstamos e inventario de equipos tecnológicos en la Universidad de Nariño utilizando Django REST Framework, Angular y PostgreSQL bajo metodología Scrum.']
  ],
  projects: [
    ['Sistema de Préstamos e Inventario', 'Aplicación web desarrollada para la Universidad de Nariño que permite gestionar el préstamo de equipos, controlar el inventario, administrar usuarios y generar constancias de forma automática.', 'https://github.com/julidiviu/inventario-sisprestamos', 'https://inventario-sisprestamos.onrender.com'],
    ['Plataforma IPSUS', 'Desarrollo de una plataforma web para IPSUS enfocada en la gestión de información y procesos internos, implementando autenticación, administración de datos y funcionalidades adaptadas a las necesidades del cliente.', 'https://github.com/julidiviu/ipsus-frontend', 'https://ipsus-frontend.vercel.app'],
    ['Portafolio', 'Portafolio personal multilenguaje construido con Next.js, diseñado para mostrar perfil profesional, experiencia, habilidades y proyectos.', 'https://github.com/julidiviu/portafolio', 'https://portafolio-julian-cannar.vercel.app/es']
  ],
  references: [
    ['Gloria Rodriguez Vallejo', 'Secretaria Departamento de Sistemas / Universidad de Nariño', 'Persona íntegra, responsable y comprometida, con actitud proactiva, capacidad de trabajo en equipo y facilidad para asumir nuevos retos.'],
    ['Manuel Bolaños', 'Director Departamento de Sistemas / Universidad de Nariño', 'Responsable, comprometido y con iniciativa, interés por aprender y capacidad para resolver las situaciones que se presentan.'],
    ['Danilo Santacruz', 'Ingeniero Ambiental / Independiente', 'Responsable, honesto y comprometido; confiable, respetuoso y dispuesto a aprender, trabajar en equipo y asumir nuevos retos.']
  ]
};

const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]);
const displayUrl = (url) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

async function generateCV() {
  console.log('Generating Spanish CV...');
  const photoPath = path.join(__dirname, 'public', 'media', 'hero', cv.photo);
  const photoDataUrl = fs.existsSync(photoPath)
    ? `data:image/jpeg;base64,${fs.readFileSync(photoPath).toString('base64')}`
    : '';

  const contact = [
    ['Ubicación', cv.location],
    ['LinkedIn', `<a href="${cv.linkedin}">${displayUrl(cv.linkedin)}</a>`],
    ['GitHub', `<a href="${cv.github}">${displayUrl(cv.github)}</a>`]
  ].map(([label, value]) => `<div class="contact-item"><span class="contact-label">${label}</span><span class="contact-value">${value}</span></div>`).join('');
  const skills = cv.skills.map(([title, items]) => `<div class="skill-category"><div class="skill-title">${title}</div><div class="tags">${items.map((item) => `<span>${item}</span>`).join('')}</div></div>`).join('');
  const languages = cv.languages.map(([name, level]) => `<div class="contact-item"><span class="contact-label">${name}</span><span class="contact-value">${level}</span></div>`).join('');
  const experience = cv.experience.map(([date, role, company, desc]) => `<article class="item"><div class="item-header"><h4>${role}</h4><span class="date">${date}</span></div><div class="subtitle">${company}</div><p>${desc}</p></article>`).join('');
  const projects = cv.projects.map(([title, desc, repo, view]) => `<article class="item project"><h4>${title}</h4><div class="project-links"><a href="${repo}">Repo: ${displayUrl(repo)}</a><span>·</span><a href="${view}">Ver: ${displayUrl(view)}</a></div><p>${desc}</p></article>`).join('');
  const references = cv.references.map(([author, role, text]) => `<article class="reference"><p>“${text}”</p><div>— ${author}</div><small>${role}</small></article>`).join('');

  const html = `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>${cv.name} — CV</title><style>
    *{box-sizing:border-box;margin:0;padding:0} @page{size:A4;margin:0} body{font-family:Inter,Arial,sans-serif;color:#334155;font-size:9.6px;line-height:1.34;-webkit-print-color-adjust:exact;print-color-adjust:exact}.resume{display:flex;width:210mm;height:297mm;overflow:hidden;background:#fff}.main{order:1;width:68%;padding:22px 26px;display:flex;flex-direction:column;gap:9px}.sidebar{order:2;width:32%;background:#0f172a;color:#f1f5f9;padding:22px 16px;display:flex;flex-direction:column;gap:13px}.photo{width:94px;height:94px;margin:0 auto;border:3px solid #10b981;border-radius:50%;overflow:hidden}.photo img{width:100%;height:100%;object-fit:cover}.name{font-size:32px;line-height:1.05;letter-spacing:-1px;color:#0f172a;margin-bottom:3px}.role{font-size:13px;font-weight:600;color:#10b981;text-transform:uppercase;letter-spacing:1px}.section{display:flex;flex-direction:column;gap:5px}.section-title{font-size:13px;color:#0f172a;border-bottom:2px solid #e2e8f0;padding-bottom:4px}.profile{font-size:9.8px;line-height:1.38}.profile+p{margin-top:2px}.item{display:flex;flex-direction:column;gap:1px;break-inside:avoid}.item-header{display:flex;justify-content:space-between;gap:8px;align-items:baseline}.item h4{font-size:10.8px;color:#0f172a}.subtitle{font-weight:600;color:#10b981}.date{font-size:8.5px;white-space:nowrap;background:#f1f5f9;border-radius:10px;padding:1px 5px}.item p{color:#475569}.project-links{display:flex;align-items:center;gap:4px;white-space:nowrap}.project a{color:#64748b;font-size:8.3px;text-decoration:none}.reference{background:#f8fafc;border-left:3px solid #10b981;border-radius:0 5px 5px 0;padding:4px 7px;break-inside:avoid}.reference p{font-style:italic;color:#475569;font-size:8px;line-height:1.2;margin-bottom:1px}.reference div{font-weight:700;color:#0f172a;font-size:8px}.reference small{font-size:7.5px;color:#64748b}.sidebar-title{font-size:10px;text-transform:uppercase;letter-spacing:1.2px;color:#10b981;border-bottom:1px solid rgba(16,185,129,.35);padding-bottom:4px;margin-bottom:5px}.contact-item{display:flex;flex-direction:column;gap:1px;margin-bottom:5px}.contact-label{font-size:8.3px;font-weight:600;color:#94a3b8}.contact-value{font-size:8.8px;word-break:break-word}.contact-value a{color:#f1f5f9;text-decoration:none}.skill-category{margin-bottom:5px}.skill-title{font-size:9px;color:#cbd5e1;font-weight:600;margin-bottom:2px}.tags{display:flex;flex-wrap:wrap;gap:3px}.tags span{font-size:7.6px;color:#34d399;background:rgba(16,185,129,.15);border:1px solid rgba(16,185,129,.2);border-radius:3px;padding:1px 4px}
  </style></head><body><main class="resume"><section class="main"><header><h1 class="name">Julián<br>Cañar</h1><h2 class="role">${cv.role}</h2></header><section class="section"><h3 class="section-title">Perfil</h3><p class="profile">${cv.profile[0]}</p><p class="profile">${cv.profile[1]}</p></section><section class="section"><h3 class="section-title">Trayectoria</h3>${experience}</section><section class="section"><h3 class="section-title">Proyectos destacados</h3>${projects}</section><section class="section"><h3 class="section-title">Referencias</h3>${references}</section></section><aside class="sidebar"><div class="photo">${photoDataUrl ? `<img src="${photoDataUrl}" alt="Retrato de ${escapeHtml(cv.name)}">` : ''}</div><section><h3 class="sidebar-title">Contacto</h3>${contact}</section><section><h3 class="sidebar-title">Habilidades</h3>${skills}</section><section><h3 class="sidebar-title">Idiomas</h3>${languages}</section></aside></main></body></html>`;
  const localChrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const browserProfile = fs.mkdtempSync(path.join(os.tmpdir(), 'portfolio-cv-'));
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: fs.existsSync(localChrome) ? localChrome : undefined,
    userDataDir: browserProfile
  });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'domcontentloaded' });
  const outputPath = path.join(__dirname, 'public', 'media', 'cv', 'Julian_Canar_CV_ES.pdf');
  await page.pdf({ path: outputPath, format: 'A4', printBackground: true, waitForFonts: false, margin: { top: '0', right: '0', bottom: '0', left: '0' } });
  await browser.close();
  fs.rmSync(browserProfile, { recursive: true, force: true });
  console.log('CV successfully generated at:', outputPath);
}

generateCV().catch((error) => { console.error(error); process.exit(1); });
