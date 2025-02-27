const tensorflowDeveloperRoadmap = {
  name: "TensorFlow Developer Roadmap 2025",
  description:
    "This comprehensive roadmap offers a detailed guide to mastering TensorFlow by 2025, from Python fundamentals to advanced machine learning and deployment. It includes nested subtopics with practical examples—taught using Python, Jupyter, TensorFlow, and more—for hands-on learners aiming to excel in the 2025 AI ecosystem.",
  children: [
    {
      name: " Prerequisites & Setup",
      description:
        "Establish the foundation for TensorFlow with Python and essential tools, taught through a simple script in Jupyter Notebook.",
      children: [
        {
          name: "Python Fundamentals",
          description:
            "Master Python basics required for TensorFlow, taught with practical coding examples.",
          children: [
            {
              name: "Variables",
              description:
                "Learn variable assignment, taught with x = 5 example.",
            },
            {
              name: "Functions",
              description:
                "Define functions, taught with a def add(x, y) example.",
            },
            {
              name: "Data Structures",
              description:
                "Use lists and dicts, taught with list append and dict access examples.",
            },
          ],
        },
        {
          name: "Scientific Python Libraries",
          description:
            "Get familiar with scientific libraries, taught with array and data manipulation.",
          children: [
            {
              name: "NumPy",
              description: "Create arrays, taught with np.array example.",
            },
            {
              name: "Pandas",
              description: "Load datasets, taught with pd.read_csv example.",
            },
            {
              name: "Matplotlib",
              description: "Plot data, taught with plt.plot example.",
            },
          ],
        },
        {
          name: "Tool Installation",
          description:
            "Set up development environment, taught with installation commands.",
          children: [
            {
              name: "Python",
              description:
                "Install Python 3.x, taught with python --version check.",
            },
            {
              name: "TensorFlow",
              description:
                "Install TensorFlow, taught with pip install tensorflow.",
            },
            {
              name: "Jupyter",
              description:
                "Set up Jupyter, taught with pip install jupyter and jupyter notebook command.",
            },
          ],
        },
        {
          name: "First Script",
          description:
            "Run your first TensorFlow script, taught with a hello world example.",
          children: [
            {
              name: "Import TensorFlow",
              description: "Import tf, taught with import tensorflow as tf.",
            },
            {
              name: "Basic Operation",
              description:
                "Print hello, taught with tf.print('Hello, TensorFlow!').",
            },
            {
              name: "Verify Setup",
              description: "Check version, taught with tf.__version__ example.",
            },
          ],
        },
      ],
      dividerText: "proceed to machine learning basics.",
    },
    {
      name: " Machine Learning Fundamentals",
      description:
        "Understand core ML concepts for TensorFlow, taught with a linear regression example in Jupyter.",
      children: [
        {
          name: "ML Concepts",
          description:
            "Learn foundational ML ideas, taught with simple explanations and examples.",
          children: [
            {
              name: "Supervised Learning",
              description:
                "Understand labeled data, taught with regression example.",
            },
            {
              name: "Unsupervised Learning",
              description:
                "Learn clustering, taught with a k-means explanation.",
            },
            {
              name: "Loss Functions",
              description:
                "Explore MSE, taught with a mean squared error example.",
            },
          ],
        },
        {
          name: "Data Handling",
          description: "Prepare data for ML, taught with preprocessing steps.",
          children: [
            {
              name: "Load Data",
              description:
                "Import datasets, taught with pandas.read_csv example.",
            },
            {
              name: "Clean Data",
              description: "Handle missing values, taught with dropna example.",
            },
            {
              name: "Normalize Data",
              description:
                "Scale features, taught with sklearn.preprocessing example.",
            },
          ],
        },
        {
          name: "First ML Model",
          description:
            "Build a basic ML model, taught with a scikit-learn example before TensorFlow.",
          children: [
            {
              name: "Linear Regression",
              description:
                "Fit a line, taught with sklearn.linear_model example.",
            },
            {
              name: "Train Model",
              description: "Train model, taught with fit method example.",
            },
            {
              name: "Predict",
              description:
                "Make predictions, taught with predict method example.",
            },
          ],
        },
      ],
      dividerText: "start with TensorFlow core.",
    },
    {
      name: " TensorFlow Core",
      description:
        "Master TensorFlow’s fundamental features, taught with a basic neural network in Jupyter.",
      children: [
        {
          name: "Working with Tensors",
          description:
            "Understand TensorFlow’s data structure, taught with tensor operations.",
          children: [
            {
              name: "Create Tensors",
              description: "Make tensors, taught with tf.constant example.",
            },
            {
              name: "Math Operations",
              description:
                "Add/multiply, taught with tf.add and tf.multiply examples.",
            },
            {
              name: "Tensor Shape",
              description: "Inspect shape, taught with tensor.shape example.",
            },
          ],
        },
        {
          name: "Keras Basics",
          description:
            "Use Keras API for model building, taught with a simple model.",
          children: [
            {
              name: "Sequential Model",
              description:
                "Build sequentially, taught with tf.keras.Sequential example.",
            },
            {
              name: "Add Layers",
              description:
                "Add Dense layers, taught with layers.Dense example.",
            },
            {
              name: "Compile Model",
              description:
                "Set loss/optimizer, taught with model.compile example.",
            },
          ],
        },
        {
          name: "Training Process",
          description:
            "Train your first TensorFlow model, taught with a fit example.",
          children: [
            {
              name: "Fit Model",
              description: "Train model, taught with model.fit example.",
            },
            {
              name: "Epochs",
              description: "Set epochs, taught with epochs=10 example.",
            },
            {
              name: "Evaluate",
              description:
                "Check accuracy, taught with model.evaluate example.",
            },
          ],
        },
      ],
      dividerText: "build neural networks.",
    },
    {
      name: " Building Neural Networks",
      description:
        "Construct neural networks with TensorFlow, taught with a CNN for image classification in Jupyter.",
      children: [
        {
          name: "Feedforward Neural Networks",
          description:
            "Create basic NNs, taught with a classification example.",
          children: [
            {
              name: "Input Layer",
              description: "Define input, taught with input_shape example.",
            },
            {
              name: "Hidden Layers",
              description: "Add Dense layers, taught with units=64 example.",
            },
            {
              name: "Output Layer",
              description: "Set output, taught with softmax example.",
            },
          ],
        },
        {
          name: "Convolutional Neural Networks",
          description: "Build CNNs for images, taught with a digit classifier.",
          children: [
            {
              name: "Conv2D",
              description:
                "Add convolution, taught with tf.keras.layers.Conv2D example.",
            },
            {
              name: "Pooling",
              description: "Reduce size, taught with MaxPooling2D example.",
            },
            {
              name: "Flatten",
              description: "Flatten output, taught with Flatten layer example.",
            },
          ],
        },
        {
          name: "Recurrent Neural Networks",
          description: "Use RNNs for sequences, taught with a text example.",
          children: [
            {
              name: "LSTM",
              description:
                "Add LSTM, taught with tf.keras.layers.LSTM example.",
            },
            {
              name: "GRU",
              description: "Use GRU, taught with tf.keras.layers.GRU example.",
            },
            {
              name: "Bidirectional",
              description:
                "Wrap bidirectional, taught with Bidirectional example.",
            },
          ],
        },
      ],
      dividerText: "handle data pipelines.",
    },
    {
      name: " Data Pipelines",
      description:
        "Manage data efficiently with TensorFlow, taught with a tf.data pipeline for images in Jupyter.",
      children: [
        {
          name: "tf.data Basics",
          description:
            "Create datasets with tf.data, taught with dataset examples.",
          children: [
            {
              name: "From Tensors",
              description:
                "Create dataset, taught with from_tensor_slices example.",
            },
            {
              name: "Batch Data",
              description: "Batch data, taught with batch method example.",
            },
            {
              name: "Shuffle",
              description: "Shuffle data, taught with shuffle method example.",
            },
          ],
        },
        {
          name: "Preprocessing",
          description: "Preprocess data, taught with image and text examples.",
          children: [
            {
              name: "Image Resizing",
              description:
                "Resize images, taught with tf.image.resize example.",
            },
            {
              name: "Augmentation",
              description: "Augment data, taught with RandomFlip example.",
            },
            {
              name: "Text Tokenization",
              description:
                "Tokenize text, taught with TextVectorization example.",
            },
          ],
        },
      ],
      dividerText: "train and optimize models.",
    },
    {
      name: " Training and Optimization",
      description:
        "Train and optimize TensorFlow models effectively, taught with a tuned classifier in Jupyter.",
      children: [
        {
          name: "Training Setup",
          description:
            "Configure training, taught with loss and optimizer examples.",
          children: [
            {
              name: "Loss Functions",
              description:
                "Set loss, taught with categorical_crossentropy example.",
            },
            {
              name: "Optimizers",
              description: "Use Adam, taught with optimizer='adam' example.",
            },
            {
              name: "Metrics",
              description:
                "Track accuracy, taught with metrics=['accuracy'] example.",
            },
          ],
        },
        {
          name: "Optimization Techniques",
          description: "Optimize training, taught with callbacks and tuning.",
          children: [
            {
              name: "Early Stopping",
              description:
                "Stop early, taught with EarlyStopping callback example.",
            },
            {
              name: "Learning Rate Tuning",
              description:
                "Tune LR, taught with LearningRateScheduler example.",
            },
            {
              name: "Dropout",
              description:
                "Prevent overfitting, taught with Dropout layer example.",
            },
          ],
        },
      ],
      dividerText: "deploy models.",
    },
    {
      name: " Model Deployment",
      description:
        "Deploy TensorFlow models for real-world use, taught with a served model example.",
      children: [
        {
          name: "Model Persistence",
          description: "Save and load models, taught with save/load examples.",
          children: [
            {
              name: "Save Full Model",
              description: "Save model, taught with model.save example.",
            },
            {
              name: "SavedModel Format",
              description:
                "Use SavedModel, taught with tf.saved_model.save example.",
            },
            {
              name: "Load Model",
              description:
                "Load model, taught with tf.keras.models.load_model example.",
            },
          ],
        },
        {
          name: "Production Deployment",
          description: "Deploy models, taught with serving and lite examples.",
          children: [
            {
              name: "TensorFlow Serving",
              description: "Serve model, taught with Docker serving example.",
            },
            {
              name: "TFLite",
              description:
                "Convert to TFLite, taught with TFLiteConverter example.",
            },
            {
              name: "Inference",
              description:
                "Run predictions, taught with model.predict example.",
            },
          ],
        },
      ],
      dividerText: "apply TensorFlow to computer vision.",
    },
    {
      name: " Computer Vision with TensorFlow",
      description:
        "Use TensorFlow for computer vision tasks, taught with an image classifier in Jupyter.",
      children: [
        {
          name: "Image Handling",
          description: "Process images, taught with preprocessing examples.",
          children: [
            {
              name: "Load Images",
              description:
                "Load images, taught with tf.keras.preprocessing.image example.",
            },
            {
              name: "Resize Images",
              description: "Resize, taught with tf.image.resize example.",
            },
            {
              name: "Augmentation",
              description: "Augment, taught with RandomRotation example.",
            },
          ],
        },
        {
          name: "Vision Models",
          description:
            "Build vision models, taught with classification and detection examples.",
          children: [
            {
              name: "Pre-trained CNNs",
              description:
                "Use MobileNet, taught with transfer learning example.",
            },
            {
              name: "Object Detection",
              description:
                "Detect objects, taught with TF Object Detection API example.",
            },
            {
              name: "Custom CNN",
              description:
                "Build CNN, taught with Conv2D architecture example.",
            },
          ],
        },
      ],
      dividerText: "explore NLP with TensorFlow.",
    },
    {
      name: " Natural Language Processing with TensorFlow",
      description:
        "Apply TensorFlow to NLP, taught with a sentiment analysis model in Jupyter.",
      children: [
        {
          name: "Text Preprocessing",
          description:
            "Prepare text data, taught with tokenization and embedding examples.",
          children: [
            {
              name: "Tokenization",
              description: "Tokenize, taught with TextVectorization example.",
            },
            {
              name: "Embedding",
              description: "Embed text, taught with Embedding layer example.",
            },
            {
              name: "Padding",
              description: "Pad sequences, taught with pad_sequences example.",
            },
          ],
        },
        {
          name: "NLP Models",
          description:
            "Build NLP models, taught with RNN and transformer examples.",
          children: [
            {
              name: "RNN for Text",
              description: "Use LSTM, taught with a text sequence example.",
            },
            {
              name: "Transformers",
              description: "Use BERT, taught with tensorflow_hub example.",
            },
            {
              name: "Sentiment Analysis",
              description: "Classify sentiment, taught with a binary example.",
            },
          ],
        },
      ],
      dividerText: "customize TensorFlow models.",
    },
    {
      name: " Customizing TensorFlow",
      description:
        "Create custom TensorFlow components, taught with a custom training loop in Jupyter.",
      children: [
        {
          name: "Custom Layers",
          description:
            "Build custom layers, taught with a layer subclass example.",
          children: [
            {
              name: "Layer Definition",
              description:
                "Define layer, taught with tf.keras.layers.Layer example.",
            },
            {
              name: "Build Method",
              description: "Add build, taught with build method example.",
            },
            {
              name: "Call Method",
              description: "Implement call, taught with computation example.",
            },
          ],
        },
        {
          name: "Custom Training",
          description:
            "Customize training, taught with a GradientTape example.",
          children: [
            {
              name: "Custom Model",
              description:
                "Define model, taught with tf.keras.Model subclass example.",
            },
            {
              name: "GradientTape",
              description: "Manual training, taught with GradientTape example.",
            },
            {
              name: "Custom Loss",
              description:
                "Create loss, taught with a custom loss function example.",
            },
          ],
        },
      ],
      dividerText: "scale TensorFlow training.",
    },
    {
      name: " Scaling TensorFlow",
      description:
        "Scale TensorFlow across devices, taught with a distributed training example in Jupyter.",
      children: [
        {
          name: "Distributed Strategies",
          description:
            "Use distributed training, taught with multi-GPU and TPU examples.",
          children: [
            {
              name: "Multi-GPU",
              description:
                "Use MirroredStrategy, taught with tf.distribute example.",
            },
            {
              name: "TPU",
              description:
                "Train on TPU, taught with TPUStrategy example in Colab.",
            },
            {
              name: "Data Distribution",
              description: "Distribute data, taught with tf.data example.",
            },
          ],
        },
        {
          name: "Performance Monitoring",
          description:
            "Monitor distributed training, taught with profiling tools.",
          children: [
            {
              name: "TensorBoard",
              description:
                "Track metrics, taught with TensorBoard callback example.",
            },
            {
              name: "Profiler",
              description:
                "Profile performance, taught with tf.profiler example.",
            },
            {
              name: "Resource Usage",
              description: "Check usage, taught with a system monitor example.",
            },
          ],
        },
      ],
      dividerText: "optimize TensorFlow models.",
    },
    {
      name: " Optimizing TensorFlow Models",
      description:
        "Optimize TensorFlow models for efficiency, taught with a lightweight model in Jupyter.",
      children: [
        {
          name: "Model Optimization",
          description:
            "Reduce model size and speed, taught with optimization techniques.",
          children: [
            {
              name: "Quantization",
              description:
                "Quantize model, taught with TFLiteConverter example.",
            },
            {
              name: "Pruning",
              description: "Prune weights, taught with tfmot.sparsity example.",
            },
            {
              name: "Clustering",
              description: "Cluster weights, taught with a clustering example.",
            },
          ],
        },
        {
          name: "Graph Optimization",
          description:
            "Optimize computation graph, taught with performance tools.",
          children: [
            {
              name: "tf.function",
              description: "Optimize graph, taught with @tf.function example.",
            },
            {
              name: "XLA",
              description: "Use XLA, taught with jit_compile example.",
            },
            {
              name: "Profiling",
              description:
                "Profile graph, taught with TensorBoard profiler example.",
            },
          ],
        },
      ],
      dividerText: "integrate with production systems.",
    },
    {
      name: " Production Integration",
      description:
        "Integrate TensorFlow into production workflows, taught with a CI/CD pipeline in VS Code.",
      children: [
        {
          name: "Containerization",
          description: "Containerize models, taught with Docker examples.",
          children: [
            {
              name: "Dockerfile",
              description:
                "Write Dockerfile, taught with TF Serving Dockerfile example.",
            },
            {
              name: "Build Image",
              description: "Build image, taught with docker build example.",
            },
            {
              name: "Run Container",
              description: "Run container, taught with docker run example.",
            },
          ],
        },
        {
          name: "CI/CD Pipeline",
          description:
            "Automate workflows, taught with GitHub Actions examples.",
          children: [
            {
              name: "Workflow Setup",
              description:
                "Set up .yml, taught with a GitHub workflow example.",
            },
            {
              name: "Test in CI",
              description: "Run tests, taught with a pytest step example.",
            },
            {
              name: "Deploy Model",
              description:
                "Deploy to K8s, taught with a kubectl apply step example.",
            },
          ],
        },
      ],
      dividerText: "specialize and engage with the community.",
    },
    {
      name: " Specialization and Community",
      description:
        "Specialize in TensorFlow applications and contribute to the community, taught with advanced examples.",
      children: [
        {
          name: "Specialized Applications",
          description:
            "Explore TensorFlow niches, taught with practical projects.",
          children: [
            {
              name: "Reinforcement Learning",
              description: "Use TF-Agents, taught with a RL example.",
            },
            {
              name: "Generative Models",
              description: "Build GANs, taught with a GAN example.",
            },
            {
              name: "Time Series",
              description:
                "Forecast with RNNs, taught with a time series example.",
            },
          ],
        },
        {
          name: "Community Engagement",
          description:
            "Contribute and learn from the community, taught with open-source examples.",
          children: [
            {
              name: "Contribute to TensorFlow",
              description: "Submit PR, taught with a GitHub PR example.",
            },
            {
              name: "TensorFlow Forum",
              description: "Engage, taught with a forum participation example.",
            },
            {
              name: "Stay Updated",
              description:
                "Follow trends, taught with TensorFlow blog and X examples.",
            },
          ],
        },
      ],
    },
  ],
};

export default tensorflowDeveloperRoadmap;
