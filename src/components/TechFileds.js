// src/components/TechFields.js
import React from "react";
import "../styles/TechFields.css";
import { useNavigate } from "react-router-dom";

const techFields = [
  {
    id: 1,
    title: "Web Development",
    icon: "💻",
    link: "/web-development",
    description:
      "Web Development involves creating and maintaining websites and web applications that run on the internet. It includes front-end development, which focuses on user interfaces using HTML, CSS, and JavaScript, and back-end development, which handles server-side logic, databases, and APIs with languages like Python, Ruby, or PHP. Full-stack developers bridge both areas, ensuring seamless functionality and responsive design for an optimal user experience across devices.",
  },
  {
    id: 2,
    title: "Data Science",
    icon: "📊",
    link: "/data-science",
    description:
      "Data Science is the field of extracting actionable insights from vast datasets using statistical analysis, machine learning, and data visualization techniques. It combines programming skills (e.g., Python, R) with domain knowledge to uncover trends, predict outcomes, and solve complex problems. Data scientists clean, process, and interpret data, enabling businesses to make informed decisions in areas like marketing, healthcare, and finance.",
  },
  {
    id: 3,
    title: "Artificial Intelligence",
    icon: "🤖",
    link: "/artificial-intelligence",
    description:
      "Artificial Intelligence (AI) focuses on developing systems that simulate human intelligence, such as learning, reasoning, and problem-solving. It powers technologies like virtual assistants, autonomous vehicles, and recommendation systems. AI encompasses subfields like machine learning and natural language processing, using algorithms and vast datasets to enable machines to perform tasks that typically require human cognition, revolutionizing industries globally.",
  },
  {
    id: 4,
    title: "Cybersecurity",
    icon: "🔒",
    link: "/cybersecurity",
    description:
      "Cybersecurity is the practice of protecting computers, networks, and data from unauthorized access, attacks, and damage. It involves implementing measures like encryption, firewalls, and intrusion detection to safeguard sensitive information. Cybersecurity professionals analyze threats, respond to incidents, and ensure system integrity, playing a critical role in defending organizations and individuals against hackers, malware, and data breaches in a digital world.",
  },
  {
    id: 5,
    title: "Cloud Computing",
    icon: "☁️",
    link: "/cloud-computing",
    description:
      "Cloud Computing provides on-demand access to computing resources like servers, storage, and applications over the internet, eliminating the need for physical infrastructure. It offers scalability, cost-efficiency, and flexibility through platforms like AWS, Azure, and Google Cloud. Businesses use it for data backup, software deployment, and analytics, relying on cloud engineers to design, manage, and optimize these distributed systems effectively.",
  },
  {
    id: 6,
    title: "Mobile Development",
    icon: "📱",
    link: "/mobile-development",
    description:
      "Mobile Development focuses on creating applications for smartphones and tablets, primarily for iOS (using Swift) and Android (using Kotlin or Java). Developers design intuitive interfaces and optimize performance for diverse devices, integrating features like GPS, cameras, and push notifications. This field powers apps for gaming, productivity, and e-commerce, meeting the growing demand for mobile-first solutions in today’s digital ecosystem.",
  },
  {
    id: 7,
    title: "Blockchain",
    icon: "🔑",
    link: "/blockchain",
    description:
      "Blockchain is a decentralized, secure technology for recording transactions across a network of computers, best known for powering cryptocurrencies like Bitcoin and Ethereum. It ensures transparency and immutability through cryptographic techniques, enabling applications in finance, supply chain, and smart contracts. Developers in this field build distributed ledgers and decentralized apps (DApps), revolutionizing trust and data management in various industries.",
  },
  {
    id: 8,
    title: "Game Development",
    icon: "🎮",
    link: "/game-development",
    description:
      "Game Development is the process of designing and programming interactive video games for consoles, PCs, and mobile devices. It combines creativity with technical skills, using engines like Unity or Unreal Engine and languages like C++ or C#. Developers craft gameplay mechanics, graphics, and sound, creating immersive experiences that entertain millions, from casual mobile games to complex virtual worlds.",
  },
  {
    id: 9,
    title: "Machine Learning",
    icon: "🧠",
    link: "/machine-learning",
    description:
      "Machine Learning, a subset of AI, enables systems to learn from data and improve without explicit programming. It uses algorithms like regression, neural networks, and decision trees to predict outcomes or classify information. Applications include image recognition, fraud detection, and personalized recommendations. Practitioners leverage tools like TensorFlow and Python to build models that adapt to real-world challenges.",
  },
  {
    id: 10,
    title: "Robotics",
    icon: "🤖",
    link: "/robotics",
    description:
      "Robotics involves designing, building, and programming robots to perform tasks autonomously or semi-autonomously. It integrates mechanical engineering, electronics, and software (e.g., C++, Python) to create machines for manufacturing, healthcare, and exploration. Robotics engineers develop sensors, actuators, and control systems, enabling robots to navigate environments, manipulate objects, and assist humans in complex or hazardous scenarios effectively.",
  },
  {
    id: 11,
    title: "IoT",
    icon: "📱",
    link: "/iot",
    description:
      "The Internet of Things (IoT) connects everyday devices—like appliances, cars, and wearables—to the internet, enabling data exchange and automation. It relies on sensors, networks, and platforms like AWS IoT to monitor and control systems remotely. IoT developers create solutions for smart homes, healthcare, and industrial automation, driving efficiency and innovation across interconnected ecosystems.",
  },
  {
    id: 12,
    title: "Virtual Reality",
    icon: "🎮",
    link: "/virtual-reality",
    description:
      "Virtual Reality (VR) creates fully immersive digital environments using headsets and motion-tracking technology, often built with tools like Unity or Unreal Engine. It’s used in gaming, training simulations, and virtual tours, offering users a sense of presence in a 3D world. VR developers design interactive experiences, blending graphics, audio, and haptics to redefine entertainment and education.",
  },
  {
    id: 13,
    title: "Augmented Reality",
    icon: "🎮",
    link: "/augmented-reality",
    description:
      "Augmented Reality (AR) overlays digital information—like images or data—onto the real world through devices like smartphones or AR glasses. Built with tools like ARKit or ARCore, it enhances experiences in gaming, retail, and education. AR developers craft applications that blend physical and virtual elements, enabling interactive navigation, visualization, and real-time engagement.",
  },
  {
    id: 14,
    title: "Quantum Computing",
    icon: "🔑",
    link: "/quantum-computing",
    description:
      "Quantum Computing leverages quantum mechanics principles, like superposition and entanglement, to process information exponentially faster than classical computers for specific tasks. It’s explored using languages like Q# and platforms like IBM Quantum. Researchers and developers aim to solve complex problems in cryptography, optimization, and material simulation, pushing the boundaries of computational power and scientific discovery.",
  },
  {
    id: 15,
    title: "Database",
    icon: "💻",
    link: "/database",
    description:
      "Database management involves designing, implementing, and maintaining systems to store, retrieve, and organize data efficiently. Technologies like SQL, NoSQL, and MongoDB support structured and unstructured data for applications in business, web, and analytics. Database professionals ensure data integrity, security, and performance, enabling organizations to handle large-scale information and drive decision-making processes effectively.",
  },
  {
    id: 16,
    title: "Computer Vision",
    icon: "🔍",
    link: "/computer-vision",
    description:
      "Computer Vision enables machines to interpret and analyze visual data, such as images or videos, using techniques like deep learning and OpenCV. It powers facial recognition, autonomous driving, and medical imaging. Developers train models to detect objects, recognize patterns, and extract insights, transforming how technology interacts with and understands the visual world around us.",
  },
  {
    id: 17,
    title: "Natural Language Processing",
    icon: "💻",
    link: "/natural-language-processing",
    description:
      "Natural Language Processing (NLP) allows computers to understand, generate, and respond to human language, using tools like NLTK and transformers. It drives chatbots, translation systems, and sentiment analysis. NLP experts develop algorithms to process text and speech, enabling machines to engage in conversations, extract meaning, and automate tasks that require linguistic comprehension and interaction.",
  },
  {
    id: 18,
    title: "DevOps",
    icon: "🔄",
    link: "/devops",
    description:
      "DevOps bridges development and operations to streamline software delivery through automation, collaboration, and continuous integration/deployment (CI/CD). Tools like Docker, Kubernetes, and Jenkins enhance efficiency and reliability. DevOps engineers manage infrastructure, monitor systems, and optimize workflows, ensuring rapid, scalable, and high-quality releases while fostering a culture of shared responsibility and agile development practices.",
  },
  {
    id: 19,
    title: "UI/UX Design",
    icon: "🎨",
    link: "/ui-ux-design",
    description:
      "UI/UX Design focuses on creating user-friendly, visually appealing interfaces (UI) and optimizing user experiences (UX) for digital products. UI designers craft layouts and aesthetics using tools like Figma, while UX designers research user behavior to enhance usability. Together, they ensure applications are intuitive, engaging, and effective, meeting user needs across websites, apps, and software platforms.",
  },
  {
    id: 20,
    title: "Embedded Systems",
    icon: "🔧",
    link: "/embedded-systems",
    description:
      "Embedded Systems involve designing and programming specialized hardware-software combinations within devices like cars, appliances, and medical equipment. Using languages like C and microcontrollers, developers create efficient, real-time solutions for specific tasks. This field drives functionality in IoT, robotics, and consumer electronics, requiring expertise in low-level programming, hardware integration, and power optimization for reliable performance.",
  },
];

const techSkills = [
  {
    id: 1,
    title: "JavaScript",
    icon: "🟨",
    link: "/javascript",
    description:
      "JavaScript is a versatile, high-level programming language essential for web development, enabling dynamic and interactive content on websites. It powers front-end frameworks like React and Vue.js, and back-end environments via Node.js. Developers use it for animations, form validation, and API integration, making it a cornerstone of modern web applications with its event-driven, asynchronous capabilities.",
  },
  {
    id: 2,
    title: "Python",
    icon: "🐍",
    link: "/python",
    description:
      "Python is a readable, general-purpose programming language widely used in data science, machine learning, web development, and automation. Its simple syntax and extensive libraries (e.g., Pandas, TensorFlow) make it ideal for rapid prototyping and complex applications. Python developers build everything from scientific models to web servers, leveraging its versatility and strong community support across industries.",
  },
  {
    id: 3,
    title: "React",
    icon: "⚛️",
    link: "/react",
    description:
      "React is a JavaScript library for building fast, reusable user interfaces, particularly single-page applications. Developed by Facebook, it uses a component-based architecture and virtual DOM to optimize rendering. React developers create interactive, scalable front-ends for websites and mobile apps, integrating with tools like Redux for state management and APIs for dynamic data handling.",
  },
  {
    id: 4,
    title: "Node.js",
    icon: "🟩",
    link: "/nodejs",
    description:
      "Node.js is a runtime environment that allows JavaScript to run on the server side, enabling full-stack development with a single language. Built on Chrome’s V8 engine, it excels in handling asynchronous operations for real-time applications like chat or streaming services. Node.js developers use it with frameworks like Express to build scalable, efficient back-end systems.",
  },
  {
    id: 5,
    title: "SQL",
    icon: "🗃️",
    link: "/sql",
    description:
      "SQL (Structured Query Language) is a standard for managing and querying relational databases like MySQL and PostgreSQL. It enables developers to create, retrieve, update, and delete data efficiently, supporting business intelligence and data-driven applications. SQL professionals design schemas, optimize queries, and ensure data integrity, making it vital for backend development and analytics workflows.",
  },
  {
    id: 6,
    title: "Docker",
    icon: "🐳",
    link: "/docker",
    description:
      "Docker is a containerization platform that packages applications and their dependencies into lightweight, portable containers. It ensures consistency across development, testing, and production environments, simplifying deployment. DevOps engineers use Docker to isolate services, scale microservices, and streamline CI/CD pipelines, enhancing collaboration and reducing ‘works on my machine’ issues in software delivery processes.",
  },
  {
    id: 7,
    title: "Kubernetes",
    icon: "☸️",
    link: "/kubernetes",
    description:
      "Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications, often paired with Docker. It orchestrates clusters, ensuring high availability and resource efficiency. DevOps professionals use Kubernetes to handle microservices, manage workloads, and recover from failures, making it essential for cloud-native development and large-scale, resilient systems.",
  },
  {
    id: 8,
    title: "TensorFlow",
    icon: "🧠",
    link: "/tensorflow",
    description:
      "TensorFlow is an open-source framework by Google for building and training machine learning models, particularly neural networks. It supports tasks like image recognition and natural language processing with extensive libraries and GPU acceleration. Data scientists and engineers use TensorFlow to develop predictive models, leveraging its flexibility for research and production-grade AI applications.",
  },
  {
    id: 9,
    title: "Git",
    icon: "🐙",
    link: "/git",
    description:
      "Git is a distributed version control system that tracks changes in code, enabling collaboration among developers on projects of all sizes. It supports branching, merging, and rollbacks, with platforms like GitHub enhancing teamwork. Programmers use Git to manage source code, maintain project history, and coordinate contributions, ensuring efficient and reliable software development workflows.",
  },
  {
    id: 10,
    title: "AWS",
    icon: "☁️",
    link: "/aws",
    description:
      "Amazon Web Services (AWS) is a leading cloud platform offering scalable computing, storage, and database services for businesses and developers. It includes tools like EC2, S3, and Lambda for building applications and managing infrastructure. AWS professionals deploy, monitor, and optimize cloud solutions, supporting everything from startups to enterprises with cost-effective, secure, and flexible resources.",
  },
  {
    id: 11,
    title: "Azure",
    icon: "🔷",
    link: "/azure",
    description:
      "Microsoft Azure is a cloud computing platform providing a wide range of services, including virtual machines, AI tools, and data analytics, competing with AWS. It supports hybrid environments and integrates with Microsoft products. Azure developers build and manage scalable applications, leveraging its global network for high availability, security, and enterprise-grade solutions across industries.",
  },
  {
    id: 12,
    title: "Linux",
    icon: "🐧",
    link: "/linux",
    description:
      "Linux is an open-source operating system widely used in servers, cloud infrastructure, and development environments due to its stability and flexibility. It supports scripting with Bash and tools like SSH for system administration. Linux engineers configure, secure, and optimize systems, making it a backbone for web hosting, software development, and embedded devices worldwide.",
  },
  {
    id: 13,
    title: "Java",
    icon: "☕",
    link: "/java",
    description:
      "Java is a robust, object-oriented programming language known for its ‘write once, run anywhere’ capability, thanks to the Java Virtual Machine (JVM). It’s used in enterprise applications, Android development, and web servers. Java developers build scalable, secure systems with frameworks like Spring, leveraging its strong typing and extensive APIs for complex, cross-platform solutions.",
  },
  {
    id: 14,
    title: "C++",
    icon: "➕",
    link: "/cpp",
    description:
      "C++ is a high-performance programming language extending C with object-oriented features, widely used in game development, system programming, and real-time applications. It offers fine-grained control over hardware resources. C++ developers create efficient software like operating systems and simulations, relying on its speed and libraries like STL for complex, resource-intensive projects.",
  },
  {
    id: 15,
    title: "Rust",
    icon: "🦀",
    link: "/rust",
    description:
      "Rust is a systems programming language focused on safety and performance, preventing memory errors without a garbage collector. It’s favored for low-level applications like browsers and operating systems. Rust developers build reliable, concurrent systems, leveraging its ownership model and modern syntax to create fast, secure software that rivals C++ in efficiency and robustness.",
  },
  {
    id: 16,
    title: "Go",
    icon: "🐹",
    link: "/go",
    description:
      "Go, created by Google, is a fast, statically typed language designed for simplicity and concurrency, making it ideal for scalable web services and cloud applications. It features goroutines for parallel processing. Go developers use it with tools like Docker and Kubernetes, building efficient, reliable back-ends that power modern, high-performance distributed systems with minimal complexity.",
  },
  {
    id: 17,
    title: "Ruby",
    icon: "💎",
    link: "/ruby",
    description:
      "Ruby is an elegant, developer-friendly programming language emphasizing readability and productivity, best known for the Ruby on Rails web framework. It’s used for rapid prototyping and full-stack development. Ruby developers create dynamic websites and applications, leveraging its expressive syntax and vast ecosystem of gems to streamline coding and deliver user-focused solutions efficiently.",
  },
  {
    id: 18,
    title: "Swift",
    icon: "🐦",
    link: "/swift",
    description:
      "Swift is Apple’s powerful, open-source programming language for iOS, macOS, and watchOS apps, combining safety with high performance. It offers modern syntax and features like optionals to prevent errors. Swift developers build responsive, visually rich mobile applications, using tools like Xcode to create seamless user experiences for Apple’s ecosystem with efficiency and reliability.",
  },
  {
    id: 19,
    title: "Kotlin",
    icon: "🟪",
    link: "/kotlin",
    description:
      "Kotlin is a modern, concise programming language interoperable with Java, widely adopted for Android development and web applications. It reduces boilerplate code and enhances safety with nullability checks. Kotlin developers use it with Android Studio to build robust, user-friendly apps, leveraging its flexibility and integration with existing Java codebases for efficient, maintainable software.",
  },
  {
    id: 20,
    title: "PHP",
    icon: "🐘",
    link: "/php",
    description:
      "PHP is a server-side scripting language designed for web development, powering platforms like WordPress and Laravel. It excels in generating dynamic content and interacting with databases like MySQL. PHP developers create scalable websites and applications, using its simplicity and vast community resources to deliver cost-effective, server-driven solutions for businesses and individuals.",
  },
  {
    id: 21,
    title: "C",
    icon: "🟩",
    link: "/c",
    description:
      "C is a foundational, low-level programming language known for its speed and control over hardware, forming the basis of operating systems and embedded systems. It influences languages like C++ and Java. C developers write efficient, portable code for kernels, drivers, and firmware, mastering pointers and manual memory management for performance-critical applications.",
  },
  {
    id: 22,
    title: "TypeScript",
    icon: "🟦",
    link: "/typescript",
    description:
      "TypeScript is a superset of JavaScript that adds static typing, enhancing code reliability and scalability for large web applications. It compiles to plain JavaScript and integrates with frameworks like Angular. TypeScript developers use type definitions and interfaces to catch errors early, improving maintainability and collaboration in complex, team-based front-end and full-stack projects.",
  },
  {
    id: 23,
    title: "Angular",
    icon: "🅰️",
    link: "/angular",
    description:
      "Angular is a TypeScript-based framework by Google for building dynamic, single-page web applications with a strong MVC architecture. It offers two-way data binding and dependency injection. Angular developers create structured, feature-rich front-ends, using its CLI and components to streamline development and deliver responsive, enterprise-grade solutions with robust testing and tooling support.",
  },
  {
    id: 24,
    title: "Vue.js",
    icon: "🟩",
    link: "/vuejs",
    description:
      "Vue.js is a progressive JavaScript framework for building user interfaces, known for its simplicity and flexibility in integrating with existing projects. It uses reactive data binding and a component-based approach. Vue developers craft lightweight, interactive front-ends, leveraging its ecosystem (e.g., Vuex, Vue Router) to create scalable, modern web applications with minimal overhead.",
  },
  {
    id: 25,
    title: "Django",
    icon: "🌐",
    link: "/django",
    description:
      "Django is a high-level Python web framework that promotes rapid development and clean, pragmatic design for building secure, scalable applications. It includes ORM, authentication, and admin tools. Django developers create robust back-ends for websites and APIs, leveraging its ‘batteries-included’ philosophy to handle databases, security, and routing efficiently in projects from startups to enterprises.",
  },
  {
    id: 26,
    title: "Flask",
    icon: "✨",
    link: "/flask",
    description:
      "Flask is a lightweight Python web framework for building simple, flexible web applications and APIs with minimal setup. It offers routing, templating, and extensions for added functionality. Flask developers create custom, small-scale back-ends, using its microframework approach to maintain control and simplicity, ideal for prototyping, small projects, or integrating with machine learning workflows.",
  },
  {
    id: 27,
    title: "Python",
    icon: "🐍",
    link: "/python",
    description:
      "Python is a versatile, high-level language loved for its readability and broad applicability in web development, data science, AI, and automation. Its rich libraries (e.g., NumPy, Flask) support diverse tasks. Python developers build scalable solutions, from scripts to complex systems, leveraging its ease of use and community-driven ecosystem for rapid development across multiple domains.",
  },
  {
    id: 28,
    title: "MongoDB",
    icon: "🍃",
    link: "/mongodb",
    description:
      "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, ideal for handling unstructured or semi-structured data in modern applications. It scales horizontally with ease. MongoDB developers design schemas, manage collections, and optimize queries, supporting web, mobile, and big data projects with its agility and performance in dynamic, data-intensive environments.",
  },
  {
    id: 29,
    title: "PostgreSQL",
    icon: "🐘",
    link: "/postgresql",
    description:
      "PostgreSQL is an open-source, relational database system known for its robustness, extensibility, and support for advanced SQL features like JSON and full-text search. It ensures data integrity and reliability. PostgreSQL developers build and manage structured databases for enterprise applications, leveraging its ACID compliance and scalability for analytics, web, and business intelligence solutions.",
  },
  {
    id: 30,
    title: "Firebase",
    icon: "🔥",
    link: "/firebase",
    description:
      "Firebase, by Google, is a platform for building mobile and web applications with real-time databases, authentication, and cloud functions. It simplifies backend development with hosted services. Firebase developers create responsive, serverless apps, integrating features like push notifications and analytics to enhance user engagement and streamline deployment for startups and small-scale projects efficiently.",
  },
  {
    id: 31,
    title: "GraphQL",
    icon: "🔗",
    link: "/graphql",
    description:
      "GraphQL is a query language for APIs that allows clients to request exactly the data they need, improving efficiency over traditional REST. It’s backed by a strong type system. GraphQL developers design schemas and resolvers, enabling flexible, performant data fetching for front-end applications, reducing over-fetching and enhancing scalability in modern web development workflows.",
  },
  {
    id: 32,
    title: "REST APIs",
    icon: "🔌",
    link: "/rest-apis",
    description:
      "REST APIs (Representational State Transfer) enable communication between systems over HTTP, using standard methods like GET and POST to access resources. They’re stateless and widely adopted. Developers build RESTful services with frameworks like Express or Django, creating scalable, interoperable back-ends that power web and mobile apps by delivering data in formats like JSON or XML.",
  },
  {
    id: 33,
    title: "Selenium",
    icon: "🔍",
    link: "/selenium",
    description:
      "Selenium is an open-source tool for automating web browser interactions, primarily used for testing web applications across different platforms and browsers. It supports languages like Python and Java. QA engineers and developers use Selenium to write scripts that simulate user actions, ensuring functionality, performance, and reliability in web development through automated regression and cross-browser testing.",
  },
];

const TechFields = () => {
  const navigate = useNavigate();

  const handleFieldClick = (field) => {
    navigate(field.link, {
      state: { title: field.title, description: field.description },
    });
  };

  return (
    <section className="tech-fields">
      {/* Tech Fields Section */}
      <h2>Explore Tech Fields</h2>
      <div className="tech-grid">
        {techFields.map((field) => (
          <div
            key={field.id}
            className="tech-card"
            onClick={() => handleFieldClick(field)}
          >
            <div className="tech-icon">{field.icon}</div>
            <h3>{field.title}</h3>
          </div>
        ))}
      </div>

      {/* Tech Skills Section */}
      <h2>Explore Tech Skills</h2>
      <div className="tech-grid">
        {techSkills.map((skill) => (
          <div
            key={skill.id}
            className="tech-card"
            onClick={() => handleFieldClick(skill)}
          >
            <div className="tech-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechFields;
