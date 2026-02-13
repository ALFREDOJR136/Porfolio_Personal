// Traducciones del portfolio
const translations = {
    es: {
        // Navegación
        nav_inicio: "Inicio",
        nav_estudios: "Estudios",
        nav_experiencia: "Experiencia",
        nav_proyectos: "Proyectos",
        nav_contacto: "Contacto",
        
        // Página de Inicio - Hero
        hero_subtitle: "Estudiante de Ingeniería de Sistemas de Información | Ingeniería Informática",
        hero_btn_contact: "Contáctame",
        hero_btn_cv: "Currículum",
        
        // Página de Inicio - Sobre Mí
        section_sobre_mi: "Sobre Mí",
        sobre_mi_p1: "Soy un estudiante de 22 años, actualmente cursando el cuarto año del grado de Ingeniería en Sistemas de Información. Me considero una persona con una actitud positiva y curiosa, con ganas de seguir aprendiendo y mejorar tanto mis habilidades técnicas como mi capacidad para gestionar proyectos.",
        sobre_mi_p2: "Tengo conocimientos en programación, bases de datos y redes, adquiridos a través de proyectos académicos y trabajos colaborativos en grupo. Busco oportunidades para aplicar mis conocimientos en el mundo real, contribuir a soluciones innovadoras y continuar desarrollándome profesionalmente.",
        
        // Página de Inicio - Habilidades
        section_habilidades: "Habilidades Técnicas",
        habilidades_programacion: "Programación",
        habilidades_frameworks: "Frameworks & Entornos",
        habilidades_databases: "Bases de Datos",
        habilidades_herramientas: "Herramientas",
        habilidades_otros: "Otros Conocimientos",
        otros_gestion_financiera: "Gestión y Análisis Financiero",
        habilidades_soft: "Soft Skills",
        soft_trabajo_equipo: "Trabajo en equipo",
        soft_resolutivo: "Resolutivo",
        soft_adaptacion: "Capacidad de adaptación",
        soft_aprendizaje: "Rapidez de aprendizaje",
        soft_creatividad: "Creatividad",
        
        // Página de Inicio - Idiomas
        section_idiomas: "Idiomas",
        idioma_espanol: "Español",
        idioma_ingles: "Inglés",
        idioma_portugues: "Portugués",
        nivel_nativo: "Nativo",
        nivel_intermedio: "Business / Intermedio",
        nivel_avanzado: "Avanzado",
        
        // Página de Contacto
        contacto_title: "Contacto",
        contacto_hablamos: "¿Hablamos?",
        contacto_mensaje: "¡Puedes contactarme a través de cualquiera de estos medios!",
        contacto_email: "Email",
        contacto_telefono: "Teléfono",
        contacto_ubicacion: "Ubicación",
        contacto_ubicacion_value: "Alcorcón, Madrid (España)",
        form_nombre: "Tu Nombre",
        form_asunto: "Asunto",
        form_mensaje: "Mensaje",
        form_btn_enviar: "Enviar Mensaje",
        
        // Página de Estudios
        estudios_title: "Formación Académica",
        estudios_carrera: "Ingeniería de Sistemas de Información",
        estudios_institucion: "Universidad CEU San Pablo",
        estudios_periodo_actual: "2021 - Actualidad",
        estudios_desc_carrera: "Actualmente curso el grado en Ingeniería Informática, donde estoy adquiriendo una formación sólida en desarrollo de software, arquitectura de sistemas y gestión de proyectos tecnológicos. Esta etapa me está permitiendo fortalecer mis habilidades técnicas y analíticas, además de comprender en profundidad cómo la tecnología puede aportar soluciones innovadoras a distintos ámbitos.",
        
        estudios_tarjetas_title: "Desarrollo de aplicaciones en tarjetas inteligentes",
        estudios_tarjetas_empresa: "Diusframi",
        estudios_tarjetas_periodo: "Octubre 2025 - Noviembre 2025",
        estudios_tarjetas_desc: "Curso en el que profundicé en el funcionamiento y las aplicaciones de las tarjetas virtuales e inteligentes, analizando distintos tipos como tarjetas de transporte, bancarias o documentos electrónicos de identidad, así como formatos alternativos como pulseras o llaveros para pagos y accesos. Comprendí las tecnologías que integran, sus diferencias y la evolución de sus mecanismos de seguridad. Además, participé en simulaciones prácticas sobre configuración de medidas de protección y programación básica de tarjetas.",
        
        estudios_emprender_title: "Mejora tu empleabilidad desarrollando tu capacidad para (intra)emprender",
        estudios_emprender_empresa: "BeForGet",
        estudios_emprender_periodo: "Mayo 2025",
        estudios_emprender_desc: "Taller enfocado en el desarrollo de habilidades para reconocer y comunicar mi valor profesional. A través de distintas metodologías aprendí a generar y validar ideas de negocio, a definir propuestas de valor efectivas y a fortalecer mi empleabilidad. Además, tuve la oportunidad de conectar con otros estudiantes interesados en la innovación y el emprendimiento.",
        
        estudios_iot_title: "Introduction to IoT",
        estudios_iot_empresa: "Cisco Networking Academy",
        estudios_iot_periodo: "Enero 2022",
        estudios_iot_desc: "Curso en el que aprendí los fundamentos del Internet of Things (IoT) y cómo esta tecnología impulsa la transformación digital. También comprendí el papel que tienen la analítica de datos, la inteligencia artificial y el aprendizaje automático en este proceso y además, profundicé en la importancia de la ciberseguridad y las redes inteligentes para conectar y proteger dispositivos.",
        
        estudios_bachillerato_title: "Bachillerato Tecnológico",
        estudios_bachillerato_institucion: "Colegio CEU San Pablo",
        estudios_bachillerato_periodo: "2019 - 2021",
        estudios_bachillerato_desc: "Cursé el Bachillerato Tecnológico con un enfoque en ciencias y tecnología, lo que me permitió adquirir una base sólida en materias técnicas y científicas. Durante esta etapa desarrollé el pensamiento lógico, la capacidad de análisis y el interés por la innovación y la resolución de problemas, sentando las bases para mi formación en el ámbito tecnológico.",
        
        ver_certificado: "Ver certificado",
        
        // Página de Experiencia
        experiencia_title: "Experiencia Profesional",
        experiencia_cargo: "Departamento de administración",
        experiencia_empresa: "Serveo · Jornada parcial",
        experiencia_periodo: "jun. 2025 - sept. 2025",
        experiencia_ubicacion: "Madrid, España",
        experiencia_desc1: "Desempeñé el puesto de ayudante de tripulación (ADT) en la empresa Serveo, encargándome de la preparación y coordinación diaria de los trenes y sus tripulaciones. Mis funciones incluían entre otras, la gestión de recursos y materiales necesarios para cada servicio.",
        experiencia_desc2: "Colaboré estrechamente con distintos equipos para garantizar la correcta atención a las necesidades de la tripulación. Además, respondía de forma rápida y eficaz ante cualquier incidencia operativa, asegurando la continuidad del servicio.",
        experiencia_competencias_title: "Competencias",
        comp_administracion: "Administración",
        comp_trabajo_equipo: "Trabajo en equipo",
        comp_clientes: "Trato con clientes",
        comp_office: "Microsoft Office",
        comp_incidencias: "Respuesta rápida ante incidencias",
        
        // Página de Proyectos
        proyectos_title: "Proyectos Destacados",
        badge_completado: "Completado",
        badge_en_curso: "En curso",
        badge_academico: "Académico",
        badge_personal: "Personal",
        ver_proyecto: "Ver proyecto",
        
        // Proyecto 1 - SABOREA
        proyecto1_title: "SABOREA · Recetario online de comida",
        proyecto1_desc: "Es un recetario online que ofrece un sistema de recetas organizado y visual, acompañado de una sección de comunidad donde los usuarios pueden compartir, comentar e interactuar con las recetas de otros. La web también permite a los usuarios crear y gestionar su propia cuenta dentro de la plataforma. El proyecto combina desarrollo web, diseño centrado en el usuario y funcionalidades sociales para crear una experiencia completa y participativa.",
        
        // Proyecto 2 - Royale Coffee
        proyecto2_title: "Royale Coffee · Página web de una cafetería",
        proyecto2_desc: "Desarrollo de una página web para una cafetería de especialidad, orientada a destacar productos, promociones y la experiencia del cliente online. Incluye un diseño responsive y navegación intuitiva para facilitar el descubrimiento del menú, la compra o reserva de servicios. El proyecto pone énfasis en la presentación visual y usabilidad para reflejar la identidad de marca de la cafetería.",
        
        // Proyecto 3 - Tarjetas Virtuales
        proyecto3_title: "Administración de tarjetas de un festival",
        proyecto3_desc: "Proyecto de diseño y desarrollo de tarjetas virtuales personalizables con elementos interactivos y animaciones. Incluye diferentes plantillas, opciones de personalización en tiempo real y optimización responsive para diversos dispositivos. El proyecto combina creatividad visual con funcionalidad técnica para ofrecer una experiencia de usuario moderna y atractiva, permitiendo crear y compartir tarjetas digitales de forma sencilla e intuitiva.",
        
        // Proyecto 4 - Estudio estadístico
        proyecto4_title: "Estudio estadístico del sueño en estudiantes universitarios",
        proyecto4_desc: "Análisis de la relación entre las horas de sueño y el rendimiento académico de estudiantes de Ingeniería Informática. Incluye diseño de cuestionario, recogida de datos y análisis en RStudio mediante gráficos descriptivos, correlaciones de Pearson, ANOVA y regresión lineal. El trabajo permite extraer conclusiones sobre cómo influyen la edad, el sexo, la calidad del sueño y la actividad física en la nota media, señalando también las principales limitaciones del estudio.",
        
        // Proyecto 5 - Bots de ajedrez
        proyecto5_title: "Bots de ajedrez con IA",
        proyecto5_desc: "Desarrollo de bots de ajedrez utilizando algoritmos Minimax y poda alpha-beta para decidir las mejores jugadas. A lo largo del proyecto trabajé con diferentes formas de evaluar posiciones y comparé su rendimiento en partidas reales. Actualmente, estoy integrando patrones tácticos mediante Prolog para mejorar el orden en que el bot analiza los movimientos y hacerlo más eficiente.",
        
        // Proyecto 6 - Base de datos tienda
        proyecto6_title: "Sistema de gestión para una tienda de ropa",
        proyecto6_desc: "Proyecto de diseño y modelado de una tienda de ropa, definiendo requisitos para la gestión de productos, clientes, empleados y departamentos. Incluye la elaboración de un diagrama entidad-relación para representar las relaciones internas del sistema, así como la estructura de inventario, ventas y facturación. El resultado es una base sólida para la organización y operación del negocio.",
        
        // Proyecto 7 - Página web personal
        proyecto7_title: "Página web personal",
        proyecto7_desc: "Desarrollo de una página web personal diseñada para presentar información profesional, proyectos y formas de contacto de manera organizada y visual. Incluye una estructura limpia y responsive orientada a mejorar la experiencia del usuario. El proyecto combina una maquetación cuidada con secciones dinámicas que permiten mostrar el perfil y el trabajo realizado de forma clara y accesible poniendo en práctica mis habilidades en desarrollo web.",
        
        // Proyecto 8 - Chatbot
        proyecto8_title: "Chatbot de gestión financiera personal",
        proyecto8_desc: "Desarrollo de un asistente financiero conversacional integrado en WhatsApp. Es capaz de interpretar la intención del usuario, realiza consultas financieras en tiempo real, y registrar automáticamente movimientos a partir de mensajes de texto o audio y guardarlo en una base de datos. El chatbot incluye transcripción de audio, respuestas automáticas con un tono natural y conexiones con modelos de IA para ofrecer una experiencia fluida como la de un asistente personal real."
    },
    
    en: {
        // Navigation
        nav_inicio: "Home",
        nav_estudios: "Education",
        nav_experiencia: "Experience",
        nav_proyectos: "Projects",
        nav_contacto: "Contact",
        
        // Home Page - Hero
        hero_subtitle: "Information Systems Engineering Student | Computer Engineering",
        hero_btn_contact: "Contact Me",
        hero_btn_cv: "CV",
        
        // Home Page - About Me
        section_sobre_mi: "About Me",
        sobre_mi_p1: "I am a 22-year-old student, currently in the fourth year of my degree in Information Systems Engineering. I consider myself a person with a positive and curious attitude, eager to continue learning and improving both my technical skills and my ability to manage projects.",
        sobre_mi_p2: "I have knowledge in programming, databases and networks, acquired through academic projects and collaborative group work. I am looking for opportunities to apply my knowledge in the real world, contribute to innovative solutions and continue developing professionally.",
        
        // Home Page - Skills
        section_habilidades: "Technical Skills",
        habilidades_programacion: "Programming",
        habilidades_frameworks: "Frameworks & Environments",
        habilidades_databases: "Databases",
        habilidades_herramientas: "Tools",
        habilidades_otros: "Other Knowledge",
        otros_gestion_financiera: "Financial Management and Analysis",
        habilidades_soft: "Soft Skills",
        soft_trabajo_equipo: "Teamwork",
        soft_resolutivo: "Problem-solving",
        soft_adaptacion: "Adaptability",
        soft_aprendizaje: "Fast learner",
        soft_creatividad: "Creativity",
        
        // Home Page - Languages
        section_idiomas: "Languages",
        idioma_espanol: "Spanish",
        idioma_ingles: "English",
        idioma_portugues: "Portuguese",
        nivel_nativo: "Native",
        nivel_intermedio: "Business / Intermediate",
        nivel_avanzado: "Advanced",
        
        // Contact Page
        contacto_title: "Contact",
        contacto_hablamos: "Let's talk?",
        contacto_mensaje: "You can contact me through any of these channels!",
        contacto_email: "Email",
        contacto_telefono: "Phone",
        contacto_ubicacion: "Location",
        contacto_ubicacion_value: "Alcorcón, Madrid (Spain)",
        form_nombre: "Your Name",
        form_asunto: "Subject",
        form_mensaje: "Message",
        form_btn_enviar: "Send Message",
        
        // Education Page
        estudios_title: "Academic Background",
        estudios_carrera: "Information Systems Engineering",
        estudios_institucion: "CEU San Pablo University",
        estudios_periodo_actual: "2021 - Present",
        estudios_desc_carrera: "I am currently pursuing a degree in Computer Engineering, where I am gaining solid training in software development, systems architecture, and technology project management. This stage is allowing me to strengthen my technical and analytical skills, as well as to understand in depth how technology can provide innovative solutions to different areas.",
        
        estudios_tarjetas_title: "Smart card application development",
        estudios_tarjetas_empresa: "Diusframi",
        estudios_tarjetas_periodo: "October 2025 - November 2025",
        estudios_tarjetas_desc: "Course in which I delved into the operation and applications of virtual and smart cards, analyzing different types such as transport cards, banking cards or electronic identity documents, as well as alternative formats such as bracelets or key chains for payments and access. I understood the technologies they integrate, their differences and the evolution of their security mechanisms. In addition, I participated in practical simulations on the configuration of protection measures and basic card programming.",
        
        estudios_emprender_title: "Improve your employability by developing your capacity to (intra)entrepreneurship",
        estudios_emprender_empresa: "BeForGet",
        estudios_emprender_periodo: "May 2025",
        estudios_emprender_desc: "Workshop focused on developing skills to recognize and communicate my professional value. Through different methodologies I learned to generate and validate business ideas, to define effective value propositions and to strengthen my employability. In addition, I had the opportunity to connect with other students interested in innovation and entrepreneurship.",
        
        estudios_iot_title: "Introduction to IoT",
        estudios_iot_empresa: "Cisco Networking Academy",
        estudios_iot_periodo: "January 2022",
        estudios_iot_desc: "Course in which I learned the fundamentals of the Internet of Things (IoT) and how this technology drives digital transformation. I also understood the role that data analytics, artificial intelligence and machine learning play in this process, and I also delved into the importance of cybersecurity and smart networks to connect and protect devices.",
        
        estudios_bachillerato_title: "Technology High School",
        estudios_bachillerato_institucion: "CEU San Pablo School",
        estudios_bachillerato_periodo: "2019 - 2021",
        estudios_bachillerato_desc: "I completed the Technology High School with a focus on science and technology, which allowed me to acquire a solid foundation in technical and scientific subjects. During this stage I developed logical thinking, analytical capacity and interest in innovation and problem solving, laying the foundations for my training in the field of technology.",
        
        ver_certificado: "View certificate",
        
        // Experience Page
        experiencia_title: "Professional Experience",
        experiencia_cargo: "Administration Department",
        experiencia_empresa: "Serveo · Part-time",
        experiencia_periodo: "Jun. 2025 - Sept. 2025",
        experiencia_ubicacion: "Madrid, Spain",
        experiencia_desc1: "I performed the position of crew assistant (ADT) at Serveo company, taking care of the daily preparation and coordination of trains and their crews. My duties included, among others, the management of resources and materials necessary for each service.",
        experiencia_desc2: "I worked closely with different teams to ensure the proper attention to crew needs. In addition, I responded quickly and effectively to any operational incident, ensuring service continuity.",
        experiencia_competencias_title: "Skills",
        comp_administracion: "Administration",
        comp_trabajo_equipo: "Teamwork",
        comp_clientes: "Customer service",
        comp_office: "Microsoft Office",
        comp_incidencias: "Quick response to incidents",
        
        // Projects Page
        proyectos_title: "Featured Projects",
        badge_completado: "Completed",
        badge_en_curso: "In progress",
        badge_academico: "Academic",
        badge_personal: "Personal",
        ver_proyecto: "View project",
        
        // Project 1 - SABOREA
        proyecto1_title: "SABOREA · Online recipe book",
        proyecto1_desc: "It is an online recipe book that offers an organized and visual recipe system, accompanied by a community section where users can share, comment and interact with other people's recipes. The website also allows users to create and manage their own account within the platform. The project combines web development, user-centered design and social functionalities to create a complete and participatory experience.",
        
        // Project 2 - Royale Coffee
        proyecto2_title: "Royale Coffee · Coffee shop website",
        proyecto2_desc: "Development of a website for a specialty coffee shop, aimed at highlighting products, promotions and the online customer experience. It includes a responsive design and intuitive navigation to facilitate menu discovery, purchase or service booking. The project emphasizes visual presentation and usability to reflect the coffee shop's brand identity.",
        
        // Project 3 - Virtual Cards
        proyecto3_title: "Festival card management",
        proyecto3_desc: "Design and development project for customizable virtual cards with interactive elements and animations. It includes different templates, real-time customization options and responsive optimization for various devices. The project combines visual creativity with technical functionality to offer a modern and attractive user experience, allowing users to create and share digital cards in a simple and intuitive way.",
        
        // Project 4 - Statistical study
        proyecto4_title: "Statistical study of sleep in university students",
        proyecto4_desc: "Analysis of the relationship between hours of sleep and academic performance of Computer Engineering students. It includes questionnaire design, data collection and analysis in RStudio using descriptive graphs, Pearson correlations, ANOVA and linear regression. The work allows to draw conclusions about how age, sex, sleep quality and physical activity influence the average grade, also pointing out the main limitations of the study.",
        
        // Project 5 - Chess bots
        proyecto5_title: "Chess bots with AI",
        proyecto5_desc: "Development of chess bots using Minimax algorithms and alpha-beta pruning to decide the best moves. Throughout the project I worked with different ways to evaluate positions and compared their performance in real games. Currently, I am integrating tactical patterns using Prolog to improve the order in which the bot analyzes moves and make it more efficient.",
        
        // Project 6 - Store database
        proyecto6_title: "Management system for a clothing store",
        proyecto6_desc: "Design and modeling project for a clothing store, defining requirements for the management of products, customers, employees and departments. It includes the elaboration of an entity-relationship diagram to represent the internal relationships of the system, as well as the structure of inventory, sales and billing. The result is a solid foundation for the organization and operation of the business.",
        
        // Project 7 - Personal website
        proyecto7_title: "Personal website",
        proyecto7_desc: "Development of a personal website designed to present professional information, projects and contact forms in an organized and visual way. It includes a clean and responsive structure aimed at improving the user experience. The project combines a careful layout with dynamic sections that allow you to present the profile and work done in a clear and accessible way, putting my web development skills into practice.",
        
        // Project 8 - Chatbot
        proyecto8_title: "Personal financial management chatbot",
        proyecto8_desc: "Development of a conversational financial assistant integrated into WhatsApp. It is able to interpret user intent, make real-time financial queries, and automatically record transactions from text or audio messages and save them to a database. The chatbot includes audio transcription, automatic responses with a natural tone and connections with AI models to offer a fluid experience like that of a real personal assistant."
    }
};
