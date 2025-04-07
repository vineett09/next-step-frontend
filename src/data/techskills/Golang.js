const goDeveloperRoadmap = {
  name: "Go Developer Roadmap for Beginners to Advanced 2025",
  children: [
    {
      name: "Getting Started with Go",
      children: [
        {
          name: "Why Go",
          children: [
            { name: "Simplicity" },
            { name: "Performance" },
            { name: "Concurrency" },
          ],
        },
        {
          name: "Setup and First Steps",
          children: [
            { name: "Go Installation" },
            { name: "Editor Choice" },
            { name: "First Program" },
          ],
        },
      ],
      dividerText: " Learn core syntax and basics.",
    },
    {
      name: "Core Syntax and Basics",
      children: [
        {
          name: "Variables and Types",
          children: [
            { name: "Declarations" },
            { name: "Basic Types" },
            { name: "Zero Values" },
          ],
        },
        {
          name: "Control Flow",
          children: [
            { name: "If Statements" },
            { name: "Switch" },
            { name: "For Loops" },
          ],
        },
      ],
      dividerText: " Work with functions and utilities.",
    },
    {
      name: "Functions and Utilities",
      children: [
        {
          name: "Function Basics",
          children: [
            { name: "Syntax" },
            { name: "Multiple Returns" },
            { name: "Named Returns" },
          ],
        },
        {
          name: "Utility Features",
          children: [
            { name: "Defer" },
            { name: "Constants" },
            { name: "iota" },
          ],
        },
      ],
      dividerText: " Manage data with Go’s built-in types.",
    },
    {
      name: "Data Management",
      children: [
        {
          name: "Slices and Arrays",
          children: [
            { name: "Arrays" },
            { name: "Slices" },
            { name: "Slice Operations" },
          ],
        },
        {
          name: "Maps and Structs",
          children: [
            { name: "Maps" },
            { name: "Structs" },
            { name: "Anonymous Structs" },
          ],
        },
      ],
      dividerText: " Organize code with packages.",
    },
    {
      name: "Packages and Modules",
      children: [
        {
          name: "Packages",
          children: [
            { name: "Package Creation" },
            { name: "Imports" },
            { name: "Visibility" },
          ],
        },
        {
          name: "Modules",
          children: [
            { name: "Module Basics" },
            { name: "Dependencies" },
            { name: "Vendoring" },
          ],
        },
      ],
      dividerText: " Handle errors effectively.",
    },
    {
      name: "Error Handling",
      children: [
        {
          name: "Basic Error Handling",
          children: [{ name: "Error Type" }, { name: "Error Checking" }],
        },
        {
          name: "Advanced Error Handling",
          children: [
            { name: "Custom Errors" },
            { name: "Panic and Recover" },
            { name: "Error Wrapping" },
          ],
        },
      ],
      dividerText: " Master concurrency in Go.",
    },
    {
      name: "Concurrency",
      children: [
        {
          name: "Goroutines",
          children: [
            { name: "Goroutine Basics" },
            { name: "Synchronization" },
            { name: "Context" },
          ],
        },
        {
          name: "Channels and Advanced Concurrency",
          children: [
            { name: "Channel Basics" },
            { name: "Buffered Channels" },
            { name: "Select" },
            { name: "Fan-Out/Fan-In" },
            { name: "Worker Pools" },
          ],
        },
      ],
      dividerText: " Build CLI tools and logging.",
    },
    {
      name: "CLI Tools and Logging",
      children: [
        {
          name: "Building CLI Tools",
          children: [
            { name: "Flag Package" },
            { name: "Cobra" },
            { name: "Urfave CLI" },
          ],
        },
        {
          name: "Logging Tools",
          children: [
            { name: "Log Package" },
            { name: "Zap" },
            { name: "Logrus" },
          ],
        },
      ],
      dividerText: " Develop web applications and APIs.",
    },
    {
      name: "Web Development and API Clients",
      children: [
        {
          name: "Web Servers",
          children: [
            { name: "HTTP Handling" },
            { name: "Gin Framework" },
            { name: "Routing" },
          ],
        },
        {
          name: "API Clients",
          children: [
            { name: "REST Clients" },
            { name: "GraphQL Clients" },
            { name: "Authentication" },
          ],
        },
      ],
      dividerText: " Work with databases.",
    },
    {
      name: "Database Integration",
      children: [
        {
          name: "SQL Databases",
          children: [{ name: "database/sql" }, { name: "Gorm" }],
        },
        {
          name: "NoSQL Databases",
          children: [{ name: "MongoDB" }, { name: "Redis" }],
        },
      ],
      dividerText: " Explore microservices.",
    },
    {
      name: "Microservices",
      children: [
        {
          name: "Microservices Basics",
          children: [
            { name: "Service Design" },
            { name: "gRPC" },
            { name: "REST APIs" },
          ],
        },
        {
          name: "Advanced Microservices",
          children: [
            { name: "Message Brokers" },
            { name: "Service Discovery" },
            { name: "Load Balancing" },
            { name: "Circuit Breakers" },
          ],
        },
      ],
      dividerText: " Test and deploy applications.",
    },
    {
      name: "Testing and Deployment",
      children: [
        {
          name: "Testing",
          children: [
            { name: "Unit Testing" },
            { name: "Testify" },
            { name: "Mocking" },
          ],
        },
        {
          name: "Deployment",
          children: [
            { name: "Building" },
            { name: "Docker" },
            { name: "CI/CD" },
          ],
        },
      ],
      dividerText: " Master advanced topics.",
    },
    {
      name: "Advanced Topics",
      children: [
        {
          name: "Advanced Concurrency",
          children: [
            { name: "Mutexes" },
            { name: "Atomics" },
            { name: "Pipeline Patterns" },
          ],
        },
        {
          name: "Language Features",
          children: [
            { name: "Reflection" },
            { name: "Generics" },
            { name: "Performance Tuning" },
          ],
        },
      ],
      dividerText: " Apply skills with projects and resources.",
    },
    {
      name: "Resources and Practice",
      children: [
        {
          name: "Learning Resources",
          children: [
            { name: "Books" },
            { name: "Tutorials" },
            { name: "Courses" },
          ],
        },
        {
          name: "Practice and Community",
          children: [
            { name: "Projects" },
            { name: "Coding Platforms" },
            { name: "Communities" },
          ],
        },
      ],
    },
    {
      name: "Continuous Learning",
    },
  ],
};

export default goDeveloperRoadmap;
