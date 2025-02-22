const dataScienceRoadmap = {
  name: "Data Science Roadmap 2025",
  description:
    "A comprehensive guide to essential data science skills and technologies for 2025, from beginner to advanced levels.",
  children: [
    {
      name: "Foundational Knowledge",
      description:
        "Establish a strong base in mathematics, programming, and data handling.",
      children: [
        {
          name: "Mathematics and Statistics",
          description:
            "Understand the mathematical concepts underpinning data science.",
          children: [
            {
              name: "Linear Algebra",
              description:
                "Study of vectors, matrices, and linear transformations.",
            },
            {
              name: "Calculus",
              description:
                "Focus on differentiation and integration relevant to optimization.",
            },
            {
              name: "Probability and Statistics",
              description:
                "Learn about distributions, statistical tests, and data variability.",
            },
          ],
        },
        {
          name: "Programming Skills",
          description:
            "Develop proficiency in programming languages commonly used in data science.",
          children: [
            {
              name: "Python",
              description:
                "Primary language for data science with extensive libraries.",
            },
            {
              name: "R",
              description: "Statistical computing and graphics language.",
            },
            {
              name: "SQL",
              description:
                "Language for managing and querying relational databases.",
            },
          ],
        },
        {
          name: "Data Manipulation and Analysis",
          description:
            "Learn to handle, process, and analyze data effectively.",
          children: [
            {
              name: "Pandas",
              description: "Python library for data manipulation and analysis.",
            },
            {
              name: "NumPy",
              description: "Library for numerical computations in Python.",
            },
            {
              name: "Data Cleaning",
              description:
                "Techniques for handling missing or inconsistent data.",
            },
          ],
        },
      ],
      dividerText:
        "Understand machine learning algorithms, model evaluation, and deep learning architectures.",
    },
    {
      name: "Machine Learning and Modeling",
      description:
        "Dive into algorithms, model building, and advanced machine learning techniques.",
      children: [
        {
          name: "Supervised Learning",
          description:
            "Learn algorithms that make predictions based on labeled data.",
          children: [
            {
              name: "Regression",
              description: "Techniques like linear and logistic regression.",
            },
            {
              name: "Classification",
              description: "Algorithms such as decision trees, SVMs, and k-NN.",
            },
          ],
        },
        {
          name: "Unsupervised Learning",
          description: "Explore patterns in data without predefined labels.",
          children: [
            {
              name: "Clustering",
              description: "Methods like k-means, hierarchical clustering.",
            },
            {
              name: "Dimensionality Reduction",
              description: "Techniques such as PCA and t-SNE.",
            },
          ],
        },
        {
          name: "Deep Learning",
          description: "Study neural networks and advanced architectures.",
          children: [
            {
              name: "Neural Networks",
              description:
                "Fundamentals of perceptrons and multilayer networks.",
            },
            {
              name: "Convolutional Neural Networks (CNNs)",
              description: "Specialized for image data processing.",
            },
            {
              name: "Recurrent Neural Networks (RNNs)",
              description: "Designed for sequential data analysis.",
            },
            {
              name: "Transformers",
              description:
                "Architecture for handling sequential data with attention mechanisms.",
            },
          ],
        },
        {
          name: "Model Evaluation and Validation",
          description: "Assess model performance and ensure generalizability.",
          children: [
            {
              name: "Cross-Validation",
              description: "Techniques like k-fold cross-validation.",
            },
            {
              name: "Metrics",
              description:
                "Evaluation metrics such as accuracy, precision, recall, and F1-score.",
            },
            {
              name: "Bias-Variance Tradeoff",
              description:
                "Understanding the balance between model complexity and performance.",
            },
          ],
        },
      ],
      dividerText:
        "understand handling large-scale data, processing pipelines, cloud computing, and big data technologies.",
    },
    {
      name: "Data Engineering and Big Data",
      description:
        "Focus on the tools and techniques for handling large-scale data processing and storage.",
      children: [
        {
          name: "Data Warehousing",
          description: "Systems for reporting and data analysis.",
          children: [
            {
              name: "ETL Processes",
              description: "Extract, Transform, Load workflows.",
            },
            {
              name: "Data Lakes",
              description:
                "Storage repositories for large amounts of raw data.",
            },
          ],
        },
        {
          name: "Big Data Technologies",
          description: "Tools for processing and analyzing large datasets.",
          children: [
            {
              name: "Apache Hadoop",
              description: "Framework for distributed storage and processing.",
            },
            {
              name: "Apache Spark",
              description:
                "Unified analytics engine for large-scale data processing.",
            },
            {
              name: "Kafka",
              description: "Distributed event streaming platform.",
            },
          ],
        },
        {
          name: "Cloud Platforms",
          description: "Utilize cloud services for scalable data solutions.",
          children: [
            {
              name: "AWS",
              description: "Amazon's cloud computing services.",
            },
            {
              name: "Google Cloud Platform",
              description: "Google's suite of cloud services.",
            },
            {
              name: "Microsoft Azure",
              description: "Microsoft's cloud computing platform.",
            },
          ],
        },
      ],
      dividerText:
        "cutting-edge fields like NLP, Explainable AI (XAI), AutoML, MLOps, and data visualization.",
    },
    {
      name: "Specialized Areas and Emerging Trends",
      description:
        "Stay updated with the latest advancements and niche areas in data science.",
      children: [
        {
          name: "Natural Language Processing (NLP)",
          description:
            "Techniques for processing and analyzing human language data.",
          children: [
            {
              name: "Sentiment Analysis",
              description: "Determining sentiment from text data.",
            },
            {
              name: "Language Modeling",
              description: "Predicting the next word in a sequence.",
            },
            {
              name: "Transformers and BERT",
              description:
                "Advanced models for understanding context in language.",
            },
          ],
        },
        {
          name: "Explainable AI (XAI)",
          description: "Making AI decisions transparent and interpretable.",
          children: [
            {
              name: "Model Interpretability",
              description: "Understanding how models make decisions.",
            },
            {
              name: "LIME and SHAP",
              description: "Tools for explaining model outputs.",
            },
          ],
        },
        {
          name: "AutoML and MLOps",
          description: "Automating model development and operationalization.",
          children: [
            {
              name: "AutoKeras",
              description: "Automated machine learning library.",
            },
            {
              name: "H2O.ai",
              description: "Open-source platform for AutoML.",
            },
            {
              name: "MLOps Practices",
              description: "CI/CD pipelines for machine learning models.",
            },
          ],
        },
        {
          name: "Data Visualization",
          description:
            "Develop skills to effectively visualize data and communicate insights.",
          children: [
            {
              name: "Data Visualization Tools",
              description:
                "Learn to create compelling visual representations of data.",
            },
            {
              name: "Dashboard Development",
              description:
                "Build interactive dashboards to monitor and report data metrics.",
            },
            {
              name: "Storytelling with Data",
              description:
                "Craft narratives that effectively communicate data-driven insights.",
            },
          ],
        },
      ],
    },
    {
      name: "Final Projects",
      description:
        "Apply your knowledge to real-world challenges and create impactful projects.",
    },
    {
      name: "Ethics and Professional Development",
      description:
        "Understand the ethical implications of data science and focus on continuous professional growth.",
    },
  ],
};

export default dataScienceRoadmap;
