const rustDeveloperRoadmap = {
  name: "Rust Developer Roadmap for Beginners to Advanced 2025",
  children: [
    {
      name: "Introduction to Rust",
      children: [
        {
          name: "Language Overview",
          children: [
            {
              name: "What is Rust",
            },

            {
              name: "Key Features",
            },
            {
              name: "Why Learn Rust",
            },
            {
              name: "Comparison to C++",
            },
          ],
        },
        {
          name: "Setting up Environment",
          children: [
            {
              name: "Installing Rust",
            },
            {
              name: "Using cargo",
            },
            {
              name: "First Program",
            },
          ],
        },
      ],
      dividerText: " Master Rust syntax and ownership.",
    },
    {
      name: "Syntax and Ownership",
      children: [
        {
          name: "Syntax and Basic Constructs",
          children: [
            {
              name: "Variables and Types",
            },
            {
              name: "Control Structures",
            },
            {
              name: "Functions",
            },
            {
              name: "Mutability",
            },
            {
              name: "Shadowing",
            },
            {
              name: "Expressions",
            },
            {
              name: "Comments",
            },
          ],
        },
        {
          name: "Ownership and Borrowing",
          children: [
            {
              name: "Ownership",
            },
            {
              name: "Transferring Ownership",
            },
            {
              name: "Borrowing",
            },
            {
              name: "Lifetimes",
            },
            {
              name: "Scope Rules",
            },
            {
              name: "Borrow Checker",
            },
            {
              name: "Copy Trait",
            },
          ],
        },
      ],
      dividerText: " Explore basic testing in Rust.",
    },
    {
      name: "Basic Testing",
      children: [
        {
          name: "Writing Tests",
          children: [
            {
              name: "Test Attribute",
            },
            {
              name: "Assertions",
            },
            {
              name: "Test Modules",
            },
            {
              name: "Ignoring Tests",
            },
            {
              name: "Test Naming",
            },
          ],
        },
        {
          name: "Running Tests",
          children: [
            {
              name: "cargo test",
            },
            {
              name: "Test Output",
            },
            {
              name: "Filtering Tests",
            },
            {
              name: "Parallel Execution",
            },
            {
              name: "Verbose Output",
            },
          ],
        },
      ],
      dividerText: " Build with structs and enums.",
    },
    {
      name: "Structs and Enums",
      children: [
        {
          name: "Structs",
          children: [
            {
              name: "Defining Structs",
            },
            {
              name: "Tuple Structs",
            },
            { name: "Methods" },
            {
              name: "Associated Functions",
            },
            {
              name: "Field Access",
            },
            {
              name: "Debug Trait",
            },
          ],
        },
        {
          name: "Enums",
          children: [
            {
              name: "Defining Enums",
            },
            {
              name: "Associated Data",
            },
            {
              name: "Pattern Matching",
            },
            {
              name: "if let",
            },
            {
              name: "Enum Methods",
            },
            {
              name: "Common Enums",
            },
          ],
        },
      ],
      dividerText: " Learn traits and generics.",
    },
    {
      name: "Traits and Generics",
      children: [
        {
          name: "Traits",
          children: [
            {
              name: "Trait Definition",
            },
            {
              name: "Implementing Traits",
            },
            {
              name: "Default Methods",
            },
            {
              name: "Trait Bounds",
            },
            {
              name: "Common Traits",
            },
            {
              name: "Operator Overloading",
            },
          ],
        },
        {
          name: "Generic Programming",
          children: [
            {
              name: "Generic Functions",
            },
            {
              name: "Generic Types",
            },
            {
              name: "Trait Constraints",
            },
            {
              name: "Generic Lifetimes",
            },
            {
              name: "Phantom Types",
            },
            {
              name: "Monomorphization",
            },
          ],
        },
      ],
      dividerText: " Handle errors effectively.",
    },
    {
      name: "Error Handling",
      children: [
        {
          name: "Option and Result",
          children: [
            {
              name: "Option",
            },
            {
              name: "Result",
            },
            {
              name: "Unwrap",
            },
            {
              name: "? Operator",
            },
            {
              name: "Match Handling",
            },
            {
              name: "Combinators",
            },
          ],
        },
        {
          name: "Custom Errors",
          children: [
            {
              name: "Error Trait",
            },
            {
              name: "Defining Errors",
            },
            {
              name: "Returning Errors",
            },
            {
              name: "Error Conversion",
            },
            {
              name: "thiserror Crate",
            },
            {
              name: "anyhow Crate",
            },
          ],
        },
      ],
      dividerText: " Explore the standard library and modules.",
    },
    {
      name: "Standard Library and Modules",
      children: [
        {
          name: "Collections and Iterators",
          children: [
            { name: "Vec" },
            {
              name: "HashMap",
            },
            { name: "String" },
            {
              name: "Iterator Basics",
            },
            {
              name: "Iterator Methods",
            },
            {
              name: "Ownership Impact",
            },
          ],
        },
        {
          name: "Modules and Crates",
          children: [
            {
              name: "Module Declaration",
            },
            { name: "Visibility" },
            {
              name: "File Modules",
            },
            {
              name: "Crate Creation",
            },
            {
              name: "Dependencies",
            },
            {
              name: "Publishing",
            },
          ],
        },
      ],
      dividerText: " Understand smart pointers.",
    },
    {
      name: "Smart Pointers",
      children: [
        {
          name: "Box and Reference Counting",
          children: [
            { name: "Box" },
            {
              name: "Rc",
            },
            {
              name: "Arc",
            },
            {
              name: "Cloning",
            },
            {
              name: "Deref Trait",
            },
            {
              name: "Use Cases",
            },
          ],
        },
        {
          name: "Weak References",
          children: [
            {
              name: "Weak Definition",
            },
            {
              name: "Cycle Prevention",
            },
            {
              name: "Upgrading",
            },
            {
              name: "Safety Checks",
            },
            {
              name: "Ownership Rules",
            },
          ],
        },
      ],
      dividerText: " Enhance testing skills.",
    },
    {
      name: "Intermediate Testing",
      children: [
        {
          name: "Unit and Integration Tests",
          children: [
            {
              name: "Unit Tests",
            },
            {
              name: "Integration Tests",
            },
            {
              name: "Test Setup",
            },
            {
              name: "Mocking",
            },
            {
              name: "Test Attributes",
            },
          ],
        },
        {
          name: "Test-Driven Development",
          children: [
            {
              name: "TDD Workflow",
            },
            {
              name: "Assertions",
            },
            { name: "Red-Green" },
            {
              name: "Refactoring",
            },
            {
              name: "Coverage",
            },
          ],
        },
      ],
      dividerText: " Master concurrency in Rust.",
    },
    {
      name: "Concurrency",
      children: [
        {
          name: "Threads and Synchronization",
          children: [
            {
              name: "Thread Creation",
            },
            {
              name: "Mutex",
            },
            {
              name: "RwLock",
            },
            {
              name: "Joining Threads",
            },
            {
              name: "Scoped Threads",
            },
            {
              name: "Thread Parking",
            },
          ],
        },
        {
          name: "Message Passing",
          children: [
            {
              name: "Sender/Receiver",
            },
            {
              name: "Multiple Producers",
            },
            {
              name: "Safety Guarantees",
            },
            {
              name: "Blocking Send",
            },
            {
              name: "Try Receive",
            },
          ],
        },
      ],
      dividerText: " Dive into asynchronous programming.",
    },
    {
      name: "Asynchronous Programming",
      children: [
        {
          name: "Async/Await",
          children: [
            {
              name: "Async Functions",
            },
            {
              name: "Awaiting",
            },
            {
              name: "Future Return",
            },
            {
              name: "Error Handling",
            },
            { name: "Async Blocks" },
          ],
        },
        {
          name: "Futures and I/O",
          children: [
            {
              name: "Future Trait",
            },
            { name: "Streams" },
            {
              name: "Tokio Basics",
            },
            { name: "async_std" },
            {
              name: "Polling",
            },
            {
              name: "Async File I/O",
            },
          ],
        },
      ],
      dividerText: " Explore macros and optimization.",
    },
    {
      name: "Macros and Performance",
      children: [
        {
          name: "Macros",
          children: [
            {
              name: "Declarative Macros",
            },
            {
              name: "Procedural Macros",
            },
            {
              name: "Macro Hygiene",
            },
            {
              name: "Debug Macros",
            },
            {
              name: "Common Macros",
            },
          ],
        },
        {
          name: "Performance Optimization",
          children: [
            {
              name: "Profiling Tools",
            },
            {
              name: "Flame Graphs",
            },
            {
              name: "Inlining",
            },
            {
              name: "Zero-Cost",
            },
            { name: "Benchmarks" },
          ],
        },
      ],
      dividerText: " Tackle unsafe code and FFI.",
    },
    {
      name: "Unsafe Code and FFI",
      children: [
        {
          name: "Unsafe Code",
          children: [
            {
              name: "When to Use",
            },
            {
              name: "Unsafe Blocks",
            },
            { name: "Raw Pointers" },
            { name: "Avoiding UB" },
            {
              name: "Safety Contracts",
            },
          ],
        },
        {
          name: "Foreign Function Interface",
          children: [
            {
              name: "Calling C",
            },
            {
              name: "Exposing Rust",
            },
            {
              name: "Binding Tools",
            },
            { name: "Memory Safety" },
            {
              name: "FFI Examples",
            },
          ],
        },
      ],
      dividerText: " Refine testing and debugging.",
    },
    {
      name: "Advanced Testing and Debugging",
      children: [
        {
          name: "Advanced Testing",
          children: [
            {
              name: "Property-Based",
            },
            {
              name: "Fuzzing",
            },
            { name: "Mocking Crates" },
            { name: "Test Coverage" },
            {
              name: "Test Attributes",
            },
          ],
        },
        {
          name: "Debugging and Logging",
          children: [
            { name: "GDB Debugging" },
            { name: "LLDB" },
            {
              name: "Logging Setup",
            },
            {
              name: "Tracing Events",
            },
            {
              name: "Debug Builds",
            },
            {
              name: "Panic Handling",
            },
          ],
        },
      ],
      dividerText: " Leverage resources and practice.",
    },
    {
      name: "Resources and Practice",
      children: [
        {
          name: "Learning Resources",
          children: [
            {
              name: "The Rust Book",
            },

            {
              name: "Udemy Courses",
            },
            {
              name: "Coursera",
            },
          ],
        },
        {
          name: "Practice and Community",
          children: [
            {
              name: "CLI Tools",
            },
            {
              name: "Web Apps",
            },
            {
              name: "Algorithms",
            },

            {
              name: "r/rust",
            },
            {
              name: "Rust Discord",
            },
          ],
        },
      ],
    },
  ],
};

export default rustDeveloperRoadmap;
