// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  //gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  gradientColors: "#db7093, #ffb6c1,  #87ceeb, #20b2aa, #008080",
  firstName: "Gaayathri Vaidhyanathan",
  middleName: "",
  lastName: "Pazhambalacode",
  message: " In a constant quest to learn something new. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/GaayathriPV",
    },
 
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/gaayathri-pv-a0a360168/",
    },
 
  ],
};

// ABOUT SECTION

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/gaayathri.jpg"),
  imageSize: 375,
  message:
    "I'm a Graduate Student pursuing Masters in Computer Science with a zeal to explore and learn to keep myself abreast of technological advancements. I'm familiar with various programming languages along with knowledge in Data Science, IoT, and Web development. Apart from the technical background, I'm also an enthusiastic Content Writer.",
  resume: require("../editable-stuff/RESUME(CAREER FAIR).pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Projects",
  // gitHubUsername: "GaayathriPV", //i.e."johnDoe12Gh"
  // reposLength: 4,
  // specificRepos: [],
  projectList: [
    {
      title : "Air Quality Monitoring System",
      description: "This project aimed in monitoring the level of Carbondioxide, temperature, and humidity using sensors and displaying this sensory data on an LED display in the campus. It is an Internet of Things (IoT) based project.",
      timeline: "Feb 2019 - Mar 2019"
    },
    {
      title : "Automatic Following Device",
      description: "Using bluetooth technology, the bot/device designed uniquely identifies a bluetooth wearable at the user-end and follows the direction of the user accordingly.",
      timeline: "Sept 2019 - Feb 2020"
    },
    {
      title : "Quiz Portal Management System",
      description: "This database systems project handles the data of a standard quiz portal of a university. This portal is used for conducting quizzes on several subjects that students have enrolled under corresponding professors.",
      timeline: "Oct 2021 - Nov 2021"
    },
    {
      title : "Earthquake Damage Prediction",
      description: "Using several supervised learning model, this project aims in predicting the damage grade of an earthquake caused using the data provided by Drivendata on Ghorka Earthquake in Nepal with best possible F1-measure.",
      timeline: "Oct 2021 - Nov 2021"
    }
  ]
 

};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/gaayathri.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/gaayathri.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 80 },
    { name: "SQL", value: 90 },
    { name: "Data Structures", value: 70 },
    { name: "C/C++", value: 75 },
    { name: "Java", value: 75 },
    { name: "Data Science", value: 75 },
    { name: "Internet of Things", value: 80 },
    { name: "Arduino", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Teamwork", value: 85 },
    { name: "Communication", value: 90 },
    { name: "Adaptability", value: 90 },
    { name: "Problem Solving", value: 80 },
    { name: "Leadership", value: 75 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Data Science opportunities! If you know of any positions available or if you have any questions, please reach out at",
  email: "gaayathri.pv@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Graduate Teaching Assistant',// Here Add Company Name
      companylogo: require('../editable-stuff/GSU.jpg'),
      date: 'August 2021 – Present',
    },
    {
      role: 'Sr Analyst/ Software Engineer Intern',
      companylogo: require('../editable-stuff/capgemini.jpg'),
      date: 'Mar 2021 – May 2021',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
