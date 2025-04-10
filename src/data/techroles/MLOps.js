const mlopsRoadmap = {
  name: "MLOps Roadmap 2025",
  children: [
    {
      name: "Foundation Skills",
      children: [
        {
          name: "Python Programming",
          children: [
            { name: "Syntax and Basics" },
            { name: "Libraries for ML" },
            { name: "Code Optimization" },
          ],
        },
        {
          name: "Mathematics for ML",
          children: [
            { name: "Linear Algebra Basics" },
            { name: "Calculus for Optimization" },
            { name: "Statistics and Probability" },
          ],
        },
        {
          name: "Software Engineering",
          children: [
            { name: "Code Structure" },
            { name: "Modular Design" },
            { name: "Testing Practices" },
          ],
        },
        {
          name: "ML Fundamentals",
          children: [
            { name: "Learning Types" },
            { name: "Basic Algorithms" },
            { name: "Data Preprocessing" },
          ],
        },
      ],
      dividerText: "Foundation strong—tackle data engineering.",
    },
    {
      name: "Data Engineering",
      children: [
        {
          name: "Database Systems",
          children: [
            { name: "SQL Querying" },
            { name: "NoSQL Structures" },
            { name: "Data Modeling" },
          ],
        },
        {
          name: "Data Processing",
          children: [
            { name: "Spark Setup" },
            { name: "Spark Dataframes" },
            { name: "Spark Streaming" },
          ],
        },
        {
          name: "ETL Pipelines",
          children: [
            { name: "Airflow Basics" },
            { name: "Workflow Scheduling" },
            { name: "DAG Creation" },
          ],
        },
        {
          name: "Data Versioning",
          children: [
            { name: "DVC Setup" },
            { name: "Dataset Tracking" },
            { name: "Pipeline Versioning" },
          ],
        },
      ],
      dividerText: "Data skills set—learn DevOps.",
    },
    {
      name: "DevOps Fundamentals",
      children: [
        {
          name: "Linux Basics",
          children: [
            { name: "Command Line Tools" },
            { name: "File Management" },
            { name: "Shell Scripting" },
          ],
        },
        {
          name: "Version Control",
          children: [
            { name: "Git Commands" },
            { name: "Branch Management" },
            { name: "Collaboration Workflows" },
          ],
        },
        {
          name: "Containerization",
          children: [
            { name: "Docker Images" },
            { name: "Docker Containers" },
            { name: "Kubernetes Clusters" },
          ],
        },
        {
          name: "CI/CD",
          children: [
            { name: "Pipeline Creation" },
            { name: "Automated Builds" },
            { name: "Deployment Triggers" },
          ],
        },
      ],
      dividerText: "DevOps ready—focus on ML engineering.",
    },
    {
      name: "ML Engineering",
      children: [
        {
          name: "Deep Learning",
          children: [
            { name: "TensorFlow Models" },
            { name: "PyTorch Models" },
            { name: "Neural Networks" },
          ],
        },
        {
          name: "Model Practices",
          children: [
            { name: "Development Workflow" },
            { name: "Hyperparameter Tuning" },
            { name: "Code Documentation" },
          ],
        },
        {
          name: "Evaluation",
          children: [
            { name: "Performance Metrics" },
            { name: "Cross-Validation" },
            { name: "Bias Detection" },
          ],
        },
        {
          name: "Explainable AI",
          children: [
            { name: "Feature Importance" },
            { name: "SHAP Values" },
            { name: "Model Interpretation" },
          ],
        },
      ],
      dividerText: "ML engineering solid—explore MLOps core.",
    },
    {
      name: "MLOps Core",
      children: [
        {
          name: "System Design",
          children: [
            { name: "Architecture Planning" },
            { name: "Pipeline Integration" },
            { name: "Scalability Basics" },
          ],
        },
        {
          name: "Deployment",
          children: [
            { name: "Online Serving" },
            { name: "Batch Processing" },
            { name: "Model Endpoints" },
          ],
        },
        {
          name: "Monitoring",
          children: [
            { name: "Drift Detection" },
            { name: "Health Checks" },
            { name: "Logging Setup" },
          ],
        },
        {
          name: "Feature Stores",
          children: [
            { name: "Feature Creation" },
            { name: "Feature Retrieval" },
            { name: "Store Management" },
          ],
        },
      ],
      dividerText: "Core mastered—advance your MLOps.",
    },
    {
      name: "Advanced MLOps",
      children: [
        {
          name: "Scaling Systems",
          children: [
            { name: "Horizontal Scaling" },
            { name: "Vertical Scaling" },
            { name: "Load Optimization" },
          ],
        },
        {
          name: "Automation",
          children: [
            { name: "AutoML Tools" },
            { name: "Pipeline Orchestration" },
            { name: "Retraining Loops" },
          ],
        },
        {
          name: "Distributed Training",
          children: [
            { name: "Cluster Setup" },
            { name: "Data Parallelism" },
            { name: "Model Parallelism" },
          ],
        },
        {
          name: "Governance",
          children: [
            { name: "Regulatory Compliance" },
            { name: "Ethical Guidelines" },
            { name: "Audit Trails" },
          ],
        },
      ],
      dividerText: "Advanced skills gained—use cloud tools.",
    },
    {
      name: "Cloud and Infra",
      children: [
        {
          name: "Cloud Platforms",
          children: [
            { name: "AWS ML Services" },
            { name: "GCP ML Tools" },
            { name: "Azure ML Offerings" },
          ],
        },
        {
          name: "Infra as Code",
          children: [
            { name: "Terraform Scripts" },
            { name: "Resource Provisioning" },
            { name: "Infra Updates" },
          ],
        },
        {
          name: "Serverless",
          children: [
            { name: "Lambda Functions" },
            { name: "Serverless Deployment" },
            { name: "Cost Efficiency" },
          ],
        },
      ],
      dividerText: "Cloud ready—apply practically.",
    },
    {
      name: "Practical Experience",
      children: [
        {
          name: "Projects",
          children: [
            { name: "Data Pipeline Build" },
            { name: "Model Deployment" },
            { name: "Monitoring System" },
          ],
        },
        {
          name: "Open Source",
          children: [
            { name: "Project Contributions" },
            { name: "Code Reviews" },
            { name: "Community Engagement" },
          ],
        },
        {
          name: "Portfolio",
          children: [
            { name: "Project Documentation" },
            { name: "Demo Creation" },
            { name: "Skills Highlight" },
          ],
        },
      ],
    },
  ],
};

export default mlopsRoadmap;
