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
  avatar: '/images/dev.jpg', // drop your photo into /public/images/dev.jpg
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
    hash: 'e5a6d7b',
    head: true,
    company: 'Domedia',
    period: 'January 2026 — Present',
    title: 'Trainee Full Stack Developer @ Domedia',
    description:
      'Independently developing custom WordPress themes and plugins and managing WooCommerce e-commerce solutions end-to-end, while delivering SEO-optimized responsive pages and owning client communication, maintenance, and workflow improvements across projects.',
    stack: ['WordPress', 'WooCommerce', 'HTML', 'CSS', 'JavaScript', 'SEO'],
    insertions: 340,
    deletions: 78,
    files: 6,
  },
  {
    hash: 'd4f5c6a',
    head: false,
    company: 'Domedia',
    period: 'July 2025 — December 2025',
    title: 'Full Stack Developer Intern @ Domedia',
    description:
      'Assisted in building and customizing WordPress themes, plugins, and page builders for client websites, supporting WooCommerce integration and responsive page development while applying on-page SEO practices and helping senior developers with client-facing bug fixes and maintenance.',
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
    category: 'Uni Final Year Project',
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
    category: 'Self Learning Project',
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
    name: 'Pet System',
    visibility: 'Public',
    category: 'Client Project',
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
  {
    name: 'MunchMix',
    visibility: 'Public',
    category: 'Uni Project',
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
    category: 'Uni Project',
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
    category: 'Self Learning Project',
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
    category: 'Uni Project',
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
];

// --- Blogs (optional — leave empty for the empty-state) ---------------------
// Cards with a `sections` array open in a popup instead of navigating to `url`.
export const blogs = [
  {
    title: "Why Manual Visual Inspection Doesn't Scale — and What to Automate First",
    excerpt:
      'A lesson from building Palm Harvest Pro: why manual visual inspection breaks down at scale, and how to decide what actually needs machine learning versus a simple rule.',
    date: 'August 2026',
    icon: '/images/icon.png',
    tags: ['Machine Learning', 'Computer Vision', 'Engineering', 'Automation'],
    sections: [
      {
        heading: 'Introduction',
        body: [
          'Many industries still depend on someone standing in front of a product — a crate of fruit, a sheet of material, a finished part — and judging it by eye. It works. It\'s cheap to set up, needs no infrastructure, and for a small operation it\'s often the right call. The problem shows up later, once volume grows and that same judgment call has to happen hundreds or thousands of times a day.',
          'I ran into this directly while building Palm Harvest Pro, a system for predicting when oil palm fruit bunches are ready to harvest. But the pattern I saw there — a manual, visual, subjective process breaking down under scale — isn\'t specific to agriculture. It shows up in manufacturing QA, food sorting, warehouse intake, even code review. This is about that general problem, using the palm project as one concrete example, not the whole story.',
        ],
      },
      {
        heading: 'Why manual inspection becomes difficult at scale',
        body: [
          'Three things break down as volume increases, and they\'re worth naming separately because each one needs a different fix:',
        ],
        list: [
          'Speed — a person can only look at so many items per hour. Throughput is capped by human attention, not by demand.',
          'Consistency — the same judgment call ("is this ripe," "is this defective") varies from person to person, and even from the same person across a shift as fatigue sets in.',
          'Traceability — a verbal or mental judgment leaves no record. When something goes wrong downstream, there\'s no way to go back and ask why a specific item was passed or rejected.',
        ],
      },
      {
        heading: 'Real-world example: palm fruit ripeness detection',
        body: [
          'In oil palm plantations, harvest timing is judged by the color of the fruit bunch. Workers climb or inspect 10–20 meter trees and make a call based on experience. Get it wrong — too early or too late — and the Oil Extraction Rate (OER), the metric that determines how much usable oil comes out of a harvest, drops. It\'s also genuinely dangerous work: the judgment is happening at height, under time pressure, at volume.',
          'Palm Harvest Pro\'s starting point was simple: let a worker photograph a bunch instead of eyeballing it, and have the system return a ripeness class and a predicted harvest-ready day. The goal was never to remove the worker from the loop — it was to replace an inconsistent visual judgment with a repeatable one, and to leave a photographic record behind for every decision.',
        ],
      },
      {
        heading: 'How automation and computer vision can help',
        body: [
          'Once you photograph something instead of just looking at it, you get two things for free that manual inspection doesn\'t have: a fixed record, and a repeatable input to run any kind of analysis against. That\'s the actual value of automating this step — not that a machine "sees better" than a person, but that the same input produces the same output every time, and you can audit it later.',
          'Computer vision is one way to process that photo. It\'s useful when the thing you\'re classifying has enough visual variation that writing explicit rules for it is hard — subtle color gradients, overlapping categories, inconsistent lighting and angles. That describes ripeness classification reasonably well: "ripe," "unripe," "overripe," and "damaged" aren\'t cleanly separated by any single measurement.',
        ],
      },
      {
        heading: 'When machine learning is worth it',
        body: [
          'Machine learning earns its complexity when the categories are visually fuzzy, you have real examples to learn from, and the cost of an occasional wrong call is recoverable rather than catastrophic.',
          'It\'s worth being honest about what that looks like in practice. The classification model in Palm Harvest Pro reached about 95% accuracy overall — on a small dataset, a few hundred images across four classes — but performance wasn\'t even across classes. "Ripe" was detected reliably; "unripe" was harder, likely because it looks visually similar to other stages. That\'s a normal outcome for a first model on limited data, not a failure, but it\'s also not a number to extrapolate from. A model like this is a decision aid a worker can lean on, not a replacement for judgment, and it needs more data and field validation before anyone should trust it unsupervised.',
        ],
      },
      {
        heading: 'When simple rules or image processing are enough',
        body: [
          'Not every visual problem needs a trained model. If the thing you\'re checking has a fixed, well-defined signature — a size threshold, a specific color range, a shape that traditional edge detection can pick out — a model is often overkill. Simple rules are easier to explain to a non-technical stakeholder, easier to debug when they\'re wrong, run on cheap hardware without a GPU, and don\'t need a labeled dataset to get started.',
          'Palm Harvest Pro actually uses both, and that split is deliberate. Detecting and classifying the bunch — the fuzzy part — uses a trained model. But the final harvest-day estimate is a straightforward color-rule system: convert the detected region\'s pixels to hex values, compare the distribution against predefined color ranges for known ripeness stages, and pick the best match. No model needed for that step, because the categories are well-defined enough that rules do the job — and rules are far easier to inspect and correct when they\'re wrong.',
        ],
      },
      {
        heading: 'The real engineering lesson: automate the right problem first',
        body: [
          'The temptation on any project like this is to reach for the most advanced tool available and apply it everywhere. The more useful question is narrower: which specific step is actually the bottleneck, and what kind of problem is it? A short checklist that\'s held up across projects:',
        ],
        list: [
          'What breaks first as volume grows — speed, consistency, or record-keeping?',
          'If the automated call is wrong sometimes, is that recoverable, or does it cause real damage?',
          'Is there enough real-world data to train something, or would rules get you 90% of the way there today?',
          'Can the categories be described with explicit thresholds, or do they genuinely require learned pattern recognition?',
        ],
      },
      {
        heading: 'Conclusion',
        body: [
          'Manual inspection isn\'t wrong at small scale — it just doesn\'t hold up as volume grows, because speed, consistency, and traceability all degrade at the same time. Fixing that doesn\'t mean adding AI everywhere; it means identifying the specific step that\'s actually the bottleneck and matching the simplest tool that solves it, whether that\'s a trained model or a handful of hex-value comparisons. That judgment call — not the model itself — is the actual engineering work.',
        ],
      },
    ],
  },
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
