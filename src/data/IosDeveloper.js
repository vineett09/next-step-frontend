const iosDeveloperRoadmap = {
  name: "iOS Developer Roadmap 2025",
  children: [
    {
      name: "Core Programming Languages",
      description: "Master the essential languages for iOS development.",
      children: [
        {
          name: "Swift",
          description:
            "Apple's modern, type-safe language for performance and expressiveness.",
          children: [
            {
              name: "Basics",
              description:
                "Learn syntax, optionals, and protocol-oriented programming.",
            },
            {
              name: "Closures",
              description: "Use closures for functional programming patterns.",
            },
            {
              name: "Generics",
              description: "Write reusable, type-safe code.",
            },
            {
              name: "Swift Concurrency",
              description: "Implement async/await and actors for multitasking.",
            },
          ],
        },
        {
          name: "Objective-C",
          description:
            "Key for maintaining legacy iOS apps and understanding foundational APIs.",
          children: [
            {
              name: "Syntax Basics",
              description: "Master messaging syntax and memory management.",
            },
            {
              name: "C Integration",
              description: "Work with low-level C code in iOS apps.",
            },
            {
              name: "Runtime",
              description: "Understand dynamic features like method swizzling.",
            },
            {
              name: "Interoperability",
              description: "Bridge Objective-C with Swift codebases.",
            },
          ],
        },
      ],
    },
    {
      name: "iOS Development Fundamentals",
      description: "Build a strong foundation in iOS app development.",
      children: [
        {
          name: "Xcode & Interface Builder",
          description:
            "Core IDE and tools for coding, debugging, and designing iOS apps.",
          children: [
            {
              name: "Project Structure",
              description: "Set up targets, schemes, and build configurations.",
            },
            {
              name: "Interface Builder",
              description: "Design UIs with storyboards and XIBs.",
            },
            {
              name: "Debugging Tools",
              description: "Use breakpoints, Instruments, and LLDB.",
            },
            {
              name: "Simulator",
              description: "Test apps across iPhone, iPad, and Apple Watch.",
            },
          ],
        },
        {
          name: "UIKit Framework",
          description:
            "Traditional framework for building and managing iOS app interfaces.",
          children: [
            {
              name: "View Controllers",
              description: "Manage lifecycle and transitions.",
            },
            {
              name: "Auto Layout",
              description: "Create adaptive layouts with constraints.",
            },
            {
              name: "Animations",
              description: "Implement UIView animations and transitions.",
            },
            {
              name: "Gestures",
              description: "Handle touch and gesture interactions.",
            },
          ],
        },
        {
          name: "SwiftUI",
          description:
            "Modern declarative framework for UI across Apple platforms.",
          children: [
            {
              name: "Views and Modifiers",
              description: "Build UIs with composable components.",
            },
            {
              name: "State Management",
              description: "Use @State, @Binding, and ObservableObject.",
            },
            {
              name: "Previews",
              description: "Iterate designs with live previews in Xcode.",
            },
            {
              name: "Cross-Platform",
              description: "Target iOS, macOS, and watchOS with one codebase.",
            },
          ],
        },
      ],
    },
    {
      name: "Advanced iOS Development",
      description: "Leverage advanced tools and frameworks for robust apps.",
      children: [
        {
          name: "Combine Framework",
          description:
            "Reactive programming framework for handling asynchronous events.",
          children: [
            {
              name: "Publishers and Subscribers",
              description: "Manage data streams.",
            },
            {
              name: "Operators",
              description: "Transform and filter Combine streams.",
            },
            {
              name: "Networking",
              description: "Integrate Combine with URLSession.",
            },
            {
              name: "SwiftUI Integration",
              description: "Bind Combine to SwiftUI views.",
            },
          ],
        },
        {
          name: "Concurrency with Swift",
          description: "Modern concurrency model for efficient multitasking.",
          children: [
            {
              name: "Async/Await",
              description: "Simplify asynchronous code flows.",
            },
            {
              name: "Actors",
              description: "Prevent data races with isolated state.",
            },
            {
              name: "Task Groups",
              description: "Run parallel tasks with structured concurrency.",
            },
            {
              name: "MainActor",
              description: "Ensure UI updates on the main thread.",
            },
          ],
        },
        {
          name: "Core Data",
          description: "Persist and manage app data effectively.",
          children: [
            {
              name: "Managed Object Model",
              description: "Define entities and relationships.",
            },
            {
              name: "Fetch Requests",
              description: "Query data with predicates and sort descriptors.",
            },
            {
              name: "CloudKit Sync",
              description: "Sync Core Data with iCloud.",
            },
            {
              name: "Performance Tuning",
              description: "Optimize fetch and save operations.",
            },
          ],
        },
        {
          name: "Dependency Management",
          description: "Integrate external libraries and manage dependencies.",
          children: [
            {
              name: "Swift Package Manager",
              description: "Add and manage packages in Xcode.",
            },
            {
              name: "CocoaPods",
              description: "Use for legacy or third-party libraries.",
            },
            {
              name: "Carthage",
              description: "Build lightweight dependency workflows.",
            },
          ],
        },
      ],
    },
    {
      name: "App Architecture",
      description: "Design scalable and maintainable iOS apps.",
      children: [
        {
          name: "MVC",
          description: "Apple’s default pattern for UIKit-based apps.",
          children: [
            { name: "Model", description: "Define data structures and logic." },
            { name: "View", description: "Manage UI components." },
            {
              name: "Controller",
              description: "Coordinate between model and view.",
            },
          ],
        },
        {
          name: "MVVM",
          description: "Separate logic with models, views, and view models.",
          children: [
            { name: "ViewModel", description: "Prepare data for display." },
            {
              name: "Bindings",
              description:
                "Connect ViewModel to views with Combine or closures.",
            },
            {
              name: "Testability",
              description: "Isolate logic for unit testing.",
            },
          ],
        },
        {
          name: "VIPER",
          description: "Modular architecture for complex iOS apps.",
          children: [
            { name: "View", description: "Handle UI display and user input." },
            { name: "Interactor", description: "Encapsulate business logic." },
            { name: "Presenter", description: "Format data for the view." },
            { name: "Entity", description: "Define data models." },
            { name: "Router", description: "Manage navigation flow." },
          ],
        },
        {
          name: "Clean Architecture",
          description: "Layered approach for separation of concerns.",
          children: [
            {
              name: "Data Layer",
              description: "Handle persistence and networking.",
            },
            {
              name: "Domain Layer",
              description: "Contain business logic and use cases.",
            },
            {
              name: "Presentation Layer",
              description: "Manage UI and user interaction.",
            },
          ],
        },
      ],
    },
    {
      name: "Backend Integration",
      description: "Connect iOS apps to backend services.",
      children: [
        {
          name: "RESTful APIs",
          description: "Communicate with servers using HTTP.",
          children: [
            {
              name: "URLSession",
              description: "Perform network requests natively.",
            },
            {
              name: "Alamofire",
              description: "Simplify networking with a Swift library.",
            },
            {
              name: "Codable",
              description: "Parse JSON with Swift’s encoding/decoding.",
            },
          ],
        },
        {
          name: "GraphQL",
          description: "Query data efficiently from modern APIs.",
          children: [
            {
              name: "Apollo iOS",
              description: "Integrate GraphQL with Swift.",
            },
            {
              name: "Schema Design",
              description: "Understand GraphQL queries and mutations.",
            },
          ],
        },
        {
          name: "Real-Time Data",
          description: "Enable live updates in iOS apps.",
          children: [
            {
              name: "WebSockets",
              description: "Implement real-time communication.",
            },
            {
              name: "CloudKit",
              description: "Sync data across devices with Apple’s service.",
            },
          ],
        },
      ],
    },
    {
      name: "Emerging Technologies",
      description:
        "Incorporate cutting-edge trends in iOS development for 2025.",
      children: [
        {
          name: "AI & ML",
          description: "Enhance apps with intelligent features.",
          children: [
            {
              name: "Core ML",
              description: "Run pre-trained ML models on-device.",
            },
            {
              name: "Create ML",
              description: "Train custom models with Apple’s tools.",
            },
            {
              name: "Vision",
              description: "Implement image recognition and processing.",
            },
            {
              name: "Natural Language",
              description: "Add text analysis capabilities.",
            },
          ],
        },
        {
          name: "Augmented Reality (AR)",
          description: "Build immersive AR experiences.",
          children: [
            {
              name: "ARKit",
              description: "Develop AR apps with Apple’s framework.",
            },
            {
              name: "RealityKit",
              description: "Render 3D content in AR environments.",
            },
            {
              name: "Scene Understanding",
              description: "Map real-world objects in AR.",
            },
            {
              name: "LiDAR Integration",
              description: "Enhance AR with depth sensing.",
            },
          ],
        },
        {
          name: "IoT Integration",
          description: "Connect iOS apps to IoT ecosystems.",
          children: [
            { name: "HomeKit", description: "Control smart home devices." },
            {
              name: "Core Bluetooth",
              description: "Communicate with BLE devices.",
            },
            {
              name: "Matter Protocol",
              description: "Integrate with cross-platform IoT standards.",
            },
          ],
        },
        {
          name: "Multi-Platform Development",
          description: "Extend apps to Apple’s ecosystem.",
          children: [
            { name: "watchOS", description: "Build apps for Apple Watch." },
            { name: "tvOS", description: "Develop for Apple TV." },
            { name: "macOS Catalyst", description: "Port iOS apps to Mac." },
          ],
        },
      ],
    },
    {
      name: "Development Tools & Practices",
      description: "Master tools and workflows for efficient iOS development.",
      children: [
        {
          name: "Version Control Systems (VCS)",
          description: "Manage code and collaborate effectively.",
          children: [
            {
              name: "Git",
              description: "Use branching, merging, and Git workflows.",
            },
            { name: "GitHub/Bitbucket", description: "Host and review code." },
            {
              name: "Pull Requests",
              description: "Facilitate team code reviews.",
            },
          ],
        },
        {
          name: "CI/CD",
          description: "Automate build, test, and deployment pipelines.",
          children: [
            { name: "Xcode Cloud", description: "Use Apple’s CI/CD service." },
            {
              name: "GitHub Actions",
              description: "Set up custom workflows for iOS.",
            },
            { name: "Fastlane", description: "Automate App Store deployment." },
          ],
        },
        {
          name: "Testing",
          description: "Ensure app quality and reliability.",
          children: [
            { name: "Unit Testing", description: "Write tests with XCTest." },
            {
              name: "UI Testing",
              description: "Automate UI tests with XCUITest.",
            },
            {
              name: "Mocking",
              description: "Simulate dependencies with Swift mocks.",
            },
            {
              name: "Performance Testing",
              description: "Profile with Instruments.",
            },
          ],
        },
        {
          name: "App Optimization",
          description: "Enhance app performance and user experience.",
          children: [
            {
              name: "Memory Management",
              description: "Optimize ARC and reduce leaks.",
            },
            {
              name: "App Size",
              description: "Minimize bundle size with asset optimization.",
            },
            {
              name: "Launch Time",
              description: "Improve startup performance.",
            },
          ],
        },
      ],
    },
    {
      name: "Security & Privacy",
      description: "Protect user data and comply with Apple’s standards.",
      children: [
        {
          name: "Data Protection",
          description: "Secure sensitive data within the app.",
          children: [
            {
              name: "Encryption",
              description: "Use AES or Apple’s CryptoKit.",
            },
            { name: "Keychain", description: "Store credentials securely." },
            {
              name: "Data Protection API",
              description: "Encrypt files on-device.",
            },
          ],
        },
        {
          name: "Authentication & Authorization",
          description: "Implement secure user access.",
          children: [
            {
              name: "Sign in with Apple",
              description: "Add Apple’s authentication flow.",
            },
            {
              name: "OAuth2",
              description: "Integrate third-party login systems.",
            },
            {
              name: "Face ID/Touch ID",
              description: "Use biometric authentication.",
            },
          ],
        },
        {
          name: "Privacy Compliance",
          description: "Adhere to Apple’s privacy requirements.",
          children: [
            {
              name: "App Tracking Transparency",
              description: "Manage user tracking permissions.",
            },
            {
              name: "Privacy Manifests",
              description: "Declare data usage in 2025 apps.",
            },
          ],
        },
      ],
    },
    {
      name: "Soft Skills & Career Development",
      description: "Build professional skills for success.",
      children: [
        {
          name: "Problem-Solving",
          description: "Develop analytical and debugging skills.",
          children: [
            {
              name: "Algorithm Practice",
              description: "Solve problems on platforms like LeetCode.",
            },
            {
              name: "Debugging Techniques",
              description: "Resolve issues efficiently.",
            },
          ],
        },
        {
          name: "Collaboration",
          description: "Work effectively with teams and stakeholders.",
          children: [
            {
              name: "Agile Practices",
              description: "Engage in sprints and planning.",
            },
            {
              name: "Code Reviews",
              description: "Provide and receive feedback.",
            },
          ],
        },
        {
          name: "Continuous Learning",
          description: "Stay updated with iOS advancements.",
          children: [
            {
              name: "WWDC",
              description: "Follow Apple’s annual developer conference.",
            },
            {
              name: "Community Involvement",
              description: "Join iOS forums and meetups.",
            },
          ],
        },
      ],
    },
  ],
};

export default iosDeveloperRoadmap;
