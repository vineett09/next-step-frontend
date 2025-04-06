const mlOpsRoadmap = {
  name: "MLOps Engineer Roadmap 2025",
  children: [
    {
      name: "Foundational Knowledge",
      children: [
        {
          name: "Programming and Scripting",
          children: [
            {
              name: "Python",
              preferred: true,
            },
            {
              name: "Bash/Shell Scripting",
            },
            {
              name: "SQL",
            },
          ],
        },
        {
          name: "Machine Learning Fundamentals",
          children: [
            {
              name: "Supervised Learning",
            },
            {
              name: "Unsupervised Learning",
            },
            {
              name: "Feature Engineering",
            },
            {
              name: "Model Evaluation",
            },
            {
              name: "Deep Learning",
            },
          ],
        },
      ],
      dividerText: "Foundations built—master MLOps principles next.",
    },
    {
      name: "MLOps Principles",
      children: [
        {
          name: "Reproducibility",
          children: [
            {
              name: "Version Control",
            },
            {
              name: "Docker",
              preferred: true,
            },
            {
              name: "Seed Setting",
            },
          ],
        },
        {
          name: "Model Versioning",
          children: [
            {
              name: "MLflow",
              preferred: true,
            },
            {
              name: "DVC",
            },
            {
              name: "Git LFS",
            },
          ],
        },
        {
          name: "Scalability",
          children: [
            {
              name: "Distributed Training",
            },
            {
              name: "Load Balancing",
            },
            {
              name: "Batch Processing",
            },
          ],
        },
        {
          name: "Collaboration & Documentation",
          children: [
            {
              name: "Jupyter Notebooks",
            },
            {
              name: "Markdown",
            },
            {
              name: "Confluence",
            },
            {
              name: "Code Comments",
            },
          ],
        },
      ],
      dividerText:
        "Principles mastered—leverage MLOps tools and technologies next.",
    },
    {
      name: "MLOps Tools and Technologies",
      children: [
        {
          name: "Experiment Tracking",
          children: [
            {
              name: "MLflow",
              preferred: true,
            },
            {
              name: "Weights & Biases",
            },
            {
              name: "Neptune.ai",
            },
          ],
        },
        {
          name: "Model Deployment",
          children: [
            {
              name: "Docker",
              preferred: true,
            },
            {
              name: "Kubernetes",
              preferred: true,
            },
            {
              name: "TensorFlow Serving",
            },
            {
              name: "TorchServe",
            },
            {
              name: "FastAPI",
            },
          ],
        },
      ],
      dividerText: "Tools in hand—automate workflows with CI/CD for ML next.",
    },
    {
      name: "CI/CD for ML",
      children: [
        {
          name: "Automated Testing",
          children: [
            {
              name: "Pytest",
              preferred: true,
            },
            {
              name: "Great Expectations",
            },
            {
              name: "Model Testing",
            },
          ],
        },
        {
          name: "Pipeline Orchestration",
          children: [
            {
              name: "Kubeflow",
              preferred: true,
            },
            {
              name: "Apache Airflow",
            },
            {
              name: "Prefect",
            },
          ],
        },
        {
          name: "Infrastructure as Code (IaC)",
          children: [
            {
              name: "Terraform",
              preferred: true,
            },
            {
              name: "AWS CloudFormation",
            },
            {
              name: "Ansible",
            },
          ],
        },
      ],
      dividerText:
        "CI/CD pipelines set—leverage cloud and infrastructure for MLOps next.",
    },
    {
      name: "Cloud and Infrastructure",
      children: [
        {
          name: "Cloud Providers",
          children: [
            {
              name: "AWS SageMaker",
              preferred: true,
            },
            {
              name: "Google AI Platform",
            },
            {
              name: "Azure ML",
            },
          ],
        },
        {
          name: "Storage and Compute",
          children: [
            {
              name: "S3/GCS/Azure Blob",
            },
            {
              name: "GPUs",
            },
            {
              name: "Serverless",
            },
          ],
        },
      ],
      dividerText:
        "Cloud infrastructure ready—monitor and ensure observability next.",
    },
    {
      name: "Monitoring and Observability",
      children: [
        {
          name: "Prometheus",
          children: [
            {
              name: "Metrics",
            },
            {
              name: "Alerts",
            },
          ],
        },
        {
          name: "Grafana",
          children: [
            {
              name: "Dashboards",
            },
            {
              name: "Data Sources",
            },
          ],
        },
        {
          name: "Evidently AI",
          children: [
            {
              name: "Data Drift",
            },
            {
              name: "Target Drift",
            },
            {
              name: "Reports",
            },
          ],
        },
        {
          name: "Logging",
          children: [
            {
              name: "ELK Stack",
            },
            {
              name: "Cloud Logging",
            },
          ],
        },
      ],
      dividerText: "Observability secured—ensure security and compliance next.",
    },
    {
      name: "Security and Compliance",
      children: [
        {
          name: "Data Privacy",
          children: [
            {
              name: "GDPR",
            },
            {
              name: "CCPA",
            },
            {
              name: "HIPAA",
            },
            {
              name: "Differential Privacy",
            },
          ],
        },
        {
          name: "Model Security",
          children: [
            {
              name: "Adversarial Attacks",
            },
            {
              name: "Model Encryption",
            },
            {
              name: "Access Control",
            },
          ],
        },
        {
          name: "Explainability & Bias Detection",
          children: [
            {
              name: "SHAP",
            },
            {
              name: "LIME",
            },
            {
              name: "Fairness Metrics",
            },
            {
              name: "Bias Mitigation",
            },
          ],
        },
      ],
    },
    {
      name: "Projects",
      children: [
        {
          name: "ML Model CI/CD",
          children: [
            {
              name: "Data Prep",
            },
            {
              name: "Training",
            },
            {
              name: "Pipeline",
            },
            {
              name: "Deployment",
            },
          ],
        },
        {
          name: "End-to-End ML Pipeline",
          children: [
            {
              name: "Ingestion",
            },
            {
              name: "Feature Store",
            },
            {
              name: "Orchestration",
            },
            {
              name: "Monitoring",
            },
          ],
        },
        {
          name: "Scalable ML Deployment",
          children: [
            {
              name: "Model",
            },
            {
              name: "Kubernetes",
            },
            {
              name: "IaC",
            },
            {
              name: "Load Testing",
            },
          ],
        },
        {
          name: "ML Model Drift Detection",
          children: [
            {
              name: "Baseline",
            },
            {
              name: "Monitoring",
            },
            {
              name: "Alerts",
            },
            {
              name: "Retraining",
            },
          ],
        },
      ],
    },
    {
      name: "Professional Development",
      children: [
        {
          name: "Portfolio Building",
          children: [
            {
              name: "Projects",
            },
            {
              name: "GitHub",
            },
            {
              name: "Blogging",
            },
          ],
        },
        {
          name: "Certifications",
          children: [
            {
              name: "AWS ML Specialty",
              preferred: true,
            },
            {
              name: "Google Professional ML Engineer",
            },
            {
              name: "Databricks MLOps",
            },
          ],
        },
        {
          name: "Community Engagement",
          children: [
            {
              name: "Conferences",
            },
            {
              name: "Open-Source",
            },
            {
              name: "Forums",
            },
          ],
        },
      ],
      dividerText:
        "Career ready—commit to continuous learning for long-term success.",
    },
    {
      name: "Continuous Learning",
    },
  ],
};

export default mlOpsRoadmap;
