const devOpsRoadmap = {
  name: "DevOps Engineer Roadmap 2025",
  description:
    "A structured guide to acquiring essential skills and knowledge for aspiring DevOps Engineers, from beginner to advanced levels, aligned with 2025 industry trends.",
  children: [
    {
      name: "Foundational Knowledge",
      description:
        "Establish a strong base in programming, system administration, and networking.",
      children: [
        {
          name: "Programming and Scripting",
          description:
            "Develop proficiency in essential programming languages.",
          children: [
            {
              name: "Python",
              description: "Widely used for automation and scripting.",
            },
            {
              name: "Bash/Shell Scripting",
              description: "Essential for Unix/Linux system tasks.",
            },
            {
              name: "Go",
              description: "Increasingly popular in cloud-native environments.",
            },
          ],
        },
        {
          name: "Operating Systems",
          description: "Gain expertise in system administration.",
          children: [
            {
              name: "Linux Fundamentals",
              description: "Command-line proficiency and system management.",
            },
            {
              name: "Windows Server",
              description: "Understanding of Windows-based infrastructures.",
            },
          ],
        },
        {
          name: "Networking and Security",
          description: "Understand network protocols and security principles.",
          children: [
            {
              name: "TCP/IP, DNS, HTTP/HTTPS",
              description: "Core networking protocols.",
            },
            {
              name: "Firewalls and VPNs",
              description: "Network security mechanisms.",
            },
            {
              name: "SSL/TLS",
              description: "Encryption protocols for secure communication.",
            },
          ],
        },
      ],
      dividerText: "Version Control and Collaboration Tools",
    },
    {
      name: "Version Control and Collaboration",
      description: "Learn to manage code and collaborate effectively.",
      children: [
        {
          name: "Version Control Systems",
          description: "Track and manage code changes.",
          children: [
            { name: "Git", description: "Distributed version control system." },
            {
              name: "GitHub/GitLab/Bitbucket",
              description: "Platforms for code hosting and collaboration.",
            },
          ],
        },
        {
          name: " Collaboration Tools",
          description: "Facilitate team collaboration and project tracking.",
          children: [
            {
              name: "Jira",
              description: "Project management and issue tracking.",
            },
            {
              name: "Confluence",
              description: "Team collaboration and documentation.",
            },
            {
              name: "Slack/Microsoft Teams",
              description: "Communication platforms.",
            },
          ],
        },
      ],
      dividerText: "understanding of DevOps Principles",
    },
    {
      name: "Continuous Integration and Continuous Deployment (CI/CD)",
      description: "Automate code integration and deployment processes.",
      children: [
        {
          name: "CI/CD Concepts",
          description:
            "Understand the principles of continuous integration and deployment.",
          children: [
            {
              name: "Automated Testing",
              description: "Ensuring code quality through tests.",
            },
            {
              name: "Build Automation",
              description: "Streamlining the build process.",
            },
            {
              name: "Deployment Pipelines",
              description:
                "Automating code deployment to various environments.",
            },
          ],
        },
        {
          name: "CI/CD Tools",
          description: "Utilize tools to implement CI/CD pipelines.",
          children: [
            {
              name: "GitHub Actions",
              description: "Integrated CI/CD workflows within GitHub.",
            },
            { name: "GitLab CI/CD", description: "Built-in CI/CD in GitLab." },
            { name: "Jenkins", description: "Open-source automation server." },
          ],
        },
      ],
      dividerText: "Learning IaC integration with CI/CD",
    },
    {
      name: "Infrastructure as Code (IaC)",
      description: "Manage infrastructure using code-based tools.",
      children: [
        {
          name: "IaC Concepts",
          description:
            "Understand the principles of defining infrastructure through code.",
          children: [
            {
              name: "Declarative vs. Imperative",
              description: "Approaches to infrastructure definition.",
            },
            {
              name: "Idempotency",
              description: "Ensuring consistent infrastructure state.",
            },
          ],
        },
        {
          name: "IaC Tools",
          description: "Implement infrastructure as code using various tools.",
          children: [
            {
              name: "Terraform",
              description:
                "Tool for building, changing, and versioning infrastructure.",
            },
            {
              name: "Ansible",
              description: "Automation tool for configuration management.",
            },
            {
              name: "Pulumi",
              description:
                "Infrastructure as code in familiar programming languages.",
            },
          ],
        },
      ],
      dividerText: "understanding of creating Containers and Orchestration",
    },
    {
      name: "Containerization and Orchestration",
      description:
        "Deploy and manage applications in containerized environments.",
      children: [
        {
          name: "Containerization",
          description: "Package applications into portable containers.",
          children: [
            {
              name: "Docker",
              description:
                "Platform for developing, shipping, and running applications in containers.",
            },
            {
              name: "Podman",
              description:
                "Daemonless container engine for developing, managing, and running OCI containers.",
            },
          ],
        },
        {
          name: "Container Orchestration",
          description: "Manage and scale containerized applications.",
          children: [
            {
              name: "Kubernetes",
              description:
                "Orchestration system for automating application deployment.",
            },
            {
              name: "OpenShift",
              description: "Enterprise Kubernetes platform.",
            },
            {
              name: "Helm",
              description: "Package manager for Kubernetes applications.",
            },
          ],
        },
      ],
      dividerText: "Cloud Computing Services and Tools",
    },
    {
      name: "Cloud Computing",
      description: "Leverage cloud platforms for scalable infrastructure.",
      children: [
        {
          name: "Cloud Service Providers",
          description: "Familiarize with major cloud platforms.",
          children: [
            {
              name: "Amazon Web Services (AWS)",
              description: "Comprehensive cloud computing platform.",
            },
            {
              name: "Microsoft Azure",
              description:
                "Cloud services for building, testing, and managing applications.",
            },
            {
              name: "Google Cloud Platform (GCP)",
              description: "Suite of cloud computing services.",
            },
          ],
        },
        {
          name: "Cloud Services and Tools",
          description: "Utilize cloud-based tools and services.",
          children: [
            {
              name: "Compute Services",
              description: "EC2, Azure VMs, Google Compute Engine.",
            },
            {
              name: "Storage Solutions",
              description: "S3, Azure Blob Storage, Google Cloud Storage.",
            },
            {
              name: "Database Services",
              description: "RDS, Azure SQL Database, Cloud SQL.",
            },
          ],
        },
      ],
      dividerText: "Monitoring and Observability",
    },

    {
      name: "Monitoring",
      description: "Track system health, performance, and availability.",
      children: [
        {
          name: "Infrastructure Monitoring",
          description: "Monitor servers, networks, and cloud resources.",
          children: [
            {
              name: "Prometheus",
              description: "Time-series database for monitoring and alerting.",
            },
            {
              name: "Nagios",
              description: "Infrastructure monitoring and alerting tool.",
            },
            {
              name: "Zabbix",
              description:
                "Enterprise-class monitoring solution for networks and servers.",
            },
          ],
        },
        {
          name: "Aplication Monitoring",
          description: "Monitor application behavior and performance.",
          children: [
            {
              name: "New Relic",
              description: "End-to-end observability and APM solution.",
            },
            {
              name: "AppDynamics",
              description: "AI-powered application performance monitoring.",
            },
            {
              name: "Dynatrace",
              description: "Full-stack monitoring with AI-powered insights.",
            },
          ],
        },
        {
          name: "Log Monitoring",
          description: "Collect and analyze system and application logs.",
          children: [
            {
              name: "ELK Stack (Elasticsearch, Logstash, Kibana)",
              description: "Powerful logging and visualization stack.",
            },
            {
              name: "Splunk",
              description: "Machine data analytics and monitoring platform.",
            },
            {
              name: "Graylog",
              description: "Open-source log management system.",
            },
          ],
        },
      ],
    },
    {
      name: "Observability",
      description:
        "Gain deeper insights into system performance and reliability.",
      children: [
        {
          name: "Distributed Tracing",
          description:
            "Track requests across microservices and distributed systems.",
          children: [
            { name: "Jaeger", description: "End-to-end distributed tracing." },
            {
              name: "Zipkin",
              description: "Tracing system for monitoring microservices.",
            },
          ],
        },
        {
          name: "Visualization and Dashboards",
          description: "Create real-time dashboards for system insights.",
          children: [
            {
              name: "Grafana",
              description: "Visualization tool for metrics and logs.",
            },
            {
              name: "Datadog",
              description: "Cloud monitoring with customizable dashboards.",
            },
            {
              name: "Kibana",
              description: "Visualization tool for Elasticsearch data.",
            },
          ],
        },
        {
          name: "Alerting Management",
          description: "Proactive monitoring and automated alerts.",
          children: [
            { name: "PagerDuty", description: "Incident response automation." },
            {
              name: "Opsgenie",
              description: "Alerting and on-call management solution.",
            },
            {
              name: "VictorOps",
              description: "Real-time incident collaboration and alerting.",
            },
          ],
        },
      ],
      dividerText: "Stay Connected with the Trending Technologies",
    },
    {
      name: "Emerging Trends and Technologies",
      description: "Explore emerging trends and technologies.",
      children: [
        {
          name: "Serverless Computing",
          description: "Serverless computing with serverless frameworks.",
          children: [
            {
              name: "AWS Lambda",
              description: "Serverless computing platform.",
            },
            {
              name: "Azure Functions",
              description: "Serverless computing platform for Azure.",
            },
            {
              name: "Google Cloud Functions",
              description: "Serverless computing platform for GCP.",
            },
          ],
        },
      ],
      dividerText: "Projects",
    },
    {
      name: "Projects",
      description: "Apply knowledge and skills to real-world scenarios.",
      children: [
        {
          name: "Project 1: CI/CD Pipeline",
          description:
            "Build a CI/CD pipeline for a sample application with automated testing and deployment.",
        },
        {
          name: "Project 2: Infrastructure as Code",
          description:
            "Implement infrastructure as code using Terraform or Ansible for a cloud environment.",
        },
        {
          name: "Project 3: Kubernetes Deployment",
          description:
            "Deploy and manage a sample application on a Kubernetes cluster.",
        },
        {
          name: "Project 4: Monitoring and Observability",
          description:
            "Set up monitoring and observability tools for a distributed system.",
        },
      ],
    },
    {
      name: "Contionous Learning",
      description:
        "Stay updated with the latest tools and technologies in the DevOps ecosystem.",
    },
  ],
};
export default devOpsRoadmap;
