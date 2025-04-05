const devOpsRoadmap = {
  name: "DevOps Engineer Roadmap 2025",
  description:
    "This structured guide equips aspiring DevOps engineers with essential skills and knowledge for 2025, progressing from foundational concepts to advanced practices. It covers programming, CI/CD, infrastructure automation, containerization, cloud platforms, observability, and emerging trends. Designed for practical learning, it ensures readiness to streamline development and operations in fast-paced tech environments with modern tools and workflows.",
  children: [
    {
      name: "Foundational Knowledge",
      description:
        "Establish a robust base in programming, system administration, and networking, taught with examples like Python scripts, Linux configs, or AWS VPC setups. This section builds the technical skills critical for 2025 DevOps success, enabling you to automate systems, manage infrastructure, and support collaborative workflows effectively from the ground up.",
      children: [
        {
          name: "Programming Language",
          description:
            "Master languages for DevOps automation, taught with examples like Python for AWS SDK or Bash for cron jobs. This section focuses on coding for system tasks and pipeline scripts—key in 2025 for automating processes, enhancing efficiency, and integrating tools across the DevOps lifecycle seamlessly.",
          children: [
            {
              name: "Python",
              preferred: true,
              description:
                "Use Python with libraries like Boto3 for automation, taught with AWS scripting examples. Preferred in 2025 for its versatility and DevOps tool support (Stack Overflow, 2023).",
            },
            {
              name: "Go",
              description:
                "Build tools with Go, taught with concurrency examples like goroutines. Key in 2025 for cloud-native performance.",
            },
          ],
        },
        {
          name: "Scripting Languages",
          description:
            "Script with Python, Bash, or PowerShell, taught with examples like Python for system tasks or Bash for cron jobs. A 2025 skill for automating processes and workflows.",
          children: [
            {
              name: "Bash/Shell Scripting",
              description:
                "Automate with Bash using loops and `sed`, taught with system task examples. A 2025 skill for Linux-based DevOps workflows.",
            },

            {
              name: "PowerShell",
              description:
                "Script with PowerShell for Windows, taught with examples like service restarts. A 2025 skill for hybrid environments.",
            },
          ],
        },
        {
          name: "Operating Systems",
          description:
            "Learn OS administration for Linux and Windows, taught with examples like `systemctl` for services or PowerShell for AD. A 2025 skill for managing DevOps infrastructure, this section ensures you can configure, secure, and troubleshoot servers across diverse environments effectively.",
          children: [
            {
              name: "Linux Fundamentals",
              preferred: true,
              description:
                "Master Linux with `ls`, `chmod`, and `systemd`, taught with Ubuntu examples. Preferred in 2025 for its dominance in DevOps servers.",
            },
            {
              name: "Windows Server",
              description:
                "Administer Windows Server with PowerShell and AD, taught with examples. A 2025 skill for enterprise hybrid setups.",
            },
            {
              name: "macOS Basics",
              description:
                "Learn macOS with `launchctl`, taught with examples for local dev. A 2025 skill for mixed environments.",
            },
          ],
        },
        {
          name: "Networking and Security",
          description:
            "Understand networking and security with tools like Wireshark or OpenSSL, taught with examples configuring DNS or SSL. A 2025 skill for DevOps connectivity and protection, this section ensures secure, reliable communication across distributed systems and cloud infrastructure.",
          children: [
            {
              name: "TCP/IP, DNS, HTTP/HTTPS",
              description:
                "Configure TCP/IP and DNS with `dig`, taught with HTTP examples. A 2025 skill for network troubleshooting.",
            },
            {
              name: "Firewalls and VPNs",
              description:
                "Secure with `iptables` and OpenVPN, taught with rule examples. Key in 2025 for network defense.",
            },
            {
              name: "SSL/TLS",
              description:
                "Implement SSL/TLS with OpenSSL, taught with cert examples. A 2025 skill for secure comms.",
            },
            {
              name: "Network Troubleshooting",
              description:
                "Troubleshoot with Wireshark, taught with packet analysis examples. A 2025 skill for connectivity.",
            },
          ],
        },
      ],
      dividerText: "Foundations set—master version control and collaboration.",
    },
    {
      name: "Version Control and Collaboration",
      description:
        "Manage code and collaborate with tools like Git and Jira, taught with examples like branching in GitHub or tracking sprints. A 2025 skill for teamwork and code integrity, this section ensures efficient, reliable software delivery in DevOps across distributed teams and projects.",
      children: [
        {
          name: "Version Control Systems",
          description:
            "Track code changes with Git and platforms like GitLab, taught with examples like `merge` or PR workflows. A 2025 skill for maintaining consistency, this section supports collaborative DevOps pipelines and integrates with CI/CD for seamless development cycles.",
          children: [
            {
              name: "Git",
              preferred: true,
              description:
                "Use Git for branching and commits, taught with examples like `rebase`. Preferred in 2025 for universal adoption.",
            },
            {
              name: "GitHub",
              description:
                "Host with GitHub, taught with PR examples. A 2025 skill for collaboration and CI/CD.",
            },
            {
              name: "GitLab",
              description:
                "Use GitLab for all-in-one VCS, taught with pipeline examples. Key in 2025 for integrated DevOps.",
            },
            {
              name: "Bitbucket",
              description:
                "Collaborate with Bitbucket, taught with branch examples. A 2025 skill for team workflows.",
            },
          ],
        },
        {
          name: "Collaboration Tools",
          description:
            "Enhance team coordination with Jira and Slack, taught with examples like ticket workflows or alert integrations. A 2025 skill for DevOps communication, this section ensures smooth interaction and documentation across development and operations teams in agile settings.",
          children: [
            {
              name: "Jira",
              preferred: true,
              description:
                "Track with Jira, taught with sprint examples. Preferred in 2025 for agile project management.",
            },
            {
              name: "Confluence",
              description:
                "Document with Confluence, taught with runbook examples. A 2025 skill for team knowledge.",
            },
            {
              name: "Slack",
              description:
                "Communicate with Slack, taught with channel examples. Key in 2025 for real-time alerts.",
            },
            {
              name: "Microsoft Teams",
              description:
                "Collaborate with Teams, taught with integration examples. A 2025 skill for enterprise comms.",
            },
          ],
        },
      ],
      dividerText: "Collaboration in place—automate with CI/CD.",
    },
    {
      name: "Continuous Integration and Continuous Deployment (CI/CD)",
      description:
        "Automate integration and deployment with CI/CD tools like Jenkins, taught with examples building pipelines for web apps. A 2025 skill for rapid, reliable releases, this section reduces errors and aligns DevOps teams for faster software delivery in agile environments.",
      children: [
        {
          name: "CI/CD Tools",
          description:
            "Implement CI/CD with GitHub Actions and CircleCI, taught with pipeline examples for testing and deploying. A 2025 skill for automation, this section streamlines DevOps workflows with industry-standard tools for scalable, efficient software releases.",
          children: [
            {
              name: "GitHub Actions",
              preferred: true,
              description:
                "Automate with GitHub Actions, taught with YAML examples. Preferred in 2025 for integration (GitHub, 2023).",
            },
            {
              name: "GitLab CI/CD",
              description:
                "Use GitLab CI/CD with `.gitlab-ci.yml`, taught with examples. A 2025 skill for all-in-one automation.",
            },
            {
              name: "Jenkins",
              description:
                "Set up Jenkins pipelines, taught with job examples. Key in 2025 for flexibility.",
            },
            {
              name: "CircleCI",
              description:
                "Deploy with CircleCI, taught with config examples. A 2025 skill for fast pipelines.",
            },
          ],
        },
        {
          name: "CI/CD Concepts",
          description:
            "Understand CI/CD principles with examples like automated builds, taught with pytest or Maven. A 2025 skill for streamlined delivery, this section ensures code quality and deployment efficiency in DevOps, supporting iterative development cycles effectively.",
          children: [
            {
              name: "Automated Testing",
              description:
                "Run tests with pytest, taught with unit test examples. A 2025 skill for quality assurance.",
            },
            {
              name: "Build Automation",
              description:
                "Automate builds with Maven, taught with examples. Key in 2025 for consistency.",
            },
            {
              name: "Deployment Pipelines",
              description:
                "Design pipelines with staging, taught with examples. A 2025 skill for seamless rollouts.",
            },
            {
              name: "Code Review",
              description:
                "Review with PRs, taught with GitHub examples. A 2025 skill for collaboration.",
            },
          ],
        },
      ],
      dividerText: "CI/CD streamlined—manage infrastructure as code.",
    },
    {
      name: "Infrastructure as Code (IaC)",
      description:
        "Manage infrastructure with code using Terraform and Ansible, taught with examples provisioning AWS EC2 or configuring servers. A 2025 skill for consistency and scalability, this section automates DevOps infrastructure, integrating with CI/CD for efficient, reproducible system deployments.",
      children: [
        {
          name: "IaC Tools",
          description:
            "Automate with Terraform, Ansible, and Pulumi, taught with examples like AWS VPCs or server configs. A 2025 skill for provisioning, this section equips you to deploy and scale infrastructure programmatically in DevOps workflows efficiently.",
          children: [
            {
              name: "Terraform",
              preferred: true,
              description:
                "Use Terraform with HCL for AWS, taught with examples. Preferred in 2025 for multi-cloud (HashiCorp, 2023).",
            },
            {
              name: "Ansible",
              description:
                "Configure with Ansible playbooks, taught with examples. A 2025 skill for agentless IaC.",
            },
            {
              name: "Pulumi",
              description:
                "Code IaC with Pulumi in Python, taught with examples. Key in 2025 for flexibility.",
            },
            {
              name: "CloudFormation",
              description:
                "Deploy with CloudFormation on AWS, taught with YAML examples. A 2025 skill for AWS-specific IaC.",
            },
          ],
        },
        {
          name: "IaC Concepts",
          description:
            "Learn IaC principles with examples like declarative Terraform configs, taught with versioning benefits. A 2025 skill for automation, this section ensures infrastructure reliability and repeatability in DevOps across cloud and on-premises environments.",
          children: [
            {
              name: "Declarative vs. Imperative",
              description:
                "Compare Terraform vs. Ansible, taught with examples. A 2025 skill for tool choice.",
            },
            {
              name: "Idempotency",
              description:
                "Ensure idempotency with Ansible, taught with examples. Key in 2025 for reliability.",
            },
            {
              name: "State Management",
              description:
                "Manage state with Terraform, taught with examples. A 2025 skill for consistency.",
            },
          ],
        },
      ],
      dividerText: "IaC mastered—orchestrate with containers.",
    },
    {
      name: "Containerization and Orchestration",
      description:
        "Deploy and manage apps with Docker and Kubernetes, taught with examples like containerizing a web app or scaling with K8s. A 2025 skill for cloud-native DevOps, this section ensures consistency and resilience in application delivery across distributed systems.",
      children: [
        {
          name: "Containerization",
          description:
            "Package apps with Docker and Podman, taught with examples like building images for Python apps. A 2025 skill for portability, this section standardizes DevOps deployments, streamlining development-to-production workflows effectively.",
          children: [
            {
              name: "Docker",
              preferred: true,
              description:
                "Build with Docker, taught with Dockerfile examples. Preferred in 2025 for dominance (Docker, 2023).",
            },
            {
              name: "Podman",
              description:
                "Run with Podman, taught with rootless examples. A 2025 skill for lightweight containers.",
            },
            {
              name: "Containerd",
              description:
                "Use Containerd for runtime, taught with examples. A 2025 skill for advanced containerization.",
            },
          ],
        },
        {
          name: "Container Orchestration",
          description:
            "Scale containers with Kubernetes and OpenShift, taught with examples like deploying microservices or autoscaling pods. A 2025 skill for resilience, this section automates DevOps workloads for high availability in production environments.",
          children: [
            {
              name: "Kubernetes",
              preferred: true,
              description:
                "Orchestrate with Kubernetes, taught with kubectl examples. Preferred in 2025 for scalability (CNCF, 2023).",
            },
            {
              name: "OpenShift",
              description:
                "Deploy with OpenShift, taught with enterprise examples. A 2025 skill for robust K8s.",
            },
            {
              name: "Helm",
              description:
                "Manage with Helm charts, taught with examples. A 2025 skill for K8s packaging.",
            },
            {
              name: "Docker Swarm",
              description:
                "Orchestrate with Docker Swarm, taught with examples. A 2025 skill for simpler setups.",
            },
          ],
        },
      ],
      dividerText: "Containers orchestrated—leverage cloud computing.",
    },
    {
      name: "Cloud Computing",
      description:
        "Utilize cloud platforms like AWS and GCP, taught with examples deploying EC2 or BigQuery for DevOps tasks. A 2025 skill for scalable infrastructure, this section optimizes resources and integrates with DevOps workflows for rapid, efficient application deployment in the cloud.",
      children: [
        {
          name: "Cloud Service Providers",
          description:
            "Leverage AWS, Azure, and GCP, taught with examples like S3 storage or Azure VMs. A 2025 skill for cloud-native DevOps, this section ensures you can manage scalable infrastructure across leading providers effectively for modern application needs.",
          children: [
            {
              name: "Amazon Web Services (AWS)",
              preferred: true,
              description:
                "Use AWS EC2 and S3, taught with examples. Preferred in 2025 for market dominance (Synergy, 2023).",
            },
            {
              name: "Microsoft Azure",
              description:
                "Deploy with Azure VMs, taught with examples. A 2025 skill for enterprise integration.",
            },
            {
              name: "Google Cloud Platform (GCP)",
              description:
                "Leverage GCP Compute Engine, taught with examples. A 2025 skill for AI and data.",
            },
            {
              name: "DigitalOcean",
              description:
                "Use DigitalOcean droplets, taught with examples. A 2025 skill for simpler cloud setups.",
            },
          ],
        },
        {
          name: "Cloud Services and Tools",
          description:
            "Manage compute, storage, and databases with AWS Lambda and RDS, taught with examples like serverless apps or SQL queries. A 2025 skill for cloud efficiency, this section enhances DevOps with scalable, managed services across platforms.",
          children: [
            {
              name: "Compute Services",
              description:
                "Scale with EC2 and Lambda, taught with examples. A 2025 skill for flexible compute.",
            },
            {
              name: "Storage Solutions",
              description:
                "Store with S3 and Blob, taught with examples. A 2025 skill for durable data.",
            },
            {
              name: "Database Services",
              description:
                "Manage with RDS and DynamoDB, taught with examples. A 2025 skill for persistence.",
            },
            {
              name: "Serverless Tools",
              description:
                "Deploy with Azure Functions, taught with examples. A 2025 skill for event-driven apps.",
            },
          ],
        },
      ],
      dividerText: "Cloud utilized—monitor and observe systems.",
    },
    {
      name: "Monitoring",
      description:
        "Track system health with Prometheus and New Relic, taught with examples like metric dashboards or app traces. A 2025 skill for availability, this section ensures DevOps reliability by providing visibility into infrastructure and application performance in production environments.",
      children: [
        {
          name: "Infrastructure Monitoring",
          description:
            "Monitor servers and networks with Nagios and Prometheus, taught with examples like CPU alerts or network checks. A 2025 skill for proactive management, this section ensures uptime and resource optimization in DevOps across cloud and on-premises setups.",
          children: [
            {
              name: "Prometheus",
              preferred: true,
              description:
                "Monitor with Prometheus, taught with scraping examples. Preferred in 2025 for real-time metrics.",
            },
            {
              name: "Nagios",
              description:
                "Use Nagios for alerts, taught with plugin examples. A 2025 skill for traditional monitoring.",
            },
            {
              name: "Zabbix",
              description:
                "Monitor with Zabbix, taught with agent examples. A 2025 skill for enterprise visibility.",
            },
            {
              name: "Checkmk",
              description:
                "Use Checkmk for broad monitoring, taught with examples. A 2025 skill for simplicity.",
            },
          ],
        },
        {
          name: "Application Monitoring",
          description:
            "Track app performance with Dynatrace and AppDynamics, taught with examples like latency traces or error rates. A 2025 skill for optimization, this section ensures DevOps apps meet user expectations with detailed performance insights.",
          children: [
            {
              name: "New Relic",
              description:
                "Monitor with New Relic APM, taught with examples. A 2025 skill for end-to-end insights.",
            },
            {
              name: "AppDynamics",
              description:
                "Use AppDynamics with AI, taught with examples. A 2025 skill for predictive analysis.",
            },
            {
              name: "Dynatrace",
              preferred: true,
              description:
                "Track with Dynatrace, taught with full-stack examples. Preferred in 2025 for automation (Gartner, 2023).",
            },
          ],
        },
        {
          name: "Log Monitoring",
          description:
            "Analyze logs with ELK and Splunk, taught with examples like error searches or log dashboards. A 2025 skill for troubleshooting, this section ensures DevOps system integrity through detailed log data analysis and auditing.",
          children: [
            {
              name: "ELK Stack (Elasticsearch, Logstash, Kibana)",
              preferred: true,
              description:
                "Use ELK for logs, taught with aggregation examples. Preferred in 2025 for scalability.",
            },
            {
              name: "Splunk",
              description:
                "Analyze with Splunk, taught with search examples. A 2025 skill for enterprise analytics.",
            },
            {
              name: "Graylog",
              description:
                "Monitor with Graylog, taught with query examples. A 2025 skill for open-source logging.",
            },
          ],
        },
      ],
      dividerText: "Monitoring in place—enhance with observability.",
    },
    {
      name: "Observability",
      description:
        "Gain deep system insights with Jaeger and Grafana, taught with examples like tracing requests or visualizing metrics. A 2025 skill for proactive optimization, this section goes beyond monitoring to understand distributed DevOps systems, ensuring performance and reliability effectively.",
      children: [
        {
          name: "Distributed Tracing",
          description:
            "Track requests with Jaeger and Zipkin, taught with examples tracing microservices. A 2025 skill for latency analysis, this section provides visibility into distributed app performance for efficient DevOps troubleshooting and optimization.",
          children: [
            {
              name: "Jaeger",
              preferred: true,
              description:
                "Trace with Jaeger, taught with UI examples. Preferred in 2025 for open-source tracing.",
            },
            {
              name: "Zipkin",
              description:
                "Monitor with Zipkin, taught with instrumentation examples. A 2025 skill for lightweight tracing.",
            },
            {
              name: "OpenTelemetry",
              description:
                "Use OpenTelemetry for tracing, taught with examples. A 2025 skill for unified observability.",
            },
          ],
        },
        {
          name: "Visualization and Dashboards",
          description:
            "Visualize metrics with Grafana and Datadog, taught with examples like real-time dashboards or log visuals. A 2025 skill for insights, this section communicates system health effectively to DevOps teams and stakeholders.",
          children: [
            {
              name: "Grafana",
              preferred: true,
              description:
                "Build dashboards with Grafana, taught with Prometheus examples. Preferred in 2025 for customization.",
            },
            {
              name: "Datadog",
              description:
                "Visualize with Datadog, taught with examples. A 2025 skill for cloud insights.",
            },
            {
              name: "Kibana",
              description:
                "Use Kibana for Elasticsearch visuals, taught with examples. A 2025 skill for log dashboards.",
            },
          ],
        },
        {
          name: "Alerting Management",
          description:
            "Manage alerts with PagerDuty and Opsgenie, taught with examples like on-call setups or incident triggers. A 2025 skill for rapid response, this section ensures DevOps system uptime through automated, effective alerting workflows.",
          children: [
            {
              name: "PagerDuty",
              preferred: true,
              description:
                "Automate with PagerDuty, taught with alert examples. Preferred in 2025 for incident management.",
            },
            {
              name: "Opsgenie",
              description:
                "Manage with Opsgenie, taught with examples. A 2025 skill for streamlined alerts.",
            },
            {
              name: "VictorOps",
              description:
                "Collaborate with VictorOps, taught with examples. A 2025 skill for team incident response.",
            },
          ],
        },
      ],
      dividerText: "Observability enhanced—explore emerging trends.",
    },
    {
      name: "Emerging Trends and Technologies",
      description:
        "Stay ahead with serverless and AI-driven DevOps, taught with examples like AWS Lambda or Kubeflow integrations. A 2025 skill for innovation, this section ensures you adapt to cutting-edge tools and practices shaping the future of DevOps workflows effectively.",
      children: [
        {
          name: "Serverless Computing",
          description:
            "Deploy apps with serverless tools like AWS Lambda, taught with examples like event-driven functions or API triggers. A 2025 skill for efficiency, this section reduces overhead and enhances scalability in cloud-native DevOps environments with minimal management.",
          children: [
            {
              name: "AWS Lambda",
              preferred: true,
              description:
                "Run with AWS Lambda, taught with trigger examples. Preferred in 2025 for AWS dominance.",
            },
            {
              name: "Azure Functions",
              description:
                "Execute with Azure Functions, taught with examples. A 2025 skill for Microsoft cloud.",
            },
            {
              name: "Google Cloud Functions",
              description:
                "Deploy with Google Cloud Functions, taught with examples. A 2025 skill for GCP agility.",
            },
            {
              name: "Knative",
              description:
                "Use Knative for serverless on K8s, taught with examples. A 2025 skill for hybrid setups.",
            },
          ],
        },
        {
          name: "AI-Driven DevOps",
          description:
            "Leverage AI with tools like Kubeflow, taught with examples optimizing pipelines or predicting failures. A 2025 skill for automation, this section enhances DevOps with intelligent insights and predictive capabilities for proactive system management.",
          children: [
            {
              name: "Kubeflow",
              description:
                "Optimize with Kubeflow on K8s, taught with ML pipeline examples. A 2025 skill for AI workflows.",
            },
            {
              name: "AIOps",
              description:
                "Use AIOps for insights, taught with Dynatrace examples. A 2025 skill for predictive DevOps.",
            },
          ],
        },
      ],
      dividerText: "Trends adopted—apply skills in projects.",
    },
    {
      name: "Projects",
      description:
        "Apply DevOps skills to real-world projects like CI/CD pipelines or Kubernetes deployments, taught with examples using GitHub Actions or Terraform. A 2025 capstone skill, this section builds a portfolio to showcase expertise for career advancement in modern DevOps roles.",
    },
    {
      name: "Continuous Learning",
      description:
        "Keep skills current with communities like CNCF Slack or resources like HashiCorp Learn, taught with examples exploring new tools. A 2025 lifelong skill, this section ensures adaptability to DevOps innovations, maintaining competitiveness in a rapidly evolving tech landscape.",
    },
  ],
};

export default devOpsRoadmap;
