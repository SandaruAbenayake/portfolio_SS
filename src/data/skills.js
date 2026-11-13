/** @typedef {'frontend' | 'backend' | 'devops' | 'hub'} SkillBranchId */
/** @typedef {'core' | 'advanced' | 'supporting'} SkillTier */
/**
 * @typedef {Object} SkillNodeData
 * @property {string} id
 * @property {string} name
 * @property {SkillBranchId} branch
 * @property {SkillBranchId[]} [branches]
 * @property {number} x
 * @property {number} y
 * @property {SkillTier} tier
 * @property {number} proficiency
 * @property {string} years
 * @property {string} description
 * @property {string[]} projects
 * @property {boolean} [special]
 */

/**
 * Skill tree content and layout. Coordinates use a 1000 x 700 viewBox so the
 * desktop tree can scale without changing its graph geometry.
 */
export const skillTreeConfig = {
  viewBox: { width: 1000, height: 700 },
  colors: {
    frontend: '#22d3ee',
    backend: '#34d399',
    devops: '#fb923c',
    special: '#c084fc',
    hub: '#dbeafe',
  },
  sizes: { core: 68, advanced: 56, supporting: 46 },
  branches: [
    { id: 'frontend', label: 'Frontend', color: '#22d3ee' },
    { id: 'backend', label: 'Backend', color: '#34d399' },
    { id: 'devops', label: 'DevOps', color: '#fb923c' },
  ],
};

// Proficiency values are relative portfolio self-ratings, grouped by tier.
// Experience is shown as the portfolio's existing 1+ year overall figure.
export const skillNodes = [
  { id: 'hub', name: 'ME / Developer', branch: 'hub', x: 500, y: 350, tier: 'core', proficiency: 100, years: '1+ year overall', description: 'Building web products from the first database table through deployment.', projects: ['Portfolio', 'Freelance client work'] },
  { id: 'html', name: 'HTML5', branch: 'frontend', x: 100, y: 250, tier: 'supporting', proficiency: 68, years: '1+ year overall', description: 'Semantic page structure for accessible, responsive web interfaces.', projects: ['MunchMix', 'Domedia client sites'] },
  { id: 'css', name: 'CSS3', branch: 'frontend', x: 245, y: 250, tier: 'supporting', proficiency: 72, years: '1+ year overall', description: 'Responsive layouts, component styling, and polished interface details.', projects: ['Portfolio', 'Domedia client sites'] },
  { id: 'javascript', name: 'JavaScript', branch: 'frontend', branches: ['frontend', 'backend'], x: 390, y: 250, tier: 'core', proficiency: 84, years: '1+ year overall', description: 'Interactive browser features and application logic across the stack.', projects: ['SK Salon', 'MunchMix'] },
  { id: 'typescript', name: 'TypeScript', branch: 'frontend', x: 450, y: 140, tier: 'advanced', proficiency: 70, years: '1+ year overall', description: 'Typed application code that makes larger frontend projects easier to maintain.', projects: ['Palm Harvest Pro'] },
  { id: 'react', name: 'React', branch: 'frontend', x: 570, y: 190, tier: 'core', proficiency: 84, years: '1+ year overall', description: 'Reusable interfaces for interactive web applications and dashboards.', projects: ['SK Salon', 'Palm Harvest Pro', 'Portfolio'] },
  { id: 'framer-motion', name: 'Framer Motion', branch: 'frontend', special: true, x: 590, y: 50, tier: 'supporting', proficiency: 62, years: '1+ year overall', description: 'Motion and transitions that make interface state changes feel clear.', projects: ['Portfolio'] },
  { id: 'nextjs', name: 'Next.js', branch: 'frontend', x: 700, y: 70, tier: 'advanced', proficiency: 70, years: '1+ year overall', description: 'React framework for structured, production-ready web applications.', projects: ['Freelance client work'] },
  { id: 'vercel', name: 'Vercel', branch: 'frontend', x: 480, y: 70, tier: 'supporting', proficiency: 62, years: '1+ year overall', description: 'Hosting and deploying React frontend applications.', projects: ['UserDesk AI - AI-Powered User Management System'] },
  { id: 'python', name: 'Python', branch: 'backend', x: 800, y: 45, tier: 'advanced', proficiency: 76, years: '1+ year overall', description: 'Backend services and machine-learning workflows.', projects: ['Palm Harvest Pro'] },
  { id: 'flask', name: 'Flask', branch: 'backend', x: 870, y: 145, tier: 'supporting', proficiency: 62, years: '1+ year overall', description: 'Lightweight Python APIs and service endpoints.', projects: ['Palm Harvest Pro'] },
  { id: 'node', name: 'Node.js', branch: 'backend', x: 820, y: 270, tier: 'core', proficiency: 82, years: '1+ year overall', description: 'Server-side JavaScript for APIs and full-stack application services.', projects: ['SK Salon', 'Palm Harvest Pro', 'UserDesk AI - AI-Powered User Management System'] },
  { id: 'gemini', name: 'Google Gemini API', branch: 'backend', x: 875, y: 225, tier: 'supporting', proficiency: 62, years: '1+ year overall', description: 'Generative AI integration for profile summaries, welcome messages, and administrative content.', projects: ['UserDesk AI - AI-Powered User Management System'] },
  { id: 'rest', name: 'REST APIs', branch: 'backend', branches: ['frontend', 'backend'], x: 645, y: 320, tier: 'advanced', proficiency: 78, years: '1+ year overall', description: 'Resource-based APIs that connect user interfaces, services, and data.', projects: ['Palm Harvest Pro', 'Java Spring Boot + React'] },
  { id: 'php', name: 'PHP', branch: 'backend', x: 950, y: 310, tier: 'advanced', proficiency: 77, years: '1+ year overall', description: 'Server-rendered websites and custom WordPress functionality.', projects: ['MunchMix', 'Domedia client sites'] },
  { id: 'java', name: 'Java', branch: 'backend', x: 745, y: 435, tier: 'advanced', proficiency: 72, years: '1+ year overall', description: 'Object-oriented application development and backend services.', projects: ['Pet System', 'Pahana Edu', 'RentFlow'] },
  { id: 'spring', name: 'Spring Boot', branch: 'backend', x: 890, y: 425, tier: 'supporting', proficiency: 64, years: '1+ year overall', description: 'Java backend services with structured REST endpoints.', projects: ['Java Spring Boot + React', 'RentFlow'] },
  { id: 'mysql', name: 'MySQL', branch: 'backend', x: 795, y: 530, tier: 'advanced', proficiency: 74, years: '1+ year overall', description: 'Relational data modeling and queries for web applications.', projects: ['SK Salon', 'MunchMix', 'RentFlow'] },
  { id: 'mongodb', name: 'MongoDB', branch: 'backend', x: 940, y: 565, tier: 'supporting', proficiency: 60, years: '1+ year overall', description: 'Document-oriented storage for flexible application data.', projects: ['UserDesk AI - AI-Powered User Management System'] },
  { id: 'wordpress', name: 'WordPress', branch: 'backend', x: 950, y: 190, tier: 'core', proficiency: 84, years: '1+ year overall', description: 'Custom themes, plugins, and content-managed client websites.', projects: ['Domedia client sites'] },
  { id: 'woocommerce', name: 'WooCommerce', branch: 'backend', x: 950, y: 80, tier: 'advanced', proficiency: 76, years: '1+ year overall', description: 'E-commerce catalogs and order workflows built on WordPress.', projects: ['Domedia client sites'] },
  { id: 'linux', name: 'Linux (Ubuntu)', branch: 'devops', x: 740, y: 620, tier: 'supporting', proficiency: 64, years: '1+ year overall', description: 'Linux server setup and day-to-day command-line operations.', projects: ['UserDesk AI - AI-Powered User Management System'] },
  { id: 'git', name: 'Git', branch: 'devops', branches: ['backend', 'devops'], x: 650, y: 460, tier: 'advanced', proficiency: 76, years: '1+ year overall', description: 'Version control and collaboration workflows for application development.', projects: ['Portfolio repositories'] },
  { id: 'actions', name: 'GitHub Actions (CI/CD)', branch: 'devops', x: 520, y: 560, tier: 'advanced', proficiency: 72, years: '1+ year overall', description: 'Automated build and deployment workflows triggered by code changes.', projects: ['UserDesk AI - AI-Powered User Management System'] },
  { id: 'runner', name: 'Self-hosted Runner', branch: 'devops', x: 350, y: 650, tier: 'supporting', proficiency: 62, years: '1+ year overall', description: 'Running GitHub Actions jobs on the deployment server.', projects: ['UserDesk AI - AI-Powered User Management System'] },
  { id: 'docker', name: 'Docker', branch: 'devops', x: 230, y: 650, tier: 'advanced', proficiency: 72, years: '1+ year overall', description: 'Container tooling used to package and run application services.', projects: ['Palm Harvest Pro'] },
  { id: 'nginx', name: 'Nginx', branch: 'devops', x: 160, y: 580, tier: 'supporting', proficiency: 62, years: '1+ year overall', description: 'Web server and reverse proxy configuration for deployed applications.', projects: ['UserDesk AI - AI-Powered User Management System'] },
  { id: 'pm2', name: 'PM2', branch: 'devops', x: 130, y: 490, tier: 'supporting', proficiency: 62, years: '1+ year overall', description: 'Keeping Node.js services running and manageable on a server.', projects: ['UserDesk AI - AI-Powered User Management System'] },
  { id: 'aws', name: 'AWS Server Deployment', branch: 'devops', x: 75, y: 385, tier: 'advanced', proficiency: 70, years: '1+ year overall', description: 'Deploying applications to AWS-hosted Linux servers.', projects: ['UserDesk AI - AI-Powered User Management System'] },
];

export const skillEdges = [
  ['hub', 'javascript'], ['html', 'css'], ['css', 'javascript'],
  ['javascript', 'typescript'], ['typescript', 'react'], ['react', 'framer-motion'], ['react', 'nextjs'], ['react', 'vercel'],
  ['javascript', 'node'], ['node', 'rest'], ['node', 'gemini'], ['python', 'flask'], ['flask', 'rest'], ['react', 'rest'],
  ['rest', 'php'], ['php', 'wordpress'], ['wordpress', 'woocommerce'], ['rest', 'java'], ['java', 'spring'], ['spring', 'mysql'], ['mysql', 'mongodb'],
  ['rest', 'git'], ['linux', 'git'], ['git', 'actions'], ['actions', 'runner'], ['runner', 'docker'], ['docker', 'nginx'], ['nginx', 'pm2'], ['pm2', 'aws'],
];
