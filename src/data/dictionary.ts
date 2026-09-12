import { Dictionary, Language } from '@/types/content';

export const dictionary: Record<Language, Dictionary> = {
  es: {
    nav: {
      skills: 'Stack',
      projects: 'Proyectos',
      experience: 'Trayectoria',
      contact: 'Contacto',
      resume: 'CV (PDF)',
    },
    hero: {
      availableBadge: 'Disponible para proyectos y roles Full Stack / HealthTech',
      greeting: 'Hola, soy',
      name: 'Sebastián Taboada',
      title: 'Biomedical Engineer & Full Stack Developer',
      roles: [
        'Full Stack Developer',
        'Frontend & Modern UI (React / Next.js)',
        'Backend & Clean Architecture (Node.js)',
        'AI Agents & MCP Integrator',
        'Biomedical Engineer',
      ],
      subtitle:
        'Desarrollador Full Stack con base en bioingeniería. Construyo soluciones web completas: interfaces interactivas y modernas en React/Next.js, APIs robustas con Clean Architecture e integración de agentes de IA con MCP.',
      ctaProjects: 'Explorar Proyectos',
      ctaContact: 'Contactar',
      ctaResume: 'Descargar CV',
    },
    skills: {
      badge: 'Especialidades Técnicas',
      title: 'Stack & Habilidades',
      subtitle:
        'Herramientas y tecnologías validadas en producción, entornos hospitalarios e infraestructura autónoma.',
      categories: [
        {
          title: 'Backend & Arquitectura',
          description: 'Diseño modular de 3 capas, especificaciones formales y alta cobertura.',
          skills: [
            'TypeScript (2+ años en producción)',
            'Node.js & Express.js',
            'Arquitectura Limpia (3 Capas)',
            'Zod & OpenAPI / Swagger',
            'Jest & Supertest (Testing automatizado)',
            'JWT, OAuth2 & RBAC',
          ],
        },
        {
          title: 'Bases de Datos & Persistencia',
          description: 'Modelado relacional y documental con integridad y optimización de consultas.',
          skills: [
            'MySQL (Diseño relacional, transacciones, índices)',
            'MongoDB (Modelado de agregación)',
            'Sequelize ORM',
            'Mongoose',
          ],
        },
        {
          title: 'IA, Agentes & Infraestructura',
          description: 'Automatización con LLMs, protocolos de contexto y servidores dedicados.',
          skills: [
            'Model Context Protocol (MCP)',
            'Agentes Autónomos (Hermes Agent / Nous Research)',
            'RAG Local (AnythingLLM)',
            'Ubuntu Server 24.04 LTS & Docker Compose',
            'Tailscale Mesh VPN (Redes seguras)',
            'GitHub Actions & Webhooks CI/CD',
          ],
        },
        {
          title: 'Frontend Moderno',
          description: 'Interfaces reactivas, accesibles y con microinteracciones fluidas.',
          skills: [
            'Next.js 15 (App Router & Server Components)',
            'React 19 & TypeScript',
            'Tailwind CSS & Shadcn UI',
            'Framer Motion',
            'TanStack Query',
          ],
        },
        {
          title: 'HealthTech & Bioingeniería',
          description: 'Supervisión de sistemas críticos, equipamiento médico y estándares de salud.',
          skills: [
            'Trazabilidad de equipamiento médico de alta complejidad',
            'Interoperabilidad hospitalaria (PACS/RIS, redes DICOM)',
            'Protocolos clínicos y normativas de tecnología médica',
            'Digitalización de flujos y mantenimientos hospitalarios',
          ],
        },
      ],
    },
    projects: {
      badge: 'Trabajo Seleccionado',
      title: 'Proyectos Destacados',
      subtitle:
        'Soluciones arquitectadas con foco en confiabilidad, impacto real en salud y automatización inteligente.',
      viewDemo: 'Ver Demo en Vivo',
      viewCode: 'Código en GitHub',
      privateRepo: 'Código Privado / Arquitectura Empresarial',
      problemLabel: 'El Desafío',
      solutionLabel: 'Arquitectura & Solución',
      impactLabel: 'Impacto & Resultados',
      stackLabel: 'Stack Tecnológico',
      items: [
        {
          id: 'medevice',
          title: 'MeDevice — HealthTech Management System',
          badge: 'HealthTech / Arquitectura Crítica',
          tagline: 'Plataforma para gestión, trazabilidad y ciclo de vida de equipamiento médico hospitalario.',
          description:
            'Sistema integral diseñado para resolver la pérdida de trazabilidad en centros de salud. Implementa una arquitectura en 3 capas con validaciones estrictas, auditoría de eventos y suite de tests.',
          problem:
            'Los centros hospitalarios gestionan miles de dispositivos biomédicos con planillas desconectadas, provocando demoras críticas en calibraciones y mantenimientos preventivos.',
          solution:
            'Diseñé una API REST desacoplada en TypeScript/Express con validación estricta OpenAPI/Zod, persistencia transaccional en MySQL vía Sequelize, cobertura exhaustiva de tests con Jest/Supertest y servidor MCP para consulta de inventario por agentes de IA.',
          impact: [
            'Arquitectura de 3 capas con contratos OpenAPI/Zod en cada endpoint.',
            'Alta cobertura de tests de integración con Supertest y base de datos de testeo.',
            'Conector MCP para consultas en lenguaje natural del estado de equipos hospitalarios.',
          ],
          stack: ['Next.js 15', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'Docker', 'Jest', 'Supertest', 'MCP'],
          image: '/images/projects/medevice.jpg',
          demoUrl: null,
          codeUrl: null,
          isPrivate: true,
        },
        {
          id: 'jocha-web',
          title: 'Josefina Psicología — Jocha Web',
          badge: 'Frontend Premium & UX',
          tagline: 'Plataforma web para clínica de psicología en Florencia, Italia orientada a expatriados.',
          description:
            'Sitio web con arquitectura moderna orientada a la conversión y experiencia de usuario. Implementa microinteracciones refinadas, glassmorphism y optimización de rendimiento.',
          problem:
            'Necesidad de una presencia digital profesional, empática y de alta gama para captar pacientes de habla hispana en el exterior con tiempos de carga instantáneos.',
          solution:
            'Desarrollada con Next.js 15 App Router, React 19 y Tailwind CSS. Implementé componentes modulares de Shadcn UI y animaciones calibradas con Framer Motion, evitando retrasos de hover en dispositivos táctiles.',
          impact: [
            'Despliegue serverless optimizado en Vercel con rendimiento 99+ en métricas Web Vitals.',
            'Flujo intuitivo de reserva de turnos y presentación empática de áreas de atención clínica.',
            'Diseño responsivo con microinteracciones fluidas y accesibilidad WCAG.',
          ],
          stack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Framer Motion'],
          image: '/images/projects/jocha-web.png',
          demoUrl: 'https://jocha-web.vercel.app/',
          codeUrl: null,
          isPrivate: false,
        },
        {
          id: 'pr-reviewer-vps',
          title: 'Ayacucho VPS & PR Reviewer Bot',
          badge: 'DevOps & Agentes Autónomos',
          tagline: 'Infraestructura self-hosted y bot autónomo para auditorías de Pull Requests con LLMs.',
          description:
            'Entorno de servidor Ubuntu 24.04 LTS configurado para correr servicios continuos, túneles seguros y un agente auditor de código que analiza PRs en tiempo real.',
          problem:
            'Falta de un entorno continuo de pruebas y la necesidad de auditar automáticamente cambios de código en repositorios privados sin depender de servicios SaaS costosos.',
          solution:
            'Implementación de un servidor Linux con Docker Compose y Tailscale Mesh VPN. Desarrollé un bot en Node.js que escucha webhooks de GitHub, extrae el diff del código y utiliza LLMs para reportar problemas de seguridad, estilo y contratos de API.',
          impact: [
            'Auditorías automáticas de PRs en minutos con feedback accionable en comentarios de GitHub.',
            'Acceso seguro sin puertos abiertos a internet mediante malla Tailscale VPN.',
            'Orquestación de servicios containerizados y gateways de agentes (Hermes Agent).',
          ],
          stack: ['Ubuntu Server 24.04', 'Docker Compose', 'Node.js', 'GitHub Webhooks', 'Tailscale', 'LLMs', 'OpenRouter'],
          image: '/images/projects/charada.jpg', // Representación técnica
          demoUrl: null,
          codeUrl: null,
          isPrivate: true,
        },
      ],
    },
    experience: {
      badge: 'Experiencia & Formación',
      title: 'Trayectoria Profesional',
      subtitle:
        'Evolución desde la ingeniería biomédica hospitalaria hasta el liderazgo en arquitecturas de software.',
      items: [
        {
          role: 'Full Stack Developer & Lead Architect',
          company: 'MeDevice — HealthTech Management System',
          period: '2024 — Presente',
          location: 'Remoto',
          description:
            'Liderazgo en el diseño y construcción de la plataforma de trazabilidad de dispositivos médicos.',
          highlights: [
            'Diseño e implementación de arquitectura de 3 capas desacoplada con validaciones estrictas Zod.',
            'Suite exhaustiva de pruebas unitarias y de integración con Jest y Supertest.',
            'Integración de agentes de IA y servidores Model Context Protocol (MCP) para agilizar operaciones técnicas.',
          ],
          skills: ['TypeScript', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'Docker', 'Jest', 'Supertest', 'MCP'],
        },
        {
          role: 'DevOps, Self-Hosting & Agent Infrastructure',
          company: 'Ayacucho VPS & Home-Lab',
          period: '2024 — Presente',
          location: 'Tucumán, Argentina',
          description:
            'Diseño y mantenimiento de infraestructura de servidores y automatizaciones con agentes inteligentes.',
          highlights: [
            'Despliegue del bot autónomo de revisión de Pull Requests conectado a webhooks de GitHub.',
            'Configuración de túneles seguros y malla Tailscale VPN para acceso remoto y despliegues continuos.',
            'Integración de pipelines RAG locales y servidores de herramientas para modelos de lenguaje.',
          ],
          skills: ['Ubuntu Server', 'Docker Compose', 'Tailscale', 'Node.js', 'GitHub Actions', 'LLMs'],
        },
        {
          role: 'Residencia en Ingeniería Clínica & Sistemas Internos',
          company: 'Hospital Padilla / SiProSa',
          period: '2021 — 2024',
          location: 'Tucumán, Argentina',
          description:
            'Gestión de tecnología médica de alta complejidad (quirófanos, UTI, diagnóstico por imágenes) y desarrollo de herramientas internas de software.',
          highlights: [
            'Desarrollo de herramientas y paneles web internos para seguimiento de órdenes de trabajo y mantenimiento hospitalario.',
            'Supervisión y auditoría de interoperabilidad clínica (redes DICOM, PACS/RIS y sistemas de información hospitalaria).',
            'Optimización técnica de inventarios para reducir tiempos de inactividad de equipamiento crítico.',
          ],
          skills: ['Ingeniería Biomédica', 'PACS/DICOM', 'Sistemas Clínicos', 'Gestión de Mantenimiento', 'Desarrollo Web Interno'],
        },
      ],
      educationTitle: 'Educación & Formación Universitaria',
      education: {
        degree: 'Ingeniero Biomédico (Bioingeniería)',
        institution: 'Universidad Nacional de Tucumán (UNT)',
        period: 'Graduado',
        location: 'San Miguel de Tucumán, Argentina',
        details:
          'Formación rigurosa en procesamiento de señales e imágenes médicas, instrumentación electrónica, biomecánica, sistemas de salud y metodologías de ingeniería aplicadas a entornos de alta criticidad.',
      },
    },
    contact: {
      badge: 'Hablemos',
      title: 'Contacto Directo',
      subtitle:
        '¿Tienes un proyecto en mente, buscas un perfil Full Stack técnico o quieres explorar sinergias en HealthTech e IA?',
      copyEmail: 'Copiar Email',
      copied: '¡Email copiado al portapapeles!',
      directSocials: 'Redes Profesionales',
      resumeTitle: 'Currículum Vitae',
      downloadEs: 'Descargar CV (Español)',
      downloadEn: 'Download CV (English)',
      locationLabel: 'Ubicación',
      locationValue: 'San Miguel de Tucumán, Argentina (UTC-3)',
      availabilityLabel: 'Modalidad',
      availabilityValue: '100% Remoto para equipos globales',
    },
    footer: {
      builtWith: 'Diseñado y construido por Sebastián Taboada con Next.js 15, TypeScript y Tailwind CSS.',
      rights: 'Todos los derechos reservados.',
    },
  },
  en: {
    nav: {
      skills: 'Stack',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
      resume: 'Resume (PDF)',
    },
    hero: {
      availableBadge: 'Available for Full Stack & HealthTech roles',
      greeting: 'Hi, I am',
      name: 'Sebastián Taboada',
      title: 'Biomedical Engineer & Full Stack Developer',
      roles: [
        'Full Stack Developer',
        'Frontend & Modern UI (React / Next.js)',
        'Backend & Clean Architecture (Node.js)',
        'AI Agents & MCP Integrator',
        'Biomedical Engineer',
      ],
      subtitle:
        'Full Stack Developer with a biomedical background. Building end-to-end web applications: modern responsive interfaces in React/Next.js, resilient backend APIs with Clean Architecture, and autonomous AI agents with MCP.',
      ctaProjects: 'Explore Projects',
      ctaContact: 'Get in Touch',
      ctaResume: 'Download Resume',
    },
    skills: {
      badge: 'Technical Expertise',
      title: 'Stack & Capabilities',
      subtitle:
        'Tools and engineering practices battle-tested in production, clinical hospitals, and autonomous infrastructure.',
      categories: [
        {
          title: 'Backend & Architecture',
          description: 'Modular 3-tier design, contract-driven specifications, and high test coverage.',
          skills: [
            'TypeScript (2+ years daily in production)',
            'Node.js & Express.js',
            'Clean Architecture (3 Layers)',
            'Zod & OpenAPI / Swagger',
            'Jest & Supertest (Automated Testing)',
            'JWT, OAuth2 & RBAC',
          ],
        },
        {
          title: 'Databases & Persistence',
          description: 'Relational and document data modeling with strong integrity and query optimization.',
          skills: [
            'MySQL (Schema design, transactions, indexing)',
            'MongoDB (Aggregation pipelines)',
            'Sequelize ORM',
            'Mongoose',
          ],
        },
        {
          title: 'AI, Agents & Infrastructure',
          description: 'LLM automation, standardized context harnesses, and dedicated servers.',
          skills: [
            'Model Context Protocol (MCP)',
            'Autonomous Agents (Hermes Agent / Nous Research)',
            'Local RAG (AnythingLLM)',
            'Ubuntu Server 24.04 LTS & Docker Compose',
            'Tailscale Mesh VPN (Zero-trust secure networks)',
            'GitHub Actions & Webhooks CI/CD',
          ],
        },
        {
          title: 'Modern Frontend',
          description: 'Reactive, accessible web applications with calibrated microinteractions.',
          skills: [
            'Next.js 15 (App Router & Server Components)',
            'React 19 & TypeScript',
            'Tailwind CSS & Shadcn UI',
            'Framer Motion',
            'TanStack Query',
          ],
        },
        {
          title: 'HealthTech & Biomedical Engineering',
          description: 'Critical hospital technology management, clinical workflows, and medical data standards.',
          skills: [
            'High-complexity medical device lifecycle & traceability',
            'Clinical interoperability (PACS/RIS, DICOM networks)',
            'Hospital maintenance & calibration protocols',
            'Healthcare workflow digitalization',
          ],
        },
      ],
    },
    projects: {
      badge: 'Selected Work',
      title: 'Featured Projects',
      subtitle:
        'Architected systems focused on reliability, healthcare impact, and intelligent automation.',
      viewDemo: 'Live Demo',
      viewCode: 'Source Code',
      privateRepo: 'Private Repository / Enterprise Architecture',
      problemLabel: 'The Challenge',
      solutionLabel: 'Architecture & Solution',
      impactLabel: 'Impact & Results',
      stackLabel: 'Tech Stack',
      items: [
        {
          id: 'medevice',
          title: 'MeDevice — HealthTech Management System',
          badge: 'HealthTech / Critical Architecture',
          tagline: 'Enterprise platform for tracking, maintenance, and lifecycle of hospital medical equipment.',
          description:
            'A comprehensive backend and management system built to solve device traceability in healthcare centers. Implements a 3-tier architecture with strict contracts, event auditing, and automated testing.',
          problem:
            'Hospital networks oversee thousands of critical biomedical devices using fragmented spreadsheets, causing severe delays in calibrations and preventive servicing.',
          solution:
            'Engineered a decoupled REST API in TypeScript/Express with strict OpenAPI/Zod validation, transactional MySQL persistence via Sequelize, comprehensive Jest/Supertest coverage, and an MCP server for autonomous natural language equipment queries.',
          impact: [
            'Modular 3-layer architecture with strict OpenAPI/Zod contracts on all endpoints.',
            'High integration test coverage with Supertest and dedicated test databases.',
            'MCP tool server enabling AI agents to inspect equipment status via natural language.',
          ],
          stack: ['Next.js 15', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'Docker', 'Jest', 'Supertest', 'MCP'],
          image: '/images/projects/medevice.jpg',
          demoUrl: null,
          codeUrl: null,
          isPrivate: true,
        },
        {
          id: 'jocha-web',
          title: 'Josefina Psychology — Jocha Web',
          badge: 'Premium Frontend & UX',
          tagline: 'Web platform for a clinical psychology practice in Florence, Italy tailored for expats.',
          description:
            'Modern web application built for high conversion, empathy, and refined aesthetics. Features smooth microinteractions, glassmorphism, and instant page loads.',
          problem:
            'Need for a distinguished, warm digital presence to connect with Spanish-speaking expatriates across Europe with instant load times.',
          solution:
            'Built with Next.js 15 App Router, React 19, and Tailwind CSS. Implemented Shadcn UI components and calibrated Framer Motion animations with custom touch-handling to prevent sticky hovers on mobile.',
          impact: [
            'Optimized serverless deployment on Vercel with 99+ Web Vitals performance scores.',
            'Seamless booking funnel and empathetic showcase of clinical care specialties.',
            'Fully responsive layout with WCAG accessibility standards.',
          ],
          stack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Framer Motion'],
          image: '/images/projects/jocha-web.png',
          demoUrl: 'https://jocha-web.vercel.app/',
          codeUrl: null,
          isPrivate: false,
        },
        {
          id: 'pr-reviewer-vps',
          title: 'Ayacucho VPS & PR Reviewer Bot',
          badge: 'DevOps & Autonomous Agents',
          tagline: 'Self-hosted server infrastructure and autonomous LLM bot for real-time GitHub PR auditing.',
          description:
            'Dedicated Ubuntu 24.04 LTS server running 24/7 background automations, private mesh networks, and an automated code review agent.',
          problem:
            'Absence of continuous testing infrastructure and the need to audit Pull Requests on private repositories without high SaaS costs.',
          solution:
            'Configured Linux host running Docker Compose and Tailscale Mesh VPN. Engineered a Node.js daemon that listens to GitHub webhooks, parses code diffs, and orchestrates LLMs to audit security vulnerabilities, styling, and API contracts.',
          impact: [
            'Automated PR feedback in minutes with actionable commentary directly on GitHub.',
            'Zero open internet ports via Tailscale zero-trust private mesh VPN.',
            'Containerized orchestration of self-hosted agent gateways (Hermes Agent).',
          ],
          stack: ['Ubuntu Server 24.04', 'Docker Compose', 'Node.js', 'GitHub Webhooks', 'Tailscale', 'LLMs', 'OpenRouter'],
          image: '/images/projects/charada.jpg',
          demoUrl: null,
          codeUrl: null,
          isPrivate: true,
        },
      ],
    },
    experience: {
      badge: 'Career & Background',
      title: 'Professional Journey',
      subtitle:
        'From clinical bioengineering in critical hospital wards to architecting modern web platforms and AI agents.',
      items: [
        {
          role: 'Full Stack Developer & Lead Architect',
          company: 'MeDevice — HealthTech Management System',
          period: '2024 — Present',
          location: 'Remote',
          description:
            'Technical leadership in designing and building the hospital medical device traceability platform.',
          highlights: [
            'Designed decoupled 3-tier architecture with strict runtime Zod validations and OpenAPI specs.',
            'Implemented comprehensive unit and integration testing suite with Jest and Supertest.',
            'Integrated Model Context Protocol (MCP) servers to allow AI agents to streamline inventory querying.',
          ],
          skills: ['TypeScript', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'Docker', 'Jest', 'Supertest', 'MCP'],
        },
        {
          role: 'DevOps, Self-Hosting & Agent Infrastructure',
          company: 'Ayacucho VPS & Home-Lab',
          period: '2024 — Present',
          location: 'Tucumán, Argentina',
          description:
            'Design and operations of server infrastructure and intelligent agent automations.',
          highlights: [
            'Engineered autonomous Pull Request reviewer bot triggered by GitHub webhooks.',
            'Configured Tailscale Mesh VPN and secure SSH tunnels for remote management and deployments.',
            'Deployed local RAG pipelines and tool execution environments for language models.',
          ],
          skills: ['Ubuntu Server', 'Docker Compose', 'Tailscale', 'Node.js', 'GitHub Actions', 'LLMs'],
        },
        {
          role: 'Clinical Engineering Residency & Internal Systems',
          company: 'Hospital Padilla / SiProSa',
          period: '2021 — 2024',
          location: 'Tucumán, Argentina',
          description:
            'Oversight of critical medical technology (ORs, ICU, medical imaging) and internal software tooling.',
          highlights: [
            'Built internal web dashboards for work orders, preventive schedules, and hospital device tracking.',
            'Supervised clinical systems interoperability (DICOM networks, PACS/RIS, and hospital workflows).',
            'Reduced critical equipment downtime through technical standardization and inventory digitalization.',
          ],
          skills: ['Biomedical Engineering', 'PACS/DICOM', 'Clinical Systems', 'Maintenance Management', 'Internal Web Tools'],
        },
      ],
      educationTitle: 'University Education',
      education: {
        degree: 'Biomedical Engineer (Bioengineering)',
        institution: 'Universidad Nacional de Tucumán (UNT)',
        period: 'Graduated',
        location: 'San Miguel de Tucumán, Argentina',
        details:
          'Rigorous training in biomedical signal & image processing, medical electronics, biomechanics, healthcare information systems, and engineering problem-solving applied to high-criticality environments.',
      },
    },
    contact: {
      badge: 'Let’s Connect',
      title: 'Get in Touch',
      subtitle:
        'Looking for a technical Full Stack engineer, building resilient APIs, or exploring HealthTech and AI agent synergies?',
      copyEmail: 'Copy Email',
      copied: 'Email copied to clipboard!',
      directSocials: 'Professional Profiles',
      resumeTitle: 'Curriculum Vitae',
      downloadEs: 'Download Resume (Spanish)',
      downloadEn: 'Download Resume (English)',
      locationLabel: 'Location',
      locationValue: 'San Miguel de Tucumán, Argentina (UTC-3)',
      availabilityLabel: 'Availability',
      availabilityValue: '100% Remote for global teams',
    },
    footer: {
      builtWith: 'Designed and built by Sebastián Taboada with Next.js 15, TypeScript, and Tailwind CSS.',
      rights: 'All rights reserved.',
    },
  },
};
