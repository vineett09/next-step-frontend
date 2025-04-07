const springBootDeveloperRoadmap = {
  name: "Spring Boot Developer Roadmap for Beginners to Advanced 2025",
  children: [
    {
      name: "Spring Boot Foundations",
      children: [
        {
          name: "Spring Boot Basics",
          children: [
            {
              name: "What is Spring Boot",
            },

            {
              name: "Advantages",
            },
            {
              name: "Spring Boot vs Spring",
            },
            {
              name: "First Look",
            },
          ],
        },
        {
          name: "Setup",
          children: [
            {
              name: "Java JDK",
              preferred: true,
            },
            {
              name: "Maven",
              preferred: true,
            },

            {
              name: "IntelliJ IDEA",
              preferred: true,
            },
            {
              name: "Gradle",
            },
            {
              name: "First App",
            },
          ],
        },
      ],
      dividerText: " Master Java basics for Spring Boot.",
    },
    {
      name: "Java Basics for Spring Boot",
      children: [
        {
          name: "Syntax and Variables",
          children: [
            {
              name: "Syntax Overview",
            },
            {
              name: "Variables",
            },
            {
              name: "Data Types",
            },
          ],
        },
        {
          name: "OOP and Collections",
          children: [
            {
              name: "Classes and Objects",
            },
            {
              name: "Inheritance",
            },
            {
              name: "Collections",
            },
          ],
        },
      ],
      dividerText: " Learn Spring Boot essentials.",
    },
    {
      name: "Spring Boot Essentials",
      children: [
        {
          name: "Core Concepts",
          children: [
            {
              name: "Auto-Configuration",
            },
            {
              name: "Starters",
            },
            {
              name: "Actuators",
            },
            {
              name: "Hibernate",
            },
            {
              name: "Embedded Server",
            },
          ],
        },
        {
          name: "Dependency Injection",
          children: [
            {
              name: "@Autowired",
            },
            {
              name: "@Component",
            },
            {
              name: "IoC Container",
            },
          ],
        },
      ],
      dividerText: " Build REST APIs with Spring Boot.",
    },
    {
      name: "REST APIs",
      children: [
        {
          name: "Controllers",
          children: [
            {
              name: "@RestController",
            },
            {
              name: "@RequestMapping",
            },
            {
              name: "HTTP Methods",
            },
          ],
        },
        {
          name: "Request and Response",
          children: [
            {
              name: "@RequestBody",
            },
            {
              name: "@ResponseBody",
            },
            {
              name: "ResponseEntity",
            },
          ],
        },
      ],
      dividerText: " Manage data persistence.",
    },
    {
      name: "Persistence",
      children: [
        {
          name: "JPA Basics",
          children: [
            {
              name: "@Entity",
              preferred: true,
            },
            {
              name: "@Id",
            },
            {
              name: "JPA Repository",
            },
          ],
        },
        {
          name: "Database Integration",
          children: [
            {
              name: "PostgreSQL",
              preferred: true,
            },
            {
              name: "H2 Database",
            },

            {
              name: "application.properties",
            },
          ],
        },
      ],
      dividerText: " Secure Spring Boot applications.",
    },
    {
      name: "Security",
      children: [
        {
          name: "Basic Security",
          children: [
            {
              name: "spring-boot-starter-security",
            },
            {
              name: "@EnableWebSecurity",
            },
            {
              name: "HTTP Basic",
            },
          ],
        },
        {
          name: "Advanced Security",
          children: [
            {
              name: "JWT",
              preferred: true,
            },
            {
              name: "@PreAuthorize",
            },
            {
              name: "CSRF Protection",
            },
          ],
        },
      ],
      dividerText: " Test Spring Boot applications.",
    },
    {
      name: "Testing",
      children: [
        {
          name: "Unit Testing",
          children: [
            {
              name: "JUnit",
              preferred: true,
            },
            {
              name: "Mockito",
            },
          ],
        },
        {
          name: "Integration Testing",
          children: [
            {
              name: "@SpringBootTest",
              preferred: true,
            },
            {
              name: "TestRestTemplate",
            },
          ],
        },
      ],
      dividerText: " Deploy and manage Spring Boot apps.",
    },
    {
      name: "Deployment",
      children: [
        {
          name: "Build and Packaging",
          children: [
            {
              name: "Maven Build",
              preferred: true,
            },
            { name: "Gradle Build" },
            {
              name: "Executable JAR",
            },
          ],
        },
        {
          name: "Deployment Options",
          children: [
            {
              name: "AWS Elastic Beanstalk",
              preferred: true,
            },
            {
              name: "Tomcat Server",
            },

            { name: "Docker" },
          ],
        },
      ],
      dividerText: " Explore advanced Spring Boot topics.",
    },
    {
      name: "Advanced Spring Boot Topics",
      children: [
        {
          name: "Microservices",
          children: [
            {
              name: "Spring Cloud",
            },
            {
              name: "Eureka",
            },
            {
              name: "Config Server",
            },
            {
              name: "Sleuth",
            },
          ],
        },
        {
          name: "Messaging and Monitoring",
          children: [
            {
              name: "Kafka",
              preferred: true,
            },
            {
              name: "Actuator",
            },
          ],
        },
      ],
      dividerText: " Practice and learn with resources.",
    },
    {
      name: "Practice and Resources",
      children: [
        {
          name: "Projects",
          children: [
            {
              name: "REST CRUD API",
            },
            { name: "User Auth Service" },
            {
              name: "Microservices App",
            },
          ],
        },
        {
          name: "Learning Resources",
          children: [
            {
              name: "Spring.io",
              preferred: true,
            },
            {
              name: "Baeldung",
            },
            {
              name: "Spring Community",
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

export default springBootDeveloperRoadmap;
