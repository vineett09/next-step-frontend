const dataAnalystRoadmap = {
  name: "Data Analyst Roadmap 2025",
  children: [
    {
      name: "Introduction ",
      children: [
        {
          name: "Who is a Data Analyst",
        },
        {
          name: "Data Analytics Types",
          children: [
            { name: "Descriptive Analysis" },
            { name: "Diagnostic Analysis" },
            { name: "Predictive Analysis" },
            { name: "Prescriptive Analysis" },
          ],
        },
      ],
    },
    {
      name: "Basic Math and Statistics",
      children: [
        {
          name: "Mathematical Concepts",
          children: [
            { name: "Linear Algebra" },
            { name: "Calculus" },
            { name: "Standard Deviation" },
            { name: "Matrices" },
            { name: "Vectors" },
            { name: "Linear Equations" },
          ],
        },

        {
          name: "Statistical Concepts",
          children: [
            { name: "Descriptive and Inferential Statistics" },
            { name: "Probability" },
            { name: "Distributions" },
            { name: "Sampling" },
            { name: "Hypothesis Testing" },
            { name: "Confidence Intervals" },
            { name: "Correlation and Regression" },
            { name: "Bias and Variance" },
          ],
        },
      ],
      dividerText: "Core concepts grasped—build technical foundations.",
    },
    {
      name: " Technical Foundations",
      children: [
        {
          name: "Excel Basics",
          children: [
            { name: "Formulas (Count, Sum, Average, etc.)" },
            { name: "Functions (VLOOKUP, HLOOKUP,ConCAT, etc.)" },
            { name: "Pivot Tables" },
            { name: "Data Visualization" },
            { name: "Conditional Formatting" },
            { name: "charts" },
          ],
        },
        {
          name: "Programming",
          children: [
            { name: "Python", preferred: true },
            { name: "R" },
            { name: "Data Structures" },
          ],
        },

        {
          name: "Operating Systems",
          children: [{ name: "Windows" }, { name: "Linux" }],
        },
      ],
      dividerText: "Technical basics learned—dive into data management.",
    },
    {
      name: " Data Management",
      children: [
        {
          name: "Databases",
          children: [
            { name: "SQL", preferred: true },
            { name: "MySQL" },
            { name: "PostgreSQL" },
            { name: "NoSQL" },
          ],
        },
        {
          name: "Data Collection",
          children: [
            { name: "Web Scraping" },
            { name: "BeautifulSoup" },
            { name: "Scrapy" },
            { name: "APIs" },
          ],
        },
        {
          name: "Data Storage",
          children: [
            { name: "CSV Files" },
            { name: "Excel Files" },
            { name: "Cloud Storage" },
          ],
        },
      ],
      dividerText: "Data managed—learn to clean and prepare data.",
    },
    {
      name: " Data Cleaning and Preparation",
      children: [
        {
          name: "Tools",
          children: [
            { name: "Pandas", preferred: true },
            { name: "OpenRefine" },
            { name: "Power Query" },
          ],
        },
        {
          name: "Concepts",
          children: [
            { name: "Handle Missing Data" },
            { name: "Data Transformation" },
            { name: "Normalization" },
          ],
        },
      ],
      dividerText: "Data prepared—explore and analyze it.",
    },
    {
      name: " Exploratory Data Analysis",
      children: [
        {
          name: "Techniques",
          children: [
            { name: "Summary Stats" },
            { name: "Correlation" },
            { name: "Outliers" },
          ],
        },
        {
          name: "Python Libraries",
          children: [
            { name: "NumPy", preferred: true },
            { name: "Pandas" },
            { name: "Matplotlib" },
            { name: "Seaborn" },
          ],
        },
      ],
      dividerText: "Data explored—visualize insights effectively.",
    },
    {
      name: " Data Visualization",
      children: [
        {
          name: "Tools",
          children: [
            { name: "Tableau", preferred: true },
            { name: "Power BI" },
            { name: "Google Data Studio" },
            { name: "Plotly" },
          ],
        },
        {
          name: "Principles",
          children: [
            { name: "Chart Types" },
            { name: "Storytelling" },
            { name: "Design Basics" },
          ],
        },
      ],
      dividerText: "Insights visualized—master statistical analysis.",
    },
    {
      name: " Statistical Analysis",
      children: [
        {
          name: "Statistics",
          children: [
            { name: "Hypothesis Testing", preferred: true },
            { name: "Regression" },
            { name: "Confidence Intervals" },
          ],
        },
        {
          name: "Tools",
          children: [{ name: "SciPy" }, { name: "Statsmodels" }, { name: "R" }],
        },
      ],
      dividerText: "Statistics mastered—integrate with business context.",
    },
    {
      name: " Business Acumen and Communication",
      children: [
        {
          name: "Domain Knowledge",
          children: [
            { name: "Industry Basics" },
            { name: "KPIs" },
            { name: "Metrics" },
          ],
        },
        {
          name: "Communication",
          children: [
            { name: "Reports" },
            { name: "Presentations" },
            { name: "Collaboration" },
          ],
        },
      ],
      dividerText: "Business context understood—explore advanced tools.",
    },
    {
      name: " Advanced Tools and Cloud",
      children: [
        {
          name: "Cloud Platforms",
          children: [
            { name: "BigQuery", preferred: true },
            { name: "AWS Redshift" },
            { name: "Azure Synapse" },
          ],
        },
        {
          name: "Big Data",
          children: [{ name: "Hadoop" }, { name: "Spark" }],
        },
      ],
      dividerText: "Advanced tools learned—stay ahead with trends.",
    },
    {
      name: " Emerging Trends and Technologies",
      children: [
        {
          name: "AI and ML",
          children: [
            { name: "Scikit-learn", preferred: true },
            { name: "Predictive Analytics" },
            { name: "AutoML" },
          ],
        },
        {
          name: "Real-Time Analytics",
          children: [{ name: "Kafka" }, { name: "Streamlit" }],
        },
      ],
      dividerText: "Trends explored—apply skills in projects.",
    },
    {
      name: " Hands-On Projects",
      children: [
        { name: "Public Dataset Analysis" },
        { name: "Dashboard Creation" },
        { name: "Full Project" },
      ],
      dividerText: "Projects completed—keep learning and growing.",
    },
    {
      name: " Continuous Learning",
      children: [
        { name: "Online Courses" },
        { name: "Communities" },
        { name: "Trend Updates" },
      ],
    },
  ],
};

export default dataAnalystRoadmap;
