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
  resumeUrl: 'https://drive.google.com/file/d/15oooGs58y0SPBOtbbwLFHqFrpsm3JfPB/view?usp=sharing', // drop a resume.pdf into /public, or change this link
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
      out: 'Creating scalable web solutions with React, Node.js, PHP, and modern database technologies. Experienced in building custom WordPress solutions, full-stack applications, and API-driven platforms focused on performance and usability.',
    },
  ],
  stats: [
    { label: 'EXPERIENCE', value: '1+', unit: 'YRS' },
    { label: 'PROJECTS', value: '15+', unit: 'DEP' },
    // { label: 'CAFFEINE', value: '∞', unit: 'ml' },
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
  // {
  //   hash: 'b2c3a4d',
  //   head: false,
  //   company: 'Richard Pieris and Company PLC',
  //   period: 'Nov 2022 — July 2024',
  //   title: 'Account Assistant @ Richard Pieris and Company PLC',
  //   description:
  //     'Supported day-to-day accounting tasks including data entry, invoice processing, and maintaining accurate financial records to help ensure timely reporting and smooth finance operations.',
  //   stack: ['Accounting', 'Data Entry', 'Invoice Processing', 'Finance'],
  //   insertions: 194,
  //   deletions: 22,
  //   files: 4,
  // },
];

// --- Projects (GitHub-repo styled cards) ------------------------------------
export const projects = [
  {
    name: 'Palm Harvest Pro',
    visibility: 'Public',
    description:
      'An AI-powered agricultural solution developed as my final-year project, combining machine learning inference with a scalable Python API and Node.js backend to deliver intelligent palm bunch harvest predictions.',
    stack: ['Python', 'TensorFlow', 'PyTorch', 'YOLO', 'Node.js', 'Docker', 'SQL'],
    language: 'Python',
    languageColor: '#3572A5',
    stars: 42,
    forks: 13,
    repo: 'https://github.com/Final-Year-Research-Oil-Plam',
    demo: '#',
    pinned: true,
  },
  {
    name: 'Java Spring Boot + React',
    visibility: 'Public',
    description:
      'A full-stack web application with a Java Spring Boot backend and a React frontend, demonstrating REST API design and client-server integration.',
    stack: ['Java', 'Spring Boot', 'React', 'JavaScript', 'REST API'],
    language: 'Java',
    languageColor: '#b07219',
    stars: 18,
    forks: 3,
    repo: 'https://github.com/SandaruAbenayake/Java-Springboot-React',
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
    repo: 'https://github.com/SandaruAbenayake/MunchMix',
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
    repo: 'https://github.com/SandaruAbenayake/pahana_edu',
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
    repo: 'https://github.com/SandaruAbenayake/SK_saloon',
    demo: '#',
    pinned: true,
  },
  {
    name: 'Flutter Restaurant App',
    visibility: 'Public',
    description:
      'A mobile restaurant ordering system built with Flutter, featuring menu browsing and an ordering flow for customers.',
    stack: ['Flutter', 'Dart'],
    language: 'Dart',
    languageColor: '#00B4AB',
    stars: 14,
    forks: 2,
    repo: 'https://github.com/SandaruAbenayake/Flutter-Restaurant_App',
    demo: '#',
    pinned: true,
  },
  {
    name: 'Pet System',
    visibility: 'Public',
    description:
      'A pet shop management system built with core Java and OOP principles, supporting full CRUD operations for a client project.',
    stack: ['Java', 'OOP'],
    language: 'Java',
    languageColor: '#b07219',
    stars: 10,
    forks: 1,
    repo: 'https://github.com/SandaruAbenayake/Pet-System',
    demo: '#',
    pinned: true,
  },
];

// --- Blogs (optional — leave empty for the empty-state) ---------------------
// Cards with a `sections` array open in a popup instead of navigating to `url`.
export const blogs = [
  {
    title: 'Smart Harvesting System for Oil Palm Plantations',
    excerpt:
      'A mobile + web ML pipeline that reads fruit-bunch color to predict the optimal oil palm harvest day — my final-year dissertation.',
    date: 'March 2026',
    icon: '/images/icon.png',
    tags: ['Machine Learning', 'YOLO', 'React Native', 'FastAPI', 'Dissertation'],
    meta: [
      { label: 'Author', value: 'M. S. N. Abenayake (st20284499)' },
      { label: 'Institution', value: 'Cardiff Metropolitan University (via ICBT)' },
      { label: 'Degree', value: 'BSc (Hons) Software Engineering' },
      { label: 'Supervisor', value: 'Mr. Roy Ian' },
    ],
    sections: [
      {
        heading: 'Core Idea',
        body: [
          'Oil palm harvesting in Sri Lanka is done manually — workers visually judge fruit-bunch ripeness by color, which is inconsistent, error-prone, and dangerous (trees are 10–20m tall). Misjudging ripeness directly hurts Oil Extraction Rate (OER), the key profitability metric for producers like Namunukula Plantations PLC, whose IT Manager provided industry input.',
          'The proposed solution — PalmHarvest Pro — is a mobile + web system that lets field workers photograph a fruit bunch and get back an automated ripeness assessment and a predicted optimal harvest day, not just "ripe / not ripe".',
        ],
      },
      {
        heading: 'Technical Approach',
        body: ['A three-stage ML pipeline is the report’s most original contribution:'],
        list: [
          'Detection (YOLO, Roboflow-annotated dataset) — locates the bunch in the image, returns bounding box + confidence.',
          'Classification (YOLO11n-cls) — classifies the crop into ripe / unripe / overripe / damaged. Reached 95.6% top-1 accuracy on 184 train / 68 val images, though "unripe" recall (71%) trailed "ripe" (96%) — likely class imbalance or visual similarity.',
          'Color-rule day estimator (day_from_hex.py) — converts every pixel in the detected region to hex/RGB, compares distributions against predefined color ranges for day-classes (2d, 4d, 12d, 16d), and maps the winning class to a harvest-day label with disambiguation logic between close classes.',
        ],
      },
      {
        heading: 'System Architecture',
        list: [
          'Mobile app — React Native + Expo + TypeScript: login, tree/QR management, photo capture, instant predictions (e.g. "Day 12 — Ready for harvest in 12 days").',
          'Backend — Node.js/Express + MySQL: route→controller→DB pattern, auth, Cloudinary image uploads, calls the ML service, transactional storage with graceful failure handling.',
          'ML service — Python/FastAPI + Ultralytics YOLO: exposes /palm/detect-from-url, runs the pipeline, returns JSON (count, coordinates, class, confidence, final_date).',
          'Web dashboard — React + Vite: KPIs, trends, block distribution, recent predictions, user/block/tree management, QR code generation.',
        ],
      },
      {
        heading: 'Planning & Methodology',
        body: [
          'Agile methodology over a ~21-week timeline (requirement analysis → design → 6wk ML development → 6wk app development → testing → deployment → docs), backed by full feasibility (technical/operational/economic/environmental-social), risk assessment, SWOT, and PESTEL analysis.',
        ],
      },
      {
        heading: 'Testing',
        body: [
          '10 test cases (TC01–TC10) covering login, block/tree selection, image capture/upload, detection, classification, DB storage, dashboard display, QR scan, and error handling — all marked Pass, with screenshot evidence in the appendix.',
        ],
      },
      {
        heading: 'Limitations & Honesty Points',
        list: [
          'Small training dataset — only 184 images across 4 classes.',
          'The test split had zero images, so the validation set doubled as the evaluation set.',
          'Future work: larger datasets, model accuracy improvements, offline mobile prediction, and GIS integration for block/tree mapping.',
        ],
      },
    ],
  },
];

// --- Contact ----------------------------------------------------------------
export const contact = {
  status: 'available',
  email: 'maggonageabenayake@gmail.com',
  location: 'Remote . Onsite',
  responseTime: 'within 24h',
};
