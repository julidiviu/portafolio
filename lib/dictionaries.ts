export type Locale = 'en' | 'es'

type LanguageItem = {
  name: string
  level: string
  label: string
}

type SkillCategory = {
  title: string
  items: string[]
}

type ExperienceItem = {
  date: string
  role: string
  company: string
  desc: string
}

type ProjectItem = {
  title: string
  desc: string
  repo: string
  view?: string
  image_url: string
  image_alt: string
}

type Dictionary = {
  navbar: {
    hero: string
    about: string
    skills: string
    experience: string
    projects: string
    testimonials: string
    contact: string
    theme_light: string
    theme_dark: string
    aria_light: string
    aria_dark: string
  }
  hero: {
    eyebrow: string
    name: string
    role: string
    copy: string
    btn_cv: string
    photo_url: string
    photo_alt: string
    linkedin_url: string
    github_url: string
    cv_url: string
    linkedin_label: string
    github_label: string
  }
  about: {
    title: string
    kicker: string
    location_title: string
    location_value: string
    location_note: string
    lead: string
    p1: string
    p2: string
    languages_title: string
    languages: LanguageItem[]
    highlight_title: string
    highlight_text: string
    pill1_title: string
    pill1_text: string
    pill2_title: string
    pill2_text: string
    pill3_title: string
    pill3_text: string
  }
  skills: {
    title: string
    kicker: string
    focus: string
    intro: string
    categories: SkillCategory[]
  }
  experience: {
    title: string
    kicker: string
    intro: string
    items: ExperienceItem[]
  }
  projects: {
    title: string
    kicker: string
    intro: string
    items: ProjectItem[]
    repo_label: string
    view_label: string
  }
  testimonials: {
    title: string
    kicker: string
    intro: string
    t1_text: string
    t1_author: string
    t1_role: string
    t2_text: string
    t2_author: string
    t2_role: string
    t3_text: string
    t3_author: string
    t3_role: string
  }
  contact: {
    title: string
    kicker: string
    intro: string
    primary_note: string
    form_title: string
    form_name_label: string
    form_email_label: string
    form_subject_label: string
    form_message_label: string
    form_submit_label: string
    form_sending_label: string
    form_success: string
    form_reset: string
    form_error: string
    form_error_required: string
    c2_title: string
    c2_desc: string
    c2_href: string
    c2_text: string
    c3_title: string
    c3_desc: string
    c3_href: string
    c3_text: string
    note1: string
    note2: string
  }
  footer: {
    rights: string
    more_about_label: string
    more_about_href: string
  }
}

export const dictionaries: Record<Locale, Dictionary> = {
  es: {
    navbar: {
      hero: 'Inicio',
      about: 'Sobre mi',
      skills: 'Habilidades',
      experience: 'Experiencia',
      projects: 'Proyectos',
      testimonials: 'Testimonios',
      contact: 'Contacto',
      theme_light: 'Claro',
      theme_dark: 'Oscuro',
      aria_light: 'Cambiar a modo claro',
      aria_dark: 'Cambiar a modo oscuro',
    },
    hero: {
      eyebrow: '',
      name: 'Julian Cañar',
      role: 'Full Stack Developer',
      copy: 'Disfruto desarrollando aplicaciones web que combinen un backend sólido con interfaces funcionales y una buena experiencia de usuario, participando tanto en el backend como en el frontend, disfruto convertir problemas reales en soluciones prácticas mientras continúo aprendiendo y perfeccionando mis habilidades.',
      btn_cv: 'Ver CV',
      photo_url: '/media/hero/julian-canar.jpg',
      photo_alt: 'Retrato de Julian Cañar',
      linkedin_url: 'https://www.linkedin.com/in/daniel-perez-blank',
      github_url: 'https://github.com/Whatfck',
      cv_url: '/media/cv/Daniel_Perez_CV_EN.pdf',
      linkedin_label: 'LinkedIn',
      github_label: 'GitHub',
    },
    about: {
      title: 'Sobre mí',
      kicker: '¿Quién soy?',
      location_title: 'Ubicación',
      location_value: 'Pasto · Colombia',
      location_note: 'Disponible para trabajo remoto, híbrido o presencial.',
      lead: '¡HOLA! Soy Julian Cañar, Ingeniero de Sistemas.',
      p1: "Soy egresado de la Universidad de Nariño y disfruto desarrollar soluciones tecnológicas que resuelvan problemas reales. Durante mi formación participé en proyectos académicos y profesionales que me permitieron fortalecer mis conocimientos en desarrollo de software, bases de datos y aplicaciones web.",
      p2: "Mi principal interés está en el desarrollo backend, aunque también cuento con experiencia en frontend y bases de datos. He trabajado con tecnologías como Java, Python, Django, Angular, PostgreSQL, Docker y Git, disfrutando especialmente diseñar aplicaciones organizadas, escalables y fáciles de mantener. Siempre estoy dispuesto a aprender nuevas herramientas y enfrentar nuevos retos.",
      languages_title: 'Idiomas',
      languages: [
        { name: 'Español', level: '100%', label: 'Nativo' },
        { name: 'Inglés', level: '70%', label: 'B2' }
      ],
      highlight_title: 'Objetivo profesional',
      highlight_text: "Busco una oportunidad donde pueda seguir creciendo como desarrollador de software, participar en proyectos y aprender de equipos con experiencia, aportando compromiso, responsabilidad y una actitud constante de aprendizaje.",
      pill1_title: 'Forma de trabajar',
      pill1_text: 'Me gusta desarrollar software de forma organizada, escribiendo código limpio y priorizando soluciones mantenibles. Disfruto analizar los problemas antes de programar y buscar la alternativa más eficiente para resolverlos.',
      pill2_title: '',
      pill2_text: '',
      pill3_title: 'Más allá del código',
      pill3_text: 'En mi tiempo libre disfruto de los videojuegos, tocar guitarra y la música en general, las películas, creación de multimedia y pasar tiempo con familiares y amigos, También me gusta explorar herramientas que me permitan mejorar mi productividad y seguir aprendiendo constantemente.',
    },
    skills: {
      title: 'Habilidades',
      kicker: 'TECNOLOGÍAS',
      focus: 'Estas son las principales tecnologías y herramientas con las que desarrollo aplicaciones web modernas, escalables y mantenibles.',
      intro: 'En constante aprendizaje y mejorando mis habilidades.',
      categories: [
        {
          title: 'Backend',
          items: ['Linux (Fedora/Ubuntu Server)', 'Docker', 'Kubernetes', 'AWS', 'Terraform', 'CI/CD (GitHub Actions)', 'Prometheus']
        },
        {
          title: 'Redes',
          items: ['OpenWrt', 'Reverse Proxy (Nginx)', 'Cloudflare', 'DNS (Pi-hole)', 'VPN', 'Nmap']
        },
        {
          title: 'Lenguajes Backend',
          items: ['Java', 'Python (FastAPI)', 'PHP', 'Node.js / Express']
        },
        {
          title: 'Desarrollo Web',
          items: ['React / Next.js', 'Tailwind CSS', 'JavaScript / TypeScript', 'Django', 'APIs REST']
        },
        {
          title: 'Bases de Datos',
          items: ['PostgreSQL', 'SQLite']
        },
        {
          title: 'Herramientas y Scripting',
          items: ['Git / GitHub', 'Bash/Shell', 'Lua', 'Postman']
        }
      ]
    },
    experience: {
      title: 'Experiencia',
      kicker: 'Trayectoria',
      intro: 'La etapa actual de mi formación académica.',
      items: [
        {
          date: '2024 - 2028',
          role: 'Estudiante de Ingeniería de Software',
          company: 'Universidad Cooperativa De Colombia',
          desc: 'Adquiriendo fundamentos en algoritmia, bases de datos y arquitectura, complementando la teoría con interés propio por la infraestructura y redes.'
        }
      ]
    },
    projects: {
      title: 'Proyectos',
      kicker: 'Mi codigo',
      intro: 'Una selección de trabajos en los que he aplicado mis conocimientos.',
      items: [
        {
          title: 'UniShop',
          desc: 'Plataforma de comercio electrónico diseñada para la comunidad universitaria, facilitando la compra y venta de productos entre estudiantes.',
          repo: 'https://github.com/Whatfck/UniShop',
          view: 'https://uni-shop-frontend.vercel.app/',
          image_url: '/media/projects/UniShop.png',
          image_alt: 'Vista previa del proyecto UniShop'
        },
        {
          title: 'Reproductor Web',
          desc: 'Aplicación de reproducción de audio moderna con interfaz intuitiva, soporte para listas de reproducción y controles avanzados.',
          repo: 'https://github.com/Whatfck/reproductor-web',
          view: 'https://reproductor-web-omega.vercel.app/',
          image_url: '/media/projects/reproductor-web.png',
          image_alt: 'Vista previa del proyecto Reproductor Web'
        },
        {
          title: 'Portafolio',
          desc: 'Portafolio personal multilenguaje construido con Next.js, diseñado para mostrar perfil profesional, experiencia, habilidades y proyectos.',
          repo: 'https://github.com/Whatfck/portafolio',
          view: 'https://portafolio-daniel-perez.vercel.app/',
          image_url: '/media/projects/portafolio.png',
          image_alt: 'Vista previa del proyecto Portafolio'
        }
      ],
      repo_label: 'Repo',
      view_label: 'Ver',
    },
    testimonials: {
      title: 'Testimonios',
      kicker: 'Referencias',
      intro: 'Lo que dicen las personas con las que he trabajado o estudiado a lo largo de mis proyectos.',
      t1_text: '"Es una persona muy dedicada y comprometida con su trabajo. Siempre está dispuesto a ayudar, propone buenas ideas y se enfoca en hacer las cosas bien. Sin duda, alguien con quien es fácil y agradable trabajar.”',
      t1_author: 'Lorena Paz',
      t1_role: 'Arquitecta/ Independiente',
      t2_text: '"Daniel es una persona inteligente, dedicada y proactiva, con facilidad para aprender y afrontar retos. Destaca por su disciplina, compromiso y capacidad de aplicar sus conocimientos en la práctica.',
      t2_author: 'Julian Cañarar',
      t2_role: 'Ingeniero de Sistemas / Independiente',
      t3_text: '"Daniel demostró ser un profesional serio, responsable y comprometido con su trabajo. Se destacó por su capacidad de análisis, su claridad al comunicar la información y su enfoque en aportar soluciones útiles. Es una persona confiable y organizada, con quien es fácil trabajar."',
      t3_author: 'Sandra Muncayo',
      t3_role: 'Médico / Jefatura Servicios de Salud Red Medicron',
    },
    contact: {
      title: 'Contacto',
      kicker: 'Hablemos',
      intro: 'Si tienes una idea, propuesta o proyecto en mente, puedes escribirme.',
      primary_note: 'El formulario es el canal principal de contacto.',
      form_title: 'Enviar mensaje',
      form_name_label: 'Nombre *',
      form_email_label: 'Correo *',
      form_subject_label: 'Asunto',
      form_message_label: 'Mensaje *',
      form_submit_label: 'Enviar mensaje',
      form_sending_label: 'Enviando...',
      form_success: 'Mensaje enviado. Te respondere pronto.',
      form_reset: 'Volver',
      form_error: 'No se pudo enviar el mensaje. Intenta nuevamente en unos minutos.',
      form_error_required: 'Completa nombre, correo y mensaje para continuar.',
      c2_title: 'LinkedIn',
      c2_desc: 'Contacto profesional y networking.',
      c2_href: 'https://www.linkedin.com/in/daniel-perez-blank',
      c2_text: 'linkedin.com/in/daniel-perez-blank',
      c3_title: 'GitHub',
      c3_desc: 'Repositorio de proyectos y experimentos.',
      c3_href: 'https://github.com/Whatfck',
      c3_text: 'github.com/Whatfck',
      note1: 'Disponible para colaboraciones freelance y remotas.',
      note2: 'Tiempo de respuesta estimado: 24 a 48 horas.',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      more_about_label: 'Mas Sobre mi',
      more_about_href: 'https://linktr.ee/danielperzz'
    }
  },
  en: {
    navbar: {
      hero: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      testimonials: 'Testimonials',
      contact: 'Contact',
      theme_light: 'Light',
      theme_dark: 'Dark',
      aria_light: 'Switch to light mode',
      aria_dark: 'Switch to dark mode',
    },
    hero: {
      eyebrow: '',
      name: 'Julian Cañar',
      role: 'Software Engineering Student',
      copy: 'I work with software, networking, and servers, driven by a desire to understand how things work and to push systems to the point where they truly make sense.',
      btn_cv: 'View CV',
      photo_url: '/media/hero/julian-canar.jpg',
      photo_alt: 'Portrait of Julian Cañar',
      linkedin_url: 'https://www.linkedin.com/in/daniel-perez-blank',
      github_url: 'https://github.com/Whatfck',
      cv_url: '/media/cv/Daniel_Perez_CV_EN.pdf',
      linkedin_label: 'LinkedIn',
      github_label: 'GitHub',
    },
    about: {
      title: 'About Me',
      kicker: 'My Story',
      location_title: 'Location',
      location_value: 'Colombia · UTC-5',
      location_note: 'Local reference time for coordination and remote work.',
      lead: 'HELLO!!! I\'m Julian Cañar.',
      p1: 'My childhood curiosity about how things work led me into the world of computing, going from building servers as a hobby to formalizing my passion by studying Software Engineering.',
      p2: 'I\'m passionate about the "behind the scenes" of technology: the infrastructure, the logic, and the architecture. I enjoy breaking down complex problems to build efficient, scalable, and stable solutions, making sure that everything, from the ground up, simply works.',
      languages_title: 'Languages',
      languages: [
        { name: 'Spanish', level: '100%', label: 'Native' },
        { name: 'English', level: '50%', label: 'Intermediate' }
      ],
      highlight_title: 'Current Goal',
      highlight_text: 'I explore various areas of development due to my academic background, but my natural focus is on backend, infrastructure, and networks. I am interested in building efficient, well-structured, and reliable systems over visual elements.',
      pill1_title: 'Style',
      pill1_text: 'Pragmatic and results-oriented, with a focus on optimization. I seek maximum performance with the least amount of resources, constantly refining until real quality is achieved.',
      pill2_title: '',
      pill2_text: '',
      pill3_title: 'Off-screen',
      pill3_text: 'I enjoy video games, music (guitar), cooking, and hanging out with friends. I also like disassembling, repairing, and optimizing objects as part of my learning process.',
    },
    skills: {
      title: 'Skills',
      kicker: 'Tools',
      focus: 'Profile: Technical inclination towards backend and infrastructure, complemented by essential frontend development skills.',
      intro: 'Technologies and tools I use on a daily basis.',
      categories: [
        {
          title: 'Systems & Infrastructure',
          items: ['Linux (Fedora/Ubuntu Server)', 'Docker', 'Kubernetes', 'AWS', 'Terraform', 'CI/CD (GitHub Actions)', 'Prometheus']
        },
        {
          title: 'Networking',
          items: ['OpenWrt', 'Reverse Proxy (Nginx)', 'Cloudflare', 'DNS (Pi-hole)', 'VPN', 'Nmap']
        },
        {
          title: 'Backend Languages',
          items: ['Java', 'Python (FastAPI)', 'PHP', 'Node.js / Express']
        },
        {
          title: 'Web Development',
          items: ['React / Next.js', 'Tailwind CSS', 'JavaScript / TypeScript', 'Django', 'REST APIs']
        },
        {
          title: 'Databases',
          items: ['PostgreSQL', 'SQLite']
        },
        {
          title: 'Tools & Scripting',
          items: ['Git / GitHub', 'Bash/Shell', 'Lua', 'Postman']
        }
      ]
    },
    experience: {
      title: 'Experience',
      kicker: 'Path',
      intro: 'The current stage of my academic training.',
      items: [
        {
          date: '2024 - 2028',
          role: 'Software Engineering Student',
          company: 'Universidad Cooperativa De Colombia',
          desc: 'Acquiring solid fundamentals in algorithms, databases, and architecture, supplementing theory with a self-driven interest in infrastructure and networks.'
        }
      ]
    },
    projects: {
      title: 'Projects',
      kicker: 'My code',
      intro: 'A selection of works where I have applied my knowledge.',
      items: [
        {
          title: 'UniShop',
          desc: 'E-commerce platform designed for the university community, facilitating the purchase and sale of products among students.',
          repo: 'https://github.com/Whatfck/UniShop',
          view: 'https://uni-shop-frontend.vercel.app/',
          image_url: '/media/projects/UniShop.png',
          image_alt: 'Project preview for UniShop'
        },
        {
          title: 'Web Player',
          desc: 'Modern audio playback application with an intuitive interface, playlist support, and advanced controls.',
          repo: 'https://github.com/Whatfck/reproductor-web',
          view: 'https://reproductor-web-omega.vercel.app/',
          image_url: '/media/projects/reproductor-web.png',
          image_alt: 'Project preview for Web Player'
        },
        {
          title: 'Portfolio',
          desc: 'Multilingual personal portfolio built with Next.js to showcase professional profile, experience, skills, and projects.',
          repo: 'https://github.com/Whatfck/portafolio',
          view: 'https://portafolio-daniel-perez.vercel.app/',
          image_url: '/media/projects/portafolio.png',
          image_alt: 'Project preview for Portfolio'
        }
      ],
      repo_label: 'Repo',
      view_label: 'View',
    },
    testimonials: {
      title: 'Testimonials',
      kicker: 'References',
      intro: 'What people I have worked or studied with say throughout my projects.',
      t1_text: '"He is a very dedicated person and committed to his work. He is always willing to help, proposes good ideas, and focuses on doing things right. Undoubtedly, someone who is easy and pleasant to work with."',
      t1_author: 'Lorena Paz',
      t1_role: 'Architect / Freelance',
      t2_text: '"Daniel is an intelligent, dedicated, and proactive person, with a natural ability to learn and face challenges. He stands out for his discipline, commitment, and ability to apply his knowledge in practice."',
      t2_author: 'Julian Cañarar',
      t2_role: 'Systems Engineer / Freelance',
      t3_text: '"Daniel proved to be a serious, responsible professional committed to his work. He stood out for his analytical skills, his clarity in communicating information, and his focus on providing useful solutions. He is a reliable and organized person who is easy to work with."',
      t3_author: 'Sandra Muncayo',
      t3_role: 'Doctor / Head of Health Services, Red Medicron',
    },
    contact: {
      title: 'Contact',
      kicker: 'Let\'s talk',
      intro: 'If you have an idea, proposal, or project in mind, you can write to me.',
      primary_note: 'The form is the main channel of contact.',
      form_title: 'Send message',
      form_name_label: 'Name *',
      form_email_label: 'Email *',
      form_subject_label: 'Subject',
      form_message_label: 'Message *',
      form_submit_label: 'Send message',
      form_sending_label: 'Sending...',
      form_success: 'Message sent. I will reply soon.',
      form_reset: 'Go back',
      form_error: 'Message could not be sent. Please try again in a few minutes.',
      form_error_required: 'Please complete name, email, and message to continue.',
      c2_title: 'LinkedIn',
      c2_desc: 'Professional contact and networking.',
      c2_href: 'https://www.linkedin.com/in/daniel-perez-blank',
      c2_text: 'linkedin.com/in/daniel-perez-blank',
      c3_title: 'GitHub',
      c3_desc: 'Repository for projects and experiments.',
      c3_href: 'https://github.com/Whatfck',
      c3_text: 'github.com/Whatfck',
      note1: 'Available for freelance and remote collaborations.',
      note2: 'Estimated response time: 24 to 48 hours.',
    },
    footer: {
      rights: 'All rights reserved.',
      more_about_label: 'More about me',
      more_about_href: 'https://linktr.ee/danielperzz'
    }
  }
};

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale] || dictionaries.en;
