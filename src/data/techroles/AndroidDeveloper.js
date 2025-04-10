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
            { name: "Basics (Syntax, Variables, Functions)" },
            { name: "Object-Oriented Programming" },
            { name: "Data Structures & Algorithms" },
            { name: "Extension Functions" },
            { name: "Kotlin Coroutines" },
            { name: "Null Safety" }, // Added for Kotlin's key feature
            { name: "Lambdas and Higher-Order Functions" }, // Added for functional programming
          ],
        },
        {
          name: "Java",
          children: [
            { name: "Basics (Syntax, Classes)" },
            { name: "Object-Oriented Programming" },
            { name: "Java Collections" },
            { name: "Threads and Executors" },
            { name: "Lambda Expressions" }, // Added for modern Java
            { name: "Optional Class" }, // Added for null handling
          ],
        },
      ],
      dividerText: "Languages mastered—set up your Android toolkit.",
    },
    {
      name: "Android Development Basics",
      children: [
        {
          name: "Android SDK & Android Studio",
          children: [
            { name: "Setup and Installation" },
            { name: "Emulators & Debugging" },
            { name: "Build System (Gradle)" },
            { name: "SDK Components" },
            { name: "Android Jetpack Libraries" }, // Added for foundational Jetpack intro
          ],
        },
        {
          name: "UI Fundamentals",
          children: [
            { name: "XML Layouts" },
            { name: "Material Design" },
            { name: "Responsive Design" },
            { name: "Accessibility" },
            { name: "Themes and Styles" }, // Added for UI polish
            { name: "Custom Views" }, // Added for flexibility
          ],
        },
        {
          name: "App Components",
          children: [
            { name: "Activities" },
            { name: "Fragments" },
            { name: "Intents" },
            { name: "Services" },
            { name: "Broadcast Receivers" },
            { name: "Content Providers" },
            { name: "App Widgets" }, // Added for home screen functionality
          ],
        },
      ],
      dividerText: "Basics in place—build intermediate skills.",
    },
    {
      name: "Intermediate Android Development",
      children: [
        {
          name: "Navigation",
          children: [
            { name: "Navigation Graph" },
            { name: "Deep Linking" },
            { name: "Safe Args" },
            { name: "Bottom Navigation" }, // Added for common UI pattern
          ],
        },
        {
          name: "Data Management",
          children: [
            { name: "Room Database" },
            { name: "LiveData" },
            { name: "ViewModel" },
            { name: "WorkManager" }, // Added for background tasks
            { name: "SharedPreferences" }, // Added for simple storage
          ],
        },
        {
          name: "Networking",
          children: [
            { name: "RESTful APIs" },
            { name: "Retrofit" },
            { name: "JSON Parsing (Moshi/Gson)" }, // Enhanced with specific tools
            { name: "OkHttp" }, // Added for HTTP client control
          ],
        },
      ],
      dividerText:
        "Intermediate skills honed—embrace modern Android practices.",
    },
    {
      name: "Modern Android Development",
      children: [
        {
          name: "Jetpack Compose",
          children: [
            { name: "Composables" },
            { name: "State Management" },
            { name: "Animations" },
            { name: "Interoperability with Views" },
            { name: "Compose Navigation" }, // Added for modern navigation
            { name: "Material 3 Components" }, // Added for updated design
          ],
        },
        {
          name: "Coroutines & Flow",
          children: [
            { name: "Coroutines Basics" },
            { name: "Flow" },
            { name: "Integration with Jetpack" },
            { name: "StateFlow and SharedFlow" }, // Added for reactive streams
          ],
        },
        {
          name: "Dependency Injection",
          children: [
            { name: "Hilt", preferred: true },
            { name: "Dagger" },
            { name: "Koin" },
            { name: "Kodein" },
            { name: "Manual Dependency Injection" }, // Added for foundational understanding
          ],
        },
        {
          name: "Architecture Patterns",
          children: [
            { name: "MVVM", preferred: true }, // Preferred added for Android standard
            { name: "MVI" },
            { name: "MVP" },
            { name: "MVC" },
            { name: "Clean Architecture" }, // Added for scalability
          ],
        },
      ],
      dividerText: "Modern toolkit ready—streamline development workflows.",
    },
    {
      name: "Development Tools & Practices",
      children: [
        {
          name: "Version Control",
          children: [
            { name: "Git", preferred: true },
            { name: "GitHub/GitLab" },
            { name: "Pull Requests" },
            { name: "Branching Strategies" }, // Added for collaboration
          ],
        },
        {
          name: "Testing",
          children: [
            { name: "Unit Testing (JUnit, Mockito)" }, // Enhanced with tools
            { name: "UI Testing (Espresso)" }, // Enhanced with tool
            { name: "Integration Testing" },
            { name: "Test-Driven Development (TDD)" }, // Added for methodology
          ],
        },
        {
          name: "App Optimization",
          children: [
            { name: "Profiling Tools (Android Studio Profiler)" }, // Enhanced with tool
            { name: "APK Size Reduction" },
            { name: "Startup Time" },
            { name: "Battery Optimization" }, // Added for performance
          ],
        },
        {
          name: "CI/CD",
          children: [
            { name: "GitHub Actions", preferred: true },
            { name: "Fastlane" },
            { name: "Jenkins" },
            { name: "CircleCI" }, // Added for broader options
          ],
        },
      ],
      dividerText: "Workflow optimized—secure and integrate your apps.",
    },
    {
      name: "Security & Backend Integration",
      children: [
        {
          name: "Data Protection",
          children: [
            { name: "Encryption" },
            { name: "Secure Storage (Jetpack Security)" }, // Enhanced with tool
            { name: "Keystore" },
            { name: "Biometric Authentication" }, // Added for security
          ],
        },
        {
          name: "Authentication",
          children: [
            { name: "OAuth2" },
            { name: "Firebase Authentication" },
            { name: "JWT (JSON Web Tokens)" }, // Added for modern auth
          ],
        },
        {
          name: "Advanced Networking",
          children: [
            { name: "GraphQL" },
            { name: "Apollo Client" },
            { name: "WebSockets" },
            { name: "Firebase Realtime Database" },
            { name: "Cloud Functions" }, // Added for serverless backend
          ],
        },
      ],
      dividerText: "Apps secured—deploy and distribute effectively.",
    },
    {
      name: "App Deployment & Distribution", // New section for deployment
      children: [
        {
          name: "Google Play Console",
          children: [
            { name: "App Signing" },
            { name: "Release Management" },
            { name: "In-App Purchases" },
            { name: "Play Store Optimization (ASO)" }, // Added for visibility
          ],
        },
        {
          name: "Beta Testing",
          children: [
            { name: "Google Play Beta" },
            { name: "Firebase App Distribution" }, // Added for testing
          ],
        },
        {
          name: "App Analytics",
          children: [
            { name: "Google Play Analytics" },
            { name: "Firebase Analytics" }, // Added for insights
          ],
        },
      ],
      dividerText: "Apps live—explore cross-platform and emerging tech.",
    },
    {
      name: "Cross-Platform Development",
      children: [
        {
          name: "Kotlin Multiplatform Mobile",
          children: [
            { name: "Shared Modules" },
            { name: "Native Integration" },
            { name: "Tooling" },
            { name: "Expect/Actual Patterns" }, // Added for KMM specifics
          ],
        },
        {
          name: "Flutter",
          preferred: true,
          children: [
            { name: "Dart Basics" },
            { name: "Widgets" },
            { name: "Platform Channels" },
            { name: "State Management (Provider, Riverpod)" }, // Added for Flutter depth
          ],
        },
        {
          name: "React Native", // Added as a popular alternative
          children: [
            { name: "JavaScript/TypeScript Basics" },
            { name: "Components" },
            { name: "Native Modules" },
          ],
        },
      ],
      dividerText: "Cross-platform mastered—push into cutting-edge tech.",
    },
    {
      name: "Emerging Technologies",
      children: [
        {
          name: "AI & Machine Learning",
          children: [
            { name: "TensorFlow Lite", preferred: true },
            { name: "ML Kit" },
            { name: "Edge AI" },
            { name: "On-Device Training" }, // Added for advanced ML
          ],
        },
        {
          name: "Augmented Reality (AR)",
          children: [
            { name: "ARCore" },
            { name: "Motion Tracking" },
            { name: "Sceneform" }, // Added for AR development
          ],
        },
        {
          name: "Wear OS & IoT",
          children: [
            { name: "Wear OS" },
            { name: "IoT Connectivity" },
            { name: "Watch Face Development" }, // Added for Wear OS depth
            { name: "Android Things" }, // Added for IoT
          ],
        },
        {
          name: "Privacy & Security Trends", // Added for 2025 relevance
          children: [
            { name: "Scoped Storage" },
            { name: "Privacy Sandbox" },
            { name: "App Permissions Best Practices" },
          ],
        },
      ],
      dividerText: "Future tech explored—polish your career skills.",
    },
    {
      name: "Soft Skills & Career Growth",
      children: [
        {
          name: "Problem-Solving",
          children: [
            { name: "Algorithm Practice" },
            { name: "Debugging" },
            { name: "Code Optimization" }, // Added for efficiency
          ],
        },
        {
          name: "Collaboration",
          children: [
            { name: "Agile Methodologies" },
            { name: "Code Reviews" },
            { name: "Pair Programming" }, // Added for teamwork
          ],
        },
        {
          name: "Continuous Learning",
          children: [
            { name: "Google I/O Updates" },
            { name: "Community Engagement" },
            { name: "Android Dev Docs" }, // Added for official resources
            { name: "Online Courses (Udemy, Pluralsight)" }, // Added for learning platforms
          ],
        },
        {
          name: "Portfolio Building", // Added for career prep
          children: [
            { name: "Personal Projects" },
            { name: "Open Source Contributions" },
            { name: "App Store Presence" },
          ],
        },
      ],
    },
  ],
};

export default androidDeveloperRoadmap;
