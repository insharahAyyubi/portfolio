import { v4 as uuidv4 } from 'uuid';

const education = [
  {
    institute: "Jamia Millia Islamia",
    degree: "B.Tech in Computer Engineering",
    duration: "2021-2025",
    grade: "9.17",
    img: "./jamia.png",
    points: [
      "▸ Strong hold on core subjects like OS, DBMS, CN, OOPS, DSA etc",
      "▸ Been awarded the Merit Scholarship for 2021, 2022, 2023.",
    ],
  },
  {
    institute: "Regency Public School",
    degree: "Schooling till Class XII",
    duration: "2003-2019",
    grade: "95%",
    img: "./regency.png",
    points: [
      "▸ Active participation in extra-curricular activities.",
      "▸ Among top 3 Rank Holders in Class X and XII.",
    ],
  },
];

const certificates = [
  {
    title: "AI Fundamentals",
    company: "IBM",
    img: "./ibm.webp",
  },
  {
    title: "Web Development",
    company: "Udemy",
    img: "./udemy.png",
  },
  {
    title: "Machine Learning",
    company: "Coding Blocks",
    img: "./cd.jpg",
  },
  {
    title: "Cloud Basics",
    company: "Google",
    img: "./g_cloud.jpg",
  },
  {
    title: "Digital Marketing",
    company: "JMI",
    img: "./jamia.jpg",
  },
];

const experience = [
  {
    acc_title: "Internships",
    exp: [
      {
        company: "Zetpeak",
        position: "Web Development Intern",
        duration: "Jun 2023 - Aug 2023",
        location: "Work from Home",
        img: "./zetpeak.png",
        points: [
          "▸ Developed the core site of the startup using HTML, CSS, and JavaScript.",
          "▸ Implemented smooth animations across the website and improved UI.",
          "▸ Debugging frontend to fix major issues and bugs.",
        ],
      },
      {
        company: "Dept. of Computer Engineering",
        position: "Frontend Intern",
        duration: "Sept 2023 - Dec 2023",
        location: "New Delhi, India",
        img: "./jamia.png",
        points: [
          "▸ Developed a responsive and interactive website in React.",
          "▸ Performed code reviews and implemented feedback to improve code quality.",
        ],
      },
    ],
  },
  {
    acc_title: "Volunteerships",
    exp: [
      {
        company: "Google Developer Students Club",
        position: "Lead",
        duration: "Jul 2023 - Jul 2024",
        location: "New Delhi, India",
        img: "./gdsc-logo.png",
        points: [
          "▸ Managed technical events smoothly, collaborating and leading core teams.",
          "▸ Conducted workshops about the latest development technologies.",
        ],
      },
      {
        company: "E-Cell",
        position: "Research Associate",
        duration: "Nov 2021 - Nov 2022",
        location: "New Delhi, India",
        img: "./ecell.png",
        points: [
          "▸ Conducted case studies analyzing the growth of emerging startups.",
          "▸ Authored in-depth articles on the latest trends in the entrepreneurial landscape.",
        ],
      },
    ],
  },
  {
    acc_title: "Extracurricular Activities",
    exp: [
      {
        company: "Upwork",
        position: "Voiceover Artist",
        duration: "Nov 2021 - Present",
        location: "Remote",
        img: "./upwork.png",
        points: [
          "▸ Worked with 20+ clients worldwide with a 100% job success rate.",
          "▸ Completed several voice-over projects for various websites, apps, and YouTube.",
        ],
      },
    ],
  },
];

const personal_projects = [
  {
    id: uuidv4(),
    title: "Portfolio",
    description: "A personal website showcasing my skills and experience.",
    tech: ["React", "Tailwind", "Framer Motion"],
    created: "01-07-24",
    link: "https://github.com/insharahAyyubi/portfolio",
  },
  {
    id: uuidv4(),
    title: "Petlify",
    description:
      "A full stack project for browsing and adopting stray cats and dogs seamlessly.",
    tech: ["MySQL", "NodeJs", "HTML", "CSS", "JS"],
    created: "01-04-2023",
    link: "https://github.com/insharahAyyubi/petAdoption",
  },
  {
    id: uuidv4(),
    title: "Book Store",
    description:
      "A MERN Stack project for browsing through a variety of books.",
    tech: ["React", "MongoDB", "NodeJS"],
    created: "08-07-24",
    link: "https://github.com/insharahAyyubi/Book-Store",
  },
  {
    id: uuidv4(),
    title: "Career Compass",
    description:
      "Integrated IBM Chatbot into a React app that answers queries regarding career choices.",
    tech: ["React", "IBM Watson Chatbot"],
    created: "03-07-24",
    link: "https://github.com/insharahAyyubi/ibm_chatbot",
  },
  {
    id: uuidv4(),
    title: "Tic-Tac-Toe",
    description:
      "Build the game with an appealing UI and other features.",
    tech: ["HTML", "CSS", "JS"],
    created: "05-11-2022",
    link: "https://github.com/insharahAyyubi/tic_tac_toe",
  },
  {
    id: uuidv4(),
    title: "Weather App",
    description:
      "A simple weather app that fetches data from OpenWeatherMap API.",
    tech: ["HTML", "CSS", "JS"],
    created: "10-06-23",
    link: "https://github.com/insharahAyyubi",
  },
  {
    id: uuidv4(),
    title: "Invest Cal",
    description:
      "A simple app for calculating yearly interest and savings.",
    tech: ["React"],
    created: "15-07-23",
    link: "https://github.com/insharahAyyubi/interestCalc",
  },
];

const collab_projects = [
  {
    id: uuidv4(),
    title: "Zetpeak",
    description: "Created the landing page and added animations using Intersection Observer API.",
    tech: ["HTML", "CSS", "JS"],
    created: "06-06-23",
    link: "https://github.com/insharahAyyubi/Zetpeak_Website",
  },
  {
    id: uuidv4(),
    title: "Computer Engg. Website",
    description:
      "Build the placement and developer pages, with appealing UI.",
    tech: ["React"],
    created: "03-11-2023",
    link: "https://github.com/insharahAyyubi/comp-engg",
  },
  {
    id: uuidv4(),
    title: "RCA Website",
    description:
      "Build the frontend of the website, for a coaching academy.",
    tech: ["React"],
    created: "25-07-23",
    link: "https://github.com/RCA-JMI/frontend",
  },
  {
    id: uuidv4(),
    title: "MyExpense",
    description:
      "Buil the landing page of the project with multiple interactive sections.",
    tech: ["HTML", "CSS", "JS"],
    created: "23-07-2023",
    link: "https://github.com/insharahAyyubi/GammaSquad",
  },
];

export { education, certificates, experience, personal_projects, collab_projects };
