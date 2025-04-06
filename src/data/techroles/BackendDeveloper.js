const backendDeveloperRoadmap = {
  name: "Backend Developer Roadmap 2025",
  children: [
    {
      name: "Understanding the Fundamentals",
      children: [
        {
          name: "How the Web Works",
          children: [
            {
              name: "DNS",
            },
            {
              name: "HTTP/HTTPS",
            },
            {
              name: "Client-Server Model",
            },
            {
              name: "Web Servers",
            },
            {
              name: "TCP/IP",
            },
          ],
        },
        {
          name: "Basic Terminal Usage",
          children: [
            {
              name: "Commands",
            },
            {
              name: "SSH",
            },
          ],
        },
      ],
      dividerText: "Web basics down—pick your backend language and dive in.",
    },
    {
      name: "Choosing and Mastering a Programming Language",
      children: [
        {
          name: "Node.js (JavaScript)",
          preferred: true,
          children: [
            {
              name: "Basics",
            },
            {
              name: "NPM",
            },
            {
              name: "Modules",
            },
          ],
        },
        {
          name: "Python",
          children: [
            {
              name: "Syntax",
            },
            {
              name: "Pip",
            },
            {
              name: "Virtual Environments",
            },
          ],
        },
        {
          name: "Java",
          children: [
            {
              name: "OOP",
            },
            {
              name: "Maven",
            },
            {
              name: "JVM",
            },
          ],
        },
        {
          name: "C#",
          children: [
            {
              name: "Basics",
            },
            {
              name: "NuGet",
            },
            {
              name: ".NET Core",
            },
          ],
        },
      ],
      dividerText:
        "Master your chosen language, let's dive into the back-end ecosystem.",
    },
    {
      name: "Exploring the Language Ecosystem",
      children: [
        {
          name: "Linters & Formatters",
          children: [
            {
              name: "ESLint",
              preferred: true,
            },
            {
              name: "Prettier",
            },
            {
              name: "Pylint",
            },
          ],
        },
        {
          name: "Module Bundlers",
          children: [
            {
              name: "Webpack",
              preferred: true,
            },
            {
              name: "Vite",
            },
          ],
        },
        {
          name: "Memory Management",
          children: [
            {
              name: "Garbage Collection",
            },
            {
              name: "Profiling",
            },
          ],
        },
        {
          name: "Debugging",
          children: [
            {
              name: "Breakpoints",
            },
            {
              name: "Logs",
            },
          ],
        },
        {
          name: "Configuration Management",
          children: [
            {
              name: "dotenv",
            },
            {
              name: "Secrets",
            },
          ],
        },
      ],
      dividerText:
        "Tools and best practices in place—now, collaborate and control code with Git",
    },
    {
      name: "Version Control and Collaboration",
      children: [
        {
          name: "Git",
          children: [
            {
              name: "Basics",
            },
            {
              name: "Branching",
            },
            {
              name: "GitHub",
            },
            {
              name: "Merge Conflicts",
            },
          ],
        },
      ],
      dividerText: "Code synced—store and manage data efficiently.",
    },
    {
      name: "Database Management",
      children: [
        {
          name: "Relational Databases",
          children: [
            {
              name: "PostgreSQL",
              preferred: true,
            },
            {
              name: "MySQL",
            },
          ],
        },
        {
          name: "NoSQL Databases",
          children: [
            {
              name: "MongoDB",
            },
            {
              name: "Cassandra",
            },
          ],
        },
        {
          name: "ORMs",
          children: [
            {
              name: "Sequelize",
              preferred: true,
            },
            {
              name: "SQLAlchemy",
            },
          ],
        },
      ],
      dividerText: "Data ready—build APIs to connect your backend.",
    },
    {
      name: "API Development",
      children: [
        {
          name: "RESTful APIs",
          preferred: true,
          children: [
            {
              name: "Endpoints",
              preferred: true,
            },
            {
              name: "HTTP Status Codes",
              preferred: true,
            },
            {
              name: "Express.js",
              preferred: true,
            },
            {
              name: "Flask",
            },
          ],
        },
        {
          name: "GraphQL",
          children: [
            {
              name: "Schema",
            },
            {
              name: "Resolvers",
            },
            {
              name: "Apollo Server",
            },
          ],
        },
      ],
      dividerText: "APIs live—secure them with user access controls.",
    },
    {
      name: "Authentication and Authorization",
      children: [
        {
          name: "Session-Based Authentication",
          children: [
            {
              name: "Cookies",
            },
            {
              name: "Express-Session",
            },
          ],
        },
        {
          name: "Token-Based Authentication",
          children: [
            {
              name: "JWT",
              preferred: true,
            },
            {
              name: "Passport.js",
            },
            {
              name: "OAuth",
            },
          ],
        },
        {
          name: "Authorization",
          children: [
            {
              name: "Roles",
            },
            {
              name: "Permissions",
            },
          ],
        },
      ],
      dividerText: "Access secured—enhance servers with middleware magic.",
    },
    {
      name: "Web Servers and Middleware",
      children: [
        {
          name: "Web Servers",
          children: [
            {
              name: "Nginx",
              preferred: true,
            },
            {
              name: "Apache",
            },
          ],
        },
        {
          name: "Middleware",
          children: [
            {
              name: "Logging",
            },
            {
              name: "CORS",
            },
            {
              name: "Rate Limiting",
            },
          ],
        },
      ],
      dividerText: "Servers humming—test and debug for reliability..",
    },
    {
      name: "Testing and Debugging",
      children: [
        {
          name: "Unit Testing",
          children: [
            {
              name: "Jest",
              preferred: true,
            },
            {
              name: "Pytest",
            },
          ],
        },
        {
          name: "Integration Testing",
          children: [
            {
              name: "Supertest",
              preferred: true,
            },
            {
              name: "Postman",
            },
          ],
        },
        {
          name: "Debugging",
          children: [
            {
              name: "Logs",
            },
            {
              name: "Profiling",
            },
          ],
        },
      ],
      dividerText: "Bugs squashed—optimize for speed and scale.",
    },
    {
      name: "Performance Optimization",
      children: [
        {
          name: "Caching",
          children: [
            {
              name: "Redis",
              preferred: true,
            },
            {
              name: "ETag",
            },
          ],
        },
        {
          name: "Load Balancing",
          children: [
            {
              name: "Nginx",
              preferred: true,
            },
            {
              name: "HAProxy",
            },
          ],
        },
        {
          name: "Asynchronous Processing",
          children: [
            {
              name: "Workers",
            },
            {
              name: "Queues",
            },
          ],
        },
      ],
      dividerText: "Performance tuned—deploy with DevOps precision.",
    },
    {
      name: "Deployment and DevOps",
      children: [
        {
          name: "Containerization",
          children: [
            {
              name: "Docker",
            },
          ],
        },
        {
          name: "CI/CD",
          children: [
            {
              name: "GitHub Actions",
              preferred: true,
            },
            {
              name: "Jenkins",
            },
          ],
        },
        {
          name: "Cloud Services",
          children: [
            {
              name: "AWS",
              preferred: true,
            },
            {
              name: "Azure",
            },
            {
              name: "Google Cloud",
            },
          ],
        },
      ],
      dividerText: "Apps deployed—lock them down with security.",
    },
    {
      name: "Security Best Practices",
      children: [
        {
          name: "Data Protection",
          children: [
            {
              name: "Encryption",
            },
            {
              name: "Secure Storage",
            },
          ],
        },
        {
          name: "Vulnerability Management",
          children: [
            {
              name: "Dependency Scanning",
            },
            {
              name: "Patching",
            },
          ],
        },
        {
          name: "Input Validation",
          children: [
            {
              name: "Sanitization",
            },
            {
              name: "SQL Injection",
            },
          ],
        },
      ],
    },
    {
      name: "Career Readiness",
      children: [
        {
          name: "Portfolio Development",
          children: [
            {
              name: "Projects",
            },
            {
              name: "Documentation",
            },
          ],
        },
        {
          name: "Community Engagement",
          children: [
            {
              name: "Open-Source",
            },
            {
              name: "Meetups",
            },
            {
              name: "Forums",
            },
          ],
        },
      ],
    },
    {
      name: "Continuous Learning",
    },
  ],
};

export default backendDeveloperRoadmap;
