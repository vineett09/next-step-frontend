const pythonDeveloperRoadmap = {
  name: "Python Developer Roadmap 2025",
  description:
    "This detailed roadmap provides a step-by-step guide to mastering Python by 2025, from basic syntax to advanced programming techniques. Covering variables, functions, data structures, OOP, file handling, libraries, web development, data science, and more, it’s enriched with nested subtopics and practical examples—taught with tools like VS Code, pip, and Jupyter—for hands-on learners aiming to excel in the 2025 Python ecosystem.",
  children: [
    {
      name: "Prerequisites & Setup",
      description:
        "Set up the foundation for Python development with essential tools and basic skills, taught with a simple script in VS Code. This step ensures readiness for coding in 2025.",
      children: [
        {
          name: "Basic Computer Skills",
          description:
            "Understand basic computing concepts, taught with a file management example in your OS.",
          children: [
            {
              name: "File Navigation",
              description:
                "Navigate directories, taught with dir (Windows) or ls (Unix).",
            },
            {
              name: "Text Editors",
              description:
                "Use Notepad or nano, taught with a basic text file edit.",
            },
            {
              name: "Terminal Basics",
              description:
                "Learn cd, mkdir, taught with a folder creation example.",
            },
          ],
        },
        {
          name: "Tools Setup",
          description:
            "Install and configure Python tools, taught with a hello world script in VS Code.",
          children: [
            {
              name: "Python Installation",
              description:
                "Install Python 3.x, taught with python --version check.",
            },
            {
              name: "VS Code",
              description:
                "Set up VS Code with Python extension, taught with setup steps.",
            },
            {
              name: "pip",
              description:
                "Use pip for packages, taught with pip install requests.",
            },
            {
              name: "Practice Script",
              description: "Run print('Hello'), taught with python hello.py.",
            },
          ],
        },
      ],
      dividerText: "start with Python basics.",
    },
    {
      name: "Python Core Basics",
      description:
        "Master foundational Python syntax and concepts, taught with a calculator script in VS Code. This step builds the essentials for 2025 coding.",
      children: [
        {
          name: "Variables and Data Types",
          description:
            "Learn variable assignment and types, taught with a print example.",
          children: [
            {
              name: "Variables",
              description:
                "Use x = 5, taught with a simple assignment example.",
            },
            {
              name: "Types",
              description:
                "Explore int, str, taught with type() function example.",
            },
            {
              name: "Type Conversion",
              description: "Convert types, taught with str(5) example.",
            },
          ],
        },
        {
          name: "Operators",
          description:
            "Use arithmetic and comparison operators, taught with a calculator.",
          children: [
            {
              name: "Arithmetic",
              description: "Add, multiply, taught with 5 + 3 example.",
            },
            {
              name: "Comparison",
              description: "Use >, ==, taught with an if condition example.",
            },
            {
              name: "Logical",
              description:
                "Apply and, or, taught with a combined check example.",
            },
          ],
        },
        {
          name: "Control Structures",
          description:
            "Implement conditionals and loops, taught with a number checker.",
          children: [
            {
              name: "If Statements",
              description: "Use if/elif, taught with a positive check example.",
            },
            {
              name: "For Loops",
              description: "Loop lists, taught with a range(5) example.",
            },
            {
              name: "While Loops",
              description: "Use while, taught with a countdown example.",
            },
          ],
        },
      ],
      dividerText: "move to functions and scope.",
    },
    {
      name: "Functions and Scope",
      description:
        "Learn function creation and scope management, taught with a task tracker script in VS Code. This step enhances logic structuring for 2025.",
      children: [
        {
          name: "Functions",
          description:
            "Define and call functions, taught with a task adder function.",
          children: [
            {
              name: "Function Definition",
              description: "Use def, taught with a greet function example.",
            },
            {
              name: "Parameters & Return",
              description:
                "Pass args, return values, taught with an add task example.",
            },
            {
              name: "Default Args",
              description: "Set defaults, taught with a default name example.",
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
              description: "Use global vars, taught with a global example.",
            },
            {
              name: "Local Scope",
              description: "Use local vars, taught with a function example.",
            },
            {
              name: "Nonlocal",
              description:
                "Use nonlocal, taught with a nested function example.",
            },
          ],
        },
      ],
      dividerText: "explore data structures.",
    },
    {
      name: "Data Structures",
      description:
        "Master Python data structures, taught with a to-do list manager in VS Code. This step prepares for complex data in 2025.",
      children: [
        {
          name: "Lists",
          description: "Work with lists, taught with a task list example.",
          children: [
            {
              name: "List Creation",
              description:
                "Define lists, taught with tasks = ['task1'] example.",
            },
            {
              name: "List Methods",
              description:
                "Use append, pop, taught with a task add/remove example.",
            },
            {
              name: "List Comprehension",
              description:
                "Simplify loops, taught with a doubled list example.",
            },
          ],
        },
        {
          name: "Dictionaries",
          description:
            "Manage key-value pairs, taught with a task dict example.",
          children: [
            {
              name: "Dict Creation",
              description:
                "Define dicts, taught with task = {'id': 1} example.",
            },
            {
              name: "Dict Methods",
              description: "Use get, keys, taught with a dict access example.",
            },
            {
              name: "Dict Comprehension",
              description: "Create dicts, taught with a squared dict example.",
            },
          ],
        },
        {
          name: "Sets and Tuples",
          description:
            "Use sets and tuples, taught with a unique tasks example.",
          children: [
            {
              name: "Sets",
              description: "Define sets, taught with set([1, 1, 2]) example.",
            },
            {
              name: "Tuples",
              description: "Use tuples, taught with (1, 2) example.",
            },
            {
              name: "Set Operations",
              description: "Use union, taught with a set merge example.",
            },
          ],
        },
      ],
      dividerText: "advance to file handling.",
    },
    {
      name: "File Handling",
      description:
        "Learn file operations, taught with a task saver script in VS Code. This step is key for 2025 data persistence.",
      children: [
        {
          name: "Reading Files",
          description: "Read from files, taught with a text file read example.",
          children: [
            {
              name: "Open and Read",
              description:
                "Use open(), read(), taught with a file read example.",
            },
            {
              name: "With Statement",
              description: "Use with, taught with a safe read example.",
            },
            {
              name: "Line Reading",
              description: "Read lines, taught with a readline() example.",
            },
          ],
        },
        {
          name: "Writing Files",
          description: "Write to files, taught with a task write example.",
          children: [
            {
              name: "Write Mode",
              description: "Use 'w', taught with a write example.",
            },
            {
              name: "Append Mode",
              description: "Use 'a', taught with an append example.",
            },
            {
              name: "CSV Writing",
              description: "Write CSV, taught with a csv module example.",
            },
          ],
        },
      ],
      dividerText: "dive into object-oriented programming.",
    },
    {
      name: "Object-Oriented Programming (OOP)",
      description:
        "Master OOP in Python, taught with a Task class in VS Code. This step builds reusable code for 2025.",
      children: [
        {
          name: "Classes and Objects",
          description: "Define classes, taught with a Task class example.",
          children: [
            {
              name: "Class Definition",
              description: "Use class, taught with a basic class example.",
            },
            {
              name: "Attributes",
              description: "Add attrs, taught with a task name example.",
            },
            {
              name: "Methods",
              description:
                "Define methods, taught with a status method example.",
            },
          ],
        },
        {
          name: "Inheritance",
          description: "Extend classes, taught with a PriorityTask example.",
          children: [
            {
              name: "Base Class",
              description: "Create base, taught with a Task example.",
            },
            {
              name: "Derived Class",
              description: "Extend class, taught with a subclass example.",
            },
            {
              name: "Super",
              description: "Use super(), taught with an init override example.",
            },
          ],
        },
        {
          name: "Encapsulation",
          description: "Hide data, taught with a private attribute example.",
          children: [
            {
              name: "Private Attributes",
              description: "Use __, taught with a hidden var example.",
            },
            {
              name: "Getters/Setters",
              description: "Control access, taught with a getter example.",
            },
            {
              name: "Property Decorators",
              description: "Use @property, taught with a managed attr example.",
            },
          ],
        },
      ],
      dividerText: "explore exceptions and modules.",
    },
    {
      name: "Exceptions and Modules",
      description:
        "Handle errors and organize code, taught with a task app in VS Code. This step ensures 2025 reliability.",
      children: [
        {
          name: "Exception Handling",
          description: "Manage errors, taught with a try/except example.",
          children: [
            {
              name: "Try/Except",
              description:
                "Catch errors, taught with a division error example.",
            },
            {
              name: "Raise Exceptions",
              description: "Throw errors, taught with a custom error example.",
            },
            {
              name: "Finally",
              description: "Use finally, taught with a cleanup example.",
            },
          ],
        },
        {
          name: "Modules and Packages",
          description: "Use modules, taught with a task module example.",
          children: [
            {
              name: "Import Modules",
              description: "Import math, taught with a sqrt example.",
            },
            {
              name: "Custom Modules",
              description: "Create module, taught with a task module example.",
            },
            {
              name: "Packages",
              description:
                "Organize in packages, taught with a dir structure example.",
            },
          ],
        },
      ],
      dividerText: "integrate standard libraries.",
    },
    {
      name: "Standard Libraries",
      description:
        "Use Python’s built-in libraries, taught with a task analyzer in VS Code. This step enhances 2025 productivity.",
      children: [
        {
          name: "os and sys",
          description: "Interact with OS, taught with a file path example.",
          children: [
            {
              name: "os Module",
              description: "Use os.path, taught with a file check example.",
            },
            {
              name: "sys Module",
              description: "Use sys.argv, taught with a CLI arg example.",
            },
            {
              name: "Directory Operations",
              description: "List dirs, taught with os.listdir example.",
            },
          ],
        },
        {
          name: "datetime",
          description: "Handle dates, taught with a task timestamp example.",
          children: [
            {
              name: "Date Creation",
              description: "Use datetime.now(), taught with a now example.",
            },
            {
              name: "Formatting",
              description: "Format dates, taught with strftime example.",
            },
            {
              name: "Time Delta",
              description: "Add time, taught with a delta example.",
            },
          ],
        },
        {
          name: "random",
          description: "Generate randoms, taught with a task ID example.",
          children: [
            {
              name: "Random Numbers",
              description: "Use randint, taught with a dice example.",
            },
            {
              name: "Choice",
              description: "Pick random, taught with a list choice example.",
            },
            {
              name: "Shuffle",
              description: "Shuffle list, taught with a task order example.",
            },
          ],
        },
      ],
      dividerText: "dive into external libraries.",
    },
    {
      name: "External Libraries and APIs",
      description:
        "Leverage external libraries and APIs, taught with a task fetcher in VS Code. This step prepares for 2025 integrations.",
      children: [
        {
          name: "requests",
          description:
            "Fetch data with requests, taught with a JSON API example.",
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
              description: "Handle errors, taught with a status check example.",
            },
          ],
        },
        {
          name: "json",
          description: "Parse JSON, taught with an API response example.",
          children: [
            {
              name: "Load JSON",
              description: "Parse JSON, taught with a loads example.",
            },
            {
              name: "Dump JSON",
              description: "Write JSON, taught with a dumps example.",
            },
            {
              name: "File JSON",
              description: "Read/write JSON, taught with a file example.",
            },
          ],
        },
      ],
      dividerText: "explore web development.",
    },
    {
      name: " Web Development with Python",
      description:
        "Build web apps with Python, taught with a Flask to-do app in VS Code. This step introduces 2025 web skills.",
      children: [
        {
          name: "Flask Basics",
          description: "Use Flask for web, taught with a basic app example.",
          children: [
            {
              name: "Setup Flask",
              description: "Install Flask, taught with pip install flask.",
            },
            {
              name: "Routes",
              description: "Define routes, taught with a /hello route example.",
            },
            {
              name: "Templates",
              description: "Use Jinja2, taught with a HTML render example.",
            },
          ],
        },
        {
          name: "Forms and POST",
          description: "Handle forms, taught with a task add form example.",
          children: [
            {
              name: "GET/POST",
              description: "Handle methods, taught with a form POST example.",
            },
            {
              name: "Form Data",
              description: "Access form, taught with request.form example.",
            },
            {
              name: "Redirects",
              description: "Redirect pages, taught with a redirect example.",
            },
          ],
        },
      ],
      dividerText: "dive into data science.",
    },
    {
      name: "Data Science with Python",
      description:
        "Learn data science basics, taught with a data analyzer in Jupyter. This step taps into 2025 data trends.",
      children: [
        {
          name: "NumPy",
          description:
            "Use NumPy for arrays, taught with a data array example.",
          children: [
            {
              name: "Array Creation",
              description: "Create arrays, taught with np.array example.",
            },
            {
              name: "Array Operations",
              description: "Add arrays, taught with a sum example.",
            },
            {
              name: "Indexing",
              description: "Access elements, taught with an index example.",
            },
          ],
        },
        {
          name: "Pandas",
          description: "Analyze data with Pandas, taught with a CSV example.",
          children: [
            {
              name: "DataFrames",
              description: "Create DataFrames, taught with a read_csv example.",
            },
            {
              name: "Data Cleaning",
              description: "Clean data, taught with a dropna example.",
            },
            {
              name: "Data Analysis",
              description: "Analyze, taught with a mean example.",
            },
          ],
        },
      ],
      dividerText: "master advanced Python.",
    },
    {
      name: "Advanced Python Concepts",
      description:
        "Master advanced Python features, taught with a task processor in VS Code. This step refines 2025 skills.",
      children: [
        {
          name: "Decorators",
          description: "Use decorators, taught with a timer decorator example.",
          children: [
            {
              name: "Function Decorators",
              description: "Define decorator, taught with a log example.",
            },
            {
              name: "Class Decorators",
              description: "Use on classes, taught with a class example.",
            },
            {
              name: "Args in Decorators",
              description: "Pass args, taught with a custom decorator example.",
            },
          ],
        },
        {
          name: "Generators",
          description:
            "Create generators, taught with a task generator example.",
          children: [
            {
              name: "Yield",
              description: "Use yield, taught with a range example.",
            },
            {
              name: "Generator Expressions",
              description: "Create expressions, taught with a list example.",
            },
            {
              name: "Itertools",
              description: "Use itertools, taught with a cycle example.",
            },
          ],
        },
        {
          name: "Context Managers",
          description: "Manage resources, taught with a file context example.",
          children: [
            {
              name: "With Statement",
              description: "Use with, taught with a file example.",
            },
            {
              name: "Custom Context",
              description: "Define context, taught with a class example.",
            },
            {
              name: "Contextlib",
              description: "Use contextlib, taught with a decorator example.",
            },
          ],
        },
      ],
      dividerText: "build and deploy projects.",
    },
    {
      name: "Building and Deploying Projects",
      description:
        "Create and deploy Python projects, taught with a Flask app on Heroku. This step prepares for 2025 production.",
      children: [
        {
          name: "Project Structure",
          description: "Organize a project, taught with a Flask app layout.",
          children: [
            {
              name: "File Organization",
              description: "Structure files, taught with a folder example.",
            },
            {
              name: "Virtual Environments",
              description: "Use venv, taught with a venv setup example.",
            },
            {
              name: "Requirements",
              description:
                "Create requirements.txt, taught with pip freeze example.",
            },
          ],
        },
        {
          name: "Deployment",
          description: "Deploy to Heroku, taught with a Flask app launch.",
          children: [
            {
              name: "Heroku Setup",
              description: "Install Heroku CLI, taught with login steps.",
            },
            {
              name: "Procfile",
              description: "Create Procfile, taught with a gunicorn example.",
            },
            {
              name: "Deploy Process",
              description: "Push to Heroku, taught with git push heroku main.",
            },
          ],
        },
      ],
      dividerText: "specialize and contribute.",
    },
    {
      name: "Specialization and Contribution",
      description:
        "Specialize and contribute to Python, taught with a data app and GitHub PR. This step elevates 2025 expertise.",
      children: [
        {
          name: "Specialization",
          description:
            "Focus on Python niches, taught with a Django app example.",
          children: [
            {
              name: "Django",
              description:
                "Build web apps, taught with a Django setup example.",
            },
            {
              name: "Machine Learning",
              description: "Use scikit-learn, taught with a model example.",
            },
            {
              name: "Automation",
              description: "Automate tasks, taught with a script example.",
            },
          ],
        },
        {
          name: "Contribute to Open Source",
          description:
            "Contribute to Python projects, taught with a PR to requests.",
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
      name: "Step 15: Continuous Learning",
      description:
        "Stay updated in 2025, taught with resources like Python.org and X posts.",
      children: [
        {
          name: "Documentation",
          description: "Use Python.org, taught with a feature dive example.",
        },
        {
          name: "Communities",
          description: "Join Reddit, taught with a Python subreddit example.",
        },
        {
          name: "Trends",
          description: "Follow X, taught with Python trend tracking tips.",
        },
      ],
    },
  ],
};

export default pythonDeveloperRoadmap;
