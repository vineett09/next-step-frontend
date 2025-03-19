const DataScienceProjectSteps = {
  "Data Visualization Dashboard": [
    {
      title: "Set Up Environment",
      description:
        "1. Install Python and required libraries: pandas (data handling), Plotly (visualization), and Jupyter Notebook.\n" +
        "2. Create a new Jupyter Notebook for the project.\n" +
        "3. Initialize a Git repository and commit the initial setup.\n" +
        "4. Choose a sample dataset (e.g., CSV from Kaggle) to visualize.",
    },
    {
      title: "Load and Explore Data",
      description:
        "1. Use pandas to load the dataset into a DataFrame.\n" +
        "2. Perform exploratory data analysis (EDA): check for missing values, data types, and basic statistics.\n" +
        "3. Clean the data (e.g., handle nulls, convert data types).\n" +
        "4. Identify key variables for visualization.",
    },
    {
      title: "Create Visualizations",
      description:
        "1. Use Plotly to create interactive charts (e.g., bar, line, scatter) based on the dataset.\n" +
        "2. Design a dashboard layout with multiple plots (e.g., using Plotly Dash).\n" +
        "3. Add interactivity (e.g., dropdowns or sliders) to filter data.\n" +
        "4. Customize the visuals with titles, colors, and labels.",
    },
    {
      title: "Deploy and Share",
      description:
        "1. Export the notebook as an HTML file or host the Dash app locally.\n" +
        "2. Test the dashboard for responsiveness and interactivity.\n" +
        "3. Push the project to GitHub with a README explaining the dataset and visuals.\n" +
        "4. Optionally, deploy online using Heroku or Plotly’s hosting service.",
    },
  ],
  "Stock Price Predictor": [
    {
      title: "Set Up Environment",
      description:
        "1. Install Python and libraries: pandas, yfinance (for stock data), scikit-learn (ML), and Jupyter Notebook.\n" +
        "2. Create a new Jupyter Notebook for the project.\n" +
        "3. Initialize a Git repository and commit the setup.\n" +
        "4. Choose a stock (e.g., AAPL) for prediction.",
    },
    {
      title: "Acquire and Prepare Data",
      description:
        "1. Use yfinance to download historical stock price data (e.g., daily closing prices).\n" +
        "2. Perform EDA: check for trends, seasonality, and missing values.\n" +
        "3. Create features (e.g., moving averages, lagged prices) for the model.\n" +
        "4. Split data into training and testing sets (e.g., 80/20).",
    },
    {
      title: "Build and Train Model",
      description:
        "1. Choose a model (e.g., Linear Regression, LSTM, or Random Forest) from scikit-learn or TensorFlow.\n" +
        "2. Train the model on the training set using historical features.\n" +
        "3. Optimize hyperparameters (e.g., using GridSearchCV) if needed.\n" +
        "4. Predict stock prices on the test set.",
    },
    {
      title: "Evaluate and Visualize",
      description:
        "1. Calculate metrics like Mean Absolute Error (MAE) or Root Mean Squared Error (RMSE).\n" +
        "2. Plot actual vs. predicted prices using matplotlib or Plotly.\n" +
        "3. Document findings and limitations in the notebook.\n" +
        "4. Push to GitHub with a README explaining the model and results.",
    },
  ],
  "Image Classification Model": [
    {
      title: "Set Up Environment",
      description:
        "1. Install Python and libraries: TensorFlow, Keras, numpy, and Jupyter Notebook.\n" +
        "2. Set up a GPU environment (optional, e.g., via Google Colab) for faster training.\n" +
        "3. Initialize a Git repository and commit the setup.\n" +
        "4. Choose a dataset (e.g., CIFAR-10 or custom images from Kaggle).",
    },
    {
      title: "Prepare Image Data",
      description:
        "1. Load the dataset and preprocess images (e.g., resize, normalize pixel values).\n" +
        "2. Perform data augmentation (e.g., rotation, flipping) to increase variety.\n" +
        "3. Split data into training, validation, and test sets.\n" +
        "4. Visualize a few sample images to verify preprocessing.",
    },
    {
      title: "Build and Train Model",
      description:
        "1. Design a Convolutional Neural Network (CNN) using Keras (e.g., with Conv2D, MaxPooling).\n" +
        "2. Add layers (e.g., Dense, Dropout) and compile with a loss function (e.g., categorical_crossentropy).\n" +
        "3. Train the model on the training set with validation monitoring.\n" +
        "4. Save the trained model weights (e.g., as HDF5 file).",
    },
    {
      title: "Evaluate and Deploy",
      description:
        "1. Test the model on the test set and calculate accuracy/confusion matrix.\n" +
        "2. Visualize predictions vs. actual labels with sample images.\n" +
        "3. Push the project to GitHub with documentation on architecture and results.\n" +
        "4. Optionally, convert the model to TensorFlow Lite for mobile deployment.",
    },
  ],
  Chatbot: [
    {
      title: "Set Up Environment",
      description:
        "1. Install Python and libraries: NLTK (NLP), pandas, and Jupyter Notebook.\n" +
        "2. Download NLTK data (e.g., `nltk.download('punkt')`) for tokenization.\n" +
        "3. Initialize a Git repository and commit the setup.\n" +
        "4. Define a simple goal (e.g., answering FAQs or greetings).",
    },
    {
      title: "Prepare Data",
      description:
        "1. Create or gather a dataset of intents and responses (e.g., JSON file with queries and replies).\n" +
        "2. Preprocess text: tokenize, lowercase, and remove punctuation using NLTK.\n" +
        "3. Build a vocabulary of words or use pre-trained embeddings (optional).\n" +
        "4. Test preprocessing with a few sample inputs.",
    },
    {
      title: "Build Chatbot Logic",
      description:
        "1. Implement a rule-based or simple ML approach (e.g., cosine similarity with TF-IDF).\n" +
        "2. Match user input to intents and return appropriate responses.\n" +
        "3. Add basic error handling (e.g., 'I don’t understand' for unknown inputs).\n" +
        "4. Test the chatbot with sample conversations.",
    },
    {
      title: "Test and Share",
      description:
        "1. Run the chatbot in a loop in the notebook or a Python script.\n" +
        "2. Evaluate responses for accuracy and relevance.\n" +
        "3. Push to GitHub with a README explaining the intents and usage.\n" +
        "4. Optionally, create a simple UI with Flask or Tkinter.",
    },
  ],
  "Recommendation System": [
    {
      title: "Set Up Environment",
      description:
        "1. Install Python and libraries: pandas, scikit-learn, and Jupyter Notebook.\n" +
        "2. Create a new Jupyter Notebook for the project.\n" +
        "3. Initialize a Git repository and commit the setup.\n" +
        "4. Choose a dataset (e.g., MovieLens for movies or custom user-item data).",
    },
    {
      title: "Load and Process Data",
      description:
        "1. Load the dataset into a pandas DataFrame (e.g., user IDs, item IDs, ratings).\n" +
        "2. Perform EDA: check sparsity, rating distribution, and missing values.\n" +
        "3. Create a user-item matrix for collaborative filtering.\n" +
        "4. Handle missing data (e.g., fill with zeros or impute).",
    },
    {
      title: "Build Recommendation Model",
      description:
        "1. Implement a method: collaborative filtering (e.g., KNN) or matrix factorization (e.g., SVD).\n" +
        "2. Train the model on the user-item matrix using scikit-learn.\n" +
        "3. Generate recommendations for a sample user.\n" +
        "4. Experiment with hyperparameters for better accuracy.",
    },
    {
      title: "Evaluate and Share",
      description:
        "1. Evaluate using metrics like RMSE or precision/recall on a test set.\n" +
        "2. Visualize top-N recommendations for a few users.\n" +
        "3. Document the approach and results in the notebook.\n" +
        "4. Push to GitHub with a README explaining the system.",
    },
  ],
  "Time Series Analysis": [
    {
      title: "Set Up Environment",
      description:
        "1. Install Python and libraries: pandas, statsmodels, matplotlib, and Jupyter Notebook.\n" +
        "2. Create a new Jupyter Notebook for the project.\n" +
        "3. Initialize a Git repository and commit the setup.\n" +
        "4. Choose a time series dataset (e.g., sales data or weather records).",
    },
    {
      title: "Load and Analyze Data",
      description:
        "1. Load the dataset into a pandas DataFrame with a datetime index.\n" +
        "2. Perform EDA: plot the series, check for trends, seasonality, and stationarity.\n" +
        "3. Decompose the series into trend, seasonal, and residual components.\n" +
        "4. Handle missing values or outliers if present.",
    },
    {
      title: "Model and Forecast",
      description:
        "1. Fit a model (e.g., ARIMA or Exponential Smoothing) using statsmodels.\n" +
        "2. Tune model parameters (e.g., p, d, q for ARIMA) based on ACF/PACF plots.\n" +
        "3. Forecast future values and plot against actual data.\n" +
        "4. Validate the model with a train-test split.",
    },
    {
      title: "Evaluate and Share",
      description:
        "1. Calculate forecast accuracy (e.g., MAE, RMSE).\n" +
        "2. Visualize forecasts with confidence intervals.\n" +
        "3. Push the project to GitHub with a README on the dataset and model.\n" +
        "4. Optionally, save forecasts to a CSV file.",
    },
  ],
  "Natural Language Processing": [
    {
      title: "Set Up Environment",
      description:
        "1. Install Python and libraries: NLTK, pandas, and Jupyter Notebook.\n" +
        "2. Download NLTK data (e.g., `nltk.download('vader_lexicon')`) for sentiment analysis.\n" +
        "3. Initialize a Git repository and commit the setup.\n" +
        "4. Choose a text dataset (e.g., tweets or reviews).",
    },
    {
      title: "Prepare Text Data",
      description:
        "1. Load the dataset into a pandas DataFrame.\n" +
        "2. Clean text: remove stopwords, punctuation, and lowercase using NLTK.\n" +
        "3. Tokenize and optionally lemmatize or stem words.\n" +
        "4. Explore word frequency or common phrases.",
    },
    {
      title: "Perform Sentiment Analysis",
      description:
        "1. Use NLTK’s VADER or a simple polarity scorer to classify sentiment (positive, negative, neutral).\n" +
        "2. Calculate sentiment scores for each text entry.\n" +
        "3. Visualize sentiment distribution (e.g., bar chart with matplotlib).\n" +
        "4. Test with a few manual inputs.",
    },
    {
      title: "Share Results",
      description:
        "1. Summarize findings in the notebook (e.g., overall sentiment trends).\n" +
        "2. Export results to a CSV or visualize in an HTML file.\n" +
        "3. Push to GitHub with a README explaining the dataset and analysis.\n" +
        "4. Optionally, add a word cloud for key terms.",
    },
  ],
  "Predicting Customer Churn": [
    {
      title: "Set Up Environment",
      description:
        "1. Install Python and libraries: pandas, scikit-learn, matplotlib, and Jupyter Notebook.\n" +
        "2. Create a new Jupyter Notebook for the project.\n" +
        "3. Initialize a Git repository and commit the setup.\n" +
        "4. Choose a churn dataset (e.g., telecom data from Kaggle).",
    },
    {
      title: "Explore and Preprocess Data",
      description:
        "1. Load the dataset into a pandas DataFrame.\n" +
        "2. Perform EDA: check class balance, missing values, and feature correlations.\n" +
        "3. Encode categorical variables (e.g., one-hot encoding) and scale numerical features.\n" +
        "4. Split data into training and testing sets.",
    },
    {
      title: "Build and Train Model",
      description:
        "1. Choose a model (e.g., Logistic Regression, Random Forest) from scikit-learn.\n" +
        "2. Train the model on the training set and tune hyperparameters.\n" +
        "3. Predict churn on the test set.\n" +
        "4. Handle class imbalance (e.g., with SMOTE) if needed.",
    },
    {
      title: "Evaluate and Share",
      description:
        "1. Calculate metrics: accuracy, precision, recall, and ROC-AUC.\n" +
        "2. Plot a confusion matrix or ROC curve for visualization.\n" +
        "3. Push to GitHub with a README detailing the model and performance.\n" +
        "4. Suggest business insights based on key features.",
    },
  ],
  "Data Mining": [
    {
      title: "Set Up Environment",
      description:
        "1. Install Python and libraries: pandas, scikit-learn, numpy, and Jupyter Notebook.\n" +
        "2. Create a new Jupyter Notebook for the project.\n" +
        "3. Initialize a Git repository and commit the setup.\n" +
        "4. Choose a large dataset (e.g., retail transactions from Kaggle).",
    },
    {
      title: "Preprocess Data",
      description:
        "1. Load the dataset into a pandas DataFrame.\n" +
        "2. Clean data: handle missing values, duplicates, and inconsistencies.\n" +
        "3. Transform data into a suitable format (e.g., transaction lists for association rules).\n" +
        "4. Perform basic EDA to understand patterns.",
    },
    {
      title: "Apply Mining Techniques",
      description:
        "1. Use scikit-learn or mlxtend for association rule mining (e.g., Apriori algorithm).\n" +
        "2. Alternatively, cluster data with K-Means to find hidden groups.\n" +
        "3. Extract rules or clusters and interpret results (e.g., support, confidence).\n" +
        "4. Optimize parameters (e.g., min support, K value) for meaningful output.",
    },
    {
      title: "Visualize and Share",
      description:
        "1. Visualize patterns (e.g., heatmap of rules or scatter plot of clusters).\n" +
        "2. Summarize key findings in the notebook.\n" +
        "3. Push to GitHub with a README explaining the mining technique and insights.\n" +
        "4. Optionally, save mined patterns to a file.",
    },
  ],
  "Big Data Analytics": [
    {
      title: "Set Up Environment",
      description:
        "1. Install Python, PySpark (for Hadoop integration), and Jupyter Notebook.\n" +
        "2. Set up a local Hadoop cluster or use a cloud service (e.g., AWS EMR).\n" +
        "3. Initialize a Git repository and commit the setup.\n" +
        "4. Choose a large dataset (e.g., public logs or social media data).",
    },
    {
      title: "Load and Process Data",
      description:
        "1. Use PySpark to load the dataset into a Spark DataFrame.\n" +
        "2. Perform distributed EDA: count records, check schema, and handle missing data.\n" +
        "3. Optimize data partitioning for efficient processing.\n" +
        "4. Test processing on a small subset first.",
    },
    {
      title: "Analyze with Spark",
      description:
        "1. Run aggregations (e.g., group by, average) or ML tasks (e.g., classification) with Spark MLlib.\n" +
        "2. Handle big data challenges (e.g., memory issues) with Spark’s lazy evaluation.\n" +
        "3. Cache frequent queries for performance.\n" +
        "4. Generate summary statistics or predictions.",
    },
    {
      title: "Share Results",
      description:
        "1. Visualize results using matplotlib or export to CSV for external tools.\n" +
        "2. Document the Spark workflow and scalability in the notebook.\n" +
        "3. Push to GitHub with a README on setup and analysis.\n" +
        "4. Optionally, deploy the script to a cloud cluster.",
    },
  ],
  "Business Intelligence": [
    {
      title: "Set Up Environment",
      description:
        "1. Install Python, pandas, matplotlib, and Jupyter Notebook.\n" +
        "2. Install Tableau Desktop or use Tableau Public for visualization.\n" +
        "3. Initialize a Git repository and commit the setup.\n" +
        "4. Choose a business dataset (e.g., sales or customer data).",
    },
    {
      title: "Process Data",
      description:
        "1. Load the dataset into a pandas DataFrame.\n" +
        "2. Clean data: handle nulls, standardize formats, and aggregate as needed.\n" +
        "3. Perform EDA to identify KPIs (e.g., revenue, growth rate).\n" +
        "4. Export processed data to a CSV file for Tableau.",
    },
    {
      title: "Create Visualizations",
      description:
        "1. Import the CSV into Tableau and connect to the data source.\n" +
        "2. Build dashboards with charts (e.g., bar, line, pie) for key metrics.\n" +
        "3. Add filters and interactivity (e.g., by region or time period).\n" +
        "4. Alternatively, use matplotlib in Python for static plots.",
    },
    {
      title: "Share Insights",
      description:
        "1. Publish the Tableau dashboard to Tableau Public or save as a PDF.\n" +
        "2. Summarize business insights in the notebook or a report.\n" +
        "3. Push to GitHub with a README on the dataset and visuals.\n" +
        "4. Present findings to simulate a BI workflow.",
    },
  ],
  "Predictive Maintenance": [
    {
      title: "Set Up Environment",
      description:
        "1. Install Python, pandas, scikit-learn, matplotlib, and Jupyter Notebook.\n" +
        "2. Create a new Jupyter Notebook for the project.\n" +
        "3. Initialize a Git repository and commit the setup.\n" +
        "4. Choose a maintenance dataset (e.g., sensor data from UCI or Kaggle).",
    },
    {
      title: "Prepare Data",
      description:
        "1. Load the dataset into a pandas DataFrame.\n" +
        "2. Perform EDA: analyze sensor readings, failure labels, and time patterns.\n" +
        "3. Engineer features (e.g., rolling averages, failure probability).\n" +
        "4. Split into training and test sets, ensuring temporal order if time-based.",
    },
    {
      title: "Build Predictive Model",
      description:
        "1. Select a model (e.g., Random Forest, XGBoost) from scikit-learn.\n" +
        "2. Train the model to predict equipment failure based on features.\n" +
        "3. Optimize for imbalanced data (e.g., using class weights).\n" +
        "4. Test predictions on the test set.",
    },
    {
      title: "Evaluate and Share",
      description:
        "1. Measure performance with precision, recall, and F1-score (focus on failure detection).\n" +
        "2. Plot feature importance or failure predictions over time.\n" +
        "3. Push to GitHub with a README on the model and results.\n" +
        "4. Suggest maintenance actions based on predictions.",
    },
  ],
};

export default DataScienceProjectSteps;
