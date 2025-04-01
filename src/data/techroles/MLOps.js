const mlOpsRoadmap = {
  name: "MLOps Engineer Roadmap 2025",
  description:
    "This structured guide equips aspiring MLOps engineers with essential skills and knowledge, from beginner to advanced levels, aligned with 2025 industry trends. It spans programming, ML fundamentals, CI/CD, cloud platforms, and monitoring. Designed for practical mastery, it ensures readiness to operationalize machine learning models efficiently in production environments.",
  children: [
    {
      name: "Foundational Knowledge",
      description:
        "This section establishes a robust foundation in programming, machine learning, and cloud computing, critical for MLOps workflows. Learners build the technical base to develop, deploy, and manage ML models effectively. It’s the essential starting point in 2025, preparing engineers for the interdisciplinary demands of operationalizing machine learning at scale.",
      children: [
        {
          name: "Programming and Scripting",
          description:
            "Programming and Scripting develop proficiency in languages vital for MLOps, taught with practical examples. This section focuses on coding for ML pipelines, automation, and data handling. It’s a cornerstone skill in 2025, enabling engineers to automate workflows and manage the technical backbone of MLOps processes seamlessly.",
          children: [
            {
              name: "Python",
              preferred: true,
              description:
                "Python, the core language for ML and MLOps, leverages libraries like TensorFlow and Pandas, taught with scripting examples. This section covers data manipulation and model building. It’s a dominant skill in 2025, essential for its versatility and ecosystem in MLOps development and deployment.",
            },
            {
              name: "Bash/Shell Scripting",
              description:
                "Bash/Shell Scripting automates system tasks, taught with commands for pipeline automation. This section covers file handling and process management in Unix. It’s a key skill in 2025, enabling engineers to streamline server operations and MLOps workflows in cloud and local environments.",
            },
            {
              name: "SQL",
              description:
                "SQL queries and manages relational databases, taught with SELECT and JOIN examples. This section focuses on data extraction for ML models. It’s an essential skill in 2025, ensuring engineers can efficiently access and preprocess structured data from enterprise systems for MLOps pipelines.",
            },
          ],
        },
        {
          name: "Machine Learning Fundamentals",
          description:
            "Machine Learning Fundamentals teach core concepts and techniques, taught with Python and Scikit-learn. This section builds a foundation for model development in MLOps. It’s a critical skill in 2025, equipping engineers with the knowledge to design and evaluate ML solutions effectively before operationalizing them.",
          children: [
            {
              name: "Supervised Learning",
              description:
                "Supervised Learning predicts outcomes with labeled data, taught with regression and classification examples. This section covers training models like SVMs. It’s a foundational skill in 2025, enabling MLOps engineers to build predictive models for real-world applications like fraud detection.",
            },
            {
              name: "Unsupervised Learning",
              description:
                "Unsupervised Learning finds patterns in unlabeled data, taught with clustering like k-means. This section covers data exploration techniques. It’s a key skill in 2025, helping engineers preprocess and understand datasets for MLOps tasks like customer segmentation.",
            },
            {
              name: "Feature Engineering",
              description:
                "Feature Engineering enhances model performance via data prep, taught with Pandas. This section covers scaling, encoding, and feature creation. It’s an essential skill in 2025, optimizing data inputs for robust ML models in production-ready MLOps pipelines.",
            },
            {
              name: "Model Evaluation",
              description:
                "Model Evaluation measures quality with metrics like accuracy, taught with cross-validation. This section ensures model reliability in MLOps. It’s a critical skill in 2025, enabling engineers to assess and improve models before and after deployment effectively.",
            },
            {
              name: "Deep Learning",
              description:
                "Deep Learning explores neural networks, taught with TensorFlow for complex tasks. This section covers architectures like CNNs for MLOps. It’s an advanced skill in 2025, powering sophisticated models in production for applications like image recognition or NLP.",
            },
          ],
        },
      ],
      dividerText: "Foundations built—master MLOps principles next.",
    },
    {
      name: "MLOps Principles",
      description:
        "This section masters foundational MLOps principles for operationalizing ML, taught with tools like MLflow. Learners ensure reproducibility and scalability in workflows. It’s a vital skill in 2025, bridging ML development and production to deliver reliable, efficient models in real-world systems.",
      children: [
        {
          name: "Reproducibility",
          description:
            "Reproducibility ensures consistent ML workflows, taught with version control and containers. This section focuses on repeatable experiments across environments. It’s a core skill in 2025, critical for maintaining model integrity and collaboration in MLOps teams deploying production-grade solutions.",
          children: [
            {
              name: "Version Control",
              description:
                "Version Control tracks code with Git and GitHub, taught with branching strategies. This section ensures consistent ML codebases in MLOps. It’s an essential skill in 2025, enabling teamwork and rollback capabilities for reliable model development cycles.",
            },
            {
              name: "Docker",
              preferred: true,
              description:
                "Docker containerizes environments, taught with Dockerfile creation for ML apps. This section ensures dependency consistency in MLOps. It’s a key skill in 2025, standardizing runtime environments for reproducible model training and deployment across platforms.",
            },
            {
              name: "Seed Setting",
              description:
                "Seed Setting fixes random seeds, taught with Python examples for ML training. This section ensures reproducible model outputs. It’s a practical skill in 2025, maintaining consistency in stochastic MLOps processes like neural network initialization.",
            },
          ],
        },
        {
          name: "Model Versioning",
          description:
            "Model Versioning manages ML model versions, taught with MLflow and DVC. This section tracks changes and performance in MLOps. It’s a critical skill in 2025, ensuring engineers can audit, compare, and deploy models systematically in production environments.",
          children: [
            {
              name: "MLflow",
              preferred: true,
              description:
                "MLflow logs model parameters and artifacts, taught with tracking setups. This section manages MLOps lifecycles efficiently. It’s a core skill in 2025, providing a unified platform for versioning and monitoring ML models in production.",
            },
            {
              name: "DVC",
              description:
                "DVC versions data and models with Git, taught with pipeline examples. This section ensures data reproducibility in MLOps. It’s a practical skill in 2025, integrating large datasets and models into version-controlled workflows seamlessly.",
            },
            {
              name: "Git LFS",
              description:
                "Git LFS stores large model files, taught with setup and usage. This section manages heavy ML artifacts in MLOps. It’s a valuable skill in 2025, optimizing storage for deep learning models in Git repositories efficiently.",
            },
          ],
        },
        {
          name: "Scalability",
          description:
            "Scalability designs systems for growing ML workloads, taught with distributed tools. This section ensures MLOps handles increased demand. It’s an essential skill in 2025, enabling engineers to deploy models that scale with data and user needs in production.",
          children: [
            {
              name: "Distributed Training",
              description:
                "Distributed Training scales with Horovod, taught with multi-GPU setups. This section optimizes large model training in MLOps. It’s an advanced skill in 2025, speeding up deep learning for big data applications like autonomous systems.",
            },
            {
              name: "Load Balancing",
              description:
                "Load Balancing distributes inference requests, taught with Kubernetes examples. This section ensures high availability in MLOps. It’s a key skill in 2025, maintaining performance for real-time ML services under heavy traffic loads.",
            },
            {
              name: "Batch Processing",
              description:
                "Batch Processing handles large datasets in chunks, taught with Spark. This section optimizes data workflows in MLOps. It’s a practical skill in 2025, enabling efficient preprocessing and inference for massive datasets in production systems.",
            },
          ],
        },
        {
          name: "Collaboration & Documentation",
          description:
            "Collaboration & Documentation facilitate teamwork, taught with Jupyter and Confluence. This section ensures clear communication in MLOps projects. It’s a vital skill in 2025, fostering collaboration among data scientists, engineers, and stakeholders for successful model deployment.",
          children: [
            {
              name: "Jupyter Notebooks",
              description:
                "Jupyter Notebooks document experiments, taught with code and visuals. This section covers sharing ML workflows in MLOps. It’s a core skill in 2025, enabling reproducible research and communication of model development processes.",
            },
            {
              name: "Markdown",
              description:
                "Markdown writes READMEs and docs, taught with syntax examples. This section documents MLOps projects clearly. It’s a practical skill in 2025, ensuring accessible, well-structured documentation for team and stakeholder understanding.",
            },
            {
              name: "Confluence",
              description:
                "Confluence maintains team wikis, taught with page setups. This section centralizes MLOps project details. It’s a valuable skill in 2025, enhancing knowledge sharing and collaboration in distributed ML teams.",
            },
            {
              name: "Code Comments",
              description:
                "Code Comments annotate scripts, taught with best practices. This section improves MLOps code clarity and maintenance. It’s an essential skill in 2025, ensuring long-term readability and teamwork on complex ML pipelines.",
            },
          ],
        },
      ],
      dividerText:
        "Principles mastered—leverage MLOps tools and technologies next.",
    },
    {
      name: "MLOps Tools and Technologies",
      description:
        "This section provides hands-on experience with tools for ML lifecycle management, taught with MLflow and Kubernetes. Learners streamline experimentation and deployment. It’s a high-demand skill in 2025, equipping engineers with the toolkit to operationalize ML models efficiently in production environments.",
      children: [
        {
          name: "Experiment Tracking",
          description:
            "Experiment Tracking logs and analyzes ML runs, taught with Weights & Biases. This section systematizes model development in MLOps. It’s a critical skill in 2025, enabling engineers to compare experiments and optimize models for deployment systematically.",
          children: [
            {
              name: "MLflow",
              preferred: true,
              description:
                "MLflow tracks experiments, taught with logging parameters and metrics. This section manages MLOps lifecycles end-to-end. It’s a core skill in 2025, offering a unified platform for experiment tracking and model management in production.",
            },
            {
              name: "Weights & Biases",
              description:
                "Weights & Biases visualizes experiments, taught with dashboard setups. This section optimizes ML workflows in MLOps. It’s a modern skill in 2025, providing real-time insights and collaboration for refining models effectively.",
            },
            {
              name: "Neptune.ai",
              description:
                "Neptune.ai manages experiments lightly, taught with tracking examples. This section streamlines MLOps experiment logging. It’s a practical skill in 2025, offering a flexible, user-friendly tool for monitoring ML development progress.",
            },
          ],
        },
        {
          name: "Model Deployment",
          description:
            "Model Deployment puts ML into production, taught with Docker and FastAPI. This section focuses on scalable, real-time inference systems. It’s an essential skill in 2025, ensuring MLOps engineers can deliver models that perform reliably under operational demands.",
          children: [
            {
              name: "Docker",
              preferred: true,
              description:
                "Docker containerizes ML apps, taught with image creation. This section ensures consistent deployment in MLOps. It’s a core skill in 2025, standardizing environments for model serving across development and production stages.",
            },
            {
              name: "Kubernetes",
              preferred: true,
              description:
                "Kubernetes orchestrates ML deployments, taught with pod setups. This section scales inference in MLOps efficiently. It’s a key skill in 2025, managing containerized models for high availability and resilience in production.",
            },
            {
              name: "TensorFlow Serving",
              description:
                "TensorFlow Serving deploys TensorFlow models, taught with configs. This section optimizes inference in MLOps. It’s a practical skill in 2025, enabling fast, scalable serving of deep learning models in production systems.",
            },
            {
              name: "TorchServe",
              description:
                "TorchServe deploys PyTorch models, taught with setup examples. This section supports flexible inference in MLOps. It’s a valuable skill in 2025, streamlining deployment for PyTorch-based models in real-world applications.",
            },
            {
              name: "FastAPI",
              description:
                "FastAPI builds high-performance ML APIs, taught with endpoints. This section covers serving models in MLOps. It’s a modern skill in 2025, enabling rapid, efficient inference APIs for production ML services.",
            },
          ],
        },
      ],
      dividerText: "Tools in hand—automate workflows with CI/CD for ML next.",
    },
    {
      name: "CI/CD for ML",
      description:
        "This section automates ML workflows with CI/CD, taught with Kubeflow and Terraform. Learners integrate testing and deployment seamlessly. It’s a high-value skill in 2025, ensuring MLOps delivers models quickly and reliably, aligning ML development with DevOps principles for production efficiency.",
      children: [
        {
          name: "Automated Testing",
          description:
            "Automated Testing validates ML models and pipelines, taught with Pytest. This section ensures quality in MLOps workflows. It’s an essential skill in 2025, catching issues early and maintaining robust, dependable ML systems in production environments.",
          children: [
            {
              name: "Pytest",
              preferred: true,
              description:
                "Pytest writes unit tests for ML code, taught with examples. This section tests Python scripts in MLOps pipelines. It’s a core skill in 2025, ensuring code reliability and integration in automated ML workflows.",
            },
            {
              name: "Great Expectations",
              description:
                "Great Expectations validates data quality, taught with checks. This section ensures clean inputs for MLOps models. It’s a practical skill in 2025, preventing data-related errors in production ML systems with robust validation.",
            },
            {
              name: "Model Testing",
              description:
                "Model Testing compares predictions to baselines, taught with scripts. This section validates MLOps model performance. It’s a key skill in 2025, ensuring deployed models meet accuracy and reliability standards consistently.",
            },
          ],
        },
        {
          name: "Pipeline Orchestration",
          description:
            "Pipeline Orchestration manages ML workflows, taught with Airflow setups. This section automates complex MLOps tasks end-to-end. It’s a critical skill in 2025, coordinating training, validation, and deployment for efficient, scalable ML operations in production.",
          children: [
            {
              name: "Kubeflow",
              preferred: true,
              description:
                "Kubeflow orchestrates ML on Kubernetes, taught with pipeline examples. This section manages MLOps workflows scalably. It’s an advanced skill in 2025, integrating ML with cloud-native orchestration for robust production systems.",
            },
            {
              name: "Apache Airflow",
              description:
                "Apache Airflow schedules ML tasks, taught with DAGs. This section automates workflows in MLOps pipelines. It’s a practical skill in 2025, ensuring timely execution and monitoring of ML processes in production.",
            },
            {
              name: "Prefect",
              description:
                "Prefect offers modern orchestration, taught with flow setups. This section streamlines MLOps task management. It’s a modern skill in 2025, providing a flexible, Python-native tool for efficient ML workflow automation.",
            },
          ],
        },
        {
          name: "Infrastructure as Code (IaC)",
          description:
            "IaC provisions ML infrastructure programmatically, taught with Terraform. This section automates MLOps resource setup. It’s an essential skill in 2025, ensuring consistent, scalable environments for ML training and deployment in cloud-based systems.",
          children: [
            {
              name: "Terraform",
              preferred: true,
              description:
                "Terraform defines cloud resources, taught with HCL for AWS. This section provisions MLOps infra declaratively. It’s a core skill in 2025, enabling reproducible, multi-cloud setups for ML workloads efficiently.",
            },
            {
              name: "AWS CloudFormation",
              description:
                "AWS CloudFormation manages resources, taught with JSON/YAML. This section automates AWS infra for MLOps. It’s a practical skill in 2025, streamlining deployment in AWS-centric ML production environments.",
            },
            {
              name: "Ansible",
              description:
                "Ansible automates server configs, taught with playbooks. This section supports MLOps infra management. It’s a valuable skill in 2025, ensuring consistent server setups for ML pipelines with minimal overhead.",
            },
          ],
        },
      ],
      dividerText:
        "CI/CD pipelines set—leverage cloud and infrastructure for MLOps next.",
    },
    {
      name: "Cloud and Infrastructure",
      description:
        "This section leverages cloud platforms for scalable ML, taught with AWS SageMaker. Learners manage storage and compute for MLOps. It’s a high-demand skill in 2025, enabling engineers to deploy and scale ML solutions efficiently in cloud-native production environments.",
      children: [
        {
          name: "Cloud Providers",
          description:
            "Cloud Providers offer ML services, taught with Azure ML setups. This section focuses on development and deployment in MLOps. It’s a foundational skill in 2025, utilizing leading platforms to operationalize ML models at scale effectively.",
          children: [
            {
              name: "AWS SageMaker",
              preferred: true,
              description:
                "AWS SageMaker manages ML workflows, taught with training examples. This section covers end-to-end MLOps on AWS. It’s a top skill in 2025, leveraging AWS’s power for scalable, production-ready ML solutions.",
            },
            {
              name: "Google AI Platform",
              description:
                "Google AI Platform supports ML, taught with GCP tools. This section covers training and deployment in MLOps. It’s a key skill in 2025, tapping Google’s AI expertise for efficient cloud-based ML operations.",
            },
            {
              name: "Azure ML",
              description:
                "Azure ML offers MLOps features, taught with studio setups. This section manages ML lifecycles in Azure. It’s a valuable skill in 2025, integrating with enterprise systems for robust, scalable ML deployments.",
            },
          ],
        },
        {
          name: "Storage and Compute",
          description:
            "Storage and Compute manage resources, taught with S3 and GPUs. This section optimizes MLOps data and processing needs. It’s an essential skill in 2025, ensuring efficient infrastructure for training and inference in cloud-based ML systems.",
          children: [
            {
              name: "S3/GCS/Azure Blob",
              description:
                "S3, GCS, and Azure Blob store datasets, taught with configs. This section manages large-scale data in MLOps. It’s a core skill in 2025, providing durable, accessible storage for ML pipelines across clouds.",
            },
            {
              name: "GPUs",
              description:
                "GPUs accelerate deep learning, taught with AWS EC2 setups. This section covers leveraging GPU instances in MLOps. It’s a practical skill in 2025, speeding up training for complex models in production.",
            },
            {
              name: "Serverless",
              description:
                "Serverless runs inference with Lambda, taught with setups. This section optimizes MLOps cost and scalability. It’s a modern skill in 2025, enabling lightweight, event-driven ML deployment in cloud environments.",
            },
          ],
        },
      ],
      dividerText:
        "Cloud infrastructure ready—monitor and ensure observability next.",
    },
    {
      name: "Monitoring and Observability",
      description:
        "This section tracks ML system health in production, taught with Prometheus and Evidently AI. Learners ensure performance and reliability. It’s a critical skill in 2025, providing visibility into MLOps systems to detect issues and maintain model effectiveness over time.",
      children: [
        {
          name: "Prometheus",
          description:
            "Prometheus monitors infrastructure and ML metrics, taught with setups. This section tracks system performance in MLOps. It’s a core skill in 2025, offering time-series data for proactive management of production ML environments.",
          children: [
            {
              name: "Metrics",
              description:
                "Metrics collect latency and CPU data, taught with Prometheus queries. This section monitors MLOps system health. It’s an essential skill in 2025, ensuring detailed insights into infrastructure and model performance.",
            },
            {
              name: "Alerts",
              description:
                "Alerts set thresholds for downtime, taught with Prometheus rules. This section ensures rapid MLOps response. It’s a practical skill in 2025, maintaining uptime and reliability in production ML systems.",
            },
          ],
        },
        {
          name: "Grafana",
          description:
            "Grafana visualizes monitoring data, taught with dashboards. This section enhances MLOps observability with real-time views. It’s a key skill in 2025, providing intuitive, actionable insights into ML system performance for stakeholders.",
          children: [
            {
              name: "Dashboards",
              description:
                "Dashboards display KPIs, taught with Grafana setups. This section visualizes MLOps metrics effectively. It’s a core skill in 2025, enabling real-time monitoring and decision-making for ML operations.",
            },
            {
              name: "Data Sources",
              description:
                "Data Sources integrate with Prometheus, taught with configs. This section connects logs to MLOps dashboards. It’s a practical skill in 2025, unifying observability data for comprehensive system analysis.",
            },
          ],
        },
        {
          name: "Evidently AI",
          description:
            "Evidently AI monitors model performance, taught with drift detection. This section ensures MLOps model reliability. It’s an advanced skill in 2025, identifying and addressing degradation in production ML systems proactively.",
          children: [
            {
              name: "Data Drift",
              description:
                "Data Drift detects input shifts, taught with Evidently setups. This section monitors MLOps data consistency. It’s a key skill in 2025, ensuring models adapt to changing data distributions effectively.",
            },
            {
              name: "Target Drift",
              description:
                "Target Drift tracks prediction changes, taught with reports. This section monitors MLOps model outputs. It’s a practical skill in 2025, maintaining accuracy as real-world conditions evolve.",
            },
            {
              name: "Reports",
              description:
                "Reports analyze drift, taught with Evidently outputs. This section documents MLOps model health. It’s a valuable skill in 2025, providing actionable insights for model maintenance.",
            },
          ],
        },
        {
          name: "Logging",
          description:
            "Logging tracks behavior, taught with ELK and cloud tools. This section enhances MLOps observability with detailed records. It’s an essential skill in 2025, enabling engineers to debug and audit ML systems in production effectively.",
          children: [
            {
              name: "ELK Stack",
              description:
                "ELK Stack (Elasticsearch, Logstash, Kibana) logs data, taught with setups. This section analyzes MLOps logs. It’s a core skill in 2025, offering scalable logging for system troubleshooting.",
            },
            {
              name: "Cloud Logging",
              description:
                "Cloud Logging uses CloudWatch, taught with configs. This section tracks MLOps in cloud platforms. It’s a practical skill in 2025, integrating logging with cloud-native tools for real-time insights.",
            },
          ],
        },
      ],
      dividerText: "Observability secured—ensure security and compliance next.",
    },
    {
      name: "Security and Compliance",
      description:
        "This section secures MLOps workflows, taught with GDPR and SHAP. Learners meet regulatory and ethical standards. It’s a vital skill in 2025, ensuring trust and legality in ML deployments amid growing data privacy and fairness demands in production systems.",
      children: [
        {
          name: "Data Privacy",
          description:
            "Data Privacy protects sensitive info, taught with compliance strategies. This section secures MLOps pipelines from breaches. It’s a critical skill in 2025, meeting legal requirements and maintaining user trust in ML systems handling personal data.",
          children: [
            {
              name: "GDPR",
              description:
                "GDPR ensures EU data protection, taught with anonymization. This section covers consent in MLOps. It’s a key skill in 2025, complying with strict privacy laws for global ML deployments.",
            },
            {
              name: "CCPA",
              description:
                "CCPA protects California data rights, taught with deletion processes. This section secures MLOps user data. It’s an essential skill in 2025, meeting U.S. privacy standards for ML applications.",
            },
            {
              name: "HIPAA",
              description:
                "HIPAA secures health data, taught with encryption. This section protects MLOps in healthcare. It’s a practical skill in 2025, ensuring compliance for medical ML systems.",
            },
            {
              name: "Differential Privacy",
              description:
                "Differential Privacy adds noise, taught with implementations. This section protects individual data in MLOps. It’s an advanced skill in 2025, enhancing privacy in ML analytics.",
            },
          ],
        },
        {
          name: "Model Security",
          description:
            "Model Security safeguards models from attacks, taught with adversarial testing. This section protects MLOps assets. It’s a key skill in 2025, ensuring model integrity and reliability against threats in production environments.",
          children: [
            {
              name: "Adversarial Attacks",
              description:
                "Adversarial Attacks test robustness, taught with examples. This section secures MLOps models from manipulation. It’s an advanced skill in 2025, protecting against malicious inputs in AI systems.",
            },
            {
              name: "Model Encryption",
              description:
                "Model Encryption secures weights, taught with tools. This section protects MLOps models in transit. It’s a practical skill in 2025, safeguarding intellectual property and data.",
            },
            {
              name: "Access Control",
              description:
                "Access Control restricts endpoints, taught with IAM. This section secures MLOps APIs. It’s an essential skill in 2025, ensuring only authorized access to deployed models.",
            },
          ],
        },
        {
          name: "Explainability & Bias Detection",
          description:
            "Explainability & Bias Detection ensure fair models, taught with SHAP. This section enhances MLOps transparency. It’s a critical skill in 2025, meeting ethical and regulatory demands for interpretable, unbiased ML systems.",
          children: [
            {
              name: "SHAP",
              description:
                "SHAP explains features, taught with Python setups. This section interprets MLOps model outputs. It’s a core skill in 2025, clarifying predictions for stakeholders.",
            },
            {
              name: "LIME",
              description:
                "LIME interprets local predictions, taught with examples. This section enhances MLOps explainability. It’s a practical skill in 2025, providing granular insights into model decisions.",
            },
            {
              name: "Fairness Metrics",
              description:
                "Fairness Metrics measure bias, taught with indicators. This section ensures equitable MLOps models. It’s a key skill in 2025, validating fairness in ML applications.",
            },
            {
              name: "Bias Mitigation",
              description:
                "Bias Mitigation adjusts models, taught with techniques. This section reduces MLOps bias. It’s an advanced skill in 2025, ensuring ethical AI deployment.",
            },
          ],
        },
      ],
    },
    {
      name: "Projects",
      description:
        "This section applies MLOps skills to hands-on projects, taught with CI/CD and monitoring setups. Learners build practical ML systems. It’s a culminating skill in 2025, showcasing expertise for portfolios and real-world MLOps engineering roles.",
      children: [
        {
          name: "ML Model CI/CD",
          description:
            "Automate model deployment with CI/CD, taught with GitHub Actions. This project builds an end-to-end MLOps pipeline. It’s a practical skill in 2025, demonstrating automation and deployment proficiency for production ML systems.",
          children: [
            {
              name: "Data Prep",
              description:
                "Ingest and preprocess data, taught with Pandas on CSV. This section prepares inputs for MLOps pipelines. It’s a core skill in 2025, ensuring clean data for model training.",
            },
            {
              name: "Training",
              description:
                "Train a model with Scikit-learn, taught with examples. This section builds ML models for MLOps. It’s an essential skill in 2025, laying the groundwork for deployment.",
            },
            {
              name: "Pipeline",
              description:
                "Set up GitHub Actions for CI/CD, taught with YAML. This section automates MLOps builds. It’s a key skill in 2025, streamlining model delivery.",
            },
            {
              name: "Deployment",
              description:
                "Serve with FastAPI on Docker, taught with setups. This section deploys MLOps models. It’s a practical skill in 2025, ensuring production-ready inference.",
            },
          ],
        },
        {
          name: "End-to-End ML Pipeline",
          description:
            "Build a complete ML workflow, taught with Airflow. This project integrates ingestion to monitoring in MLOps. It’s an advanced skill in 2025, showcasing full lifecycle management for scalable ML systems.",
          children: [
            {
              name: "Ingestion",
              description:
                "Fetch data from S3, taught with boto3. This section starts MLOps pipelines with data. It’s a core skill in 2025, handling cloud data sources.",
            },
            {
              name: "Feature Store",
              description:
                "Use Feast for features, taught with setups. This section manages MLOps data features. It’s a key skill in 2025, optimizing feature reuse.",
            },
            {
              name: "Orchestration",
              description:
                "Schedule with Airflow, taught with DAGs. This section automates MLOps workflows. It’s a practical skill in 2025, ensuring timely execution.",
            },
            {
              name: "Monitoring",
              description:
                "Track with Prometheus, taught with metrics. This section monitors MLOps performance. It’s an essential skill in 2025, maintaining system health.",
            },
          ],
        },
        {
          name: "Scalable ML Deployment",
          description:
            "Deploy a model at scale, taught with Kubernetes. This project handles high-traffic MLOps inference. It’s an advanced skill in 2025, ensuring scalability and resilience inproduction ML systems.",
          children: [
            {
              name: "Model",
              description:
                "Train an image classifier, taught with TensorFlow. This section builds scalable MLOps models. It’s a core skill in 2025, preparing complex models.",
            },
            {
              name: "Kubernetes",
              description:
                "Deploy with K8s auto-scaling, taught with configs. This section scales MLOps inference. It’s a key skill in 2025, managing high demand.",
            },
            {
              name: "IaC",
              description:
                "Provision with Terraform, taught with AWS. This section automates MLOps infra. It’s a practical skill in 2025, ensuring scalable setups.",
            },
            {
              name: "Load Testing",
              description:
                "Simulate traffic with Locust, taught with scripts. This section tests MLOps scalability. It’s an essential skill in 2025, validating performance.",
            },
          ],
        },
        {
          name: "ML Model Drift Detection",
          description:
            "Monitor and address drift, taught with Evidently AI. This project ensures MLOps model reliability. It’s a critical skill in 2025, maintaining accuracy in evolving conditions.",
          children: [
            {
              name: "Baseline",
              description:
                "Train and baseline a model, taught with Python. This section sets MLOps standards. It’s a core skill in 2025, establishing benchmarks.",
            },
            {
              name: "Monitoring",
              description:
                "Detect drift with Evidently, taught with setups. This section tracks MLOps changes. It’s a key skill in 2025, identifying issues.",
            },
            {
              name: "Alerts",
              description:
                "Set Grafana alerts, taught with configs. This section notifies MLOps drift. It’s a practical skill in 2025, ensuring response.",
            },
            {
              name: "Retraining",
              description:
                "Trigger retraining, taught with pipelines. This section updates MLOps models. It’s an essential skill in 2025, maintaining relevance.",
            },
          ],
        },
      ],
    },
    {
      name: "Professional Development",
      description:
        "This section prepares for an MLOps career, taught with portfolio and certification strategies. Learners build skills and networks. It’s a strategic skill in 2025, enhancing employability and credibility in the competitive MLOps job market with practical experience.",
      children: [
        {
          name: "Portfolio Building",
          description:
            "Portfolio Building showcases MLOps expertise, taught with project documentation. This section highlights practical skills for employers. It’s a critical skill in 2025, proving hands-on ability in operationalizing ML through tangible, impressive work samples.",
          children: [
            {
              name: "Projects",
              description:
                "Document 2-3 projects, taught with demos. This section builds an MLOps portfolio. It’s a core skill in 2025, showcasing real-world applications.",
            },
            {
              name: "GitHub",
              description:
                "Host repos with READMEs, taught with setups. This section shares MLOps code publicly. It’s a key skill in 2025, enhancing visibility.",
            },
            {
              name: "Blogging",
              description:
                "Write about MLOps, taught with examples. This section shares expertise online. It’s a practical skill in 2025, building thought leadership.",
            },
          ],
        },
        {
          name: "Certifications",
          description:
            "Certifications validate MLOps skills, taught with prep strategies. This section boosts credentials for career growth. It’s an essential skill in 2025, proving proficiency to employers in leading cloud and ML platforms.",
          children: [
            {
              name: "AWS ML Specialty",
              preferred: true,
              description:
                "AWS ML Specialty certifies SageMaker skills, taught with exam prep. This section validates MLOps on AWS. It’s a top skill in 2025, enhancing AWS expertise.",
            },
            {
              name: "Google Professional ML Engineer",
              description:
                "Google ML Engineer masters GCP, taught with prep. This section certifies MLOps on Google Cloud. It’s a key skill in 2025, proving GCP skills.",
            },
            {
              name: "Databricks MLOps",
              description:
                "Databricks MLOps learns workflows, taught with prep. This section validates Databricks skills. It’s a valuable skill in 2025, specializing in big data ML.",
            },
          ],
        },
        {
          name: "Community Engagement",
          description:
            "Community Engagement connects with MLOps peers, taught with event tips. This section builds networks and knowledge. It’s a strategic skill in 2025, fostering collaboration and staying current in the MLOps ecosystem.",
          children: [
            {
              name: "Conferences",
              description:
                "Attend NeurIPS or MLOps World, taught with tips. This section networks in MLOps. It’s a core skill in 2025, connecting with trends.",
            },
            {
              name: "Open-Source",
              description:
                "Contribute to MLflow, taught with PRs. This section engages MLOps community. It’s a key skill in 2025, enhancing tools and visibility.",
            },
            {
              name: "Forums",
              description:
                "Join Reddit or Slack, taught with participation. This section collaborates in MLOps. It’s a practical skill in 2025, sharing knowledge.",
            },
          ],
        },
      ],
      dividerText:
        "Career ready—commit to continuous learning for long-term success.",
    },
    {
      name: "Continuous Learning",
      description:
        "Continuous Learning keeps MLOps engineers updated, taught via resources and trends. This section ensures adaptability in 2025’s evolving field. It’s a lifelong skill, maintaining competitiveness as new tools and techniques shape ML operations.",
    },
  ],
};

export default mlOpsRoadmap;
