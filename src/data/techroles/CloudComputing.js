const CloudComputingRoadmap = {
  name: "Cloud Computing Roadmap 2025",
  children: [
    {
      name: "Foundations of Cloud Computing",
      children: [
        {
          name: "Introduction to Cloud",
          children: [
            {
              name: "Definition and Characteristics",
            },
            {
              name: "IaaS",
              preferred: true,
            },
            {
              name: "PaaS",
            },
            {
              name: "SaaS",
            },
            {
              name: "Deployment Models",
            },
          ],
        },
        {
          name: "Virtualization Basics",
          children: [
            {
              name: "Hypervisors",
            },
            {
              name: "Virtual Machines vs. Containers",
            },
          ],
        },
      ],
      dividerText: "Cloud basics mastered—choose your cloud platform next.",
    },
    {
      name: "Choosing Your Cloud Platform",
      children: [
        {
          name: "Amazon Web Services (AWS)",
          preferred: true,
        },
        {
          name: "Microsoft Azure",
        },
        {
          name: "Google Cloud Platform (GCP)",
        },
      ],
      dividerText: "Platform chosen—explore core cloud services.",
    },
    {
      name: "Core Cloud Services",
      children: [
        {
          name: "Virtual Machines",
          children: [
            {
              name: "AWS EC2",
              preferred: true,
            },
            {
              name: "Azure VMs",
            },
            {
              name: "Google Cloud VMs",
            },
          ],
        },
        {
          name: "Networking Services",
          children: [
            {
              name: "Virtual Private Cloud (VPC)",
            },
            {
              name: "Load Balancing",
            },
            {
              name: "Content Delivery Networks (CDN)",
            },
          ],
        },
        {
          name: "Object Storage",
          children: [
            {
              name: "AWS S3",
              preferred: true,
            },
            {
              name: "AWS EBS",
              preferred: true,
            },
            {
              name: "AWS EFS",
              preferred: true,
            },
            {
              name: "Azure Blob Storage",
            },
            {
              name: "Google Cloud Storage",
            },
          ],
        },
        {
          name: "Database Services",
          children: [
            {
              name: "Relational Databases",
            },
            {
              name: "NoSQL Databases",
            },
            {
              name: "Database Migration",
            },
          ],
        },
      ],
      dividerText:
        "Core services understood—secure your cloud environment next.",
    },
    {
      name: "Cloud Security and Compliance",
      children: [
        {
          name: "Identity and Access Management",
          children: [
            {
              name: "User Roles and Policies",
            },
            {
              name: "Multi-Factor Authentication",
            },
          ],
        },
        {
          name: "Data Protection",
          children: [
            {
              name: "Encryption",
            },
            {
              name: "Data Loss Prevention (DLP)",
            },
          ],
        },
        {
          name: "Compliance Standards",
          children: [
            {
              name: "GDPR",
            },
            {
              name: "HIPAA",
            },
            {
              name: "ISO/IEC 27001",
            },
          ],
        },
      ],
      dividerText: "Security locked in—design robust cloud architectures next.",
    },
    {
      name: "Cloud Architecture and Design",
      children: [
        {
          name: "Architectural Best Practices",
          children: [
            {
              name: "Well-Architected Framework",
            },
            {
              name: "Design for Scalability",
            },
            {
              name: "Fault Tolerance and High Availability",
            },
          ],
        },
        {
          name: "Infrastructure as Code",
          children: [
            {
              name: "Terraform",
              preferred: true,
            },
            {
              name: "AWS CloudFormation",
            },
            {
              name: "Azure Resource Manager Templates",
            },
          ],
        },
        {
          name: "Microservices and Containerization",
          children: [
            {
              name: "Docker",
            },
            {
              name: "Kubernetes",
              preferred: true,
            },
            {
              name: "Service Mesh",
            },
          ],
        },
      ],
      dividerText: "Architecture designed—integrate AI and ML into the cloud.",
    },
    {
      name: "AI and Machine Learning in Cloud",
      children: [
        {
          name: "AI-Powered Cloud Services",
          children: [
            {
              name: "AWS SageMaker",
              preferred: true,
            },
            {
              name: "Azure Machine Learning",
            },
            {
              name: "Google Vertex AI",
            },
          ],
        },
        {
          name: "Machine Learning Model Management",
          children: [
            {
              name: "Model Monitoring",
            },
            {
              name: "MLOps",
            },
            {
              name: "Serverless AI",
            },
          ],
        },
      ],
      dividerText: "AI integrated—explore edge computing and IoT next.",
    },
    {
      name: " Edge Computing and IoT",
      children: [
        {
          name: "Edge-to-Cloud Integration",
          children: [
            {
              name: "AWS IoT Greengrass",
              preferred: true,
            },
            {
              name: "Azure IoT Edge",
            },
            {
              name: "Google Cloud IoT Core",
            },
          ],
        },
        {
          name: "5G and Edge Computing",
          children: [
            {
              name: "Cloudflare Workers",
            },
            {
              name: "AWS Wavelength",
            },
            {
              name: "Google Anthos for Edge",
            },
          ],
        },
      ],
      dividerText:
        "Edge mastered—embrace serverless and cloud-native tech next.",
    },
    {
      name: "Serverless and Cloud-Native Technologies",
      children: [
        {
          name: "Serverless Computing",
          children: [
            {
              name: "AWS Lambda",
              preferred: true,
            },
            {
              name: "Azure Functions",
            },
            {
              name: "Google Cloud Functions",
            },
          ],
        },
        {
          name: "Cloud-Native Development",
          children: [
            {
              name: "Microservices Architecture",
            },
            {
              name: "Service Mesh",
            },
            {
              name: "Kubernetes Operators",
            },
          ],
        },
      ],
      dividerText:
        "Serverless embraced—explore quantum computing in the cloud.",
    },
    {
      name: "Quantum Computing in the Cloud",
      children: [
        {
          name: "Quantum Computing Services",
          children: [
            {
              name: "AWS Braket",
              preferred: true,
            },
            {
              name: "IBM Quantum",
            },
            {
              name: "Google Quantum AI",
            },
          ],
        },
        {
          name: "Quantum Programming Frameworks",
          children: [
            {
              name: "Qiskit",
            },
            {
              name: "Cirq",
            },
            {
              name: "PennyLane",
            },
          ],
        },
      ],
      dividerText: "Quantum explored—validate your skills with certifications.",
    },
    {
      name: "Certification",
      children: [
        {
          name: "Cloud Provider Certifications",
          children: [
            {
              name: "AWS Certified Solutions Architect",
              preferred: true,
            },
            {
              name: "Azure Solutions Architect Expert",
            },
            {
              name: "Google Professional Cloud Architect",
            },
          ],
        },
        {
          name: "Specialized Certifications",
          children: [
            {
              name: "Certified Kubernetes Administrator (CKA)",
            },
            {
              name: "Certified Cloud Security Professional (CCSP)",
            },
            {
              name: "AWS Certified Machine Learning – Specialty",
            },
          ],
        },
      ],
      dividerText: "Certified skills in hand—map your cloud career path.",
    },
    {
      name: "Career Pathways in Cloud Computing",
      children: [
        {
          name: "Cloud Engineer",
          children: [
            {
              name: "Junior Cloud Engineer",
            },
            {
              name: "Cloud Engineer",
            },
            {
              name: "Senior Cloud Engineer",
            },
          ],
        },
        {
          name: "Cloud Architect",
          children: [
            {
              name: "Cloud Solutions Architect",
            },
            {
              name: "Lead Cloud Architect",
            },
            {
              name: "Chief Cloud Officer",
            },
          ],
        },
        {
          name: "Cloud Security Specialist",
          children: [
            {
              name: "Cloud Security Analyst",
            },
            {
              name: "Cloud Security Engineer",
            },
            {
              name: "Cloud Security Architect",
            },
          ],
        },
      ],
      dividerText: "Career path set—commit to continuous learning.",
    },
    {
      name: "Continuous Learning",
    },
  ],
};

export default CloudComputingRoadmap;
