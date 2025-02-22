const CloudComputingRoadmap = {
  name: "Cloud Computing Roadmap 2025",
  description:
    "A structured guide to acquiring essential skills and knowledge for aspiring cloud computing professionals, from foundational concepts to advanced expertise, aligned with 2025 industry trends.",
  children: [
    {
      name: "Foundations of Cloud Computing",
      description:
        "Establish a strong understanding of cloud computing basics.",
      children: [
        {
          name: "Introduction to Cloud Computing",
          description:
            "Learn the core concepts and history of cloud computing.",
          children: [
            {
              name: "Definition and Characteristics",
              description:
                "Understand what cloud computing is and its key attributes.",
            },
            {
              name: "Service Models",
              description: "Explore IaaS, PaaS, and SaaS models.",
            },
            {
              name: "Deployment Models",
              description:
                "Differentiate between public, private, hybrid, and community clouds.",
            },
          ],
        },
        {
          name: "Virtualization Basics",
          description: "Grasp the fundamentals of virtualization technologies.",
          children: [
            {
              name: "Hypervisors",
              description: "Study types and functionalities of hypervisors.",
            },
            {
              name: "Virtual Machines vs. Containers",
              description: "Compare and contrast VMs and containers.",
            },
          ],
        },
      ],
    },
    {
      name: "Core Cloud Services",
      description: "Dive into essential cloud services and their applications.",
      children: [
        {
          name: "Compute Services",
          description:
            "Understand virtual servers and scalable computing resources.",
          children: [
            {
              name: "Virtual Machines",
              description: "Provision and manage VMs in the cloud.",
            },
            {
              name: "Serverless Computing",
              description: "Implement functions without managing servers.",
            },
          ],
        },
        {
          name: "Storage Services",
          description:
            "Learn about cloud storage solutions and their use cases.",
          children: [
            {
              name: "Object Storage",
              description: "Store and retrieve unstructured data.",
            },
            {
              name: "Block Storage",
              description: "Manage storage volumes for applications.",
            },
            {
              name: "File Storage",
              description: "Utilize shared file systems in the cloud.",
            },
          ],
        },
        {
          name: "Networking Services",
          description:
            "Explore cloud networking components and configurations.",
          children: [
            {
              name: "Virtual Private Cloud (VPC)",
              description: "Design isolated network environments.",
            },
            {
              name: "Load Balancing",
              description: "Distribute traffic for high availability.",
            },
            {
              name: "Content Delivery Networks (CDN)",
              description: "Accelerate content delivery globally.",
            },
          ],
        },
        {
          name: "Database Services",
          description: "Examine managed database offerings in the cloud.",
          children: [
            {
              name: "Relational Databases",
              description: "Set up and manage SQL databases.",
            },
            {
              name: "NoSQL Databases",
              description: "Work with non-relational data stores.",
            },
            {
              name: "Database Migration",
              description: "Move databases to the cloud seamlessly.",
            },
          ],
        },
      ],
    },
    {
      name: "Cloud Security and Compliance",
      description:
        "Prioritize security and regulatory requirements in the cloud.",
      children: [
        {
          name: "IAM",
          description: "Control user access and permissions.",
          children: [
            {
              name: "User Roles and Policies",
              description: "Define and assign roles for resource access.",
            },
            {
              name: "Multi-Factor Authentication (MFA)",
              description: "Enhance account security with MFA.",
            },
          ],
        },
        {
          name: "Data Protection",
          description: "Implement measures to safeguard data.",
          children: [
            {
              name: "Encryption",
              description: "Encrypt data at rest and in transit.",
            },
            {
              name: "Data Loss Prevention (DLP)",
              description: "Prevent unauthorized data exfiltration.",
            },
          ],
        },
        {
          name: "Compliance Standards",
          description: "Ensure adherence to industry regulations.",
          children: [
            {
              name: "GDPR",
              description: "Understand data protection requirements in Europe.",
            },
            {
              name: "HIPAA",
              description: "Comply with healthcare data regulations.",
            },
            {
              name: "ISO/IEC 27001",
              description: "Implement information security management systems.",
            },
          ],
        },
      ],
    },
    {
      name: "Cloud Architecture and Design",
      description: "Master the principles of designing robust cloud solutions.",
      children: [
        {
          name: "Architectural Best Practices",
          description:
            "Learn frameworks and guidelines for cloud architecture.",
          children: [
            {
              name: "Well-Architected Framework",
              description: "Adopt best practices for cloud workloads.",
            },
            {
              name: "Design for Scalability",
              description: "Build systems that grow with demand.",
            },
            {
              name: "Fault Tolerance and High Availability",
              description: "Ensure continuous operation amidst failures.",
            },
          ],
        },
        {
          name: "IaC",
          description: "Automate infrastructure deployment using code.",
          children: [
            {
              name: "Terraform",
              description:
                "Provision infrastructure across multiple providers.",
            },
            {
              name: "AWS CloudFormation",
              description: "Manage AWS resources with templates.",
            },
            {
              name: "Azure Resource Manager (ARM) Templates",
              description: "Deploy resources in Azure programmatically.",
            },
          ],
        },
        {
          name: "Microservices and Containerization",
          description: "Design and manage containerized applications.",
          children: [
            {
              name: "Docker",
              description: "Containerize applications for consistency.",
            },
            {
              name: "Kubernetes",
              description: "Orchestrate containerized workloads at scale.",
            },
            {
              name: "Service Mesh",
              description: "Manage microservices communication securely.",
            },
          ],
        },
      ],
    },
    {
      name: "AI and Machine Learning in Cloud",
      description: "Leverage AI and ML services in cloud platforms.",
      children: [
        {
          name: "AI-Powered Cloud Services",
          description: "Enhance cloud operations with artificial intelligence.",
          children: [
            {
              name: "AWS SageMaker",
              description: "Train and deploy ML models at scale.",
            },
            {
              name: "Azure Machine Learning",
              description: "Build and manage ML workflows.",
            },
            {
              name: "Google Vertex AI",
              description: "Unified AI platform for ML lifecycle management.",
            },
          ],
        },
        {
          name: "Machine Learning Model ",
          description: "Deploy and manage ML models in the cloud.",
          children: [
            {
              name: "Model Monitoring",
              description: "Track model drift and accuracy over time.",
            },
            {
              name: "MLOps",
              description: "Automate ML pipelines using DevOps principles.",
            },
            {
              name: "Serverless AI",
              description: "Run AI models without managing infrastructure.",
            },
          ],
        },
      ],
    },
    {
      name: "Edge Computing and IoT",
      description: "Bringing computation closer to the data source.",
      children: [
        {
          name: "Edge-to-Cloud Integration",
          description:
            "Connect IoT and edge devices seamlessly with cloud services.",
          children: [
            {
              name: "AWS IoT Greengrass",
              description: "Run local compute and AI on edge devices.",
            },
            {
              name: "Azure IoT Edge",
              description: "Deploy cloud workloads to edge devices.",
            },
            {
              name: "Google Cloud IoT Core",
              description: "Manage IoT device data in real time.",
            },
          ],
        },
        {
          name: "5G and Edge Computing",
          description: "Leverage high-speed networks for real-time processing.",
          children: [
            {
              name: "Cloudflare Workers",
              description: "Deploy serverless functions at the network edge.",
            },
            {
              name: "AWS Wavelength",
              description:
                "Run applications with ultra-low latency at 5G edges.",
            },
            {
              name: "Google Anthos for Edge",
              description: "Extend Kubernetes workloads to edge locations.",
            },
          ],
        },
      ],
    },
    {
      name: "Serverless and Cloud-Native Technologies",
      description: "Focus on event-driven, scalable architectures.",
      children: [
        {
          name: "Serverless Computing",
          description: "Run code without provisioning or managing servers.",
          children: [
            {
              name: "AWS Lambda",
              description: "Event-driven serverless compute platform.",
            },
            {
              name: "Azure Functions",
              description: "Execute event-triggered functions in Azure.",
            },
            {
              name: "Google Cloud Functions",
              description: "Deploy lightweight serverless applications.",
            },
          ],
        },
        {
          name: "Cloud-Native Development",
          description: "Build applications optimized for the cloud.",
          children: [
            {
              name: "Microservices Architecture",
              description: "Design distributed, scalable applications.",
            },
            {
              name: "Service Mesh",
              description: "Manage service-to-service communication.",
            },
            {
              name: "Kubernetes Operators",
              description: "Automate complex application lifecycle management.",
            },
          ],
        },
      ],
    },
    {
      name: "Quantum Computing in the Cloud",
      description: "Explore the potential of quantum computing services.",
      children: [
        {
          name: "Quantum Computing Services",
          description: "Access cloud-based quantum computing platforms.",
          children: [
            {
              name: "AWS Braket",
              description:
                "Experiment with quantum algorithms on managed services.",
            },
            {
              name: "IBM Quantum",
              description: "Use IBM’s quantum computers via the cloud.",
            },
            {
              name: "Google Quantum AI",
              description: "Explore quantum supremacy and applications.",
            },
          ],
        },
        {
          name: "Quantum Programming Frameworks",
          description:
            "Develop quantum applications using cloud-supported frameworks.",
          children: [
            {
              name: "Qiskit",
              description: "IBM’s open-source quantum computing SDK.",
            },
            {
              name: "Cirq",
              description: "Google’s framework for quantum circuits.",
            },
            {
              name: "PennyLane",
              description: "Hybrid quantum-classical computing platform.",
            },
          ],
        },
      ],
    },
    {
      name: "Certification",
      description:
        "Validate skills and stay updated with industry advancements.",
      children: [
        {
          name: "Cloud Provider Certifications",
          description:
            "Obtain certifications from leading cloud service providers.",
          children: [
            {
              name: "AWS Certified Solutions Architect",
              description: "Design and deploy scalable systems on AWS.",
            },
            {
              name: "Azure Solutions Architect Expert",
              description: "Implement solutions on Microsoft Azure.",
            },
            {
              name: "Google Professional Cloud Architect",
              description: "Design and manage solutions on Google Cloud.",
            },
          ],
        },
        {
          name: "Specialized Certifications",
          description: "Pursue certifications in niche areas.",
          children: [
            {
              name: "Certified Kubernetes Administrator (CKA)",
              description: "Manage Kubernetes clusters effectively.",
            },
            {
              name: "Certified Cloud Security Professional (CCSP)",
              description: "Demonstrate cloud security expertise.",
            },
            {
              name: "AWS Certified Machine Learning – Specialty",
              description: "Implement ML solutions on AWS.",
            },
          ],
        },
      ],
    },
    {
      name: "Career Pathways in Cloud Computing",
      description:
        "Explore various roles and their trajectories within the cloud domain.",
      children: [
        {
          name: "Cloud Engineer",
          description: "Build and maintain cloud infrastructure.",
          children: [
            {
              name: "Junior Cloud Engineer",
              description:
                "Assist in the development and maintenance of cloud systems.",
            },
            {
              name: "Cloud Engineer",
              description: "Design and implement cloud solutions.",
            },
            {
              name: "Senior Cloud Engineer",
              description:
                "Lead complex cloud projects and mentor junior staff.",
            },
          ],
        },
        {
          name: "Cloud Architect",
          description: "Design and oversee cloud computing strategies.",
          children: [
            {
              name: "Cloud Solutions Architect",
              description:
                "Develop and implement cloud architecture solutions.",
            },
            {
              name: "Lead Cloud Architect",
              description: "Guide architectural decisions and strategy.",
            },
            {
              name: "Chief Cloud Officer",
              description:
                "Oversee all cloud initiatives within an organization.",
            },
          ],
        },
        {
          name: "Cloud Security Specialist",
          description: "Ensure the security of cloud infrastructures and data.",
          children: [
            {
              name: "Cloud Security Analyst",
              description: "Monitor and protect cloud environments.",
            },
            {
              name: "Cloud Security Engineer",
              description: "Design and implement security measures.",
            },
            {
              name: "Cloud Security Architect",
              description:
                "Develop overarching security strategies for cloud systems.",
            },
          ],
        },
      ],
    },
    {
      name: "Continous Learnning",
      description:
        "Stay updated with the latest trends and technologies in cloud computing.",
    },
  ],
};
export default CloudComputingRoadmap;
