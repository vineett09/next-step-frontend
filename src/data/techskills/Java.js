const javaDeveloperRoadmap = {
  name: "Java Developer Roadmap for Beginners 2025",
  children: [
    {
      name: "Java Basics",
      children: [
        {
          name: "Syntax and Basic Constructs",
          children: [
            { name: "Data Types and Variables" },
            { name: "Operators" },
            { name: "Control Flow Structures" },
            { name: "Type Casting" },
          ],
        },
        {
          name: "Object-Oriented Programming",
          children: [
            { name: "Encapsulation" },
            { name: "Inheritance" },
            { name: "Polymorphism" },
            { name: "Abstraction" },
          ],
        },
      ],
      dividerText: " Explore modern Java features.",
    },
    {
      name: "Modern Java Features",
      children: [
        {
          name: "Java 8+ Features",
          children: [
            { name: "Lambda Expressions" },
            { name: "Streams API" },
            { name: "Optional Class" },
            { name: "Modules (Java 9)" },
          ],
        },
        {
          name: "Concurrency and Multithreading",
          children: [
            { name: "ExecutorService" },
            { name: "Synchronization" },
            { name: "CompletableFuture" },
          ],
        },
      ],
      dividerText: " Learn database fundamentals.",
    },
    {
      name: "Database Fundamentals",
      children: [
        {
          name: "Relational Databases and SQL",
          children: [
            { name: "SQL Fundamentals" },
            { name: "Database Design" },
            { name: "Transaction Management" },
          ],
        },
        {
          name: "NoSQL Databases",
          children: [
            { name: "Types of NoSQL Databases" },
            { name: "MongoDB Basics" },
            { name: "Use Cases for NoSQL" },
          ],
        },
      ],
      dividerText: " Connect Java to databases.",
    },
    {
      name: "Database Integration in Java",
      children: [
        {
          name: "JDBC and Connection Pooling",
          children: [{ name: "JDBC Basics" }, { name: "Connection Pooling" }],
        },
        {
          name: "Hibernate ORM",
          children: [
            { name: "Entity Mapping" },
            { name: "HQL and Criteria API" },
            { name: "Lazy Loading and Fetching" },
          ],
        },
      ],
      dividerText: " Dive into Spring Framework essentials.",
    },
    {
      name: "Spring Framework Essentials",
      children: [
        {
          name: "Spring Framework Fundamentals",
          children: [
            { name: "Dependency Injection (DI)" },
            { name: "Bean Scopes and Lifecycle" },
          ],
        },
        {
          name: "Spring Boot for Rapid Development",
          children: [
            { name: "Starter Dependencies" },
            { name: "Embedded Servers" },
            { name: "Actuator" },
          ],
        },
      ],
      dividerText: " Build backend services with Spring.",
    },
    {
      name: "Building Backend Services",
      children: [
        {
          name: "Building RESTful APIs",
          children: [
            { name: "Endpoint Design" },
            { name: "Request Validation" },
            { name: "Exception Handling" },
          ],
        },
        {
          name: "Security with Spring Security",
          children: [
            { name: "Authentication and Authorization" },
            { name: "OAuth2 and JWT" },
            { name: "Integration with Identity Providers" },
          ],
        },
      ],
      dividerText: " Add frontend development skills.",
    },
    {
      name: "Frontend Development Basics",
      children: [
        {
          name: "HTML/CSS and JavaScript Basics",
          children: [
            { name: "Responsive Design" },
            { name: "JavaScript ES6+" },
          ],
        },
        {
          name: "Frontend Frameworks",
          children: [
            { name: "React" },
            { name: "Angular" },
            { name: "Backend Integration" },
          ],
        },
      ],
      dividerText: " Implement testing strategies.",
    },
    {
      name: "Testing Strategies",
      children: [
        {
          name: "Unit Testing with ",
          children: [{ name: "JUnit 5" }, { name: "Mockito" }],
        },
        {
          name: "Integration Testing",
          children: [
            { name: "Spring Boot Testing" },
            { name: "Database Testing" },
          ],
        },
        {
          name: "Test-Driven Development (TDD)",
          children: [{ name: "TDD Workflow" }, { name: "Code Coverage" }],
        },
      ],
      dividerText: " Automate builds and deployments.",
    },
    {
      name: "Build and Deployment Automation",
      children: [
        {
          name: "Maven and Gradle",
          children: [{ name: "Maven" }, { name: "Gradle" }],
        },
        {
          name: "CI/CD Pipelines",
          children: [{ name: "Automation Tools" }, { name: "Deployment" }],
        },
        {
          name: "Containerization with Docker",
          children: [
            { name: "Dockerfiles" },
            { name: "docker-compose" },
            { name: "Kubernetes" },
          ],
        },
      ],
      dividerText: " Explore advanced development concepts.",
    },
    {
      name: "Advanced Development Concepts",
      children: [
        {
          name: "Microservices with Spring Cloud",
          children: [
            { name: "Service Discovery" },
            { name: "API Gateway" },
            { name: "Distributed Tracing" },
          ],
        },
        {
          name: "Event-Driven Architecture",
          children: [
            { name: "Messaging Systems" },
            { name: "Stream Processing" },
          ],
        },
        {
          name: "Cloud-Native Development",
          children: [
            { name: "Cloud Platforms" },
            { name: "Secret Management" },
            { name: "Auto-Scaling" },
          ],
        },
      ],
    },
    {
      name: "Continous Learning",
    },
  ],
};

export default javaDeveloperRoadmap;
