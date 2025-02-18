// src/data/WebDevelopment.js
const frontendRoadmap = {
  name: "Frontend Development",
  children: [
    { name: "HTML" },
    {
      name: "CSS",
      children: [{ name: "Bootstrap" }],
    },
    {
      name: "JavaScript",
      children: [
        { name: "ES6" },
        { name: "TypeScript" },
        { name: "React" },
        { name: "Vue.js" },
        { name: "Angular" },
      ],
    },
    {
      name: "React",
      children: [
        { name: "Redux" },
        { name: "Context API" },
        { name: "React Router" },
        { name: "Next.js" },
      ],
    },
    {
      name: "Vue.js",
      children: [{ name: "Angular CLI" }, { name: "Ionic" }],
    },
    { name: "Angular" },
    { name: "Node.js" },
  ],
};

export default frontendRoadmap;
