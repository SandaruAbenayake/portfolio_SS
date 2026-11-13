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
  resumeUrl: 'https://drive.google.com/file/d/1eddFlGzP1jVcoAiIaXKRxwjs3LUp9REd/view?usp=sharing', // drop a resume.pdf into /public, or change this link
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
      out: 'Full Stack Developer who builds fast, scalable web platforms from database to deployment. I work with React, Next.js, Node.js, Spring Boot and PHP, create custom WordPress and WooCommerce solutions, and ship API-driven applications backed by MySQL and MongoDB. I also deploy and automate releases to AWS-hosted servers with GitHub Actions CI/CD, taking projects from code to a live server cleanly. Focused on clean code, performance and a smooth user experience.',
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
  { name: 'AWS Server Deployment', color: 'amber' },
  { name: 'GitHub Actions (CI/CD)', color: 'green' },
  { name: 'Self-hosted Runner', color: 'green' },
  { name: 'Nginx', color: 'cyan' },
  { name: 'PM2', color: 'magenta' },
  { name: 'Linux (Ubuntu)', color: 'red' },
];

// --- Experience (rendered as a git log) -------------------------------------
export const experience = [
  {
    hash: 'f6b7e8c',
    head: true,
    company: 'Freelance',
    period: 'April 2026 — Present',
    title: 'Freelance Full Stack Developer',
    description:
      'Building websites and web applications for clients using React, Next.js, Node.js, PHP, WordPress, and MySQL. Handling requirements, development, deployment, and ongoing maintenance, and adjusting scope based on direct client feedback.',
    stack: ['React', 'Next.js', 'Node.js', 'PHP', 'WordPress', 'MySQL', 'Tailwind CSS'],
    insertions: 0,
    deletions: 0,
    files: 0,
  },
  {
    hash: 'e5a6d7b',
    head: false,
    company: 'Domedia',
    period: 'January 2026 — July 2026',
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
    name: 'UserDesk AI - AI-Powered User Management System',
    visibility: 'Public',
    category: 'Personal Project',
    status: 'In Progress',
    description:
      'Developed and deployed an AI-powered user management REST API using Node.js, Express.js and MongoDB Atlas, integrating the Google Gemini API for AI-powered profile summaries, personalized welcome messages and administrative content generation. Deployed the backend on an Ubuntu AWS EC2 instance with PM2 and Nginx as a reverse proxy, with a React frontend hosted on Vercel. Automated deployments with a GitHub Actions CI/CD pipeline using a self-hosted runner on EC2.',
    stack: ['React', 'Vite', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Google Gemini API', 'AWS EC2', 'Ubuntu Linux', 'GitHub Actions', 'PM2', 'Nginx', 'Vercel'],
    language: 'JavaScript',
    languageColor: '#f1e05a',
    stars: 0,
    forks: 0,
    repo: 'https://github.com/UserDeskAI',
    demo: '#',
    pinned: true,
  },
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
    name: 'RentFlow',
    visibility: 'Public',
    category: 'SaaS Project · Self Learning',
    status: 'Ongoing',
    description:
      'A white-label, multi-tenant vehicle-rental SaaS platform in active development. It brings fleet management, bookings, payments, subscriptions, and role-based dashboards for owners, employees, and customers into one unified system.',
    stack: ['React', 'Java', 'Spring Boot', 'MySQL', 'Multi-tenancy', 'RBAC', 'Payments'],
    language: 'Java',
    languageColor: '#b07219',
    stars: 0,
    forks: 0,
    repo: 'https://github.com/Saas-Rent',
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
    title: "CI/CD with GitHub Actions on AWS EC2: A Beginner's Step-by-Step Guide (Node.js + Nginx + PM2)",
    excerpt: 'I’ll take a small Node.js app from a manual EC2 deployment to an automatic release every time you push to GitHub. We’ll build the path one piece at a time, explain every command, and finish with a live app behind Nginx.',
    date: '13 Nov 2026',
    readTime: '12 min',
    tags: ['AWS', 'EC2', 'Linux', 'Nginx', 'PM2', 'CI/CD', 'GitHub Actions'],
    blocks: [
      { type: 'heading', id: 'intro', text: 'Before we begin' },
      { type: 'paragraph', text: 'CI/CD sounds like a big-company phrase, but the idea is simple: when you change your code, a repeatable process checks it and delivers it to the place people use it. Continuous integration (CI) is the automated part that prepares and checks changes. Continuous delivery or deployment (CD) is the part that gets those changes onto a server. In this guide, I’ll use “CI/CD” for the whole trip.' },
      { type: 'paragraph', text: 'We’ll start with a small Node.js and Express app. First, we’ll connect to an Ubuntu server and run it by hand so every piece makes sense. Then we’ll put PM2 in charge of keeping it alive, put Nginx in front of it, and let a GitHub Actions runner on the server update it after a push to main. After the first setup, publishing a change becomes a push and a short wait.' },
      { type: 'paragraph', text: 'You need an AWS account, a GitHub repository containing a working app, and a computer with SSH available. You also need a card on file for AWS even if you expect to stay within free usage. I’ll use YOUR_REPO and YOUR_PUBLIC_IP as placeholders. Replace them with your own values; never paste a private key, token, or password into a workflow or public repository.' },
      { type: 'callout', tone: 'tip', title: 'Tip · Start small', text: 'This walkthrough is for a learning project. Keep your Node dependencies current, use a limited AWS account, and do not put sensitive production data on a tiny practice server.' },
      { type: 'heading', id: 'overview', text: 'The finished path' },
      { type: 'paragraph', text: 'A push starts the chain. GitHub assigns the job to the runner you installed on EC2. The runner checks out the new code and installs production dependencies. PM2 restarts the Node process, and Nginx continues receiving browser traffic on the normal web port before passing it to the app on a local port.' },
      { type: 'diagram' },
      { type: 'callout', tone: 'what', title: 'What this does', text: 'The runner is a small worker process that waits for jobs from your repository. It is not a public website and does not replace EC2; it gives GitHub Actions a way to run deployment commands on that EC2 machine.' },
      { type: 'heading', id: 'launch-ec2', text: 'Step 1 — Launch an EC2 instance' },
      { type: 'paragraph', text: 'In the AWS console, open EC2 and choose Launch instance. Give it a recognizable name such as userdesk-api. For the operating system, select an Ubuntu Server LTS image. For a learning API, a t2.micro or t3.micro can be a reasonable starting size if your account and region offer it within a free allowance. Free tier terms change, so check the pricing shown for your account before launching.' },
      { type: 'paragraph', text: 'Create a new key pair, choose a format supported by your SSH client, and download it once. AWS does not keep a copy you can download later. Store it somewhere private on your own machine; the .pem file is effectively the key to your server. Choose a security group that allows SSH from your current IP and web traffic on ports 80 and 443. We’ll serve plain HTTP first and can add HTTPS later.' },
      { type: 'mockup', variant: 'launch', screenshot: '' },
      { type: 'paragraph', text: 'Before you launch, review the summary for the image, size, key pair, and network rules. A micro instance has limited memory, so it is suited to a small demonstration rather than heavy traffic. Click Launch instance and wait until the instance state is Running and its status checks pass.' },
      { type: 'mockup', variant: 'rules', screenshot: '' },
      { type: 'callout', tone: 'warning', title: 'Warning · Limit SSH access', text: 'Avoid opening port 22 to everyone (0.0.0.0/0). Set the source to your current IP where possible. Do not share the downloaded private key, and do not commit it to Git.' },
      { type: 'heading', id: 'ssh', text: 'Step 2 — Connect over SSH' },
      { type: 'paragraph', text: 'From your local computer, move to the folder where you saved the key. SSH refuses keys that other users can read, so chmod 400 changes the file permissions to owner-read-only. Then connect as ubuntu, the default login name for many Ubuntu EC2 images. Use the public IPv4 address shown for your instance.' },
      { type: 'code', label: '[Local machine]', code: 'chmod 400 your-key.pem\nssh -i your-key.pem ubuntu@YOUR_PUBLIC_IP' },
      { type: 'paragraph', text: 'The first time you connect, SSH asks whether you trust the host key. Type yes only after checking that you are connecting to your own instance. Once logged in, run a few harmless checks. whoami confirms the account, hostname shows the machine name, and pwd shows the current directory. Ubuntu normally starts you in /home/ubuntu.' },
      { type: 'code', label: '[EC2 server]', code: 'whoami\nhostname\npwd\nuname -a' },
      { type: 'mockup', variant: 'instance', screenshot: '' },
      { type: 'heading', id: 'linux', text: 'Step 3 — A small Linux survival kit' },
      { type: 'paragraph', text: 'You do not need to memorize Linux before deploying an app. These are the commands I reach for most often. Commands that change system files or install software usually need sudo, which asks Linux to run that one command with administrator privileges.' },
      { type: 'list', items: ['pwd prints the folder you are currently in. ls lists its files; ls -la also shows hidden files and permissions.', 'cd folder-name moves into a folder. cd .. goes up one level. mkdir app creates a new folder.', 'nano filename opens a small terminal text editor. Save with Ctrl+O, Enter, then exit with Ctrl+X. cat filename prints a file to the terminal.', 'sudo apt update refreshes Ubuntu’s package list; sudo apt upgrade installs available updates. Update the list before installing packages.', 'chmod changes file permissions. chown changes which user owns a file. Use both carefully, because incorrect ownership can stop services from reading their files.', 'systemctl status nginx checks a system service. ps aux lists running processes. df -h shows disk space in readable units.', 'tail -f /var/log/nginx/error.log follows new log lines live. Press Ctrl+C to stop following the file.'] },
      { type: 'code', label: '[EC2 server]', code: 'pwd\nls -la\nmkdir -p ~/apps\ncd ~/apps\nsudo apt update\nsudo apt upgrade -y\ndf -h' },
      { type: 'callout', tone: 'what', title: 'What this does', text: 'The -y option answers yes to package-manager prompts. It is convenient for a tutorial, but read package changes on important servers before accepting them.' },
      { type: 'heading', id: 'node-git', text: 'Step 4 — Install Node.js and Git' },
      { type: 'paragraph', text: 'I use nvm (Node Version Manager) because it lets the ubuntu account install and switch Node versions without changing system-wide files. Install nvm from its official project instructions, then open a fresh shell or load the shell profile it adds. Pin the same Node major version your project uses. The commands below install Node 22 as an example; choose a supported version that matches your app.' },
      { type: 'code', label: '[EC2 server · after installing nvm from its official instructions]', code: 'nvm install 22\nnvm use 22\nnvm alias default 22\nsudo apt install -y git\nnode --version\nnpm --version\ngit --version' },
      { type: 'paragraph', text: 'The version commands should print version numbers. npm comes with Node and installs the packages your app declares. Git downloads the source repository and later helps the runner receive new versions.' },
      { type: 'heading', id: 'clone-app', text: 'Step 5 — Clone and run the app manually' },
      { type: 'paragraph', text: 'Before automating a deployment, I like to prove the server can run the app by hand. Replace the repository address with your own. npm install reads package.json and downloads dependencies. If your project has a package-lock.json, npm ci is better for repeatable deployments; we’ll use that in the workflow.' },
      { type: 'code', label: '[EC2 server]', code: 'cd ~/apps\ngit clone https://github.com/YOUR_ORG/YOUR_REPO.git userdesk-api\ncd userdesk-api\nnpm install\n' },
      { type: 'paragraph', text: 'If your app needs configuration, create a local .env file and add the values it expects. Keep it out of Git with .gitignore. For example, if the app uses dotenv, it may read PORT and a database connection string from this file. The sample below is deliberately incomplete: use your own values, and never put a real secret in a screenshot or tutorial.' },
      { type: 'code', label: '[EC2 server · userdesk-api/.env]', code: 'PORT=3000\nDATABASE_URL=replace-with-your-private-value' },
      { type: 'code', label: '[EC2 server]', code: 'node app.js' },
      { type: 'paragraph', text: 'Leave that command running and, in a second SSH window, test the app locally with curl http://127.0.0.1:3000 (change the port if your app uses another one). A response means Node is listening. Stop the foreground process with Ctrl+C; PM2 will take over in the next step. If your entry file has another name, use that instead of app.js.' },
      { type: 'heading', id: 'pm2', text: 'Step 6 — Keep Node running with PM2' },
      { type: 'paragraph', text: 'A foreground process ends when the shell closes. PM2 is a process manager: it can keep the app running, restart it after a crash, and start it again after a server reboot. Install it globally for the current Node version, start the app with a memorable process name, and check its status.' },
      { type: 'code', label: '[EC2 server]', code: 'npm install -g pm2\ncd ~/apps/userdesk-api\npm2 start app.js --name userdesk-api\npm2 list\npm2 logs userdesk-api' },
      { type: 'paragraph', text: 'The list command should show userdesk-api as online. Logs are useful when a process exits immediately or cannot read configuration. Press Ctrl+C to leave the live log view. PM2 can generate a startup command for your user and system; run the command it prints, then save the current process list.' },
      { type: 'code', label: '[EC2 server]', code: 'pm2 startup\npm2 save' },
      { type: 'callout', tone: 'tip', title: 'Tip · Environment variables', text: 'If your app relies on shell variables, PM2 may not inherit them after a reboot. Keep application configuration in a private .env file or an ecosystem file, then restart with --update-env when you deliberately change environment values.' },
      { type: 'heading', id: 'nginx', text: 'Step 7 — Put Nginx in front of the app' },
      { type: 'paragraph', text: 'Node is listening on port 3000, but visitors should use the normal web address without adding a port. Nginx listens on port 80 and forwards requests to the app on localhost. This is called a reverse proxy. Install Nginx, then create a site configuration.' },
      { type: 'code', label: '[EC2 server]', code: 'sudo apt install -y nginx\nsudo nano /etc/nginx/sites-available/userdesk-api' },
      { type: 'paragraph', text: 'Paste this server block into nano. The proxy headers pass the original host and visitor details to Express. The trailing slash on proxy_pass is not required here because we are forwarding the same request path.' },
      { type: 'code', label: '[EC2 server · /etc/nginx/sites-available/userdesk-api]', code: 'server {\n    listen 80;\n    server_name _;\n\n    location / {\n        proxy_pass http://127.0.0.1:3000;\n        proxy_http_version 1.1;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto $scheme;\n    }\n}' },
      { type: 'paragraph', text: 'Enable the site by linking it into Nginx’s enabled folder. Remove the default site link so it does not catch the request first. nginx -t checks the configuration syntax without applying it. Reload only after it says the test is successful.' },
      { type: 'code', label: '[EC2 server]', code: 'sudo ln -s /etc/nginx/sites-available/userdesk-api /etc/nginx/sites-enabled/userdesk-api\nsudo rm /etc/nginx/sites-enabled/default\nsudo nginx -t\nsudo systemctl reload nginx\nsudo systemctl status nginx' },
      { type: 'paragraph', text: 'Now open http://YOUR_PUBLIC_IP in a browser. The security group must allow port 80, and PM2 must show the app online. This first test is HTTP; add a domain and HTTPS before collecting real user data or credentials.' },
      { type: 'callout', tone: 'warning', title: 'Warning · HTTPS matters', text: 'Do not send login credentials or private user data over plain HTTP. For a public application, point a domain at the instance and configure TLS before real users depend on it.' },
      { type: 'heading', id: 'runner', text: 'Step 8 — Register a GitHub self-hosted runner' },
      { type: 'paragraph', text: 'A self-hosted runner is an agent that runs workflow jobs on a machine you control. In your GitHub repository, open Settings → Actions → Runners → New self-hosted runner. Choose Linux and x64. GitHub displays commands containing a short-lived registration token. Follow the commands shown on that page exactly; the token is personal and should never be copied into a public post.' },
      { type: 'mockup', variant: 'runner', screenshot: '' },
      { type: 'paragraph', text: 'The instructions download and configure the runner in a folder. Run the configuration command from that folder while logged in as the same ubuntu user who owns the app. Use the repository URL requested by the setup wizard. When it asks for a runner name, choose something recognizable, such as userdesk-ec2. Then install and start it as a service so it returns after a reboot.' },
      { type: 'code', label: '[EC2 server · from the runner folder]', code: './config.sh --url https://github.com/YOUR_ORG/YOUR_REPO --token YOUR_ONE_TIME_TOKEN\nsudo ./svc.sh install ubuntu\nsudo ./svc.sh start\n./svc.sh status' },
      { type: 'paragraph', text: 'The config command and token are generated by GitHub for your repository; do not reuse the placeholder above. Back in the Runners page, wait for the runner to show Idle. Idle means it is online and waiting for a job. Since a self-hosted runner executes your workflow code on your server, only allow trusted contributors to run workflows against it.' },
      { type: 'heading', id: 'workflow', text: 'Step 9 — Write the deployment workflow' },
      { type: 'paragraph', text: 'In your repository, create .github/workflows/deploy.yml. The example assumes your app’s package.json and app.js are at the repository root, your ubuntu user has already configured PM2, and the runner uses the same stable checkout directory. The checkout clean option is disabled here so a private, ignored .env file in that workspace is not deleted between deployments; an external secret store is a better fit for production.' },
      { type: 'code', label: '[Local machine · .github/workflows/deploy.yml]', code: 'name: Deploy\n\non:\n  push:\n    branches: [main]\n\npermissions:\n  contents: read\n\njobs:\n  deploy:\n    runs-on: self-hosted\n    steps:\n      - name: Check out the latest code\n        uses: actions/checkout@v4\n        with:\n          clean: false\n\n      - name: Set up Node.js\n        uses: actions/setup-node@v4\n        with:\n          node-version: 22\n\n      - name: Install locked dependencies\n        run: npm ci\n\n      - name: Restart the app with PM2\n        run: pm2 restart userdesk-api --update-env' },
      { type: 'paragraph', text: 'The on section limits runs to pushes on main, and permissions gives the workflow read-only access to repository contents. runs-on: self-hosted sends the job to your EC2 runner. checkout fetches the pushed files; clean: false preserves ignored local files in the runner workspace. setup-node selects Node 22, npm ci installs exactly what the lock file describes, and the last command asks PM2 to restart the named process with its current environment.' },
      { type: 'callout', tone: 'warning', title: 'Warning · Protect the runner', text: 'A self-hosted runner is powerful: a workflow can run shell commands as its service user. Do not run untrusted pull requests on it. Use branch protections and limit who can push to main. For stronger isolation, deploy through a separate restricted user or a dedicated build-and-deploy setup.' },
      { type: 'mockup', variant: 'workflow', screenshot: '' },
      { type: 'heading', id: 'test', text: 'Step 10 — Test an automatic deployment' },
      { type: 'paragraph', text: 'Make a harmless visible change, such as updating a homepage message. Commit it and push to main. Open the Actions tab in GitHub and select the Deploy run. You should see the runner pick up the job, checkout complete, npm ci finish, and the PM2 restart step turn green. Refresh the browser once the job succeeds.' },
      { type: 'code', label: '[Local machine]', code: 'git add .\ngit commit -m "Update homepage message"\ngit push origin main' },
      { type: 'paragraph', text: 'If the page does not change, check that you edited the file the app actually serves and that Nginx still points to the expected port. A successful workflow means the commands completed; it does not automatically prove every feature works. Add tests to the workflow as the app grows.' },
      { type: 'heading', id: 'troubleshooting', text: 'Common problems and fixes' },
      { type: 'list', items: ['Permission denied while connecting: check the key path, use chmod 400 on the key, confirm the ubuntu username, and make sure port 22 allows your current IP.', 'The browser cannot reach port 80: check the instance public IP, security group inbound rule, and Nginx status with sudo systemctl status nginx.', '502 Bad Gateway: Nginx is reachable but cannot talk to Node. Check pm2 list, pm2 logs userdesk-api, and confirm both services use the same port.', 'Runner offline: check ./svc.sh status from the runner directory. Restart with sudo ./svc.sh start and confirm the instance still has internet access.', 'Variables missing after a PM2 restart: confirm the app loads its .env from the expected directory and restart with --update-env. Check logs without printing secrets into the Actions output.', 'The deploy job fails on npm ci: commit package-lock.json and make sure it matches package.json. npm ci intentionally errors when they disagree.'] },
      { type: 'heading', id: 'cleanup', text: 'Cleanup and cost checks' },
      { type: 'paragraph', text: 'When you are done practicing, stop or terminate the instance from the EC2 console. Stopping usually preserves its disk but may release its public IPv4 address; terminating removes the instance and can remove attached storage depending on the settings. Check what will be deleted before confirming. An Elastic IP can have charges when it is allocated but not associated with a running instance. Review current AWS pricing and your Free Tier usage dashboard rather than assuming a micro server is always free.' },
      { type: 'callout', tone: 'tip', title: 'Tip · Check the whole bill', text: 'Look at compute hours, EBS storage, public IPv4, snapshots, and data transfer. Set a billing alert early. A small instance is not the only thing that can create a charge.' },
      { type: 'heading', id: 'next', text: 'What I would add next' },
      { type: 'paragraph', text: 'Once the basic deployment feels comfortable, I would connect a domain and add HTTPS with Let’s Encrypt, run automated tests before restarting PM2, and consider Docker to make the runtime environment more repeatable. For busy apps, a zero-downtime release can start a new process before retiring the old one. Each is a useful next step, but none is required to understand this first pipeline.' },
      { type: 'heading', id: 'closing', text: 'A push is now a deployment' },
      { type: 'paragraph', text: 'The first deployment had several pieces, but each one has a clear job: EC2 provides the machine, Linux runs the tools, PM2 watches Node, Nginx receives web traffic, and GitHub Actions repeats the update steps. The payoff is that you do not have to SSH in and remember every command for each release. Push a change, watch the run, and verify the result.' },
      { type: 'link', href: 'https://github.com/UserDeskAI', text: 'Explore my projects at github.com/UserDeskAI' },
    ],
  },
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
