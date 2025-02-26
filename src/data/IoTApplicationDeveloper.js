const iotApplicationDeveloperRoadmap = {
  name: "IoT Application Developer Roadmap 2025",
  description:
    "A practical guide to mastering IoT application development by 2025. From foundational ecosystems to advanced analytics and security, this roadmap equips you with skills in programming, networking, cloud integration, and emerging trends to build scalable, intelligent IoT solutions for a connected world.",
  children: [
    {
      name: "Foundational Knowledge",
      description:
        "Build a solid base in IoT ecosystems and data management, essential for integrating devices and processing data in 2025’s connected landscape.",
      children: [
        {
          name: "Understanding IoT Ecosystem",
          description:
            "Grasp the IoT landscape—architecture and industry use cases—using real-world examples like smart homes and healthcare systems.",
          children: [
            {
              name: "IoT Architecture",
              description:
                "Learn device-to-cloud layers—sensors, gateways, applications—with diagrams and examples like Raspberry Pi setups.",
            },
            {
              name: "Industry Applications",
              description:
                "Explore IoT in smart cities, healthcare, and agriculture via case studies like traffic monitoring or patient tracking.",
            },
          ],
        },
        {
          name: "Data Literacy for IoT",
          description:
            "Manage and interpret IoT data with Python, focusing on diverse streams from sensors to insights.",
          children: [
            {
              name: "Data Types",
              description:
                "Handle structured (JSON) and unstructured (time-series) data from sensors, with examples.",
            },
            {
              name: "Data Pipelines",
              description:
                "Design workflows—ingestion, processing, storage—using Python scripts and tools like Apache Kafka.",
            },
          ],
        },
      ],
      dividerText: "Foundations set—dive into programming skills next.",
    },
    {
      name: "Programming Skills",
      description:
        "Develop proficiency in Python, JavaScript, and Java to create scalable IoT applications, using practical examples.",
      children: [
        {
          name: "Python",
          preferred: true,
          description:
            "Leverage Python’s versatility for scripting and data processing with libraries like Paho-MQTT and Flask.",
          children: [
            {
              name: "IoT Libraries",
              description:
                "Connect devices with Paho-MQTT and Requests for real-time data exchange.",
            },
            {
              name: "Web Frameworks",
              description:
                "Build APIs with Flask or Django for IoT app backends.",
            },
            {
              name: "Data Analysis",
              description:
                "Process sensor data with Pandas and NumPy for actionable insights.",
            },
          ],
        },
        {
          name: "JavaScript (Node.js)",
          description:
            "Create real-time IoT apps with Node.js, focusing on asynchronous programming and dashboards.",
          children: [
            {
              name: "Node-RED",
              description: "Design visual workflows for rapid IoT prototyping.",
            },
            {
              name: "WebSockets",
              description:
                "Enable live data streams with Node.js for dynamic apps.",
            },
          ],
        },
        {
          name: "Java",
          description:
            "Build robust IoT backends with Spring Boot, ideal for enterprise-grade systems.",
          children: [
            {
              name: "Spring Boot",
              description: "Develop scalable APIs with REST for device data.",
            },
          ],
        },
      ],
      dividerText:
        "Programming mastered—connect devices with networking protocols.",
    },
    {
      name: "Networking and Communication Protocols",
      description:
        "Integrate IoT apps with devices using protocols like MQTT and HTTP, ensuring reliable data exchange.",
      children: [
        {
          name: "IoT-Specific Protocols",
          description:
            "Master lightweight protocols for efficient device communication in diverse environments.",
          children: [
            {
              name: "MQTT",
              preferred: true,
              description:
                "Use Paho libraries for publish-subscribe messaging in IoT.",
            },
            {
              name: "HTTP/REST",
              description:
                "Build APIs for device-app integration with web standards.",
            },
            {
              name: "CoAP",
              description: "Optimize for low-power devices like smart sensors.",
            },
          ],
        },
        {
          name: "Cloud Connectivity",
          description:
            "Link IoT apps to cloud platforms with APIs and 5G for scalability.",
          children: [
            {
              name: "APIs and SDKs",
              description:
                "Connect to AWS IoT using SDKs for seamless integration.",
            },
            {
              name: "5G Integration",
              description:
                "Leverage 5G for low-latency, high-bandwidth IoT apps.",
            },
          ],
        },
      ],
      dividerText: "Networking secured—scale with cloud computing.",
    },
    {
      name: "Cloud Computing",
      description:
        "Harness cloud platforms like AWS IoT Core to manage devices and data at scale.",
      children: [
        {
          name: "IoT Cloud Platforms",
          description:
            "Use platforms like AWS and Azure to connect and analyze IoT systems.",
          children: [
            {
              name: "AWS IoT Core",
              preferred: true,
              description: "Manage devices with MQTT setups on AWS.",
            },
            {
              name: "Azure IoT Hub",
              description: "Scale IoT apps with Azure’s ecosystem.",
            },
          ],
        },
        {
          name: "Serverless Computing",
          description:
            "Handle IoT events with AWS Lambda for cost-effective, scalable responses.",
          children: [
            {
              name: "AWS Lambda",
              description: "Trigger actions from IoT data in real time.",
            },
          ],
        },
      ],
      dividerText: "Cloud mastered—turn data into insights with analytics.",
    },
    {
      name: "Data Management and Analytics",
      description:
        "Store and analyze IoT data with tools like InfluxDB and Kafka for actionable insights.",
      children: [
        {
          name: "Database Systems",
          description:
            "Store IoT data efficiently with time-series and NoSQL solutions.",
          children: [
            {
              name: "Time-Series Databases",
              description:
                "Use InfluxDB for sensor data with optimized queries.",
            },
            {
              name: "NoSQL Databases",
              description: "Handle unstructured data with MongoDB.",
            },
          ],
        },
        {
          name: "IoT Analytics",
          description:
            "Extract insights with real-time processing and machine learning.",
          children: [
            {
              name: "Real-Time Analytics",
              description: "Process streams with Kafka for live insights.",
            },
            {
              name: "Machine Learning",
              description: "Predict trends with Scikit-learn for IoT apps.",
            },
          ],
        },
      ],
      dividerText: "Analytics ready—secure your IoT solutions.",
    },
    {
      name: "Security",
      description:
        "Protect IoT apps with encryption and authentication, critical for 2025 trust.",
      children: [
        {
          name: "Application-Level Security",
          description: "Safeguard data and communication with TLS and OAuth.",
          children: [
            {
              name: "Encryption",
              description: "Secure data with TLS configurations.",
            },
            {
              name: "Authentication",
              description: "Implement OAuth for authorized access.",
            },
          ],
        },
      ],
      dividerText: "Security locked—explore 2025 trends next.",
    },
    {
      name: "Emerging Trends in 2025",
      description:
        "Stay ahead with AIoT and 5G, shaping the future of IoT applications.",
      children: [
        {
          name: "AIoT Integration",
          description:
            "Enhance IoT with AI using federated learning and insights.",
          children: [
            {
              name: "Federated Learning",
              description: "Train models across devices for privacy-aware AI.",
            },
          ],
        },
        {
          name: "5G Applications",
          description: "Scale IoT with 5G’s low latency and high bandwidth.",
          children: [
            {
              name: "Low-Latency Apps",
              description: "Build real-time IoT with 5G connectivity.",
            },
          ],
        },
      ],
      dividerText: "Trends embraced—boost your success with soft skills.",
    },
    {
      name: "Soft Skills",
      description:
        "Enhance problem-solving and teamwork for collaborative IoT projects.",
      children: [
        {
          name: "Problem-Solving",
          description: "Debug and optimize IoT systems with case studies.",
        },
        {
          name: "Collaboration",
          description: "Work effectively with cross-functional teams.",
        },
      ],
      dividerText: "Skills complete—launch your IoT career with confidence.",
    },
  ],
};

export default iotApplicationDeveloperRoadmap;
