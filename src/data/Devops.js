const devOpsRoadmap = {
  name: "DevOps Engineer Roadmap 2025",
  description:
    "This structured guide equips aspiring DevOps engineers with essential skills and knowledge, from beginner to advanced levels, aligned with 2025 industry trends. It covers programming, CI/CD, infrastructure automation, containerization, cloud platforms, and observability. Designed for practical learning, it ensures readiness to streamline development and operations in modern, fast-paced tech environments.",
  children: [
    {
      name: "Foundational Knowledge",
      description:
        "This section establishes a strong foundation in programming, system administration, and networking, critical for DevOps success. Learners gain technical proficiency to automate and manage systems effectively. It’s the essential starting point in 2025, blending coding, OS expertise, and network skills to support the collaborative, automated workflows of DevOps practices.",
      children: [
        {
          name: "Programming and Scripting",
          description:
            "Programming and Scripting develop proficiency in languages vital for DevOps automation and tooling. This section emphasizes practical coding for system tasks and pipeline scripts. It’s a cornerstone skill in 2025, enabling engineers to automate repetitive processes, enhance efficiency, and integrate tools across the DevOps lifecycle seamlessly.",
          children: [
            {
              name: "Python",
              description:
                "Python, widely used in DevOps, powers automation scripts and tools with its readability and libraries like Ansible. This section teaches learners syntax and scripting for system tasks. It’s a dominant skill in 2025, essential for automating workflows, managing cloud resources, and building custom DevOps solutions efficiently.",
            },
            {
              name: "Bash/Shell Scripting",
              description:
                "Bash/Shell Scripting automates Unix/Linux tasks, taught with commands and scripts for system management. This section covers loops, conditionals, and file handling. It’s an essential skill in 2025, enabling engineers to streamline server operations, deployments, and maintenance in Linux-dominated DevOps environments.",
            },
            {
              name: "Go",
              description:
                "Go, increasingly popular in cloud-native DevOps, offers performance and concurrency, taught with basic syntax. This section covers building tools like Docker or Kubernetes components. It’s a modern skill in 2025, prized for its efficiency in developing scalable, lightweight applications in microservices ecosystems.",
            },
          ],
        },
        {
          name: "Operating Systems",
          description:
            "Operating Systems teach system administration for Linux and Windows, key to DevOps infrastructure management. This section focuses on OS fundamentals and troubleshooting. It’s a critical skill in 2025, ensuring engineers can configure, secure, and optimize servers for reliable application deployment and operation in diverse environments.",
          children: [
            {
              name: "Linux Fundamentals",
              description:
                "Linux Fundamentals cover command-line proficiency and system management, taught with tools like `ls` and `systemd`. This section includes users, permissions, and processes. It’s a core skill in 2025, as Linux dominates DevOps servers, enabling engineers to manage cloud and containerized environments effectively.",
            },
            {
              name: "Windows Server",
              description:
                "Windows Server teaches administration for Windows-based infrastructures, taught with PowerShell and Active Directory. This section covers managing enterprise systems. It’s a valuable skill in 2025, supporting hybrid environments where Windows servers integrate with cloud and DevOps workflows in corporate settings.",
            },
          ],
        },
        {
          name: "Networking and Security",
          description:
            "Networking and Security explore protocols and principles vital for DevOps connectivity and protection. This section teaches configuring and securing network infrastructure. It’s an essential skill in 2025, ensuring reliable, secure communication between services in distributed, cloud-based DevOps systems across industries.",
          children: [
            {
              name: "TCP/IP, DNS, HTTP/HTTPS",
              description:
                "TCP/IP, DNS, HTTP/HTTPS are core networking protocols, taught with practical configurations. This section covers packet flow, domain resolution, and web security. It’s a foundational skill in 2025, enabling DevOps engineers to troubleshoot and optimize network performance for application delivery.",
            },
            {
              name: "Firewalls and VPNs",
              description:
                "Firewalls and VPNs secure networks, taught with tools like `iptables` or AWS Security Groups. This section covers rules and tunneling setups. It’s a key skill in 2025, protecting DevOps infrastructure from threats and ensuring secure remote access in distributed systems.",
            },
            {
              name: "SSL/TLS",
              description:
                "SSL/TLS encrypts communication, taught with certificate management using OpenSSL. This section covers securing HTTP and data transfers. It’s a critical skill in 2025, ensuring data integrity and privacy in DevOps pipelines and cloud services amid rising cybersecurity demands.",
            },
          ],
        },
      ],
      dividerText: "Version Control and Collaboration Tools",
    },
    {
      name: "Version Control and Collaboration",
      description:
        "This section teaches managing code and collaborating effectively with teams using version control and tools. Learners master tracking changes and communication workflows. It’s a vital skill in 2025, fostering teamwork and code integrity in DevOps, where collaboration drives rapid, reliable software delivery across distributed teams.",
      children: [
        {
          name: "Version Control Systems",
          description:
            "Version Control Systems track and manage code changes, taught with Git and hosting platforms. This section emphasizes branching and merging for team projects. It’s a foundational skill in 2025, ensuring code consistency and collaboration in DevOps pipelines across development cycles.",
          children: [
            {
              name: "Git",
              description:
                "Git, a distributed version control system, tracks code changes, taught with commands like `commit` and `branch`. This section covers workflows and repositories. It’s a core skill in 2025, enabling DevOps engineers to manage source code efficiently in collaborative, fast-paced environments.",
            },
            {
              name: "GitHub/GitLab/Bitbucket",
              description:
                "GitHub, GitLab, and Bitbucket host code and enhance collaboration, taught with pull requests and CI/CD. This section covers platform-specific features. It’s a practical skill in 2025, streamlining team workflows and integrating DevOps tools for seamless code management and deployment.",
            },
          ],
        },
        {
          name: "Collaboration Tools",
          description:
            "Collaboration Tools facilitate team communication and project tracking, taught with Jira and Slack. This section focuses on improving DevOps coordination. It’s an essential skill in 2025, ensuring smooth interaction and documentation among development, operations, and QA teams in agile environments.",
          children: [
            {
              name: "Jira",
              description:
                "Jira manages projects and tracks issues, taught with ticket creation and workflows. This section covers sprint planning and bug tracking for DevOps. It’s a key skill in 2025, aligning tasks and progress in agile DevOps teams for efficient software delivery.",
            },
            {
              name: "Confluence",
              description:
                "Confluence enhances team documentation, taught with page creation and integration. This section covers storing DevOps runbooks and plans. It’s a valuable skill in 2025, centralizing knowledge and improving collaboration in distributed teams managing complex infrastructure.",
            },
            {
              name: "Slack/Microsoft Teams",
              description:
                "Slack and Microsoft Teams boost communication, taught with channels and integrations. This section covers real-time DevOps collaboration and alerts. It’s a practical skill in 2025, ensuring rapid response and coordination across teams in dynamic, cloud-based workflows.",
            },
          ],
        },
      ],
      dividerText: "Understanding of DevOps Principles",
    },
    {
      name: "Continuous Integration and Continuous Deployment (CI/CD)",
      description:
        "This section automates code integration and deployment with CI/CD practices, taught with tools like Jenkins. Learners streamline software delivery pipelines. It’s a critical skill in 2025, reducing errors and accelerating releases in DevOps, aligning development and operations for faster, reliable application updates.",
      children: [
        {
          name: "CI/CD Concepts",
          description:
            "CI/CD Concepts cover continuous integration and deployment principles, taught with automation examples. This section emphasizes rapid, reliable software delivery. It’s a foundational skill in 2025, enabling DevOps engineers to maintain code quality and deploy seamlessly in agile, iterative development cycles.",
          children: [
            {
              name: "Automated Testing",
              description:
                "Automated Testing ensures code quality with unit and integration tests, taught with frameworks like pytest. This section covers test automation in CI. It’s an essential skill in 2025, catching bugs early and maintaining reliability in fast-moving DevOps pipelines.",
            },
            {
              name: "Build Automation",
              description:
                "Build Automation streamlines compiling and packaging code, taught with tools like Maven. This section covers integrating builds into CI/CD. It’s a key skill in 2025, reducing manual effort and ensuring consistent, repeatable builds in DevOps workflows.",
            },
            {
              name: "Deployment Pipelines",
              description:
                "Deployment Pipelines automate code rollout to environments, taught with staging and production examples. This section covers pipeline design. It’s a practical skill in 2025, enabling seamless, error-free deployments in DevOps for rapid software delivery across systems.",
            },
          ],
        },
        {
          name: "CI/CD Tools",
          description:
            "CI/CD Tools implement pipelines, taught with GitHub Actions and Jenkins setups. This section focuses on automating integration and deployment tasks. It’s a high-demand skill in 2025, empowering DevOps engineers to leverage industry-standard tools for efficient, scalable software release processes.",
          children: [
            {
              name: "GitHub Actions",
              description:
                "GitHub Actions automates CI/CD within GitHub, taught with workflow YAML. This section covers testing and deployment automation. It’s a modern skill in 2025, integrating seamlessly with repositories for streamlined DevOps workflows in collaborative projects.",
            },
            {
              name: "GitLab CI/CD",
              description:
                "GitLab CI/CD offers built-in automation, taught with `.gitlab-ci.yml` configs. This section covers pipeline creation and execution. It’s a versatile skill in 2025, providing an all-in-one DevOps solution for code hosting, testing, and deployment.",
            },
            {
              name: "Jenkins",
              description:
                "Jenkins, an open-source server, automates CI/CD, taught with job and pipeline setups. This section covers plugins and scalability. It’s a foundational skill in 2025, offering flexibility for complex DevOps automation in legacy and modern systems alike.",
            },
          ],
        },
      ],
      dividerText: "Learning IaC integration with CI/CD",
    },
    {
      name: "Infrastructure as Code (IaC)",
      description:
        "This section manages infrastructure using code-based tools like Terraform, taught with practical examples. Learners automate provisioning and configuration. It’s a transformative skill in 2025, ensuring consistency and scalability in DevOps infrastructure, reducing manual errors, and integrating seamlessly with CI/CD pipelines.",
      children: [
        {
          name: "IaC Concepts",
          description:
            "IaC Concepts define infrastructure through code, taught with principles and benefits. This section emphasizes automation and version control for systems. It’s a foundational skill in 2025, enabling DevOps engineers to manage infrastructure efficiently, reproducibly, and at scale in dynamic cloud environments.",
          children: [
            {
              name: "Declarative vs. Imperative",
              description:
                "Declarative vs. Imperative approaches define infrastructure, taught with Terraform (declarative) vs. Ansible (imperative). This section covers their use cases. It’s a key skill in 2025, guiding tool choice for consistent, efficient IaC in DevOps workflows.",
            },
            {
              name: "Idempotency",
              description:
                "Idempotency ensures consistent infrastructure states, taught with IaC tools’ design. This section covers avoiding unintended changes in repeated runs. It’s an essential skill in 2025, maintaining reliability and predictability in automated DevOps infrastructure deployments.",
            },
          ],
        },
        {
          name: "IaC Tools",
          description:
            "IaC Tools implement infrastructure automation, taught with Terraform and Ansible examples. This section focuses on provisioning and managing resources programmatically. It’s a critical skill in 2025, empowering DevOps engineers to deploy and scale infrastructure rapidly in cloud and on-premises environments.",
          children: [
            {
              name: "Terraform",
              description:
                "Terraform builds and versions infrastructure, taught with HCL for AWS or Azure. This section covers state management and modules. It’s a versatile skill in 2025, enabling multi-cloud IaC for scalable, consistent DevOps infrastructure deployments.",
            },
            {
              name: "Ansible",
              description:
                "Ansible automates configuration management, taught with playbooks for server setup. This section covers agentless, idempotent operations. It’s a practical skill in 2025, simplifying system configuration and integration in DevOps workflows across diverse environments.",
            },
            {
              name: "Pulumi",
              description:
                "Pulumi defines IaC in languages like Python, taught with code examples. This section covers its programmatic approach versus declarative tools. It’s a modern skill in 2025, offering flexibility for developers crafting custom DevOps infrastructure solutions.",
            },
          ],
        },
      ],
      dividerText: "Understanding of creating Containers and Orchestration",
    },
    {
      name: "Containerization and Orchestration",
      description:
        "This section deploys and manages applications in containers, taught with Docker and Kubernetes. Learners master scalable, portable deployments. It’s a high-demand skill in 2025, driving cloud-native DevOps by ensuring consistency, resilience, and efficiency in modern application delivery across distributed systems.",
      children: [
        {
          name: "Containerization",
          description:
            "Containerization packages apps into portable units, taught with Docker and Podman. This section focuses on lightweight, consistent runtime environments. It’s a foundational skill in 2025, enabling DevOps engineers to standardize deployments and streamline development-to-production workflows in container-centric ecosystems.",
          children: [
            {
              name: "Docker",
              description:
                "Docker develops and runs containers, taught with Dockerfile creation and commands. This section covers building and managing containerized apps. It’s a core skill in 2025, ensuring portability and efficiency in DevOps deployments across cloud and local environments.",
            },
            {
              name: "Podman",
              description:
                "Podman, a daemonless container engine, manages OCI containers, taught with CLI usage. This section covers its rootless, Docker-compatible features. It’s a modern skill in 2025, offering a lightweight alternative for secure, flexible DevOps containerization.",
            },
          ],
        },
        {
          name: "Container Orchestration",
          description:
            "Container Orchestration scales and manages containers, taught with Kubernetes setups. This section focuses on automating deployment and resilience. It’s an essential skill in 2025, enabling DevOps engineers to handle complex, distributed applications in production with high availability.",
          children: [
            {
              name: "Kubernetes",
              description:
                "Kubernetes automates container deployment, taught with cluster setup and kubectl. This section covers pods, services, and scaling strategies. It’s a critical skill in 2025, orchestrating cloud-native apps for reliability and efficiency in DevOps workflows.",
            },
            {
              name: "OpenShift",
              description:
                "OpenShift, an enterprise Kubernetes platform, taught with deployment examples. This section covers its developer-friendly tools and security. It’s a valuable skill in 2025, enhancing Kubernetes for large-scale DevOps in corporate cloud environments.",
            },
            {
              name: "Helm",
              description:
                "Helm manages Kubernetes apps as packages, taught with chart creation. This section covers simplifying deployments and updates. It’s a practical skill in 2025, streamlining app management in DevOps for consistent, reusable Kubernetes configurations.",
            },
          ],
        },
      ],
      dividerText: "Cloud Computing Services and Tools",
    },
    {
      name: "Cloud Computing",
      description:
        "This section leverages cloud platforms for scalable DevOps infrastructure, taught with AWS and Azure. Learners master cloud services and integration. It’s a vital skill in 2025, supporting the shift to cloud-native DevOps, enabling rapid scaling, and optimizing resources in modern application deployment.",
      children: [
        {
          name: "Cloud Service Providers",
          description:
            "Cloud Service Providers like AWS offer scalable platforms, taught with overviews. This section focuses on leveraging major providers for DevOps. It’s a foundational skill in 2025, ensuring engineers can deploy and manage infrastructure in the dominant cloud ecosystems effectively.",
          children: [
            {
              name: "Amazon Web Services (AWS)",
              description:
                "AWS provides comprehensive cloud services, taught with EC2 and S3 examples. This section covers its vast ecosystem for DevOps tasks. It’s a top skill in 2025, dominating cloud DevOps with scalable, reliable infrastructure for global applications.",
            },
            {
              name: "Microsoft Azure",
              description:
                "Azure offers cloud services for DevOps, taught with VMs and Functions. This section covers building and managing apps in Azure. It’s a key skill in 2025, integrating seamlessly with enterprise systems for hybrid DevOps deployments.",
            },
            {
              name: "Google Cloud Platform (GCP)",
              description:
                "GCP provides cloud computing suites, taught with Compute Engine setups. This section covers its AI and data tools for DevOps. It’s a valuable skill in 2025, leveraging Google’s innovation for high-performance cloud-native applications.",
            },
          ],
        },
        {
          name: "Cloud Services and Tools",
          description:
            "Cloud Services and Tools utilize compute, storage, and databases, taught with AWS and Azure examples. This section focuses on practical DevOps integration. It’s an essential skill in 2025, enabling engineers to build scalable, efficient infrastructure using cloud-native offerings.",
          children: [
            {
              name: "Compute Services",
              description:
                "Compute Services like EC2 and Azure VMs provide scalable power, taught with setups. This section covers managing virtual instances for apps. It’s a core skill in 2025, supporting DevOps workloads with flexible, on-demand cloud computing resources.",
            },
            {
              name: "Storage Solutions",
              description:
                "Storage Solutions like S3 and Azure Blob store data, taught with configurations. This section covers scalable storage for DevOps apps. It’s a practical skill in 2025, ensuring durable, accessible data management in cloud-based deployment pipelines.",
            },
            {
              name: "Database Services",
              description:
                "Database Services like RDS and Cloud SQL manage data, taught with setups. This section covers relational and NoSQL options for DevOps. It’s a key skill in 2025, providing scalable, managed databases for application persistence in the cloud.",
            },
          ],
        },
      ],
      dividerText: "Monitoring and Observability",
    },
    {
      name: "Monitoring",
      description:
        "This section tracks system health and performance, taught with tools like Prometheus. Learners ensure availability and optimize resources in DevOps. It’s a critical skill in 2025, providing visibility into infrastructure and applications to maintain reliability and performance in production environments.",
      children: [
        {
          name: "Infrastructure Monitoring",
          description:
            "Infrastructure Monitoring oversees servers and networks, taught with tools like Nagios. This section focuses on resource health and uptime in DevOps. It’s an essential skill in 2025, ensuring proactive management of cloud and on-premises infrastructure for seamless operations.",
          children: [
            {
              name: "Prometheus",
              description:
                "Prometheus, a time-series database, monitors metrics, taught with scraping configs. This section covers alerting and metrics collection. It’s a core skill in 2025, providing real-time insights into DevOps infrastructure for scalability and reliability.",
            },
            {
              name: "Nagios",
              description:
                "Nagios monitors infrastructure, taught with setup and plugins. This section covers alerts for servers and networks in DevOps. It’s a practical skill in 2025, offering robust monitoring for traditional and hybrid environments with extensive customization.",
            },
            {
              name: "Zabbix",
              description:
                "Zabbix provides enterprise monitoring, taught with agent setups. This section covers tracking networks and servers for DevOps. It’s a valuable skill in 2025, delivering comprehensive visibility and alerting for large-scale infrastructure management.",
            },
          ],
        },
        {
          name: "Application Monitoring",
          description:
            "Application Monitoring tracks app performance, taught with New Relic and Dynatrace. This section focuses on behavior and bottlenecks in DevOps. It’s a key skill in 2025, ensuring applications run smoothly and meet user expectations in production systems.",
          children: [
            {
              name: "New Relic",
              description:
                "New Relic offers end-to-end observability, taught with APM setup. This section covers tracking app performance in DevOps. It’s a modern skill in 2025, providing detailed insights for optimizing application reliability and user experience.",
            },
            {
              name: "AppDynamics",
              description:
                "AppDynamics uses AI for APM, taught with monitoring configs. This section covers identifying app issues in DevOps workflows. It’s an advanced skill in 2025, enhancing performance analysis with predictive insights for complex applications.",
            },
            {
              name: "Dynatrace",
              description:
                "Dynatrace provides full-stack monitoring, taught with AI-driven setups. This section covers app and infra insights for DevOps. It’s a high-value skill in 2025, delivering automated, deep visibility into distributed systems for proactive management.",
            },
          ],
        },
        {
          name: "Log Monitoring",
          description:
            "Log Monitoring collects and analyzes logs, taught with ELK and Splunk. This section focuses on troubleshooting and auditing in DevOps. It’s an essential skill in 2025, ensuring engineers can diagnose issues and maintain system integrity through log data.",
          children: [
            {
              name: "ELK Stack (Elasticsearch, Logstash, Kibana)",
              description:
                "ELK Stack logs and visualizes data, taught with setup and queries. This section covers log aggregation for DevOps. It’s a core skill in 2025, offering powerful insights into system behavior with scalable, open-source tools.",
            },
            {
              name: "Splunk",
              description:
                "Splunk analyzes machine data, taught with search and dashboards. This section covers log monitoring for DevOps systems. It’s a premium skill in 2025, providing advanced analytics and visibility for enterprise-grade troubleshooting and compliance.",
            },
            {
              name: "Graylog",
              description:
                "Graylog manages logs open-source, taught with configs and queries. This section covers log analysis for DevOps workflows. It’s a practical skill in 2025, offering cost-effective, centralized logging for monitoring and debugging systems.",
            },
          ],
        },
      ],
    },
    {
      name: "Observability",
      description:
        "This section provides deep system insights, taught with tracing and dashboards. Learners enhance reliability and performance in DevOps. It’s a high-demand skill in 2025, going beyond monitoring to understand distributed systems, ensuring proactive optimization and issue resolution in complex environments.",
      children: [
        {
          name: "Distributed Tracing",
          description:
            "Distributed Tracing tracks requests across microservices, taught with Jaeger setups. This section focuses on latency and error analysis in DevOps. It’s an advanced skill in 2025, providing visibility into distributed app performance for efficient troubleshooting and optimization.",
          children: [
            {
              name: "Jaeger",
              description:
                "Jaeger traces requests end-to-end, taught with setup and UI. This section covers monitoring microservices in DevOps. It’s a key skill in 2025, enabling detailed insights into service interactions for reliable, scalable applications.",
            },
            {
              name: "Zipkin",
              description:
                "Zipkin monitors microservices tracing, taught with instrumentation. This section covers latency tracking in DevOps systems. It’s a practical skill in 2025, offering lightweight, open-source tracing for distributed application performance analysis.",
            },
          ],
        },
        {
          name: "Visualization and Dashboards",
          description:
            "Visualization and Dashboards provide real-time system insights, taught with Grafana. This section focuses on metrics and logs in DevOps. It’s an essential skill in 2025, enabling engineers to monitor and communicate system health effectively to stakeholders.",
          children: [
            {
              name: "Grafana",
              description:
                "Grafana visualizes metrics and logs, taught with dashboards and Prometheus. This section covers creating real-time DevOps views. It’s a core skill in 2025, offering customizable, powerful visualization for system performance monitoring.",
            },
            {
              name: "Datadog",
              description:
                "Datadog provides cloud monitoring dashboards, taught with setups. This section covers app and infra insights for DevOps. It’s a premium skill in 2025, integrating metrics and traces for comprehensive observability in distributed systems.",
            },
            {
              name: "Kibana",
              description:
                "Kibana visualizes Elasticsearch data, taught with dashboard creation. This section covers log and metric views in DevOps. It’s a practical skill in 2025, enhancing observability with intuitive, real-time analytics for system health.",
            },
          ],
        },
        {
          name: "Alerting Management",
          description:
            "Alerting Management ensures proactive monitoring, taught with PagerDuty setups. This section focuses on automated alerts in DevOps. It’s a critical skill in 2025, enabling rapid response to incidents and maintaining system uptime in production environments.",
          children: [
            {
              name: "PagerDuty",
              description:
                "PagerDuty automates incident response, taught with alert configs. This section covers on-call management for DevOps. It’s a key skill in 2025, ensuring timely incident resolution and team coordination in high-stakes systems.",
            },
            {
              name: "Opsgenie",
              description:
                "Opsgenie manages alerts and on-call, taught with integrations. This section covers DevOps incident workflows. It’s a practical skill in 2025, streamlining notifications and responses for reliable system operations.",
            },
            {
              name: "VictorOps",
              description:
                "VictorOps collaborates on incidents, taught with real-time setups. This section covers alerting in DevOps teams. It’s a valuable skill in 2025, enhancing incident management and communication for system reliability.",
            },
          ],
        },
      ],
      dividerText: "Stay Connected with the Trending Technologies",
    },
    {
      name: "Emerging Trends and Technologies",
      description:
        "This section explores emerging DevOps trends like serverless, taught with AWS Lambda examples. Learners stay ahead with innovative tools and practices. It’s a forward-thinking skill in 2025, ensuring engineers adapt to cutting-edge technologies shaping the future of DevOps workflows.",
      children: [
        {
          name: "Serverless Computing",
          description:
            "Serverless Computing simplifies app deployment, taught with AWS and Azure frameworks. This section focuses on event-driven, scalable architectures. It’s a modern skill in 2025, reducing infrastructure overhead and enhancing DevOps efficiency in cloud-native environments with minimal management.",
          children: [
            {
              name: "AWS Lambda",
              description:
                "AWS Lambda runs serverless code, taught with event triggers. This section covers deploying functions for DevOps tasks. It’s a core skill in 2025, optimizing cost and speed in AWS-centric serverless DevOps workflows.",
            },
            {
              name: "Azure Functions",
              description:
                "Azure Functions execute serverless apps, taught with setup examples. This section covers integration with Azure DevOps. It’s a practical skill in 2025, streamlining event-driven solutions in Microsoft’s cloud ecosystem.",
            },
            {
              name: "Google Cloud Functions",
              description:
                "Google Cloud Functions deploy serverless code, taught with GCP tools. This section covers lightweight DevOps apps. It’s a valuable skill in 2025, enhancing agility in Google’s cloud-native environment for rapid deployments.",
            },
          ],
        },
      ],
      dividerText: "Projects",
    },
    {
      name: "Projects",
      description:
        "This section applies DevOps skills to real-world scenarios, taught with hands-on projects. Learners build CI/CD pipelines, IaC, and monitoring setups. It’s a culminating skill in 2025, showcasing practical expertise and problem-solving for portfolios and career advancement in DevOps roles.",
      children: [
        {
          name: "Project 1: CI/CD Pipeline",
          description:
            "Build a CI/CD pipeline for an app with automated testing and deployment, taught with GitHub Actions. This project covers end-to-end automation. It’s a practical skill in 2025, demonstrating DevOps pipeline mastery for rapid, reliable software delivery.",
        },
        {
          name: "Project 2: Infrastructure as Code",
          description:
            "Implement IaC with Terraform or Ansible for a cloud setup, taught with provisioning examples. This project automates infrastructure deployment. It’s a key skill in 2025, showcasing scalable, reproducible system management in DevOps environments.",
        },
        {
          name: "Project 3: Kubernetes Deployment",
          description:
            "Deploy an app on Kubernetes, taught with cluster setup and scaling. This project manages containerized workloads in DevOps. It’s an essential skill in 2025, proving orchestration expertise for cloud-native application deployment and resilience.",
        },
        {
          name: "Project 4: Monitoring and Observability",
          description:
            "Set up monitoring with Prometheus and Grafana for a system, taught with configs. This project ensures observability in DevOps. It’s a critical skill in 2025, demonstrating real-time system insight and reliability management capabilities.",
        },
      ],
    },
    {
      name: "Continuous Learning",
      description:
        "Continuous Learning keeps DevOps engineers updated with tools and trends, taught via communities and resources. This section emphasizes adaptability in 2025’s evolving ecosystem. It’s a lifelong skill, ensuring competitiveness and innovation in a field driven by rapid technological advancements.",
    },
  ],
};

export default devOpsRoadmap;
