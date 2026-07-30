const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generateCV() {
  console.log('Starting Spanish CV generation...');
  
  // 1. Read photo and convert to base64
  const photoPath = path.join(__dirname, 'public', 'media', 'hero', 'julian-canar.jpg');
  let photoDataUrl = '';
  if (fs.existsSync(photoPath)) {
    const photoBuffer = fs.readFileSync(photoPath);
    photoDataUrl = `data:image/jpeg;base64,${photoBuffer.toString('base64')}`;
  }

  // 2. Define the HTML structure and CSS
  const html = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Julian Cañar - CV</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: 'Inter', sans-serif;
      color: #334155;
      background: #fff;
      line-height: 1.5;
      font-size: 11px; /* Optimal for A4 print */
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    
    @page {
      size: A4;
      margin: 0;
    }

    .resume {
      display: flex;
      width: 210mm;
      min-height: 297mm;
      background: #ffffff;
    }

    /* --- Left Sidebar --- */
    .sidebar {
      width: 32%;
      background: #0f172a;
      color: #f1f5f9;
      padding: 30px 20px;
      display: flex;
      flex-direction: column;
      gap: 22px;
    }

    .photo-container {
      width: 120px;
      height: 120px;
      margin: 0 auto 5px;
      border-radius: 50%;
      overflow: hidden;
      border: 3px solid #10b981;
      box-shadow: 0 8px 16px rgba(0,0,0,0.3);
    }

    .photo-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .sidebar-section {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .sidebar-title {
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: #10b981;
      border-bottom: 1px solid rgba(16, 185, 129, 0.3);
      padding-bottom: 6px;
      margin-bottom: 4px;
    }

    .contact-item {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    
    .contact-label {
      font-weight: 600;
      font-size: 10px;
      color: #94a3b8;
    }

    .contact-val {
      font-size: 11px;
      word-break: break-all;
    }

    .contact-val a {
      color: #f1f5f9;
      text-decoration: none;
    }

    .skill-category {
      margin-bottom: 12px;
    }

    .skill-title {
      font-weight: 600;
      margin-bottom: 4px;
      color: #cbd5e1;
    }

    .skill-list {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }

    .skill-tag {
      background: rgba(16, 185, 129, 0.15);
      color: #34d399;
      padding: 3px 8px;
      border-radius: 4px;
      font-size: 9.5px;
      font-weight: 500;
      border: 1px solid rgba(16, 185, 129, 0.2);
    }

    /* --- Right Main Content --- */
    .main {
      width: 68%;
      padding: 35px 35px;
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    .header {
      margin-bottom: 10px;
    }

    .name {
      font-size: 38px;
      font-weight: 800;
      color: #0f172a;
      line-height: 1.1;
      letter-spacing: -0.5px;
      margin-bottom: 5px;
    }

    .role {
      font-size: 16px;
      font-weight: 500;
      color: #10b981;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .profile-text {
      font-size: 11.5px;
      color: #475569;
      line-height: 1.6;
    }

    .section {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .section-title {
      font-size: 16px;
      font-weight: 700;
      color: #0f172a;
      display: flex;
      align-items: center;
      gap: 10px;
      border-bottom: 2px solid #f1f5f9;
      padding-bottom: 6px;
    }

    .item {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }

    .item-title {
      font-size: 14px;
      font-weight: 700;
      color: #0f172a;
    }

    .item-subtitle {
      font-size: 12px;
      font-weight: 600;
      color: #10b981;
    }

    .item-date {
      font-size: 10.5px;
      font-weight: 500;
      color: #64748b;
      background: #f1f5f9;
      padding: 2px 8px;
      border-radius: 12px;
    }

    .item-desc {
      color: #475569;
      margin-top: 3px;
    }

    .item-link {
      font-size: 10px;
      color: #64748b;
      text-decoration: none;
      display: inline-block;
      margin-top: 2px;
    }
    
    .testimonial {
      background: #f8fafc;
      padding: 10px 12px;
      border-left: 3px solid #10b981;
      border-radius: 0 8px 8px 0;
      margin-bottom: 6px;
    }
    
    .testimonial-text {
      font-style: italic;
      color: #475569;
      margin-bottom: 4px;
      font-size: 10.5px;
    }
    
    .testimonial-author {
      font-size: 10px;
      font-weight: 600;
      color: #0f172a;
    }

  </style>
</head>
<body>
  <div class="resume">
    
    <!-- LEFT SIDEBAR -->
    <div class="sidebar">
      <div class="photo-container">
        <img src="${photoDataUrl}" alt="Julian Cañar">
      </div>
      
      <div class="sidebar-section">
        <h3 class="sidebar-title">Contacto</h3>
        
        <div class="contact-item">
          <span class="contact-label">Ubicación</span>
          <span class="contact-val">Colombia · UTC-5</span>
        </div>
        
        <div class="contact-item">
          <span class="contact-label">LinkedIn</span>
          <span class="contact-val"><a href="https://www.linkedin.com/in/daniel-perez-blank">linkedin.com/in/daniel-perez-blank</a></span>
        </div>
        
        <div class="contact-item">
          <span class="contact-label">GitHub</span>
          <span class="contact-val"><a href="https://github.com/Whatfck">github.com/Whatfck</a></span>
        </div>
        
        <div class="contact-item">
          <span class="contact-label">Portafolio</span>
          <span class="contact-val"><a href="https://portafolio-daniel-perez.vercel.app">portafolio-daniel-perez.vercel.app</a></span>
        </div>
      </div>

      <div class="sidebar-section">
        <h3 class="sidebar-title">Mi Arsenal</h3>
        
        <div class="skill-category">
          <div class="skill-title">Sistemas e Infra</div>
          <div class="skill-list">
            <span class="skill-tag">Linux</span>
            <span class="skill-tag">Docker</span>
            <span class="skill-tag">Kubernetes</span>
            <span class="skill-tag">AWS</span>
            <span class="skill-tag">Terraform</span>
            <span class="skill-tag">CI/CD</span>
            <span class="skill-tag">Prometheus</span>
          </div>
        </div>
        
        <div class="skill-category">
          <div class="skill-title">Redes</div>
          <div class="skill-list">
            <span class="skill-tag">OpenWrt</span>
            <span class="skill-tag">Nginx</span>
            <span class="skill-tag">Cloudflare</span>
            <span class="skill-tag">DNS</span>
            <span class="skill-tag">VPN</span>
            <span class="skill-tag">Nmap</span>
          </div>
        </div>

        <div class="skill-category">
          <div class="skill-title">Backend y Web</div>
          <div class="skill-list">
            <span class="skill-tag">Java</span>
            <span class="skill-tag">Python (FastAPI)</span>
            <span class="skill-tag">PHP</span>
            <span class="skill-tag">React / Next.js</span>
            <span class="skill-tag">TypeScript</span>
          </div>
        </div>
        
        <div class="skill-category">
          <div class="skill-title">Bases de Datos y Herramientas</div>
          <div class="skill-list">
            <span class="skill-tag">PostgreSQL</span>
            <span class="skill-tag">SQLite</span>
            <span class="skill-tag">Bash/Shell</span>
            <span class="skill-tag">Neovim (Lua)</span>
          </div>
        </div>
      </div>

      <div class="sidebar-section">
        <h3 class="sidebar-title">Idiomas</h3>
        <div class="contact-item">
          <span class="contact-label">Español</span>
          <span class="contact-val">Nativo</span>
        </div>
        <div class="contact-item">
          <span class="contact-label">Inglés</span>
          <span class="contact-val">Intermedio (~50%)</span>
        </div>
      </div>
    </div>

    <!-- RIGHT MAIN CONTENT -->
    <div class="main">
      <div class="header">
        <h1 class="name">Daniel<br>Pérez</h1>
        <h2 class="role">Estudiante de Ingeniería de Software</h2>
      </div>

      <div class="section">
        <h3 class="section-title">Perfil</h3>
        <p class="profile-text">
          Trabajo con software, redes y arquitectura de servidores; busco que todo funcione bien, sea eficiente y tenga sentido. Pragmático y orientado a resultados, con foco en la optimización. Busco el máximo rendimiento con el menor uso de recursos, refinando constantemente hasta alcanzar calidad real. Mi enfoque natural está en backend, infraestructura y redes.
        </p>
      </div>

      <div class="section">
        <h3 class="section-title">Trayectoria y Educación</h3>
        <div class="item">
          <div class="item-header">
            <div class="item-title">Estudiante de Ingeniería de Software</div>
            <div class="item-date">2024 - 2028</div>
          </div>
          <div class="item-subtitle">Universidad Cooperativa De Colombia</div>
          <p class="item-desc">Adquiriendo fundamentos en algoritmia, bases de datos y arquitectura, complementando la teoría con interés propio por la infraestructura y redes.</p>
        </div>
      </div>

      <div class="section">
        <h3 class="section-title">Proyectos Destacados</h3>
        
        <div class="item">
          <div class="item-title">UniShop</div>
          <a href="https://github.com/Whatfck/UniShop" class="item-link">github.com/Whatfck/UniShop</a>
          <p class="item-desc">Plataforma de comercio electrónico diseñada para la comunidad universitaria, facilitando la compra y venta de productos entre estudiantes.</p>
        </div>
        
        <div class="item">
          <div class="item-title">Reproductor Web</div>
          <a href="https://github.com/Whatfck/reproductor-web" class="item-link">github.com/Whatfck/reproductor-web</a>
          <p class="item-desc">Aplicación de reproducción de audio moderna con interfaz intuitiva, soporte para listas de reproducción y controles avanzados.</p>
        </div>
        
        <div class="item">
          <div class="item-title">Portafolio Multilenguaje</div>
          <a href="https://github.com/Whatfck/portafolio" class="item-link">github.com/Whatfck/portafolio</a>
          <p class="item-desc">Portafolio personal construido con Next.js para mostrar perfil profesional, experiencia, habilidades y proyectos con diseño brutalista y animaciones fluidas.</p>
        </div>
      </div>

      <div class="section" style="margin-top: auto;">
        <h3 class="section-title">Referencias</h3>
        
        <div class="testimonial">
          <p class="testimonial-text">"Daniel demostró ser un profesional serio, responsable y comprometido con su trabajo. Se destacó por su capacidad de análisis, su claridad al comunicar la información y su enfoque en aportar soluciones útiles."</p>
          <div class="testimonial-author">— Sandra Muncayo (Médico / Jefatura Servicios de Salud Red Medicron)</div>
        </div>
        
        <div class="testimonial">
          <p class="testimonial-text">"Daniel es una persona inteligente, dedicada y proactiva, con facilidad para aprender y afrontar retos. Destaca por su disciplina, compromiso y capacidad de aplicar sus conocimientos en la práctica."</p>
          <div class="testimonial-author">— Julian Cañarar (Ingeniero de Sistemas / Independiente)</div>
        </div>

      </div>

    </div>
  </div>
</body>
</html>
  `;

  // 3. Launch puppeteer to generate PDF
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await page.setContent(html, { waitUntil: 'networkidle0' });
  
  const outputPath = path.join(__dirname, 'public', 'media', 'cv', 'Daniel_Perez_CV_ES.pdf');
  
  console.log('Generating PDF...');
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' }
  });

  await browser.close();
  console.log('CV successfully generated at:', outputPath);
}

generateCV().catch(err => {
  console.error('Error generating CV:', err);
  process.exit(1);
});
