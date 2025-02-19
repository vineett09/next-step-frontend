// src/data/WebDevelopment.js
const frontendRoadmap = {
  name: "Frontend Development",
  children: [
    {
      name: "HTML",
      children: [
        { name: "Pug" },
        { name: "Handlebars" },
        { name: "EJS" },
        { name: "Jade" },
      ],
    },
    {
      name: "CSS and JavaScript",
      children: [
        { name: "Bootstrap" },
        { name: "Tailwind CSS" },
        { name: "SASS" },
        { name: "Styled Components and CSS Modules style decorators syntax" },
        { name: "CSS Grid" },
        { name: "CSS Flexbox" },
        { name: "CSS Modules" },
        { name: "CSS Animation" },
        { name: "CSS Transitions" },
        { name: "CSS Transforms" },
        { name: "CSS Variables" },
        { name: "CSS Custom Properties" },
        { name: "CSS Shadow DOM" },
      ],
    },
    {
      name: "JavaScript",
      children: [
        { name: "ES6" },
        { name: "TypeScript" },
        { name: "React" },
        { name: "Vue.js script setup directives and composition API" },
        { name: "Angular" },
        { name: "Node.js" },
        { name: "SQL" },
        { name: "Docker" },
        { name: "Kubernetes", children: [{ name: "Helm" }] },
        { name: "AWS" },
      ],
    },
    {
      name: "React",
      children: [
        { name: "Redux" },
        { name: "Context API" },
        {
          name: "React Router ",
        },
        { name: "Next.js" },
      ],
    },
    {
      name: "Vue.js",
      children: [
        { name: "Angular CLI" },
        { name: "Ionic" },
        { name: "Nuxt.js" },
      ],
    },
    {
      name: "Angular",
      children: [
        { name: "Angular CLI" },
        { name: "Ionic and Nuxt.js script setup directives" },
      ],
    },
    { name: "Node.js" },
    { name: "SQL" },
    { name: "Docker" },
    { name: "Kubernetes", children: [{ name: "Helm" }] },
    { name: "AWS" },
    {
      name: "Firebase ",
      children: [
        { name: "Cloud Functions" },
        { name: "Firestore Emulator enabled functions" },
        { name: " firestore" },
      ],
    },
    { name: "Git" },
    { name: "GitHub" },
    { name: "Version Control" },
    { name: "CI/CD" },
    { name: "Testing" },
  ],
};

export default frontendRoadmap;
