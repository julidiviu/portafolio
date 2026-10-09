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
    'I graduated from the University of Nariño and enjoy developing technological solutions that solve real-world problems. During my academic journey, I participated in academic and professional projects that strengthened my knowledge of software development, databases, and web applications.',
    'My main interest is backend development, although I also have experience in frontend development and databases. I have worked with Java, Python, Django, Angular, PostgreSQL, Docker, and Git. I especially enjoy designing organized, scalable, and maintainable applications, and I am always willing to learn new tools and take on new challenges.'
  ],
  skills: [
    ['Backend', ['Python', 'Django', 'Java', 'Node.js']],
    ['Frontend', ['React', 'Next.js', 'Angular', 'TypeScript']],
    ['Databases', ['PostgreSQL', 'MySQL', 'SQLite']],
    ['Tools', ['Git', 'Docker', 'Postman']],
    ['Operating Systems', ['Ubuntu', 'Fedora', 'Windows']],
    ['Methodologies & Architecture', ['Scrum']]
  ],
  languages: [['Spanish', 'Native'], ['English', 'B2']],
  experience: [
    ['Nov. 2025 – Apr. 2026', 'Full Stack Developer', 'IPSUS S.A.S.', 'Participated in the development of a web platform for IPSUS administrative management using Django, Angular, and PostgreSQL. Implemented backend and frontend features, JWT authentication, statistics, and user-experience improvements.'],
    ['2025 – 2026', 'Teaching Assistant', 'University of Nariño', 'Participated as a teaching assistant in the development of a web system for managing technology-equipment loans and inventory at the University of Nariño, using Django REST Framework, Angular, and PostgreSQL under the Scrum methodology.']
  ],
  projects: [
    ['Loan & Inventory Management System', 'A web application developed for the University of Nariño to manage equipment loans, inventory, users, and automatically generate loan certificates.', 'https://github.com/julidiviu/inventario-udenar-nextjs', 'https://inventario-udenar-nextjs.vercel.app/'],
    ['IPSUS Platform', 'A web platform for IPSUS focused on managing internal information and business processes, including authentication, data management, and features tailored to the client’s needs.', 'https://github.com/julidiviu/ipsus-frontend', 'https://ipsus-frontend.vercel.app'],
    ['Personal Portfolio', 'A multilingual personal portfolio built with Next.js to showcase my professional profile, experience, technical skills, and projects.', 'https://github.com/julidiviu/portafolio', 'https://portafolio-julian-cannar.vercel.app/en']
  ],
  references: [
    ['Gloria Rodriguez Vallejo', 'Secretary, Department of Systems / University of Nariño', 'An honest, responsible, and committed person with a proactive attitude, teamwork skills, and the ability to take on new challenges.', '+57 315 4137921'],
    ['Manuel Bolaños', 'Director, Department of Systems / University of Nariño', 'Responsible, committed, and proactive, with an interest in learning and the ability to resolve situations as they arise.', '+57 321 6417175'],
    ['Danilo Santacruz', 'Environmental Engineer / Independent', 'Responsible, honest, and committed; trustworthy, respectful, and willing to learn, work as part of a team, and take on new challenges.', '+57 301 3791022']
  ]
};

const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]);
const displayUrl = (url) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

async function generateCV() {
  console.log('Generating English CV...');
  const photoPath = path.join(__dirname, 'public', 'media', 'hero', cv.photo);
  const photoDataUrl = fs.existsSync(photoPath) ? `data:image/jpeg;base64,${fs.readFileSync(photoPath).toString('base64')}` : '';
  const contact = [['Location', cv.location], ['LinkedIn', `<a href="${cv.linkedin}">${displayUrl(cv.linkedin)}</a>`], ['GitHub', `<a href="${cv.github}">${displayUrl(cv.github)}</a>`]].map(([label, value]) => `<div class="contact-item"><span class="contact-label">${label}</span><span class="contact-value">${value}</span></div>`).join('');
  const skills = cv.skills.map(([title, items]) => `<div class="skill-category"><div class="skill-title">${title}</div><div class="tags">${items.map((item) => `<span>${item}</span>`).join('')}</div></div>`).join('');
  const languages = cv.languages.map(([name, level]) => `<div class="contact-item"><span class="contact-label">${name}</span><span class="contact-value">${level}</span></div>`).join('');
  const experience = cv.experience.map(([date, role, company, desc]) => `<article class="item"><div class="item-header"><h4>${role}</h4><span class="date">${date}</span></div><div class="subtitle">${company}</div><p>${desc}</p></article>`).join('');
  const projects = cv.projects.map(([title, desc, repo, view]) => `<article class="item project"><h4>${title}</h4><div class="project-links"><a href="${repo}">Repo: ${displayUrl(repo)}</a><span>·</span><a href="${view}">View: ${displayUrl(view)}</a></div><p>${desc}</p></article>`).join('');
  const references = cv.references.map(([author, role, text, phone]) => `<article class="reference"><p>“${text}”</p><div>— ${author}</div><small>${role}</small>${phone ? `<a class="ref-phone" href="tel:${phone.replace(/\s+/g, '')}">${phone}</a>` : ''}</article>`).join('');
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${cv.name} — CV</title><style>
*{box-sizing:border-box;margin:0;padding:0}@page{size:A4;margin:0}body{font-family:Inter,Arial,sans-serif;color:#334155;font-size:11px;line-height:1.42;-webkit-print-color-adjust:exact;print-color-adjust:exact}.resume{display:flex;width:210mm;min-height:297mm;background:#fff}.main{order:1;width:68%;padding:20px 24px;display:flex;flex-direction:column;gap:8px;justify-content:space-between}.sidebar{order:2;width:32%;background:#0f172a;color:#f1f5f9;padding:20px 15px;display:flex;flex-direction:column;gap:11px}.photo{width:88px;height:88px;margin:0 auto;border:3px solid #10b981;border-radius:50%;overflow:hidden}.photo img{width:100%;height:100%;object-fit:cover}.name{font-size:34px;line-height:1.05;letter-spacing:-1px;color:#0f172a;margin-bottom:3px}.role{font-size:13px;font-weight:600;color:#10b981;text-transform:uppercase;letter-spacing:1px}.section{display:flex;flex-direction:column;gap:5px}.section-title{font-size:14px;color:#0f172a;border-bottom:2px solid #e2e8f0;padding-bottom:4px}.profile{font-size:11px;line-height:1.42}.profile+p{margin-top:2px}.item{display:flex;flex-direction:column;gap:1px;break-inside:avoid}.item-header{display:flex;justify-content:space-between;gap:8px;align-items:baseline}.item h4{font-size:12px;color:#0f172a}.subtitle{font-weight:600;color:#10b981;font-size:11px}.date{font-size:9px;white-space:nowrap;background:#f1f5f9;border-radius:10px;padding:1px 5px}.item p{color:#475569}.project-links{display:flex;align-items:center;gap:4px;white-space:nowrap}.project a{color:#64748b;font-size:9px;text-decoration:none}.reference{background:#f8fafc;border-left:3px solid #10b981;border-radius:0 5px 5px 0;padding:4px 7px;break-inside:avoid}.reference p{font-style:italic;color:#475569;font-size:9.2px;line-height:1.3;margin-bottom:1px}.reference div{font-weight:700;color:#0f172a;font-size:9.2px}.reference small{font-size:8.5px;color:#64748b}.ref-phone{display:inline-block;font-size:8.8px;color:#0f172a;font-weight:700;text-decoration:none;margin-top:1px}.sidebar-title{font-size:11px;text-transform:uppercase;letter-spacing:1.2px;color:#10b981;border-bottom:1px solid rgba(16,185,129,.35);padding-bottom:4px;margin-bottom:5px}.contact-item{display:flex;flex-direction:column;gap:1px;margin-bottom:5px}.contact-label{font-size:9px;font-weight:600;color:#94a3b8}.contact-value{font-size:9.5px;word-break:break-word}.contact-value a{color:#f1f5f9;text-decoration:none}.skill-category{margin-bottom:5px}.skill-title{font-size:9.8px;color:#cbd5e1;font-weight:600;margin-bottom:2px}.tags{display:flex;flex-wrap:wrap;gap:3px}.tags span{font-size:8.6px;color:#34d399;background:rgba(16,185,129,.15);border:1px solid rgba(16,185,129,.2);border-radius:3px;padding:1px 4px}
</style></head><body><main class="resume"><section class="main"><header><h1 class="name">Julián<br>Cañar</h1><h2 class="role">${cv.role}</h2></header><section class="section"><h3 class="section-title">Profile</h3><p class="profile">${cv.profile[0]}</p><p class="profile">${cv.profile[1]}</p></section><section class="section"><h3 class="section-title">Experience</h3>${experience}</section><section class="section"><h3 class="section-title">Featured Projects</h3>${projects}</section><section class="section"><h3 class="section-title">References</h3>${references}</section></section><aside class="sidebar"><div class="photo">${photoDataUrl ? `<img src="${photoDataUrl}" alt="Portrait of ${escapeHtml(cv.name)}">` : ''}</div><section><h3 class="sidebar-title">Contact</h3>${contact}</section><section><h3 class="sidebar-title">Skills</h3>${skills}</section><section><h3 class="sidebar-title">Languages</h3>${languages}</section></aside></main></body></html>`;
  const bundledChrome = await puppeteer.executablePath();
  const browserProfile = fs.mkdtempSync(path.join(os.tmpdir(), 'portfolio-cv-'));
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: bundledChrome,
    userDataDir: browserProfile,
    timeout: 120000,
    protocolTimeout: 120000,
    args: ['--disable-gpu']
  });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'domcontentloaded' });
  const outputPath = path.join(__dirname, 'public', 'media', 'cv', 'Julian_Canar_CV_EN.pdf');
  await page.pdf({ path: outputPath, format: 'A4', printBackground: true, waitForFonts: false, margin: { top: '0', right: '0', bottom: '0', left: '0' } });
  await browser.close();
  fs.rmSync(browserProfile, { recursive: true, force: true });
  console.log('CV successfully generated at:', outputPath);
}

generateCV().catch((error) => { console.error(error); process.exit(1); });
