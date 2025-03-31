const javascriptDeveloperRoadmap = {
  name: "JavaScript Developer Roadmap 2025",
  description:
    "This detailed roadmap provides a step-by-step guide to mastering JavaScript by 2025, from basic syntax to advanced programming techniques. Covering variables, functions, objects, async programming, DOM manipulation, APIs, and modern tools, it’s enriched with nested subtopics and practical examples—taught with tools like Node.js, VS Code, and browser APIs—for hands-on learners aiming to excel in the 2025 JavaScript ecosystem.",
  children: [
    {
      name: "Prerequisites & Setup",
      description:
        "Establish the groundwork for JavaScript development with essential tools and basic web skills, taught with a simple webpage project in VS Code. This step ensures readiness for coding in 2025.",
      children: [
        {
          name: "HTML & CSS Basics",
          description:
            "Learn HTML and CSS fundamentals for JavaScript integration, taught with a static webpage in VS Code.",
          children: [
            {
              name: "HTML Structure",
              description:
                "Use tags like <div>, <p>, taught with a webpage skeleton.",
            },
            {
              name: "CSS Styling",
              description:
                "Apply basic styles, taught with a colored div example in Chrome DevTools.",
            },
            {
              name: "Linking JS",
              description:
                "Add <script> tags, taught with a script file connection.",
            },
          ],
        },
      ],
      dividerText: "start with JavaScript basics.",
    },
    {
      name: "JavaScript Core Basics",
      description:
        "Master foundational JavaScript syntax and concepts, taught with a simple calculator script in Node.js. This step builds the essentials for 2025 coding.",
      children: [
        {
          name: "Variables and Data Types",
          description:
            "Learn variable declaration and types, taught with a variable log in console.",
          children: [
            {
              name: "var, let, const",
              description:
                "Understand scope, taught with a variable reassignment example.",
            },
            {
              name: "Primitive Types",
              description:
                "Explore strings, numbers, taught with a type log example.",
            },
            {
              name: "Type Conversion",
              description:
                "Convert types, taught with a string-to-number example.",
            },
          ],
        },
        {
          name: "Operators",
          description:
            "Use arithmetic and comparison operators, taught with a calculator operation.",
          children: [
            {
              name: "Arithmetic",
              description:
                "Add, subtract, taught with a sum example in Node.js.",
            },
            {
              name: "Comparison",
              description: "Use >, ===, taught with a condition check example.",
            },
            {
              name: "Logical",
              description:
                "Apply &&, ||, taught with a combined condition example.",
            },
            {
              name: "Bitwise",
              description: "Use &, |, taught with a bitwise operation example.",
            },
            {
              name: "Ternary",
              description:
                "Use ?:, taught with a conditional expression example.",
            },
          ],
        },
        {
          name: "Control Structures",
          description:
            "Implement loops and conditionals, taught with a number checker script.",
          children: [
            {
              name: "If Statements",
              description: "Use if/else, taught with a positive check example.",
            },
            {
              name: "Loops",
              description:
                "Apply for/while, taught with a counting loop example.",
            },
            {
              name: "Switch",
              description: "Use switch, taught with a day checker example.",
            },
            {
              name: "Try/Catch",
              description:
                "Handle errors, taught with a try/catch example in Node.js.",
            },
            {
              name: "Break & Continue",
              description:
                "Use break/continue, taught with a loop control example.",
            },
            {
              name: "Nested Loops",
              description:
                "Use nested loops, taught with a nested loop example.",
            },
            {
              name: "Conditional statements",
              description:
                "Use conditional statements to perform different actions based on different conditions",
            },
          ],
        },
      ],
      dividerText: "move to functions and scope.",
    },
    {
      name: "Functions and Scope",
      description:
        "Learn function creation and scope management, taught with a to-do list function in VS Code. This step enhances logic structuring for 2025.",
      children: [
        {
          name: "Functions",
          description:
            "Define and call functions, taught with a task adder function.",
          children: [
            {
              name: "Function Declaration",
              description:
                "Write basic functions, taught with a greet example.",
            },
            {
              name: "Parameters & Return",
              description:
                "Pass args, return values, taught with an add task example.",
            },
            {
              name: "Arrow Functions",
              description:
                "Use arrow syntax, taught with a short task log example.",
            },
          ],
        },
        {
          name: "Scope",
          description:
            "Understand variable scope, taught with a scope test function.",
          children: [
            {
              name: "Global Scope",
              description:
                "Define globals, taught with a global variable example.",
            },
            {
              name: "Local Scope",
              description:
                "Use local vars, taught with a function scope example.",
            },
            {
              name: "Closures",
              description:
                "Create closures, taught with a counter closure example.",
            },
            {
              name: "Hoisting",
              description:
                "Understand hoisting, taught with a hoisting example.",
            },
            {
              name: "Lexical Scoping",
              description:
                "Understand the lexical scope, taught with a lexical environment example.",
            },
          ],
        },
      ],
      dividerText: "explore objects and arrays.",
    },
    {
      name: "Objects and Arrays",
      description:
        "Master data structures like objects and arrays, taught with a to-do list manager in Node.js. This step prepares for complex data in 2025.",
      children: [
        {
          name: "Objects",
          description: "Work with objects, taught with a task object example.",
          children: [
            {
              name: "Object Creation",
              description:
                "Define objects, taught with a task properties example.",
            },
            {
              name: "Properties & Methods",
              description:
                "Add props/methods, taught with a task status example.",
            },
            {
              name: "Object Iteration",
              description: "Loop objects, taught with a for...in example.",
            },
          ],
        },
        {
          name: "Arrays",
          description: "Manage arrays, taught with a task list array example.",
          children: [
            {
              name: "Array Creation",
              description: "Define arrays, taught with a task list example.",
            },
            {
              name: "Array Methods",
              description:
                "Use push, map, taught with a task add/filter example.",
            },
            {
              name: "Array Iteration",
              description: "Loop arrays, taught with a forEach example.",
            },
          ],
        },
      ],
      dividerText: "advance to ES6+ features.",
    },
    {
      name: "ES6+ Features",
      description:
        "Learn modern JavaScript features, taught with a refactored to-do list in Vite. This step aligns with 2025 standards.",
      children: [
        {
          name: "Destructuring",
          description:
            "Extract values, taught with a task destructuring example.",
          children: [
            {
              name: "Array Destructuring",
              description: "Unpack arrays, taught with a task list example.",
            },
            {
              name: "Object Destructuring",
              description: "Unpack objects, taught with a task object example.",
            },
            {
              name: "Nested Destructuring",
              description:
                "Handle nested data, taught with a complex task example.",
            },
          ],
        },
        {
          name: "Spread/Rest Operators",
          description:
            "Use spread/rest, taught with a task array manipulation.",
          children: [
            {
              name: "Spread Operator",
              description: "Clone arrays, taught with a task copy example.",
            },
            {
              name: "Rest Parameters",
              description: "Collect args, taught with a function rest example.",
            },
            {
              name: "Object Spread",
              description: "Merge objects, taught with a task update example.",
            },
          ],
        },
        {
          name: "Modules",
          description:
            "Organize code with modules, taught with a modular to-do list.",
          children: [
            {
              name: "Export Syntax",
              description:
                "Export functions, taught with a module export example.",
            },
            {
              name: "Import Syntax",
              description: "Import modules, taught with an import example.",
            },
            {
              name: "Default Exports",
              description:
                "Use default exports, taught with a main module example.",
            },
          ],
        },
      ],
      dividerText: "dive into asynchronous programming.",
    },
    {
      name: "Asynchronous JavaScript",
      description:
        "Master async programming, taught with a data fetcher in Node.js. This step is crucial for 2025 APIs.",
      children: [
        {
          name: "Callbacks",
          description:
            "Use callbacks for async, taught with a setTimeout example.",
          children: [
            {
              name: "Callback Basics",
              description: "Define callbacks, taught with a delay log example.",
            },
            {
              name: "Callback Hell",
              description:
                "Understand nesting issues, taught with a nested example.",
            },
            {
              name: "Error Handling",
              description:
                "Handle errors, taught with a callback error example.",
            },
          ],
        },
        {
          name: "Promises",
          description:
            "Work with Promises, taught with a fetch Promise example.",
          children: [
            {
              name: "Promise Creation",
              description: "Create Promises, taught with a resolve example.",
            },
            {
              name: "Then/Catch",
              description: "Chain Promises, taught with a fetch chain example.",
            },
            {
              name: "Promise.all",
              description:
                "Handle multiple, taught with a multi-fetch example.",
            },
          ],
        },
        {
          name: "Async/Await",
          description: "Use async/await, taught with an API call example.",
          children: [
            {
              name: "Async Functions",
              description: "Define async, taught with an async fetch example.",
            },
            {
              name: "Await Keyword",
              description: "Use await, taught with a Promise resolve example.",
            },
            {
              name: "Error Handling",
              description: "Try/catch, taught with an async error example.",
            },
          ],
        },
      ],
      dividerText: "explore DOM manipulation.",
    },
    {
      name: "DOM Manipulation",
      description:
        "Interact with the DOM, taught with a to-do list UI in a browser. This step connects JS to web pages for 2025.",
      children: [
        {
          name: "DOM Selection",
          description:
            "Select elements, taught with a task list selector example.",
          children: [
            {
              name: "querySelector",
              description: "Select one, taught with a div select example.",
            },
            {
              name: "querySelectorAll",
              description: "Select all, taught with a list items example.",
            },
            {
              name: "getElementById",
              description: "Use IDs, taught with an ID select example.",
            },
          ],
        },
        {
          name: "DOM Modification",
          description: "Change DOM, taught with a task add/remove example.",
          children: [
            {
              name: "InnerHTML",
              description: "Set content, taught with a task text example.",
            },
            {
              name: "Create Elements",
              description: "Add elements, taught with a task node example.",
            },
            {
              name: "Remove Elements",
              description: "Delete nodes, taught with a task delete example.",
            },
          ],
        },
        {
          name: "Event Listeners",
          description: "Handle events, taught with a task click example.",
          children: [
            {
              name: "Add Event Listener",
              description: "Attach events, taught with a click example.",
            },
            {
              name: "Event Types",
              description: "Use click, input, taught with a form example.",
            },
            {
              name: "Event Delegation",
              description: "Delegate events, taught with a list click example.",
            },
          ],
        },
      ],
      dividerText: "integrate APIs and fetch data.",
    },
    {
      name: "API Integration",
      description:
        "Fetch and use API data, taught with a post fetcher in Node.js and browser. This step prepares for 2025 data-driven apps.",
      children: [
        {
          name: "Fetch API",
          description:
            "Use fetch for APIs, taught with a JSONPlaceholder example.",
          children: [
            {
              name: "GET Requests",
              description: "Fetch data, taught with a posts GET example.",
            },
            {
              name: "POST Requests",
              description: "Send data, taught with a post creation example.",
            },
            {
              name: "Error Handling",
              description: "Handle errors, taught with a fetch catch example.",
            },
          ],
        },
        {
          name: "Axios",
          description:
            "Use Axios for simpler fetches, taught with a post example.",
          children: [
            {
              name: "Setup Axios",
              description: "Install Axios, taught with npm install steps.",
            },
            {
              name: "GET with Axios",
              description: "Fetch posts, taught with an Axios GET example.",
            },
            {
              name: "POST with Axios",
              description: "Send data, taught with an Axios POST example.",
            },
          ],
        },
        {
          name: "Displaying Data",
          description: "Render API data, taught with a post list in DOM.",
          children: [
            {
              name: "Parse JSON",
              description: "Parse responses, taught with a JSON example.",
            },
            {
              name: "Update DOM",
              description: "Show data, taught with a list render example.",
            },
            {
              name: "Loading States",
              description: "Handle loading, taught with a spinner example.",
            },
          ],
        },
      ],
      dividerText: "advance to error handling and debugging.",
    },
    {
      name: "Error Handling and Debugging",
      description:
        "Manage errors and debug code, taught with a to-do app in VS Code. This step ensures 2025 code reliability.",
      children: [
        {
          name: "Error Handling",
          description:
            "Catch and manage errors, taught with a try/catch example.",
          children: [
            {
              name: "Try/Catch",
              description: "Use try/catch, taught with an async error example.",
            },
            {
              name: "Throw Errors",
              description:
                "Throw custom errors, taught with a validation example.",
            },
            {
              name: "Error Objects",
              description: "Log errors, taught with an error message example.",
            },
          ],
        },
        {
          name: "Debugging",
          description:
            "Debug with tools, taught with a bug fix in Chrome DevTools.",
          children: [
            {
              name: "Console Logging",
              description: "Log data, taught with a variable log example.",
            },
            {
              name: "Breakpoints",
              description:
                "Set breakpoints, taught with a function debug example.",
            },
            {
              name: "DevTools Features",
              description:
                "Use Sources tab, taught with a step-through example.",
            },
          ],
        },
      ],
      dividerText: "explore advanced JavaScript concepts.",
    },
    {
      name: "Advanced JavaScript Concepts",
      description:
        "Master advanced JS features, taught with a task manager in Node.js. This step deepens 2025 expertise.",
      children: [
        {
          name: "Prototypes",
          description:
            "Understand prototypes, taught with a task prototype example.",
          children: [
            {
              name: "Prototype Chain",
              description: "Explore chain, taught with an inheritance example.",
            },
            {
              name: "Adding Methods",
              description:
                "Add to prototype, taught with a task method example.",
            },
            {
              name: "Constructor Functions",
              description:
                "Use constructors, taught with a Task constructor example.",
            },
          ],
        },
        {
          name: "Classes",
          description: "Use ES6 classes, taught with a Task class example.",
          children: [
            {
              name: "Class Syntax",
              description: "Define classes, taught with a basic class example.",
            },
            {
              name: "Inheritance",
              description: "Extend classes, taught with a sub-class example.",
            },
            {
              name: "Static Methods",
              description: "Use static, taught with a utility method example.",
            },
          ],
        },
        {
          name: "Functional Programming",
          description:
            "Apply FP principles, taught with a task filter example.",
          children: [
            {
              name: "Pure Functions",
              description:
                "Write pure functions, taught with a filter example.",
            },
            {
              name: "Higher-Order Functions",
              description: "Use HOFs, taught with a map example.",
            },
            {
              name: "Reduce",
              description: "Use reduce, taught with a task sum example.",
            },
          ],
        },
      ],
      dividerText: "use modern JS tools and libraries.",
    },
    {
      name: "Modern Tools and Libraries",
      description:
        "Leverage tools and libraries, taught with a task app in Vite. This step enhances 2025 workflows.",
      children: [
        {
          name: "Package Management",
          description:
            "Use npm for packages, taught with a library install example.",
          children: [
            {
              name: "npm Basics",
              description: "Install packages, taught with npm install lodash.",
            },
            {
              name: "Package.json",
              description: "Manage dependencies, taught with a script example.",
            },
            {
              name: "Scripts",
              description: "Run scripts, taught with a start script example.",
            },
          ],
        },
        {
          name: "Useful Libraries",
          description: "Integrate libraries, taught with Lodash in a task app.",
          children: [
            {
              name: "Lodash",
              description: "Use utilities, taught with a debounce example.",
            },
            {
              name: "Moment.js",
              description: "Handle dates, taught with a date format example.",
            },
            {
              name: "Axios",
              description: "Fetch data, taught with an API call example.",
            },
          ],
        },
      ],
      dividerText: "build and deploy projects.",
    },
    {
      name: "Building and Deploying Projects",
      description:
        "Create and deploy JS projects, taught with a to-do app in Vite and Netlify. This step prepares for 2025 production.",
      children: [
        {
          name: "Project Structure",
          description:
            "Organize a project, taught with a to-do app layout in Vite.",
          children: [
            {
              name: "File Organization",
              description:
                "Structure files, taught with a folder setup example.",
            },
            {
              name: "Modular Code",
              description:
                "Split into modules, taught with an export/import example.",
            },
            {
              name: "Bundling",
              description:
                "Use Vite to bundle, taught with a build command example.",
            },
          ],
        },
        {
          name: "Deployment",
          description: "Deploy to Netlify, taught with a to-do app launch.",
          children: [
            {
              name: "Build Process",
              description:
                "Run npm run build, taught with a Vite build example.",
            },
            {
              name: "Netlify Setup",
              description:
                "Link to Netlify, taught with a drag-and-drop example.",
            },
            {
              name: "Live Deployment",
              description: "Deploy live, taught with a URL check example.",
            },
          ],
        },
      ],
      dividerText: "master advanced patterns.",
    },
    {
      name: "Advanced Patterns and Performance",
      description:
        "Learn advanced patterns and optimize, taught with a task manager in Node.js. This step refines 2025 skills.",
      children: [
        {
          name: "Design Patterns",
          description: "Use patterns, taught with a singleton task manager.",
          children: [
            {
              name: "Singleton",
              description:
                "Implement singleton, taught with a manager example.",
            },
            {
              name: "Factory",
              description: "Use factory, taught with a task creator example.",
            },
            {
              name: "Observer",
              description:
                "Apply observer, taught with an event system example.",
            },
          ],
        },
        {
          name: "Performance Optimization",
          description:
            "Optimize JS, taught with a task list performance tweak.",
          children: [
            {
              name: "Debouncing",
              description: "Debounce events, taught with an input example.",
            },
            {
              name: "Throttling",
              description: "Throttle calls, taught with a scroll example.",
            },
            {
              name: "Memoization",
              description: "Memoize functions, taught with a calc example.",
            },
          ],
        },
      ],
      dividerText: "specialize and contribute.",
    },
    {
      name: "Specialization and Contribution",
      description:
        "Specialize and contribute to JS, taught with a Node.js app and GitHub PR. This step elevates 2025 expertise.",
      children: [
        {
          name: "Specialization",
          description:
            "Focus on JS niches, taught with a Node.js server example.",
          children: [
            {
              name: "Node.js",
              description:
                "Build servers, taught with an Express setup example.",
            },
            {
              name: "TypeScript",
              description: "Add types, taught with a typed function example.",
            },
            {
              name: "Web APIs",
              description: "Use APIs, taught with a WebSocket example.",
            },
          ],
        },
        {
          name: "Contribute to Open Source",
          description: "Contribute to JS projects, taught with a PR to Lodash.",
          children: [
            {
              name: "Find Projects",
              description: "Search GitHub, taught with a repo find example.",
            },
            {
              name: "Fork & Clone",
              description: "Clone repo, taught with git steps.",
            },
            {
              name: "Submit PR",
              description: "Push change, taught with a PR example.",
            },
          ],
        },
      ],
      dividerText: "commit to continuous learning.",
    },
    {
      name: "Continuous Learning",
      description:
        "Stay updated in 2025, taught with resources like MDN and X posts.",
      children: [
        {
          name: "Documentation",
          description: "Use MDN, taught with a feature dive example.",
        },
        {
          name: "Communities",
          description: "Join Reddit, taught with a JS subreddit example.",
        },
        {
          name: "Trends",
          description: "Follow X, taught with JS trend tracking tips.",
        },
      ],
    },
  ],
};

export default javascriptDeveloperRoadmap;
