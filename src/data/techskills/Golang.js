const goDeveloperRoadmap = {
  name: "Go Developer Roadmap for Beginners to Advanced 2025",
  description:
    "This roadmap guides you from zero Go knowledge to advanced mastery by 2025. It emphasizes Go’s strengths—simplicity, concurrency, and scalability—covering syntax, tools, frameworks, CLI development, logging, microservices, and API clients. With projects and resources, you’ll build skills for web development, system programming, and distributed systems.",
  children: [
    {
      name: "Getting Started with Go",
      description:
        "Lay the groundwork by understanding Go and setting up your environment.",
      children: [
        {
          name: "Why Go",
          description:
            "Explore Go’s purpose and strengths to motivate your learning.",
          children: [
            { name: "Simplicity", description: "Minimal syntax focus." },
            { name: "Performance", description: "Compiled language benefits." },
            {
              name: "Concurrency",
              description: "Built-in concurrency features.",
            },
          ],
        },
        {
          name: "Setup and First Steps",
          description: "Prepare your tools and write your first Go code.",
          children: [
            {
              name: "Go Installation",
              description: "Getting Go on your system.",
            },
            {
              name: "Editor Choice",
              description: "Tools like VS Code or GoLand.",
            },
            {
              name: "First Program",
              description: "Basic Go program structure.",
            },
          ],
        },
      ],
      dividerText: " Learn core syntax and basics.",
    },
    {
      name: "Core Syntax and Basics",
      description: "Master Go’s foundational syntax and essential concepts.",
      children: [
        {
          name: "Variables and Types",
          description: "Understand Go’s approach to data and typing.",
          children: [
            {
              name: "Declarations",
              description: "Variable declaration styles.",
            },
            { name: "Basic Types", description: "Core data types in Go." },
            { name: "Zero Values", description: "Default values for types." },
          ],
        },
        {
          name: "Control Flow",
          description: "Manage program logic and flow.",
          children: [
            { name: "If Statements", description: "Conditional logic." },
            { name: "Switch", description: "Multi-case condition handling." },
            { name: "For Loops", description: "Iteration in Go." },
          ],
        },
      ],
      dividerText: " Work with functions and utilities.",
    },
    {
      name: "Functions and Utilities",
      description: "Structure code and use Go’s utility features effectively.",
      children: [
        {
          name: "Function Basics",
          description: "Key elements of functions in Go.",
          children: [
            { name: "Syntax", description: "Function declaration format." },
            {
              name: "Multiple Returns",
              description: "Returning multiple values.",
            },
            { name: "Named Returns", description: "Named return variables." },
          ],
        },
        {
          name: "Utility Features",
          description: "Small tools enhancing Go programming.",
          children: [
            { name: "Defer", description: "Deferred function calls." },
            { name: "Constants", description: "Immutable values." },
            { name: "iota", description: "Auto-incrementing constants." },
          ],
        },
      ],
      dividerText: " Manage data with Go’s built-in types.",
    },
    {
      name: "Data Management",
      description: "Handle data using Go’s collection and custom types.",
      children: [
        {
          name: "Slices and Arrays",
          description: "Work with sequential data structures.",
          children: [
            { name: "Arrays", description: "Fixed-size collections." },
            { name: "Slices", description: "Dynamic arrays." },
            {
              name: "Slice Operations",
              description: "Key slice manipulations.",
            },
          ],
        },
        {
          name: "Maps and Structs",
          description: "Organize data with key-value and custom types.",
          children: [
            { name: "Maps", description: "Key-value pair collections." },
            { name: "Structs", description: "Custom data structures." },
            {
              name: "Anonymous Structs",
              description: "Inline struct definitions.",
            },
          ],
        },
      ],
      dividerText: " Organize code with packages.",
    },
    {
      name: "Packages and Modules",
      description: "Structure code and manage dependencies in Go.",
      children: [
        {
          name: "Packages",
          description: "Go’s approach to code modularity.",
          children: [
            { name: "Package Creation", description: "Defining packages." },
            { name: "Imports", description: "Using external code." },
            { name: "Visibility", description: "Export rules in Go." },
          ],
        },
        {
          name: "Modules",
          description: "Dependency management system.",
          children: [
            { name: "Module Basics", description: "Module initialization." },
            { name: "Dependencies", description: "Adding external libraries." },
            { name: "Vendoring", description: "Local dependency storage." },
          ],
        },
      ],
      dividerText: " Handle errors effectively.",
    },
    {
      name: "Error Handling",
      description: "Implement robust error management in Go.",
      children: [
        {
          name: "Basic Error Handling",
          description: "Core error handling concepts.",
          children: [
            { name: "Error Type", description: "Go’s error interface." },
            { name: "Error Checking", description: "Standard error patterns." },
          ],
        },
        {
          name: "Advanced Error Handling",
          description: "Enhanced error techniques.",
          children: [
            { name: "Custom Errors", description: "User-defined errors." },
            {
              name: "Panic and Recover",
              description: "Exception-like handling.",
            },
            { name: "Error Wrapping", description: "Adding error context." },
          ],
        },
      ],
      dividerText: " Master concurrency in Go.",
    },
    {
      name: "Concurrency",
      description:
        "Leverage Go’s concurrency features for efficient multitasking.",
      children: [
        {
          name: "Goroutines",
          description: "Lightweight threading in Go.",
          children: [
            {
              name: "Goroutine Basics",
              description: "Core goroutine concepts.",
            },
            { name: "Synchronization", description: "Managing goroutines." },
            { name: "Context", description: "Cancellation and timeouts." },
          ],
        },
        {
          name: "Channels and Advanced Concurrency",
          description: "Inter-goroutine communication and patterns.",
          children: [
            { name: "Channel Basics", description: "Core channel concepts." },
            { name: "Buffered Channels", description: "Channel capacity." },
            { name: "Select", description: "Multiplexing channels." },
            { name: "Fan-Out/Fan-In", description: "Concurrency patterns." },
            { name: "Worker Pools", description: "Task distribution." },
          ],
        },
      ],
      dividerText: " Build CLI tools and logging.",
    },
    {
      name: "CLI Tools and Logging",
      description:
        "Create command-line tools and implement logging for applications.",
      children: [
        {
          name: "Building CLI Tools",
          description: "Develop command-line interfaces in Go.",
          children: [
            { name: "Flag Package", description: "Basic argument parsing." },
            { name: "Cobra", description: "Advanced CLI framework." },
            { name: "Urfave CLI", description: "Alternative CLI library." },
          ],
        },
        {
          name: "Logging Tools",
          description: "Add logging for debugging and monitoring.",
          children: [
            { name: "Log Package", description: "Standard logging." },
            { name: "Zap", description: "High-performance logging." },
            { name: "Logrus", description: "Structured logging." },
          ],
        },
      ],
      dividerText: " Develop web applications and APIs.",
    },
    {
      name: "Web Development and API Clients",
      description: "Build web servers and interact with APIs.",
      children: [
        {
          name: "Web Servers",
          description: "Create web applications in Go.",
          children: [
            { name: "HTTP Handling", description: "Core HTTP library." },
            {
              name: "Gin Framework",
              description: "High-performance framework.",
            },
            { name: "Routing", description: "Request routing." },
          ],
        },
        {
          name: "API Clients",
          description: "Consume and integrate with external APIs.",
          children: [
            { name: "REST Clients", description: "HTTP request handling." },
            { name: "GraphQL Clients", description: "Querying GraphQL APIs." },
            { name: "Authentication", description: "OAuth, API keys." },
          ],
        },
      ],
      dividerText: " Work with databases.",
    },
    {
      name: "Database Integration",
      description: "Connect Go applications to various databases.",
      children: [
        {
          name: "SQL Databases",
          description: "Relational database support.",
          children: [
            { name: "database/sql", description: "Standard SQL library." },
            { name: "Gorm", description: "ORM for SQL databases." },
          ],
        },
        {
          name: "NoSQL Databases",
          description: "Non-relational database options.",
          children: [
            { name: "MongoDB", description: "Document database support." },
            { name: "Redis", description: "Key-value store integration." },
          ],
        },
      ],
      dividerText: " Explore microservices.",
    },
    {
      name: "Microservices",
      description: "Design and implement scalable microservices in Go.",
      children: [
        {
          name: "Microservices Basics",
          description: "Core concepts of microservices.",
          children: [
            {
              name: "Service Design",
              description: "Defining service boundaries.",
            },
            { name: "gRPC", description: "Remote procedure calls." },
            { name: "REST APIs", description: "HTTP-based services." },
          ],
        },
        {
          name: "Advanced Microservices",
          description: "Tools and patterns for distributed systems.",
          children: [
            { name: "Message Brokers", description: "Kafka, RabbitMQ." },
            { name: "Service Discovery", description: "Finding services." },
            { name: "Load Balancing", description: "Distributing requests." },
            { name: "Circuit Breakers", description: "Fault tolerance." },
          ],
        },
      ],
      dividerText: " Test and deploy applications.",
    },
    {
      name: "Testing and Deployment",
      description: "Ensure quality and deploy Go applications.",
      children: [
        {
          name: "Testing",
          description: "Writing tests for reliability.",
          children: [
            { name: "Unit Testing", description: "Basic test framework." },
            { name: "Testify", description: "Test enhancements." },
            { name: "Mocking", description: "Simulating dependencies." },
          ],
        },
        {
          name: "Deployment",
          description: "Getting apps to production.",
          children: [
            { name: "Building", description: "Compiling Go binaries." },
            { name: "Docker", description: "Containerization." },
            { name: "CI/CD", description: "Automated pipelines." },
          ],
        },
      ],
      dividerText: " Master advanced topics.",
    },
    {
      name: "Advanced Topics",
      description: "Explore complex Go concepts and optimizations.",
      children: [
        {
          name: "Advanced Concurrency",
          description: "Deep dive into concurrency patterns.",
          children: [
            { name: "Mutexes", description: "Synchronization primitives." },
            { name: "Atomics", description: "Lock-free operations." },
            {
              name: "Pipeline Patterns",
              description: "Data processing flows.",
            },
          ],
        },
        {
          name: "Language Features",
          description: "Cutting-edge Go capabilities.",
          children: [
            { name: "Reflection", description: "Dynamic type handling." },
            { name: "Generics", description: "Type-safe generics." },
            {
              name: "Performance Tuning",
              description: "Optimizing with pprof.",
            },
          ],
        },
      ],
      dividerText: " Apply skills with projects and resources.",
    },
    {
      name: "Resources and Practice",
      description: "Enhance learning with resources and hands-on practice.",
      children: [
        {
          name: "Learning Resources",
          description: "Curated materials for study.",
          children: [
            { name: "Books", description: "Key Go texts." },
            { name: "Tutorials", description: "Online learning guides." },
            { name: "Courses", description: "Structured video courses." },
          ],
        },
        {
          name: "Practice and Community",
          description: "Build skills and connect.",
          children: [
            { name: "Projects", description: "Real-world applications." },
            { name: "Coding Platforms", description: "Practice environments." },
            { name: "Communities", description: "Go developer networks." },
          ],
        },
      ],
    },
    {
      name: "Continuous Learning",
      description: "Stay updated with Go’s evolving features and practices.",
    },
  ],
};

export default goDeveloperRoadmap;
