const puppeteer = require('puppeteer');
const fs = require('fs');
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
    'Mi principal interés está en el desarrollo backend, aunque también cuento con experiencia en frontend y bases de datos. Disfruto diseñar aplicaciones organizadas, escalables y fáciles de mantener.'
  ],
  skills: [
    ['Backend', ['Python', 'Django', 'Java', 'Node.js']],
    ['Frontend', ['React', 'Next.js', 'Angular', 'TypeScript']],
    ['Bases de datos', ['PostgreSQL', 'MySQL', 'SQLite']],
    ['Herramientas', ['Git', 'Docker', 'Postman']],
    ['Sistemas', ['Ubuntu', 'Fedora', 'Windows']],
    ['Metodologías', ['Scrum']]
  ],
  languages: [['Español', 'Nativo'], ['Inglés', 'B2']],
  experience: [
    ['Nov. 2025 – Abr. 2026', 'Desarrollador Full Stack', 'IPSUS S.A.S.', 'Participé en el desarrollo de una plataforma web para la gestión administrativa de IPSUS utilizando Django, Angular y PostgreSQL. Implementé funcionalidades backend y frontend, autenticación con JWT, estadísticas y mejoras en la experiencia de usuario.'],
    ['2025 – 2026', 'Monitor Académico', 'Universidad de Nariño', 'Participé como monitor académico en el desarrollo de un sistema web para la gestión de préstamos e inventario de equipos tecnológicos usando Django REST Framework, Angular y PostgreSQL bajo metodología Scrum.']
  ],
  projects: [
    ['Sistema de Préstamos e Inventario', 'Aplicación web desarrollada para la Universidad de Nariño que permite gestionar el préstamo de equipos, controlar el inventario, administrar usuarios y generar constancias de forma automática.', 'https://github.com/julidiviu/inventario-sisprestamos'],
    ['Plataforma IPSUS', 'Plataforma web para la gestión de información y procesos internos, con autenticación, administración de datos y funcionalidades adaptadas a las necesidades del cliente.', 'https://gitlab.com/digitalroot-group/ipsus-frontend'],
    ['Portafolio', 'Portafolio personal multilenguaje construido con Next.js, diseñado para mostrar perfil profesional, experiencia, habilidades y proyectos.', 'https://github.com/julidiviu/portafolio']
  ],
  references: [
    ['Gloria Rodriguez Vallejo', 'Secretaria Departamento de Sistemas / Universidad de Nariño', 'Durante el tiempo que tuve la oportunidad de conocerlo, demostró ser una persona íntegra, honesta, responsable y comprometida con sus labores. Se caracteriza por su actitud proactiva, disposición para aprender, trabajo en equipo y facilidad para adaptarse a nuevos retos.'],
    ['Manuel Bolaños', 'Director Departamento de Sistemas / Universidad de Nariño', 'Durante el tiempo en que se desempeñó como monitor, demostró ser una persona responsable, comprometida y con excelente disposición para el trabajo. Siempre cumplió con las actividades asignadas, demostrando iniciativa, interés por aprender y capacidad para resolver situaciones.'],
    ['Danilo Santacruz', 'Ingeniero Ambiental / Independiente', 'Conozco a Julián desde hace algún tiempo y puedo decir que es una persona responsable, honesta y comprometida con lo que hace. Siempre se ha caracterizado por su buena disposición para aprender, trabajar en equipo y asumir nuevos retos.']
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
  const projects = cv.projects.map(([title, desc, url]) => `<article class="item project"><h4>${title}</h4><a href="${url}">${displayUrl(url)}</a><p>${desc}</p></article>`).join('');
  const references = cv.references.map(([author, role, text]) => `<article class="reference"><p>“${text}”</p><div>— ${author}</div><small>${role}</small></article>`).join('');

  const html = `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>${cv.name} — CV</title><style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
    *{box-sizing:border-box;margin:0;padding:0} @page{size:A4;margin:0} body{font-family:Inter,Arial,sans-serif;color:#334155;font-size:10px;line-height:1.42;-webkit-print-color-adjust:exact;print-color-adjust:exact}.resume{display:flex;width:210mm;min-height:297mm;background:#fff}.main{order:1;width:68%;padding:28px 30px;display:flex;flex-direction:column;gap:13px}.sidebar{order:2;width:32%;background:#0f172a;color:#f1f5f9;padding:28px 18px;display:flex;flex-direction:column;gap:19px}.photo{width:108px;height:108px;margin:0 auto;border:3px solid #10b981;border-radius:50%;overflow:hidden}.photo img{width:100%;height:100%;object-fit:cover}.name{font-size:35px;line-height:1.05;letter-spacing:-1px;color:#0f172a;margin-bottom:5px}.role{font-size:14px;font-weight:600;color:#10b981;text-transform:uppercase;letter-spacing:1px}.section{display:flex;flex-direction:column;gap:7px}.section-title{font-size:14px;color:#0f172a;border-bottom:2px solid #e2e8f0;padding-bottom:5px}.profile{font-size:10.4px;line-height:1.5}.profile+p{margin-top:4px}.item{display:flex;flex-direction:column;gap:2px;break-inside:avoid}.item-header{display:flex;justify-content:space-between;gap:8px;align-items:baseline}.item h4{font-size:11.5px;color:#0f172a}.subtitle{font-weight:600;color:#10b981}.date{font-size:9px;white-space:nowrap;background:#f1f5f9;border-radius:10px;padding:2px 6px}.item p{color:#475569}.project a{color:#64748b;font-size:9px;text-decoration:none}.reference{background:#f8fafc;border-left:3px solid #10b981;border-radius:0 5px 5px 0;padding:6px 8px;break-inside:avoid}.reference p{font-style:italic;color:#475569;font-size:8.7px;line-height:1.32;margin-bottom:2px}.reference div{font-weight:700;color:#0f172a;font-size:8.7px}.reference small{font-size:8px;color:#64748b}.sidebar-title{font-size:11px;text-transform:uppercase;letter-spacing:1.2px;color:#10b981;border-bottom:1px solid rgba(16,185,129,.35);padding-bottom:5px;margin-bottom:8px}.contact-item{display:flex;flex-direction:column;gap:1px;margin-bottom:7px}.contact-label{font-size:8.7px;font-weight:600;color:#94a3b8}.contact-value{font-size:9.3px;word-break:break-word}.contact-value a{color:#f1f5f9;text-decoration:none}.skill-category{margin-bottom:8px}.skill-title{font-size:9.5px;color:#cbd5e1;font-weight:600;margin-bottom:3px}.tags{display:flex;flex-wrap:wrap;gap:4px}.tags span{font-size:8px;color:#34d399;background:rgba(16,185,129,.15);border:1px solid rgba(16,185,129,.2);border-radius:3px;padding:2px 5px}
  </style></head><body><main class="resume"><section class="main"><header><h1 class="name">Julián<br>Cañar</h1><h2 class="role">${cv.role}</h2></header><section class="section"><h3 class="section-title">Perfil</h3><p class="profile">${cv.profile[0]}</p><p class="profile">${cv.profile[1]}</p></section><section class="section"><h3 class="section-title">Trayectoria</h3>${experience}</section><section class="section"><h3 class="section-title">Proyectos destacados</h3>${projects}</section><section class="section"><h3 class="section-title">Referencias</h3>${references}</section></section><aside class="sidebar"><div class="photo">${photoDataUrl ? `<img src="${photoDataUrl}" alt="Retrato de ${escapeHtml(cv.name)}">` : ''}</div><section><h3 class="sidebar-title">Contacto</h3>${contact}</section><section><h3 class="sidebar-title">Habilidades</h3>${skills}</section><section><h3 class="sidebar-title">Idiomas</h3>${languages}</section></aside></main></body></html>`;
  const localChrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: fs.existsSync(localChrome) ? localChrome : undefined
  });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  const outputPath = path.join(__dirname, 'public', 'media', 'cv', 'Julian_Canar_CV_ES.pdf');
  await page.pdf({ path: outputPath, format: 'A4', printBackground: true, margin: { top: '0', right: '0', bottom: '0', left: '0' } });
  await browser.close();
  console.log('CV successfully generated at:', outputPath);
}

generateCV().catch((error) => { console.error(error); process.exit(1); });
