const springBootDeveloperRoadmap = {
  name: "Spring Boot Developer Roadmap for Beginners to Advanced 2025",
  description:
    "This roadmap takes you from zero Spring Boot knowledge to advanced mastery by 2025, leveraging its power for rapid Java application development. It progresses through Java basics, Spring Boot essentials, REST APIs, persistence, security, testing, and advanced topics like microservices and cloud deployment. With projects and resources, you’ll build robust apps efficiently.",
  children: [
    {
      name: "Spring Boot Foundations",
      description:
        "Begin your Spring Boot journey by understanding its role as a Java framework for simplified application development. This section introduces Spring Boot’s history, benefits like embedded servers, and its Spring ecosystem roots. You’ll set up your environment with Java, Maven/Gradle, and an IDE, launching your first app.",
      children: [
        {
          name: "Spring Boot Basics",
          description:
            "Learn Spring Boot’s essence as a framework launched in 2014 by Pivotal, building on Spring. This section covers its purpose for rapid development, advantages like auto-configuration, and its role in microservices, preparing you for streamlined Java app creation.",
          children: [
            {
              name: "What is Spring Boot",
              description:
                "Spring Boot is a Java framework enhancing Spring with auto-configuration and embedded servers. It simplifies creating stand-alone, production-ready apps, focusing on convention over configuration for faster development cycles.",
            },

            {
              name: "Advantages",
              description:
                "Spring Boot offers embedded servers, auto-configuration, and a rich ecosystem. Its simplicity, dependency management, and Spring integration make it ideal for REST APIs, microservices, and rapid prototyping.",
            },
            {
              name: "Spring Boot vs Spring",
              description:
                "Unlike Spring’s manual setup, Spring Boot auto-configures with starters. It embeds servers like Tomcat, reducing complexity compared to Spring’s traditional WAR deployments.",
            },
            {
              name: "First Look",
              description:
                "Create a Spring Boot app with @SpringBootApplication and run it. A simple REST endpoint previews its convention-driven approach and embedded server simplicity.",
            },
          ],
        },
        {
          name: "Setup",
          description:
            "Set up your Spring Boot environment with Java, Maven/Gradle, and an IDE like IntelliJ IDEA. This section guides you through installation, project creation with Spring Initializr, and running your first app, ensuring a smooth start.",
          children: [
            {
              name: "Java JDK",
              description:
                "Install Java JDK (17+ recommended) for Spring Boot. Essential for compiling and running Java apps.",
              preferred: true,
            },
            {
              name: "Maven",
              description:
                "Use Maven (mvn) for dependency management, like mvn spring-boot:run. Preferred for its widespread use.",
              preferred: true,
            },

            {
              name: "IntelliJ IDEA",
              description:
                "Set up IntelliJ IDEA with Spring Boot plugin for coding and debugging. Preferred for its robust tools.",
              preferred: true,
            },
            {
              name: "Gradle",
              description:
                "Alternative to Maven with gradle bootRun. Lightweight and flexible for Spring Boot builds.",
            },
            {
              name: "First App",
              description:
                "Generate a project with Spring Initializr, add @RestController, and run. Introduces Spring Boot’s startup.",
            },
          ],
        },
      ],
      dividerText: " Master Java basics for Spring Boot.",
    },
    {
      name: "Java Basics for Spring Boot",
      description:
        "Master Java fundamentals critical for Spring Boot development. This section covers syntax, OOP, and collections, providing the foundational programming skills needed to write effective Spring Boot applications before diving into its framework specifics.",
      children: [
        {
          name: "Syntax and Variables",
          description:
            "Learn Java’s syntax and variable handling, the bedrock of Spring Boot coding. This section introduces basic constructs, data types, and scoping, ensuring you can write clean, functional Java code.",
          children: [
            {
              name: "Syntax Overview",
              description:
                "Java uses C-style syntax, like public static void main(). It’s verbose but clear, foundational for Spring Boot.",
            },
            {
              name: "Variables",
              description:
                "Declare with int x = 5 or String s = 'Hello'. Java’s strong typing ensures code reliability.",
            },
            {
              name: "Data Types",
              description:
                "Use int, double, String, boolean. Primitive and object types handle Spring Boot data needs.",
            },
          ],
        },
        {
          name: "OOP and Collections",
          description:
            "Understand Java’s object-oriented programming and collections for Spring Boot logic. This section covers classes, inheritance, and Lists/Maps, key to structuring app components.",
          children: [
            {
              name: "Classes and Objects",
              description:
                "Define with class MyClass {}, instantiate with new MyClass(). Structures Spring Boot entities.",
            },
            {
              name: "Inheritance",
              description:
                "Extend with extends, like class Child extends Parent {}. Reuses code in Spring Boot.",
            },
            {
              name: "Collections",
              description:
                "Use List<String> or Map<K, V>, like Arrays.asList(). Manages data in Spring Boot apps.",
            },
          ],
        },
      ],
      dividerText: " Learn Spring Boot essentials.",
    },
    {
      name: "Spring Boot Essentials",
      description:
        "Dive into Spring Boot’s core features—auto-configuration, starters, and dependency injection. This section covers creating a basic app, using annotations, and understanding the Spring ecosystem, building foundational skills for robust application development.",
      children: [
        {
          name: "Core Concepts",
          description:
            "Learn Spring Boot’s foundational elements for rapid setup. This section explores auto-configuration, starters, and the embedded server, simplifying Java app creation with minimal manual configuration.",
          children: [
            {
              name: "Auto-Configuration",
              description:
                "Leverage @SpringBootApplication to auto-configure beans. Reduces setup for Spring Boot apps.",
            },
            {
              name: "Starters",
              description:
                "Use dependencies like spring-boot-starter-web. Bundles libraries for quick feature integration.",
            },
            {
              name: "Actuators",
              description:
                "Add spring-boot-starter-actuator for monitoring, health, and admin endpoints.",
            },
            {
              name: "Hibernate",
              description:
                "Use Hibernate with spring-boot-starter-data-jpa for ORM. Maps Java objects to database tables.",
            },
            {
              name: "Embedded Server",
              description:
                "Run with embedded Tomcat via spring-boot-starter-web. Eliminates external server setup.",
            },
          ],
        },
        {
          name: "Dependency Injection",
          description:
            "Master Spring’s DI for managing beans in Spring Boot. This section covers @Autowired, @Component, and IoC, enabling loose coupling and modularity in your applications.",
          children: [
            {
              name: "@Autowired",
              description:
                "Inject with @Autowired, like @Autowired MyService service. Wires dependencies automatically.",
            },
            {
              name: "@Component",
              description:
                "Mark classes with @Component for bean creation, like @Component class MyBean {}. Registers components.",
            },
            {
              name: "IoC Container",
              description:
                "Spring’s IoC manages beans, initialized via ApplicationContext. Core to Spring Boot DI.",
            },
          ],
        },
      ],
      dividerText: " Build REST APIs with Spring Boot.",
    },
    {
      name: "REST APIs",
      description:
        "Build RESTful APIs with Spring Boot for modern web services. This section covers controllers, HTTP methods, and request/response handling, enabling you to create scalable, client-facing endpoints efficiently.",
      children: [
        {
          name: "Controllers",
          description:
            "Create REST endpoints with Spring MVC controllers. This section explores @RestController and basic routing, forming the backbone of Spring Boot API development.",
          children: [
            {
              name: "@RestController",
              description:
                "Use @RestController for RESTful APIs, like @RestController class MyController {}. Combines @Controller and @ResponseBody.",
            },
            {
              name: "@RequestMapping",
              description:
                "Map routes with @RequestMapping('/path'), e.g., @RequestMapping('/api'). Defines endpoint paths.",
            },
            {
              name: "HTTP Methods",
              description:
                "Use @GetMapping, @PostMapping, e.g., @GetMapping('/users'). Handles GET, POST requests.",
            },
          ],
        },
        {
          name: "Request and Response",
          description:
            "Handle API requests and responses effectively. This section covers @RequestBody, @ResponseBody, and status codes, ensuring robust client-server communication.",
          children: [
            {
              name: "@RequestBody",
              description:
                "Parse JSON with @RequestBody, like @PostMapping('/save') User user. Binds request data.",
            },
            {
              name: "@ResponseBody",
              description:
                "Return JSON with @ResponseBody, included in @RestController. Serializes response data.",
            },
            {
              name: "ResponseEntity",
              description:
                "Customize with ResponseEntity, like return new ResponseEntity<>(user, HttpStatus.OK). Sets status codes.",
            },
          ],
        },
      ],
      dividerText: " Manage data persistence.",
    },
    {
      name: "Persistence",
      description:
        "Manage data persistence in Spring Boot with Spring Data JPA and databases. This section covers entity mapping, repositories, and database connections, enabling you to store and retrieve data seamlessly.",
      children: [
        {
          name: "JPA Basics",
          description:
            "Learn Spring Data JPA for ORM in Spring Boot. This section explores entities, annotations, and basic CRUD, integrating relational databases like MySQL or PostgreSQL.",
          children: [
            {
              name: "@Entity",
              description:
                "Mark classes with @Entity, like @Entity class User {}. Maps to database tables.",
              preferred: true,
            },
            {
              name: "@Id",
              description:
                "Define keys with @Id, like @Id int id. Identifies entity primary keys.",
            },
            {
              name: "JPA Repository",
              description:
                "Extend JpaRepository, like interface UserRepo extends JpaRepository<User, Integer>. Handles CRUD.",
            },
          ],
        },
        {
          name: "Database Integration",
          description:
            "Connect and configure databases with Spring Boot. This section covers H2 (in-memory) and PostgreSQL (preferred), plus connection settings for production-ready persistence.",
          children: [
            {
              name: "PostgreSQL",
              description:
                "Connect PostgreSQL with spring.datasource.url. Preferred for production-grade persistence.",
              preferred: true,
            },
            {
              name: "H2 Database",
              description:
                "Use H2 with spring-boot-starter-data-jpa for testing. In-memory DB for quick setup.",
            },

            {
              name: "application.properties",
              description:
                "Set spring.datasource.url=jdbc:postgresql://localhost:5432/db. Configures DB connections.",
            },
          ],
        },
      ],
      dividerText: " Secure Spring Boot applications.",
    },
    {
      name: "Security",
      description:
        "Secure Spring Boot applications with Spring Security. This section covers authentication, authorization, and JWT, ensuring your APIs and data are protected against unauthorized access.",
      children: [
        {
          name: "Basic Security",
          description:
            "Implement basic security with Spring Security starter. This section explores default authentication and role-based access, securing endpoints with minimal configuration.",
          children: [
            {
              name: "spring-boot-starter-security",
              description:
                "Add spring-boot-starter-security for default security. Enables basic auth out-of-the-box.",
            },
            {
              name: "@EnableWebSecurity",
              description:
                "Use @EnableWebSecurity class SecurityConfig {}. Configures custom security settings.",
            },
            {
              name: "HTTP Basic",
              description:
                "Secure with http.httpBasic(), e.g., httpBasic().and(). Enables basic authentication.",
            },
          ],
        },
        {
          name: "Advanced Security",
          description:
            "Enhance security with JWT and custom configurations. This section covers token-based auth (preferred) and securing endpoints, ideal for RESTful microservices.",
          children: [
            {
              name: "JWT",
              description:
                "Use JWT with spring-security-jwt, like generateToken(). Preferred for stateless authentication.",
              preferred: true,
            },
            {
              name: "@PreAuthorize",
              description:
                "Restrict with @PreAuthorize('hasRole('ADMIN')'). Secures methods by roles.",
            },
            {
              name: "CSRF Protection",
              description:
                "Disable CSRF with http.csrf().disable() for APIs. Tailors security for REST.",
            },
          ],
        },
      ],
      dividerText: " Test Spring Boot applications.",
    },
    {
      name: "Testing",
      description:
        "Test Spring Boot applications with unit and integration tests. This section covers JUnit, Mockito, and Spring Test, ensuring your app’s reliability and functionality with robust testing practices.",
      children: [
        {
          name: "Unit Testing",
          description:
            "Write unit tests for Spring Boot services and controllers. This section explores JUnit (preferred) and Mockito for mocking, verifying individual components effectively.",
          children: [
            {
              name: "JUnit",
              description: "Test with @Test, like assertEquals().",
              preferred: true,
            },
            {
              name: "Mockito",
              description:
                "Mock with @Mock, like when(service.get()).thenReturn().",
            },
          ],
        },
        {
          name: "Integration Testing",
          description:
            "Perform integration tests with Spring Test. This section covers @SpringBootTest (preferred) and TestRestTemplate, ensuring app components work together seamlessly.",
          children: [
            {
              name: "@SpringBootTest",
              description: "Test full app with @SpringBootTest.",
              preferred: true,
            },
            {
              name: "TestRestTemplate",
              description: "Test REST with TestRestTemplate.getForObject().",
            },
          ],
        },
      ],
      dividerText: " Deploy and manage Spring Boot apps.",
    },
    {
      name: "Deployment",
      description:
        "Deploy Spring Boot applications to production environments. This section covers building JARs, deploying to servers like Tomcat, and cloud platforms like AWS, ensuring your app is accessible and scalable.",
      children: [
        {
          name: "Build and Packaging",
          description:
            "Package Spring Boot apps for deployment. This section explores Maven/Gradle builds (Maven preferred) and executable JARs, preparing your app for production environments.",
          children: [
            {
              name: "Maven Build",
              description: "Build with mvn package.",
              preferred: true,
            },
            { name: "Gradle Build", description: "Build with gradle build." },
            {
              name: "Executable JAR",
              description: "Run with java -jar app.jar.",
            },
          ],
        },
        {
          name: "Deployment Options",
          description:
            "Deploy to servers or cloud platforms. This section covers local deployment and AWS (preferred), ensuring flexibility and scalability for Spring Boot apps.",
          children: [
            {
              name: "AWS Elastic Beanstalk",
              description: "Deploy to AWS with EB.",
              preferred: true,
            },
            {
              name: "Tomcat Server",
              description: "Deploy JAR to external Tomcat.",
            },

            { name: "Docker", description: "Containerize with Dockerfile." },
          ],
        },
      ],
      dividerText: " Explore advanced Spring Boot topics.",
    },
    {
      name: "Advanced Spring Boot Topics",
      description:
        "Master advanced Spring Boot features like microservices, messaging, and actuator. This section enhances your skills with distributed systems, real-time data, and monitoring for enterprise-grade applications.",
      children: [
        {
          name: "Microservices",
          description:
            "Build microservices with Spring Boot and Spring Cloud. This section covers service discovery, configuration, and resilience, enabling scalable, distributed architectures.",
          children: [
            {
              name: "Spring Cloud",
              description: "Use Spring Cloud for microservices.",
            },
            {
              name: "Eureka",
              description: "Service discovery with Netflix Eureka.",
            },
            {
              name: "Config Server",
              description: "Centralized config with Spring Cloud Config.",
            },
            {
              name: "Sleuth",
              description: "Distributed tracing with Spring Cloud Sleuth.",
            },
          ],
        },
        {
          name: "Messaging and Monitoring",
          description:
            "Add messaging and monitoring with Kafka and Actuator. This section covers real-time communication and app health tracking, enhancing Spring Boot functionality.",
          children: [
            {
              name: "Kafka",
              description: "Integrate Apache Kafka for messaging.",
              preferred: true,
            },
            {
              name: "Actuator",
              description: "Monitor with /actuator endpoints.",
            },
          ],
        },
      ],
      dividerText: " Practice and learn with resources.",
    },
    {
      name: "Practice and Resources",
      description:
        "Apply Spring Boot skills through projects and deepen knowledge with resources. This section fosters hands-on experience with REST APIs, microservices, and more, alongside learning from Spring’s official docs.",
      children: [
        {
          name: "Projects",
          description:
            "Build practical Spring Boot projects to reinforce skills, from simple APIs to microservices. These exercises solidify REST, persistence, and advanced features for real-world use.",
          children: [
            {
              name: "REST CRUD API",
              description: "Build a CRUD API with JPA.",
            },
            { name: "User Auth Service", description: "Secure app with JWT." },
            {
              name: "Microservices App",
              description: "Create with Spring Cloud.",
            },
          ],
        },
        {
          name: "Learning Resources",
          description:
            "Access top Spring Boot resources, from official docs to tutorials. Spring.io is preferred for its comprehensive guidance, complemented by community content.",
          children: [
            {
              name: "Spring.io",
              description: "Official Spring documentation.",
              preferred: true,
            },
            {
              name: "Baeldung",
              description: "Practical Spring Boot tutorials.",
            },
            {
              name: "Spring Community",
              description: "Forums and GitHub discussions.",
            },
          ],
        },
      ],
    },
    {
      name: "Continuous Learning",
      description:
        "Stay updated with Spring Boot’s evolution, tracking releases like 3.x and ecosystem trends. Engage with the community, explore new features, and adapt to advancements in Java development for cutting-edge skills.",
    },
  ],
};

export default springBootDeveloperRoadmap;
