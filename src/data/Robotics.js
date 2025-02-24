const roboticsRoadmap = {
  name: "Robotics Engineer Roadmap 2025",
  description:
    "This comprehensive guide equips aspiring robotics engineers with skills from beginner to advanced levels, aligned with 2025 industry trends and demands. It covers programming, electronics, AI, and advanced robotics concepts. Designed for hands-on learners, it ensures mastery of tools and techniques to design, build, and innovate robotic systems for real-world applications.",
  children: [
    {
      name: "Foundational Knowledge",
      description:
        "This section builds a solid base in programming, electronics, and robotics fundamentals, essential for any robotics career. Learners gain the technical groundwork to control and construct robots effectively. It’s the critical starting point in 2025, blending software and hardware skills to prepare engineers for the interdisciplinary challenges of modern robotics.",
      children: [
        {
          name: "Programming Basics",
          description:
            "Programming Basics develop proficiency in languages crucial for robotics, taught with practical examples. This section focuses on coding for control, simulation, and automation tasks. It’s a foundational skill in 2025, enabling engineers to write efficient software that drives robotic systems in diverse applications from industrial to personal use.",
          children: [
            {
              name: "Python",
              description:
                "Python, widely used in robotics, simplifies control and automation with libraries like ROS and NumPy. This section teaches syntax and scripting for robot tasks. It’s a dominant skill in 2025, prized for its versatility and ease, making it essential for rapid prototyping and AI integration in robotics.",
            },
            {
              name: "C++",
              description:
                "C++ powers performance-critical robotics applications, taught with real-time coding examples. This section covers memory management and speed optimization for robots. It’s a key skill in 2025, vital for low-level control and embedded systems where efficiency and responsiveness are paramount in robotics engineering.",
            },
            {
              name: "MATLAB",
              description:
                "MATLAB excels in simulations and algorithm development, taught with robotics toolboxes. This section covers modeling and data analysis for robot design. It’s a valuable skill in 2025, widely used in academia and industry for prototyping complex robotic systems and control strategies.",
            },
          ],
        },
        {
          name: "Electronics and Hardware",
          description:
            "Electronics and Hardware teach the components powering robots, from microcontrollers to sensors. This section emphasizes hands-on circuit and system integration skills. It’s a core skill in 2025, ensuring engineers can build and troubleshoot the physical foundations of robotic systems in various environments.",
          children: [
            {
              name: "Microcontrollers",
              description:
                "Microcontrollers like Arduino and Raspberry Pi control robots, taught with basic projects. This section covers programming and interfacing hardware components. It’s an essential skill in 2025, providing a practical entry into robotics hardware for prototyping and small-scale automation tasks.",
            },
            {
              name: "Sensors and Actuators",
              description:
                "Sensors (ultrasonic, IR) and actuators (motors, servos) enable robot perception and motion, taught with wiring examples. This section covers their integration. It’s a critical skill in 2025, allowing engineers to design robots that interact with and respond to their surroundings effectively.",
            },
            {
              name: "Basic Circuits",
              description:
                "Basic Circuits cover voltage, current, and design, taught with breadboard setups. This section focuses on building and analyzing simple robotic circuits. It’s a foundational skill in 2025, enabling engineers to understand and create the electrical systems powering robotic functionality.",
            },
          ],
        },
        {
          name: "Introduction to Robotics",
          description:
            "Introduction to Robotics explores the field’s basics and applications, taught with historical context and hands-on kits. This section builds a broad understanding. It’s a vital skill in 2025, providing novices with the knowledge and inspiration to pursue advanced robotics engineering challenges.",
          children: [
            {
              name: "History and Applications",
              description:
                "History and Applications trace robotics evolution and uses, taught with examples from industrial to medical robots. This section covers its societal impact. It’s a key skill in 2025, giving engineers context and motivation to innovate within the expanding robotics industry.",
            },
            {
              name: "Robot Kits",
              description:
                "Robot Kits like LEGO Mindstorms or VEX introduce robotics, taught with assembly and programming. This section covers hands-on experimentation. It’s a practical skill in 2025, offering a beginner-friendly way to explore robotics concepts and build functional prototypes.",
            },
          ],
        },
      ],
      dividerText: "Core Robotics Skills",
    },
    {
      name: "Core Robotics Skills",
      description:
        "This section develops intermediate skills in control, simulation, and software, taught with ROS and kinematics. Learners refine their ability to design functional robots. It’s an essential skill set in 2025, bridging foundational knowledge to practical robotics engineering for real-world system development and deployment.",
      children: [
        {
          name: "Robot Operating System (ROS)",
          description:
            "Robot Operating System (ROS) is the standard for robot software, taught with practical setups. This section focuses on modular, reusable code for robotics. It’s a critical skill in 2025, enabling engineers to develop, simulate, and control complex robotic systems efficiently across industries.",
          children: [
            {
              name: "ROS Basics",
              description:
                "ROS Basics cover nodes, topics, and messages, taught with simple robot examples. This section introduces the ROS ecosystem and communication. It’s a core skill in 2025, providing the foundation for building and managing robotics software in a scalable, modular way.",
            },
            {
              name: "ROS 2",
              description:
                "ROS 2 enhances real-time systems, taught with DDS and migration from ROS 1. This section covers its advanced features for robotics. It’s a modern skill in 2025, supporting next-gen robots with improved reliability and performance in dynamic environments.",
            },
          ],
        },
        {
          name: "Control Systems",
          description:
            "Control Systems manage robot movements, taught with PID and kinematics examples. This section focuses on precise motion and stability in robotics. It’s a key skill in 2025, enabling engineers to design robots that execute tasks accurately in industrial and autonomous applications.",
          children: [
            {
              name: "PID Controllers",
              description:
                "PID Controllers use proportional-integral-derivative logic, taught with tuning for robots. This section covers stabilizing motion like wheel speeds. It’s an essential skill in 2025, ensuring smooth, responsive control in robotic systems from drones to assembly lines.",
            },
            {
              name: "Kinematics",
              description:
                "Kinematics studies robot motion, taught with forward and inverse models in Python. This section covers arm and leg positioning calculations. It’s a critical skill in 2025, enabling precise movement planning for articulated robots in complex tasks like manipulation.",
            },
          ],
        },
        {
          name: "Simulation Tools",
          description:
            "Simulation Tools test robots virtually, taught with Gazebo and Webots. This section focuses on refining designs before physical builds. It’s a valuable skill in 2025, reducing costs and risks in robotics development by allowing engineers to simulate real-world scenarios effectively.",
          children: [
            {
              name: "Gazebo",
              description:
                "Gazebo simulates robots in 3D with ROS, taught with environment setups. This section covers physics and sensor testing virtually. It’s a core skill in 2025, enabling realistic prototyping and validation of robotic behaviors in diverse conditions.",
            },
            {
              name: "Webots",
              description:
                "Webots, an open-source simulator, models robots, taught with basic projects. This section covers its cross-platform simulation capabilities. It’s a practical skill in 2025, offering a flexible tool for engineers to test and refine robotic designs efficiently.",
            },
          ],
        },
      ],
      dividerText: "Artificial Intelligence and Machine Learning",
    },
    {
      name: "AI and Machine Learning",
      description:
        "This section integrates AI and ML into robotics, taught with TensorFlow and reinforcement learning. Learners create intelligent, adaptive systems. It’s a transformative skill in 2025, powering autonomous robots with capabilities like perception and decision-making in dynamic, unpredictable environments.",
      children: [
        {
          name: "Machine Learning Basics",
          description:
            "Machine Learning Basics introduce foundational concepts for robotics, taught with Python examples. This section covers algorithms enhancing robot intelligence. It’s a foundational skill in 2025, enabling engineers to apply data-driven solutions to robotic tasks like navigation and recognition.",
          children: [
            {
              name: "Supervised Learning",
              description:
                "Supervised Learning trains models for tasks like object detection, taught with Scikit-learn. This section covers labeled data and classification. It’s an essential skill in 2025, enabling robots to learn from examples for precise, real-world interactions.",
            },
            {
              name: "Unsupervised Learning",
              description:
                "Unsupervised Learning explores clustering, taught with k-means for robotics data. This section covers pattern discovery without labels. It’s a key skill in 2025, helping robots analyze unstructured data for tasks like environment mapping or grouping.",
            },
          ],
        },
        {
          name: "Deep Learning",
          description:
            "Deep Learning applies advanced AI for robotics, taught with neural networks and RL. This section focuses on complex perception and decision-making. It’s a cutting-edge skill in 2025, driving breakthroughs in autonomous robots for vision, navigation, and adaptive behavior.",
          children: [
            {
              name: "Neural Networks",
              description:
                "Neural Networks, like CNNs, enable image recognition, taught with TensorFlow. This section covers training for robot vision tasks. It’s a core skill in 2025, powering robotic perception for applications like surveillance or autonomous driving with high accuracy.",
            },
            {
              name: "Reinforcement Learning",
              description:
                "Reinforcement Learning teaches robots via trial and error, taught with Q-learning. This section covers decision-making for navigation. It’s an advanced skill in 2025, enabling autonomous robots to adapt and optimize actions in unpredictable environments.",
            },
          ],
        },
        {
          name: "Frameworks",
          description:
            "Frameworks like TensorFlow support AI development, taught with robotics examples. This section focuses on building and deploying ML models. It’s a practical skill in 2025, providing engineers with powerful tools to integrate intelligence into robotic systems efficiently.",
          children: [
            {
              name: "TensorFlow",
              description:
                "TensorFlow powers deep learning, taught with robot vision models. This section covers its ecosystem for training and inference. It’s a key skill in 2025, widely used for scalable AI in robotics across industries like manufacturing and healthcare.",
            },
            {
              name: "PyTorch",
              description:
                "PyTorch offers flexibility for ML research, taught with robotics projects. This section covers dynamic neural networks for robots. It’s a modern skill in 2025, favored for its adaptability in developing cutting-edge robotic AI solutions.",
            },
          ],
        },
      ],
      dividerText: "Advanced Robotics Concepts",
    },
    {
      name: "Advanced Robotics Concepts",
      description:
        "This section specializes in cutting-edge robotics like humanoids and digital twins, taught with advanced tools. Learners tackle 2025’s innovative trends. It’s a high-value skill set, positioning engineers to lead in next-gen robotics for industries requiring sophisticated, sustainable robotic solutions.",
      children: [
        {
          name: "Humanoid Robotics",
          description:
            "Humanoid Robotics designs human-like robots, taught with biomechanics and interaction. This section focuses on advanced capabilities for collaboration. It’s a specialized skill in 2025, driving applications in healthcare, service, and education with robots that mimic human behavior and form.",
          children: [
            {
              name: "Biomechanics",
              description:
                "Biomechanics studies human movement for robot design, taught with modeling tools. This section covers replicating natural motion in humanoids. It’s a key skill in 2025, enabling lifelike robots for assistive and interactive roles in dynamic environments.",
            },
            {
              name: "Human-Robot Interaction",
              description:
                "Human-Robot Interaction develops intuitive interfaces, taught with UI examples. This section covers safe, effective collaboration with humans. It’s an essential skill in 2025, ensuring humanoid robots integrate seamlessly into human spaces for tasks like caregiving or teaching.",
            },
          ],
        },
        {
          name: "Digital Twins",
          description:
            "Digital Twins create virtual robot models, taught with simulation integration. This section focuses on testing and optimization via digital replicas. It’s a cutting-edge skill in 2025, enhancing design and performance analysis for real-world robotic systems in industries like manufacturing.",
          children: [
            {
              name: "Simulation Integration",
              description:
                "Simulation Integration links physical robots to digital twins, taught with ROS and Gazebo. This section covers real-time data syncing. It’s a practical skill in 2025, enabling engineers to test and refine robots virtually before deployment.",
            },
            {
              name: "Performance Optimization",
              description:
                "Performance Optimization uses twins to enhance efficiency, taught with analytics. This section covers tweaking robot parameters virtually. It’s an advanced skill in 2025, reducing costs and improving robotic performance in complex operational scenarios.",
            },
          ],
        },
        {
          name: "Sustainability in Robotics",
          description:
            "Sustainability in Robotics focuses on eco-friendly solutions, taught with energy-efficient designs. This section addresses environmental impact in robotics. It’s a forward-thinking skill in 2025, aligning with global trends for green technology in robotic applications across sectors.",
          children: [
            {
              name: "Energy Efficiency",
              description:
                "Energy Efficiency designs low-power robots, taught with hardware optimization. This section covers reducing consumption in robotics systems. It’s a key skill in 2025, supporting sustainable robotic deployments in energy-conscious industries like logistics.",
            },
            {
              name: "Renewable Applications",
              description:
                "Renewable Applications apply robotics in solar or wind, taught with examples. This section covers sustainable energy robotics projects. It’s a practical skill in 2025, contributing to renewable energy sectors with innovative robotic solutions.",
            },
          ],
        },
      ],
      dividerText: "Tools and Frameworks",
    },
    {
      name: "Tools and Frameworks",
      description:
        "This section masters advanced tools for robotics development, taught with SolidWorks and Unity. Learners design, simulate, and enhance robotic systems. It’s an essential skill in 2025, providing engineers with the software prowess to prototype and integrate cutting-edge technologies into robotics projects.",
      children: [
        {
          name: "Design Tools",
          description:
            "Design Tools like SolidWorks aid robot prototyping, taught with CAD examples. This section focuses on creating precise mechanical designs for robotics. It’s a critical skill in 2025, enabling engineers to build robust, functional robotic hardware for real-world applications.",
          children: [
            {
              name: "SolidWorks",
              description:
                "SolidWorks, a CAD tool, designs robotic parts, taught with modeling projects. This section covers assemblies and simulations for robots. It’s a core skill in 2025, widely used for mechanical engineering in robotics across industries like automotive.",
            },
            {
              name: "Fusion 360",
              description:
                "Fusion 360 integrates design and simulation, taught with robotic prototypes. This section covers its cloud-based tools for robotics. It’s a versatile skill in 2025, offering a unified platform for engineers to design and test robotic components efficiently.",
            },
          ],
        },
        {
          name: "AR/VR Integration",
          description:
            "AR/VR Integration enhances robotics with immersive tech, taught with Unity setups. This section focuses on training and control via virtual environments. It’s a modern skill in 2025, improving robot operation and testing through advanced simulation and interaction techniques.",
          children: [
            {
              name: "Unity",
              description:
                "Unity develops AR/VR for robotics, taught with robot training scenes. This section covers integrating sensors and controls virtually. It’s a key skill in 2025, enabling immersive simulations for operator training and robotic system refinement.",
            },
            {
              name: "Unreal Engine",
              description:
                "Unreal Engine creates high-fidelity robotic simulations, taught with examples. This section covers realistic environments for testing robots. It’s an advanced skill in 2025, offering stunning visuals and physics for precise, high-quality robotic simulations.",
            },
          ],
        },
      ],
      dividerText: "Projects and Applications",
    },
    {
      name: "Projects and Applications",
      description:
        "This section applies robotics skills to real-world projects, taught with hands-on builds. Learners create functional robots from simple to AI-driven. It’s a culminating skill in 2025, showcasing practical expertise and innovation for portfolios and career advancement in robotics engineering.",
      children: [
        {
          name: "Project 1: Line-Following Robot",
          description:
            "Build a line-following robot with sensors and Arduino, taught with step-by-step assembly. This project introduces basic control and hardware integration. It’s a practical skill in 2025, offering a beginner-friendly entry into robotics with tangible, functional outcomes.",
        },
        {
          name: "Project 2: Autonomous Navigation",
          description:
            "Create an autonomous robot with ROS for obstacle avoidance, taught with coding and simulation. This project focuses on navigation algorithms. It’s a key skill in 2025, demonstrating intermediate robotics capabilities for real-world autonomous systems like drones.",
        },
        {
          name: "Project 3: Robotic Arm",
          description:
            "Design a pick-and-place robotic arm with kinematics, taught with C++ and ROS. This project covers motion planning and control. It’s an essential skill in 2025, applying advanced concepts to industrial automation and manipulation tasks.",
        },
        {
          name: "Project 4: AI-Powered Robot",
          description:
            "Develop an AI-powered robot with deep learning for object manipulation, taught with TensorFlow. This project integrates perception and action. It’s an advanced skill in 2025, showcasing cutting-edge robotics for autonomous, intelligent systems in complex environments.",
        },
      ],
      dividerText: "Continuous Learning and Trends",
    },
    {
      name: "Continuous Learning",
      description:
        "This section keeps robotics engineers updated with trends and resources, taught via journals and courses. Learners stay ahead in 2025’s evolving field. It’s a lifelong skill, ensuring adaptability and innovation in robotics as new technologies and applications emerge rapidly.",
      children: [
        {
          name: "Resources",
          description:
            "Resources like IEEE journals provide ongoing learning, taught with access guides. This section focuses on staying informed in robotics. It’s a critical skill in 2025, offering engineers the tools and knowledge to keep pace with advancements and industry shifts.",
          children: [
            {
              name: "IEEE Transactions on Robotics",
              description:
                "IEEE Transactions on Robotics offers cutting-edge research, taught with article analysis. This section covers latest robotics findings. It’s a key skill in 2025, keeping engineers informed on state-of-the-art developments for innovative projects.",
            },
            {
              name: "Coursera Robotics Courses",
              description:
                "Coursera Robotics Courses enhance skills online, taught with course selection. This section covers structured learning paths in robotics. It’s a practical skill in 2025, providing accessible, expert-led education for continuous improvement.",
            },
            {
              name: "Conferences (ICRA, IROS)",
              description:
                "Conferences like ICRA and IROS offer networking, taught with attendance tips. This section covers staying updated via events. It’s a valuable skill in 2025, connecting engineers with peers and trends in the global robotics community.",
            },
          ],
        },
        {
          name: "Emerging Trends",
          description:
            "Emerging Trends explore 2025 robotics innovations, taught with examples. This section focuses on cutting-edge applications and technologies. It’s a forward-thinking skill, preparing engineers to lead in evolving areas of robotics with significant industry impact.",
          children: [
            {
              name: "Collaborative Robots (Cobots)",
              description:
                "Cobots work alongside humans, taught with safety and design examples. This section covers their rise in collaborative tasks. It’s a key skill in 2025, driving robotics in manufacturing and service with human-robot teamwork.",
            },
            {
              name: "Mobile Manipulation",
              description:
                "Mobile Manipulation combines mobility and dexterity, taught with robotic examples. This section covers advanced robotic capabilities. It’s an advanced skill in 2025, enabling robots for dynamic tasks in logistics and home assistance.",
            },
          ],
        },
      ],
    },
  ],
};

export default roboticsRoadmap;
