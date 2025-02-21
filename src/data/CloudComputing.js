const cloudComputingRoadmap = {
  name: "Cloud Computing Roadmap 2025",
  description:
    "A comprehensive guide to essential cloud computing skills and technologies for 2025.",
  children: [
    {
      name: "Foundations of Cloud Computing",
      description:
        "Understanding the basics of cloud computing, including service and deployment models.",
      children: [
        {
          name: "Introduction to Cloud Computing",
          description:
            "Learn the history, evolution, and key characteristics of cloud computing.",
        },
        {
          name: "Cloud Service Models",
          description:
            "Study different service models: Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS).",
        },
        {
          name: "Cloud Deployment Models",
          description:
            "Explore various deployment models: Public, Private, Hybrid, and Community Clouds.",
        },
        {
          name: "Linux Basics",
          description:
            "Gain foundational knowledge of Linux, a key OS for cloud environments, including command-line navigation and scripting.",
        },
        {
          name: "Networking Fundamentals",
          description:
            "Understand basic networking concepts like IP addressing and subnets, critical for cloud infrastructure.",
        },
      ],
      dividerText:
        "Essential technical skills before working with cloud platforms.",
    },
    {
      name: "Core Cloud Skills",
      description:
        "Developing fundamental skills necessary for cloud computing professionals.",
      children: [
        {
          name: "Python",
          description:
            "Master Python for scripting, automation, and interacting with cloud APIs, a versatile language for cloud tasks.",
        },
        {
          name: "Java",
          description:
            "Learn Java for building scalable cloud applications and integrating with enterprise cloud systems.",
        },
        {
          name: "Networking",
          description:
            "Deepen knowledge of TCP/IP, DNS, VPNs, and load balancing for cloud network management.",
        },
        {
          name: "Operating Systems",
          description:
            "Gain expertise in Linux and Windows Server, essential for managing cloud instances and VMs.",
        },
        {
          name: "SQL",
          description:
            "Understand SQL for managing relational databases hosted in the cloud, such as MySQL or PostgreSQL.",
        },
        {
          name: "Git",
          description:
            "Use Git for version control to manage cloud configuration files and collaborative projects.",
        },
      ],
      dividerText: "Choosing a cloud provider and learning their key services.",
    },
    {
      name: "Cloud Platforms",
      description:
        "Gaining expertise in leading cloud service providers and their offerings.",
      children: [
        {
          name: "Amazon Web Services (AWS)",
          description:
            "Master AWS services like EC2, S3, and Lambda, with focus on architecture and best practices.",
        },
        {
          name: "Microsoft Azure",
          description:
            "Learn Azure’s compute, storage, and AI services, understanding hybrid cloud solutions.",
        },
        {
          name: "Google Cloud Platform (GCP)",
          description:
            "Explore GCP’s BigQuery, Compute Engine, and Kubernetes Engine for cloud infrastructure.",
        },
        {
          name: "AWS CLI",
          description:
            "Use the AWS Command Line Interface to automate and manage AWS resources efficiently.",
        },
        {
          name: "Azure PowerShell",
          description:
            "Leverage Azure PowerShell to script and manage Azure services and deployments.",
        },
      ],
      dividerText:
        "Ensuring security before deploying applications to the cloud.",
    },
    {
      name: "Cloud Security",
      description:
        "Implementing security measures to protect cloud infrastructure and data.",
      children: [
        {
          name: "Identity and Access Management (IAM)",
          description:
            "Configure IAM to manage user roles, permissions, and secure access in cloud platforms.",
        },
        {
          name: "Data Encryption",
          description:
            "Implement encryption techniques using tools like AWS KMS for data at rest and in transit.",
        },
        {
          name: "Compliance and Governance",
          description:
            "Learn frameworks like GDPR and HIPAA to ensure cloud deployments meet regulatory standards.",
        },
        {
          name: "Linux Security",
          description:
            "Secure Linux instances with firewalls, user management, and hardening techniques in the cloud.",
        },
        {
          name: "Penetration Testing",
          description:
            "Use tools like Selenium to simulate attacks and identify vulnerabilities in cloud setups.",
        },
      ],
      dividerText: "Automating and optimizing cloud workflows for efficiency.",
    },
    {
      name: "DevOps and Automation",
      description:
        "Integrating development and operations to streamline workflows and enhance productivity.",
      children: [
        {
          name: "Continuous Integration/Continuous Deployment (CI/CD)",
          description:
            "Set up CI/CD pipelines using Jenkins or GitHub Actions for automated cloud deployments.",
        },
        {
          name: "Infrastructure as Code (IaC)",
          description:
            "Master Terraform and AWS CloudFormation to provision and manage cloud resources programmatically.",
        },
        {
          name: "Docker",
          description:
            "Use Docker to create, deploy, and run containerized applications in cloud environments.",
        },
        {
          name: "Kubernetes",
          description:
            "Learn Kubernetes to orchestrate Docker containers for scalable, resilient cloud applications.",
        },
        {
          name: "Ansible",
          description:
            "Automate configuration management and deployment across cloud instances with Ansible.",
        },
        {
          name: "Monitoring with Prometheus",
          description:
            "Implement Prometheus to monitor cloud application performance and resource usage.",
        },
      ],
      dividerText: "Staying ahead with advanced cloud innovations.",
    },
    {
      name: "Advanced Cloud Concepts",
      description:
        "Exploring cutting-edge technologies and methodologies in cloud computing.",
      children: [
        {
          name: "Serverless Computing",
          description:
            "Build applications with AWS Lambda and Azure Functions, focusing on event-driven architectures.",
        },
        {
          name: "Edge Computing",
          description:
            "Use Cloudflare Workers or AWS IoT Greengrass for low-latency processing at the edge.",
        },
        {
          name: "TensorFlow",
          description:
            "Integrate TensorFlow with cloud platforms for scalable machine learning model deployment.",
        },
        {
          name: "GraphQL",
          description:
            "Implement GraphQL APIs in the cloud for efficient, flexible data querying.",
        },
        {
          name: "Multi-Cloud Strategies",
          description:
            "Learn to leverage AWS, Azure, and GCP together for redundancy and optimization.",
        },
      ],
      dividerText: "Building a long-term career in cloud computing.",
    },
    {
      name: "Soft Skills and Career Development",
      description:
        "Developing non-technical skills essential for career advancement in cloud computing.",
      children: [
        {
          name: "Communication",
          description:
            "Develop skills to articulate cloud strategies and solutions to diverse teams and clients.",
        },
        {
          name: "Problem-Solving",
          description:
            "Enhance analytical abilities to troubleshoot cloud outages and optimize performance.",
        },
        {
          name: "Continuous Learning",
          description:
            "Stay updated with certifications like AWS Solutions Architect and emerging cloud trends.",
        },
        {
          name: "Team Collaboration",
          description:
            "Use tools like Git and Slack to work effectively in cloud-focused DevOps teams.",
        },
        {
          name: "Project Management",
          description:
            "Apply Agile or Scrum methodologies to lead cloud migration and deployment projects.",
        },
      ],
    },
  ],
};

export default cloudComputingRoadmap;
