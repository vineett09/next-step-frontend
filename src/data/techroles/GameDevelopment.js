const gameDevelopmentRoadmap = {
  name: "Game Development Roadmap 2025",
  children: [
    {
      name: "Foundational Programming Skills",
      children: [
        {
          name: "Core Languages",
          children: [
            {
              name: "C++",
              preferred: true,
              children: [
                { name: "Basics (Syntax, Pointers)" },
                { name: "Object-Oriented Programming" },
                { name: "Memory Management" },
                { name: "STL (Standard Template Library)" },
              ],
            },
            {
              name: "C#",
              children: [
                { name: "Basics (Syntax, Classes)" },
                { name: "Object-Oriented Programming" },
                { name: "LINQ" },
                { name: "Delegates and Events" },
              ],
            },
            {
              name: "Python",
              children: [
                { name: "Basics (Syntax, Variables)" },
                { name: "Data Structures" },
                { name: "Scripting" },
              ],
            },
          ],
        },
        {
          name: "Mathematics for Games",
          children: [
            { name: "Linear Algebra (Vectors, Matrices)" },
            { name: "Trigonometry" },
            { name: "Physics Basics (Kinematics, Forces)" },
            { name: "Probability and Randomness" },
          ],
        },
        {
          name: "Algorithms and Data Structures",
          children: [
            { name: "Arrays and Lists" },
            { name: "Trees and Graphs" },
            { name: "Pathfinding (A*, Dijkstra)" },
            { name: "Optimization Techniques" },
          ],
        },
      ],
      dividerText: "Foundations laid—dive into game engines and tools.",
    },
    {
      name: "Game Engines and Development Tools",
      children: [
        {
          name: "Client-Side Engines",
          children: [
            {
              name: "Unity",
              preferred: true,
              children: [
                { name: "Unity Editor Basics" },
                { name: "C# Scripting" },
                { name: "2D and 3D Scenes" },
                { name: "Physics System" },
              ],
            },
            {
              name: "Unreal Engine",
              children: [
                { name: "Blueprint Visual Scripting" },
                { name: "C++ Integration" },
                { name: "Level Design" },
                { name: "Material Editor" },
              ],
            },
            {
              name: "Godot",
              children: [
                { name: "GDScript" },
                { name: "Node-Based Architecture" },
                { name: "2D and 3D Workflows" },
              ],
            },
          ],
        },
        {
          name: "Development Tools",
          children: [
            { name: "Version Control (Git, GitHub)" },
            { name: "IDE (Visual Studio, VS Code)" },
            { name: "Debugging Tools" },
            { name: "Profiling (Unity Profiler, Unreal Insights)" },
          ],
        },
      ],
      dividerText: "Tools mastered—build core client-side skills.",
    },
    {
      name: "Client-Side Game Development",
      children: [
        {
          name: "Graphics and Rendering",
          children: [
            { name: "2D Sprites and Animation" },
            { name: "3D Models and Rigging" },
            { name: "Shaders (HLSL, GLSL)" },
            { name: "Lighting and Shadows" },
            { name: "Particle Systems" },
          ],
        },
        {
          name: "Gameplay Mechanics",
          children: [
            { name: "Player Input (Keyboard, Controller)" },
            { name: "Character Movement" },
            { name: "Collision Detection" },
            { name: "Game States (Menus, Levels)" },
            { name: "AI Behaviors (Finite State Machines)" },
          ],
        },
        {
          name: "Audio",
          children: [
            { name: "Sound Effects" },
            { name: "Background Music" },
            { name: "Audio Mixers (Unity Audio, FMOD)" },
          ],
        },
        {
          name: "UI/UX for Games",
          children: [
            { name: "Heads-Up Display (HUD)" },
            { name: "Menus and Navigation" },
            { name: "Responsive Design" },
          ],
        },
      ],
      dividerText: "Client-side built—explore server-side fundamentals.",
    },
    {
      name: "Server-Side Game Development",
      children: [
        {
          name: "Networking Basics",
          children: [
            { name: "TCP/UDP Protocols" },
            { name: "Sockets" },
            { name: "Client-Server Architecture" },
            { name: "REST APIs" },
          ],
        },
        {
          name: "Multiplayer Frameworks",
          children: [
            { name: "Photon (Unity)" },
            { name: "Mirror (Unity)" },
            { name: "Netcode for GameObjects (Unity)" },
            { name: "Unreal Networking" },
          ],
        },
        {
          name: "Server Technologies",
          children: [
            { name: "Node.js" },
            { name: "Python (Django, Flask)" },
            { name: "C# (ASP.NET Core)" },
            { name: "WebSockets" },
          ],
        },
      ],
      dividerText: "Server-side ready—enhance with advanced techniques.",
    },
    {
      name: "Advanced Game Development",
      children: [
        {
          name: "Client-Side Advanced",
          children: [
            { name: "Procedural Generation" },
            { name: "Advanced Physics (Ragdoll, Soft Body)" },
            { name: "VR/AR Development (Oculus, ARKit)" },
            { name: "Optimization (LOD, Occlusion Culling)" },
          ],
        },
        {
          name: "Server-Side Advanced",
          children: [
            { name: "Lag Compensation" },
            { name: "Authoritative Servers" },
            { name: "Matchmaking Systems" },
            { name: "Cloud Hosting (AWS, Google Cloud)" },
          ],
        },
        {
          name: "Cross-Platform Development",
          children: [
            { name: "Mobile (iOS, Android)" },
            { name: "Console (PlayStation, Xbox)" },
            { name: "PC Deployment" },
          ],
        },
      ],
      dividerText: "Advanced skills acquired—test and optimize your games.",
    },
    {
      name: "Testing and Optimization",
      children: [
        {
          name: "Testing",
          children: [
            { name: "Unit Testing (NUnit, Unreal Test Framework)" },
            { name: "Playtesting" },
            { name: "Automated Testing" },
          ],
        },
        {
          name: "Performance Optimization",
          children: [
            { name: "Frame Rate Optimization" },
            { name: "Memory Management" },
            { name: "Asset Compression" },
            { name: "Network Bandwidth Optimization" },
          ],
        },
        {
          name: "Debugging",
          children: [
            { name: "Log Systems" },
            { name: "Crash Reporting (Sentry)" },
            { name: "Profiling Tools" },
          ],
        },
      ],
      dividerText: "Games polished—deploy and distribute your work.",
    },
    {
      name: "Game Deployment and Distribution",
      children: [
        {
          name: "Platforms",
          children: [
            { name: "Steam" },
            { name: "Google Play Store" },
            { name: "Apple App Store" },
            { name: "Itch.io" },
            { name: "Console Stores (PSN, Xbox Live)" },
          ],
        },
        {
          name: "Build Process",
          children: [
            { name: "Code Signing" },
            { name: "Build Automation" },
            { name: "Cross-Platform Builds" },
          ],
        },
        {
          name: "Monetization",
          children: [
            { name: "In-App Purchases" },
            { name: "Ads Integration" },
            { name: "Subscription Models" },
          ],
        },
        {
          name: "Analytics",
          children: [
            { name: "Game Analytics (Unity Analytics)" },
            { name: "Player Behavior Tracking" },
          ],
        },
      ],
      dividerText: "Games live—explore emerging trends and technologies.",
    },
    {
      name: "Emerging Trends and Technologies",
      children: [
        {
          name: "AI in Games",
          children: [
            { name: "Behavior Trees" },
            { name: "Machine Learning (NPC Behavior)" },
            { name: "Dynamic Difficulty Adjustment" },
          ],
        },
        {
          name: "Metaverse and Social Gaming",
          children: [
            { name: "Spatial Audio" },
            { name: "Persistent Worlds" },
            { name: "Social Integration" },
          ],
        },
        {
          name: "Blockchain and NFTs",
          children: [
            { name: "Crypto Transactions" },
            { name: "NFT Ownership" },
            { name: "Smart Contracts" },
          ],
        },
        {
          name: "Cloud Gaming",
          children: [
            { name: "Streaming (Google Stadia, Luna)" },
            { name: "Server-Side Rendering" },
          ],
        },
      ],
      dividerText: "Trends mastered—build projects and grow your career.",
    },
    {
      name: "Projects and Career Growth",
      children: [
        {
          name: "Portfolio Projects",
          children: [
            { name: "Simple 2D Game (e.g., Platformer)" },
            { name: "3D Game (e.g., FPS)" },
            { name: "Multiplayer Game" },
            { name: "Open Source Contributions" },
          ],
        },
        {
          name: "Collaboration and Soft Skills",
          children: [
            { name: "Game Jams" },
            { name: "Teamwork (Agile, Scrum)" },
            { name: "Communication with Artists/Designers" },
          ],
        },
        {
          name: "Continuous Learning",
          children: [
            { name: "GDC (Game Developers Conference)" },
            { name: "Online Courses (Udemy, Coursera)" },
            { name: "Game Dev Communities (Reddit, Discord)" },
          ],
        },
      ],
    },
  ],
};

export default gameDevelopmentRoadmap;
