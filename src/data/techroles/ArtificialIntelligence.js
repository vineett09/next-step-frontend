const aiEngineerRoadmap = {
  name: "AI Engineer Roadmap 2025",
  children: [
    {
      name: " Core Foundations",
      children: [
        {
          name: "Mathematics and Statistics",
          children: [
            { name: "Linear Algebra" },
            { name: "Calculus" },
            { name: "Probability & Statistics" },
          ],
        },
        {
          name: "Programming Languages",
          children: [
            { name: "Python", preferred: true },
            { name: "R" },
            { name: "C++" },
          ],
        },
      ],
      dividerText: "Foundations set—master data for AI.",
    },
    {
      name: " Data Fundamentals",
      children: [
        {
          name: "Data Handling",
          children: [
            { name: "Data Collection Techniques" },
            { name: "Data Cleaning" },
            { name: "Data Transformation" },
            { name: "Exploratory Data Analysis" },
          ],
        },
        {
          name: "Data Tools",
          children: [
            { name: "Pandas" },
            { name: "NumPy" },
            { name: "SQL Basics" },
          ],
        },
      ],
      dividerText: "Data ready—build predictive models with machine learning.",
    },
    {
      name: " Machine Learning Basics",
      children: [
        {
          name: "Supervised Learning",
          children: [
            { name: "Regression Analysis" },
            { name: "Classification Techniques" },
          ],
        },
        {
          name: "Unsupervised Learning",
          children: [
            { name: "Clustering Methods" },
            { name: "Dimensionality Reduction" },
          ],
        },
        {
          name: "Model Evaluation",
          children: [
            { name: "Cross-Validation" },
            { name: "Metrics (Accuracy, Precision, Recall)" },
          ],
        },
      ],
      dividerText: "ML basics down—advance to complex algorithms.",
    },
    {
      name: " Advanced Machine Learning",
      children: [
        {
          name: "Reinforcement Learning",
          children: [
            { name: "Markov Decision Processes" },
            { name: "Q-Learning" },
            { name: "Policy Gradient Methods" },
          ],
        },
        {
          name: "Ensemble Methods",
          children: [{ name: "Random Forests" }, { name: "Gradient Boosting" }],
        },
        {
          name: "Optimization Techniques",
          children: [
            { name: "Hyperparameter Tuning" },
            { name: "Gradient Descent Variants" },
          ],
        },
      ],
      dividerText: "ML mastered—explore neural networks and deep learning.",
    },
    {
      name: " Deep Learning Fundamentals",
      children: [
        {
          name: "Neural Networks",
          children: [
            { name: "Perceptrons and Multilayer Perceptrons" },
            { name: "Activation Functions" },
            { name: "Backpropagation" },
          ],
        },
        {
          name: "Frameworks",
          children: [
            { name: "TensorFlow", preferred: true },
            { name: "PyTorch" },
          ],
        },
      ],
      dividerText: "Neural nets built—specialize in advanced architectures.",
    },
    {
      name: " Specialized Deep Learning",
      children: [
        {
          name: "Convolutional Neural Networks",
          children: [
            { name: "Convolution and Pooling Layers" },
            { name: "Architectures (e.g., ResNet)" },
            { name: "Image Processing Applications" },
          ],
        },
        {
          name: "Recurrent Neural Networks",
          children: [
            { name: "LSTM and GRU Networks" },
            { name: "Sequence-to-Sequence Models" },
            { name: "Time Series Applications" },
          ],
        },
        {
          name: "Transformers",
          children: [
            { name: "Self-Attention Mechanism" },
            { name: "Transformer Architecture" },
            { name: "NLP Applications" },
          ],
        },
      ],
      dividerText: "Deep learning aced—create with generative AI.",
    },
    {
      name: " Generative AI",
      children: [
        {
          name: "Generative Models",
          children: [
            { name: "GANs (Generative Adversarial Networks)" },
            { name: "Diffusion Models" },
            { name: "VAEs (Variational Autoencoders)" },
          ],
        },
        {
          name: "Applications",
          children: [
            { name: "Image Generation" },
            { name: "Text Generation" },
            { name: "Hugging Face Tools" },
          ],
        },
      ],
      dividerText: "Creativity unleashed—scale with big data and cloud.",
    },
    {
      name: " Big Data & Cloud Computing",
      children: [
        {
          name: "Big Data Technologies",
          children: [
            { name: "Apache Spark", preferred: true },
            { name: "Apache Hadoop" },
            { name: "Kafka" },
          ],
        },
        {
          name: "Cloud Platforms",
          children: [
            { name: "AWS AI Services", preferred: true },
            { name: "Google Cloud AI" },
            { name: "Azure AI" },
          ],
        },
      ],
      dividerText: "Scale achieved—deploy AI in production.",
    },
    {
      name: " MLOps",
      children: [
        {
          name: "Model Deployment",
          children: [
            { name: "RESTful APIs" },
            { name: "gRPC" },
            { name: "Model Serving" },
          ],
        },
        {
          name: "Containerization",
          children: [{ name: "Docker" }, { name: "Kubernetes" }],
        },
        {
          name: "CI/CD for AI",
          children: [{ name: "GitHub Actions" }, { name: "Jenkins" }],
        },
        {
          name: "Monitoring",
          children: [
            { name: "Metrics Tracking" },
            { name: "Automated Retraining" },
          ],
        },
      ],
      dividerText: "Deployment live—focus on ethics and responsibility.",
    },
    {
      name: " AI Ethics & Responsibility",
      children: [
        {
          name: "Bias and Fairness",
          children: [{ name: "Fairness Metrics" }, { name: "Bias Mitigation" }],
        },
        {
          name: "Explainability",
          children: [
            { name: "Interpretability Techniques" },
            { name: "SHAP and LIME" },
          ],
        },
        {
          name: "Privacy and Regulation",
          children: [{ name: "Data Privacy" }, { name: "GDPR and AI Laws" }],
        },
      ],
      dividerText: "Ethics ensured—apply skills to real-world projects.",
    },
    {
      name: " Practical Projects",
      children: [
        {
          name: "Beginner Projects",
          children: [
            { name: "Data Visualization Tool" },
            { name: "Sentiment Analyzer" },
          ],
        },
        {
          name: "Intermediate Projects",
          children: [{ name: "Image Classifier" }, { name: "Chatbot" }],
        },
        {
          name: "Advanced Projects",
          children: [
            { name: "Autonomous Agent" },
            { name: "Synthetic Data Generator" },
          ],
        },
      ],
      dividerText: "Projects polished—launch your AI career.",
    },
    {
      name: " Career Growth",
      children: [
        {
          name: "Professional Skills",
          children: [
            { name: "Portfolio Building" },
            { name: "Interview Prep" },
            { name: "Certifications (e.g., AWS, TensorFlow)" },
          ],
        },
        {
          name: "Community Engagement",
          children: [
            { name: "Kaggle Competitions" },
            { name: "Conferences (e.g., NeurIPS)" },
          ],
        },
      ],
    },
  ],
};

export default aiEngineerRoadmap;
