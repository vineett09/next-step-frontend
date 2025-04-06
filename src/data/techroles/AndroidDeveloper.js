const androidDeveloperRoadmap = {
  name: "Android Developer Roadmap 2025",
  children: [
    {
      name: "Core Programming Languages",
      children: [
        {
          name: "Kotlin",
          preferred: true,
          children: [
            {
              name: "Basics",
            },
            {
              name: "Kotlin Coroutines",
            },
            {
              name: "Extension Functions",
            },
          ],
        },
        {
          name: "Java",
          children: [
            {
              name: "Object-Oriented Programming",
            },
            {
              name: "Java Collections",
            },
            {
              name: "Threads and Executors",
            },
            {
              name: "Android-Specific APIs",
            },
          ],
        },
      ],
      dividerText: "Languages mastered—dive into Android’s core toolkit.",
    },
    {
      name: "Android Development Fundamentals",
      children: [
        {
          name: "Android SDK & Android Studio",
          children: [
            {
              name: "SDK Components",
            },
            {
              name: "Build System (Gradle)",
            },
            {
              name: "Emulators & Debugging",
            },
            {
              name: "Jetpack Libraries",
            },
          ],
        },
        {
          name: "UI/UX Design Principles",
          children: [
            {
              name: "Material Design",
            },
            {
              name: "Responsive Design",
            },
            {
              name: "Accessibility",
            },
          ],
        },
        {
          name: "Navigation Components",
          children: [
            {
              name: "Navigation Graph",
            },
            {
              name: "Fragments",
            },
            {
              name: "Deep Linking",
            },
            {
              name: "Safe Args",
            },
          ],
        },
      ],
      dividerText: "Foundation set—level up with modern Android techniques.",
    },
    {
      name: "Advanced Android Development",
      children: [
        {
          name: "Jetpack Compose",
          preferred: true,
          children: [
            {
              name: "Composables",
            },
            {
              name: "State Management",
            },
            {
              name: "Animations",
            },
            {
              name: "Interoperability",
            },
          ],
        },
        {
          name: "Coroutines & Flow",
          children: [
            {
              name: "Coroutines Basics",
            },
            {
              name: "Flow",
            },
            {
              name: "LiveData Integration",
            },
          ],
        },
        {
          name: "Dependency Injection (DI)",
          children: [
            {
              name: "Hilt",
              preferred: true,
            },
            {
              name: "Dagger",
            },
            {
              name: "Manual DI",
            },
            {
              name: "Scopes",
            },
          ],
        },
        {
          name: "Architecture Patterns",
          children: [
            {
              name: "MVVM",
              preferred: true,
            },
            {
              name: "MVI",
            },
            {
              name: "Clean Architecture",
            },
          ],
        },
      ],
      dividerText: "Skills sharpened—reach beyond Android to iOS (optional).",
    },
    {
      name: "Cross-Platform Development",
      children: [
        {
          name: "Kotlin Multiplatform Mobile",
          children: [
            {
              name: "Shared Modules",
            },
            {
              name: "Native Integration",
            },
            {
              name: "Tooling",
            },
          ],
        },
        {
          name: "Flutter",
          preferred: true,
          children: [
            {
              name: "Dart Basics",
            },
            {
              name: "Widgets",
            },
            {
              name: "Platform Channels",
            },
            {
              name: "Performance Optimization",
            },
          ],
        },
      ],
      dividerText: "Platforms united—power your apps with backend services.",
    },
    {
      name: "Backend Integration",
      children: [
        {
          name: "RESTful APIs",
          children: [
            {
              name: "Retrofit",
              preferred: true,
            },
            {
              name: "OkHttp",
            },
            {
              name: "JSON Parsing",
            },
          ],
        },
        {
          name: "GraphQL",
          children: [
            {
              name: "Apollo Client",
            },
          ],
        },
        {
          name: "Real-Time Data",
          children: [
            {
              name: "WebSockets",
            },
            {
              name: "Firebase Realtime Database",
            },
          ],
        },
      ],
      dividerText: "streamline your Android workflow.",
    },

    {
      name: "Development Tools & Practices",
      children: [
        {
          name: "Version Control Systems (VCS)",
          children: [
            {
              name: "Git",
            },
            {
              name: "GitHub/GitLab",
            },
            {
              name: "Pull Requests",
            },
          ],
        },
        {
          name: "CI/CD",
          children: [
            {
              name: "GitHub Actions",
              preferred: true,
            },
            {
              name: "Jenkins",
            },
            {
              name: "Fastlane",
            },
          ],
        },
        {
          name: "Testing",
          children: [
            {
              name: "Unit Testing",
            },
            {
              name: "UI Testing",
            },
            {
              name: "Integration Testing",
            },
            {
              name: "Performance Testing",
            },
          ],
        },
        {
          name: "App Optimization",
          children: [
            {
              name: "Profiling Tools",
            },
            {
              name: "APK Size Reduction",
            },
            {
              name: "Startup Time",
            },
          ],
        },
      ],
      dividerText: "Process optimized—fortify your apps for safety.",
    },
    {
      name: "Security & Privacy",
      children: [
        {
          name: "Data Protection",
          children: [
            {
              name: "Encryption",
            },
            {
              name: "Secure Storage",
            },
            {
              name: "Keystore",
            },
          ],
        },
        {
          name: "Authentication & Authorization",
          children: [
            {
              name: "OAuth2",
            },
            {
              name: "Firebase Authentication",
            },
          ],
        },
        {
          name: "App Hardening",
          children: [
            {
              name: "ProGuard/R8",
            },
            {
              name: "Runtime Checks",
            },
          ],
        },
      ],
      dividerText: "Data connected—pioneer Android’s next-gen features.",
    },
    {
      name: "Emerging Technologies",
      children: [
        {
          name: "AI & ML",
          children: [
            {
              name: "TensorFlow Lite",
              preferred: true,
            },
            {
              name: "ML Kit",
            },
            {
              name: "Custom Models",
            },
            {
              name: "Edge AI",
            },
          ],
        },
        {
          name: "5G Technology",
          children: [
            {
              name: "Network Optimization",
            },
            {
              name: "Low-Latency Features",
            },
            {
              name: "Adaptive Streaming",
            },
          ],
        },
        {
          name: "Augmented Reality (AR)",
          children: [
            {
              name: "ARCore",
            },
            {
              name: "Sceneform",
            },
            {
              name: "Motion Tracking",
            },
          ],
        },
        {
          name: "Wear OS & IoT Integration",
          children: [
            {
              name: "Wear OS",
            },
            {
              name: "IoT Connectivity",
            },
          ],
        },
      ],
    },
    {
      name: "Soft Skills & Career Development",
      children: [
        {
          name: "Problem-Solving",
          children: [
            {
              name: "Algorithm Practice",
            },
            {
              name: "Debugging",
            },
          ],
        },
        {
          name: "Collaboration",
          children: [
            {
              name: "Agile Methodologies",
            },
            {
              name: "Code Reviews",
            },
          ],
        },
        {
          name: "Continuous Learning",
          children: [
            {
              name: "Google I/O Updates",
            },
            {
              name: "Community Engagement",
            },
          ],
        },
      ],
    },
  ],
};

export default androidDeveloperRoadmap;
