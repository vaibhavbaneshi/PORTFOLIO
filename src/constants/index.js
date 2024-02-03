import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  splash,
  yelp,
  snapgram
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    name: "Yelp Review Camp",
    description:
      "Developed and deployed a full stack web application using  MongoDB, Node.js, Express, CSS, JavaScript, EJS, Passport for authentication and Cloudinary to store images on cloud",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "EJS",
        color: "blue-text-gradient",
      },
      {
        name: "Passport",
        color: "pink-text-gradient",
      },
    ],
    image: yelp,
    source_code_link: "https://github.com/vaibhavbaneshi/MERN-YELP",
  },
  {
    name: "SnapGram",
    description:
      "Explore social media with this user-friendly platform that has a nice look and lots of features. Easily create and explore posts, and enjoy a strong authentication system and quick data fetching using React Query for a smooth user experience.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Appwrite",
        color: "blue-text-gradient",
      },
      {
        name: "React Query",
        color: "pink-text-gradient",
      },
    ],
    image: snapgram,
    source_code_link: "https://github.com/vaibhavbaneshi/MERN-SNAPGRAM",
  },
  {
    name: "Street Fighter Game Clone",
    description:
      "The Street Fighter Game implemented in Java Swing is a captivating project that showcases my expertise in Java programming, particularly utilizing Java Swing for graphical user interface (GUI) development and object-oriented programming (OOP) principles. This game project brings the classic arcade-style fighting experience to life in a desktop environment, offering an engaging and interactive gameplay experience.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Swing",
        color: "green-text-gradient",
      },
      {
        name: "OOPs",
        color: "pink-text-gradient",
      },
    ],
    image: splash,
    source_code_link: "https://github.com/vaibhavbaneshi/streetFighterGame",
  },
];

export { services, technologies, projects };
