const cppDeveloperRoadmap = {
  name: "C++ Developer Roadmap for Beginners to Advanced 2025",
  description:
    "This roadmap guides you from zero C++ knowledge to mastering advanced concepts by 2025. It progresses through three stages—Basics, Intermediate Concepts, and Advanced Topics—covering syntax, OOP, STL, concurrency, and modern features. With practical projects, recommended resources, and community engagement, you’ll build skills for system programming, game development, and more.",
  children: [
    {
      name: "Introduction to C++",
      description:
        "Start your C++ journey by understanding the language and setting up your tools to write your first program.",
      children: [
        {
          name: "Language Overview",
          description:
            "Learn what C++ is, its history, and how it differs from C, setting the context for your learning.",
          children: [
            {
              name: "What is C++",
              description:
                "A high-performance, general-purpose language for systems and applications.",
            },
            {
              name: "History",
              description:
                "Created by Bjarne Stroustrup in the 1980s, evolved from C.",
            },
            {
              name: "C vs C++",
              description:
                "C++ adds OOP and STL support over C’s procedural style.",
            },
          ],
        },
        {
          name: "Setting up Environment",
          description:
            "Install tools to write, compile, and run C++ code, ensuring a functional setup.",
          children: [
            {
              name: "Choosing an IDE",
              description:
                "Pick Visual Studio, CLion, or Code::Blocks based on your OS.",
            },
            {
              name: "Installing Compiler",
              description: "Use g++ for Linux/macOS or MSVC for Windows.",
            },
            {
              name: "First Program",
              description:
                "Write and compile a 'Hello, World!' program with `cout`.",
            },
          ],
        },
      ],
      dividerText: " Master C++ language fundamentals.",
    },
    {
      name: "Language Fundamentals",
      description:
        "Build a strong foundation with C++ syntax, data handling, and control structures for basic programming.",
      children: [
        {
          name: "Basics of Syntax",
          description:
            "Understand tokens, data types, variables, and operators to write simple programs.",
          children: [
            {
              name: "Tokens and Keywords",
              description: "Learn `int`, `if`, `while`, and naming rules.",
            },
            {
              name: "Data Types",
              description:
                "Use `int`, `float`, `double`, `char`, `bool` with sizes.",
            },
            {
              name: "Variables",
              description: "Declare (`int x;`), initialize, and manage scope.",
            },
            {
              name: "Operators",
              description:
                "Master arithmetic, relational, logical, and bitwise operators.",
            },
          ],
        },
        {
          name: "Control Structures",
          description:
            "Control program flow with conditionals and loops for decision-making and repetition.",
          children: [
            {
              name: "If-Else",
              description: "Use `if-else` for conditional branching.",
            },
            {
              name: "Switch-Case",
              description: "Handle multiple cases with `switch` statements.",
            },
            {
              name: "Loops",
              description:
                "Implement `for`, `while`, `do-while` for iteration.",
            },
          ],
        },
      ],
      dividerText: " Explore functions and data structures.",
    },
    {
      name: "Functions and Data Structures",
      description:
        "Learn to modularize code with functions and manage data using arrays and strings.",
      children: [
        {
          name: "Functions",
          description:
            "Define and use functions to organize code and enable reuse.",
          children: [
            {
              name: "Function Definition",
              description: "Syntax: `return-type name(params) { body }`.",
            },
            {
              name: "Parameters",
              description: "Pass by value, reference, or use defaults.",
            },
            {
              name: "Recursion",
              description:
                "Solve problems like factorial with recursive calls.",
            },
          ],
        },
        {
          name: "Arrays and Strings",
          description:
            "Store and manipulate collections of data with arrays and strings.",
          children: [
            {
              name: "1D Arrays",
              description: "Declare and access elements in `int arr[5]`.",
            },
            {
              name: "2D Arrays",
              description: "Use for matrices with `int arr[3][4]`.",
            },
            {
              name: "Strings",
              description:
                "Handle C-style (`char[]`) and `std::string` objects.",
            },
          ],
        },
      ],
      dividerText: " Understand input/output operations.",
    },
    {
      name: "Input/Output",
      description:
        "Manage data input and output, including console and file operations.",
      children: [
        {
          name: "Console I/O",
          description:
            "Use streams for basic input and output in C++ programs.",
          children: [
            {
              name: "cin and cout",
              description: "Read with `std::cin`, write with `std::cout`.",
            },
            {
              name: "Formatting",
              description: "Use manipulators like `setw`, `setprecision`.",
            },
          ],
        },
        {
          name: "File I/O",
          description:
            "Read from and write to files for persistent data storage.",
          children: [
            {
              name: "ifstream",
              description: "Read data from files with `ifstream`.",
            },
            {
              name: "ofstream",
              description: "Write data to files with `ofstream`.",
            },
            {
              name: "File Handling",
              description: "Open, close, and manage file streams.",
            },
          ],
        },
      ],
      dividerText: " Dive into pointers and memory management.",
    },
    {
      name: "Pointers and Memory Management",
      description:
        "Master pointers and dynamic memory allocation, key to C++’s power and complexity.",
      children: [
        {
          name: "Pointers",
          description:
            "Understand and manipulate memory addresses with pointers.",
          children: [
            {
              name: "Declaration",
              description: "Define pointers like `int* ptr`.",
            },
            {
              name: "Dereferencing",
              description: "Access values with `*ptr`.",
            },
            {
              name: "Pointer Arithmetic",
              description: "Increment/decrement pointers.",
            },
          ],
        },
        {
          name: "Dynamic Memory",
          description:
            "Allocate and deallocate memory dynamically to manage resources.",
          children: [
            {
              name: "new Operator",
              description: "Allocate with `new` for heap memory.",
            },
            {
              name: "delete Operator",
              description: "Free memory with `delete` to avoid leaks.",
            },
            {
              name: "References",
              description: "Use `int& ref` as variable aliases.",
            },
          ],
        },
      ],
      dividerText: " Learn object-oriented programming.",
    },
    {
      name: "Object-Oriented Programming",
      description: "Apply OOP principles to design modular, reusable C++ code.",
      children: [
        {
          name: "Classes and Objects",
          description:
            "Define and use classes to create objects with data and behavior.",
          children: [
            {
              name: "Class Definition",
              description: "Include members, constructors, destructors.",
            },
            {
              name: "Access Specifiers",
              description: "Use `public`, `private`, `protected`.",
            },
            {
              name: "Object Creation",
              description: "Allocate on stack or heap.",
            },
          ],
        },
        {
          name: "OOP Principles",
          description: "Implement inheritance, polymorphism, and abstraction.",
          children: [
            {
              name: "Inheritance",
              description: "Extend classes with `class Derived : Base`.",
            },
            {
              name: "Polymorphism",
              description: "Use virtual functions for runtime behavior.",
            },
            {
              name: "Abstraction",
              description: "Define interfaces with pure virtual functions.",
            },
          ],
        },
      ],
      dividerText: " Explore templates and the STL.",
    },
    {
      name: "Templates and STL",
      description:
        "Leverage templates for generic programming and the STL for efficient data handling.",
      children: [
        {
          name: "Templates",
          description: "Write generic functions and classes with templates.",
          children: [
            {
              name: "Function Templates",
              description: "Define `template<typename T> T max(T a, T b)`.",
            },
            {
              name: "Class Templates",
              description: "Create `template<typename T> class Vector`.",
            },
            {
              name: "Specialization",
              description: "Customize templates for specific types.",
            },
          ],
        },
        {
          name: "Standard Template Library",
          description:
            "Use STL containers, iterators, and algorithms for productivity.",
          children: [
            {
              name: "Containers",
              description: "Explore `vector`, `map`, `set`.",
            },
            {
              name: "Iterators",
              description: "Traverse containers with iterators.",
            },
            {
              name: "Algorithms",
              description: "Use `sort`, `find`, `transform`.",
            },
            { name: "iostream", description: "Input/output stream objects." },
            {
              name: "multithreading",
              description: "Support for multithreading.",
            },
          ],
        },
      ],
      dividerText: " Handle exceptions and errors.",
    },
    {
      name: "Exception Handling",
      description:
        "Manage runtime errors gracefully with C++ exception handling mechanisms.",
      children: [
        {
          name: "Try-Catch Blocks",
          description: "Handle exceptions using structured blocks.",
          children: [
            {
              name: "Try Block",
              description: "Enclose risky code in `try { ... }`.",
            },
            {
              name: "Catch Block",
              description: "Catch with `catch (type e) { ... }`.",
            },
            { name: "Throwing", description: "Raise exceptions with `throw`." },
          ],
        },
        {
          name: "Custom Exceptions",
          description: "Create and use application-specific exception types.",
          children: [
            {
              name: "Exception Classes",
              description: "Inherit from `std::exception`.",
            },
            {
              name: "Throwing Custom",
              description: "Throw user-defined exceptions.",
            },
          ],
        },
      ],
      dividerText: " Master advanced OOP and templates.",
    },
    {
      name: "Advanced OOP and Templates",
      description:
        "Deepen your understanding of OOP and templates for complex applications.",
      children: [
        {
          name: "Advanced OOP Concepts",
          description:
            "Explore nuanced OOP features like multiple inheritance.",
          children: [
            {
              name: "Multiple Inheritance",
              description: "Handle with virtual inheritance.",
            },
            {
              name: "Friend Functions",
              description: "Grant access to private members.",
            },
            {
              name: "Static Members",
              description: "Use for shared class data.",
            },
          ],
        },
        {
          name: "Advanced Templates",
          description: "Use templates for metaprogramming and type traits.",
          children: [
            {
              name: "Template Metaprogramming",
              description: "Compute at compile time.",
            },
            {
              name: "Type Traits",
              description: "Check types with `std::is_integral`.",
            },
            {
              name: "SFINAE",
              description: "Enable/disable functions via Substitution Failure.",
            },
          ],
        },
      ],
      dividerText: " Tackle concurrency and memory management.",
    },
    {
      name: "Concurrency and Memory Management",
      description:
        "Learn multithreading and smart pointers for efficient, safe C++ programming.",
      children: [
        {
          name: "Concurrency",
          description: "Run multiple tasks concurrently with threads.",
          children: [
            { name: "Threads", description: "Create with `std::thread`." },
            {
              name: "Mutexes",
              description: "Synchronize with `std::mutex`, `std::lock_guard`.",
            },
            {
              name: "Atomics",
              description: "Use `std::atomic` for lock-free operations.",
            },
            {
              name: "Futures",
              description: "Handle async results with `std::future`.",
            },
          ],
        },
        {
          name: "Smart Pointers",
          description: "Manage memory automatically with smart pointers.",
          children: [
            {
              name: "unique_ptr",
              description: "Exclusive ownership with RAII.",
            },
            {
              name: "shared_ptr",
              description: "Shared ownership with reference counting.",
            },
            { name: "weak_ptr", description: "Break circular references." },
          ],
        },
      ],
      dividerText: " Embrace modern C++ features.",
    },
    {
      name: "Modern C++ Features",
      description:
        "Adopt C++11, C++14, and C++17 features for cleaner, efficient code.",
      children: [
        {
          name: "Lambdas and Move Semantics",
          description:
            "Use lambdas and move semantics for flexibility and performance.",
          children: [
            {
              name: "Lambda Expressions",
              description: "Define with `[capture](params) { body }`.",
            },
            {
              name: "Move Semantics",
              description: "Use `&&` for efficient resource transfer.",
            },
            {
              name: "Initializer Lists",
              description: "Simplify with `std::initializer_list`.",
            },
          ],
        },
        {
          name: "Other Features",
          description: "Leverage `auto`, `constexpr`, and variadic templates.",
          children: [
            { name: "auto", description: "Deduce types automatically." },
            { name: "constexpr", description: "Compute at compile time." },
            {
              name: "Variadic Templates",
              description: "Handle variable arguments.",
            },
          ],
        },
      ],
      dividerText: " Apply skills to network and GUI programming.",
    },
    {
      name: "Network and GUI Programming",
      description:
        "Extend C++ to networked applications and graphical interfaces.",
      children: [
        {
          name: "Network Programming",
          description:
            "Build networked apps with socket programming and libraries.",
          children: [
            {
              name: "Socket Basics",
              description: "Use BSD sockets for TCP/IP.",
            },
            {
              name: "Boost.Asio",
              description: "Handle async I/O with Boost.Asio.",
            },
            {
              name: "Client-Server",
              description: "Implement basic client-server models.",
            },
          ],
        },
        {
          name: "GUI Programming",
          description: "Create graphical applications with frameworks like Qt.",
          children: [
            {
              name: "Qt Basics",
              description: "Set up Qt Creator and build a window.",
            },
            { name: "Signals and Slots", description: "Connect events in Qt." },
            {
              name: "Other Frameworks",
              description: "Explore wxWidgets or SFML.",
            },
          ],
        },
      ],
      dividerText: " Focus on testing and debugging.",
    },
    {
      name: "Testing and Debugging",
      description:
        "Ensure code quality with testing frameworks and debugging tools.",
      children: [
        {
          name: "Unit Testing",
          description: "Write tests to verify code functionality.",
          children: [
            { name: "Google Test", description: "Use GTest for unit testing." },
            {
              name: "Assertions",
              description: "Check with `ASSERT_EQ`, `EXPECT_TRUE`.",
            },
          ],
        },
        {
          name: "Debugging",
          description: "Identify and fix issues in your code.",
          children: [
            {
              name: "GDB",
              description: "Debug with GDB breakpoints and watchpoints.",
            },
            { name: "IDE Debuggers", description: "Use built-in IDE tools." },
            {
              name: "Compiler Warnings",
              description: "Enable `-Wall`, `-Wextra`.",
            },
          ],
        },
      ],
      dividerText: " Engage with resources and practice.",
    },
    {
      name: "Resources and Practice",
      description:
        "Enhance learning with books, online resources, projects, and community involvement.",
      children: [
        {
          name: "Learning Resources",
          description:
            "Use books and online tutorials for structured learning.",
          children: [
            {
              name: "Books",
              description: "'C++ Primer', 'Effective C++', 'C++ Concurrency'.",
            },
            {
              name: "Tutorials",
              description: "tutorialspoint, Codecademy C++ courses.",
            },
            { name: "Courses", description: "Coursera, Udemy C++ offerings." },
          ],
        },
        {
          name: "Practice and Community",
          description: "Apply skills through projects and forums.",
          children: [
            {
              name: "Projects",
              description: "Build a calculator, game, or chat app.",
            },
            {
              name: "Platforms",
              description: "Practice on LeetCode, HackerRank, Codeforces.",
            },
            {
              name: "Communities",
              description: "Join r/cpp, GitHub open-source projects.",
            },
          ],
        },
      ],
    },
    {
      name: "Continous learning",
      description:
        "Keep learning and stay updated with the latest C++ features and best practices.",
    },
  ],
};

export default cppDeveloperRoadmap;
