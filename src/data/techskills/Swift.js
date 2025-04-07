const swiftRoadmap = {
  name: "Swift Developer Roadmap 2025",
  children: [
    {
      name: "Introduction to Swift",
      children: [
        {
          name: "What is Swift?",
          children: [
            {
              name: "Overview",
            },
            {
              name: "Key Features",
            },
          ],
        },
        {
          name: "History and Evolution",
          children: [
            {
              name: "Swift’s Birth",
            },
            {
              name: "Open Source",
            },
          ],
        },
        {
          name: "Why Learn Swift?",
          children: [
            {
              name: "iOS Development",
            },
            {
              name: "Cross-Platform",
            },
          ],
        },
      ],
      dividerText: "set up your environment.",
    },
    {
      name: "Setting up the Development Environment",
      children: [
        {
          name: "Installing Swift",
          children: [
            {
              name: "Xcode",
            },
            {
              name: "Swift CLI",
            },
          ],
        },
        {
          name: "Using Swift Playgrounds",
          children: [
            {
              name: "Create Playground",
            },
            {
              name: "Run Code",
            },
          ],
        },
        {
          name: "Setting up an IDE",
          children: [
            {
              name: "Xcode Setup",
            },
            {
              name: "VS Code with Swift",
            },
          ],
        },
        {
          name: "Setting up Version Control (Git)",
          children: [
            {
              name: "Git Installation",
            },
            {
              name: "Initialize Repo",
            },
          ],
        },
      ],
      dividerText: "learn Swift basics.",
    },
    {
      name: "Basics of Swift",
      children: [
        {
          name: "Syntax Fundamentals",
          children: [
            {
              name: "Comments",
            },
            {
              name: "Semicolons",
            },
          ],
        },
        {
          name: "Variables and Constants",
          children: [
            {
              name: "Variables",
            },
            {
              name: "Constants",
            },
          ],
        },
        {
          name: "Data Types",
          children: [
            {
              name: "Integers",
            },
            {
              name: "Floating-Point Numbers",
            },
            {
              name: "Arrays",
            },
          ],
        },
        {
          name: "Control Structures",
          children: [
            {
              name: "If Statements",
            },
            {
              name: "Switch Statements",
            },
          ],
        },
        {
          name: "Functions",
          children: [
            {
              name: "Basic Functions",
            },
            {
              name: "Parameters and Returns",
            },
          ],
        },
      ],
      dividerText: "explore object-oriented programming.",
    },
    {
      name: "Object-Oriented Programming in Swift",
      children: [
        {
          name: "Classes and Objects",
          children: [
            {
              name: "Defining Classes",
            },
            {
              name: "Creating Objects",
            },
          ],
        },
        {
          name: "Structs",
          children: [
            {
              name: "Defining Structs",
            },
            {
              name: "Value vs Reference",
            },
          ],
        },
        {
          name: "Inheritance",
          children: [
            {
              name: "Base and Subclass",
            },
            {
              name: "Overriding",
            },
          ],
        },
        {
          name: "Protocols",
          children: [
            {
              name: "Protocol Definition",
            },
            {
              name: "Adopting Protocols",
            },
          ],
        },
      ],
      dividerText: "master advanced Swift features.",
    },
    {
      name: "Advanced Swift Features",
      children: [
        {
          name: "Generics",
          children: [
            {
              name: "Generic Functions",
            },
            {
              name: "Generic Types",
            },
          ],
        },
        {
          name: "Enumerations",
          children: [
            {
              name: "Basic Enums",
            },
            {
              name: "Associated Values",
            },
          ],
        },
        {
          name: "Closures",
          children: [
            {
              name: "Basic Closures",
            },
            {
              name: "Trailing Closures",
            },
          ],
        },
        {
          name: "Error Handling",
          children: [
            {
              name: "Throwing Errors",
            },
            {
              name: "Do-Catch",
            },
          ],
        },
      ],
      dividerText: "work with APIs and libraries.",
    },
    {
      name: "Working with APIs and Libraries",
      children: [
        {
          name: "Standard Libraries",
          children: [
            {
              name: "Foundation",
            },
            {
              name: "Date Handling",
            },
          ],
        },
        {
          name: "Third-Party Libraries",
          children: [
            {
              name: "Adding Libraries",
            },
            {
              name: "Using Libraries",
            },
          ],
        },
        {
          name: "Making Network Requests",
          children: [
            {
              name: "URLSession",
            },
            {
              name: "Decoding JSON",
            },
          ],
        },
      ],
      dividerText: "build iOS applications.",
    },
    {
      name: "Building iOS Applications",
      children: [
        {
          name: "Understanding iOS Architecture",
          children: [
            {
              name: "MVC Pattern",
            },
            {
              name: "App Lifecycle",
            },
          ],
        },
        {
          name: "Using UIKit",
          children: [
            {
              name: "Views and Controllers",
            },
            {
              name: "Storyboards",
            },
          ],
        },
        {
          name: "Exploring SwiftUI",
          children: [
            {
              name: "Declarative Syntax",
            },
            {
              name: "State Management",
            },
          ],
        },
      ],
      dividerText: "test and debug your code.",
    },
    {
      name: "Testing and Debugging",
      children: [
        {
          name: "Unit Testing with XCTest",
          children: [
            {
              name: "Test Setup",
            },
            {
              name: "Assertions",
            },
          ],
        },
        {
          name: "Debugging Techniques",
          children: [
            {
              name: "Breakpoints",
            },
            {
              name: "Print Debugging",
            },
          ],
        },
        {
          name: "Performance Optimization",
          children: [
            {
              name: "Instruments",
            },
            {
              name: "Memory Management",
            },
          ],
        },
      ],
      dividerText: "manage dependencies with SwiftPM.",
    },
    {
      name: "Swift Package Manager (SwiftPM)",
      children: [
        {
          name: "Creating and Managing Packages",
          children: [
            {
              name: "Initialize Package",
            },
            {
              name: "Package Manifest",
            },
          ],
        },
        {
          name: "Using External Packages",
          children: [
            {
              name: "Add Dependency",
            },
            {
              name: "Import Package",
            },
          ],
        },
      ],
      dividerText: "handle concurrency.",
    },
    {
      name: "Concurrency and Parallelism",
      children: [
        {
          name: "Grand Central Dispatch (GCD)",
          children: [
            {
              name: "Dispatch Queues",
            },
            {
              name: "Main Queue",
            },
          ],
        },
        {
          name: "Threads and Queues",
          children: [
            {
              name: "Creating Threads",
            },
            {
              name: "Queue Management",
            },
          ],
        },
        {
          name: "Async/Await",
          children: [
            {
              name: "Async Functions",
            },
            {
              name: "Await Calls",
            },
          ],
        },
      ],
      dividerText: "explore Swift on Linux.",
    },
    {
      name: "Swift on Linux",
      children: [
        {
          name: "Differences from macOS Swift",
          children: [
            {
              name: "Platform APIs",
            },
            {
              name: "Toolchain",
            },
          ],
        },
        {
          name: "Setting up and Running Swift on Linux",
          children: [
            {
              name: "Install Swift",
            },
            {
              name: "Run Code",
            },
          ],
        },
      ],
      dividerText: "commit to continuous learning.",
    },
    {
      name: "Continuous Learning and Resources",
      children: [
        {
          name: "Staying Updated",
          children: [
            {
              name: "Swift.org",
            },
            {
              name: "WWDC",
            },
          ],
        },
        {
          name: "Useful Resources",
          children: [
            {
              name: "Hacking with Swift",
            },
            {
              name: "Swift Forums",
            },
          ],
        },
      ],
    },
  ],
};

export default swiftRoadmap;
