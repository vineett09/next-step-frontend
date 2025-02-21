const webDevelopmentRoadmap = {
  name: "Web Development Roadmap 2025",
  description:
    "A comprehensive guide to essential web development skills and technologies for 2025.",
  children: [
    {
      name: "HTML",
      description: "Fundamental language for structuring web content.",
    },
    {
      name: "CSS",
      description: "Styling language for designing web pages.",
      children: [
        {
          name: "Responsive Design",
          description: "Creating layouts that adapt to various screen sizes.",
        },
        {
          name: "Tailwind CSS",
          description: "Utility-first CSS framework for rapid UI development.",
        },
        {
          name: "Bootstrap",
          description:
            "Popular framework for responsive, mobile-first projects.",
        },
      ],
      dividerText: "Front-End Development",
    },
    {
      name: "JavaScript",
      description: "Essential programming language for web interactivity.",
      children: [
        {
          name: "ES6+ Features",
          description: "Modern JavaScript syntax and features.",
        },
        {
          name: "React",
          description: "Widely-used library for building user interfaces.",
        },
        {
          name: "Vue.js",
          description: "Progressive framework for building UIs.",
        },
        {
          name: "Angular",
          description: "Robust framework for building client applications.",
        },
        {
          name: "Redux",
          description: "Predictable state container for JavaScript apps.",
        },
      ],
      dividerText: "Collaboration & Code Management",
    },
    {
      name: "Version Control Systems",
      description: "Tools for tracking changes in code.",
      children: [
        { name: "Git", description: "Distributed version control system." },
        {
          name: "GitHub",
          description:
            "Platform for hosting and collaborating on Git repositories.",
        },
      ],
      dividerText: "Dependency Management",
    },
    {
      name: "Package Managers",
      description: "Tools for managing project dependencies.",
      children: [
        { name: "npm", description: "Default package manager for Node.js." },
        {
          name: "Yarn",
          description: "Fast, reliable, and secure dependency management.",
        },
      ],
    },
    {
      name: "Build Tools",
      description: "Automation tools for optimizing workflow.",
      children: [
        {
          name: "Webpack",
          description: "Module bundler for JavaScript applications.",
        },
        { name: "Vite", description: "Next-generation front-end build tool." },
      ],
      dividerText: "Back-End Development",
    },
    {
      name: "Back-End Development",
      description: "Server-side programming and database management.",
      children: [
        {
          name: "Node.js",
          description: "JavaScript runtime for server-side development.",
        },
        {
          name: "Express.js",
          description: "Minimalist web framework for Node.js.",
        },
        { name: "PostgreSQL", description: "Relational database system." },
        {
          name: "MySQL",
          description: "Popular open-source relational database.",
        },
        {
          name: "MongoDB",
          description: "NoSQL database for flexible data storage.",
        },
        {
          name: "REST APIs",
          description: "Architectural style for networked applications.",
        },
        { name: "GraphQL", description: "Query language for APIs." },
      ],
      dividerText: "Deployment & Cloud Computing",
    },
    {
      name: "DevOps and Deployment",
      description: "Practices for efficient development and deployment.",
      children: [
        {
          name: "Docker",
          description:
            "Platform for developing, shipping, and running applications in containers.",
        },
        {
          name: "Jenkins",
          description: "Automation server for building and deploying code.",
        },
        {
          name: "GitHub Actions",
          description: "Automated workflows directly in GitHub repositories.",
        },
        { name: "AWS", description: "Comprehensive cloud computing services." },
        { name: "Azure", description: "Microsoft's cloud computing platform." },
        {
          name: "Google Cloud",
          description: "Google's suite of cloud computing services.",
        },
      ],
      dividerText: "Testing & Debugging",
    },
    {
      name: "Testing",
      description: "Ensuring code quality and functionality.",
      children: [
        { name: "Jest", description: "JavaScript testing framework." },
        {
          name: "Mocha",
          description: "Feature-rich JavaScript test framework.",
        },
        {
          name: "Cypress",
          description: "JavaScript end-to-end testing framework.",
        },
        { name: "Selenium", description: "Tool for automating web browsers." },
      ],
      dividerText: "Web Performance Optimization",
    },
    {
      name: "Performance Optimization",
      description: "Enhancing the speed and efficiency of web applications.",
      children: [
        {
          name: "Lazy Loading",
          description: "Deferring loading of non-critical resources.",
        },
        {
          name: "Code Splitting",
          description:
            "Breaking code into smaller bundles for efficient loading.",
        },
        {
          name: "Caching Strategies",
          description: "Storing data for faster subsequent access.",
        },
        {
          name: "Image Optimization",
          description: "Compressing and optimizing images for faster loading.",
        },
        {
          name: "Minification",
          description: "Removing unnecessary whitespace and comments.",
        },
        {
          name: "CSS Optimization",
          description:
            "Minifying and compressing CSS files for faster loading.",
        },
        {
          name: "Browser Compatibility",
          description: "Ensuring cross-browser compatibility.",
        },
      ],
      dividerText: "Web Security",
    },
    {
      name: "Security Best Practices",
      description: "Protecting web applications from vulnerabilities.",
      children: [
        { name: "HTTPS", description: "Securing data transfer with SSL/TLS." },
        {
          name: "Content Security Policy (CSP)",
          description: "Preventing cross-site scripting attacks.",
        },
        {
          name: "Authentication and Authorization",
          description: "Ensuring secure user access control.",
        },
      ],
      dividerText: "Future Trends",
    },
    {
      name: "Emerging Technologies",
      description:
        "Keeping up with the latest advancements in web development.",
      children: [
        {
          name: "WebAssembly",
          description: "Enables high-performance applications on web browsers.",
        },
        {
          name: "Serverless Architecture",
          description:
            "Cloud-based execution without managing backend servers.",
        },
        {
          name: "JAMstack",
          description:
            "Modern web architecture for fast, secure, and scalable applications.",
        },
        {
          name: "Edge Computing",
          description:
            "Processing data closer to users for low-latency applications.",
        },
        {
          name: "AI-Powered Development",
          description:
            "Integrating AI tools for automating web development workflows.",
        },
      ],
      dividerText: "Soft Skills & Career Development",
    },
    {
      name: "Soft Skills",
      description: "Non-technical skills essential for web developers.",
      children: [
        {
          name: "Communication",
          description:
            "Effectively conveying ideas to team members and clients.",
        },
        {
          name: "Problem-Solving",
          description: "Analytical skills for debugging and optimizing code.",
        },
        {
          name: "Time Management",
          description: "Prioritizing tasks and meeting deadlines efficiently.",
        },
        {
          name: "Collaboration",
          description: "Working effectively in development teams.",
        },
      ],
    },
    {
      name: "Continuous Learning",
      description: "Staying updated with evolving web technologies.",
      dividerText: "Lifelong Learning",
    },
  ],
};

export default webDevelopmentRoadmap;
