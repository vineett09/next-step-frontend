const gameDevelopmentRoadmap = {
  name: "Game Development Roadmap 2025",
  description:
    "A comprehensive guide to essential game development skills and technologies for 2025, covering beginner to advanced levels.",
  children: [
    {
      name: "Foundations of Game Development",
      description:
        "Learn the core concepts and skills required to start building games.",
      children: [
        {
          name: "Programming Fundamentals",
          description:
            "Master the basics of programming, which are essential for game development.",
          children: [
            {
              name: "C#",
              description:
                "Primary language for Unity, one of the most popular game engines.",
            },
            {
              name: "C++",
              description:
                "Widely used in Unreal Engine and high-performance game development.",
            },
            {
              name: "Python",
              description:
                "Used for scripting, prototyping, and tools development.",
            },
          ],
        },
        {
          name: "Mathematics for Game Development",
          description:
            "Understand the math behind game physics, graphics, and mechanics.",
          children: [
            {
              name: "Linear Algebra",
              description:
                "Essential for 3D transformations, vectors, and matrices.",
            },
            {
              name: "Trigonometry",
              description: "Used for rotations, angles, and movement.",
            },
            {
              name: "Calculus",
              description:
                "Important for physics simulations and smooth animations.",
            },
          ],
        },
        {
          name: "Game Design Principles",
          description:
            "Learn the basics of game design, including mechanics, dynamics, and aesthetics.",
          children: [
            {
              name: "Game Loops",
              description:
                "Understand the core loop that drives player engagement.",
            },
            {
              name: "Player Psychology",
              description:
                "Learn how to design for player motivation and engagement.",
            },
            {
              name: "Level Design",
              description: "Create engaging and balanced levels for players.",
            },
          ],
        },
      ],
      dividerText: "Game Engines & Tools",
    },
    {
      name: "Game Engines & Tools",
      description: "Master the tools and engines used to build modern games.",
      children: [
        {
          name: "Unity",
          description:
            "A versatile game engine for 2D and 3D game development.",
          children: [
            {
              name: "Unity UI",
              description: "Design user interfaces for games.",
            },
            {
              name: "Unity Physics",
              description: "Implement realistic physics in games.",
            },
            {
              name: "Unity Scripting",
              description: "Write game logic using C#.",
            },
          ],
        },
        {
          name: "Unreal Engine",
          description:
            "A powerful engine for high-end 3D games and simulations.",
          children: [
            {
              name: "Blueprints",
              description: "Visual scripting system for non-programmers.",
            },
            {
              name: "Unreal C++",
              description: "Write high-performance game logic in C++.",
            },
            {
              name: "Nanite & Lumen",
              description:
                "Advanced rendering technologies for realistic graphics.",
            },
          ],
        },
        {
          name: "Godot",
          description: "An open-source game engine for 2D and 3D games.",
          children: [
            {
              name: "GDScript",
              description: "Godot's Python-like scripting language.",
            },
            {
              name: "Visual Scripting",
              description: "Node-based scripting for rapid prototyping.",
            },
          ],
        },
        {
          name: "Game Development Tools",
          description:
            "Learn tools for asset creation, animation, and sound design.",
          children: [
            {
              name: "Blender",
              description: "3D modeling and animation tool.",
            },
            {
              name: "Substance Painter",
              description: "Texture painting for 3D assets.",
            },
            {
              name: "FMOD / Wwise",
              description: "Audio middleware for game sound design.",
            },
          ],
        },
      ],
      dividerText: "Graphics & Rendering",
    },
    {
      name: "Graphics & Rendering",
      description:
        "Learn the skills required to create visually stunning games.",
      children: [
        {
          name: "Shaders & Materials",
          description: "Create custom visual effects using shaders.",
          children: [
            {
              name: "HLSL/GLSL",
              description: "Languages for writing shaders.",
            },
            {
              name: "Shader Graph (Unity)",
              description: "Visual tool for creating shaders in Unity.",
            },
            {
              name: "Material Editor (Unreal)",
              description: "Create complex materials in Unreal Engine.",
            },
          ],
        },
        {
          name: "Lighting & Shadows",
          description:
            "Master lighting techniques for realistic or stylized visuals.",
          children: [
            {
              name: "Global Illumination",
              description: "Simulate realistic light behavior.",
            },
            {
              name: "Real-Time Ray Tracing",
              description: "Advanced lighting for next-gen graphics.",
            },
          ],
        },
        {
          name: "Post-Processing",
          description:
            "Enhance visuals with effects like bloom, motion blur, and color grading.",
          children: [
            {
              name: "Unity Post-Processing Stack",
              description: "Add cinematic effects to Unity games.",
            },
            {
              name: "Unreal Post-Process Volume",
              description: "Apply visual effects in Unreal Engine.",
            },
          ],
        },
      ],
      dividerText: "Gameplay Programming",
    },
    {
      name: "Gameplay Programming",
      description:
        "Develop the core systems that make games fun and interactive.",
      children: [
        {
          name: "Physics & Collision",
          description: "Implement realistic or stylized physics interactions.",
          children: [
            {
              name: "Rigidbody Dynamics",
              description: "Simulate physical objects in games.",
            },

            {
              name: "Collision Detection",
              description: "Detect and respond to object collisions.",
            },
            {
              name: "Character Controller",
              description: "Simulate player movement and collisions.",
            },
            {
              name: "Projectile Systems",
              description: "Implement projectile behavior and collisions.",
            },
          ],
        },
        {
          name: "AI & Pathfinding",
          description: "Create intelligent behaviors for NPCs and enemies.",
          children: [
            {
              name: "Finite State Machines",
              description: "Model AI behavior using states.",
            },
            {
              name: "A* Algorithm",
              description: "Implement pathfinding for NPCs.",
            },
            {
              name: "Behavior Trees",
              description: "Advanced AI decision-making system.",
            },
          ],
        },
        {
          name: "Multiplayer & Networking",
          description:
            "Build online multiplayer games with real-time interactions.",
          children: [
            {
              name: "Photon Unity Networking",
              description: "Multiplayer framework for Unity.",
            },
            {
              name: "Unreal Networking",
              description: "Build multiplayer games in Unreal Engine.",
            },
            {
              name: "WebSockets",
              description: "Real-time communication for browser games.",
            },
          ],
        },
      ],
      dividerText: "Advanced Topics",
    },
    {
      name: "Advanced Topics",
      description:
        "Explore cutting-edge technologies and trends in game development.",
      children: [
        {
          name: "Virtual Reality (VR)",
          description: "Develop immersive VR experiences.",
          children: [
            {
              name: "Unity XR",
              description: "Build VR games using Unity.",
            },
            {
              name: "Unreal VR",
              description: "Create VR experiences in Unreal Engine.",
            },
          ],
        },
        {
          name: "Augmented Reality (AR)",
          description: "Build AR games for mobile and wearable devices.",
          children: [
            {
              name: "ARKit (iOS)",
              description: "Develop AR apps for Apple devices.",
            },
            {
              name: "ARCore (Android)",
              description: "Build AR apps for Android devices.",
            },
          ],
        },
        {
          name: "Procedural Generation",
          description: "Create dynamic and infinite game worlds.",
          children: [
            {
              name: "Perlin Noise",
              description: "Generate terrain and textures procedurally.",
            },
            {
              name: "Wave Function Collapse",
              description: "Algorithm for procedural level generation.",
            },
          ],
        },
        {
          name: "Machine Learning in Games",
          description: "Integrate AI for adaptive gameplay and NPC behavior.",
          children: [
            {
              name: "Reinforcement Learning",
              description: "Train AI agents to play games.",
            },
            {
              name: "Neural Networks",
              description: "Create intelligent NPCs and systems.",
            },
          ],
        },
      ],
      dividerText: "Professional Development",
    },
    {
      name: "Professional Development",
      description: "Skills to grow your career as a game developer.",
      children: [
        {
          name: "Portfolio Development",
          description: "Showcase your skills with a strong portfolio of games.",
          children: [
            {
              name: "Game Jams",
              description: "Participate in game jams to build experience.",
            },
            {
              name: "Open Source Contributions",
              description: "Contribute to game development projects.",
            },
          ],
        },
        {
          name: "Soft Skills",
          description: "Non-technical skills essential for working in teams.",
          children: [
            {
              name: "Communication",
              description:
                "Collaborate with artists, designers, and programmers.",
            },
            {
              name: "Time Management",
              description: "Meet deadlines in fast-paced environments.",
            },
          ],
        },
        {
          name: "Industry Trends",
          description: "Stay updated with the latest trends and technologies.",
          children: [
            {
              name: "Cloud Gaming",
              description:
                "Explore platforms like Google Stadia and Xbox Cloud.",
            },
            {
              name: "Blockchain Gaming",
              description: "Learn about NFTs and decentralized games.",
            },
          ],
        },
      ],
    },
  ],
};

export default gameDevelopmentRoadmap;
