const CloudComputingRoadmap = {
  name: "Cloud Computing Roadmap 2025",
  description:
    "This structured guide equips aspiring cloud computing professionals with essential skills and knowledge, from foundational concepts to advanced expertise, aligned with 2025 industry trends. It covers core services, security, architecture, AI integration, and emerging technologies like quantum computing. Designed for learners at all levels, it ensures readiness to build, secure, and innovate in the dynamic cloud landscape with a clear, actionable progression.",
  children: [
    {
      name: "Foundations of Cloud Computing",
      description:
        "Begin your cloud journey by mastering the basics of cloud computing, laying a strong groundwork for advanced skills. This section explores core principles, historical evolution, and enabling technologies like virtualization, taught with examples such as AWS VMs and VMware setups. It’s your essential starting point in 2025, providing the knowledge to understand and manage scalable, efficient cloud solutions that power modern digital infrastructure.",
      children: [
        {
          name: "Introduction to Cloud Computing",
          description:
            "Dive into the essentials of cloud computing, understanding its definition, evolution, and transformative impact on IT and business operations, taught with historical examples like the rise of AWS and Azure. This section builds the foundational knowledge needed for 2025, equipping you to navigate cloud ecosystems, comprehend their role in modern infrastructure, and prepare for deeper technical exploration.",
          children: [
            {
              name: "Definition and Characteristics",
              description:
                "Learn cloud computing as on-demand, scalable resource delivery over the internet, taught with examples like AWS’s elasticity. This section covers key traits—self-service, scalability, pay-as-you-go—crucial for 2025 professionals to distinguish cloud systems and recognize their value in delivering flexible, efficient solutions across industries.",
            },

            {
              name: "IaaS",
              preferred: true,
              description:
                "Master IaaS with AWS EC2, taught via VM provisioning examples. Preferred in 2025 for its flexibility and control, it’s ideal for infrastructure-heavy workloads like hosting or big data.",
            },
            {
              name: "PaaS",
              description:
                "Learn PaaS with Google App Engine, taught with app deployment examples. A 2025 skill for rapid development, it simplifies platform management for developers.",
            },
            {
              name: "SaaS",
              description:
                "Understand SaaS with Salesforce, taught with CRM examples. Key in 2025 for end-user apps, it reduces setup complexity for businesses.",
            },

            {
              name: "Deployment Models",
              description:
                "Differentiate public, private, hybrid, and community clouds, taught with examples like AWS Public Cloud and Azure Hybrid setups. This section covers their benefits—cost, security, flexibility—vital for 2025 professionals to design cloud strategies that align with organizational needs and compliance in a multi-cloud world.",
            },
          ],
        },
        {
          name: "Virtualization Basics",
          description:
            "Understand virtualization, the backbone of cloud computing, taught with tools like VMware and Docker to create virtual resources. This section explores how it drives scalability and efficiency in 2025 cloud environments. It’s a cornerstone skill, providing the technical know-how to manage infrastructure that powers modern cloud platforms, from VMs to containers.",
          children: [
            {
              name: "Hypervisors",
              description:
                "Learn hypervisors like VMware ESXi and Hyper-V, taught with setup examples for managing VMs. This section covers Type 1 vs. Type 2 and resource allocation. A 2025 skill to optimize virtualization, ensuring efficient cloud deployments across providers with robust performance and isolation.",
            },
            {
              name: "Virtual Machines vs. Containers",
              description:
                "Compare VMs (full OS virtualization) with containers (lightweight isolation), taught with VMware for VMs and Docker for containers. This section covers performance and portability trade-offs, a 2025 skill for choosing the right virtualization approach for cloud workloads, balancing resource use and efficiency.",
            },
          ],
        },
      ],
      dividerText: "Cloud basics mastered—choose your cloud platform next.",
    },
    {
      name: "Choosing Your Cloud Platform",
      description:
        "Select a leading cloud platform—AWS, Azure, or Google Cloud—to focus your learning journey, tailoring your skills to a provider’s ecosystem. This section guides you through each platform’s strengths, market relevance, and use cases in 2025, taught with examples like AWS’s dominance in scalability, Azure’s enterprise integration, and Google Cloud’s AI prowess. Make an informed choice to streamline your path through core services, security, and advanced topics ahead.",
      children: [
        {
          name: "Amazon Web Services (AWS)",
          preferred: true,
          description:
            "Explore AWS, the market leader in 2025, known for its vast service offerings and scalability, taught with examples like EC2 for compute and S3 for storage. Ideal for learners aiming for versatility and roles in startups or large-scale enterprises, it’s a top choice due to its broad adoption and certification value.",
        },
        {
          name: "Microsoft Azure",
          description:
            "Dive into Azure, a 2025 powerhouse for hybrid and enterprise solutions, taught with examples like Azure VMs and Cosmos DB. Perfect for those targeting industries with Microsoft ecosystems or hybrid cloud needs, it blends seamlessly with tools like Office 365 and Active Directory.",
        },
        {
          name: "Google Cloud Platform (GCP)",
          description:
            "Learn GCP, a 2025 innovator in AI and data analytics, taught with examples like Compute Engine and BigQuery. Suited for learners interested in cutting-edge tech like machine learning or cost-effective solutions, it’s growing fast in cloud-native and open-source communities.",
        },
      ],
      dividerText:
        "Platform chosen—explore core cloud services with focus next.",
    },
    {
      name: "Core Cloud Services",
      description:
        "Explore the essential building blocks of cloud computing—compute, storage, networking, and databases—taught with hands-on examples from AWS, Azure, and Google Cloud, such as EC2 instances and S3 buckets. This section equips you with the skills to leverage these services in 2025, enabling the design and management of scalable, reliable systems critical for real-world cloud deployments across industries.",
      children: [
        {
          name: "Virtual Machines",
          description:
            "Learn to provision and manage scalable VM instances, taught with AWS EC2 and Azure VMs using setup examples like auto-scaling groups. A 2025 core skill for deploying and optimizing compute resources, it supports diverse workloads—web servers, databases—ensuring flexibility and performance in cloud environments.",
          children: [
            {
              name: "AWS EC2",
              preferred: true,
              description:
                "Master AWS EC2 for VM management, taught with instance launches and scaling examples. Preferred in 2025 for its robust ecosystem and flexibility.",
            },
            {
              name: "Azure VMs",
              description:
                "Use Azure VMs for computing, taught with setup and management examples. A 2025 skill for Microsoft-integrated cloud solutions.",
            },
            {
              name: "Google Cloud VMs",
              description:
                "Learn Google Cloud VMs for compute, taught with instance creation and management examples. Key in 2025 for GCP cloud solutions.",
            },
          ],
        },

        {
          name: "Object Storage",
          description:
            "Master object storage like AWS S3 for scalable, unstructured data management, taught with APIs and examples like media storage or backups. A 2025 skill for handling large-scale data with tools like MinIO, it ensures durability and global access for cloud applications.",
          children: [
            {
              name: "AWS S3",
              preferred: true,
              description:
                "Use AWS S3 for object storage, taught with bucket creation and API examples. Preferred in 2025 for its scalability and integration.",
            },
            {
              name: "AWS EBS",
              preferred: true,
              description:
                "Master AWS EBS for block storage, taught with volume creation and attachment examples. Preferred in 2025 for its performance and integration.",
            },

            {
              name: "AWS EFS",
              preferred: true,
              description:
                "Master AWS EFS for file storage, taught with setup and configuration examples. Preferred in 2025 for its scalability and integration.",
            },
            {
              name: "Azure Blob Storage",
              description:
                "Learn Azure Blob for unstructured data, taught with blob upload examples. A 2025 skill for Microsoft cloud storage.",
            },
            {
              name: "Google Cloud Storage",
              description:
                "Explore Google Cloud Storage, taught with bucket setups. Key in 2025 for GCP-integrated storage.",
            },
          ],
        },
        {
          name: "Networking Services",
          description:
            "Explore cloud networking components—VPCs, load balancers, CDNs—taught with AWS VPC and Azure CDN examples for secure, efficient architectures. This section builds 2025 skills to design high-availability networks, ensuring performance and connectivity for global cloud apps using tools like Cloudflare and GCP networking.",
          children: [
            {
              name: "Virtual Private Cloud (VPC)",
              description:
                "Master VPCs like AWS VPC for isolated network environments, taught with subnet design and routing examples using Azure VNet. A 2025 skill for securing cloud resources, it ensures controlled, private networks for sensitive workloads with robust configurations.",
            },
            {
              name: "Load Balancing",
              description:
                "Learn load balancing with AWS ELB and Azure Load Balancer, taught with setup and traffic distribution examples for uptime. A 2025 skill for optimizing resource use and resilience, it supports high-traffic apps like e-commerce with scalable configurations.",
            },
            {
              name: "Content Delivery Networks (CDN)",
              description:
                "Understand CDNs like Cloudflare for fast content delivery, taught with caching setups and examples reducing latency. A 2025 skill for enhancing user experience, it leverages tools like AWS CloudFront to optimize web and media apps globally.",
            },
          ],
        },
        {
          name: "Database Services",
          description:
            "Master managed cloud database offerings like AWS RDS and DynamoDB, taught with setup and querying examples for relational and NoSQL data. A 2025 skill for scalable storage, this section supports app data needs—finance, retail—using tools like Azure Cosmos DB for efficient management.",
          children: [
            {
              name: "Relational Databases",
              description:
                "Learn relational DBs like AWS RDS for structured data, taught with SQL setup and query examples using MySQL or PostgreSQL. A 2025 skill for transactional systems, it ensures consistency with tools like Azure SQL for cloud analytics and enterprise apps.",
            },
            {
              name: "NoSQL Databases",
              description:
                "Understand NoSQL DBs like AWS DynamoDB for unstructured data, taught with key-value and document examples via MongoDB Atlas. A 2025 skill for big data, it offers flexibility with tools like Azure Cosmos DB for high-performance cloud apps.",
            },
            {
              name: "Database Migration",
              description:
                "Master DB migration to the cloud with AWS DMS and Azure Database Migration Service, taught with planning and execution examples. A 2025 skill for seamless transitions, it ensures minimal downtime using tools like Google’s Database Migration for enterprise systems.",
            },
          ],
        },
      ],
      dividerText:
        "Core services understood—secure your cloud environment next.",
    },
    {
      name: "Cloud Security and Compliance",
      description:
        "Focus on securing cloud environments and meeting regulatory standards with tools like AWS IAM and Azure AD, taught through practical examples of encryption and compliance audits. This step builds 2025 skills in IAM, data protection, and frameworks like GDPR, ensuring trust and legality in cloud deployments amid rising threats and global regulations—a vital competency for any cloud professional.",
      children: [
        {
          name: "Identity and Access Management",
          description:
            "Learn IAM to control user permissions in the cloud, taught with AWS IAM and Azure AD examples like role-based access setups. This section secures resource access in 2025, a critical skill to protect cloud systems by ensuring only authorized users engage with sensitive data and services using robust authentication tools.",
          children: [
            {
              name: "User Roles and Policies",
              description:
                "Master user roles and policies for access control, taught with AWS IAM examples creating granular permissions and Azure AD policies. A 2025 skill to secure cloud resources, it ensures precise, role-based access management in multi-user environments with tools like Google IAM.",
            },
            {
              name: "Multi-Factor Authentication",
              description:
                "Implement MFA for added security layers, taught with AWS MFA and Azure AD setups using Authenticator apps or SMS. A 2025 skill to prevent unauthorized access, it strengthens cloud security with tools like Google Authenticator amid evolving cyber threats.",
            },
          ],
        },
        {
          name: "Data Protection",
          description:
            "Secure cloud data with encryption and DLP tools, taught with AWS KMS and Azure Key Vault examples for safeguarding sensitive info at rest and in transit. This section builds 2025 skills to ensure data integrity and privacy, critical for protecting business-critical and personal data in cloud systems against breaches.",
          children: [
            {
              name: "Encryption",
              description:
                "Learn encryption for data security with AWS KMS and Azure Key Vault, taught with AES-256 and TLS examples for securing storage and traffic. A 2025 core skill, it uses tools like Google KMS to meet compliance and protect cloud data from unauthorized access.",
            },
            {
              name: "Data Loss Prevention (DLP)",
              description:
                "Prevent data leaks with DLP tools like AWS Macie, taught with monitoring and policy examples for spotting sensitive data exposure. A 2025 skill to enforce security policies, it leverages Azure Information Protection for compliance in regulated cloud environments.",
            },
          ],
        },
        {
          name: "Compliance Standards",
          description:
            "Ensure cloud adherence to regulations like GDPR and HIPAA, taught with AWS Config and Azure Policy examples for aligning systems with legal frameworks. A 2025 skill to navigate global compliance, it builds trust using tools like Google Cloud Security Command Center for audits in regulated industries.",
          children: [
            {
              name: "GDPR",
              description:
                "Master GDPR for Europe’s data rules, taught with AWS compliance setups and user consent examples. A 2025 skill to meet privacy laws using tools like Azure GDPR dashboards for European cloud deployments.",
            },
            {
              name: "HIPAA",
              description:
                "Learn HIPAA for healthcare data, taught with AWS HIPAA-compliant setups and PHI protection examples. A 2025 skill to secure patient data with Azure HIPAA tools in U.S. cloud systems.",
            },
            {
              name: "ISO/IEC 27001",
              description:
                "Understand ISO/IEC 27001 for info security, taught with GCP compliance examples and risk management. A 2025 skill to certify security practices using AWS Audit Manager for global cloud trust.",
            },
          ],
        },
      ],
      dividerText: "Security locked in—design robust cloud architectures next.",
    },
    {
      name: "Cloud Architecture and Design",
      description:
        "Learn to design scalable, resilient cloud architectures with tools like Terraform and Kubernetes, taught through examples such as multi-region AWS setups and Dockerized apps. This step explores 2025 best practices, IaC, and microservices, equipping you to craft efficient cloud systems that meet modern business demands with a blend of performance, cost, and reliability.",
      children: [
        {
          name: "Architectural Best Practices",
          description:
            "Master architectural frameworks like AWS Well-Architected, taught with examples designing scalable, reliable systems for web apps or enterprise solutions. This section builds 2025 skills to ensure cloud designs are cost-effective, secure, and high-performing, using tools like Azure Advisor to align with industry standards across providers.",
          children: [
            {
              name: "Well-Architected Framework",
              description:
                "Apply the Well-Architected Framework (e.g., AWS), taught with pillars like reliability and cost optimization via examples. A 2025 skill to design sustainable cloud systems using tools like GCP’s Architecture Framework for consistent, optimized deployments.",
            },
            {
              name: "Design for Scalability",
              description:
                "Design scalable systems with auto-scaling, taught with AWS Auto Scaling and Azure Scale Sets examples for traffic spikes. A 2025 skill to ensure elastic resource use with tools like GCP Autoscaler for dynamic cloud apps.",
            },
            {
              name: "Fault Tolerance and High Availability",
              description:
                "Ensure uptime with multi-region setups, taught with AWS Route 53 and Azure Traffic Manager examples for failover. A 2025 skill for resilient systems using GCP’s Global Load Balancer for continuous cloud operation.",
            },
          ],
        },
        {
          name: "Infrastructure as Code",
          description:
            "Automate cloud deployments with IaC tools like Terraform, taught with practical examples provisioning AWS or Azure resources via HCL or YAML. This section builds 2025 skills for repeatable, coded infrastructure, streamlining management with tools like CloudFormation for agility and consistency in DevOps-driven cloud workflows.",
          children: [
            {
              name: "Terraform",
              preferred: true,
              description:
                "Master Terraform for multi-cloud IaC, taught with HCL examples provisioning AWS EC2 or Azure VMs. Preferred in 2025 for its provider-agnostic flexibility, it’s key for scalable deployments.",
            },
            {
              name: "AWS CloudFormation",
              description:
                "Use AWS CloudFormation with JSON/YAML, taught with stack creation for EC2 setups. A 2025 skill for AWS-specific automation and orchestration.",
            },
            {
              name: "Azure Resource Manager Templates",
              description:
                "Deploy with ARM Templates in Azure, taught with JSON examples for VM setups. A 2025 skill for Azure-centric IaC and consistency.",
            },
          ],
        },
        {
          name: "Microservices and Containerization",
          description:
            "Design modular, containerized apps with Docker and Kubernetes, taught with examples like microservices on AWS EKS and Azure AKS. A 2025 skill for scalable, distributed architectures, this section leverages tools like Istio to build resilient, cloud-native solutions optimized for modern cloud ecosystems.",
          children: [
            {
              name: "Docker",
              description:
                "Containerize apps with Docker, taught with Dockerfile creation and Docker Compose examples for multi-service apps. A 2025 skill for consistent, portable cloud deployments across platforms.",
            },
            {
              name: "Kubernetes",
              preferred: true,
              description:
                "Orchestrate with Kubernetes on AWS EKS, taught with cluster setups and pod scaling examples. Preferred in 2025 for its dominance and scalability in cloud-native apps.",
            },
            {
              name: "Service Mesh",
              description:
                "Manage microservices with Istio, taught with traffic control and monitoring examples. A 2025 skill for secure, observable cloud-native architectures.",
            },
          ],
        },
      ],
      dividerText: "Architecture designed—integrate AI and ML into the cloud.",
    },
    {
      name: "AI and Machine Learning in Cloud",
      description:
        "Leverage AI and ML services in cloud platforms like AWS SageMaker and Azure ML, taught with examples building models for predictions or image recognition using Jupyter notebooks. This step enhances 2025 cloud operations with intelligent tools, merging AI scalability with cloud power—a cutting-edge skill to drive data-driven innovationAcross industries like healthcare and retail.",
      children: [
        {
          name: "AI-Powered Cloud Services",
          description:
            "Enhance cloud operations with AI services from AWS, Azure, and Google, taught with examples like SageMaker model training and Vertex AI predictions. This section builds 2025 skills to integrate artificial intelligence into cloud workflows, enabling smart automation, analytics, and decision-making for advanced cloud applications.",
          children: [
            {
              name: "AWS SageMaker",
              preferred: true,
              description:
                "Use AWS SageMaker to train and deploy ML models, taught with Jupyter examples for classification tasks. Preferred in 2025 for its robust AWS integration, it’s key for scalable AI in industries like finance.",
            },
            {
              name: "Azure Machine Learning",
              description:
                "Master Azure ML for end-to-end ML workflows, taught with Azure Studio examples for regression models. A 2025 skill for Microsoft-integrated AI solutions.",
            },
            {
              name: "Google Vertex AI",
              description:
                "Explore Google Vertex AI for unified ML, taught with GCP examples automating model deployment. A 2025 skill for Google’s AI-driven cloud ecosystem.",
            },
          ],
        },
        {
          name: "Machine Learning Model Management",
          description:
            "Manage ML models in the cloud with MLOps and monitoring, taught with AWS CloudWatch and Azure DevOps examples for tracking accuracy and drift. A 2025 skill to maintain model performance post-deployment, this section ensures cloud-hosted AI remains efficient and reliable for production workloads.",
          children: [
            {
              name: "Model Monitoring",
              description:
                "Track model drift with AWS CloudWatch, taught with alert setup examples for accuracy drops. A 2025 skill to maintain ML performance in cloud apps.",
            },
            {
              name: "MLOps",
              description:
                "Automate ML pipelines with Azure DevOps, taught with CI/CD examples for model retraining. A 2025 skill for scalable AI lifecycle management.",
            },
            {
              name: "Serverless AI",
              description:
                "Deploy lightweight AI with AWS Lambda, taught with function examples for inference. A 2025 skill for cost-efficient, event-driven AI.",
            },
          ],
        },
      ],
      dividerText: "AI integrated—explore edge computing and IoT next.",
    },
    {
      name: " Edge Computing and IoT",
      description:
        "Bring computation to data sources with edge computing and IoT, taught with AWS IoT Greengrass and Azure IoT Edge examples connecting devices to the cloud seamlessly. This step builds 2025 skills for real-time processing and low-latency solutions, leveraging 5G and edge tools to support IoT-driven industries like smart cities and manufacturing.",
      children: [
        {
          name: "Edge-to-Cloud Integration",
          description:
            "Connect IoT and edge devices to the cloud with AWS and Azure tools, taught with practical setups like Greengrass device integration and IoT Edge modules. A 2025 skill for seamless data flow, this section enables distributed systems for real-time analytics and control in IoT ecosystems.",
          children: [
            {
              name: "AWS IoT Greengrass",
              preferred: true,
              description:
                "Use AWS IoT Greengrass for local compute and AI, taught with device deployment examples on AWS. Preferred in 2025 for its robust AWS integration and edge analytics.",
            },
            {
              name: "Azure IoT Edge",
              description:
                "Master Azure IoT Edge for cloud-to-edge workloads, taught with module setup examples. A 2025 skill for Microsoft’s IoT ecosystem.",
            },
            {
              name: "Google Cloud IoT Core",
              description:
                "Learn Google Cloud IoT Core for device management, taught with MQTT examples. A 2025 skill for GCP-integrated IoT solutions.",
            },
          ],
        },
        {
          name: "5G and Edge Computing",
          description:
            "Leverage 5G and edge computing for real-time cloud processing, taught with examples like AWS Wavelength for gaming or IoT apps. This section builds 2025 skills for low-latency solutions—AR, autonomous vehicles—using edge tools like Cloudflare Workers to optimize performance and scalability.",
          children: [
            {
              name: "Cloudflare Workers",
              description:
                "Deploy serverless edge functions with Cloudflare Workers, taught with coding examples for caching. A 2025 skill for reducing latency.",
            },
            {
              name: "AWS Wavelength",
              description:
                "Run apps at 5G edges with AWS Wavelength, taught with setup examples for real-time apps. A 2025 skill for ultra-fast cloud solutions.",
            },
            {
              name: "Google Anthos for Edge",
              description:
                "Extend Kubernetes to edge with Google Anthos, taught with deployment examples. A 2025 skill for scalable edge management.",
            },
          ],
        },
      ],
      dividerText:
        "Edge mastered—embrace serverless and cloud-native tech next.",
    },
    {
      name: "Serverless and Cloud-Native Technologies",
      description:
        "Master event-driven, scalable architectures with serverless and cloud-native tools like AWS Lambda and Kubernetes, taught with examples deploying APIs and microservices using Docker and Truffle integrations. This step builds 2025 skills for efficient, modern cloud apps, optimizing agility and cost with tools like Istio, aligning with the shift to distributed cloud ecosystems.",
      children: [
        {
          name: "Serverless Computing",
          description:
            "Learn serverless computing with AWS Lambda and Azure Functions, taught with examples like API triggers and event-driven processing using Google Cloud Functions. A 2025 skill for scalable, low-overhead apps, this section simplifies deployment and management, ideal for microservices and responsive cloud solutions in dynamic environments.",
          children: [
            {
              name: "AWS Lambda",
              preferred: true,
              description:
                "Master AWS Lambda for event-driven serverless apps, taught with function creation examples in Python or Node.js. Preferred in 2025 for its AWS ecosystem and scalability.",
            },
            {
              name: "Azure Functions",
              description:
                "Use Azure Functions for serverless code, taught with trigger setup examples in C#. A 2025 skill for Microsoft-integrated solutions.",
            },
            {
              name: "Google Cloud Functions",
              description:
                "Deploy Google Cloud Functions for lightweight apps, taught with examples in Go or Python. A 2025 skill for GCP scalability.",
            },
          ],
        },
        {
          name: "Cloud-Native Development",
          description:
            "Build cloud-optimized apps with microservices and Kubernetes, taught with examples deploying Dockerized apps on AWS EKS and Azure AKS. A 2025 skill for scalable, resilient architectures, this section uses tools like Linkerd to enhance distributed systems, aligning with modern cloud-native practices.",
          children: [
            {
              name: "Microservices Architecture",
              description:
                "Design microservices with Docker, taught with examples breaking monoliths into services using Truffle for testing. A 2025 skill for flexible, scalable cloud apps.",
            },
            {
              name: "Service Mesh",
              description:
                "Manage microservices with Linkerd or Istio, taught with traffic control examples and monitoring setups. A 2025 skill for secure, observable architectures.",
            },
            {
              name: "Kubernetes Operators",
              description:
                "Automate with Kubernetes Operators, taught with CRD examples on GCP GKE. A 2025 skill for managing complex cloud-native workloads.",
            },
          ],
        },
      ],
      dividerText:
        "Serverless embraced—explore quantum computing in the cloud.",
    },
    {
      name: "Quantum Computing in the Cloud",
      description:
        "Dive into quantum computing services with AWS Braket and IBM Quantum, taught with examples running quantum algorithms like Shor’s or Grover’s using Qiskit and Cirq. This step builds 2025 skills for next-gen cloud innovation, exploring quantum hardware and frameworks in the cloud—a visionary competency for cutting-edge optimization and simulation applications.",
      children: [
        {
          name: "Quantum Computing Services",
          description:
            "Access quantum hardware via cloud services like AWS Braket and Google Quantum AI, taught with examples testing quantum circuits on simulators and real devices. A 2025 skill to leverage quantum potential—optimization, cryptography—this section positions you at the forefront of cloud-based quantum innovation.",
          children: [
            {
              name: "AWS Braket",
              preferred: true,
              description:
                "Use AWS Braket for managed quantum computing, taught with algorithm testing examples in Python. Preferred in 2025 for AWS integration and accessibility.",
            },
            {
              name: "IBM Quantum",
              description:
                "Master IBM Quantum for cloud quantum access, taught with Qiskit circuit examples. A 2025 skill for IBM’s quantum ecosystem.",
            },
            {
              name: "Google Quantum AI",
              description:
                "Explore Google Quantum AI with Cirq, taught with examples for quantum supremacy tasks. A 2025 skill for Google’s quantum advancements.",
            },
          ],
        },
        {
          name: "Quantum Programming Frameworks",
          description:
            "Develop quantum apps with Qiskit, Cirq, and PennyLane, taught with examples coding circuits and hybrid models in Jupyter notebooks. A 2025 skill for cloud-supported quantum platforms, this section equips you to build quantum-classical solutions, enhancing cloud capabilities for research and industry applications.",
          children: [
            {
              name: "Qiskit",
              description:
                "Code quantum circuits with Qiskit, taught with Python examples for IBM Quantum. A 2025 skill for quantum app development in the cloud.",
            },
            {
              name: "Cirq",
              description:
                "Design circuits with Cirq for Google Quantum, taught with Python examples and simulator runs. A 2025 skill for Google’s quantum tools.",
            },
            {
              name: "PennyLane",
              description:
                "Use PennyLane for hybrid quantum-ML, taught with examples blending AWS Braket and TensorFlow. A 2025 skill for advanced cloud apps.",
            },
          ],
        },
      ],
      dividerText: "Quantum explored—validate your skills with certifications.",
    },
    {
      name: "Certification",
      description:
        "Validate your cloud expertise with certifications from AWS, Azure, and Google, taught with prep strategies using tools like Whizlabs and A Cloud Guru. This step ensures 2025 proficiency in designing and managing cloud solutions, enhancing employability and credibility in a competitive market while keeping you aligned with industry standards and trends.",
      children: [
        {
          name: "Cloud Provider Certifications",
          description:
            "Earn certifications from top providers—AWS, Azure, Google—taught with exam prep via Whizlabs and practice labs on Qwiklabs. A 2025 skill to prove expertise in cloud solutions, this section prepares you for high-demand roles by mastering provider-specific tools and architectures.",
          children: [
            {
              name: "AWS Certified Solutions Architect",
              preferred: true,
              description:
                "Master AWS Certified Solutions Architect for scalable AWS design, taught with prep via A Cloud Guru and examples. Preferred in 2025 for AWS dominance and career impact.",
            },
            {
              name: "Azure Solutions Architect Expert",
              description:
                "Earn Azure Solutions Architect Expert for hybrid design, taught with Microsoft Learn prep and labs. A 2025 skill for Azure roles.",
            },
            {
              name: "Google Professional Cloud Architect",
              description:
                "Get Google Professional Cloud Architect for GCP systems, taught with Qwiklabs and examples. A 2025 skill for Google Cloud expertise.",
            },
          ],
        },
        {
          name: "Specialized Certifications",
          description:
            "Target niche areas with certifications like CKA and CCSP, taught with prep via Linux Academy and Pluralsight examples. A 2025 skill to stand out in cloud security and container management, this section enhances your profile with specialized credentials for competitive roles.",
          children: [
            {
              name: "Certified Kubernetes Administrator (CKA)",
              description:
                "Master CKA for Kubernetes management, taught with KodeKloud labs and cluster examples. A 2025 skill for cloud-native orchestration.",
            },
            {
              name: "Certified Cloud Security Professional (CCSP)",
              description:
                "Earn CCSP for cloud security, taught with Pluralsight prep and standards examples. A 2025 skill for secure cloud systems.",
            },
            {
              name: "AWS Certified Machine Learning – Specialty",
              description:
                "Get AWS ML Specialty for SageMaker expertise, taught with Whizlabs examples. A 2025 skill for AI-driven cloud solutions.",
            },
          ],
        },
      ],
      dividerText: "Certified skills in hand—map your cloud career path.",
    },
    {
      name: "Career Pathways in Cloud Computing",
      description:
        "Chart your cloud career with roles like engineer and architect, taught with examples from AWS, Azure, and Google projects, using LinkedIn for job insights. This step maps 2025 career progression—skills, responsibilities, growth—guiding you toward high-impact roles in the expanding cloud domain with a strategic, actionable roadmap for success.",
      children: [
        {
          name: "Cloud Engineer",
          description:
            "Learn the Cloud Engineer role—building and maintaining infrastructure—taught with AWS EC2 and Azure VM examples, using tools like Terraform. A 2025 skill for hands-on cloud management, this section offers a versatile entry into cloud careers with clear progression from junior to senior levels.",
          children: [
            {
              name: "Junior Cloud Engineer",
              description:
                "Start as a Junior Cloud Engineer, taught with basic AWS deployments and monitoring via CloudWatch. A 2025 entry skill for supporting cloud ops.",
            },
            {
              name: "Cloud Engineer",
              description:
                "Grow into a Cloud Engineer, taught with VM and serverless setups on Azure. A 2025 skill for mid-level cloud management.",
            },
            {
              name: "Senior Cloud Engineer",
              description:
                "Advance to Senior Cloud Engineer, taught with scaling and mentoring examples on GCP. A 2025 skill for leading cloud projects.",
            },
          ],
        },
        {
          name: "Cloud Architect",
          description:
            "Master the Cloud Architect role—designing cloud strategies—taught with AWS Well-Architected and Azure examples, using Visio for designs. A 2025 skill for strategic planning, this section guides you from solutions architect to chief officer with a big-picture approach to cloud innovation.",
          children: [
            {
              name: "Cloud Solutions Architect",
              description:
                "Become a Cloud Solutions Architect, taught with AWS design examples and tools like Lucidchart. A 2025 skill for scalable systems.",
            },
            {
              name: "Lead Cloud Architect",
              description:
                "Advance to Lead Cloud Architect, taught with Azure strategy examples and leadership focus. A 2025 skill for team guidance.",
            },
            {
              name: "Chief Cloud Officer",
              description:
                "Reach Chief Cloud Officer, taught with GCP oversight examples and strategic tools. A 2025 skill for executive cloud leadership.",
            },
          ],
        },
        {
          name: "Cloud Security Specialist",
          description:
            "Specialize as a Cloud Security Specialist, securing infrastructure with AWS IAM and Azure AD, taught with encryption examples and Splunk for monitoring. A 2025 skill to address cybersecurity, this section progresses from analyst to architect, meeting rising threats and regulations.",
          children: [
            {
              name: "Cloud Security Analyst",
              description:
                "Start as a Cloud Security Analyst, taught with AWS GuardDuty monitoring examples. A 2025 entry skill for threat detection.",
            },
            {
              name: "Cloud Security Engineer",
              description:
                "Grow into a Cloud Security Engineer, taught with Azure encryption setups and examples. A 2025 skill for secure systems.",
            },
            {
              name: "Cloud Security Architect",
              description:
                "Advance to Cloud Security Architect, taught with GCP security framework examples. A 2025 skill for strategic protection.",
            },
          ],
        },
      ],
      dividerText: "Career path set—commit to continuous learning.",
    },
    {
      name: "Continuous Learning",
      description:
        "Stay ahead in cloud computing by committing to continuous learning, taught with resources like AWS Whitepapers, Azure Blogs, and communities like Reddit’s r/cloudcomputing. This step ensures 2025 relevance by keeping you updated on trends—5G, quantum, AI—equipping you with the adaptability and knowledge to thrive in the fast-evolving cloud industry through lifelong skill enhancement.",
    },
  ],
};

export default CloudComputingRoadmap;
