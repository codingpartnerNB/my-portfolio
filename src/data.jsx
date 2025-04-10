import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
} from 'react-icons/fa';

import Project1 from './assets/project-1.jpg';
import Project2 from './assets/project-2.jpg';
import Project3 from './assets/project-3.jpg';
import Project4 from './assets/login-signup.jpg';
import Project5 from './assets/Dice Game.jpg';

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
    title: 'GitHub',
    image: GitHub,
    imgLink: 'https://github.com/',
  },

  {
    id: 7,
    title: 'Firebase',
    image: Firebase,
    imgLink: 'https://firebase.google.com/',
  },

  {
    id: 8,
    title: 'Core JAVA',
    image: CoreJAVA,
    imgLink: 'https://www.java.com/en/',
  },
];

export const portfolio = [
  {
    id: 5,
    img: Project5,
    title: 'Dice Games',
    details: 'Dice Games is a fun and interactive project that features two classic, dice-based games: Tic Tac Toe and Snakes and Ladders. Both games incorporate the use of dice mechanics to enhance gameplay and bring a fresh twist to these timeless favorites. The project combines strategy and chance, making it engaging for players of all ages.',
    demoProject: 'https://dice-games-xi.vercel.app/',
    gitUrl: 'https://github.com/codingpartnerNB/dice-games.git'
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
    details: 'The Project is fully responsive with animation effect.',
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
