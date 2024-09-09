import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  pyIcon,
  CodeMinds,
  avatar,
  phpIcon,
  arrowIcon,
  dsaIcon,
  problemSolvingIcon,
  umlIcon,
  dbmsIcon,
  web,
  checkers,
  blog,
  analyzer,
  python
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  pyIcon,
  avatar,
  arrowIcon
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hey there, I'm happy to see you here!",

		"Hola, I'm Soe Lwin Htun, a 25-year-old computer science graduate and a software engineer with a passion for development, problem-solving, algorithms, and AI.",
    "Beyond my professional pursuits, I am a chess player, an avid reader, a film geek, and an anime enjoyer. My problem-solving skills and understanding of software engineering theories are some of my key strengths.",
    "I am always eager to collaborate with individuals and teams who share my enthusiasm for creating remarkable experiences. Thank you for visiting my portfolio!"
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: "CodeMinds",
    description: ' a modern and interactive platform designed to enhance your coding experience. With features like an algorithm visualizer, code playground, and quiz challenges',
    image: CodeMinds,
    demo_link: 'https://codeminds-slh.netlify.app',
  },
  {
    name: "Polymaths's Society",
    description: 'A nextJS blog featuring different articles written by me as a hobby.',
    image: blog,
    demo_link: 'https://slh-blog.vercel.app/',
  },
  {
    name: 'Secure Coding: Web Development',
    description: 'The aim of this project was to develop educational resource for amateur web developers focusing on secure coding principles in the context of web application development.',
    image: web,
    source_code_link: 'https://github.com/bl33h/connectFour',
  },
  {
    name: 'Checkers with Minimax algorithm',
    description: 'A classic checkers game featuring AI opponent with minimax algorithm.',
    image: checkers,
    source_code_link: 'https://github.com/bl33h/clientServerChat',
  },
  {
    name: 'PHP Code Analyzer',
    description: 'A simple PHP code analyzer command line interface written in python to detect vulnerabilities in PHP codes.',
    image: analyzer,
  },
  {
    name: 'Simple Python projects',
    description: 'Simple pure python projects for practice purpose, ranging from beginner to intermediate',
    image: python,
    source_code_link: 'https://github.com/SoeLwinHtun/PythonProjects',
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description:
      'I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description:
    'I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
    'I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.',
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
    description:
      'I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.',
  },
  {
    id: 'java',
    title: 'Java',
    icon: javaIcon,
    description:
      'I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures.',
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.',
  },
  {
    id: 'psql',
    title: 'Postgresql',
    icon: psqlIcon,
    description:
      'I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.',
  },
  {
    id: 'py',
    title: 'Python',
    icon: pyIcon,
    description:
      'With 3 years of Python experience, I am adept at coding functions and creating graphic interfaces using Tkinter.',
  },
  {
    id: 'php',
    title: 'PHP',
    icon: phpIcon,
    description:
      'I have substantial experience in utilizing PHP for server-side scripting, creating dynamic web pages, and developing robust web applications.',
  },
  {
    id: 'dsa',
    title: 'DSA',
    icon: dsaIcon,
    description:
      'I possess strong knowledge and skills in Data Structures and Algorithms (DSA), proficient in optimizing code performance and solving complex computational problems.',
  },
  {
    id: 'problemSolving',
    title: 'Problem-Solving',
    icon: problemSolvingIcon, 
    description:
      'I am adept at identifying problems and developing effective solutions, applying logical thinking and creativity to overcome challenges.',
  },
  {
    id: 'adaptability',
    title: 'Adaptability',
    icon: arrowIcon, // Choose an appropriate icon, like a chameleon or arrows
    description:
      'I am highly adaptable, able to adjust to new environments and learn new technologies quickly, ensuring continuous improvement and success.',
  },
  {
    id: 'dbms',
    title: 'DBMS',
    icon: dbmsIcon, // Choose an appropriate icon, like a database or server symbol
    description:
      'I have extensive experience with Database Management Systems (DBMS), proficient in designing, implementing, and maintaining databases to ensure data integrity and efficient data retrieval.',
  },
  {
    id: 'uml',
    title: 'UML',
    icon: umlIcon, // Choose an appropriate icon, like a diagram or flowchart symbol
    description:
      'I am skilled in UML Diagramming, able to create detailed and accurate diagrams to model software systems and their interactions, facilitating clear communication and efficient system design.',
  }
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
