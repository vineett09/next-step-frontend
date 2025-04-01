const cDeveloperRoadmap = {
  name: "C Developer Roadmap for Beginners to Advanced 2025",
  description:
    "A comprehensive guide to mastering the C programming language from scratch to advanced proficiency by April 1, 2025. This roadmap follows a natural progression through setup, syntax, control structures, functions, pointers, memory management, data structures, file handling, and system programming, equipping you with skills for low-level development with extensive resources and community support.",
  children: [
    {
      name: "Introduction to C",
      description:
        "Understand C’s role in programming and set up your development environment.",
      children: [
        {
          name: "What is C",
          description:
            "Learn about C as a foundational, low-level programming language.",
          children: [
            {
              name: "Definition",
              description:
                "A structured, procedural language developed by Dennis Ritchie in 1972.",
            },
            {
              name: "History",
              description:
                "Created at Bell Labs, influenced C++, Java, and modern languages.",
            },
            {
              name: "Key Features",
              description:
                "Manual memory management, portability, and low-level access.",
            },
          ],
        },
        {
          name: "Why Learn C",
          description:
            "Explore C’s importance in system programming and foundational skills.",
          children: [
            {
              name: "Use Cases",
              description:
                "Operating systems, embedded systems, and performance-critical apps.",
            },
            {
              name: "Relevance",
              description:
                "Underpins OS kernels (e.g., Linux), drivers, and firmware.",
            },
          ],
        },
        {
          name: "Setting Up C",
          description:
            "Install a compiler and prepare your environment for coding in C.",
          children: [
            {
              name: "Compiler",
              description: "Install GCC (Linux/macOS) or MinGW (Windows).",
            },
            {
              name: "IDE",
              description:
                "Set up Code::Blocks, VS Code, or use a text editor like Vim.",
            },
            {
              name: "First Program",
              description: "Write and compile a 'Hello, World!' program.",
              children: [
                {
                  name: "Output",
                  description: "Use printf() to print 'Hello, World!'.",
                },
                {
                  name: "Compilation",
                  description:
                    "Compile with `gcc main.c -o main` and run `./main`.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "C Basics",
      description:
        "Master the foundational syntax and constructs of C programming.",
      children: [
        {
          name: "Syntax and Data Types",
          description: "Learn C’s basic syntax, variables, and data types.",
          children: [
            {
              name: "Integers",
              description: "Declare integers (e.g., int x = 10).",
            },
            {
              name: "Floating-Point",
              description: "Use floats (e.g., float y = 3.14).",
            },
            {
              name: "Characters",
              description: "Store chars (e.g., char c = 'A').",
            },
            {
              name: "Variable Scope",
              description: "Understand local and global variable scopes.",
            },
          ],
        },
        {
          name: "Operators",
          description:
            "Perform operations using C’s arithmetic, relational, and logical operators.",
          children: [
            {
              name: "Arithmetic",
              description:
                "Addition, subtraction, multiplication, division (+, -, *, /).",
            },
            {
              name: "Relational",
              description: "Comparisons (==, !=, >, <, >=, <=).",
            },
            {
              name: "Logical",
              description: "AND, OR, NOT operators (&&, ||, !).",
            },
          ],
        },
        {
          name: "Input and Output",
          description: "Handle basic I/O operations in C.",
          children: [
            {
              name: "Output",
              description: "Use printf() for formatted output.",
            },
            {
              name: "Input",
              description: "Read user input with scanf().",
            },
          ],
        },
      ],
    },
    {
      name: "Control Structures",
      description: "Control program flow with conditionals and loops.",
      children: [
        {
          name: "Conditionals",
          description: "Make decisions in your program.",
          children: [
            {
              name: "If Statements",
              description: "Basic conditional logic with if.",
            },
            {
              name: "Else Clauses",
              description: "Extend with else and else if for branching.",
            },
            {
              name: "Switch Cases",
              description: "Handle multiple conditions with switch.",
            },
          ],
        },
        {
          name: "Loops",
          description: "Repeat code execution with loops.",
          children: [
            {
              name: "For Loops",
              description: "Iterate with a counter (e.g., for loop).",
            },
            {
              name: "While Loops",
              description: "Loop based on a condition (e.g., while).",
            },
            {
              name: "Do-While Loops",
              description: "Execute at least once before checking condition.",
            },
          ],
        },
      ],
    },
    {
      name: "Functions",
      description: "Organize code into reusable functions.",
      children: [
        {
          name: "Defining Functions",
          description: "Create and use functions in C.",
          children: [
            {
              name: "Return Types",
              description: "Specify return type (e.g., int for functions).",
            },
            {
              name: "Parameters",
              description: "Pass arguments to functions.",
            },
          ],
        },
        {
          name: "Function Usage",
          description: "Call and manage functions effectively.",
          children: [
            {
              name: "Calling",
              description: "Invoke functions with arguments.",
            },
            {
              name: "Prototypes",
              description: "Declare functions before use.",
            },
          ],
        },
      ],
    },
    {
      name: "Pointers and Memory Management",
      description: "Master C’s powerful pointer and memory features.",
      children: [
        {
          name: "Pointers",
          description: "Understand and use pointers for memory manipulation.",
          children: [
            {
              name: "Declaration",
              description: "Declare pointers (e.g., int *p).",
            },
            {
              name: "Address",
              description: "Get address with & operator.",
            },
            {
              name: "Dereferencing",
              description: "Access value with * operator.",
            },
          ],
        },
        {
          name: "Dynamic Memory",
          description: "Allocate and manage memory dynamically.",
          children: [
            {
              name: "Allocation",
              description: "Use malloc() to allocate memory.",
            },
            {
              name: "Deallocation",
              description: "Free memory with free().",
            },
            {
              name: "Zero Initialization",
              description: "Use calloc() for allocated and cleared memory.",
            },
          ],
        },
        {
          name: "Memory Issues",
          description: "Avoid common pitfalls in memory management.",
          children: [
            {
              name: "Leaks",
              description: "Prevent unfreed memory accumulation.",
            },
            {
              name: "Dangling Pointers",
              description: "Avoid accessing freed memory.",
            },
          ],
        },
      ],
    },
    {
      name: "Arrays and Strings",
      description: "Work with arrays and strings in C.",
      children: [
        {
          name: "Arrays",
          description: "Store and manipulate multiple elements.",
          children: [
            {
              name: "Declaration",
              description: "Define arrays (e.g., int arr[5]).",
            },
            {
              name: "Indexing",
              description: "Access elements with arr[0].",
            },
          ],
        },
        {
          name: "Strings",
          description: "Handle character arrays as strings.",
          children: [
            {
              name: "Definition",
              description: "Define strings (e.g., char str[] = 'Hello').",
            },
            {
              name: "Length",
              description: "Get length with strlen() from string.h.",
            },
            {
              name: "Copying",
              description: "Copy strings with strcpy().",
            },
          ],
        },
      ],
    },
    {
      name: "Structures and Unions",
      description: "Use custom data types for complex data organization.",
      children: [
        {
          name: "Structures",
          description: "Define and use structs for grouped data.",
          children: [
            {
              name: "Definition",
              description:
                "Create structs (e.g., struct Point {int x; int y;}).",
            },
            {
              name: "Accessing Members",
              description: "Use dot operator (e.g., p.x).",
            },
            {
              name: "Pointers to Structs",
              description: "Use arrow operator (e.g., p->x).",
            },
          ],
        },
        {
          name: "Unions",
          description: "Share memory for different data types.",
          children: [
            {
              name: "Definition",
              description:
                "Create unions (e.g., union Data {int i; float f;}).",
            },
            {
              name: "Usage",
              description: "Access one member at a time.",
            },
          ],
        },
      ],
    },
    {
      name: "File Handling",
      description: "Read from and write to files in C.",
      children: [
        {
          name: "File Operations",
          description: "Perform basic file I/O.",
          children: [
            {
              name: "Opening",
              description: "Open files with fopen().",
            },
            {
              name: "Closing",
              description: "Close files with fclose().",
            },
          ],
        },
        {
          name: "Reading and Writing",
          description: "Manipulate file contents.",
          children: [
            {
              name: "Reading",
              description: "Read with fscanf() or fgets().",
            },
            {
              name: "Writing",
              description: "Write with fprintf().",
            },
          ],
        },
      ],
    },
    {
      name: "Advanced C Programming",
      description: "Explore complex features and data structures in C.",
      children: [
        {
          name: "Preprocessor Directives",
          description: "Use macros and conditionals.",
          children: [
            {
              name: "Macros",
              description:
                "Define constants with #define (e.g., #define PI 3.14).",
            },
            {
              name: "Includes",
              description: "Include headers with #include <stdio.h>.",
            },
            {
              name: "Conditionals",
              description: "Use #ifdef for conditional compilation.",
            },
          ],
        },
        {
          name: "Data Structures",
          description: "Implement common data structures manually.",
          children: [
            {
              name: "Linked Lists",
              description: "Create singly or doubly linked lists.",
            },
            {
              name: "Stacks",
              description: "Implement using arrays or linked lists.",
            },
            {
              name: "Queues",
              description: "Build with arrays or linked lists.",
            },
          ],
        },
        {
          name: "Bit Manipulation",
          description: "Perform operations at the bit level.",
          children: [
            {
              name: "Bitwise Operators",
              description: "Use AND, OR, XOR (&, |, ^).",
            },
            {
              name: "Shifting",
              description: "Perform left/right shifts (<<, >>).",
            },
          ],
        },
      ],
    },
    {
      name: "System Programming",
      description: "Use C for low-level system interactions.",
      children: [
        {
          name: "Memory and System Calls",
          description: "Interact with the operating system.",
          children: [
            {
              name: "Dynamic Allocation",
              description: "Manage memory with malloc() and free().",
            },
            {
              name: "Processes",
              description: "Create processes with fork() (UNIX).",
            },
            {
              name: "Execution",
              description: "Run programs with exec() family.",
            },
          ],
        },
        {
          name: "Threads",
          description: "Implement multithreading in C.",
          children: [
            {
              name: "Creation",
              description: "Use pthread_create() for threads (POSIX).",
            },
            {
              name: "Synchronization",
              description: "Join threads with pthread_join().",
            },
          ],
        },
      ],
    },
    {
      name: "Practical Projects",
      description: "Apply C skills to real-world programming tasks.",
      children: [
        {
          name: "Beginner Projects",
          description: "Start with simple applications.",
          children: [
            {
              name: "Calculator",
              description: "Build a command-line calculator with functions.",
            },
            {
              name: "File Reader",
              description: "Read and display text file contents.",
            },
          ],
        },
        {
          name: "Intermediate Projects",
          description: "Tackle more complex problems.",
          children: [
            {
              name: "Student Database",
              description: "Manage records with structs and file I/O.",
            },
            {
              name: "Simple Shell",
              description: "Implement basic commands with process control.",
            },
          ],
        },
        {
          name: "Advanced Projects",
          description: "Develop sophisticated programs.",
          children: [
            {
              name: "Memory Manager",
              description: "Create a custom memory allocator.",
            },
            {
              name: "Threaded Server",
              description: "Build a multi-threaded server.",
            },
          ],
        },
      ],
    },
    {
      name: "Best Practices and Optimization",
      description:
        "Refine your C coding skills for efficiency and reliability.",
      children: [
        {
          name: "Code Quality",
          description: "Write clean, maintainable C code.",
          children: [
            {
              name: "Comments",
              description: "Add clarity with comments.",
            },
            {
              name: "Naming Conventions",
              description: "Use meaningful names for variables/functions.",
            },
          ],
        },
        {
          name: "Optimization",
          description: "Improve performance in C programs.",
          children: [
            {
              name: "Loop Efficiency",
              description: "Minimize overhead in loops.",
            },
            {
              name: "Memory Usage",
              description: "Optimize allocation and access.",
            },
          ],
        },
        {
          name: "Debugging",
          description: "Identify and fix errors effectively.",
          children: [
            {
              name: "Debugger",
              description: "Use gdb for debugging.",
            },
            {
              name: "Print Statements",
              description: "Insert printf() for troubleshooting.",
            },
          ],
        },
      ],
    },
    {
      name: "Resources and Continuous Learning",
      description: "Leverage resources and community to master C programming.",
      children: [
        {
          name: "Learning Resources",
          description: "Access books, courses, and references.",
          children: [
            {
              name: "Books",
              description:
                "'The C Programming Language' by Kernighan & Ritchie.",
            },
            {
              name: "Courses",
              description:
                "Coursera’s 'C for Everyone', Udemy’s 'C Programming'.",
            },
            {
              name: "References",
              description: "C Standard Library docs (e.g., cplusplus.com).",
            },
          ],
        },
        {
          name: "Community Engagement",
          description: "Connect with C developers.",
          children: [
            {
              name: "Forums",
              description: "Ask questions on Stack Overflow.",
            },
            {
              name: "Social Media",
              description: "Join r/C_Programming on Reddit.",
            },
          ],
        },
        {
          name: "Keeping Up-to-Date",
          description: "Stay informed on C standards and tools.",
          children: [
            {
              name: "Standards",
              description: "Learn C11/C17 updates.",
            },
            {
              name: "Tools",
              description: "Follow GCC compiler enhancements.",
            },
          ],
        },
      ],
    },
  ],
};

export default cDeveloperRoadmap;
