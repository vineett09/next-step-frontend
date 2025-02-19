const machineLearning = {
  name: "Machine Learning",
  children: [
    { name: "Python" },
    {
      name: "TensorFlow",
      children: [
        { name: "Keras" },
        { name: "Estimators" },
        { name: "Eager Execution" },
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
      ],
    },
  ],
};

export default machineLearning;
