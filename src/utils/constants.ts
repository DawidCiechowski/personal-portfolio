export const navigationLinks = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Experience",
            path: "/experience"
        },
        {
            name: "Skills",
            path: "/skills"
        },
        {
            name: "Education",
            path: "/education"
        },
        {
            name: "Projects",
            path: "/projects"
        },
        {
            name: "Contact",
            path: "/contact"
        },
        {
            name: "Blog",
            path: "/blog"
        },
    ];

export const educationData = [
    {
        startYear: 2015,
        endYear: 2019,
        institution: "Leeds Beckett University",
        role: "Bachelor of Engineering - Computer Science"
    }, 
    {
        startYear: 2019,
        endYear: 2020,
        institution: "Leeds Beckett University",
        role: "Master of Engineering - Computer Science. Grade: 2.1."
    }, 
]


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
    EXPRESS = 'devicon-express-plain',
}

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
            `Mobile UI and API test automation software.`],
        nda: true,
        techStack: [
            Icons.DOCKER, Icons.PYTHON, Icons.TYPESCRIPT, Icons.JAVA, Icons.DOCKER, Icons.GRAPHQL, Icons.GITHUB, Icons.NODE, Icons.FASTAPI, Icons.PYTEST, Icons.JEST, Icons.MOCHA, Icons.REACT, Icons.TAILWIND, Icons.EXPRESS
        ]
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
            `Gamification of tasks.`
        ],
        nda: true,
        techStack: [
            Icons.DOCKER, Icons.GITHUB, Icons.PYTHON, Icons.TYPESCRIPT, Icons.JS, Icons.JAVA, Icons.POSTGRES, Icons.GRAPHQL, Icons.ANDROID, Icons.JEST
        ]
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
            Icons.DOCKER, Icons.GITHUB, Icons.PYTHON, Icons.TYPESCRIPT, Icons.JS, Icons.JAVA, Icons.POSTGRES, Icons.GRAPHQL, Icons.ANDROID, Icons.PYTEST
        ]
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
        nda: true,
        techStack: [
            Icons.PYTHON, Icons.PANDAS, Icons.NUMPY
        ]
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
            `Operated across Windows, WSL, and Linux environments.`
        ],
        nda: false,
        techStack: [
            Icons.DOCKER, Icons.PYTHON, Icons.POSTGRES, Icons.PANDAS, Icons.NUMPY, Icons.FLASK, Icons.RABBIT_MQ, Icons.FASTAPI, Icons.PYTEST
        ]
    },
]
