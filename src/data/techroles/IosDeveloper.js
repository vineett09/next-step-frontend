const iOSDeveloperRoadmap = {
  name: "iOS Developer Roadmap 2025",
  children: [
    {
      name: "Foundational Knowledge",
      children: [
        {
          name: "Programming Languages",
          children: [
            { name: "Swift", preferred: true },
            { name: "Objective-C" },
          ],
        },
        {
          name: "Basic Computer Science",
          children: [
            { name: "Data Structures (Arrays, Dictionaries, Sets)" },
            { name: "Algorithms (Sorting, Searching)" },
            { name: "Memory Management" },
            { name: "Object-Oriented Programming" },
          ],
        },
        {
          name: "Operating System Basics",
          children: [{ name: "iOS Architecture" }, { name: "macOS Basics" }],
        },
        {
          name: "Development Environment",
          children: [
            { name: "Xcode", preferred: true },
            { name: "Playgrounds" },
            { name: "Command Line Tools" },
          ],
        },
      ],
      dividerText: "Foundations set—learn version control and collaboration.",
    },
    {
      name: "Version Control and Collaboration",
      children: [
        {
          name: "Version Control Systems",
          children: [
            { name: "Git", preferred: true },
            { name: "GitHub" },
            { name: "GitLab" },
            { name: "Bitbucket" },
          ],
        },
        {
          name: "Team Collaboration Tools",
          children: [
            { name: "Jira" },
            { name: "Trello" },
            { name: "Slack", preferred: true },
            { name: "Notion" },
          ],
        },
      ],
      dividerText: "Collaboration in place—build core iOS skills.",
    },
    {
      name: "Core iOS Development",
      children: [
        {
          name: "Swift Fundamentals",
          children: [
            { name: "Syntax and Semantics" },
            { name: "Optionals" },
            { name: "Closures" },
            { name: "Protocols and Extensions" },
            { name: "Generics" },
            { name: "Error Handling" },
            { name: "Functional Programming Concepts" },
            { name: "Swift Concurrency" },
          ],
        },
        {
          name: "UIKit",
          children: [
            { name: "View Controllers" },
            { name: "Auto Layout" },
            { name: "Storyboards" },
            { name: "Table Views and Collection Views" },
            { name: "User Interaction" },
            { name: "Navigation Controllers" },
            { name: "Gesture Recognizers" },
          ],
        },
        {
          name: "SwiftUI",
          children: [
            { name: "Declarative Syntax" },
            { name: "Views and Modifiers" },
            { name: "State Management" },
            { name: "Animations" },
            { name: "Bindings" },
            { name: "Building Interfaces" },
          ],
        },
        {
          name: "App Lifecycle",
          children: [
            { name: "App Delegate" },
            { name: "Scene Delegate" },
            { name: "Background Modes" },
          ],
        },
      ],
      dividerText: "Core skills mastered—explore essential frameworks.",
    },
    {
      name: "Essential iOS Frameworks",
      children: [
        {
          name: "Networking",
          children: [
            { name: "URLSession" },
            { name: "Alamofire" },
            { name: "REST APIs" },
            { name: "GraphQL" },
          ],
        },
        {
          name: "Data Persistence",
          children: [
            { name: "Core Data" },
            { name: "SwiftData" },
            { name: "UserDefaults" },
            { name: "FileManager" },
          ],
        },
        {
          name: "User Interface Enhancements",
          children: [
            { name: "Core Animation" },
            { name: "Core Graphics" },
            { name: "Lottie (Animations)" },
          ],
        },
        {
          name: "Location and Maps",
          children: [{ name: "Core Location" }, { name: "MapKit" }],
        },
      ],
      dividerText: "Frameworks learned—delve into testing and debugging.",
    },
    {
      name: "Testing and Debugging",
      children: [
        {
          name: "Unit Testing",
          children: [
            { name: "XCTest", preferred: true },
            { name: "Quick/Nimble" },
          ],
        },
        {
          name: "UI Testing",
          children: [{ name: "XCUITest", preferred: true }],
        },
        {
          name: "Debugging Tools",
          children: [
            { name: "Xcode Debugger", preferred: true },
            { name: "Instruments" },
            { name: "LLDB" },
          ],
        },
        {
          name: "Mocking and Dependency Injection",
          children: [{ name: "Mockingbird" }, { name: "Swinject" }],
        },
      ],
      dividerText: "Testing solid—architect apps effectively.",
    },
    {
      name: "App Architecture",
      children: [
        {
          name: "Design Patterns",
          children: [
            { name: "MVC" },
            { name: "MVVM" },
            { name: "VIPER" },
            { name: "MVP" },
            { name: "Coordinator Pattern" },
          ],
        },
        {
          name: "Dependency Management",
          children: [
            { name: "Swift Package Manager", preferred: true },
            { name: "Cocoapods" },
            { name: "Carthage" },
          ],
        },
        {
          name: "Modularization",
          children: [
            { name: "Modules and Frameworks" },
            { name: "Dynamic Linking" },
          ],
        },
      ],
      dividerText: "Architecture defined—explore reactive programming.",
    },
    {
      name: "Reactive Programming",
      children: [
        {
          name: "Combine",
          children: [
            { name: "Publishers and Subscribers" },
            { name: "Operators" },
            { name: "Combine and MVVM" },
          ],
        },
        {
          name: "RxSwift",
          children: [
            { name: "Observables" },
            { name: "Subjects" },
            { name: "Schedulers" },
            { name: "Operators" },
            { name: "RxSwift and MVVM" },
          ],
        },
      ],
      dividerText: "Reactive skills acquired—integrate advanced features.",
    },
    {
      name: "Advanced iOS Features",
      children: [
        {
          name: "Multithreading",
          children: [
            { name: "Grand Central Dispatch (GCD)" },
            { name: "Operation Queues" },
            { name: "Async/Await" },
          ],
        },
        {
          name: "Augmented Reality",
          children: [
            { name: "ARKit", preferred: true },
            { name: "RealityKit" },
          ],
        },
        {
          name: "Machine Learning",
          children: [
            { name: "Core ML", preferred: true },
            { name: "Create ML" },
          ],
        },
        {
          name: "Push Notifications",
          children: [
            { name: "APNs (Apple Push Notification Service)", preferred: true },
            { name: "Firebase Cloud Messaging" },
          ],
        },
      ],
      dividerText: "Advanced features added—deploy to the App Store.",
    },
    {
      name: "App Store Deployment",
      children: [
        {
          name: "App Store Connect",
          children: [
            { name: "App Submission" },
            { name: "App Metadata" },
            { name: "In-App Purchases" },
            { name: "TestFlight" },
          ],
        },
        {
          name: "Build and Release",
          children: [
            { name: "Code Signing" },
            { name: "Provisioning Profiles" },
            { name: "App Thinning" },
          ],
        },
        {
          name: "App Analytics",
          children: [
            { name: "App Store Analytics", preferred: true },
            { name: "Firebase Analytics" },
          ],
        },
      ],
      dividerText: "Deployment complete—monitor and optimize apps.",
    },
    {
      name: "Monitoring and Optimization",
      children: [
        {
          name: "Performance Optimization",
          children: [
            { name: "Instruments (Leaks, Time Profiler)", preferred: true },
            { name: "Memory Management" },
            { name: "Energy Efficiency" },
          ],
        },
        {
          name: "Crash Reporting",
          children: [
            { name: "Sentry" },
            { name: "Firebase Crashlytics", preferred: true },
          ],
        },
        {
          name: "User Feedback",
          children: [{ name: "App Store Reviews" }, { name: "In-App Surveys" }],
        },
      ],
      dividerText: "Monitoring in place—enhance with cross-platform tools.",
    },
    {
      name: "Cross-Platform Development",
      children: [
        {
          name: "Cross-Platform Frameworks",
          children: [
            { name: "SwiftUI Multiplatform", preferred: true },
            { name: "Flutter" },
            { name: "React Native" },
          ],
        },
        {
          name: "Shared Logic",
          children: [
            { name: "Kotlin Multiplatform Mobile (KMM)" },
            { name: "Shared Swift Packages" },
          ],
        },
      ],
      dividerText: "Cross-platform explored—explore emerging trends.",
    },
    {
      name: "Emerging Trends and Technologies",
      children: [
        {
          name: "AI and ML Integration",
          children: [
            { name: "Vision Framework", preferred: true },
            { name: "Natural Language Processing (NLP)" },
            { name: "SiriKit" },
          ],
        },
        {
          name: "Wearables and IoT",
          children: [
            { name: "WatchOS", preferred: true },
            { name: "HomeKit" },
            { name: "HealthKit" },
          ],
        },
        {
          name: "Privacy and Security",
          children: [
            { name: "App Tracking Transparency", preferred: true },
            { name: "Secure Enclave" },
            { name: "On-Device Processing" },
          ],
        },
      ],
      dividerText: "Trends adopted—apply skills in projects.",
    },
    {
      name: "Projects",
      children: [
        {
          name: "Portfolio Apps",
          children: [
            { name: "To-Do List App" },
            { name: "Weather App" },
            { name: "Social Media Client" },
          ],
        },
        { name: "Open Source Contributions" },
      ],
    },
    {
      name: "Continuous Learning",
      children: [
        {
          name: "Resources",
          children: [
            { name: "WWDC Sessions", preferred: true },
            { name: "Swift.org" },
            { name: "Online Courses (e.g., Udemy, Ray Wenderlich)" },
            { name: "iOS Dev Communities (e.g., Reddit, Stack Overflow)" },
          ],
        },
      ],
    },
  ],
};

export default iOSDeveloperRoadmap;
