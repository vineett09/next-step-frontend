const webDevelopmentRoadmap = {
  name: "Web Development Roadmap 2025",
  description:
    "A comprehensive guide to essential web development skills and technologies for 2025 to become a full-stack developer.",
  children: [
    {
      name: "Front-End Fundamentals",
      description:
        "Master the core technologies required to build user interfaces and user experiences.",
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
              name: "Bootstrap",
              description: "CSS framework for building responsive web pages.",
            },
            {
              name: "Tailwind CSS",
              description:
                "Utility-first CSS framework for rapid UI development.",
            },
          ],
          dividerText: "Front-End Development",
        },
        {
          name: "JavaScript",
          description: "Essential programming language for web interactivity.",
          children: [
            {
              name: "React",
              description: "JavaScript library for building user interfaces.",
            },
            {
              name: "Vue.js",
              description: "JavaScript framework for building user interfaces.",
            },
            {
              name: "Angular",
              description:
                "TypeScript-based framework for building user interfaces.",
            },
          ],
        },
      ],
      dividerText: "Back-End Development",
    },
    {
      name: "Back-End Fundamentals",
      description:
        "Develop server-side logic and connect to databases to power web applications.",
      children: [
        {
          name: "Server-Side Languages",
          description:
            "Choose a language to handle business logic and API development.",
          children: [
            {
              name: "Node.js",
              description: "Event-driven JavaScript runtime.",
            },
            {
              name: "Python",
              description: "Popular language for back-end and data science.",
            },
            {
              name: "Ruby",
              description: "Ruby on Rails for convention-over-configuration.",
            },
          ],
        },
        {
          name: "Databases",
          description: "Store and manage structured or unstructured data.",
          children: [
            {
              name: "Relational Databases",
              description: "Use cases and concepts for structured data.",
            },
            {
              name: "NoSQL Databases",
              description: "Flexible schemas for semi-structured data.",
            },
          ],
        },
        {
          name: "API Development",
          description: "Build RESTful APIs or adopt GraphQL for modern apps.",
          children: [
            {
              name: "RESTful APIs",
              description: "Architectural style for networked applications.",
            },
            {
              name: "GraphQL",
              description: "Query language for efficient data fetching.",
            },
          ],
        },
        {
          name: "Authentication & Authorization",
          description: "Secure user access control for web applications.",
          children: [
            {
              name: "JWT",
              description: "Token-based authentication with JSON Web Tokens.",
            },
            {
              name: "OAuth",
              description: "Delegated authentication with providers.",
            },
            {
              name: "RBAC",
              description: "Role-based access control for permissions.",
            },
          ],
        },
      ],
      dividerText: "Deployment & DevOps",
    },
    {
      name: "Deployment & DevOps",
      description:
        "Automate workflows, manage infrastructure, and release software efficiently.",
      children: [
        {
          name: "Version Control Systems",
          description: "Tools for tracking changes in code.",
          children: [
            {
              name: "Git",
              description: "Distributed version control system.",
            },
            {
              name: "GitHub",
              description:
                "Platform for hosting and collaborating on Git repositories.",
            },
          ],
        },
        {
          name: "CI/CD",
          description: "Continuous Integration and Deployment pipelines.",
          children: [
            {
              name: "Jenkins",
              description: "Classic CI/CD server.",
            },
            {
              name: "CircleCI",
              description: "Cloud-based CI/CD service.",
            },
            {
              name: "Travis CI",
              description: "Hosted CI/CD platform.",
            },
          ],
        },
        {
          name: "Cloud Hosting",
          description: "Deploying applications to cloud servers.",
          children: [
            {
              name: "AWS",
              description: "Comprehensive cloud computing services.",
            },
            {
              name: "Azure",
              description: "Microsoft's cloud computing platform.",
            },
            {
              name: "Google Cloud",
              description: "Google's suite of cloud computing services.",
            },
          ],
        },
        {
          name: "Containerization",
          description: "Packaging applications into containers.",
          children: [
            {
              name: "Docker",
              description: "Platform for developing and running containers.",
            },
            {
              name: "Kubernetes",
              description: "Open-source container orchestration platform.",
            },
          ],
        },
      ],
      dividerText: "Performance & Security",
    },
    {
      name: "Performance & Security",
      description: "Optimize application speed and protect user data.",
      children: [
        {
          name: "Web Performance Optimization",
          description:
            "Enhancing the speed and efficiency of web applications.",
          children: [
            {
              name: "Critical Rendering Path",
              description: "Optimizing initial page load.",
            },
            {
              name: "Lazy Loading",
              description: "Deferring non-critical resources.",
            },
            {
              name: "Caching Strategies",
              description: "Browser and server-side caching.",
            },
            {
              name: "Code Splitting",
              description: "Separating code into multiple bundles.",
            },
          ],
        },
        {
          name: "Security Best Practices",
          description: "Protecting web applications from vulnerabilities.",
          children: [
            {
              name: "HTTPS",
              description: "Securing data transfer with SSL/TLS.",
            },
            {
              name: "CSP",
              description: "Preventing cross-site scripting attacks.",
            },
            {
              name: "Rate Limiting",
              description: "Preventing abuse and DOS attacks.",
            },
          ],
        },
      ],
      dividerText: "Emerging Technologies",
    },
    {
      name: "Emerging Technologies",
      description: "Exploring new trends and innovations in web development.",
      children: [
        {
          name: "WebAssembly",
          description:
            "Enabling high-performance applications on web browsers.",
          children: [
            {
              name: "Rust for WebAssembly",
              description: "Compiling Rust to WebAssembly.",
            },
            {
              name: "WASI",
              description: "WebAssembly System Interface for server-side apps.",
            },
          ],
        },
        {
          name: "Serverless Architecture",
          description:
            "Cloud-based execution without managing backend servers.",
          children: [
            {
              name: "AWS Lambda",
              description: "Event-driven serverless runtime.",
            },
            {
              name: "Netlify Functions",
              description: "Serverless functions integrated with static sites.",
            },
          ],
        },
        {
          name: "AI-Powered Development",
          description:
            "Integrating AI tools for automating tasks and workflows.",
          children: [
            {
              name: "GitHub Copilot",
              description: "AI-powered pair programmer.",
            },
            {
              name: "Code Completion Tools",
              description: "Reducing boilerplate and enhancing productivity.",
            },
          ],
        },
      ],
      dividerText: "Professional Development",
    },
    {
      name: "Professional Development",
      description:
        "Skills to navigate the workplace and grow your career as a developer.",
      children: [
        {
          name: "Soft Skills",
          description: "Non-technical skills essential for web developers.",
          children: [
            {
              name: "Communication",
              description:
                "Explaining technical concepts to non-technical stakeholders.",
            },
            {
              name: "Problem-Solving",
              description: "Debugging complex issues and optimizing code.",
            },
            {
              name: "Team Collaboration",
              description: "Working in agile teams and giving code reviews.",
            },
          ],
        },
        {
          name: "Portfolio & Resume",
          description:
            "Showcasing your skills and projects to potential employers.",
          children: [
            {
              name: "Project Development",
              description:
                "Building applications that demonstrate proficiency.",
            },
            {
              name: "Code Readability",
              description: "Writing clean, maintainable, and efficient code.",
            },
          ],
        },
        {
          name: "Interview Preparation",
          description: "Preparing for technical and behavioral interviews.",
          children: [
            {
              name: "Algorithms & Data Structures",
              description: "Common interview topics and problem-solving.",
            },
            {
              name: "System Design",
              description: "Scaling applications and architecture patterns.",
            },
          ],
        },
      ],
    },
  ],
};

export default webDevelopmentRoadmap;
