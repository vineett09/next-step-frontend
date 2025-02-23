const dataAnalystRoadmap = {
  name: "Data Analyst Roadmap",
  children: [
    {
      name: "Foundational Knowledge",
      children: [
        {
          name: "Statistics and Probability",
          description:
            "Understanding statistical methods and probability theories to analyze and interpret data effectively.",
          children: [
            {
              name: "Descriptive Statistics",
              description:
                "Summarizing and describing the main features of a dataset.",
            },
            {
              name: "Inferential Statistics",
              description:
                "Making predictions or inferences about a population based on a sample of data.",
            },
            {
              name: "Probability Distributions",
              description:
                "Studying how probabilities are distributed over values of a random variable.",
            },
            {
              name: "Hypothesis Testing",
              description:
                "Testing assumptions to determine the validity of a claim about a population.",
            },
          ],
        },
        {
          name: "Data Literacy",
          description:
            "Developing the ability to read, understand, create, and communicate data as information.",
          children: [
            {
              name: "Data Types",
              description:
                "Understanding various data forms such as qualitative, quantitative, discrete, and continuous.",
            },
            {
              name: "Data Collection Methods",
              description:
                "Learning techniques for gathering data, including surveys, experiments, and observational studies.",
            },
            {
              name: "Data Cleaning",
              description:
                "Identifying and correcting errors or inconsistencies in data to ensure quality.",
            },
            {
              name: "Data Ethics",
              description:
                "Understanding ethical considerations in data handling, including privacy and consent.",
            },
          ],
        },
      ],
    },
    {
      name: "Technical Skills",
      children: [
        {
          name: "Programming Languages",
          description:
            "Gaining proficiency in languages commonly used for data analysis.",
          children: [
            {
              name: "Python",
              description:
                "Utilizing libraries such as Pandas, NumPy, and Matplotlib for data manipulation and visualization.",
            },
            {
              name: "R",
              description:
                "Applying R for statistical analysis and graphical representation of data.",
            },
          ],
        },
        {
          name: "Database Management",
          description:
            "Learning to work with databases to store, retrieve, and manage data.",
          children: [
            {
              name: "SQL",
              description:
                "Using Structured Query Language to query and manipulate relational databases.",
            },
            {
              name: "NoSQL Databases",
              description:
                "Understanding non-relational databases like MongoDB for unstructured data.",
            },
          ],
        },
        {
          name: "Data Visualization Tools",
          description:
            "Mastering tools to create graphical representations of data.",
          children: [
            {
              name: "Tableau",
              description: "Building interactive and shareable dashboards.",
            },
            {
              name: "Power BI",
              description:
                "Creating business intelligence reports and visualizations.",
            },
            {
              name: "Matplotlib & Seaborn",
              description:
                "Utilizing Python libraries for plotting and data visualization.",
            },
          ],
        },
        {
          name: "Spreadsheet Software",
          description:
            "Leveraging tools for data organization and basic analysis.",
          children: [
            {
              name: "Microsoft Excel",
              description:
                "Performing data analysis using formulas, pivot tables, and charts.",
            },
            {
              name: "Google Sheets",
              description:
                "Collaborating on data analysis tasks in a cloud-based environment.",
            },
          ],
        },
        {
          name: "Big Data Technologies",
          description:
            "Working with tools and frameworks to process and analyze large-scale datasets efficiently.",
          children: [
            {
              name: "Hadoop",
              description:
                "Using a distributed framework for storing and processing big data across clusters.",
            },
            {
              name: "Spark",
              description:
                "Leveraging an in-memory computing engine for fast data processing and analytics.",
            },
            {
              name: "Kafka",
              description:
                "Handling real-time data streams for ingestion and processing.",
            },
            {
              name: "Hive",
              description:
                "Querying and analyzing large datasets in a data warehouse using SQL-like syntax.",
            },
          ],
        },
      ],
    },
    {
      name: "Advanced Analytical Techniques",
      children: [
        {
          name: "Data Mining",
          description: "Extracting patterns and knowledge from large datasets.",
          children: [
            {
              name: "Clustering",
              description: "Grouping similar data points together.",
            },
            {
              name: "Classification",
              description: "Assigning data points to predefined categories.",
            },
            {
              name: "Association Rule Learning",
              description:
                "Discovering interesting relations between variables in large databases.",
            },
          ],
        },
        {
          name: "Predictive Analytics",
          description:
            "Using statistical models and advanced techniques to predict future outcomes.",
          children: [
            {
              name: "Regression Analysis",
              description:
                "Modeling the relationship between dependent and independent variables.",
            },
            {
              name: "Time Series Analysis",
              description:
                "Analyzing data points collected over intervals of time.",
            },
            {
              name: "Ensemble Methods",
              description:
                "Combining multiple models like random forests and boosting for better predictions.",
            },
          ],
        },
      ],
    },
    {
      name: "AI and Machine Learning Skills",
      children: [
        {
          name: "Machine Learning",
          description:
            "Applying algorithms to enable systems to learn from data and improve over time.",
          children: [
            {
              name: "Supervised Learning",
              description:
                "Training models on labeled data, e.g., regression and classification.",
            },
            {
              name: "Unsupervised Learning",
              description:
                "Finding patterns in unlabeled data, e.g., clustering and dimensionality reduction.",
            },
            {
              name: "Reinforcement Learning",
              description:
                "Training agents to make decisions by rewarding desired behaviors.",
            },
            {
              name: "Model Evaluation",
              description:
                "Assessing model performance using metrics like accuracy, precision, and recall.",
            },
            {
              name: "TensorFlow, Scikit-learn, and PyTorch",
              description:
                "Utilizing libraries for building and training machine learning models.",
            },
          ],
        },
        {
          name: "Deep Learning",
          description:
            "Utilizing neural networks with multiple layers to analyze complex patterns in data.",
          children: [
            {
              name: "Neural Networks",
              description:
                "Building models inspired by the human brain for tasks like image and speech recognition.",
            },
            {
              name: "Convolutional Neural Networks (CNNs)",
              description:
                "Specializing in processing grid-like data such as images.",
            },
            {
              name: "Recurrent Neural Networks (RNNs)",
              description:
                "Handling sequential data like time series or natural language.",
            },
            {
              name: "Transfer Learning",
              description:
                "Reusing pre-trained models for specific tasks to save time and resources.",
            },
            {
              name: "GPU Utilization",
              description:
                "Leveraging graphics processing units to accelerate deep learning computations.",
            },
          ],
        },
      ],
    },
    {
      name: "Continous Learning",
      description:
        "Staying updated with the latest tools, technologies, and trends in data analysis.",
    },
  ],
};

export default dataAnalystRoadmap;
