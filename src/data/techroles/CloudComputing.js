const CloudComputingRoadmap = {
  name: "Cloud Computing Roadmap 2025",
  children: [
    {
      name: " Cloud Computing Fundamentals",
      children: [
        {
          name: "Introduction to Cloud",
          children: [
            { name: "What is Cloud Computing?" },
            { name: "History and Evolution of Cloud" },
            { name: "Key Characteristics of Cloud" },
            { name: "Benefits & Use Cases" },
            { name: "Service Models: IaaS, PaaS, SaaS" },
            { name: "Public, Private, Hybrid, Multi-Cloud" },
          ],
        },
        {
          name: " Virtualization Basics",
          children: [
            { name: "What is Virtualization?" },
            { name: "Hypervisors: Type 1 vs Type 2" },
            { name: "Virtual Machines vs Containers" },
            { name: "Container Runtimes (Docker)" },
          ],
        },
        {
          name: " Cloud Economics",
          children: [
            { name: "Pay-as-you-go & Subscription Models" },
            { name: "TCO and ROI in Cloud" },
            { name: "Cost Optimization Strategies" },
          ],
        },
      ],
      dividerText: "Fundamentals set—get hands-on with a cloud platform.",
    },

    {
      name: " Hands-on with a Cloud Platform",
      children: [
        { name: "Amazon Web Services (AWS)", preferred: true },
        { name: "Microsoft Azure" },
        { name: "Google Cloud Platform (GCP)" },
        { name: "Cloud Console and CLI Basics" },
      ],
      dividerText: "Platform ready—learn core cloud services.",
    },

    {
      name: " Core Cloud Services",
      children: [
        {
          name: " Compute",
          children: [
            { name: "AWS EC2", preferred: true },
            { name: "Azure VMs" },
            { name: "Google Compute Engine" },
            { name: "Auto Scaling & Load Balancing" },
          ],
        },
        {
          name: " Storage",
          children: [
            { name: "Object Storage (S3, Blob, GCS)", preferred: true },

            { name: "Block Storage (EBS, Azure Disks)" },
            { name: "File Storage (EFS, Azure Files)" },
            { name: "Storage Lifecycle & Cost Mgmt" },
          ],
        },
        {
          name: " Networking",
          children: [
            { name: "Virtual Private Cloud (VPC)" },
            { name: "Subnets, NAT, Security Groups" },
            { name: "Load Balancing & CDN" },
            { name: "DNS & Traffic Management" },
          ],
        },
        {
          name: "Databases",
          children: [
            { name: "Relational (RDS, SQL)" },
            { name: "NoSQL (DynamoDB, Cosmos DB)" },
            { name: "Caching (Redis, Memcached)" },
            { name: "Database Migration Services" },
          ],
        },
      ],
      dividerText: "Core services done—build secure cloud solutions.",
    },

    {
      name: " Cloud Security & Compliance",
      children: [
        {
          name: "Identity and Access Management",
          children: [
            { name: "User Roles & Permissions" },
            { name: "Policies & Groups" },
            { name: "MFA & Identity Federation" },
          ],
        },
        {
          name: " Data Protection",
          children: [
            { name: "Encryption (At Rest/In Transit)" },
            { name: "Key Management Services" },
            { name: "Backup & Recovery" },
            { name: "Data Loss Prevention (DLP)" },
          ],
        },
        {
          name: " Compliance & Governance",
          children: [
            { name: "GDPR, HIPAA, ISO 27001" },
            { name: "Cloud Auditing Tools" },
            { name: "Security Posture Management" },
          ],
        },
      ],
      dividerText: "Security strong—architect solutions next.",
    },

    {
      name: " Cloud Architecture & Infrastructure Design",
      children: [
        {
          name: " Design Principles",
          children: [
            { name: "Well-Architected Framework" },
            { name: "Scalability & Resilience" },
            { name: "Cost Optimization" },
            { name: "Disaster Recovery" },
          ],
        },
        {
          name: " Infrastructure as Code (IaC)",
          children: [
            { name: "Terraform" },
            { name: "AWS CloudFormation" },
            { name: "ARM Templates" },
            { name: "Pulumi & Crossplane" },
          ],
        },
        {
          name: " Containerization & Orchestration",
          children: [
            { name: "Docker Basics" },
            { name: "Kubernetes" },
            { name: "Helm, Service Mesh" },
          ],
        },
      ],
      dividerText: "Infrastructure built—go serverless and cloud-native.",
    },

    {
      name: " Serverless & Cloud-Native Technologies",
      children: [
        {
          name: " Serverless",
          children: [
            { name: "AWS Lambda", preferred: true },
            { name: "Azure Functions" },
            { name: "GCP Cloud Functions" },
          ],
        },
        {
          name: "Cloud-Native Development",
          children: [
            { name: "Microservices Design" },
            { name: "API Gateway" },
            { name: "Kubernetes Operators" },
            { name: "CI/CD Pipelines" },
          ],
        },
      ],
      dividerText: "Modern development unlocked—infuse AI & ML.",
    },

    {
      name: " AI & Machine Learning in Cloud",
      children: [
        {
          name: "Cloud AI Services",
          children: [
            { name: "AWS SageMaker", preferred: true },
            { name: "Azure ML Studio" },
            { name: "Google Vertex AI" },
          ],
        },
        {
          name: " MLOps & Lifecycle",
          children: [
            { name: "Model Training & Deployment" },
            { name: "Monitoring & Retraining" },
            { name: "Serverless AI & Automation" },
          ],
        },
      ],
      dividerText: "ML mastered—scale to edge and IoT.",
    },

    {
      name: " Edge Computing & Internet of Things (IoT)",
      children: [
        {
          name: " Edge-to-Cloud Platforms",
          children: [
            { name: "AWS IoT Greengrass", preferred: true },
            { name: "Azure IoT Edge" },
            { name: "Google IoT Core" },
          ],
        },
        {
          name: " Edge Innovations",
          children: [
            { name: "Cloudflare Workers" },
            { name: "AWS Wavelength" },
            { name: "5G & Edge Use Cases" },
          ],
        },
      ],
      dividerText: "Edge done—explore quantum computing next.",
    },

    {
      name: " Quantum Computing in Cloud",
      children: [
        {
          name: " Quantum Cloud Platforms",
          children: [
            { name: "AWS Braket", preferred: true },
            { name: "Google Quantum AI" },
            { name: "IBM Quantum" },
          ],
        },
        {
          name: "Quantum Development Tools",
          children: [
            { name: "Qiskit (IBM)" },
            { name: "Cirq (Google)" },
            { name: "PennyLane (Xanadu)" },
          ],
        },
      ],
      dividerText: "Quantum explored—prove your skills with certification.",
    },

    {
      name: " Certification & Validation",
      children: [
        {
          name: "Cloud Provider Certifications",
          children: [
            { name: "AWS Certified Solutions Architect", preferred: true },
            { name: "Azure Solutions Architect Expert" },
            { name: "Google Professional Cloud Architect" },
          ],
        },
        {
          name: "Specialty Certifications",
          children: [
            { name: "Certified Kubernetes Administrator (CKA)" },
            { name: "AWS Certified Machine Learning – Specialty" },
            { name: "Certified Cloud Security Professional (CCSP)" },
          ],
        },
      ],
      dividerText: "Certified? Time to explore cloud career roles.",
    },

    {
      name: "Cloud Career Pathways",
      children: [
        {
          name: "Cloud Engineer",
          children: [
            { name: "Junior Cloud Engineer" },
            { name: "Cloud Engineer" },
            { name: "Senior Cloud Engineer" },
          ],
        },
        {
          name: "Cloud Architect",
          children: [
            { name: "Solutions Architect" },
            { name: "Lead Architect" },
            { name: "Chief Cloud Officer" },
          ],
        },
        {
          name: "Cloud Security Specialist",
          children: [
            { name: "Security Analyst" },
            { name: "Security Engineer" },
            { name: "Security Architect" },
          ],
        },
        {
          name: "DevOps / SRE Roles",
          children: [
            { name: "Cloud DevOps Engineer" },
            { name: "Site Reliability Engineer (SRE)" },
          ],
        },
      ],
      dividerText: "Career selected—stay curious and updated.",
    },

    {
      name: "Continuous Learning",
      children: [
        { name: "Follow Cloud Blogs (AWS, Azure, GCP)" },
        { name: "GitHub Projects & Open Source" },
        { name: "Attend Cloud Conferences (re:Invent, Ignite)" },
        { name: "Stay Updated with Cloud Trends (FinOps, Green Cloud, etc.)" },
      ],
    },
  ],
};

export default CloudComputingRoadmap;
