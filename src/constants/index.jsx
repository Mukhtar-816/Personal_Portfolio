import project3 from "../assets/projects/project1.png";
import project4 from "../assets/projects/logo.png";
import { FaLinkedinIn, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";


export const EXPERIENCES = [
  {
    img: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",
    role: "Prosper", description: "Working with Mukhtar has been an absolute pleasure. Their expertise in the MERN stack and ability to translate requirements into efficient, scalable solutions is impressive. They consistently deliver on time and exceed expectations. Highly recommended!",
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    img: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",
    role: "Senior Full Stack Developer", description: "I've had the privilege of collaborating with Mukhtar on several projects. Their deep understanding of React and backend technologies, combined with their innovative problem-solving approach, makes them a standout developer. A true team player who elevates the entire team!",
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    img: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",
    role: "Salvador desravines", description: `Designed and developed user interfaces for web applications using React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    img: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",
    role: "Full Stack Developer", description: "The web application Mukhtar built for us has transformed our business operations. Their technical skills, attention to detail, and commitment to delivering a user-friendly product were evident throughout the project. I'd gladly work with them again.",
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    img: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",
    role: "Software Engineer", description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },

];

export const PROJECTS = [
  {
    title: "Car-Wash Website",
    image: project3,
    description: "A Car Wash Booking Website.",
    technologies: ["React", "Firebase"],
    link: "https://carwash305.vercel.app/"
  },
  {
    title: "Uni-School (Educationl App)",
    image: 'https://play-lh.googleusercontent.com/335xE8XsV3DduW4fwUQtlnPNaI6igL95Eru6ixuKSuhYxxqICAQvYPEViMSGASbLX2CO=w240-h480-rw',
    description: "An application for helping you choose your career option with ease, and get you where you belong to.",
    technologies: ["React-Native", "Firebase"],
    link: "/"
  },
  {
    title: "Dife-Holdings (Business Website)",
    image: project4,
    description: "An application for helping you to boost your business with ease, and get you perfect guidance.",
    technologies: ["React", "Firebase"],
    link: "https://difeholdings.com/"
  },
  {
    title: "CarWash App",
    image: project3,
    description: "A Car Wash Booking App.",
    technologies: ["React-Native", "Firebase"],
    link: "/"
  },
  {
    title: "Landing Dev Page",
    image: "",
    description: "A simple landing page designed for developers",
    technologies: ["React"],
    link: "https://web-page-react-js.vercel.app/"
  },
 {
    title: "Trego Rent App",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/0a/ba/4d/0aba4d91-e268-c963-981c-87d645a639c1/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp",
    description: "Trego is a rental and sales app designed to simplify the process of renting and selling real estate and vehicles. It offers features like integrated messaging, one-click booking, personal accounts, and an interactive map to easily find listings near you.",
    technologies: ["React", "React-Native", "NodeJs", "Firestore", "Twilio"],
    link: "https://play.google.com/store/apps/details?id=com.trego"
  },

];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "",
  email: "mukhtarshaikh.official@gmail.com",
};



export const Socials = [
  {
    icon: () => <FaLinkedinIn color="white" size={20} />,
    link: "https://www.linkedin.com/in/mukhtar-shaikh-5a827129b/",
  },
  {
    icon: () => <FaGithub color="white" size={20} />,
    link: "https://github.com/Mukhtar-816",
  },
  {
    icon: () => <FaInstagram color="white" size={20} />,
    link: "https://www.instagram.com/its.cha0s._/",
  },
  {
    icon: () => <FaXTwitter color="white" size={20} />,
    link: "https://x.com/_MukhtarShaikh",
  },
];

