const machineLearning = {
  name: "Machine Learning",
  children: [
    { name: "Python" },
    {
      name: "TensorFlow 2.0 API and Keras",
      children: [
        { name: "Keras" },
        { name: "Estimators" },
        { name: "Eager Execution Mode and Graph Mode" },
      ],
    },
    {
      name: "Scikit-Learn",
      children: [
        { name: "Supervised Learning" },
        { name: "Unsupervised Learning" },
        { name: "Model Selection" },
        { name: "Feature Selection" },
      ],
    },
    {
      name: "Neural Networks",
      children: [
        { name: "Convolutional Neural Networks" },
        { name: "Recurrent Neural Networks" },
        { name: "Generative Adversarial Networks" },
      ],
    },
    {
      name: "Deep Learning",
      children: [
        { name: "Computer Vision" },
        { name: "Natural Language Processing" },
        { name: "Reinforcement Learning" },
        { name: "AutoML" },
        { name: "Transfer Learning" },
        { name: "Generative Adversarial Networks" },
      ],
    },
  ],
};

export default machineLearning;
