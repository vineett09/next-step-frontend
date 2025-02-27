const iosDeveloperRoadmap = {
  name: "iOS Developer Roadmap 2025",
  description:
    "This comprehensive guide equips aspiring iOS developers with essential skills for 2025, from core programming to advanced technologies like AR and AI. It covers Swift, SwiftUI, app architecture, and security. Designed for practical mastery, it ensures readiness to build robust, modern iOS apps aligned with Apple’s ecosystem and industry trends.",
  children: [
    {
      name: "Core Programming Languages",
      description:
        "This section masters essential languages for iOS development, taught with Swift and Objective-C examples. Learners build a strong coding foundation. It’s the critical starting point in 2025, enabling developers to create performant, type-safe apps for Apple’s ecosystem with confidence and proficiency.",
      children: [
        {
          name: "Swift",
          preferred: true,
          description:
            "Swift, Apple’s modern language, offers type safety and expressiveness, taught with practical projects. This section focuses on performance and readability. It’s a dominant skill in 2025, essential for developing cutting-edge iOS apps with Swift’s powerful, concise features.",
          children: [
            {
              name: "Basics",
              description:
                "Basics cover Swift syntax and optionals, taught with examples. This section introduces protocol-oriented programming for flexibility. It’s a core skill in 2025, foundational for writing safe, efficient iOS code across applications.",
            },
            {
              name: "Closures",
              description:
                "Closures enable functional patterns, taught with trailing closure syntax. This section enhances Swift’s flexibility in iOS coding. It’s an essential skill in 2025, simplifying callbacks and asynchronous tasks in app development.",
            },
            {
              name: "Generics",
              description:
                "Generics create reusable code, taught with type-safe examples. This section optimizes Swift development for iOS. It’s a key skill in 2025, reducing redundancy and boosting app scalability effectively.",
            },
            {
              name: "Swift Concurrency",
              description:
                "Swift Concurrency uses async/await, taught with multitasking examples. This section modernizes iOS app performance. It’s a vital skill in 2025, streamlining complex operations with safe, efficient concurrency.",
            },
          ],
        },
        {
          name: "Objective-C",
          description:
            "Objective-C maintains legacy iOS apps, taught with API examples. This section bridges old and new codebases. It’s a practical skill in 2025, ensuring developers can support and update existing iOS applications seamlessly.",
          children: [
            {
              name: "Syntax Basics",
              description:
                "Syntax Basics cover messaging and memory, taught with examples. This section masters Objective-C fundamentals. It’s a core skill in 2025, essential for legacy iOS maintenance and understanding.",
            },
            {
              name: "C Integration",
              description:
                "C Integration works with low-level code, taught with examples. This section enhances Objective-C in iOS apps. It’s an essential skill in 2025, enabling fine-tuned app performance tweaks.",
            },
            {
              name: "Runtime",
              description:
                "Runtime explores dynamic features like swizzling, taught with examples. This section leverages Objective-C flexibility. It’s a key skill in 2025, unlocking advanced iOS customization capabilities.",
            },
            {
              name: "Interoperability",
              description:
                "Interoperability bridges Swift and Objective-C, taught with setups. This section connects codebases. It’s a practical skill in 2025, ensuring smooth transitions in mixed-language iOS projects.",
            },
          ],
        },
      ],
    },
    {
      name: "iOS Development Fundamentals",
      description:
        "This section builds a strong iOS app foundation, taught with Xcode and SwiftUI examples. Learners master essential tools and frameworks. It’s a critical skill in 2025, providing the base to design, debug, and deploy functional iOS applications effectively.",
      children: [
        {
          name: "Xcode & Interface Builder",
          description:
            "Xcode & Interface Builder are core tools for iOS, taught with project setups. This section codes, debugs, and designs apps. It’s an essential skill in 2025, central to developing and refining iOS applications efficiently.",
          children: [
            {
              name: "Project Structure",
              description:
                "Project Structure sets targets and schemes, taught with Xcode. This section organizes iOS apps. It’s a core skill in 2025, ensuring efficient project management and builds.",
            },
            {
              name: "Interface Builder",
              description:
                "Interface Builder designs UIs with storyboards, taught with examples. This section crafts iOS interfaces. It’s an essential skill in 2025, enabling visual app layout creation.",
            },
            {
              name: "Debugging Tools",
              description:
                "Debugging Tools use Instruments and LLDB, taught with examples. This section fixes iOS bugs. It’s a key skill in 2025, ensuring app reliability and performance.",
            },
            {
              name: "Simulator",
              description:
                "Simulator tests on iPhone and Watch, taught with Xcode. This section emulates devices. It’s a practical skill in 2025, validating apps across Apple platforms.",
            },
          ],
        },
        {
          name: "UIKit Framework",
          description:
            "UIKit builds traditional iOS UIs, taught with view controllers. This section manages interfaces and interactions. It’s a foundational skill in 2025, widely used for creating robust, responsive iOS applications effectively.",
          children: [
            {
              name: "View Controllers",
              description:
                "View Controllers manage lifecycles, taught with examples. This section handles iOS screen transitions. It’s a core skill in 2025, key to app navigation and flow.",
            },
            {
              name: "Auto Layout",
              description:
                "Auto Layout uses constraints, taught with setups. This section adapts iOS layouts responsively. It’s an essential skill in 2025, ensuring device compatibility.",
            },
            {
              name: "Animations",
              description:
                "Animations implement UIView transitions, taught with examples. This section enhances iOS UX. It’s a key skill in 2025, adding polish to app interactions.",
            },
            {
              name: "Gestures",
              description:
                "Gestures handle taps and swipes, taught with UIKit. This section improves iOS interactivity. It’s a practical skill in 2025, enriching user input handling.",
            },
          ],
        },
        {
          name: "SwiftUI",
          description:
            "SwiftUI offers declarative UI design, taught with examples. This section builds modern iOS interfaces. It’s a critical skill in 2025, streamlining development across Apple platforms with concise, powerful code.",
          children: [
            {
              name: "Views and Modifiers",
              description:
                "Views and Modifiers compose UIs, taught with SwiftUI. This section builds iOS layouts. It’s a core skill in 2025, enabling rapid, modular design.",
            },
            {
              name: "State Management",
              description:
                "State Management uses @State, taught with examples. This section binds SwiftUI data. It’s an essential skill in 2025, managing dynamic UI updates.",
            },
            {
              name: "Previews",
              description:
                "Previews iterate designs live, taught with Xcode. This section speeds SwiftUI development. It’s a key skill in 2025, enhancing UI prototyping.",
            },
            {
              name: "Cross-Platform",
              description:
                "Cross-Platform targets iOS and macOS, taught with examples. This section unifies codebases. It’s a practical skill in 2025, expanding app reach.",
            },
          ],
        },
      ],
    },
    {
      name: "Advanced iOS Development",
      description:
        "This section leverages advanced tools like Combine, taught with examples. Learners build robust iOS apps with modern techniques. It’s a high-demand skill in 2025, enabling developers to create efficient, scalable applications for complex use cases effectively.",
      children: [
        {
          name: "Combine Framework",
          description:
            "Combine handles asynchronous events reactively, taught with publishers. This section enhances iOS app responsiveness. It’s an essential skill in 2025, streamlining data flow and networking in advanced applications.",
          children: [
            {
              name: "Publishers and Subscribers",
              description:
                "Publishers and Subscribers manage streams, taught with examples. This section uses Combine for data. It’s a core skill in 2025, enabling reactive iOS programming.",
            },
            {
              name: "Operators",
              description:
                "Operators transform streams, taught with Combine. This section filters iOS data flows. It’s an essential skill in 2025, refining app reactivity.",
            },
            {
              name: "Networking",
              description:
                "Networking integrates Combine with URLSession, taught with examples. This section fetches iOS data. It’s a key skill in 2025, streamlining API calls.",
            },
            {
              name: "SwiftUI Integration",
              description:
                "SwiftUI Integration binds Combine, taught with examples. This section updates iOS UIs. It’s a practical skill in 2025, enhancing UI responsiveness.",
            },
          ],
        },
        {
          name: "Concurrency with Swift",
          description:
            "Concurrency with Swift modernizes multitasking, taught with async/await. This section optimizes iOS performance. It’s a critical skill in 2025, ensuring safe, efficient handling of complex app operations.",
          children: [
            {
              name: "Async/Await",
              description:
                "Async/Await simplifies async code, taught with examples. This section streamlines iOS tasks. It’s a core skill in 2025, improving app efficiency.",
            },
            {
              name: "Actors",
              description:
                "Actors prevent races, taught with Swift examples. This section isolates iOS state. It’s an essential skill in 2025, ensuring thread safety.",
            },
            {
              name: "Task Groups",
              description:
                "Task Groups run parallel tasks, taught with examples. This section enhances iOS concurrency. It’s a key skill in 2025, managing multitasking.",
            },
            {
              name: "MainActor",
              description:
                "MainActor updates UI, taught with examples. This section ensures main thread safety. It’s a practical skill in 2025, maintaining iOS UI integrity.",
            },
          ],
        },
        {
          name: "Core Data",
          description:
            "Core Data persists app data, taught with entity setups. This section manages iOS storage efficiently. It’s an essential skill in 2025, enabling robust data handling in complex applications.",
          children: [
            {
              name: "Managed Object Model",
              description:
                "Managed Object Model defines entities, taught with examples. This section structures iOS data. It’s a core skill in 2025, organizing app storage.",
            },
            {
              name: "Fetch Requests",
              description:
                "Fetch Requests query data, taught with predicates. This section retrieves iOS data. It’s an essential skill in 2025, accessing stored info.",
            },
            {
              name: "CloudKit Sync",
              description:
                "CloudKit Sync syncs with iCloud, taught with setups. This section shares iOS data. It’s a key skill in 2025, enabling cloud integration.",
            },
            {
              name: "Performance Tuning",
              description:
                "Performance Tuning optimizes Core Data, taught with examples. This section enhances iOS speed. It’s a practical skill in 2025, improving data efficiency.",
            },
          ],
        },
        {
          name: "Dependency Management",
          description:
            "Dependency Management integrates libraries, taught with Swift Package Manager. This section manages iOS dependencies. It’s a vital skill in 2025, streamlining third-party tool use in app development.",
          children: [
            {
              name: "Swift Package Manager",
              description:
                "Swift Package Manager adds packages, taught with Xcode. This section manages iOS dependencies. It’s a core skill in 2025, native to Apple’s ecosystem.",
            },
            {
              name: "CocoaPods",
              description:
                "CocoaPods uses pods, taught with setups. This section integrates legacy libraries. It’s an essential skill in 2025, supporting older iOS projects.",
            },
            {
              name: "Carthage",
              description:
                "Carthage builds lightweight dependencies, taught with examples. This section optimizes iOS builds. It’s a key skill in 2025, offering flexibility.",
            },
          ],
        },
      ],
    },
    {
      name: "App Architecture",
      description:
        "This section designs scalable iOS apps, taught with MVC and VIPER examples. Learners structure apps for maintainability. It’s a critical skill in 2025, ensuring robust, organized development for complex iOS projects effectively.",
      children: [
        {
          name: "MVC",
          description:
            "MVC, Apple’s default pattern, taught with UIKit examples. This section organizes iOS apps simply. It’s an essential skill in 2025, foundational for many existing applications.",
          children: [
            {
              name: "Model",
              description:
                "Model defines data logic, taught with examples. This section structures iOS data. It’s a core skill in 2025, managing app data cleanly.",
            },
            {
              name: "View",
              description:
                "View manages UI, taught with UIKit. This section displays iOS content. It’s an essential skill in 2025, handling visual presentation.",
            },
            {
              name: "Controller",
              description:
                "Controller coordinates, taught with examples. This section links model and view. It’s a key skill in 2025, driving app flow.",
            },
          ],
        },
        {
          name: "MVVM",
          description:
            "MVVM separates logic, taught with SwiftUI examples. This section enhances iOS testability. It’s a key skill in 2025, modernizing app structure efficiently.",
          children: [
            {
              name: "ViewModel",
              description:
                "ViewModel prepares data, taught with examples. This section formats iOS UI data. It’s a core skill in 2025, isolating logic.",
            },
            {
              name: "Bindings",
              description:
                "Bindings connect with Combine, taught with examples. This section links iOS UI. It’s an essential skill in 2025, enabling reactivity.",
            },
            {
              name: "Testability",
              description:
                "Testability isolates logic, taught with examples. This section tests iOS apps. It’s a practical skill in 2025, ensuring quality.",
            },
          ],
        },
        {
          name: "VIPER",
          description:
            "VIPER modularizes complex iOS apps, taught with examples. This section separates concerns. It’s an advanced skill in 2025, ideal for large-scale app maintainability.",
          children: [
            {
              name: "View",
              description:
                "View displays UI, taught with examples. This section manages iOS visuals. It’s a core skill in 2025, focusing on presentation.",
            },
            {
              name: "Interactor",
              description:
                "Interactor holds logic, taught with examples. This section drives iOS business rules. It’s an essential skill in 2025, separating functionality.",
            },
            {
              name: "Presenter",
              description:
                "Presenter formats data, taught with examples. This section prepares iOS UI data. It’s a key skill in 2025, organizing display.",
            },
            {
              name: "Entity",
              description:
                "Entity defines models, taught with examples. This section structures iOS data. It’s a practical skill in 2025, managing entities.",
            },
            {
              name: "Router",
              description:
                "Router manages navigation, taught with examples. This section directs iOS flow. It’s a vital skill in 2025, handling transitions.",
            },
          ],
        },
        {
          name: "Clean Architecture",
          description:
            "Clean Architecture layers concerns, taught with examples. This section ensures iOS scalability. It’s a high-value skill in 2025, promoting maintainable app design.",
          children: [
            {
              name: "Data Layer",
              description:
                "Data Layer handles persistence, taught with examples. This section manages iOS storage. It’s a core skill in 2025, isolating data.",
            },
            {
              name: "Domain Layer",
              description:
                "Domain Layer holds logic, taught with examples. This section drives iOS rules. It’s an essential skill in 2025, centralizing logic.",
            },
            {
              name: "Presentation Layer",
              description:
                "Presentation Layer manages UI, taught with examples. This section displays iOS content. It’s a key skill in 2025, focusing on UI.",
            },
          ],
        },
      ],
    },
    {
      name: "Backend Integration",
      description:
        "This section connects iOS apps to backends, taught with REST examples. Learners integrate data services seamlessly. It’s an essential skill in 2025, enabling dynamic, data-driven iOS applications with robust server communication.",
      children: [
        {
          name: "RESTful APIs",
          description:
            "RESTful APIs use HTTP for iOS, taught with URLSession examples. This section fetches server data. It’s a core skill in 2025, foundational for backend-connected iOS apps.",
          children: [
            {
              name: "URLSession",
              description:
                "URLSession performs requests, taught with examples. This section fetches iOS data natively. It’s an essential skill in 2025, enabling network communication.",
            },
            {
              name: "Alamofire",
              description:
                "Alamofire simplifies networking, taught with setups. This section enhances iOS API calls. It’s a key skill in 2025, streamlining REST integration.",
            },
            {
              name: "Codable",
              description:
                "Codable parses JSON, taught with examples. This section decodes iOS data. It’s a practical skill in 2025, simplifying API data handling.",
            },
          ],
        },
        {
          name: "GraphQL",
          description:
            "GraphQL queries efficiently, taught with Apollo examples. This section modernizes iOS data fetching. It’s a key skill in 2025, offering precise data retrieval.",
          children: [
            {
              name: "Apollo iOS",
              description:
                "Apollo iOS integrates GraphQL, taught with setups. This section fetches iOS data. It’s a core skill in 2025, enhancing GraphQL use.",
            },
            {
              name: "Schema Design",
              description:
                "Schema Design defines queries, taught with examples. This section structures iOS GraphQL. It’s an essential skill in 2025, optimizing data.",
            },
          ],
        },
        {
          name: "Real-Time Data",
          description:
            "Real-Time Data enables live updates, taught with WebSockets. This section keeps iOS apps current. It’s a practical skill in 2025, supporting dynamic app experiences.",
          children: [
            {
              name: "WebSockets",
              description:
                "WebSockets stream data, taught with examples. This section updates iOS live. It’s a core skill in 2025, enabling real-time features.",
            },
            {
              name: "CloudKit",
              description:
                "CloudKit syncs data, taught with setups. This section shares iOS data. It’s a key skill in 2025, leveraging Apple’s cloud.",
            },
          ],
        },
      ],
    },
    {
      name: "Emerging Technologies",
      description:
        "This section incorporates 2025 trends like AR, taught with Core ML examples. Learners enhance iOS apps with innovation. It’s a high-demand skill, positioning developers at the forefront of Apple’s cutting-edge ecosystem advancements.",
      children: [
        {
          name: "AI & ML",
          description:
            "AI & ML enhance iOS with intelligence, taught with Core ML. This section adds smart features. It’s an essential skill in 2025, driving advanced app capabilities.",
          children: [
            {
              name: "Core ML",
              description:
                "Core ML runs ML models, taught with examples. This section enhances iOS apps. It’s a core skill in 2025, enabling on-device AI.",
            },
            {
              name: "Create ML",
              description:
                "Create ML trains models, taught with setups. This section customizes iOS AI. It’s an essential skill in 2025, personalizing ML.",
            },
            {
              name: "Vision",
              description:
                "Vision processes images, taught with examples. This section enhances iOS visuals. It’s a key skill in 2025, adding recognition.",
            },
            {
              name: "Natural Language",
              description:
                "Natural Language analyzes text, taught with examples. This section enhances iOS text. It’s a practical skill in 2025, enabling NLP.",
            },
          ],
        },
        {
          name: "Augmented Reality (AR)",
          description:
            "AR builds immersive iOS apps, taught with ARKit. This section creates 3D experiences. It’s a cutting-edge skill in 2025, enhancing apps with AR.",
          children: [
            {
              name: "ARKit",
              description:
                "ARKit develops AR, taught with examples. This section builds iOS AR apps. It’s a core skill in 2025, foundational for AR.",
            },
            {
              name: "RealityKit",
              description:
                "RealityKit renders 3D, taught with examples. This section enhances iOS AR visuals. It’s an essential skill in 2025, improving AR rendering.",
            },
            {
              name: "Scene Understanding",
              description:
                "Scene Understanding maps objects, taught with examples. This section enhances iOS AR. It’s a key skill in 2025, improving AR context.",
            },
            {
              name: "LiDAR Integration",
              description:
                "LiDAR enhances depth, taught with setups. This section improves iOS AR precision. It’s a practical skill in 2025, leveraging hardware.",
            },
          ],
        },
        {
          name: "IoT Integration",
          description:
            "IoT connects iOS to devices, taught with HomeKit. This section builds smart apps. It’s a practical skill in 2025, integrating iOS with IoT ecosystems.",
          children: [
            {
              name: "HomeKit",
              description:
                "HomeKit controls homes, taught with examples. This section manages iOS smart devices. It’s a core skill in 2025, enabling home automation.",
            },
            {
              name: "Core Bluetooth",
              description:
                "Core Bluetooth uses BLE, taught with setups. This section connects iOS devices. It’s an essential skill in 2025, linking IoT.",
            },
            {
              name: "Matter Protocol",
              description:
                "Matter integrates IoT, taught with examples. This section connects iOS cross-platform. It’s a key skill in 2025, unifying IoT standards.",
            },
          ],
        },
        {
          name: "Multi-Platform Development",
          description:
            "Multi-Platform targets Apple devices, taught with watchOS. This section extends iOS apps. It’s a valuable skill in 2025, maximizing app reach across ecosystems.",
          children: [
            {
              name: "watchOS",
              description:
                "watchOS builds for Watch, taught with examples. This section enhances iOS apps. It’s a core skill in 2025, targeting wearables.",
            },
            {
              name: "tvOS",
              description:
                "tvOS develops for TV, taught with setups. This section extends iOS to TVs. It’s an essential skill in 2025, expanding reach.",
            },
            {
              name: "macOS Catalyst",
              description:
                "macOS Catalyst ports apps, taught with examples. This section targets Macs. It’s a key skill in 2025, unifying platforms.",
            },
          ],
        },
      ],
    },
    {
      name: "Development Tools & Practices",
      description:
        "This section masters iOS tools and workflows, taught with Git examples. Learners optimize development efficiency. It’s an essential skill in 2025, ensuring high-quality app creation and collaboration in professional settings.",
      children: [
        {
          name: "Version Control Systems (VCS)",
          description:
            "VCS manages code with Git, taught with examples. This section ensures iOS collaboration. It’s a core skill in 2025, critical for team-based app development.",
          children: [
            {
              name: "Git",
              description:
                "Git uses branching, taught with commands. This section tracks iOS code changes. It’s an essential skill in 2025, managing project versions.",
            },
            {
              name: "GitHub/Bitbucket",
              description:
                "GitHub hosts code, taught with setups. This section reviews iOS code. It’s a key skill in 2025, enabling collaboration.",
            },
            {
              name: "Pull Requests",
              description:
                "Pull Requests review code, taught with examples. This section collaborates on iOS apps. It’s a practical skill in 2025, ensuring quality.",
            },
          ],
        },
        {
          name: "CI/CD",
          description:
            "CI/CD automates iOS builds, taught with Xcode Cloud. This section streamlines deployment. It’s a critical skill in 2025, accelerating app delivery efficiently.",
          children: [
            {
              name: "Xcode Cloud",
              description:
                "Xcode Cloud automates, taught with setups. This section builds iOS apps. It’s a core skill in 2025, Apple-native CI/CD.",
            },
            {
              name: "GitHub Actions",
              description:
                "GitHub Actions customizes CI/CD, taught with workflows. This section automates iOS. It’s an essential skill in 2025, flexible automation.",
            },
            {
              name: "Fastlane",
              description:
                "Fastlane deploys to App Store, taught with examples. This section streamlines iOS releases. It’s a key skill in 2025, simplifying deployment.",
            },
          ],
        },
        {
          name: "Testing",
          description:
            "Testing ensures iOS quality, taught with XCTest. This section validates app functionality. It’s an essential skill in 2025, guaranteeing reliable, bug-free apps.",
          children: [
            {
              name: "Unit Testing",
              description:
                "Unit Testing uses XCTest, taught with examples. This section tests iOS logic. It’s a core skill in 2025, ensuring code correctness.",
            },
            {
              name: "UI Testing",
              description:
                "UI Testing automates with XCUITest, taught with examples. This section validates iOS UI. It’s an essential skill in 2025, testing interfaces.",
            },
            {
              name: "Mocking",
              description:
                "Mocking simulates dependencies, taught with examples. This section tests iOS isolated. It’s a key skill in 2025, enhancing testability.",
            },
            {
              name: "Performance Testing",
              description:
                "Performance Testing profiles with Instruments, taught with examples. This section optimizes iOS. It’s a practical skill in 2025, boosting speed.",
            },
          ],
        },
        {
          name: "App Optimization",
          description:
            "App Optimization enhances iOS performance, taught with examples. This section improves user experience. It’s a vital skill in 2025, ensuring fast, efficient apps.",
          children: [
            {
              name: "Memory Management",
              description:
                "Memory Management optimizes ARC, taught with examples. This section reduces iOS leaks. It’s a core skill in 2025, ensuring efficiency.",
            },
            {
              name: "App Size",
              description:
                "App Size minimizes assets, taught with optimization. This section shrinks iOS bundles. It’s an essential skill in 2025, improving downloads.",
            },
            {
              name: "Launch Time",
              description:
                "Launch Time improves startup, taught with examples. This section speeds iOS apps. It’s a key skill in 2025, enhancing UX.",
            },
          ],
        },
      ],
    },
    {
      name: "Security & Privacy",
      description:
        "This section protects iOS data, taught with CryptoKit examples. Learners meet Apple’s privacy standards. It’s a critical skill in 2025, ensuring secure, compliant apps in a privacy-focused ecosystem.",
      children: [
        {
          name: "Data Protection",
          description:
            "Data Protection secures sensitive info, taught with encryption. This section safeguards iOS data. It’s an essential skill in 2025, protecting user information effectively.",
          children: [
            {
              name: "Encryption",
              description:
                "Encryption uses CryptoKit, taught with AES. This section secures iOS data. It’s a core skill in 2025, ensuring data confidentiality.",
            },
            {
              name: "Keychain",
              description:
                "Keychain stores credentials, taught with setups. This section secures iOS secrets. It’s an essential skill in 2025, protecting sensitive data.",
            },
            {
              name: "Data Protection API",
              description:
                "Data Protection API encrypts files, taught with examples. This section secures iOS storage. It’s a key skill in 2025, enhancing security.",
            },
          ],
        },
        {
          name: "Authentication & Authorization",
          description:
            "Authentication secures access, taught with Face ID examples. This section protects iOS users. It’s a key skill in 2025, ensuring safe login flows.",
          children: [
            {
              name: "Sign in with Apple",
              description:
                "Sign in with Apple authenticates, taught with setups. This section secures iOS logins. It’s a core skill in 2025, Apple-native.",
            },
            {
              name: "OAuth2",
              description:
                "OAuth2 integrates third-party, taught with examples. This section authorizes iOS apps. It’s an essential skill in 2025, broadening authentication.",
            },
            {
              name: "Face ID/Touch ID",
              description:
                "Face ID/Touch ID use biometrics, taught with setups. This section secures iOS. It’s a key skill in 2025, enhancing security.",
            },
          ],
        },
        {
          name: "Privacy Compliance",
          description:
            "Privacy Compliance meets Apple’s rules, taught with examples. This section ensures iOS adherence. It’s a vital skill in 2025, mandatory for App Store approval.",
          children: [
            {
              name: "App Tracking Transparency",
              description:
                "App Tracking Transparency manages permissions, taught with setups. This section protects iOS privacy. It’s a core skill in 2025, user-focused.",
            },
            {
              name: "Privacy Manifests",
              description:
                "Privacy Manifests declare data use, taught with examples. This section complies in 2025. It’s an essential skill, ensuring transparency.",
            },
          ],
        },
      ],
    },
    {
      name: "Soft Skills & Career Development",
      description:
        "This section builds professional skills, taught with scenarios. Learners enhance problem-solving and collaboration for iOS careers. It’s a strategic skill in 2025, ensuring success beyond technical expertise in the industry.",
      children: [
        {
          name: "Problem-Solving",
          description:
            "Problem-Solving develops debugging skills, taught with examples. This section resolves iOS issues. It’s an essential skill in 2025, critical for app quality.",
          children: [
            {
              name: "Algorithm Practice",
              description:
                "Algorithm Practice uses LeetCode, taught with problems. This section sharpens iOS logic. It’s a core skill in 2025, enhancing coding.",
            },
            {
              name: "Debugging Techniques",
              description:
                "Debugging Techniques resolve bugs, taught with examples. This section fixes iOS apps. It’s a key skill in 2025, ensuring reliability.",
            },
          ],
        },
        {
          name: "Collaboration",
          description:
            "Collaboration works with teams, taught with examples. This section enhances iOS teamwork. It’s a key skill in 2025, vital for project success.",
          children: [
            {
              name: "Agile Practices",
              description:
                "Agile Practices use sprints, taught with examples. This section manages iOS projects. It’s a core skill in 2025, agile development.",
            },
            {
              name: "Code Reviews",
              description:
                "Code Reviews provide feedback, taught with examples. This section improves iOS code. It’s an essential skill in 2025, ensuring quality.",
            },
          ],
        },
        {
          name: "Continuous Learning",
          description:
            "Continuous Learning updates iOS skills, taught with resources. This section stays current. It’s a vital skill in 2025, adapting to trends.",
          children: [
            {
              name: "WWDC",
              description:
                "WWDC follows Apple updates, taught with highlights. This section keeps iOS current. It’s a core skill in 2025, staying informed.",
            },
            {
              name: "Community Involvement",
              description:
                "Communities join forums, taught with examples. This section networks iOS devs. It’s a key skill in 2025, connecting professionals.",
            },
          ],
        },
      ],
    },
  ],
};

export default iosDeveloperRoadmap;
