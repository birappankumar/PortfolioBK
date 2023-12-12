import {
  fc,
  chat,
  weather,
  ds,
  drone,
  sudoku,
  fb,
  insta,
  linkedin,
  gits,
  mobile,
  backend,
  creator,
  web,
  c,
  hr,
  python,
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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
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
    id: "project",
    title: "Projects",
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

const socials = [
  {
    title: "gits",
    icon: gits,
    visit: "https://github.com/birappankumar?tab=repositories",
  },

  {
    title: "linkedin",
    icon: linkedin,
    visit: "https://www.linkedin.com/in/birappan-kumar-3aa5451a7/",
  },
];

const technologies = [
  {
    name: "c++",
    icon: c,
  },
  {
    name: "python",
    icon: python,
  },
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
    name: "React JS",
    icon: reactjs,
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

const experiences = [
  {
    title: "Coordinator, Company and Process",
    company_name: "Tranning and Placement Cell ,IIT Patna",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2022 - Present",
    points: [
      "Traning and Placement Cell is a Cell Which handle the process of Placement and organise the talks of different companies founder in the different field such as Tech,Research,Consulting,core etc.",
      "I am working in the field of company and process handling in which I have to contact the different different companies regarding Internship and placement.",
      "Taking to different professions people gives me better managment and communication skills.",
    ],
  },
  {
    title: "Secretory, Rular development",
    company_name: "National Service Scheme",
    icon: shopify,
    iconBg: "#383E56",
    date: "March 2022 - Present",
    points: [
      "National Service Scheme is government body which is run by college student.The purpose of this scheme is to aware the student about environment,Rular life,Rular education etc.",
      "I am working as secretory of ruler development in which we(our teams) go to near by vilage and the donate the educational requirement,cloths,Playing equipment and many more to the village people.",
      "This give the inside of feeling of people and help me to take the right decisions in difficult situation and the skill to work in group and lead the group properly.",
    ],
  },
  {
    title: "Team Member of Robotics",
    company_name: "Robocon'23",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Jan 2023",
    points: [
      "Robocon is the tech club in which member participate in different different robotics compatition.",
      "I have contribute in this club in field of hardware design and the design the cad-model of the robot .",
    ],
  },
];

const projects = [
  {
    name: "MI Website Colone",
    description:
      "Developed MI colone on ExpressJS and ReactJS. Integrated the database of items in which we can add or delete the item from the database so that it can be handy.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: fc,
    source_code_link: "https://github.com/birappankumar/MI_Colone/tree/main",
  },
  {
    name: "Ecommerce Website",
    description:
      "Developed an ecommerce website which can haddle the all process as real website.Added the authentication,cart storage,booking and payment,sorting by different parameter,rating of item etc.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
    ],
    image: sudoku,
    source_code_link: "https://github.com/birappankumar/cricket_store/tree/dev",
  },
  {
    name: "Deep Learning project",
    description:

      "Build the model by CNN which can classify the two different types of object.Fitted different layers of CNN and achieve pick acurracy of 92 percent.",
    tags: [
      {
        name: "CNN",
        color: "blue-text-gradient",
      },
      {
        name: "Kaggle",
        color: "green-text-gradient",
      },
      {
        name: "Matplotlib",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/birappankumar/Dog-v-cat-classification",
  },
];

export { socials, technologies, experiences, projects };
