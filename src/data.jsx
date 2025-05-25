import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap
} from 'react-icons/fa';

import Project1 from './assets/project-1.jpg';
import Project2 from './assets/project-2.jpg';
import Project3 from './assets/project-3.jpg';
import Project4 from './assets/login-signup.jpg';
import Project5 from './assets/healthcare-dashboard.jpg';
import Project6 from './assets/secure-sight.jpg';
import Project7 from './assets/Dice Game.jpg';
import Project8 from './assets/image-editor.jpg';
import Project9 from './assets/task-board.jpg';
import Project10 from './assets/poll-spark.jpg';
import Project11 from './assets/blog-hub.jpg';

import Theme1 from './assets/blue.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/purple.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

import HTML from './assets/HTML.png';
import CSS from './assets/CSS.png';
import JavaScript from './assets/JavaScript.png';
import ReactJS from './assets/React.png';
import Bootstrap from './assets/Bootstrap.png';
import GitHub from './assets/Github.png';
import Firebase from './assets/Firebase.png';
import CoreJAVA from './assets/CoreJAVA.png';
import TailwindCSS from './assets/TailwindCSS.png';
import NodeJS from './assets/NodeJS.png';
import MongoDB from './assets/MongoDB.png';
import NextJS from './assets/NextJS.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'Name : ',
    description: 'Neha Bisht',
  },

  {
    id: 2,
    title: 'Email : ',
    description: 'nehab5314@gmail.com',
  },

  {
    id: 3,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 4,
    title: 'Languages : ',
    description: 'Hindi, English',
  },
];

export const skills = [
  {
    id: 1,
    title: 'HTML5',
    image: HTML,
    imgLink: 'https://www.w3schools.com/html/html_intro.asp',
  },

  {
    id: 2,
    title: 'CSS3',
    image: CSS,
    imgLink: 'https://www.w3schools.com/css/default.asp',
  },

  {
    id: 3,
    title: 'JavaScript',
    image: JavaScript,
    imgLink: 'https://www.w3schools.com/js/default.asp',
  },

  {
    id: 4,
    title: 'ReactJS',
    image: ReactJS,
    imgLink: 'https://react.dev/',
  },

  {
    id: 5,
    title: 'Bootstrap',
    image: Bootstrap,
    imgLink: 'https://getbootstrap.com/',
  },

  {
    id: 6,
    title: 'TailwindCSS',
    image: TailwindCSS,
    imgLink: 'https://tailwindcss.com/',
  },

  {
    id: 7,
    title: 'NodeJS',
    image: NodeJS,
    imgLink: 'https://nodejs.org/en',
  },

  {
    id: 8,
    title: 'MongoDB',
    image: MongoDB,
    imgLink: 'https://www.mongodb.com/',
  },

  {
    id: 9,
    title: 'NextJS',
    image: NextJS,
    imgLink: 'https://nextjs.org/',
  },

  {
    id: 10,
    title: 'GitHub',
    image: GitHub,
    imgLink: 'https://github.com/',
  },

  {
    id: 11,
    title: 'Firebase',
    image: Firebase,
    imgLink: 'https://firebase.google.com/',
  },

  {
    id: 12,
    title: 'Core JAVA',
    image: CoreJAVA,
    imgLink: 'https://www.java.com/en/',
  },
];

export const portfolio = [
  {
    id: 11,
    img: Project11,
    title: 'Blog Hub',
    details: 'Blog Hub is a dynamic blogging application that allows users to create, read, update, and delete blog posts with ease. Built with a responsive frontend and real-time backend integration, it delivers a smooth and interactive experience for both writers and readers. The application features user authentication, enabling personalized content management. Users can also comment on posts, fostering community engagement. The clean and modern design ensures an intuitive user experience across all devices.',
    demoProject: 'https://blog-hub-eta.vercel.app/blogs',
    gitUrl: 'https://github.com/codingpartnerNB/blog-hub.git'
  },
  {
    id: 10,
    img: Project10,
    title: 'Poll Spark',
    details: 'Engineered a full-stack web application using React.js, Node.js, Express, and MongoDB, enabling users to create, share, and vote in polls instantly. Implemented real-time vote updates using Socket.IO, allowing seamless live interaction without page refreshes. Designed a responsive and intuitive UI with React Hooks and Context API, enhancing user experience across all devices. Focused on scalability, real-time performance, and clean code architecture, making the app production-ready.',
    demoProject: 'https://poll-spark.vercel.app/',
    gitUrl: 'https://github.com/codingpartnerNB/live-poll.git'
  },
  {
    id: 9,
    img: Project9,
    title: 'TaskBoard',
    details: 'A dynamic task management web app built with React.js and Tailwind CSS, integrated with Firebase Authentication and Firestore for secure user login and real-time data storage. Users can create, update, and manage tasks across customizable boards, offering an intuitive workflow for personal or team productivity.',
    demoProject: 'https://task-board-37e3.vercel.app/',
    gitUrl: 'https://github.com/codingpartnerNB/task-board.git'
  },
  {
    id: 8,
    img: Project8,
    title: 'Image Editor',
    details: 'Developed a feature-rich image editor using ReactJS and Fabric.js, enabling users to search images via APIs like Unsplash and customize them with draggable, resizable text and shapes. Implemented debouncing for efficient, real-time image search. Added layer management and one-click download support. Designed a clean, responsive UI for smooth editing across all devices.',
    demoProject: 'https://image-editor-beta-pied.vercel.app/',
    gitUrl: 'https://github.com/codingpartnerNB/image-editor.git'
  },
  {
    id: 7,
    img: Project7,
    title: 'Dice Games',
    details: 'Dice Games is a fun and interactive project that features two classic, dice-based games: Tic Tac Toe and Snakes and Ladders. Both games incorporate the use of dice mechanics to enhance gameplay and bring a fresh twist to these timeless favorites. The project combines strategy and chance, making it engaging for players of all ages.',
    demoProject: 'https://dice-games-xi.vercel.app/',
    gitUrl: 'https://github.com/codingpartnerNB/dice-games.git'
  },
  {
    id: 6,
    img: Project6,
    title: 'Secure Sight',
    details: 'Secure Sight is a sleek, real-time security dashboard designed to monitor and visualize surveillance data efficiently. It provides users with a centralized platform to track alerts, camera feeds, and threat levels across multiple zones. Built with a responsive and intuitive UI, the dashboard delivers a seamless user experience with dynamic charts, status summaries, and actionable insights. Ideal for security teams, it enhances visibility and control, enabling faster decision-making in critical situations.',
    demoProject: 'https://secure-sight.vercel.app/',
    gitUrl: 'https://github.com/codingpartnerNB/secure-sight.git'
  },
  {
    id: 5,
    img: Project5,
    title: 'HealthCare Dashboard',
    details: 'A responsive static web dashboard built using React.js and plain CSS, designed to display key health care metrics and data insights. It features clean UI components, modern layout, and user-friendly interactions suitable for a medical or wellness-related admin panel.',
    demoProject: 'https://health-care-dashboard-nu.vercel.app/',
    gitUrl: 'https://github.com/codingpartnerNB/health-care-dashboard.git'
  },
  {
    id: 4,
    img: Project4,
    title: 'Login Signup',
    details: 'Developed a fully responsive Login and Signup page integrated with Firebase Authentication, ensuring secure user sign-in and registration. Focused on clean UI design, seamless user experience, and mobile-friendly layout across all devices.',
    demoProject: 'https://login-register-77258.web.app/login',
    gitUrl: 'https://github.com/codingpartnerNB/login-register.git'
  },
  {
    id: 3,
    img: Project3,
    title: 'Responsive Portfolio',
    details: 'Developed a fully responsive portfolio website using ReactJS, Tailwind CSS, and Framer Motion. Integrated smooth animations for an enhanced user experience. Used an external API to fetch and display dynamic data.',
    demoProject: 'https://responsive-animated-portfolio.vercel.app/',
    gitUrl: 'https://github.com/codingpartnerNB/responsive-animated-portfolio.git'
  },
  {
    id: 2,
    img: Project2,
    title: 'MailBox Client',
    details: 'The Project provides functionality of compose, send and receive mails with image attaching. In inbox there is feature to distinguish between read or unread mails. For lean code and separate of concerns Action creators are used to sending API request and dispatching actions.',
    demoProject: 'https://mail-box-288ad.web.app',
    gitUrl: 'https://github.com/codingpartnerNB/mail-box.git'
  },
  {
    id: 1,
    img: Project1,
    title: 'Expense Traker',
    details: 'The Project implements user specific expense management features. Playing with custom categories, filter by categories , toggle theme mode and user verification. User can download expenses in csv file feature created using BLOB object.',
    demoProject: 'https://expense-track-ddb59.web.app',
    gitUrl: 'https://github.com/codingpartnerNB/expense-track.git'
  },
  
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2024 - PRESENT',
    title: 'Software Developer <span> Infusion pvt ltd </span>',
    desc: 'Currently working as a Software Developer at Infusion pvt ltd, focusing on developing and maintaining web applications using modern technologies. Collaborating with cross-functional teams to deliver high-quality software solutions that meet client requirements and enhance user experience.'
  },
  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2024',
    title: 'Web Developer Intern <span> Safe Ledger Private Limited </span>',
    desc: 'Completed a Web Developer Internship at Safe Ledger Private Limited, where I gained hands-on experience in developing web applications using ReactJS and NextJS. Contributed to various projects, enhancing my skills in front-end development, and collaborating with senior developers to implement best practices.'
  },
  {
    id: 3,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019 - 2023',
    title: 'Bachelor of Technology in Computer Science <span> Maharishi Dayanand University </span>',
    desc: 'Graduated with a Bachelor of Technology in Computer Science from Maharishi Dayanand University, where I developed a strong foundation in software development, algorithms, and data structures. Engaged in various projects that honed my programming skills and prepared me for a career in technology.'
  }
]
