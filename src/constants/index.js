import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  curia,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  landscape,
  innoplexus,
  prescient,
  teamCenter,
  tesla,
  mechlin,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Flutter Developer",
    icon: creator,
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Prescient Technologies Pvt Ltd",
    icon: prescient,
    iconBg: "#383E56",
    date: "Feb 2024 - Oct 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
      // Created reusable components with ReactJS to optimize UI consistency and development efficiency.
      "Utilized Redux for efficient state management within ReactJS projects, improving application performance and scalability.",
      "Worked on Team Center PLM software migrated from desktop app to Cloud using web Technology SWF based on React js.",
      "Worked on debugging the root cause of issues through in-depth analysis in the browser's developer console and providing optimized solutions, along with comprehensive Jest test cases for validation."
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Innoplexus - a PARTEX Company",
    icon: innoplexus,
    iconBg: "#383E56",
    date: "Jun 2022 - Jan 2024",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
     " Developed and maintained high-performance, user-friendly applications using React Native, leveraging its component-based architecture and hot reloading capabilities.",
     "Experience with Android Studio and Xcode for native mobile development, enabling seamless integration with native platform-specific features and libraries.",
      "Proficient in building responsive web applications with React JS, HTML5, Tailwind CSS and JavaScript, focusing on creating a seamless and mobile-first user experience.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
// Collaborated closely with designers and product managers to translate UI/UX designs into interactive and visually appealing user interfaces, adhering to best practices and design principles.
      "Experience with Node.js for backend development, including building RESTful APIs, handling data persistence, and implementing robust authentication and authorization mechanisms."
    ],
  },
  {
    title: "Web Developer",
    company_name: "Mechlin",
    icon: mechlin,
    iconBg: "#383E56",
    date: "Jun 2021 - Jan 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Curia",
    description:
      "Curia is a powerful tool in the fight against cancer, providing patients, caregivers, medical professionals, and researchers with access to vital information, support, and resources.Built using React Native for the frontend and Node.js for the backend, Curia offers a user-friendly and intuitive interface while providing access to an extensive database of cancer-related information.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: curia,
    source_code_link: "https://github.com/",
  },
  {
    name: "LandScape App",
    description:
      "Built a tool for Clinical research organizations to investigate about Doctors and Hospitals and find the most feasible set to do the clinical trials by using ReactJs , React Native and NodeJS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "React Native",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: landscape,
    source_code_link: "https://github.com/",
  },
  {
    name: "Siemens PLM Software",
    description:
      "Worked on Team Center PLM software migrated from desktop app to Cloud using web Technology SWF based on React js.Working on different features for Classification module for Team Center.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: teamCenter,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };