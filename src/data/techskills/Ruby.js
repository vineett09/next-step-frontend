const rubyDeveloperRoadmap = {
  name: "Ruby Developer Roadmap for Beginners to Advanced 2025",
  children: [
    {
      name: "Starting with Ruby",
      children: [
        {
          name: "Ruby Basics",
          children: [
            { name: "Why Ruby" },
            { name: "Dynamic Typing" },
            { name: "Everything is an Object" },
            { name: "History" },
            { name: "IRB" },
          ],
        },
        {
          name: "Setup",
          children: [
            { name: "Installation" },
            { name: "Editor" },
            { name: "First Script" },
            { name: "Gem System" },
            { name: "Ruby Versions" },
          ],
        },
      ],
      dividerText: " Master Ruby’s syntax and flow.",
    },
    {
      name: "Syntax and Control Flow",
      children: [
        {
          name: "Variables and Data",
          children: [
            { name: "Variables" },
            { name: "Strings" },
            { name: "Symbols" },
            { name: "Numbers" },
            { name: "Nil" },
          ],
        },
        {
          name: "Control Structures",
          children: [
            { name: "If/Unless" },
            { name: "Case" },
            { name: "Loops" },
            { name: "Ternary Operator" },
            { name: "Modifiers" },
          ],
        },
      ],
      dividerText: " Explore collections and iteration.",
    },
    {
      name: "Collections and Iteration",
      children: [
        {
          name: "Arrays and Hashes",
          children: [
            { name: "Arrays" },
            { name: "Hashes" },
            { name: "Operations" },
            { name: "Set" },
            { name: "Nested Collections" },
          ],
        },
        {
          name: "Blocks and Enumerables",
          children: [
            { name: "Blocks" },
            { name: "Each" },
            { name: "Map/Select" },
            { name: "Inject/Reduce" },
            { name: "Lazy Enumeration" },
          ],
        },
      ],
      dividerText: " Build with methods and objects.",
    },
    {
      name: "Methods and Object-Oriented Design",
      children: [
        {
          name: "Methods",
          children: [
            { name: "Definition" },
            { name: "Arguments" },
            { name: "Return" },
            { name: "Method Visibility" },
            { name: "Procs and Lambdas" },
          ],
        },
        {
          name: "Classes and Objects",
          children: [
            { name: "Classes" },
            { name: "Instance Variables" },
            { name: "Inheritance" },
            { name: "Attr Accessors" },
            { name: "Class Methods" },
          ],
        },
      ],
      dividerText: " Enhance with modules and exceptions.",
    },
    {
      name: "Modules and Exception Handling",
      children: [
        {
          name: "Modules",
          children: [
            { name: "Mixins" },
            { name: "Namespaces" },
            { name: "Inclusion" },
            { name: "Module Methods" },
            { name: "Constants" },
          ],
        },
        {
          name: "Exceptions",
          children: [
            { name: "Rescue" },
            { name: "Raise" },
            { name: "Custom Exceptions" },
            { name: "Ensure" },
            { name: "Retry" },
          ],
        },
      ],
      dividerText: " Automate with scripting and CLI tools.",
    },
    {
      name: "Scripting and CLI Tools",
      children: [
        {
          name: "Scripting Basics",
          children: [
            { name: "File Handling" },
            { name: "System Calls" },
            { name: "Regular Expressions" },
            { name: "CSV" },
            { name: "JSON/YAML" },
          ],
        },
        {
          name: "CLI Development",
          children: [
            { name: "Thor" },
            { name: "Rake" },
            { name: "Commander" },
            { name: "ARGV" },
            { name: "OptionParser" },
          ],
        },
      ],
      dividerText: " Dive into web development with Rails.",
    },
    {
      name: "Web Development with Rails",
      children: [
        {
          name: "Rails Fundamentals",
          children: [
            { name: "Active Record" },
            { name: "Routing" },
            { name: "MVC" },
            { name: "Rails CLI" },
            { name: "Configuration" },
          ],
        },
        {
          name: "Rails Enhancements",
          children: [
            { name: "Views" },
            { name: "Helpers" },
            { name: "Action Cable" },
            { name: "Action Mailer" },
            { name: "Asset Pipeline" },
          ],
        },
      ],
      dividerText: " Connect to databases.",
    },
    {
      name: "Databases and Persistence",
      children: [
        {
          name: "Relational Databases",
          children: [
            { name: "Active Record" },
            { name: "PostgreSQL" },
            { name: "Sequel" },
            { name: "Migrations" },
            { name: "SQLite" },
          ],
        },
        {
          name: "NoSQL Options",
          children: [
            { name: "Redis" },
            { name: "Memcached" },
            { name: "MongoDB" },
          ],
        },
      ],
      dividerText: " Build and consume APIs.",
    },
    {
      name: "APIs and Integrations",
      children: [
        {
          name: "API Creation",
          children: [
            { name: "Sinatra" },
            { name: "Authentication" },
            { name: "Rails API" },
            { name: "Grape" },
            { name: "Versioning" },
          ],
        },
        {
          name: "API Consumption",
          children: [
            { name: "REST Clients" },
            { name: "GraphQL" },
            { name: "OAuth" },
            { name: "Webhooks" },
            { name: "HTTP Requests" },
          ],
        },
      ],
      dividerText: " Add testing and deployment.",
    },
    {
      name: "Testing and Deployment",
      children: [
        {
          name: "Testing",
          children: [
            { name: "RSpec" },
            { name: "Capybara" },
            { name: "FactoryBot" },
            { name: "VCR" },
            { name: "Minitest" },
          ],
        },
        {
          name: "Deployment",
          children: [
            { name: "Heroku" },
            { name: "Capistrano" },
            { name: "Puma" },
            { name: "Docker" },
            { name: "Passenger" },
          ],
        },
      ],
      dividerText: " Explore advanced Ruby techniques.",
    },
    {
      name: "Advanced Ruby",
      children: [
        {
          name: "Metaprogramming",
          children: [
            { name: "Method Missing" },
            { name: "Dynamic Methods" },
            { name: "Monkey Patching" },
            { name: "Eval" },
            { name: "Module Prepending" },
          ],
        },
        {
          name: "Performance and Concurrency",
          children: [
            { name: "Sidekiq" },
            { name: "Threading" },
            { name: "Async" },
            { name: "Benchmarking" },
            { name: "Memory Management" },
          ],
        },
      ],
      dividerText: " Practice and grow with resources.",
    },
    {
      name: "Practice and Resources",
      children: [
        {
          name: "Projects",
          children: [
            { name: "CLI Tools" },
            { name: "Web Apps" },
            { name: "Scripts" },
            { name: "API Services" },
            { name: "Gem Creation" },
          ],
        },
        {
          name: "Learning Resources",
          children: [
            { name: "Rails Guides" },
            { name: "Online Tutorials" },
            { name: "Communities" },
            { name: "Rubygems" },
          ],
        },
      ],
    },
    {
      name: "Continuous Growth",
    },
  ],
};

export default rubyDeveloperRoadmap;
