const devOpsRoadmap = {
  name: "DevOps Engineer Roadmap 2025",
  children: [
    {
      name: "Foundational Knowledge",
      children: [
        {
          name: "Programming Language",
          children: [
            {
              name: "Python",
              preferred: true,
            },
            {
              name: "Go",
            },
          ],
        },
        {
          name: "Scripting Languages",
          children: [
            {
              name: "Bash/Shell Scripting",
            },
            {
              name: "PowerShell",
            },
          ],
        },
        {
          name: "Operating Systems",
          children: [
            {
              name: "Linux Fundamentals",
              preferred: true,
            },
            {
              name: "Windows Server",
            },
            {
              name: "macOS Basics",
            },
          ],
        },
        {
          name: "Networking and Security",
          children: [
            {
              name: "TCP/IP, DNS, HTTP/HTTPS",
            },
            {
              name: "Firewalls and VPNs",
            },
            {
              name: "SSL/TLS",
            },
            {
              name: "Network Troubleshooting",
            },
          ],
        },
      ],
      dividerText: "Foundations set—master version control and collaboration.",
    },
    {
      name: "Version Control and Collaboration",
      children: [
        {
          name: "Version Control Systems",
          children: [
            {
              name: "Git",
              preferred: true,
            },
            {
              name: "GitHub",
            },
            {
              name: "GitLab",
            },
            {
              name: "Bitbucket",
            },
          ],
        },
        {
          name: "Collaboration Tools",
          children: [
            {
              name: "Jira",
              preferred: true,
            },
            {
              name: "Confluence",
            },
            {
              name: "Slack",
            },
            {
              name: "Microsoft Teams",
            },
          ],
        },
      ],
      dividerText: "Collaboration in place—automate with CI/CD.",
    },
    {
      name: "Continuous Integration and Continuous Deployment (CI/CD)",
      children: [
        {
          name: "CI/CD Tools",
          children: [
            {
              name: "GitHub Actions",
              preferred: true,
            },
            {
              name: "GitLab CI/CD",
            },
            {
              name: "Jenkins",
            },
            {
              name: "CircleCI",
            },
          ],
        },
        {
          name: "CI/CD Concepts",
          children: [
            {
              name: "Automated Testing",
            },
            {
              name: "Build Automation",
            },
            {
              name: "Deployment Pipelines",
            },
            {
              name: "Code Review",
            },
          ],
        },
      ],
      dividerText: "CI/CD streamlined—manage infrastructure as code.",
    },
    {
      name: "Infrastructure as Code (IaC)",
      children: [
        {
          name: "IaC Tools",
          children: [
            {
              name: "Terraform",
              preferred: true,
            },
            {
              name: "Ansible",
            },
            {
              name: "Pulumi",
            },
            {
              name: "CloudFormation",
            },
          ],
        },
        {
          name: "IaC Concepts",
          children: [
            {
              name: "Declarative vs. Imperative",
            },
            {
              name: "Idempotency",
            },
            {
              name: "State Management",
            },
          ],
        },
      ],
      dividerText: "IaC mastered—orchestrate with containers.",
    },
    {
      name: "Containerization and Orchestration",
      children: [
        {
          name: "Containerization",
          children: [
            {
              name: "Docker",
              preferred: true,
            },
            {
              name: "Podman",
            },
            {
              name: "Containerd",
            },
          ],
        },
        {
          name: "Container Orchestration",
          children: [
            {
              name: "Kubernetes",
              preferred: true,
            },
            {
              name: "OpenShift",
            },
            {
              name: "Helm",
            },
            {
              name: "Docker Swarm",
            },
          ],
        },
      ],
      dividerText: "Containers orchestrated—leverage cloud computing.",
    },
    {
      name: "Cloud Computing",
      children: [
        {
          name: "Cloud Service Providers",
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
            {
              name: "DigitalOcean",
            },
          ],
        },
        {
          name: "Cloud Services and Tools",
          children: [
            {
              name: "Compute Services",
            },
            {
              name: "Storage Solutions",
            },
            {
              name: "Database Services",
            },
            {
              name: "Serverless Tools",
            },
          ],
        },
      ],
      dividerText: "Cloud utilized—monitor and observe systems.",
    },
    {
      name: "Monitoring",
      children: [
        {
          name: "Infrastructure Monitoring",
          children: [
            {
              name: "Prometheus",
              preferred: true,
            },
            {
              name: "Nagios",
            },
            {
              name: "Zabbix",
            },
            {
              name: "Checkmk",
            },
          ],
        },
        {
          name: "Application Monitoring",
          children: [
            {
              name: "New Relic",
            },
            {
              name: "AppDynamics",
            },
            {
              name: "Dynatrace",
              preferred: true,
            },
          ],
        },
        {
          name: "Log Monitoring",
          children: [
            {
              name: "ELK Stack (Elasticsearch, Logstash, Kibana)",
              preferred: true,
            },
            {
              name: "Splunk",
            },
            {
              name: "Graylog",
            },
          ],
        },
      ],
      dividerText: "Monitoring in place—enhance with observability.",
    },
    {
      name: "Observability",
      children: [
        {
          name: "Distributed Tracing",
          children: [
            {
              name: "Jaeger",
              preferred: true,
            },
            {
              name: "Zipkin",
            },
            {
              name: "OpenTelemetry",
            },
          ],
        },
        {
          name: "Visualization and Dashboards",
          children: [
            {
              name: "Grafana",
              preferred: true,
            },
            {
              name: "Datadog",
            },
            {
              name: "Kibana",
            },
          ],
        },
        {
          name: "Alerting Management",
          children: [
            {
              name: "PagerDuty",
              preferred: true,
            },
            {
              name: "Opsgenie",
            },
            {
              name: "VictorOps",
            },
          ],
        },
      ],
      dividerText: "Observability enhanced—explore emerging trends.",
    },
    {
      name: "Emerging Trends and Technologies",
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
            {
              name: "Knative",
            },
          ],
        },
        {
          name: "AI-Driven DevOps",
          children: [
            {
              name: "Kubeflow",
            },
            {
              name: "AIOps",
            },
          ],
        },
      ],
      dividerText: "Trends adopted—apply skills in projects.",
    },
    {
      name: "Projects",
    },
    {
      name: "Continuous Learning",
    },
  ],
};

export default devOpsRoadmap;
