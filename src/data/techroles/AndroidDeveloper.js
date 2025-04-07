const androidDeveloperRoadmap = {
  name: "Android Developer Roadmap 2025",
  children: [
    {
      name: " Core Programming Languages",
      children: [
        {
          name: "Kotlin",
          preferred: true,
          children: [
            { name: "Basics" },
            { name: "Object-Oriented Programming" },
            { name: "Extension Functions" },
            { name: "Kotlin Coroutines" },
          ],
        },
        {
          name: "Java",
          children: [
            { name: "Basics" },
            { name: "Object-Oriented Programming" },
            { name: "Java Collections" },
            { name: "Threads and Executors" },
          ],
        },
      ],
      dividerText: "Languages mastered—start building Android apps.",
    },
    {
      name: " Android Development Basics",
      children: [
        {
          name: "Android SDK & Android Studio",
          children: [
            { name: "Setup and Installation" },
            { name: "Emulators & Debugging" },
            { name: "Build System (Gradle)" },
            { name: "SDK Components" },
          ],
        },
        {
          name: "UI Fundamentals",
          children: [
            { name: "XML Layouts" },
            { name: "Material Design" },
            { name: "Responsive Design" },
            { name: "Accessibility" },
          ],
        },
        {
          name: "App Components",
          children: [
            { name: "Activities" },
            { name: "Fragments" },
            { name: "Intents" },
          ],
        },
      ],
      dividerText: "Basics down—enhance your app’s structure and navigation.",
    },
    {
      name: " Intermediate Android Development",
      children: [
        {
          name: "Navigation",
          children: [
            { name: "Navigation Graph" },
            { name: "Deep Linking" },
            { name: "Safe Args" },
          ],
        },
        {
          name: "Data Management",
          children: [
            { name: "Room Database" },
            { name: "LiveData" },
            { name: "ViewModel" },
          ],
        },
        {
          name: "Networking",
          children: [
            { name: "RESTful APIs" },
            { name: "Retrofit" },
            { name: "JSON Parsing" },
          ],
        },
      ],
      dividerText: "Core app built—adopt modern tools and architecture.",
    },
    {
      name: " Modern Android Development",
      children: [
        {
          name: "Jetpack Compose",
          children: [
            { name: "Composables" },
            { name: "State Management" },
            { name: "Animations" },
            { name: "Interoperability with Views" },
          ],
        },
        {
          name: "Coroutines & Flow",
          children: [
            { name: "Coroutines Basics" },
            { name: "Flow" },
            { name: "Integration with Jetpack" },
          ],
        },
        {
          name: "Dependency Injection",
          children: [
            { name: "Hilt", preferred: true },
            { name: "Dagger" },
            { name: "Scopes" },
          ],
        },
        {
          name: "Architecture Patterns",
          children: [
            { name: "MVVM" },
            { name: "MVI" },
            { name: "MVP" },
            { name: "MVC" },
          ],
        },
      ],
      dividerText: "Modern skills acquired—optimize and test your apps.",
    },
    {
      name: " Development Tools & Practices",
      children: [
        {
          name: "Version Control",
          children: [
            { name: "Git" },
            { name: "GitHub/GitLab" },
            { name: "Pull Requests" },
          ],
        },
        {
          name: "Testing",
          children: [
            { name: "Unit Testing" },
            { name: "UI Testing" },
            { name: "Integration Testing" },
          ],
        },
        {
          name: "App Optimization",
          children: [
            { name: "Profiling Tools" },
            { name: "APK Size Reduction" },
            { name: "Startup Time" },
          ],
        },
        {
          name: "CI/CD",
          children: [
            { name: "GitHub Actions", preferred: true },
            { name: "Fastlane" },
            { name: "Jenkins" },
          ],
        },
      ],
      dividerText: "Workflow streamlined—secure and scale your apps.",
    },
    {
      name: " Security & Backend Integration",
      children: [
        {
          name: "Data Protection",
          children: [
            { name: "Encryption" },
            { name: "Secure Storage" },
            { name: "Keystore" },
          ],
        },
        {
          name: "Authentication",
          children: [{ name: "OAuth2" }, { name: "Firebase Authentication" }],
        },
        {
          name: "Advanced Networking",
          children: [
            { name: "GraphQL" },
            { name: "Apollo Client" },
            { name: "WebSockets" },
            { name: "Firebase Realtime Database" },
          ],
        },
      ],
      dividerText: "Apps fortified—explore cross-platform and emerging tech.",
    },
    {
      name: " Cross-Platform Development",
      children: [
        {
          name: "Kotlin Multiplatform Mobile",
          children: [
            { name: "Shared Modules" },
            { name: "Native Integration" },
            { name: "Tooling" },
          ],
        },
        {
          name: "Flutter",
          preferred: true,
          children: [
            { name: "Dart Basics" },
            { name: "Widgets" },
            { name: "Platform Channels" },
          ],
        },
      ],
      dividerText: "Platforms expanded—push boundaries with new tech.",
    },
    {
      name: " Emerging Technologies",
      children: [
        {
          name: "AI & Machine Learning",
          children: [
            { name: "TensorFlow Lite", preferred: true },
            { name: "ML Kit" },
            { name: "Edge AI" },
          ],
        },
        {
          name: "Augmented Reality (AR)",
          children: [{ name: "ARCore" }, { name: "Motion Tracking" }],
        },
        {
          name: "Wear OS & IoT",
          children: [{ name: "Wear OS" }, { name: "IoT Connectivity" }],
        },
      ],
      dividerText: "Future-ready—polish your career skills.",
    },
    {
      name: " Soft Skills & Career Growth",
      children: [
        {
          name: "Problem-Solving",
          children: [{ name: "Algorithm Practice" }, { name: "Debugging" }],
        },
        {
          name: "Collaboration",
          children: [{ name: "Agile Methodologies" }, { name: "Code Reviews" }],
        },
        {
          name: "Continuous Learning",
          children: [
            { name: "Google I/O Updates" },
            { name: "Community Engagement" },
          ],
        },
      ],
    },
  ],
};

export default androidDeveloperRoadmap;
