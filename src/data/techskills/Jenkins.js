const jenkinsDeveloperRoadmap = {
  name: "Jenkins Developer Roadmap for Beginners to Advanced 2025",
  description:
    "This roadmap guides you from zero Jenkins knowledge to mastering advanced CI/CD concepts by 2025. It progresses through foundational setup, job creation, pipeline development, integrations, and advanced scaling techniques. With practical projects, recommended resources, and community engagement, you’ll build skills for automating software delivery in DevOps workflows.",
  children: [
    {
      name: "Introduction to Jenkins",
      description:
        "Begin your Jenkins journey by understanding its purpose and setting up the environment.",
      children: [
        {
          name: "Overview",
          description:
            "Learn what Jenkins is, its benefits, and its evolution as a CI/CD tool.",
          children: [
            {
              name: "What is Jenkins",
              description:
                "An open-source automation server for continuous integration and delivery.",
            },
            {
              name: "Purpose and Benefits",
              description:
                "Automates builds, tests, and deployments for faster delivery.",
            },
            {
              name: "History and Evolution",
              description:
                "Started as Hudson in 2004 by Kohsuke Kawaguchi, forked to Jenkins in 2011.",
            },
          ],
        },
        {
          name: "Jenkins vs Other CI/CD Tools",
          description:
            "Understand how Jenkins compares to alternatives like GitLab CI.",
          children: [
            {
              name: "Comparison with GitLab CI, Travis CI, etc.",
              description:
                "Jenkins offers flexibility with plugins vs GitLab’s built-in CI.",
            },
          ],
        },
        {
          name: "Setting up Jenkins",
          description:
            "Install and configure Jenkins to start automating workflows.",
          children: [
            {
              name: "Installation Methods",
              description: "Use Docker, native installer, or WAR file.",
            },
            {
              name: "Initial Configuration",
              description: "Unlock Jenkins, install suggested plugins.",
            },
            {
              name: "Accessing the Jenkins Dashboard",
              description: "Navigate to localhost:8080 post-installation.",
            },
          ],
        },
      ],
      dividerText: " Master Jenkins administration basics.",
    },
    {
      name: "Jenkins Administration",
      description:
        "Learn to manage plugins, users, and security for a robust Jenkins setup.",
      children: [
        {
          name: "Managing Plugins",
          description:
            "Extend Jenkins functionality with plugins for various tools.",
          children: [
            {
              name: "Installing Plugins",
              description: "Use Manage Plugins section in the dashboard.",
            },
            {
              name: "Updating Plugins",
              description: "Keep plugins current via update center.",
            },
            {
              name: "Popular Plugins",
              description: "Git, Pipeline, Blue Ocean, etc.",
            },
          ],
        },
        {
          name: "User Management",
          description: "Control access by managing users and roles.",
          children: [
            {
              name: "Creating Users",
              description: "Add users via Manage Users page.",
            },
            {
              name: "Assigning Roles",
              description: "Use Role-Based Authorization plugin.",
            },
            {
              name: "Managing Permissions",
              description: "Set read/write access per project.",
            },
          ],
        },
        {
          name: "Security Configuration",
          description: "Secure Jenkins against unauthorized access.",
          children: [
            {
              name: "Authentication Methods",
              description: "LDAP, GitHub OAuth, or local users.",
            },
            {
              name: "Authorization Strategies",
              description: "Matrix-based or project-based security.",
            },
            {
              name: "Securing Jenkins",
              description: "Enable CSRF protection, secure ports.",
            },
          ],
        },
        {
          name: "Global Configuration",
          description: "Set up tools and servers for all jobs.",
          children: [
            {
              name: "Configuring Tools",
              description: "Install JDK, Maven, NodeJS via global settings.",
            },
            {
              name: "Setting up Email Servers",
              description: "Configure SMTP for notifications.",
            },
            {
              name: "Other Global Settings",
              description: "Adjust system properties, environment variables.",
            },
          ],
        },
        {
          name: "Organizing Jobs",
          description: "Keep projects manageable with folders and views.",
          children: [
            {
              name: "Using Folders",
              description: "Group jobs with CloudBees Folders Plugin.",
            },
            {
              name: "Creating Views",
              description: "Filter jobs by status or type.",
            },
          ],
        },
      ],
      dividerText: " Explore basic Jenkins concepts.",
    },
    {
      name: "Basic Concepts",
      description:
        "Understand the core components like jobs and nodes in Jenkins.",
      children: [
        {
          name: "Jobs and Builds",
          description: "Learn how Jenkins executes tasks via jobs.",
          children: [
            {
              name: "Types of Jobs",
              description: "Freestyle, Pipeline, Multi-configuration.",
            },
            {
              name: "Build Process",
              description: "Trigger, execute, and record build outcomes.",
            },
            {
              name: "Build History",
              description: "View past builds, logs, and artifacts.",
            },
          ],
        },
        {
          name: "Nodes and Executors",
          description: "Distribute workloads across machines.",
          children: [
            {
              name: "Master Node",
              description: "Main Jenkins server controlling jobs.",
            },
            {
              name: "Agent Nodes",
              description: "Remote machines for running builds.",
            },
            {
              name: "Configuring Executors",
              description: "Set number of parallel builds per node.",
            },
          ],
        },
      ],
      dividerText: " Learn to create and configure jobs.",
    },
    {
      name: "Creating and Configuring Jobs",
      description:
        "Master job creation with freestyle and pipeline approaches.",
      children: [
        {
          name: "Freestyle Projects",
          description: "Build simple jobs with a graphical interface.",
          children: [
            {
              name: "Creating a Freestyle Job",
              description: "New Item > Freestyle Project setup.",
            },
            {
              name: "Configuring Source Code Management",
              description: "Link to Git or SVN repositories.",
            },
            {
              name: "Build Steps",
              description: "Add shell, batch, or plugin steps.",
            },
            {
              name: "Post-Build Actions",
              description: "Archive artifacts, trigger other jobs.",
            },
          ],
        },
        {
          name: "Pipeline Projects",
          description: "Use code to define complex workflows.",
          children: [
            {
              name: "Introduction to Jenkins Pipeline",
              description: "Scripted and Declarative syntax overview.",
            },
            {
              name: "Jenkinsfile",
              description: "Store pipeline code in SCM.",
              children: [
                {
                  name: "Structure and Syntax",
                  description: "Pipeline { stages { stage('Build') } }.",
                },
                {
                  name: "Declarative Pipeline",
                  description: "Structured, user-friendly syntax.",
                },
                {
                  name: "Scripted Pipeline",
                  description: "Flexible, Groovy-based syntax.",
                },
              ],
            },
            {
              name: "Writing Pipelines",
              description: "Define multi-stage workflows.",
              children: [
                {
                  name: "Stages and Steps",
                  description: "Break builds into logical phases.",
                },
                {
                  name: "Parallel Execution",
                  description: "Run stages concurrently.",
                },
                {
                  name: "Error Handling",
                  description: "Use try-catch in scripted pipelines.",
                },
              ],
            },
          ],
        },
        {
          name: "Parameterized Jobs",
          description: "Make jobs reusable with variables.",
          children: [
            {
              name: "Adding Parameters",
              description: "String, choice, or file parameters.",
            },
            {
              name: "Using Parameters in Builds",
              description: "Reference via ${PARAM_NAME}.",
            },
          ],
        },
        {
          name: "Build Triggers",
          description: "Automate job execution.",
          children: [
            {
              name: "Polling SCM",
              description: "Check for code changes periodically.",
            },
            {
              name: "Webhooks",
              description: "Trigger via GitHub/GitLab events.",
            },
            {
              name: "Scheduled Builds",
              description: "Use cron syntax for timing.",
            },
          ],
        },
      ],
      dividerText: " Integrate with source code management.",
    },
    {
      name: "Source Code Management",
      description: "Connect Jenkins to version control systems.",
      children: [
        {
          name: "Integrating with Git",
          description: "Link Jenkins to Git repositories.",
          children: [
            {
              name: "Configuring Git in Jenkins",
              description: "Install Git plugin, set credentials.",
            },
            {
              name: "Cloning Repositories",
              description: "Pull code for builds.",
            },
            {
              name: "Branching and Merging",
              description: "Handle multiple branches.",
            },
          ],
        },
        {
          name: "Multi-branch Pipelines",
          description: "Automate jobs for all branches.",
          children: [
            {
              name: "Setting up Multi-branch Pipelines",
              description: "Configure branch sources.",
            },
            {
              name: "Automatic Job Creation for Branches",
              description: "Detect new branches via SCM.",
            },
          ],
        },
        {
          name: "Other SCM Tools",
          description: "Support for SVN, Mercurial, etc.",
          children: [
            {
              name: "SVN",
              description: "Use Subversion plugin.",
            },
            {
              name: "Mercurial",
              description: "Integrate with Hg repositories.",
            },
          ],
        },
      ],
      dividerText: " Implement testing and quality assurance.",
    },
    {
      name: "Testing and Quality Assurance",
      description: "Ensure code quality with automated testing.",
      children: [
        {
          name: "Unit Testing",
          description: "Run and report on unit tests.",
          children: [
            {
              name: "Running Unit Tests",
              description: "Execute JUnit, pytest, etc.",
            },
            {
              name: "Publishing Test Results",
              description: "Use plugins like JUnit Plugin.",
            },
          ],
        },
        {
          name: "Integration Testing",
          description: "Test combined components.",
          children: [
            {
              name: "Setting up Integration Tests",
              description: "Configure in pipeline stages.",
            },
          ],
        },
        {
          name: "Acceptance Testing",
          description: "Validate end-to-end functionality.",
          children: [
            {
              name: "Automating Acceptance Tests",
              description: "Use tools like Selenium.",
            },
          ],
        },
        {
          name: "Code Coverage",
          description: "Measure test effectiveness.",
          children: [
            {
              name: "Integrating Code Coverage Tools",
              description: "Use JaCoCo, Cobertura.",
            },
            {
              name: "Analyzing Coverage Reports",
              description: "Publish reports in Jenkins.",
            },
          ],
        },
      ],
      dividerText: " Set up notifications and reporting.",
    },
    {
      name: "Notifications and Reporting",
      description: "Keep teams informed with build status updates.",
      children: [
        {
          name: "Email Notifications",
          description: "Send build results via email.",
          children: [
            {
              name: "Configuring Email Settings",
              description: "Set SMTP in global config.",
            },
            {
              name: "Setting up Notifications for Jobs",
              description: "Use Email Extension Plugin.",
            },
          ],
        },
        {
          name: "Instant Messaging Integrations",
          description: "Notify via chat platforms.",
          children: [
            {
              name: "Slack",
              description: "Use Slack Notification Plugin.",
            },
            {
              name: "Microsoft Teams",
              description: "Integrate with Teams connector.",
            },
          ],
        },
        {
          name: "Custom Notifications",
          description: "Script custom alerts.",
          children: [
            {
              name: "Using Scripts for Notifications",
              description: "Write Groovy or shell scripts.",
            },
          ],
        },
      ],
      dividerText: " Manage artifacts and deployment.",
    },
    {
      name: "Artifacts and Deployment",
      description: "Handle build outputs and deploy applications.",
      children: [
        {
          name: "Archiving Artifacts",
          description: "Store build outputs for later use.",
          children: [
            {
              name: "Configuring Artifact Archiving",
              description: "Set in job configuration.",
            },
            {
              name: "Accessing Archived Artifacts",
              description: "Download via build history.",
            },
          ],
        },
        {
          name: "Fingerprints",
          description: "Track artifact usage across builds.",
          children: [
            {
              name: "What are Fingerprints",
              description: "Unique identifiers for artifacts.",
            },
            {
              name: "Configuring Fingerprints",
              description: "Enable in post-build actions.",
            },
          ],
        },
        {
          name: "Deployment",
          description: "Push artifacts to servers or platforms.",
          children: [
            {
              name: "Deploying to Servers",
              description: "Use SSH or Deploy Plugin.",
            },
            {
              name: "Integrating with Deployment Tools",
              description: "Ansible, Docker, Kubernetes.",
            },
          ],
        },
      ],
      dividerText: " Explore advanced Jenkins features.",
    },
    {
      name: "Advanced Topics",
      description: "Dive into distributed builds, APIs, and scaling.",
      children: [
        {
          name: "Distributed Builds",
          description: "Scale Jenkins with multiple nodes.",
          children: [
            {
              name: "Setting up Agent Nodes",
              description: "Connect via SSH or JNLP.",
            },
            {
              name: "Labeling Nodes",
              description: "Assign labels for job allocation.",
            },
            {
              name: "Assigning Jobs to Specific Nodes",
              description: "Use node restrictions.",
            },
          ],
        },
        {
          name: "Jenkins API and CLI",
          description: "Automate Jenkins programmatically.",
          children: [
            {
              name: "Using the REST API",
              description: "Trigger builds, fetch status.",
            },
            {
              name: "Jenkins CLI Commands",
              description: "Run jobs, manage plugins via CLI.",
            },
          ],
        },
        {
          name: "Monitoring and Logging",
          description: "Track Jenkins performance and issues.",
          children: [
            {
              name: "Jenkins Logs",
              description: "Access via System Log page.",
            },
            {
              name: "Monitoring Build Performance",
              description: "Use Performance Plugin.",
            },
          ],
        },
        {
          name: "Scaling Jenkins",
          description: "Handle large-scale CI/CD needs.",
          children: [
            {
              name: "Handling Large Numbers of Jobs",
              description: "Optimize with folders, views.",
            },
            {
              name: "High Availability Setups",
              description: "Use clustering or backups.",
            },
          ],
        },
      ],
      dividerText: " Adopt best practices for Jenkins.",
    },
    {
      name: "Best Practices",
      description: "Optimize Jenkins for efficiency and security.",
      children: [
        {
          name: "Pipeline as Code",
          description: "Manage pipelines systematically.",
          children: [
            {
              name: "Storing Pipelines in SCM",
              description: "Keep Jenkinsfiles in Git.",
            },
            {
              name: "Version Controlling Jenkinsfiles",
              description: "Track changes with commits.",
            },
          ],
        },
        {
          name: "Configuration Management",
          description: "Maintain a consistent setup.",
          children: [
            {
              name: "Managing Jenkins Configurations",
              description: "Use Job DSL or Configuration as Code.",
            },
            {
              name: "Backup and Restore",
              description: "Save jobs, configs periodically.",
            },
          ],
        },
        {
          name: "Performance Optimization",
          description: "Improve build speed and resource use.",
          children: [
            {
              name: "Optimizing Build Times",
              description: "Parallelize tasks, cache dependencies.",
            },
            {
              name: "Resource Management",
              description: "Limit executors, manage disk space.",
            },
          ],
        },
        {
          name: "Security Best Practices",
          description: "Protect Jenkins from vulnerabilities.",
          children: [
            {
              name: "Securing Jenkins Instances",
              description: "Use HTTPS, restrict access.",
            },
            {
              name: "Managing Credentials",
              description: "Store secrets with Credentials Plugin.",
            },
          ],
        },
      ],
      dividerText: " Leverage resources and community support.",
    },
    {
      name: "Resources and Community",
      description: "Enhance skills with documentation, courses, and forums.",
      children: [
        {
          name: "Official Documentation",
          description: "Use Jenkins’ official guides.",
          children: [
            {
              name: "Jenkins Handbook",
              description: "Comprehensive user guide online.",
            },
            {
              name: "Plugin Documentation",
              description: "Details on plugin usage.",
            },
          ],
        },
        {
          name: "Online Courses",
          description: "Structured learning from platforms.",
          children: [
            {
              name: "Udemy",
              description: "Jenkins courses for all levels.",
            },
            {
              name: "Coursera",
              description: "DevOps with Jenkins tracks.",
            },
          ],
        },
        {
          name: "Community and Forums",
          description: "Engage with Jenkins users.",
          children: [
            {
              name: "Jenkins Mailing Lists",
              description: "Join dev or users list.",
            },
            {
              name: "Stack Overflow",
              description: "Ask/answer Jenkins questions.",
            },
            {
              name: "Jenkins Subreddit",
              description: "Discuss on r/jenkinsci.",
            },
          ],
        },
        {
          name: "Books and Blogs",
          description: "Deepen knowledge with publications.",
          children: [
            {
              name: "Recommended Books",
              description: "'Learning Continuous Integration with Jenkins'.",
            },
            {
              name: "Influential Blogs",
              description: "Jenkins blog, CloudBees articles.",
            },
          ],
        },
      ],
    },
    {
      name: "Continuous Learning",
      description:
        "Stay updated with Jenkins updates, plugins, and CI/CD trends.",
    },
  ],
};

export default jenkinsDeveloperRoadmap;
