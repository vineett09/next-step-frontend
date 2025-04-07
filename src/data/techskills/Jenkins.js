const jenkinsDeveloperRoadmap = {
  name: "Jenkins Developer Roadmap for Beginners to Advanced 2025",
  children: [
    {
      name: "Introduction to Jenkins",
      children: [
        {
          name: "Overview",
          children: [
            { name: "What is Jenkins" },
            { name: "Purpose and Benefits" },
            { name: "History and Evolution" },
          ],
        },
        {
          name: "Jenkins vs Other CI/CD Tools",
          children: [{ name: "Comparison with GitLab CI, Travis CI, etc." }],
        },
        {
          name: "Setting up Jenkins",
          children: [
            { name: "Installation Methods" },
            { name: "Initial Configuration" },
            { name: "Accessing the Jenkins Dashboard" },
          ],
        },
      ],
      dividerText: " Master Jenkins administration basics.",
    },
    {
      name: "Jenkins Administration",
      children: [
        {
          name: "Managing Plugins",
          children: [
            { name: "Installing Plugins" },
            { name: "Updating Plugins" },
            { name: "Popular Plugins" },
          ],
        },
        {
          name: "User Management",
          children: [
            { name: "Creating Users" },
            { name: "Assigning Roles" },
            { name: "Managing Permissions" },
          ],
        },
        {
          name: "Security Configuration",
          children: [
            { name: "Authentication Methods" },
            { name: "Authorization Strategies" },
            { name: "Securing Jenkins" },
          ],
        },
        {
          name: "Global Configuration",
          children: [
            { name: "Configuring Tools" },
            { name: "Setting up Email Servers" },
            { name: "Other Global Settings" },
          ],
        },
        {
          name: "Organizing Jobs",
          children: [{ name: "Using Folders" }, { name: "Creating Views" }],
        },
      ],
      dividerText: " Explore basic Jenkins concepts.",
    },
    {
      name: "Basic Concepts",
      children: [
        {
          name: "Jobs and Builds",
          children: [
            { name: "Types of Jobs" },
            { name: "Build Process" },
            { name: "Build History" },
          ],
        },
        {
          name: "Nodes and Executors",
          children: [
            { name: "Master Node" },
            { name: "Agent Nodes" },
            { name: "Configuring Executors" },
          ],
        },
      ],
      dividerText: " Learn to create and configure jobs.",
    },
    {
      name: "Creating and Configuring Jobs",
      children: [
        {
          name: "Freestyle Projects",
          children: [
            { name: "Creating a Freestyle Job" },
            { name: "Configuring Source Code Management" },
            { name: "Build Steps" },
            { name: "Post-Build Actions" },
          ],
        },
        {
          name: "Pipeline Projects",
          children: [
            { name: "Introduction to Jenkins Pipeline" },
            {
              name: "Jenkinsfile",
              children: [
                { name: "Structure and Syntax" },
                { name: "Declarative Pipeline" },
                { name: "Scripted Pipeline" },
              ],
            },
            {
              name: "Writing Pipelines",
              children: [
                { name: "Stages and Steps" },
                { name: "Parallel Execution" },
                { name: "Error Handling" },
              ],
            },
          ],
        },
        {
          name: "Parameterized Jobs",
          children: [
            { name: "Adding Parameters" },
            { name: "Using Parameters in Builds" },
          ],
        },
        {
          name: "Build Triggers",
          children: [
            { name: "Polling SCM" },
            { name: "Webhooks" },
            { name: "Scheduled Builds" },
          ],
        },
      ],
      dividerText: " Integrate with source code management.",
    },
    {
      name: "Source Code Management",
      children: [
        {
          name: "Integrating with Git",
          children: [
            { name: "Configuring Git in Jenkins" },
            { name: "Cloning Repositories" },
            { name: "Branching and Merging" },
          ],
        },
        {
          name: "Multi-branch Pipelines",
          children: [
            { name: "Setting up Multi-branch Pipelines" },
            { name: "Automatic Job Creation for Branches" },
          ],
        },
        {
          name: "Other SCM Tools",
          children: [{ name: "SVN" }, { name: "Mercurial" }],
        },
      ],
      dividerText: " Implement testing and quality assurance.",
    },
    {
      name: "Testing and Quality Assurance",
      children: [
        {
          name: "Unit Testing",
          children: [
            { name: "Running Unit Tests" },
            { name: "Publishing Test Results" },
          ],
        },
        {
          name: "Integration Testing",
          children: [{ name: "Setting up Integration Tests" }],
        },
        {
          name: "Acceptance Testing",
          children: [{ name: "Automating Acceptance Tests" }],
        },
        {
          name: "Code Coverage",
          children: [
            { name: "Integrating Code Coverage Tools" },
            { name: "Analyzing Coverage Reports" },
          ],
        },
      ],
      dividerText: " Set up notifications and reporting.",
    },
    {
      name: "Notifications and Reporting",
      children: [
        {
          name: "Email Notifications",
          children: [
            { name: "Configuring Email Settings" },
            { name: "Setting up Notifications for Jobs" },
          ],
        },
        {
          name: "Instant Messaging Integrations",
          children: [{ name: "Slack" }, { name: "Microsoft Teams" }],
        },
        {
          name: "Custom Notifications",
          children: [{ name: "Using Scripts for Notifications" }],
        },
      ],
      dividerText: " Manage artifacts and deployment.",
    },
    {
      name: "Artifacts and Deployment",
      children: [
        {
          name: "Archiving Artifacts",
          children: [
            { name: "Configuring Artifact Archiving" },
            { name: "Accessing Archived Artifacts" },
          ],
        },
        {
          name: "Fingerprints",
          children: [
            { name: "What are Fingerprints" },
            { name: "Configuring Fingerprints" },
          ],
        },
        {
          name: "Deployment",
          children: [
            { name: "Deploying to Servers" },
            { name: "Integrating with Deployment Tools" },
          ],
        },
      ],
      dividerText: " Explore advanced Jenkins features.",
    },
    {
      name: "Advanced Topics",
      children: [
        {
          name: "Distributed Builds",
          children: [
            { name: "Setting up Agent Nodes" },
            { name: "Labeling Nodes" },
            { name: "Assigning Jobs to Specific Nodes" },
          ],
        },
        {
          name: "Jenkins API and CLI",
          children: [
            { name: "Using the REST API" },
            { name: "Jenkins CLI Commands" },
          ],
        },
        {
          name: "Monitoring and Logging",
          children: [
            { name: "Jenkins Logs" },
            { name: "Monitoring Build Performance" },
          ],
        },
        {
          name: "Scaling Jenkins",
          children: [
            { name: "Handling Large Numbers of Jobs" },
            { name: "High Availability Setups" },
          ],
        },
      ],
      dividerText: " Adopt best practices for Jenkins.",
    },
    {
      name: "Best Practices",
      children: [
        {
          name: "Pipeline as Code",
          children: [
            { name: "Storing Pipelines in SCM" },
            { name: "Version Controlling Jenkinsfiles" },
          ],
        },
        {
          name: "Configuration Management",
          children: [
            { name: "Managing Jenkins Configurations" },
            { name: "Backup and Restore" },
          ],
        },
        {
          name: "Performance Optimization",
          children: [
            { name: "Optimizing Build Times" },
            { name: "Resource Management" },
          ],
        },
        {
          name: "Security Best Practices",
          children: [
            { name: "Securing Jenkins Instances" },
            { name: "Managing Credentials" },
          ],
        },
      ],
      dividerText: " Leverage resources and community support.",
    },
    {
      name: "Resources and Community",
      children: [
        {
          name: "Official Documentation",
          children: [
            { name: "Jenkins Handbook" },
            { name: "Plugin Documentation" },
          ],
        },
        {
          name: "Online Courses",
          children: [{ name: "Udemy" }, { name: "Coursera" }],
        },
        {
          name: "Community and Forums",
          children: [
            { name: "Jenkins Mailing Lists" },
            { name: "Stack Overflow" },
            { name: "Jenkins Subreddit" },
          ],
        },
        {
          name: "Books and Blogs",
          children: [
            { name: "Recommended Books" },
            { name: "Influential Blogs" },
          ],
        },
      ],
    },
    {
      name: "Continuous Learning",
    },
  ],
};

export default jenkinsDeveloperRoadmap;
