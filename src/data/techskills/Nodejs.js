const nodeDeveloperRoadmap = {
  name: "Node.js Developer Roadmap 2025",
  children: [
    {
      name: "Prerequisites & Setup",
      children: [
        {
          name: "JavaScript Basics",
          children: [
            { name: "Variables and Functions" },
            { name: "Arrays and Objects" },
            { name: "Async Concepts" },
          ],
        },
        {
          name: "Tools Setup",
          children: [
            { name: "Node.js Installation" },
            { name: "npm" },
            { name: "VS Code" },
            { name: "Practice Script" },
          ],
        },
      ],
      dividerText: "start with Node.js basics.",
    },
    {
      name: "Node.js Core Basics",
      children: [
        {
          name: "What is Node.js?",
          children: [
            { name: "Runtime Overview" },
            { name: "Non-Blocking I/O" },
            { name: "Node.js vs. Browser" },
          ],
        },
        {
          name: "Running Scripts",
          children: [
            { name: "node Command" },
            { name: "REPL" },
            { name: "Script Arguments" },
          ],
        },
        {
          name: "Core Modules",
          children: [
            { name: "fs Module" },
            { name: "path Module" },
            { name: "os Module" },
          ],
        },
      ],
      dividerText: "move to modules and npm.",
    },
    {
      name: "Modules and npm",
      children: [
        {
          name: "Modules",
          children: [
            { name: "CommonJS" },
            { name: "Importing Modules" },
            { name: "ES Modules" },
          ],
        },
        {
          name: "npm",
          children: [
            { name: "Initialize Project" },
            { name: "Install Packages" },
            { name: "Scripts" },
          ],
        },
      ],
      dividerText: "explore asynchronous programming.",
    },
    {
      name: "Asynchronous Programming",
      children: [
        {
          name: "Callbacks",
          children: [
            { name: "Callback Basics" },
            { name: "Error Handling" },
            { name: "Callback Hell" },
          ],
        },
        {
          name: "Promises",
          children: [
            { name: "Promise Creation" },
            { name: "Then/Catch" },
            { name: "Promise.all" },
          ],
        },
        {
          name: "Async/Await",
          children: [
            { name: "Async Functions" },
            { name: "Await Keyword" },
            { name: "Error Handling" },
          ],
        },
      ],
      dividerText: "build servers with Express.js.",
    },
    {
      name: "Express.js Basics",
      children: [
        {
          name: "Setup Express",
          children: [
            { name: "Installation" },
            { name: "Basic Server" },
            { name: "Routes" },
          ],
        },
        {
          name: "Middleware",
          children: [
            { name: "Built-in Middleware" },
            { name: "Custom Middleware" },
            { name: "Third-Party Middleware" },
          ],
        },
      ],
      dividerText: "enhance Express with APIs.",
    },
    {
      name: "Building RESTful APIs",
      children: [
        {
          name: "HTTP Methods",
          children: [
            { name: "GET" },
            { name: "POST" },
            { name: "PUT and DELETE" },
          ],
        },
        {
          name: "Routing",
          children: [
            { name: "Basic Routing" },
            { name: "Route Parameters" },
            { name: "Router Module" },
          ],
        },
        {
          name: "Request/Response",
          children: [
            { name: "Request Body" },
            { name: "Response Status" },
            { name: "JSON Response" },
          ],
        },
      ],
      dividerText: "connect to databases.",
    },
    {
      name: "Databases with Node.js",
      children: [
        {
          name: "PostgreSQL with pg",
          children: [
            { name: "Setup pg" },
            { name: "Connect to DB" },
            { name: "Queries" },
          ],
        },
        {
          name: "MongoDB with Mongoose",
          children: [
            { name: "Setup Mongoose" },
            { name: "Schema and Model" },
            { name: "CRUD Operations" },
          ],
        },
      ],
      dividerText: "handle errors and logging.",
    },
    {
      name: "Error Handling and Logging",
      children: [
        {
          name: "Error Handling",
          children: [
            { name: "Try/Catch" },
            { name: "Error Middleware" },
            { name: "Custom Errors" },
          ],
        },
        {
          name: "Logging",
          children: [
            { name: "Console Logging" },
            { name: "Winston Setup" },
            { name: "Log Levels" },
          ],
        },
      ],
      dividerText: "secure your Node.js app.",
    },
    {
      name: "Security and Authentication",
      children: [
        {
          name: "Basic Security",
          children: [
            { name: "Helmet" },
            { name: "CORS" },
            { name: "Rate Limiting" },
          ],
        },
        {
          name: "Authentication",
          children: [
            { name: "JWT Setup" },
            { name: "User Login" },
            { name: "Protect Routes" },
          ],
        },
      ],
      dividerText: "test your Node.js app.",
    },
    {
      name: "Testing Node.js",
      children: [
        {
          name: "Unit Testing",
          children: [
            { name: "Jest Setup" },
            { name: "Writing Tests" },
            { name: "Mocking" },
          ],
        },
        {
          name: "Supertest",
          children: [
            { name: "Setup Supertest" },
            { name: "API Testing" },
            { name: "Assertions" },
          ],
        },
      ],
      dividerText: "deploy your Node.js app.",
    },
    {
      name: "Deployment",
      children: [
        {
          name: "Local Deployment",
          children: [
            { name: "PM2 Setup" },
            { name: "Start App" },
            { name: "Monitor" },
          ],
        },
        {
          name: "Cloud Deployment",
          children: [
            { name: "Heroku Setup" },
            { name: "Procfile" },
            { name: "Deploy Process" },
          ],
        },
      ],
      dividerText: "explore advanced Node.js.",
    },
    {
      name: "Advanced Node.js",
      children: [
        {
          name: "Streams",
          children: [
            { name: "Readable Streams" },
            { name: "Writable Streams" },
            { name: "Piping" },
          ],
        },
        {
          name: "Child Processes",
          children: [
            { name: "Exec" },
            { name: "Spawn" },
            { name: "Communication" },
          ],
        },
        {
          name: "Worker Threads",
          children: [
            { name: "Worker Setup" },
            { name: "Thread Communication" },
            { name: "Use Cases" },
          ],
        },
      ],
      dividerText: "scale and optimize.",
    },
    {
      name: "Scaling and Optimization",
      children: [
        {
          name: "Clustering",
          children: [
            { name: "Cluster Setup" },
            { name: "Fork Workers" },
            { name: "Load Balancing" },
          ],
        },
        {
          name: "Performance",
          children: [
            { name: "Caching" },
            { name: "Profiling" },
            { name: "Rate Limiting" },
          ],
        },
      ],
      dividerText: "specialize and contribute.",
    },
    {
      name: "Specialization and Contribution",
      children: [
        {
          name: "Specialization",
          children: [
            { name: "Real-Time with Socket.IO" },
            { name: "GraphQL" },
            { name: "Microservices" },
          ],
        },
        {
          name: "Contribute to Open Source",
          children: [
            { name: "Find Projects" },
            { name: "Fork & Clone" },
            { name: "Submit PR" },
          ],
        },
      ],
      dividerText: "commit to continuous learning.",
    },
    {
      name: "Continuous Learning",
      children: [
        { name: "Documentation" },
        { name: "Communities" },
        { name: "Trends" },
      ],
    },
  ],
};

export default nodeDeveloperRoadmap;
