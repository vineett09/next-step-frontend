const swiftRoadmap = {
  name: "Swift Developer Roadmap 2025",
  description:
    "This detailed roadmap provides a step-by-step guide to mastering Swift by 2025, from basic syntax to advanced features and iOS app development. Covering core Swift concepts, object-oriented programming, concurrency, SwiftUI, and more, it’s enriched with nested subtopics and practical examples—taught with tools like Xcode, Swift Playgrounds, and Git—for hands-on learners aiming to excel in the 2025 Swift ecosystem.",
  children: [
    {
      name: "Introduction to Swift",
      description:
        "Understand what Swift is and why it’s a powerful language for 2025 development, taught with basic examples.",
      children: [
        {
          name: "What is Swift?",
          description:
            "Learn about Swift as a modern programming language, taught with a simple print example.",
          children: [
            {
              name: "Overview",
              description:
                "Introduction to Swift, taught with print('Hello, Swift!').",
            },
            {
              name: "Key Features",
              description:
                "Explore safety and speed, taught with type safety example.",
            },
          ],
        },
        {
          name: "History and Evolution",
          description:
            "Discover Swift’s origins, taught with a timeline reference.",
          children: [
            {
              name: "Swift’s Birth",
              description: "Introduced in 2014, taught with WWDC context.",
            },
            {
              name: "Open Source",
              description:
                "Went open-source in 2015, taught with Swift.org link.",
            },
          ],
        },
        {
          name: "Why Learn Swift?",
          description:
            "Understand Swift’s relevance, taught with iOS app example.",
          children: [
            {
              name: "iOS Development",
              description: "Primary language for iOS, taught with app context.",
            },
            {
              name: "Cross-Platform",
              description: "Beyond Apple, taught with Linux example.",
            },
          ],
        },
      ],
      dividerText: "set up your environment.",
    },
    {
      name: "Setting up the Development Environment",
      description:
        "Prepare your machine for Swift coding, taught with Xcode and Git setup.",
      children: [
        {
          name: "Installing Swift",
          description:
            "Install Swift tools, taught with a macOS installation example.",
          children: [
            {
              name: "Xcode",
              description: "Install Xcode, taught with App Store steps.",
            },
            {
              name: "Swift CLI",
              description: "Verify with swift --version, taught in terminal.",
            },
          ],
        },
        {
          name: "Using Swift Playgrounds",
          description:
            "Experiment with code, taught with a playground example.",
          children: [
            {
              name: "Create Playground",
              description: "Open Xcode, taught with File > New > Playground.",
            },
            {
              name: "Run Code",
              description: "Test print('Hello'), taught with live results.",
            },
          ],
        },
        {
          name: "Setting up an IDE",
          description: "Configure Xcode or VS Code, taught with setup steps.",
          children: [
            {
              name: "Xcode Setup",
              description: "Default IDE, taught with project creation.",
            },
            {
              name: "VS Code with Swift",
              description: "Add Swift extension, taught with plugin steps.",
            },
          ],
        },
        {
          name: "Setting up Version Control (Git)",
          description: "Install Git, taught with git --version check.",
          children: [
            {
              name: "Git Installation",
              description: "Install Git, taught with brew install git.",
            },
            {
              name: "Initialize Repo",
              description: "Use git init, taught with a repo example.",
            },
          ],
        },
      ],
      dividerText: "learn Swift basics.",
    },
    {
      name: "Basics of Swift",
      description:
        "Master foundational Swift concepts, taught with simple code snippets in Swift Playgrounds.",
      children: [
        {
          name: "Syntax Fundamentals",
          description:
            "Learn Swift syntax, taught with basic structure example.",
          children: [
            {
              name: "Comments",
              description: "Use // or /* */, taught with // Hello example.",
            },
            {
              name: "Semicolons",
              description: "Optional in Swift, taught with line example.",
            },
          ],
        },
        {
          name: "Variables and Constants",
          description: "Declare variables, taught with var and let examples.",
          children: [
            {
              name: "Variables",
              description: "Use var, taught with var age = 30.",
            },
            {
              name: "Constants",
              description: "Use let, taught with let name = 'Alice'.",
            },
          ],
        },
        {
          name: "Data Types",
          description: "Explore Swift types, taught with examples.",
          children: [
            {
              name: "Integers",
              description: "Use Int, taught with var count = 10.",
            },
            {
              name: "Floating-Point Numbers",
              description: "Use Double, taught with var pi = 3.14.",
            },
            {
              name: "Arrays",
              description: "Use [Type], taught with var numbers = [1, 2, 3].",
            },
          ],
        },
        {
          name: "Control Structures",
          description: "Manage flow, taught with if and switch examples.",
          children: [
            {
              name: "If Statements",
              description: "Use if, taught with if age > 18 example.",
            },
            {
              name: "Switch Statements",
              description: "Use switch, taught with switch day example.",
            },
          ],
        },
        {
          name: "Functions",
          description: "Define functions, taught with a greet example.",
          children: [
            {
              name: "Basic Functions",
              description: "Use func, taught with func greet(name: String).",
            },
            {
              name: "Parameters and Returns",
              description: "Add returns, taught with return 'Hello'.",
            },
          ],
        },
      ],
      dividerText: "explore object-oriented programming.",
    },
    {
      name: "Object-Oriented Programming in Swift",
      description:
        "Learn OOP concepts in Swift, taught with a class example in Xcode.",
      children: [
        {
          name: "Classes and Objects",
          description: "Create classes, taught with a Person class example.",
          children: [
            {
              name: "Defining Classes",
              description: "Use class, taught with class Person { }.",
            },
            {
              name: "Creating Objects",
              description: "Instantiate, taught with let person = Person().",
            },
          ],
        },
        {
          name: "Structs",
          description:
            "Understand structs, taught with a Point struct example.",
          children: [
            {
              name: "Defining Structs",
              description: "Use struct, taught with struct Point { }.",
            },
            {
              name: "Value vs Reference",
              description: "Compare to class, taught with copy example.",
            },
          ],
        },
        {
          name: "Inheritance",
          description: "Extend classes, taught with a subclass example.",
          children: [
            {
              name: "Base and Subclass",
              description:
                "Use inheritance, taught with class Student: Person.",
            },
            {
              name: "Overriding",
              description: "Override methods, taught with override func.",
            },
          ],
        },
        {
          name: "Protocols",
          description: "Define protocols, taught with a protocol example.",
          children: [
            {
              name: "Protocol Definition",
              description: "Use protocol, taught with protocol Drivable { }.",
            },
            {
              name: "Adopting Protocols",
              description: "Implement, taught with class Car: Drivable.",
            },
          ],
        },
      ],
      dividerText: "master advanced Swift features.",
    },
    {
      name: "Advanced Swift Features",
      description:
        "Dive into advanced Swift topics, taught with examples in Xcode.",
      children: [
        {
          name: "Generics",
          description: "Use generics, taught with a generic function example.",
          children: [
            {
              name: "Generic Functions",
              description: "Define, taught with func swap<T>(a: T, b: T).",
            },
            {
              name: "Generic Types",
              description: "Use in structs, taught with struct Stack<T> { }.",
            },
          ],
        },
        {
          name: "Enumerations",
          description: "Work with enums, taught with a Direction enum example.",
          children: [
            {
              name: "Basic Enums",
              description: "Define, taught with enum Direction { case north }.",
            },
            {
              name: "Associated Values",
              description: "Add values, taught with case .error(String).",
            },
          ],
        },
        {
          name: "Closures",
          description: "Use closures, taught with a sorting closure example.",
          children: [
            {
              name: "Basic Closures",
              description: "Define, taught with { (x: Int) in print(x) }.",
            },
            {
              name: "Trailing Closures",
              description: "Simplify, taught with array.sort { $0 > $1 }.",
            },
          ],
        },
        {
          name: "Error Handling",
          description: "Handle errors, taught with a try-catch example.",
          children: [
            {
              name: "Throwing Errors",
              description: "Use throws, taught with func divide() throws.",
            },
            {
              name: "Do-Catch",
              description: "Catch errors, taught with do { try } catch { }.",
            },
          ],
        },
      ],
      dividerText: "work with APIs and libraries.",
    },
    {
      name: "Working with APIs and Libraries",
      description:
        "Integrate external resources, taught with a network request in Xcode.",
      children: [
        {
          name: "Standard Libraries",
          description: "Use Swift’s libraries, taught with Foundation example.",
          children: [
            {
              name: "Foundation",
              description: "Import, taught with import Foundation.",
            },
            {
              name: "Date Handling",
              description: "Use Date, taught with let now = Date().",
            },
          ],
        },
        {
          name: "Third-Party Libraries",
          description: "Add libraries, taught with Alamofire example.",
          children: [
            {
              name: "Adding Libraries",
              description: "Via SwiftPM, taught with Package.swift edit.",
            },
            {
              name: "Using Libraries",
              description: "Call Alamofire, taught with AF.request().",
            },
          ],
        },
        {
          name: "Making Network Requests",
          description: "Fetch data, taught with a URLSession example.",
          children: [
            {
              name: "URLSession",
              description: "Basic fetch, taught with URLSession.shared.",
            },
            {
              name: "Decoding JSON",
              description: "Parse, taught with JSONDecoder().decode().",
            },
          ],
        },
      ],
      dividerText: "build iOS applications.",
    },
    {
      name: "Building iOS Applications",
      description:
        "Develop iOS apps with Swift, taught with a simple app in Xcode.",
      children: [
        {
          name: "Understanding iOS Architecture",
          description: "Learn iOS basics, taught with MVC explanation.",
          children: [
            {
              name: "MVC Pattern",
              description: "Model-View-Controller, taught with diagram.",
            },
            {
              name: "App Lifecycle",
              description: "Understand states, taught with AppDelegate.",
            },
          ],
        },
        {
          name: "Using UIKit",
          description: "Build UI with UIKit, taught with a button example.",
          children: [
            {
              name: "Views and Controllers",
              description: "Use UIView, taught with let button = UIButton().",
            },
            {
              name: "Storyboards",
              description: "Design UI, taught with Xcode storyboard.",
            },
          ],
        },
        {
          name: "Exploring SwiftUI",
          description: "Build modern UI, taught with a Text view example.",
          children: [
            {
              name: "Declarative Syntax",
              description: "Use SwiftUI, taught with Text('Hello').",
            },
            {
              name: "State Management",
              description: "Use @State, taught with @State var count = 0.",
            },
          ],
        },
      ],
      dividerText: "test and debug your code.",
    },
    {
      name: "Testing and Debugging",
      description: "Ensure code quality, taught with XCTest in Xcode.",
      children: [
        {
          name: "Unit Testing with XCTest",
          description: "Write tests, taught with a test case example.",
          children: [
            {
              name: "Test Setup",
              description: "Create test, taught with class Test: XCTestCase.",
            },
            {
              name: "Assertions",
              description: "Use XCTAssert, taught with XCTAssertEqual(1, 1).",
            },
          ],
        },
        {
          name: "Debugging Techniques",
          description: "Fix bugs, taught with breakpoint example.",
          children: [
            {
              name: "Breakpoints",
              description: "Set in Xcode, taught with breakpoint toggle.",
            },
            {
              name: "Print Debugging",
              description: "Use print(), taught with print('Debug').",
            },
          ],
        },
        {
          name: "Performance Optimization",
          description: "Optimize code, taught with Instruments example.",
          children: [
            {
              name: "Instruments",
              description: "Profile app, taught with Xcode Instruments.",
            },
            {
              name: "Memory Management",
              description: "Avoid leaks, taught with weak self.",
            },
          ],
        },
      ],
      dividerText: "manage dependencies with SwiftPM.",
    },
    {
      name: "Swift Package Manager (SwiftPM)",
      description: "Handle dependencies, taught with a package in Xcode.",
      children: [
        {
          name: "Creating and Managing Packages",
          description: "Build packages, taught with swift package init.",
          children: [
            {
              name: "Initialize Package",
              description: "Create, taught with swift package init.",
            },
            {
              name: "Package Manifest",
              description: "Edit Package.swift, taught with dependencies.",
            },
          ],
        },
        {
          name: "Using External Packages",
          description: "Add packages, taught with Alamofire example.",
          children: [
            {
              name: "Add Dependency",
              description: "Edit manifest, taught with .package(url:).",
            },
            {
              name: "Import Package",
              description: "Use in code, taught with import Alamofire.",
            },
          ],
        },
      ],
      dividerText: "handle concurrency.",
    },
    {
      name: "Concurrency and Parallelism",
      description: "Manage tasks efficiently, taught with GCD in Xcode.",
      children: [
        {
          name: "Grand Central Dispatch (GCD)",
          description: "Use GCD, taught with a background task example.",
          children: [
            {
              name: "Dispatch Queues",
              description: "Run async, taught with DispatchQueue.global().",
            },
            {
              name: "Main Queue",
              description: "Update UI, taught with DispatchQueue.main.",
            },
          ],
        },
        {
          name: "Threads and Queues",
          description: "Understand threads, taught with a queue example.",
          children: [
            {
              name: "Creating Threads",
              description: "Use Thread, taught with Thread { }.",
            },
            {
              name: "Queue Management",
              description: "Prioritize, taught with QoS settings.",
            },
          ],
        },
        {
          name: "Async/Await",
          description: "Modern concurrency, taught with async example.",
          children: [
            {
              name: "Async Functions",
              description: "Define, taught with async func fetchData().",
            },
            {
              name: "Await Calls",
              description: "Use await, taught with let data = await fetch().",
            },
          ],
        },
      ],
      dividerText: "explore Swift on Linux.",
    },
    {
      name: "Swift on Linux",
      description: "Use Swift on Linux, taught with a simple app example.",
      children: [
        {
          name: "Differences from macOS Swift",
          description: "Understand variances, taught with platform notes.",
          children: [
            {
              name: "Platform APIs",
              description: "No UIKit, taught with alternative libraries.",
            },
            {
              name: "Toolchain",
              description: "Linux-specific, taught with swift build.",
            },
          ],
        },
        {
          name: "Setting up and Running Swift on Linux",
          description: "Install Swift, taught with Ubuntu example.",
          children: [
            {
              name: "Install Swift",
              description: "Use apt, taught with swift.org instructions.",
            },
            {
              name: "Run Code",
              description: "Compile, taught with swift run.",
            },
          ],
        },
      ],
      dividerText: "commit to continuous learning.",
    },
    {
      name: "Continuous Learning and Resources",
      description:
        "Stay updated in 2025, taught with Swift.org and community examples.",
      children: [
        {
          name: "Staying Updated",
          description: "Follow updates, taught with Swift evolution example.",
          children: [
            {
              name: "Swift.org",
              description: "Official site, taught with blog check.",
            },
            {
              name: "WWDC",
              description: "Watch sessions, taught with Apple events.",
            },
          ],
        },
        {
          name: "Useful Resources",
          description: "Find learning materials, taught with tutorial links.",
          children: [
            {
              name: "Hacking with Swift",
              description: "Tutorials, taught with project examples.",
            },
            {
              name: "Swift Forums",
              description: "Join discussions, taught with forum link.",
            },
          ],
        },
      ],
    },
  ],
};

export default swiftRoadmap;
