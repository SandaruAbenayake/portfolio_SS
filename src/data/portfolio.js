// ============================================================================
//  portfolio.js  —  Single source of truth for all site content.
//  Edit the values here and the whole site updates. No need to touch JSX.
// ============================================================================

export const profile = {
  name: 'Sandaru Abenayake',
  role: 'Full Stack Software Engineer',
  tagline: 'Engineering Beyond Boundaries',
  blurb:
    'Specializing in scalable web platforms, real-time integrations, and clean cloud architecture.',
  kernelVersion: 'v2.8.0',
  location: 'Sri Lanka · Remote . Onsite',
  status: 'ONLINE',
  resumeUrl: 'https://docs.google.com/document/d/1ZyLgd4Z44Uq0y0C4trB14UB5ULp88nKcZ5wP9UafHi4/edit?usp=sharing', // drop a resume.pdf into /public, or change this link
  avatar: '/images/avatar.jpeg', // drop your photo into /public/images/avatar.jpeg
  // Modules shown scrolling under the hero
  loadedModules: ['PHP', 'REACT', 'PYTHON', 'SQL','DOCKER'],
};

export const social = {
  github: 'https://github.com/SandaruAbenayake',
  githubUser: '@SandaruAbenayake',
  linkedin: 'https://www.linkedin.com/in/sandaru-abenayake-768628252/',
  linkedinUser: 'in/sandaru-abenayake-768628252/',
  email: 'maggonageabenayake@gmail.com',
};

// --- About terminal log lines -----------------------------------------------
export const about = {
  card: {
    operator: 'SANDARU ABENAYAKE',
    role: 'FULL_STACK_DEVELOPER',
    location: 'Remote . Onsite',
    status: 'ONLINE',
  },
  log: [
    {
      cmd: 'About me',
      out: 'I am a software engineer focused on building scalable, maintainable web platforms. My work is grounded in clean code, performance, and continuous learning.',
    },
    {
      cmd: 'experience',
      out: 'Turning complex product requirements into robust technical solutions. Currently building education platforms with React, Flask, PostgreSQL and Azure.',
    },
  ],
  stats: [
    { label: 'EXPERIENCE', value: '3+', unit: 'YRS' },
    { label: 'PROJECTS', value: '15+', unit: 'DEP' },
    { label: 'CAFFEINE', value: '∞', unit: 'ml' },
  ],
};

// --- Skills (grouped) -------------------------------------------------------
// `color` keys map to CSS accent variables: cyan | green | amber | magenta | red
export const skills = [
  { name: 'React', color: 'cyan' },
  { name: 'JavaScript', color: 'amber' },
  { name: 'TypeScript', color: 'cyan' },
  { name: 'Python', color: 'green' },
  { name: 'Flask', color: 'green' },
  { name: 'Node.js', color: 'green' },
  { name: 'Docker', color: 'cyan' },
  { name: 'Framer Motion', color: 'magenta' },
  { name: 'REST APIs', color: 'amber' },
  { name: 'Git', color: 'red' },
  { name: 'HTML5', color: 'amber' },
  { name: 'CSS3', color: 'cyan' },
];

// --- Experience (rendered as a git log) -------------------------------------
export const experience = [
  {
    hash: 'd4f5c6a',
    head: true,
    company: 'Domedia',
    period: 'July 2025 — Present',
    title: 'Full Stack Developer @ Domedia',
    description:
      'Engineered custom WordPress themes and plugins with SEO optimization and WooCommerce integration to improve site functionality, search visibility, and e-commerce performance.',
    stack: ['WordPress', 'WooCommerce', 'HTML', 'CSS', 'JavaScript', 'SEO'],
    insertions: 520,
    deletions: 114,
    files: 6,
  },
  {
    hash: 'c3d4b5f',
    head: false,
    company: 'Richard Pieris and Company PLC',
    period: 'August 2024 — July 2025',
    title: 'IT Assistant @ Richard Pieris and Company PLC',
    description:
      'Administered and maintained company servers for high availability, designed and managed SQL databases, and supported ERP and internal systems to ensure seamless business operations.',
    stack: ['SQL', 'Server Administration', 'ERP', 'Systems Integration'],
    insertions: 318,
    deletions: 56,
    files: 5,
  },
  {
    hash: 'b2c3a4d',
    head: false,
    company: 'Richard Pieris and Company PLC',
    period: 'Nov 2022 — July 2024',
    title: 'Account Assistant @ Richard Pieris and Company PLC',
    description:
      'Supported day-to-day accounting tasks including data entry, invoice processing, and maintaining accurate financial records to help ensure timely reporting and smooth finance operations.',
    stack: ['Accounting', 'Data Entry', 'Invoice Processing', 'Finance'],
    insertions: 194,
    deletions: 22,
    files: 4,
  },
];

// --- Projects (GitHub-repo styled cards) ------------------------------------
export const projects = [
  {
    name: 'Palm Harvest Pro',
    visibility: 'Public',
    description:
      'A production-ready Python inference service for agricultural AI, delivering palm bunch harvest forecasts through a REST API integrated with a Node.js backend.',
    stack: ['Python', 'TensorFlow', 'PyTorch', 'YOLO', 'Node.js', 'Docker', 'SQL'],
    language: 'Python',
    languageColor: '#3572A5',
    stars: 42,
    forks: 13,
    repo: '#',
    demo: '#',
    pinned: true,
  },
  {
    name: 'SK Salon',
    visibility: 'Public',
    description:
      'A salon booking system with separate customer and admin portals, mock payment webhook simulation, JWT authentication, and owner dashboard for booking approvals and schedule management.',
    stack: ['React', 'Node.js', 'Express', 'MySQL', 'JWT', 'Material-UI'],
    language: 'JavaScript',
    languageColor: '#f1e05a',
    stars: 36,
    forks: 8,
    repo: '#',
    demo: '#',
    pinned: true,
  },
  {
    name: 'MunchMix',
    visibility: 'Public',
    description:
      'An online food ordering platform for restaurants featuring a dynamic menu and MySQL database management for orders and inventory.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    language: 'PHP',
    languageColor: '#4f5d95',
    stars: 28,
    forks: 5,
    repo: '#',
    demo: '#',
    pinned: true,
  },
  {
    name: 'Student Registration',
    visibility: 'Public',
    description:
      'A student management web app supporting create, read, update, and delete operations with a React frontend, Express backend, and MongoDB persistence.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    language: 'JavaScript',
    languageColor: '#f1e05a',
    stars: 32,
    forks: 7,
    repo: '#',
    demo: '#',
    pinned: true,
  },
  {
    name: 'Pahana Edu',
    visibility: 'Public',
    description:
      'A desktop bookshop management system built with Java Servlets and JDBC, designed to manage books, customers, and orders with strong OOP architecture.',
    stack: ['Java', 'Servlets', 'MySQL', 'JDBC'],
    language: 'Java',
    languageColor: '#b07219',
    stars: 22,
    forks: 4,
    repo: '#',
    demo: '#',
    pinned: true,
  },
];

// --- Blogs (optional — leave empty for the empty-state) ---------------------
export const blogs = [
  // {
  //   title: 'Setting up GitOps migrations on Azure PostgreSQL',
  //   excerpt: 'A walk-through of Flyway + Azure DevOps with Entra token auth.',
  //   date: '2026-05-01',
  //   url: '#',
  //   tags: ['Azure', 'PostgreSQL', 'DevOps'],
  // },
];

// --- Contact ----------------------------------------------------------------
export const contact = {
  status: 'available',
  email: 'you@example.com',
  location: 'Remote',
  responseTime: 'within 24h',
};