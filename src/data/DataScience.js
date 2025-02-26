const dataScienceRoadmap = {
  name: "Data Science Roadmap 2025",
  description:
    "This comprehensive roadmap guides learners through essential data science skills and technologies for 2025, from foundational mathematics to advanced AI and big data techniques. It covers programming, machine learning, data engineering, and emerging trends like NLP and MLOps, with practical tools and projects. Designed for all levels, it ensures mastery to solve real-world problems in a data-driven era.",
  children: [
    {
      name: "Foundational Knowledge",
      description:
        "Build a strong foundation in mathematics, programming, and data handling, taught with examples like matrix operations in NumPy or data cleaning with Pandas. This section equips you with the theoretical and practical skills to manipulate data, understand algorithms, and derive insights—crucial in 2025 for excelling in the interdisciplinary field of data science.",
      children: [
        {
          name: "Mathematics and Statistics",
          description:
            "Master the mathematical and statistical foundations of data science, taught with Python examples like PCA in Scikit-learn or hypothesis tests in Statsmodels. This section provides the quantitative tools for 2025 analysts to model data, optimize algorithms, and interpret results with precision across industries like tech and healthcare.",
          children: [
            {
              name: "Linear Algebra",
              description:
                "Learn vectors, matrices, and transformations with NumPy examples like matrix multiplication or SVD. A 2025 skill for machine learning and data transformations.",
            },
            {
              name: "Calculus",
              description:
                "Understand derivatives and integrals with SymPy examples like gradient descent. Key in 2025 for optimizing neural networks and models.",
            },
            {
              name: "Probability and Statistics",
              description:
                "Study distributions and tests with SciPy examples like binomial or t-tests. Essential in 2025 for data inference and uncertainty modeling.",
            },
            {
              name: "Bayesian Statistics",
              description:
                "Apply Bayesian methods with PyMC3 examples for probabilistic modeling. A 2025 skill for advanced inference and decision-making.",
            },
          ],
        },
        {
          name: "Programming Skills",
          description:
            "Develop proficiency in data science programming with Python, R, and SQL, taught with examples like Pandas dataframes, R visualizations, or SQL queries. A 2025 cornerstone skill, this section enables you to process, analyze, and manage data efficiently, adapting to modern tools and workflows seamlessly.",
          children: [
            {
              name: "Python",
              preferred: true,
              description:
                "Master Python with Pandas and Scikit-learn, taught with data analysis projects. Preferred in 2025 for its versatility and ecosystem (Stack Overflow, 2023).",
            },
            {
              name: "R",
              description:
                "Use R with ggplot2 and dplyr for stats and visuals, taught with EDA examples. Key in 2025 for statistical research.",
            },
            {
              name: "SQL",
              description:
                "Query with SQL in MySQL or PostgreSQL, taught with JOIN examples. A 2025 skill for data retrieval.",
            },
            {
              name: "Julia",
              description:
                "Learn Julia for high-performance computing, taught with numerical examples. A 2025 skill for speed-focused tasks.",
            },
          ],
        },
        {
          name: "Data Manipulation and Analysis",
          description:
            "Manipulate and analyze data with Python tools like Pandas and NumPy, taught with examples cleaning datasets or computing stats. A 2025 skill to transform raw data into insights, this section ensures data quality and readiness for modeling and visualization workflows efficiently.",
          children: [
            {
              name: "Pandas",
              preferred: true,
              description:
                "Use Pandas for DataFrames, taught with filtering and merging examples. Preferred in 2025 for its data handling power.",
            },
            {
              name: "NumPy",
              description:
                "Perform array operations with NumPy, taught with linear algebra examples. A 2025 skill for numerical computations.",
            },
            {
              name: "Data Cleaning",
              description:
                "Clean data with OpenRefine or Pandas, taught with examples fixing missing values. Essential in 2025 for quality insights.",
            },
            {
              name: "Data Wrangling",
              description:
                "Wrangle data with Python’s tidyr or dplyr, taught with reshaping examples. Key in 2025 for preprocessing.",
            },
          ],
        },
      ],
      dividerText: "Foundation built—dive into machine learning and modeling.",
    },
    {
      name: "Machine Learning and Modeling",
      description:
        "Explore machine learning algorithms and modeling, taught with Scikit-learn examples like regression or neural networks in TensorFlow. This section builds 2025 skills to predict, classify, and uncover patterns, enabling you to create intelligent systems for industries like finance, healthcare, and tech with precision and scalability.",
      children: [
        {
          name: "Supervised Learning",
          description:
            "Train models on labeled data with Scikit-learn, taught with examples like predicting house prices or spam detection. A 2025 skill for forecasting and classification, this section drives practical solutions across domains with reliable, data-driven predictions.",
          children: [
            {
              name: "Regression",
              description:
                "Model continuous outcomes with linear regression in Python, taught with sales examples. A 2025 skill for numerical predictions.",
            },
            {
              name: "Classification",
              description:
                "Classify with SVMs or k-NN in Scikit-learn, taught with churn examples. Key in 2025 for labeling tasks.",
            },
            {
              name: "Logistic Regression",
              description:
                "Use logistic regression for binary outcomes, taught with examples in R. A 2025 skill for classification.",
            },
          ],
        },
        {
          name: "Unsupervised Learning",
          description:
            "Uncover patterns in unlabeled data with clustering and PCA, taught with examples segmenting customers in Python. A 2025 skill for exploratory analysis, this section reveals hidden structures in complex datasets across industries like marketing and bioinformatics.",
          children: [
            {
              name: "Clustering",
              description:
                "Group data with k-means in Scikit-learn, taught with customer examples. A 2025 skill for segmentation.",
            },
            {
              name: "Dimensionality Reduction",
              description:
                "Reduce features with PCA in Python, taught with visualization examples. Key in 2025 for efficiency.",
            },
            {
              name: "Anomaly Detection",
              description:
                "Detect outliers with Isolation Forest, taught with fraud examples. A 2025 skill for rare events.",
            },
          ],
        },
        {
          name: "Deep Learning",
          description:
            "Leverage neural networks with TensorFlow and PyTorch, taught with examples like image recognition or text prediction. A 2025 skill for complex tasks, this section drives AI innovations in autonomous systems, NLP, and more with advanced architectures.",
          children: [
            {
              name: "Neural Networks",
              description:
                "Build neural nets with TensorFlow, taught with classification examples. A 2025 skill for nonlinear modeling.",
            },
            {
              name: "Convolutional Neural Networks (CNNs)",
              description:
                "Process images with CNNs in PyTorch, taught with detection examples. Key in 2025 for vision tasks.",
            },
            {
              name: "Recurrent Neural Networks (RNNs)",
              description:
                "Analyze sequences with RNNs in TensorFlow, taught with time-series examples. A 2025 skill for temporal data.",
            },
            {
              name: "Transformers",
              description:
                "Use transformers with Hugging Face, taught with NLP examples. A 2025 skill for advanced language tasks.",
            },
            {
              name: "Generative Models",
              description:
                "Create data with GANs in PyTorch, taught with image generation examples. A 2025 skill for creativity.",
            },
          ],
        },
        {
          name: "Model Evaluation and Validation",
          description:
            "Assess and validate models with metrics and techniques, taught with Scikit-learn examples like k-fold validation or ROC curves. A 2025 skill for reliability, this section ensures models generalize well, avoiding pitfalls like overfitting in real-world data science applications.",
          children: [
            {
              name: "Cross-Validation",
              description:
                "Test stability with k-fold in Python, taught with examples. A 2025 skill for robust evaluation.",
            },
            {
              name: "Metrics",
              description:
                "Measure with accuracy and F1-score in Scikit-learn, taught with examples. Key in 2025 for performance.",
            },
            {
              name: "Bias-Variance Tradeoff",
              description:
                "Balance complexity with examples in Python, taught with diagnostics. A 2025 skill for model optimization.",
            },
            {
              name: "Hyperparameter Tuning",
              description:
                "Tune with GridSearchCV, taught with examples in Scikit-learn. A 2025 skill for model enhancement.",
            },
          ],
        },
      ],
      dividerText:
        "Modeling mastered—scale up with data engineering and big data.",
    },
    {
      name: "Data Engineering and Big Data",
      description:
        "Manage and process large-scale data with tools like Spark and AWS, taught with examples building ETL pipelines or querying data lakes. A 2025 skill for handling massive datasets, this section equips you to engineer robust data workflows for analytics in industries like tech and finance.",
      children: [
        {
          name: "Data Warehousing",
          description:
            "Organize data for analytics with warehouses and lakes, taught with examples like Snowflake queries or S3 setups. A 2025 skill for business intelligence, this section ensures efficient storage and access for strategic insights in enterprise data ecosystems.",
          children: [
            {
              name: "ETL Processes",
              description:
                "Build ETL pipelines with Apache Airflow, taught with examples extracting sales data. A 2025 skill for data flow.",
            },
            {
              name: "Data Lakes",
              description:
                "Manage lakes with AWS S3, taught with raw data examples. Key in 2025 for flexible storage.",
            },
            {
              name: "Data Modeling",
              description:
                "Model with star schemas in Snowflake, taught with examples. A 2025 skill for structured analytics.",
            },
          ],
        },
        {
          name: "Big Data Technologies",
          description:
            "Process massive datasets with Hadoop and Kafka, taught with examples analyzing logs or streaming IoT data in PySpark. A 2025 skill for scalability, this section tackles big data challenges in real-time applications like fraud detection or social media analytics.",
          children: [
            {
              name: "Apache Hadoop",
              description:
                "Use Hadoop HDFS and MapReduce, taught with cluster examples. A 2025 skill for distributed data.",
            },
            {
              name: "Apache Spark",
              preferred: true,
              description:
                "Process with Spark and PySpark, taught with log examples. Preferred in 2025 for its speed (Databricks, 2023).",
            },
            {
              name: "Kafka",
              description:
                "Stream with Kafka, taught with real-time examples. A 2025 skill for live data feeds.",
            },
            {
              name: "Flink",
              description:
                "Analyze streams with Flink, taught with examples. A 2025 skill for advanced streaming.",
            },
          ],
        },
        {
          name: "Cloud Platforms",
          description:
            "Leverage cloud platforms like AWS and Azure, taught with examples deploying Redshift or Synapse Analytics for data tasks. A 2025 skill for scalable infrastructure, this section meets the demand for cloud-native data science in cost-effective, agile environments.",
          children: [
            {
              name: "AWS",
              preferred: true,
              description:
                "Use AWS S3 and SageMaker, taught with examples. Preferred in 2025 for market lead (Synergy, 2023).",
            },
            {
              name: "Google Cloud Platform",
              description:
                "Deploy BigQuery on GCP, taught with query examples. A 2025 skill for AI integration.",
            },
            {
              name: "Microsoft Azure",
              description:
                "Leverage Azure Synapse, taught with analytics examples. Key in 2025 for enterprise tools.",
            },
            {
              name: "Snowflake",
              description:
                "Query with Snowflake on cloud, taught with examples. A 2025 skill for multi-cloud warehousing.",
            },
          ],
        },
      ],
      dividerText: "Big data scaled—explore specialized areas and trends.",
    },
    {
      name: "Specialized Areas and Emerging Trends",
      description:
        "Stay ahead with NLP, XAI, AutoML, and visualization, taught with examples like sentiment analysis in Hugging Face or dashboards in Power BI. A 2025 skill set to innovate, this section ensures you master niche areas and emerging trends shaping the future of data science.",
      children: [
        {
          name: "Natural Language Processing (NLP)",
          description:
            "Analyze text with NLP tools like Hugging Face, taught with examples classifying reviews or translating text. A 2025 skill for language insights, this section powers chatbots, sentiment analysis, and more in tech and customer-focused industries.",
          children: [
            {
              name: "Sentiment Analysis",
              description:
                "Determine emotions with NLTK, taught with review examples. A 2025 skill for customer insights.",
            },
            {
              name: "Language Modeling",
              description:
                "Predict text with PyTorch, taught with autocomplete examples. Key in 2025 for generation.",
            },
            {
              name: "Transformers and BERT",
              preferred: true,
              description:
                "Fine-tune BERT with Hugging Face, taught with NLP examples. Preferred in 2025 for top performance.",
            },
            {
              name: "Text Preprocessing",
              description:
                "Clean text with spaCy, taught with tokenization examples. A 2025 skill for NLP prep.",
            },
          ],
        },
        {
          name: "Explainable AI (XAI)",
          description:
            "Make AI transparent with XAI tools like SHAP, taught with examples explaining model predictions. A 2025 skill for trust and compliance, this section ensures stakeholders understand AI decisions in regulated fields like healthcare and finance.",
          children: [
            {
              name: "Model Interpretability",
              description:
                "Reveal predictions with feature importance, taught with examples in Python. A 2025 skill for clarity.",
            },
            {
              name: "LIME and SHAP",
              preferred: true,
              description:
                "Explain with SHAP in Python, taught with examples. Preferred in 2025 for robust XAI (arXiv, 2023).",
            },
            {
              name: "Feature Contribution",
              description:
                "Analyze contributions with ELI5, taught with examples. A 2025 skill for model insights.",
            },
          ],
        },
        {
          name: "AutoML and MLOps",
          description:
            "Automate and operationalize ML with AutoKeras and MLflow, taught with examples building pipelines or automating models. A 2025 skill for efficiency, this section streamlines development and deployment for scalable, reliable AI solutions in production environments.",
          children: [
            {
              name: "AutoKeras",
              description:
                "Automate neural nets with AutoKeras, taught with examples in Python. A 2025 skill for quick ML.",
            },
            {
              name: "H2O.ai",
              description:
                "Use H2O.ai for AutoML, taught with regression examples. A 2025 skill for fast modeling.",
            },
            {
              name: "MLOps Practices",
              preferred: true,
              description:
                "Deploy with MLflow, taught with CI/CD examples. Preferred in 2025 for production ML.",
            },
            {
              name: "Model Monitoring",
              description:
                "Monitor with Prometheus, taught with examples. A 2025 skill for ML maintenance.",
            },
          ],
        },
        {
          name: "Data Visualization",
          description:
            "Create impactful visuals with Tableau and Seaborn, taught with examples like sales dashboards or heatmaps. A 2025 skill to communicate insights, this section blends art and science to make data accessible and actionable for stakeholders across industries.",
          children: [
            {
              name: "Data Visualization Tools",
              preferred: true,
              description:
                "Use Tableau and Seaborn, taught with dashboard examples. Preferred in 2025 for versatility.",
            },
            {
              name: "Dashboard Development",
              description:
                "Build dashboards in Power BI, taught with real-time examples. A 2025 skill for monitoring.",
            },
            {
              name: "Storytelling with Data",
              description:
                "Craft narratives with Plotly, taught with examples. A 2025 skill for impactful insights.",
            },
            {
              name: "Interactive Visuals",
              description:
                "Create with Dash, taught with Python examples. A 2025 skill for dynamic displays.",
            },
          ],
        },
      ],
      dividerText: "Trends explored—apply skills in final projects.",
    },
    {
      name: "Final Projects",
      description:
        "Synthesize your data science skills into real-world projects like predictive models or NLP dashboards, taught with examples using Spark or TensorFlow. A 2025 capstone skill, this section builds a portfolio to showcase expertise, critical for career advancement or solving industry challenges effectively.",
    },
  ],
};

export default dataScienceRoadmap;
