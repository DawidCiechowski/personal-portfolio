export const navigationLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Experience',
    path: '/experience',
  },
  {
    name: 'Skills',
    path: '/skills',
  },
  {
    name: 'Education',
    path: '/education',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
];

export const educationData = [
  {
    startYear: 2015,
    endYear: 2019,
    institution: 'Leeds Beckett University',
    role: 'Bachelor of Engineering - Computer Science',
  },
  {
    startYear: 2019,
    endYear: 2020,
    institution: 'Leeds Beckett University',
    role: 'Master of Engineering - Computer Science. Grade: 2.1.',
  },
];

export enum Icons {
  LINKEDIN = 'bx bxl-linkedin',
  GITHUB = 'bx bxl-github',
  DOWNLOAD = 'bx bx-download',
  PYTHON = 'bx bxl-python',
  TYPESCRIPT = 'bx bxl-typescript',
  POSTGRES = 'bx bxl-postgresql',
  DOCKER = 'bx bxl-docker',
  JAVA = 'bx bxl-java',
  GO = 'bx bxl-go-lang',
  JS = 'bx bxl-javascript',
  GRAPHQL = 'bx bxl-graphql',
  NODE = 'bx bxl-nodejs',
  PANDAS = 'devicon-pandas-plain',
  NUMPY = 'devicon-numpy-plain',
  FLASK = 'devicon-flask-plain',
  ANDROID = 'devicon-android-plain',
  RABBIT_MQ = 'devicon-rabbitmq-plain',
  FASTAPI = 'devicon-fastapi-plain',
  PYTEST = 'devicon-pytest-plain',
  JEST = 'devicon-jest-plain',
  MOCHA = 'devicon-mocha-plain',
  REACT = 'devicon-react-plain',
  TAILWIND = 'devicon-tailwindcss-plain',
  EXPRESS = 'devicon-express-original colored',
  MENU = 'bx bx-menu',
  MENU_LEFT = 'bx bx-menu-alt-left',
  BASH = 'devicon-bash-plain',
  FLUTTER = 'devicon-flutter-plain',
  KUBERNETES = 'devicon-kubernetes-plain',
  DJANGO = 'devicon-django-plain',
  NEXTJS = 'devicon-nextjs-plain',
  NGINX = 'devicon-nginx-plain',
  PROCESSING = 'devicon-processing-plain',
  P5JS = 'devicon-p5js-plain',
  DART = 'devicon-dart-plain',
  MATPLOTLIB = 'devicon-matplotlib-plain',
  MONGODB = 'devicon-mongodb-plain',
  CSHARP = 'devicon-csharp-plain',
  POETRY = 'devicon-poetry-plain',
  NPM = 'devicon-npm-original-wordmark colored',
  YARN = 'devicon-yarn-plain',
  GRADLE = 'devicon-gradle-plain',
  MAVEN = 'devicon-maven-plain',
  PYPI = 'devicon-pypi-plain',
  WINDOWS = 'devicon-windows11-plain',
  LINUX = 'devicon-linux-plain',
  DEBIAN = 'devicon-debian-plain',
  ARCH = 'devicon-archlinux-plain',
  MACOS = 'devicon-apple-plain',
}

export class TechStackRefs {
  static readonly GITHUB = `https://www.github.com`;
  static readonly PYTHON = `https://www.python.org`;
  static readonly TYPESCRIPT = `https://www.typescriptlang.org`;
  static readonly POSTGRES = `https://www.postgresql.org`;
  static readonly DOCKER = `https://www.docker.com`;
  static readonly JAVA = `https://www.java.com/en/`;
  static readonly GO = `https://go.dev`;
  static readonly JS = `https://developer.mozilla.org/en-US/docs/Web/JavaScript`;
  static readonly GRAPHQL = `https://graphql.org`;
  static readonly NODE = `https://nodejs.org/en`;
  static readonly PANDAS = `https://pandas.pydata.org`;
  static readonly NUMPY = `https://numpy.org`;
  static readonly FLASK = `https://flask.palletsprojects.com/en/3.0.x/`;
  static readonly ANDROID = `https://www.android.com`;
  static readonly RABBIT_MQ = `https://www.rabbitmq.com`;
  static readonly FASTAPI = `https://fastapi.tiangolo.com`;
  static readonly PYTEST = `https://docs.pytest.org/en/stable/#`;
  static readonly JEST = `https://jestjs.io`;
  static readonly MOCHA = `https://mochajs.org`;
  static readonly REACT = `https://react.dev`;
  static readonly TAILWIND = `https://tailwindcss.com`;
  static readonly EXPRESS = `https://expressjs.com`;
  static readonly BASH = `https://www.gnu.org/software/bash/`;
  static readonly FLUTTER = `https://flutter.dev`;
  static readonly KUBERNETES = `https://kubernetes.io`;
  static readonly DJANGO = `https://www.djangoproject.com`;
  static readonly NEXTJS = `https://nextjs.org`;
  static readonly NGINX = `https://nginx.org/en`;
  static readonly PROCESSING = `https://processing.org`;
  static readonly P5JS = `https://p5js.org`;
  static readonly DART = `https://dart.dev`;
  static readonly MATPLOTLIB = `https://matplotlib.org`;
  static readonly MONGODB = `https://www.mongodb.com`;
  static readonly CSHARP = `https://learn.microsoft.com/en-us/dotnet/csharp/`;
  static readonly POETRY = 'https://python-poetry.org';
  static readonly NPM = 'https://www.npmjs.com';
  static readonly YARN = 'https://yarnpkg.com';
  static readonly GRADLE = 'https://gradle.org';
  static readonly MAVEN = 'https://maven.apache.org';
  static readonly PYPI = 'https://pypi.org';
  static readonly WINDOWS = 'https://www.microsoft.com/en-us/windows?r=1';
  static readonly LINUX = 'https://www.linux.org';
  static readonly DEBIAN = 'https://www.debian.org';
  static readonly ARCH = 'https://archlinux.org';
  static readonly MACOS = 'https://www.apple.com/macos/';
}

export const skills = {
  professional: {
    title: 'Professional Experience',
    text: "Below is a list of skills, frameworks, and technologies that I've used in a professional work environment in various capacities. It is possible that I have forgotten some technologies (or couldn't find a good enough icon for them 😅), so this list is not definitive and will be updated occasionally.",
    skills: {
      programmingLanguages: [
        { icon: Icons.PYTHON, refs: TechStackRefs.PYTHON },
        { icon: Icons.TYPESCRIPT, refs: TechStackRefs.TYPESCRIPT },
        { icon: Icons.JS, refs: TechStackRefs.JS },
        { icon: Icons.JAVA, refs: TechStackRefs.JAVA },
      ],
      backend: [
        { icon: Icons.GRAPHQL, refs: TechStackRefs.GRAPHQL },
        { icon: Icons.RABBIT_MQ, refs: TechStackRefs.RABBIT_MQ },
        { icon: Icons.FLASK, refs: TechStackRefs.FLASK },
        { icon: Icons.FASTAPI, refs: TechStackRefs.FASTAPI },
        { icon: Icons.EXPRESS, refs: TechStackRefs.EXPRESS },
      ],
      frontend: [{ icon: Icons.REACT, refs: TechStackRefs.REACT }],
      databases: [{ icon: Icons.POSTGRES, refs: TechStackRefs.POSTGRES }],
      testFrameworks: [
        { icon: Icons.PYTEST, refs: TechStackRefs.PYTEST },
        { icon: Icons.JEST, refs: TechStackRefs.JEST },
        { icon: Icons.MOCHA, refs: TechStackRefs.MOCHA },
      ],
      dataScience: [
        { icon: Icons.PANDAS, refs: TechStackRefs.PANDAS },
        { icon: Icons.NUMPY, refs: TechStackRefs.NUMPY },
      ],
      mobile: [{ icon: Icons.ANDROID, refs: TechStackRefs.ANDROID }],
      container: [{ icon: Icons.DOCKER, refs: TechStackRefs.DOCKER }],
      dependencyManagement: [
        { icon: Icons.NPM, refs: TechStackRefs.NPM },
        { icon: Icons.PYPI, refs: TechStackRefs.PYPI },
        { icon: Icons.YARN, refs: TechStackRefs.YARN },
        { icon: Icons.GRADLE, refs: TechStackRefs.GRADLE },
      ],
      runtime: [{ icon: Icons.NODE, refs: TechStackRefs.NODE }],
      webServer: [{ icon: Icons.NGINX, refs: TechStackRefs.NGINX }],
      visualization: [
        { icon: Icons.MATPLOTLIB, refs: TechStackRefs.MATPLOTLIB },
      ],
      operatingSystems: [
        { icon: Icons.WINDOWS, refs: TechStackRefs.WINDOWS },
        { icon: Icons.LINUX, refs: TechStackRefs.LINUX },
        { icon: Icons.ARCH, refs: TechStackRefs.ARCH },
        { icon: Icons.DEBIAN, refs: TechStackRefs.DEBIAN },
        { icon: Icons.MACOS, refs: TechStackRefs.MACOS },
      ],
      other: [
        { icon: Icons.GITHUB, refs: TechStackRefs.GITHUB },
        { icon: Icons.BASH, refs: TechStackRefs.BASH },
      ],
    },
  },
  personal: {
    title: 'Personal Experience',
    text: "Below is a list of skills, frameworks, and technologies that I've had the opportunity to work with and learn through my personal projects and free time. Although I do not have professional hands-on experience with these, I am confident that I could use them effectively in any work environment. The technologies showcased here do not include those I have used professionally, for obvious reasons. 😄",
    skills: {
      programmingLanguages: [
        { icon: Icons.GO, refs: TechStackRefs.GO },
        { icon: Icons.DART, refs: TechStackRefs.DART },
        { icon: Icons.CSHARP, refs: TechStackRefs.CSHARP },
      ],
      backend: [],
      frontend: [
        { icon: Icons.TAILWIND, refs: TechStackRefs.TAILWIND },
        { icon: Icons.DJANGO, refs: TechStackRefs.DJANGO },
        { icon: Icons.NEXTJS, refs: TechStackRefs.NEXTJS },
      ],
      dataScience: [],
      databases: [{ icon: Icons.MONGODB, refs: TechStackRefs.MONGODB }],
      testFrameworks: [],
      mobile: [{ icon: Icons.FLUTTER, refs: TechStackRefs.FLUTTER }],
      container: [{ icon: Icons.KUBERNETES, refs: TechStackRefs.KUBERNETES }],
      dependencyManagement: [
        { icon: Icons.POETRY, refs: TechStackRefs.POETRY },
        { icon: Icons.MAVEN, refs: TechStackRefs.MAVEN },
      ],
      runtime: [],
      webServer: [],
      visualization: [
        { icon: Icons.PROCESSING, refs: TechStackRefs.PROCESSING },
        { icon: Icons.P5JS, refs: TechStackRefs.P5JS },
      ],
      operatingSystems: [],
      other: [],
    },
  },
};

export const workExperience = [
  // index: number;
  // date: string;
  // role: string;
  // companyName: string;
  // description: string;
  // techStack: Array<Icons>;
  {
    date: '2021 - 2024',
    role: 'Sr. Software Engineer - Internal',
    company: 'Mobica',
    description: [
      `Conducting Technical Interviews: I led recruitment interviews, evaluating candidates' technical skills and their fit within the team.`,
      `Developing API and Internal Chatbot Using LLaMA 2 from Meta: I worked on and enhanced APIs and a chat bot based on LLaMA 2 technology, focusing on performance optimization and user experience`,
      `Mobile UI and API test automation software.`,
    ],
    nda: true,
    techStack: [
      Icons.DOCKER,
      Icons.PYTHON,
      Icons.TYPESCRIPT,
      Icons.JAVA,
      Icons.DOCKER,
      Icons.GRAPHQL,
      Icons.BASH,
      Icons.GITHUB,
      Icons.NODE,
      Icons.FASTAPI,
      Icons.PYTEST,
      Icons.JEST,
      Icons.MOCHA,
      Icons.REACT,
      Icons.TAILWIND,
      Icons.EXPRESS,
    ],
  },
  {
    date: '2021 - 2024',
    role: 'Sr. Software Engineer & Team Lead @Meta',
    company: 'Mobica',
    description: [
      `Creation of internal software. Software architecture.`,
      `DevOps. Leading a team of four people.`,
      `Scrum master.`,
      `Business meetings, report writing, client meetings, KPIs development.`,
      `Gamification of tasks.`,
    ],
    nda: true,
    techStack: [
      Icons.DOCKER,
      Icons.GITHUB,
      Icons.PYTHON,
      Icons.TYPESCRIPT,
      Icons.JS,
      Icons.BASH,
      Icons.JAVA,
      Icons.POSTGRES,
      Icons.GRAPHQL,
      Icons.ANDROID,
      Icons.JEST,
    ],
  },
  {
    date: '2021 - 2024',
    role: 'Software Engineer @Meta',
    company: 'Mobica',
    description: [
      `Creation of internal software. Test automation.`,
      `Regression/Functional testing. Data analysis.`,
      `i18n/a11y analysis/automation.`,
    ],
    nda: true,
    techStack: [
      Icons.DOCKER,
      Icons.GITHUB,
      Icons.PYTHON,
      Icons.TYPESCRIPT,
      Icons.JS,
      Icons.BASH,
      Icons.JAVA,
      Icons.POSTGRES,
      Icons.GRAPHQL,
      Icons.ANDROID,
      Icons.PYTEST,
    ],
  },
  {
    date: '2020 - 2021',
    role: 'Python Instructor',
    company: 'IMGW',
    description: [
      `Selected to become a Python instructor after six months at the firm.`,
      `Prepared teaching materials and homework assignments, and evaluated student work.`,
      `Led weekly instructional sessions and provided ongoing support to students.`,
    ],
    nda: false,
    techStack: [Icons.PYTHON, Icons.PANDAS, Icons.NUMPY, Icons.MATPLOTLIB],
  },
  {
    date: '2020 - 2021',
    role: 'Software Developer',
    company: 'IMGW',
    description: [
      `Generated reports for various clients and automated manual tasks.`,
      `Worked extensively with API data manipulation and PostgreSQL databases for data analysis and visualization.`,
      `Implemented RabbitMQ queueing systems, Ecflow workflows, and continuous integration pipelines.`,
      `Optimized and refactored existing codebases, including migrating legacy Python 2 code to Python 3.`,
      `Operated across Windows, WSL, and Linux environments.`,
    ],
    nda: false,
    techStack: [
      Icons.DOCKER,
      Icons.PYTHON,
      Icons.MATPLOTLIB,
      Icons.POSTGRES,
      Icons.NGINX,
      Icons.BASH,
      Icons.PANDAS,
      Icons.NUMPY,
      Icons.FLASK,
      Icons.RABBIT_MQ,
      Icons.FASTAPI,
      Icons.PYTEST,
    ],
  },
];
