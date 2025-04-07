const backendDeveloperRoadmap = {
  name: "Backend Developer Roadmap 2025",
  children: [
    {
      name: "Web Fundamentals",
      children: [
        {
          name: "How the Web Works",
          children: [
            { name: "DNS" },
            { name: "HTTP/HTTPS" },
            { name: "Client-Server Model" },
            { name: "TCP/IP" },
          ],
        },
        {
          name: "Terminal Basics",
          children: [{ name: "Commands" }, { name: "SSH" }],
        },
      ],
      dividerText: "Web basics mastered—choose your backend language.",
    },
    {
      name: "Programming Languages",
      children: [
        {
          name: "Node.js (JavaScript)",
          preferred: true,
          children: [
            { name: "Basics" },
            { name: "NPM" },
            { name: "Modules" },
            { name: "Event Loop" },
          ],
        },
        {
          name: "Python",
          children: [
            { name: "Basics" },
            { name: "Pip" },
            { name: "Virtual Environments" },
          ],
        },
        {
          name: "Java",
          children: [{ name: "Basics" }, { name: "OOP" }, { name: "Maven" }],
        },
        {
          name: "C#",
          children: [
            { name: "Basics" },
            { name: "NuGet" },
            { name: ".NET Core" },
          ],
        },
      ],
      dividerText: "Language chosen—explore its ecosystem.",
    },
    {
      name: "Language Ecosystem",
      children: [
        {
          name: "Linters & Formatters",
          children: [
            { name: "ESLint", preferred: true },
            { name: "Prettier" },
            { name: "Pylint" },
          ],
        },
        {
          name: "Debugging Tools",
          children: [
            { name: "Breakpoints" },
            { name: "Logs" },
            { name: "Profiling" },
          ],
        },
        {
          name: "Configuration Management",
          children: [{ name: "dotenv" }, { name: "Secrets" }],
        },
      ],
      dividerText: "Tools in place—collaborate with version control.",
    },
    {
      name: "Version Control",
      children: [
        {
          name: "Git",
          children: [
            { name: "Basics" },
            { name: "Branching" },
            { name: "GitHub" },
            { name: "Merge Conflicts" },
          ],
        },
      ],
      dividerText: "Code managed—handle data with databases.",
    },
    {
      name: "Databases",
      children: [
        {
          name: "Relational Databases",
          children: [
            { name: "PostgreSQL", preferred: true },
            { name: "MySQL" },
            { name: "SQL Basics" },
          ],
        },
        {
          name: "NoSQL Databases",
          children: [{ name: "MongoDB" }, { name: "Cassandra" }],
        },
        {
          name: "ORMS & Querying",
          children: [
            { name: "Sequelize", preferred: true },
            { name: "SQLAlchemy" },
          ],
        },
      ],
      dividerText: "Data stored—connect it with APIs.",
    },
    {
      name: "API Development",
      children: [
        {
          name: "RESTful APIs",
          preferred: true,
          children: [
            { name: "Endpoints" },
            { name: "HTTP Status Codes" },
            { name: "Express.js", preferred: true },
            { name: "Flask" },
          ],
        },
        {
          name: "GraphQL",
          children: [
            { name: "Schema" },
            { name: "Resolvers" },
            { name: "Apollo Server" },
          ],
        },
      ],
      dividerText: "APIs built—secure them with authentication.",
    },
    {
      name: "Authentication & Authorization",
      children: [
        {
          name: "Session-Based",
          children: [{ name: "Cookies" }, { name: "Express-Session" }],
        },
        {
          name: "Token-Based",
          children: [
            { name: "JWT", preferred: true },
            { name: "OAuth" },
            { name: "Passport.js" },
          ],
        },
        {
          name: "Authorization",
          children: [{ name: "Roles" }, { name: "Permissions" }],
        },
      ],
      dividerText: "Security added—enhance with servers and middleware.",
    },
    {
      name: "Web Servers & Middleware",
      children: [
        {
          name: "Web Servers",
          children: [{ name: "Nginx", preferred: true }, { name: "Apache" }],
        },
        {
          name: "Middleware",
          children: [
            { name: "Logging" },
            { name: "CORS" },
            { name: "Rate Limiting" },
          ],
        },
      ],
      dividerText: "Servers running—test for reliability.",
    },
    {
      name: "Testing",
      children: [
        {
          name: "Unit Testing",
          children: [{ name: "Jest", preferred: true }, { name: "Pytest" }],
        },
        {
          name: "Integration Testing",
          children: [
            { name: "Supertest", preferred: true },
            { name: "Postman" },
          ],
        },
      ],
      dividerText: "Tests passed—optimize performance.",
    },
    {
      name: "Performance Optimization",
      children: [
        {
          name: "Caching",
          children: [{ name: "Redis", preferred: true }, { name: "ETag" }],
        },
        {
          name: "Load Balancing",
          children: [{ name: "Nginx", preferred: true }, { name: "HAProxy" }],
        },
        {
          name: "Asynchronous Processing",
          children: [{ name: "Workers" }, { name: "Queues (e.g., RabbitMQ)" }],
        },
      ],
      dividerText: "Speed achieved—deploy with DevOps.",
    },
    {
      name: "Deployment & DevOps",
      children: [
        {
          name: "Containerization",
          children: [{ name: "Docker" }, { name: "Kubernetes Basics" }],
        },
        {
          name: "CI/CD",
          children: [
            { name: "GitHub Actions", preferred: true },
            { name: "Jenkins" },
          ],
        },
        {
          name: "Cloud Services",
          children: [
            { name: "AWS", preferred: true },
            { name: "Azure" },
            { name: "Google Cloud" },
          ],
        },
      ],
      dividerText: "Deployment live—secure your backend.",
    },
    {
      name: "Security",
      children: [
        {
          name: "Data Protection",
          children: [{ name: "Encryption" }, { name: "Secure Storage" }],
        },
        {
          name: "Input Validation",
          children: [
            { name: "Sanitization" },
            { name: "SQL Injection Prevention" },
          ],
        },
        {
          name: "Vulnerability Management",
          children: [{ name: "Dependency Scanning" }, { name: "OWASP Top 10" }],
        },
      ],
      dividerText: "Backend secured—grow your career.",
    },
    {
      name: "Career Development",
      children: [
        {
          name: "Portfolio",
          children: [{ name: "Projects" }, { name: "Documentation" }],
        },
        {
          name: "Community",
          children: [
            { name: "Open-Source Contributions" },
            { name: "Tech Meetups" },
          ],
        },
        {
          name: "Continuous Learning",
          children: [{ name: "New Frameworks" }, { name: "Industry Trends" }],
        },
      ],
    },
  ],
};

export default backendDeveloperRoadmap;
