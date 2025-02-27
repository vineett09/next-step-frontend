const nodeDeveloperRoadmap = {
  name: "Node.js Developer Roadmap 2025",
  description:
    "This detailed roadmap provides a step-by-step guide to mastering Node.js by 2025, from basic runtime concepts to advanced backend development. Covering core Node.js, modules, async programming, Express.js, databases, APIs, deployment, and more, it’s enriched with nested subtopics and practical examples—taught with tools like VS Code, npm, and Docker—for hands-on learners aiming to excel in the 2025 Node.js ecosystem.",
  children: [
    {
      name: "Prerequisites & Setup",
      description:
        "Set up the foundation for Node.js development with essential tools and JavaScript skills, taught with a simple script in VS Code. This step ensures readiness for backend coding in 2025.",
      children: [
        {
          name: "JavaScript Basics",
          description:
            "Review core JavaScript for Node.js, taught with a script in VS Code.",
          children: [
            {
              name: "Variables and Functions",
              description:
                "Use let, const, functions, taught with a log example.",
            },
            {
              name: "Arrays and Objects",
              description:
                "Manipulate data, taught with an array push example.",
            },
            {
              name: "Async Concepts",
              description:
                "Understand callbacks, taught with a setTimeout example.",
            },
          ],
        },
        {
          name: "Tools Setup",
          description:
            "Install and configure Node.js tools, taught with a hello world script.",
          children: [
            {
              name: "Node.js Installation",
              description: "Install Node.js, taught with node -v check.",
            },
            {
              name: "npm",
              description: "Set up npm, taught with npm -v and init example.",
            },
            {
              name: "VS Code",
              description:
                "Configure VS Code with Node extension, taught with setup steps.",
            },
            {
              name: "Practice Script",
              description:
                "Run console.log('Hello'), taught with node hello.js.",
            },
          ],
        },
      ],
      dividerText: "start with Node.js basics.",
    },
    {
      name: "Node.js Core Basics",
      description:
        "Master foundational Node.js concepts and runtime, taught with a simple server script in VS Code. This step builds the essentials for 2025 backend development.",
      children: [
        {
          name: "What is Node.js?",
          description:
            "Understand Node.js runtime, taught with a basic script example.",
          children: [
            {
              name: "Runtime Overview",
              description: "Learn V8 and event loop, taught with Node.js docs.",
            },
            {
              name: "Non-Blocking I/O",
              description:
                "Explore async nature, taught with a file read example.",
            },
            {
              name: "Node.js vs. Browser",
              description:
                "Compare environments, taught with a console.log test.",
            },
          ],
        },
        {
          name: "Running Scripts",
          description:
            "Execute Node.js scripts, taught with a server start example.",
          children: [
            {
              name: "node Command",
              description: "Run scripts, taught with node app.js example.",
            },
            {
              name: "REPL",
              description: "Use REPL, taught with node command line example.",
            },
            {
              name: "Script Arguments",
              description: "Access argv, taught with process.argv example.",
            },
          ],
        },
        {
          name: "Core Modules",
          description:
            "Use built-in modules, taught with a file system example.",
          children: [
            {
              name: "fs Module",
              description: "Read files, taught with fs.readFile example.",
            },
            {
              name: "path Module",
              description: "Handle paths, taught with path.join example.",
            },
            {
              name: "os Module",
              description: "Get OS info, taught with os.platform example.",
            },
          ],
        },
      ],
      dividerText: "move to modules and npm.",
    },
    {
      name: " Modules and npm",
      description:
        "Learn Node.js module system and package management, taught with a utility module in VS Code. This step enhances code organization for 2025.",
      children: [
        {
          name: "Modules",
          description:
            "Create and use modules, taught with a task utils module.",
          children: [
            {
              name: "CommonJS",
              description: "Use module.exports, taught with an export example.",
            },
            {
              name: "Importing Modules",
              description: "Require modules, taught with a require example.",
            },
            {
              name: "ES Modules",
              description: "Use import/export, taught with a .mjs example.",
            },
          ],
        },
        {
          name: "npm",
          description:
            "Manage packages with npm, taught with a library install example.",
          children: [
            {
              name: "Initialize Project",
              description: "Run npm init, taught with a package.json example.",
            },
            {
              name: "Install Packages",
              description: "Install lodash, taught with npm install lodash.",
            },
            {
              name: "Scripts",
              description:
                "Add npm scripts, taught with a start script example.",
            },
          ],
        },
      ],
      dividerText: "explore asynchronous programming.",
    },
    {
      name: " Asynchronous Programming",
      description:
        "Master async patterns in Node.js, taught with a file reader in VS Code. This step is crucial for 2025 performance.",
      children: [
        {
          name: "Callbacks",
          description:
            "Use callbacks for async, taught with a fs.readFile example.",
          children: [
            {
              name: "Callback Basics",
              description:
                "Define callbacks, taught with a file callback example.",
            },
            {
              name: "Error Handling",
              description:
                "Handle errors, taught with an error-first callback.",
            },
            {
              name: "Callback Hell",
              description: "Avoid nesting, taught with a nested example.",
            },
          ],
        },
        {
          name: "Promises",
          description:
            "Work with Promises, taught with a promisified fs example.",
          children: [
            {
              name: "Promise Creation",
              description: "Create Promises, taught with a resolve example.",
            },
            {
              name: "Then/Catch",
              description: "Chain Promises, taught with a file read example.",
            },
            {
              name: "Promise.all",
              description: "Handle multiple, taught with a multi-file example.",
            },
          ],
        },
        {
          name: "Async/Await",
          description:
            "Use async/await, taught with an async file read example.",
          children: [
            {
              name: "Async Functions",
              description:
                "Define async, taught with an async function example.",
            },
            {
              name: "Await Keyword",
              description: "Use await, taught with a Promise example.",
            },
            {
              name: "Error Handling",
              description: "Try/catch, taught with an async error example.",
            },
          ],
        },
      ],
      dividerText: "build servers with Express.js.",
    },
    {
      name: " Express.js Basics",
      description:
        "Learn Express.js for web servers, taught with a simple API in VS Code. This step introduces 2025 backend development.",
      children: [
        {
          name: "Setup Express",
          description:
            "Install and configure Express, taught with a basic server example.",
          children: [
            {
              name: "Installation",
              description: "Install Express, taught with npm install express.",
            },
            {
              name: "Basic Server",
              description: "Create server, taught with app.listen example.",
            },
            {
              name: "Routes",
              description: "Define routes, taught with a /hello route example.",
            },
          ],
        },
        {
          name: "Middleware",
          description:
            "Use middleware, taught with a logging middleware example.",
          children: [
            {
              name: "Built-in Middleware",
              description:
                "Use express.json, taught with a JSON parse example.",
            },
            {
              name: "Custom Middleware",
              description: "Create custom, taught with a log time example.",
            },
            {
              name: "Third-Party Middleware",
              description:
                "Use morgan, taught with npm install morgan example.",
            },
          ],
        },
      ],
      dividerText: "enhance Express with APIs.",
    },
    {
      name: " Building RESTful APIs",
      description:
        "Create RESTful APIs with Express, taught with a task API in VS Code. This step strengthens 2025 backend skills.",
      children: [
        {
          name: "HTTP Methods",
          description:
            "Implement REST methods, taught with a CRUD API example.",
          children: [
            {
              name: "GET",
              description: "Fetch data, taught with a get tasks example.",
            },
            {
              name: "POST",
              description: "Create data, taught with a post task example.",
            },
            {
              name: "PUT and DELETE",
              description: "Update/delete, taught with put/delete examples.",
            },
          ],
        },
        {
          name: "Routing",
          description:
            "Organize routes, taught with an Express router example.",
          children: [
            {
              name: "Basic Routing",
              description: "Use app.get, taught with a route example.",
            },
            {
              name: "Route Parameters",
              description: "Use params, taught with a /tasks/:id example.",
            },
            {
              name: "Router Module",
              description: "Split routes, taught with a router file example.",
            },
          ],
        },
        {
          name: "Request/Response",
          description: "Handle req/res, taught with a JSON response example.",
          children: [
            {
              name: "Request Body",
              description: "Access body, taught with a req.body example.",
            },
            {
              name: "Response Status",
              description: "Set status, taught with a res.status example.",
            },
            {
              name: "JSON Response",
              description: "Send JSON, taught with a res.json example.",
            },
          ],
        },
      ],
      dividerText: "connect to databases.",
    },
    {
      name: " Databases with Node.js",
      description:
        "Integrate databases, taught with a task app using MongoDB in VS Code. This step enables 2025 data persistence.",
      children: [
        {
          name: "PostgreSQL with pg",
          description: "Use PostgreSQL, taught with a SQL query example.",
          children: [
            {
              name: "Setup pg",
              description: "Install pg, taught with npm install pg.",
            },
            {
              name: "Connect to DB",
              description: "Create client, taught with a connection example.",
            },
            {
              name: "Queries",
              description: "Run queries, taught with a SELECT example.",
            },
          ],
        },
        {
          name: "MongoDB with Mongoose",
          description: "Use MongoDB, taught with a task schema example.",
          children: [
            {
              name: "Setup Mongoose",
              description:
                "Install Mongoose, taught with npm install mongoose.",
            },
            {
              name: "Schema and Model",
              description: "Define schema, taught with a Task model example.",
            },
            {
              name: "CRUD Operations",
              description: "Perform CRUD, taught with a save/find example.",
            },
          ],
        },
      ],
      dividerText: "handle errors and logging.",
    },
    {
      name: " Error Handling and Logging",
      description:
        "Manage errors and logs, taught with an Express API in VS Code. This step ensures 2025 app reliability.",
      children: [
        {
          name: "Error Handling",
          description:
            "Catch errors, taught with a try/catch middleware example.",
          children: [
            {
              name: "Try/Catch",
              description: "Use try/catch, taught with an async error example.",
            },
            {
              name: "Error Middleware",
              description:
                "Define error handler, taught with an app.use example.",
            },
            {
              name: "Custom Errors",
              description: "Throw errors, taught with a custom error example.",
            },
          ],
        },
        {
          name: "Logging",
          description: "Log events, taught with a Winston logger example.",
          children: [
            {
              name: "Console Logging",
              description: "Use console.log, taught with a basic log example.",
            },
            {
              name: "Winston Setup",
              description: "Install Winston, taught with npm install winston.",
            },
            {
              name: "Log Levels",
              description: "Use info/error, taught with a log level example.",
            },
          ],
        },
      ],
      dividerText: "secure your Node.js app.",
    },
    {
      name: " Security and Authentication",
      description:
        "Secure your app, taught with an Express API using JWT in VS Code. This step protects 2025 applications.",
      children: [
        {
          name: "Basic Security",
          description: "Apply security basics, taught with helmet example.",
          children: [
            {
              name: "Helmet",
              description: "Install helmet, taught with npm install helmet.",
            },
            {
              name: "CORS",
              description: "Set up CORS, taught with npm install cors example.",
            },
            {
              name: "Rate Limiting",
              description:
                "Limit requests, taught with express-rate-limit example.",
            },
          ],
        },
        {
          name: "Authentication",
          description: "Add auth with JWT, taught with a login route example.",
          children: [
            {
              name: "JWT Setup",
              description:
                "Install jsonwebtoken, taught with npm install jsonwebtoken.",
            },
            {
              name: "User Login",
              description: "Create token, taught with a sign example.",
            },
            {
              name: "Protect Routes",
              description: "Verify token, taught with a middleware example.",
            },
          ],
        },
      ],
      dividerText: "test your Node.js app.",
    },
    {
      name: " Testing Node.js",
      description:
        "Test your app, taught with an Express API using Jest in VS Code. This step ensures 2025 quality.",
      children: [
        {
          name: "Unit Testing",
          description: "Test with Jest, taught with a route test example.",
          children: [
            {
              name: "Jest Setup",
              description: "Install Jest, taught with npm install jest.",
            },
            {
              name: "Writing Tests",
              description: "Write test cases, taught with an expect example.",
            },
            {
              name: "Mocking",
              description: "Mock functions, taught with a mock fs example.",
            },
          ],
        },
        {
          name: "Supertest",
          description: "Test APIs, taught with an endpoint test example.",
          children: [
            {
              name: "Setup Supertest",
              description:
                "Install Supertest, taught with npm install supertest.",
            },
            {
              name: "API Testing",
              description: "Test routes, taught with a GET test example.",
            },
            {
              name: "Assertions",
              description:
                "Check responses, taught with a status check example.",
            },
          ],
        },
      ],
      dividerText: "deploy your Node.js app.",
    },
    {
      name: " Deployment",
      description:
        "Deploy Node.js apps, taught with an Express app on Heroku in VS Code. This step prepares for 2025 production.",
      children: [
        {
          name: "Local Deployment",
          description: "Run locally, taught with a pm2 example.",
          children: [
            {
              name: "PM2 Setup",
              description: "Install PM2, taught with npm install pm2.",
            },
            {
              name: "Start App",
              description:
                "Use pm2 start, taught with a start command example.",
            },
            {
              name: "Monitor",
              description: "Monitor app, taught with pm2 monit example.",
            },
          ],
        },
        {
          name: "Cloud Deployment",
          description: "Deploy to Heroku, taught with a git push example.",
          children: [
            {
              name: "Heroku Setup",
              description: "Install Heroku CLI, taught with heroku login.",
            },
            {
              name: "Procfile",
              description: "Create Procfile, taught with a node example.",
            },
            {
              name: "Deploy Process",
              description: "Push to Heroku, taught with git push heroku main.",
            },
          ],
        },
      ],
      dividerText: "explore advanced Node.js.",
    },
    {
      name: " Advanced Node.js",
      description:
        "Master advanced Node.js features, taught with a task processor in VS Code. This step refines 2025 expertise.",
      children: [
        {
          name: "Streams",
          description: "Use streams, taught with a file stream example.",
          children: [
            {
              name: "Readable Streams",
              description:
                "Read streams, taught with a fs.createReadStream example.",
            },
            {
              name: "Writable Streams",
              description:
                "Write streams, taught with a fs.createWriteStream example.",
            },
            {
              name: "Piping",
              description: "Pipe streams, taught with a file copy example.",
            },
          ],
        },
        {
          name: "Child Processes",
          description: "Run processes, taught with a script spawn example.",
          children: [
            {
              name: "Exec",
              description: "Use exec, taught with a command example.",
            },
            {
              name: "Spawn",
              description: "Use spawn, taught with a process example.",
            },
            {
              name: "Communication",
              description: "Send data, taught with a message example.",
            },
          ],
        },
        {
          name: "Worker Threads",
          description: "Use threads, taught with a task worker example.",
          children: [
            {
              name: "Worker Setup",
              description: "Create worker, taught with a worker file example.",
            },
            {
              name: "Thread Communication",
              description: "Send messages, taught with a postMessage example.",
            },
            {
              name: "Use Cases",
              description: "Heavy tasks, taught with a compute example.",
            },
          ],
        },
      ],
      dividerText: "scale and optimize.",
    },
    {
      name: " Scaling and Optimization",
      description:
        "Scale and optimize Node.js apps, taught with a clustered Express app in VS Code. This step ensures 2025 performance.",
      children: [
        {
          name: "Clustering",
          description: "Use clustering, taught with a cluster module example.",
          children: [
            {
              name: "Cluster Setup",
              description:
                "Use cluster, taught with a cluster.isMaster example.",
            },
            {
              name: "Fork Workers",
              description: "Fork processes, taught with a fork example.",
            },
            {
              name: "Load Balancing",
              description: "Balance load, taught with a round-robin example.",
            },
          ],
        },
        {
          name: "Performance",
          description: "Optimize performance, taught with a caching example.",
          children: [
            {
              name: "Caching",
              description: "Use redis, taught with npm install redis example.",
            },
            {
              name: "Profiling",
              description: "Profile app, taught with a --prof example.",
            },
            {
              name: "Rate Limiting",
              description:
                "Limit requests, taught with a rate limiter example.",
            },
          ],
        },
      ],
      dividerText: "specialize and contribute.",
    },
    {
      name: " Specialization and Contribution",
      description:
        "Specialize and contribute to Node.js, taught with a real-time app and GitHub PR. This step elevates 2025 expertise.",
      children: [
        {
          name: "Specialization",
          description:
            "Focus on Node.js niches, taught with a Socket.IO app example.",
          children: [
            {
              name: "Real-Time with Socket.IO",
              description: "Build real-time, taught with a chat app example.",
            },
            {
              name: "GraphQL",
              description: "Use Apollo, taught with a GraphQL server example.",
            },
            {
              name: "Microservices",
              description: "Build microservices, taught with a Docker example.",
            },
          ],
        },
        {
          name: "Contribute to Open Source",
          description:
            "Contribute to Node.js projects, taught with a PR to Express.",
          children: [
            {
              name: "Find Projects",
              description: "Search GitHub, taught with a repo find example.",
            },
            {
              name: "Fork & Clone",
              description: "Clone repo, taught with git steps.",
            },
            {
              name: "Submit PR",
              description: "Push change, taught with a PR example.",
            },
          ],
        },
      ],
      dividerText: "commit to continuous learning.",
    },
    {
      name: " Continuous Learning",
      description:
        "Stay updated in 2025, taught with resources like Node.js docs and X posts.",
      children: [
        {
          name: "Documentation",
          description: "Use Node.js docs, taught with a feature dive example.",
        },
        {
          name: "Communities",
          description: "Join Reddit, taught with a Node.js subreddit example.",
        },
        {
          name: "Trends",
          description: "Follow X, taught with Node.js trend tracking tips.",
        },
      ],
    },
  ],
};

export default nodeDeveloperRoadmap;
