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
      linkedin_url: 'https://www.linkedin.com/in/julian-canar-stanxed/',
      github_url: 'https://github.com/julidiviu',
      cv_url: '/media/cv/Julian_Canar_CV_ES.pdf',
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
          items: ['Python', 'Django', 'Java', 'Node.js']
        },
        {
          title: 'Frontend',
          items: ['React', 'Next.js', 'Angular', 'TypeScript']
        },
        {
          title: 'Bases de datos',
          items: ['PostgreSQL', 'MySQL', 'SQLite']
        },
        {
          title: 'Herramientas',
          items: ['Git', 'Docker', 'Postman']
        },
        {
          title: 'Sistemas',
          items: ['Ubuntu', 'Fedora', 'Windows']
        },
        {
          title: 'Metodologías y Arquitectura',
          items: ['Scrum']
        }
      ]
    },
    experience: {
      title: 'Experiencia',
      kicker: 'Trayectoria',
      intro: 'Experiencias que han fortalecido mis habilidades en desarrollo web, trabajo en equipo y resolución de problemas.',
      items: [
        {
          date: 'Nov. 2025 – Abr. 2026',
          role: 'Desarrollador Full Stack',
          company: 'IPSUS S.A.S.',
          desc: 'Participé en el desarrollo de una plataforma web para la gestión administrativa de IPSUS utilizando Django, Angular y PostgreSQL. Implementé funcionalidades backend y frontend, autenticación con JWT, estadisticas y mejoras en la experiencia de usuario.'
        },
        {
          date:'2025 – 2026',
          role: 'Monitor Académico',
          company: 'Universidad de Nariño',
          desc: 'Participé como monitor académico en el desarrollo de un sistema web para la gestión de préstamos e inventario de equipos tecnológicos en la Universidad de Nariño utilizando Django REST Framework, Angular y PostgreSQL bajo metodología Scrum.'
        }
      ]
    },
    projects: {
      title: 'Proyectos',
      kicker: 'PORTAFOLIO',
      intro: 'Estos son algunos de los proyectos que mejor representan mi experiencia desarrollando',
      items: [
        {
          title: 'Sistema de Préstamos e Inventario',
          desc: 'Aplicación web desarrollada para la Universidad de Nariño que permite gestionar el préstamo de equipos, controlar el inventario, administrar usuarios y generar constancias de forma automática.',
          repo: 'https://github.com/andreaeraso/inventario_septiembre',
          view: '', //ACTUALIZAR
          image_url: '/media/projects/Prestamos-Udenar.png',
          image_alt: 'Vista previa del proyecto Sistema de Préstamos e Inventario'
        },
        {
          title: 'Plataforma IPSUS',
          desc: 'Desarrollo de una plataforma web para IPSUS enfocada en la gestión de información y procesos internos, implementando autenticación, administración de datos y funcionalidades adaptadas a las necesidades del cliente.',
          repo: 'https://gitlab.com/digitalroot-group/ipsus-frontend',
          view: '', // ACTUALIZAR
          image_url: '/media/projects/Ipsus.png',
          image_alt: 'Vista previa del proyecto ipsus'
        },
        {
          title: 'Portafolio',
          desc: 'Portafolio personal multilenguaje construido con Next.js, diseñado para mostrar perfil profesional, experiencia, habilidades y proyectos.',
          repo: 'https://github.com/julidiviu/portafolio',
          view: '', // ACTUALIZAR
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
      intro: 'Lo que dicen las personas con las que he trabajado.',
      t1_text: '"Durante el tiempo que tuve la oportunidad de conocerlo, demostró ser una persona íntegra, honesta, responsable y comprometida con sus labores. Se caracteriza por su actitud proactiva, su disposición para aprender, su capacidad de trabajo en equipo y su facilidad para adaptarse a nuevos retos. Asimismo, es una persona puntual, respetuosa y confiable, que desempeña sus responsabilidades con dedicación y profesionalismo, generando confianza y aportando positivamente a cualquier equipo de trabajo.”',
      t1_author: 'Gloria Rodriguez Vallejo',
      t1_role: 'Secretaria Departamento de Sistemas / Universidad de Nariño',
      t2_text: '"Durante el tiempo en que se desempeñó como monitor, demostró ser una persona responsable, comprometida y con una excelente disposición para el trabajo. En el desarrollo de sus funciones siempre cumplió con las actividades asignadas, demostrando iniciativa, interés por aprender y capacidad para resolver las situaciones que se presentaban. Asimismo, mantuvo una actitud respetuosa, colaborativa y profesional en su relación con docentes, estudiantes y demás integrantes de la facultad. Considero que Julián posee las competencias, la responsabilidad y la actitud necesarias para desempeñarse de manera satisfactoria en diferentes entornos laborales."',
      t2_author: 'Manuel Bolaños',
      t2_role: 'Director Departamento de Sistemas / Universidad de Nariño',
      t3_text: '"Conozco a Julián desde hace algún tiempo y puedo decir que es una persona responsable, honesta y comprometida con lo que hace. Siempre se ha caracterizado por su buena disposición para aprender, trabajar en equipo y asumir nuevos retos. Es alguien confiable, respetuoso y dedicado, por lo que no dudo en recomendarlo tanto en el ámbito personal como profesional."',
      t3_author: 'Danilo Santacruz',
      t3_role: 'Ingeniero Ambiental / Independiente',
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
      c2_desc: 'Contacto profesional.',
      c2_href: 'https://www.linkedin.com/in/julian-canar-stanxed/',
      c2_text: 'linkedin.com/in/julian-canar-stanxed',
      c3_title: 'GitHub',
      c3_desc: 'Repositorio de proyectos.',
      c3_href: 'https://github.com/julidiviu',
      c3_text: 'github.com/julidiviu',
      note1: 'Disponible para colaboraciones freelance y remotas.',
      note2: 'Tiempo de respuesta estimado: 24 a 48 horas.',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      more_about_label: 'Mas Sobre mi',
      more_about_href: 'https://linktr.ee/julidiviu'
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
      role: 'Full Stack Developer',
      copy: 'I enjoy developing web applications that combine a solid backend with functional interfaces and a great user experience. I like working on both backend and frontend, turning real-world problems into practical solutions while continuously learning and improving my skills.',
      btn_cv: 'View CV',
      photo_url: '/media/hero/julian-canar.jpg',
      photo_alt: 'Portrait of Julian Cañar',
      linkedin_url: 'https://www.linkedin.com/in/julian-canar-stanxed/',
      github_url: 'https://github.com/julidiviu',
      cv_url: '/media/cv/Julian_Canar_CV_ES.pdf',
      linkedin_label: 'LinkedIn',
      github_label: 'GitHub',
    },
    about: {
      title: 'About Me',
      kicker: 'Who am I?',
      location_title: 'Location',
      location_value: 'Pasto · Colombia',
      location_note: 'Available for remote, hybrid, or on-site work.',
    
      lead: "HELLO! I'm Julian Cañar, a Systems Engineer.",
    
      p1: "I graduated from the University of Nariño and enjoy developing technological solutions that solve real-world problems. During my academic journey, I participated in both academic and professional projects that strengthened my knowledge of software development, databases, and web applications.",
    
      p2: "My main interest is backend development, although I also have experience in frontend development and databases. I have worked with technologies such as Java, Python, Django, Angular, PostgreSQL, Docker, and Git, and I particularly enjoy designing organized, scalable, and maintainable applications. I am always willing to learn new tools and take on new challenges.",
    
      languages_title: 'Languages',
    
      languages: [
        { name: 'Spanish', level: '100%', label: 'Native' },
        { name: 'English', level: '70%', label: 'B2' }
      ],
    
      highlight_title: 'Professional Goal',
    
      highlight_text: 'I am looking for an opportunity where I can continue growing as a software developer, participate in projects, and learn from experienced teams while bringing commitment, responsibility, and a constant willingness to learn.',
    
      pill1_title: 'My Working Style',
    
      pill1_text: 'I like developing software in an organized way, writing clean code, and prioritizing maintainable solutions. I enjoy analyzing problems before programming and finding the most efficient alternative to solve them.',
    
      pill2_title: '',
      pill2_text: '',
    
      pill3_title: 'Beyond Coding',
    
      pill3_text: 'In my free time, I enjoy video games, playing guitar, music in general, movies, multimedia creation, and spending time with family and friends. I also like exploring tools that help me improve my productivity and keep learning.',
    },
    
    skills: {
      title: 'Skills',
      kicker: 'TECHNOLOGIES',
    
      focus: 'These are the main technologies and tools I use to develop modern, scalable, and maintainable web applications.',
    
      intro: 'Continuously learning and improving my skills.',
    
      categories: [
        {
          title: 'Backend',
          items: ['Python', 'Django', 'Java', 'Node.js']
        },
        {
          title: 'Frontend',
          items: ['React', 'Next.js', 'Angular', 'TypeScript']
        },
        {
          title: 'Databases',
          items: ['PostgreSQL', 'MySQL', 'SQLite']
        },
        {
          title: 'Tools',
          items: ['Git', 'Docker', 'Postman']
        },
        {
          title: 'Operating Systems',
          items: ['Ubuntu', 'Fedora', 'Windows']
        },
        {
          title: 'Methodologies & Architecture',
          items: ['Scrum']
        }
      ]
    },
    
    experience: {
      title: 'Experience',
      kicker: 'Career',
      intro: 'Experiences that have strengthened my skills in web development, teamwork, and problem-solving.',
    
      items: [
        {
          date: 'Nov. 2025 – Apr. 2026',
          role: 'Full Stack Developer',
          company: 'IPSUS S.A.S.',
          desc: 'Participated in the development of a web platform for the administrative management of IPSUS using Django, Angular, and PostgreSQL. Implemented backend and frontend features, JWT authentication, statistics, and user experience improvements.'
        },
    
        {
          date: '2025 – 2026',
          role: 'Teaching Assistant',
          company: 'University of Nariño',
    
          desc: 'Participated as an academic monitor in the development of a web system for managing loans and inventory of technological equipment at the University of Nariño using Django REST Framework, Angular, and PostgreSQL under the Scrum methodology.'
        }
      ]
    },
    
    projects: {
      title: 'Projects',
      kicker: 'PORTFOLIO',
    
      intro: 'These are some of the projects that best represent my experience developing software solutions and modern web applications.',
    
      items: [
        {
          title: 'Loan & Inventory Management System',
    
          desc: 'A web application developed for the University of Nariño to manage equipment loans, inventory, users, and automatically generate loan certificates.',
    
          repo: 'https://github.com/andreaeraso/inventario_septiembre',
    
          view: '',
    
          image_url: '/media/projects/Prestamos-Udenar.png',
    
          image_alt: 'Loan & Inventory Management System'
        },
    
        {
          title: 'IPSUS Platform',
    
          desc: 'Development of a web platform for IPSUS focused on managing internal information and business processes, including authentication, data management, and customized functionalities based on the client’s needs.',
    
          repo: 'https://gitlab.com/digitalroot-group/ipsus-frontend',
    
          view: '',
    
          image_url: '/media/projects/Ipsus.png',
    
          image_alt: 'IPSUS Platform'
        },
    
        {
          title: 'Personal Portfolio',
    
          desc: 'A multilingual personal portfolio built with Next.js to showcase my professional profile, experience, technical skills, and projects through a modern, responsive interface.',
    
          repo: 'https://github.com/julidiviu/portafolio',
    
          view: '',
    
          image_url: '/media/projects/portafolio.png',
    
          image_alt: 'Personal Portfolio'
        }
      ],
    
      repo_label: 'Repo',
      view_label: 'View',
    },
    testimonials: {
      title: 'Testimonials',
      kicker: 'References',
      intro: 'What the people I have worked with say.',
      t1_text: '"During the time I had the opportunity to know him, he proved to be an honest, responsible, and committed person. He is characterized by his proactive attitude, willingness to learn, ability to work in a team, and ease of adapting to new challenges. He is also punctual, respectful, and trustworthy, carrying out his responsibilities with dedication and professionalism, building trust and contributing positively to any team."',
      t1_author: 'Gloria Rodriguez Vallejo',
      t1_role: 'Secretary, Department of Systems / University of Nariño',
      t2_text: '"During the time he worked as a monitor, he proved to be a responsible and committed person with an excellent willingness to work. In carrying out his duties, he always completed assigned activities, demonstrating initiative, an interest in learning, and the ability to solve situations as they arose. He also maintained a respectful, collaborative, and professional attitude in his relationships with professors, students, and other members of the faculty. I believe Julián has the skills, responsibility, and attitude needed to perform satisfactorily in different work environments."',
      t2_author: 'Manuel Bolaños',
      t2_role: 'Director, Department of Systems / University of Nariño',
      t3_text: '"I have known Julián for some time and can say that he is a responsible, honest, and committed person. He has always been characterized by his willingness to learn, work in a team, and take on new challenges. He is trustworthy, respectful, and dedicated, so I do not hesitate to recommend him both personally and professionally."',
      t3_author: 'Danilo Santacruz',
      t3_role: 'Environmental Engineer / Independent',
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
      c2_desc: 'Professional contact.',
      c2_href: 'https://www.linkedin.com/in/julian-canar-stanxed/',
      c2_text: 'linkedin.com/in/julian-canar-stanxed',
      c3_title: 'GitHub',
      c3_desc: 'Project repository.',
      c3_href: 'https://github.com/julidiviu',
      c3_text: 'github.com/julidiviu',
      note1: 'Available for freelance and remote collaborations.',
      note2: 'Estimated response time: 24 to 48 hours.',
    },
    footer: {
      rights: 'All rights reserved.',
      more_about_label: 'More about me',
      more_about_href: 'https://linktr.ee/julidiviu'
    }
  }
};

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale] || dictionaries.en;
