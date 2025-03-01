const rubyDeveloperRoadmap = {
  name: "Ruby Developer Roadmap for Beginners to Advanced 2025",
  description:
    "This roadmap guides you from zero Ruby knowledge to advanced mastery by 2025. It follows a natural progression tailored to Ruby’s elegance and productivity, covering syntax, OOP, scripting, Rails, APIs, and advanced techniques. With projects and resources, you’ll gain skills for web development, automation, and creative coding.",
  children: [
    {
      name: "Starting with Ruby",
      description:
        "Get introduced to Ruby and set up your environment to begin coding.",
      children: [
        {
          name: "Ruby Basics",
          description: "Understand Ruby’s appeal and foundational concepts.",
          children: [
            { name: "Why Ruby", description: "Elegance and developer focus." },
            {
              name: "Dynamic Typing",
              description: "Flexibility in data types.",
            },
            {
              name: "Everything is an Object",
              description: "Core Ruby philosophy.",
            },
            {
              name: "History",
              description: "Created by Yukihiro Matsumoto in 1995.",
            },
            {
              name: "IRB",
              description: "Interactive Ruby shell for experimentation.",
            },
          ],
        },
        {
          name: "Setup",
          description: "Prepare your tools and write your first Ruby code.",
          children: [
            {
              name: "Installation",
              description: "Using rbenv or RVM for version management.",
            },
            {
              name: "Editor",
              description: "VS Code with Ruby plugin or RubyMine.",
            },
            {
              name: "First Script",
              description: "Simple Ruby program with puts.",
            },
            {
              name: "Gem System",
              description: "Ruby’s package manager basics.",
            },
            {
              name: "Ruby Versions",
              description: "Understanding 2.x vs 3.x differences.",
            },
          ],
        },
      ],
      dividerText: " Master Ruby’s syntax and flow.",
    },
    {
      name: "Syntax and Control Flow",
      description:
        "Learn Ruby’s expressive syntax and how to control program logic.",
      children: [
        {
          name: "Variables and Data",
          description: "Handle data with Ruby’s flexible types.",
          children: [
            {
              name: "Variables",
              description: "Local, instance (@), global ($) scopes.",
            },
            {
              name: "Strings",
              description: "Interpolation with #{} and methods.",
            },
            {
              name: "Symbols",
              description: "Efficient immutable identifiers.",
            },
            {
              name: "Numbers",
              description: "Integers, floats, and bigint support.",
            },
            { name: "Nil", description: "Ruby’s null value and its role." },
          ],
        },
        {
          name: "Control Structures",
          description: "Direct program flow with Ruby’s tools.",
          children: [
            {
              name: "If/Unless",
              description: "Conditional branching with unless as unique.",
            },
            {
              name: "Case",
              description: "Multi-option decision with pattern matching.",
            },
            {
              name: "Loops",
              description: "While, until, and loop constructs.",
            },
            { name: "Ternary Operator", description: "Concise conditionals." },
            {
              name: "Modifiers",
              description: "Inline if/unless in statements.",
            },
          ],
        },
      ],
      dividerText: " Explore collections and iteration.",
    },
    {
      name: "Collections and Iteration",
      description:
        "Work with Ruby’s powerful built-in data structures and loops.",
      children: [
        {
          name: "Arrays and Hashes",
          description: "Manage collections of data.",
          children: [
            {
              name: "Arrays",
              description: "Ordered lists with flexible methods.",
            },
            {
              name: "Hashes",
              description: "Key-value mappings with symbol keys.",
            },
            { name: "Operations", description: "Push, pop, merge, and more." },
            { name: "Set", description: "Unique collections via Set library." },
            {
              name: "Nested Collections",
              description: "Arrays within hashes and vice versa.",
            },
          ],
        },
        {
          name: "Blocks and Enumerables",
          description: "Iterate and transform data efficiently.",
          children: [
            { name: "Blocks", description: "Code blocks with do/end or {}." },
            { name: "Each", description: "Basic iteration over collections." },
            {
              name: "Map/Select",
              description: "Transforming and filtering data.",
            },
            {
              name: "Inject/Reduce",
              description: "Aggregating collection values.",
            },
            {
              name: "Lazy Enumeration",
              description: "Efficient iteration with lazy.",
            },
          ],
        },
      ],
      dividerText: " Build with methods and objects.",
    },
    {
      name: "Methods and Object-Oriented Design",
      description: "Create reusable code and embrace Ruby’s OOP paradigm.",
      children: [
        {
          name: "Methods",
          description: "Define and use methods in Ruby.",
          children: [
            { name: "Definition", description: "Method creation with def." },
            {
              name: "Arguments",
              description: "Default, optional, and splat args.",
            },
            {
              name: "Return",
              description: "Implicit return of last expression.",
            },
            {
              name: "Method Visibility",
              description: "Public, private, protected.",
            },
            {
              name: "Procs and Lambdas",
              description: "First-class functions in Ruby.",
            },
          ],
        },
        {
          name: "Classes and Objects",
          description: "Core OOP principles in Ruby.",
          children: [
            {
              name: "Classes",
              description: "Blueprint with initialize method.",
            },
            {
              name: "Instance Variables",
              description: "Object-specific data with @.",
            },
            { name: "Inheritance", description: "Single inheritance with <." },
            { name: "Attr Accessors", description: "Getter/setter shortcuts." },
            { name: "Class Methods", description: "Static methods with self." },
          ],
        },
      ],
      dividerText: " Enhance with modules and exceptions.",
    },
    {
      name: "Modules and Exception Handling",
      description: "Organize code and manage errors effectively.",
      children: [
        {
          name: "Modules",
          description: "Ruby’s approach to code organization.",
          children: [
            { name: "Mixins", description: "Sharing behavior with include." },
            { name: "Namespaces", description: "Grouping related classes." },
            {
              name: "Inclusion",
              description: "Extending classes with extend.",
            },
            {
              name: "Module Methods",
              description: "Defining module-specific methods.",
            },
            { name: "Constants", description: "Storing values in modules." },
          ],
        },
        {
          name: "Exceptions",
          description: "Handling errors gracefully.",
          children: [
            {
              name: "Rescue",
              description: "Catching errors with begin/rescue.",
            },
            { name: "Raise", description: "Triggering exceptions manually." },
            {
              name: "Custom Exceptions",
              description: "Subclassing StandardError.",
            },
            { name: "Ensure", description: "Guaranteed cleanup code." },
            { name: "Retry", description: "Re-running failed blocks." },
          ],
        },
      ],
      dividerText: " Automate with scripting and CLI tools.",
    },
    {
      name: "Scripting and CLI Tools",
      description: "Use Ruby for automation and command-line utilities.",
      children: [
        {
          name: "Scripting Basics",
          description: "Writing scripts for tasks.",
          children: [
            {
              name: "File Handling",
              description: "File.read, File.write methods.",
            },
            {
              name: "System Calls",
              description: "Using backticks or system().",
            },
            {
              name: "Regular Expressions",
              description: "Pattern matching with Regexp.",
            },
            { name: "CSV", description: "Parsing CSV data with CSV library." },
            {
              name: "JSON/YAML",
              description: "Handling structured data formats.",
            },
          ],
        },
        {
          name: "CLI Development",
          description: "Building command-line interfaces.",
          children: [
            {
              name: "Thor",
              description: "Powerful CLI framework by Yehuda Katz.",
              preferred: true,
            },
            {
              name: "Rake",
              description: "Task automation like Make.",
              preferred: true,
            },
            { name: "Commander", description: "Alternative CLI gem." },
            { name: "ARGV", description: "Raw command-line argument access." },
            { name: "OptionParser", description: "Standard library for args." },
          ],
        },
      ],
      dividerText: " Dive into web development with Rails.",
    },
    {
      name: "Web Development with Rails",
      description: "Build dynamic web applications using Ruby on Rails.",
      children: [
        {
          name: "Rails Fundamentals",
          description: "Core components of Rails.",
          children: [
            {
              name: "Active Record",
              description: "ORM for database queries.",
              preferred: true,
            },
            { name: "Routing", description: "RESTful URL mappings." },
            { name: "MVC", description: "Model-View-Controller architecture." },

            {
              name: "Rails CLI",
              description: "Commands like rails new, generate.",
            },
            { name: "Configuration", description: "Environment settings." },
          ],
        },
        {
          name: "Rails Enhancements",
          description: "Additional Rails features.",
          children: [
            {
              name: "Views",
              description: "ERB, HAML, or Slim templating.",
              preferred: true,
            }, // ERB is default/preferred in Rails
            { name: "Helpers", description: "Utility methods for views." },
            { name: "Action Cable", description: "WebSockets for real-time." },
            { name: "Action Mailer", description: "Sending emails." },
            { name: "Asset Pipeline", description: "Managing CSS, JS." },
          ],
        },
      ],
      dividerText: " Connect to databases.",
    },
    {
      name: "Databases and Persistence",
      description: "Integrate Ruby apps with data storage systems.",
      children: [
        {
          name: "Relational Databases",
          description: "Using SQL databases in Ruby.",
          children: [
            {
              name: "Active Record",
              description: "Rails ORM with associations.",
              preferred: true,
            },
            {
              name: "PostgreSQL",
              description: "Popular production database.",
              preferred: true,
            },
            { name: "Sequel", description: "Lightweight SQL toolkit gem." },
            { name: "Migrations", description: "Schema changes with Rails." },
            { name: "SQLite", description: "Lightweight database option." },
          ],
        },
        {
          name: "NoSQL Options",
          description: "Non-relational data storage.",
          children: [
            {
              name: "Redis",
              description: "Redis gem for caching, queues.",
              preferred: true,
            },
            {
              name: "Memcached",
              description: "Memory caching with Dalli gem.",
            },
            { name: "MongoDB", description: "Mongoid gem for document store." },
          ],
        },
      ],
      dividerText: " Build and consume APIs.",
    },
    {
      name: "APIs and Integrations",
      description: "Develop APIs and integrate with external services.",
      children: [
        {
          name: "API Creation",
          description: "Building APIs with Ruby.",
          children: [
            {
              name: "Sinatra",
              description: "Lightweight web framework for APIs.",
              preferred: true,
            },
            {
              name: "Authentication",
              description: "Devise, JWT options.",
              preferred: true,
            }, // Devise is widely recommended
            { name: "Rails API", description: "API-only mode in Rails." },

            { name: "Grape", description: "Microframework for RESTful APIs." },
            { name: "Versioning", description: "API version management." },
          ],
        },
        {
          name: "API Consumption",
          description: "Interacting with external APIs.",
          children: [
            {
              name: "REST Clients",
              description: "Faraday for RESTful calls.",
              preferred: true,
            },
            { name: "GraphQL", description: "GraphQL client gem." },
            { name: "OAuth", description: "Handling authenticated APIs." },
            { name: "Webhooks", description: "Receiving external events." },
            {
              name: "HTTP Requests",
              description: "Net::HTTP or HTTParty gem.",
            },
          ],
        },
      ],
      dividerText: " Add testing and deployment.",
    },
    {
      name: "Testing and Deployment",
      description: "Ensure quality and deploy Ruby applications.",
      children: [
        {
          name: "Testing",
          description: "Writing tests for Ruby code.",
          children: [
            {
              name: "RSpec",
              description: "BDD with rich matchers.",
              preferred: true,
            },

            {
              name: "Capybara",
              description: "Web app integration testing.",
              preferred: true,
            },
            {
              name: "FactoryBot",
              description: "Test data factories.",
              preferred: true,
            },
            { name: "VCR", description: "Recording HTTP interactions." },
            {
              name: "Minitest",
              description: "Lightweight built-in framework.",
            },
          ],
        },
        {
          name: "Deployment",
          description: "Getting Ruby apps live.",
          children: [
            {
              name: "Heroku",
              description: "PaaS with Ruby support.",
              preferred: true,
            },
            {
              name: "Capistrano",
              description: "Automated deployment scripts.",
              preferred: true,
            },
            {
              name: "Puma",
              description: "Web server for Ruby apps.",
              preferred: true,
            },
            { name: "Docker", description: "Containerizing Rails apps." },

            { name: "Passenger", description: "Alternative app server." },
          ],
        },
      ],
      dividerText: " Explore advanced Ruby techniques.",
    },
    {
      name: "Advanced Ruby",
      description: "Master Ruby’s deeper features and optimizations.",
      children: [
        {
          name: "Metaprogramming",
          description: "Dynamic coding techniques.",
          children: [
            {
              name: "Method Missing",
              description: "Handling undefined methods.",
            },
            {
              name: "Dynamic Methods",
              description: "Define_method at runtime.",
            },
            { name: "Monkey Patching", description: "Modifying core classes." },
            { name: "Eval", description: "Executing strings as code." },
            {
              name: "Module Prepending",
              description: "Altering inheritance chain.",
            },
          ],
        },
        {
          name: "Performance and Concurrency",
          description: "Optimizing and scaling Ruby.",
          children: [
            {
              name: "Sidekiq",
              description: "Background job processing.",
              preferred: true,
            },
            {
              name: "Threading",
              description: "Multi-threading with GIL awareness.",
            },
            { name: "Async", description: "EventMachine or Async gem." },
            {
              name: "Benchmarking",
              description: "Benchmark module for profiling.",
            },

            {
              name: "Memory Management",
              description: "Optimizing object usage.",
            },
          ],
        },
      ],
      dividerText: " Practice and grow with resources.",
    },
    {
      name: "Practice and Resources",
      description: "Build skills with projects and learning materials.",
      children: [
        {
          name: "Projects",
          description: "Hands-on Ruby applications.",
          children: [
            {
              name: "CLI Tools",
              description: "Utilities like file processors.",
            },
            { name: "Web Apps", description: "Blog or e-commerce with Rails." },
            { name: "Scripts", description: "Automation like log parsers." },
            {
              name: "API Services",
              description: "Microservices with Sinatra.",
            },
            {
              name: "Gem Creation",
              description: "Building reusable libraries.",
            },
          ],
        },
        {
          name: "Learning Resources",
          description: "Tools for continuous improvement.",
          children: [
            {
              name: "Rails Guides",
              description: "Official Rails documentation.",
              preferred: true,
            },

            {
              name: "Online Tutorials",
              description: "RubyGuides, Codecademy.",
            },
            { name: "Communities", description: "Ruby subreddit, RubyConf." },

            { name: "Rubygems", description: "Exploring gem ecosystem." },
          ],
        },
      ],
    },
    {
      name: "Continuous Growth",
      description: "Keep evolving with Ruby’s latest trends and practices.",
    },
  ],
};

export default rubyDeveloperRoadmap;
