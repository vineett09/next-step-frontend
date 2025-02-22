const roboticsRoadmap = {
  name: "Robotics Engineer Roadmap 2025",
  description:
    "A comprehensive guide to mastering robotics skills from beginner to advanced levels, aligned with 2025 industry trends and market demands.",
  children: [
    {
      name: "Foundational Knowledge",
      description:
        "Build a solid base in programming, electronics, and robotics fundamentals.",
      children: [
        {
          name: "Programming Basics",
          description:
            "Gain proficiency in programming languages essential for robotics.",
          children: [
            {
              name: "Python",
              description: "Widely used for robot control and automation.",
            },
            {
              name: "C++",
              description:
                "Key for performance-critical robotics applications.",
            },
            {
              name: "MATLAB",
              description: "Useful for simulations and algorithm development.",
            },
          ],
        },
        {
          name: "Electronics and Hardware",
          description: "Understand the components that power robots.",
          children: [
            {
              name: "Microcontrollers",
              description: "Learn Arduino or Raspberry Pi for basic control.",
            },
            {
              name: "Sensors and Actuators",
              description:
                "Explore ultrasonic, IR sensors, motors, and servos.",
            },
            {
              name: "Basic Circuits",
              description: "Grasp voltage, current, and circuit design.",
            },
          ],
        },
        {
          name: "Introduction to Robotics",
          description: "Learn the basics of robotics and its applications.",
          children: [
            {
              name: "History and Applications",
              description: "Understand robotics evolution and uses.",
            },
            {
              name: "Robot Kits",
              description: "Experiment with kits like LEGO Mindstorms or VEX.",
            },
          ],
        },
      ],
      dividerText: "Core Robotics Skills",
    },
    {
      name: "Core Robotics Skills",
      description:
        "Develop intermediate skills in control, simulation, and software.",
      children: [
        {
          name: "Robot Operating System (ROS)",
          description: "Master ROS for robot software development.",
          children: [
            {
              name: "ROS Basics",
              description: "Learn nodes, topics, and messages.",
            },
            {
              name: "ROS 2",
              description: "Explore the latest version for real-time systems.",
            },
          ],
        },
        {
          name: "Control Systems",
          description: "Understand how to manage robot movements.",
          children: [
            {
              name: "PID Controllers",
              description:
                "Implement proportional-integral-derivative control.",
            },
            {
              name: "Kinematics",
              description: "Study forward and inverse kinematics for motion.",
            },
          ],
        },
        {
          name: "Simulation Tools",
          description: "Use simulations to test and refine robots.",
          children: [
            {
              name: "Gazebo",
              description: "Simulate robots in 3D environments with ROS.",
            },
            {
              name: "Webots",
              description: "Open-source tool for robot simulation.",
            },
          ],
        },
      ],
      dividerText: "Artificial Intelligence and Machine Learning",
    },
    {
      name: "AI and Machine Learning",
      description: "Integrate AI and ML for intelligent robotic systems.",
      children: [
        {
          name: "Machine Learning Basics",
          description: "Understand foundational ML concepts for robotics.",
          children: [
            {
              name: "Supervised Learning",
              description: "Train models for tasks like object detection.",
            },
            {
              name: "Unsupervised Learning",
              description: "Explore clustering for data analysis.",
            },
          ],
        },
        {
          name: "Deep Learning",
          description: "Apply advanced AI for complex robotics tasks.",
          children: [
            {
              name: "Neural Networks",
              description: "Use CNNs for image recognition in robots.",
            },
            {
              name: "Reinforcement Learning",
              description:
                "Teach robots decision-making through trial and error.",
            },
          ],
        },
        {
          name: "Frameworks",
          description: "Leverage tools for AI development.",
          children: [
            {
              name: "TensorFlow",
              description: "Popular framework for deep learning.",
            },
            {
              name: "PyTorch",
              description: "Flexible tool for ML research and robotics.",
            },
          ],
        },
      ],
      dividerText: "Advanced Robotics Concepts",
    },
    {
      name: "Advanced Robotics Concepts",
      description:
        "Specialize in cutting-edge robotics technologies and trends.",
      children: [
        {
          name: "Humanoid Robotics",
          description: "Design robots with human-like capabilities.",
          children: [
            {
              name: "Biomechanics",
              description: "Study human movement for robot design.",
            },
            {
              name: "Human-Robot Interaction",
              description: "Develop intuitive interfaces for collaboration.",
            },
          ],
        },
        {
          name: "Digital Twins",
          description: "Create virtual models for real-world robot testing.",
          children: [
            {
              name: "Simulation Integration",
              description: "Link physical robots with digital replicas.",
            },
            {
              name: "Performance Optimization",
              description: "Use twins to enhance robot efficiency.",
            },
          ],
        },
        {
          name: "Sustainability in Robotics",
          description: "Focus on eco-friendly robotics solutions.",
          children: [
            {
              name: "Energy Efficiency",
              description: "Design low-power robots.",
            },
            {
              name: "Renewable Applications",
              description: "Apply robotics in solar or wind energy.",
            },
          ],
        },
      ],
      dividerText: "Tools and Frameworks",
    },
    {
      name: "Tools and Frameworks",
      description: "Master tools for advanced robotics development.",
      children: [
        {
          name: "Design Tools",
          description: "Use software for robot design and prototyping.",
          children: [
            {
              name: "SolidWorks",
              description: "CAD tool for mechanical design.",
            },
            {
              name: "Fusion 360",
              description: "Integrated design and simulation platform.",
            },
          ],
        },
        {
          name: "AR/VR Integration",
          description: "Enhance robotics with augmented and virtual reality.",
          children: [
            {
              name: "Unity",
              description: "Develop AR/VR for robot training and control.",
            },
            {
              name: "Unreal Engine",
              description: "High-fidelity simulations for robotics.",
            },
          ],
        },
      ],
      dividerText: "Projects and Applications",
    },
    {
      name: "Projects and Applications",
      description: "Apply skills to real-world robotics projects.",
      children: [
        {
          name: "Project 1: Line-Following Robot",
          description: "Build a simple robot using sensors and Arduino.",
        },
        {
          name: "Project 2: Autonomous Navigation",
          description: "Create a robot with ROS for obstacle avoidance.",
        },
        {
          name: "Project 3: Robotic Arm",
          description: "Design a pick-and-place arm with kinematics.",
        },
        {
          name: "Project 4: AI-Powered Robot",
          description:
            "Develop a robot using deep learning for object manipulation.",
        },
      ],
      dividerText: "Continuous Learning and Trends",
    },
    {
      name: "Continuous Learning",
      description: "Stay updated with robotics trends and advancements.",
      children: [
        {
          name: "Resources",
          description: "Leverage ongoing learning materials.",
          children: [
            {
              name: "IEEE Transactions on Robotics",
              description: "Research journal for cutting-edge robotics.",
            },
            {
              name: "Coursera Robotics Courses",
              description: "Online courses for skill enhancement.",
            },
            {
              name: "Conferences (ICRA, IROS)",
              description: "Attend for networking and updates.",
            },
          ],
        },
        {
          name: "Emerging Trends",
          description: "Explore 2025 robotics trends.",
          children: [
            {
              name: "Collaborative Robots (Cobots)",
              description: "Robots working alongside humans.",
            },
            {
              name: "Mobile Manipulation",
              description: "Robots combining mobility and dexterity.",
            },
          ],
        },
      ],
    },
  ],
};
export default roboticsRoadmap;
