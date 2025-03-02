const terraformDeveloperRoadmap = {
  name: "Terraform Developer Roadmap for Beginners to Advanced 2025",
  description:
    "This roadmap takes you from zero Terraform knowledge to advanced mastery by 2025, leveraging its power for infrastructure as code (IaC). It progresses through HCL, providers, resources, state, modules, provisioners, scaling, security, and HCP, with testing and CI/CD at the end. With projects and resources, you’ll automate scalable, secure cloud infrastructure.",
  children: [
    {
      name: "Terraform Foundations",
      description:
        "Start your Terraform journey by understanding its role as an IaC tool for provisioning infrastructure. This section covers Terraform’s purpose, benefits like declarative configuration, and initial setup with CLI and IDE. You’ll deploy a simple resource, laying the groundwork for mastering infrastructure automation.",
      children: [
        {
          name: "Terraform Basics",
          description:
            "Learn Terraform’s core as HashiCorp’s IaC tool, launched in 2014. This section explores its purpose for defining infrastructure declaratively, advantages like multi-cloud support, and why it’s foundational for automation, setting you up for deeper learning.",
          children: [
            {
              name: "What is Terraform",
              description:
                "Terraform is an open-source IaC tool by HashiCorp for provisioning and managing infrastructure across clouds. It uses declarative HCL or JSON to define resources, enabling consistent, repeatable deployments with a unified workflow.",
            },
            {
              name: "What is IaC?",
              description:
                "IaC is the practice of defining infrastructure as code, enabling automated provisioning and management. Terraform’s declarative syntax and provider ecosystem streamline infrastructure setup and maintenance.",
            },
            {
              name: "Advantages",
              description:
                "Terraform offers declarative syntax, multi-cloud support, and state management. Its provider ecosystem, plan/apply workflow, and community modules enable efficient, reproducible infrastructure with minimal manual effort.",
            },
            {
              name: "Terraform vs Others",
              description:
                "Unlike CloudFormation’s AWS focus, Terraform spans multiple providers. It contrasts Pulumi’s imperative code with HCL’s declarative simplicity, balancing flexibility and ease for IaC.",
            },
          ],
        },
        {
          name: "Setup",
          description:
            "Set up your Terraform environment with Terraform CLI and an editor like VS Code. This section guides you through installation, provider authentication, and deploying your first resource, ensuring a smooth entry into IaC workflows.",
          children: [
            {
              name: "Terraform CLI",
              description:
                "Install Terraform CLI from terraform.io for running commands. Preferred for its core functionality, it’s the essential tool for managing Terraform configurations.",
              preferred: true,
            },
            {
              name: "Editor Setup",
              description:
                "Use VS Code with Terraform extension for syntax support and validation. Preferred for its robust tooling, though IntelliJ is a solid alternative.",
              preferred: true,
            },
            {
              name: "First Resource",
              description:
                "Write a .tf file, like resource 'aws_instance' {}, and run terraform init/apply. Deploys a simple resource to start.",
            },
            {
              name: "Provider Authentication",
              description:
                "Set credentials, like AWS_ACCESS_KEY_ID, for providers. Ensures Terraform can manage cloud resources securely.",
            },
            {
              name: "CLI Commands",
              description:
                "Learn terraform init, plan, apply. These initialize, preview, and deploy, forming Terraform’s basic workflow.",
            },
          ],
        },
      ],
      dividerText: " Learn HCL fundamentals.",
    },
    {
      name: "HCL Fundamentals",
      description:
        "Master HashiCorp Configuration Language (HCL), Terraform’s syntax for defining infrastructure. This section covers HCL basics, variables, expressions, and functions, providing the groundwork for writing clear, reusable Terraform configurations before diving into providers and resources.",
      children: [
        {
          name: "HCL Basics",
          description:
            "Understand HCL as Terraform’s human-readable configuration language. This section introduces its syntax, blocks, and attributes, enabling you to define resources and providers declaratively with minimal complexity.",
          children: [
            {
              name: "Syntax Overview",
              description:
                "HCL uses blocks like resource {} and key = value pairs. It’s intuitive, blending JSON-like structure with readability.",
            },
            {
              name: "Blocks",
              description:
                "Define with resource 'type' 'name' {}. Blocks structure providers, resources, and data in configs.",
            },
            {
              name: "Attributes",
              description:
                "Set attributes, like region = 'us-east-1', within blocks. These configure specific resource properties.",
            },
          ],
        },
        {
          name: "HCL Features",
          description:
            "Leverage HCL’s variables, expressions, and functions for dynamic configs. This section covers parameterizing and enhancing Terraform files, preparing you for flexible infrastructure definitions.",
          children: [
            {
              name: "Variables",
              description:
                "Use variable 'name' {default = 'value'} for inputs. Enables parameterized, reusable configurations.",
            },
            {
              name: "Expressions",
              description:
                "Write expressions, like count = var.instance_count. Adds logic and flexibility to HCL.",
            },
            {
              name: "Functions",
              description:
                "Apply functions, like join(',', list), for data manipulation. Enhances HCL’s configurability.",
            },
            {
              name: "Comments",
              description:
                "Add # or // comments, like # Define VPC. Improves config readability and documentation.",
            },
          ],
        },
      ],
      dividerText: " Configure Terraform providers.",
    },
    {
      name: "Providers",
      description:
        "Configure Terraform providers, the plugins connecting to cloud platforms and services. This section covers provider setup, versioning, and using key providers like AWS, Azure, and GCP, enabling infrastructure management across ecosystems.",
      children: [
        {
          name: "Provider Setup",
          description:
            "Learn to configure providers as Terraform’s API interfaces. This section explores initializing providers, setting versions, and basic usage, forming the foundation for resource provisioning.",
          children: [
            {
              name: "Provider Configuration",
              description:
                "Define with provider 'aws' {region = 'us-east-1'}. Sets up the provider for resource management.",
            },
            {
              name: "Provider Initialization",
              description:
                "Run terraform init to download providers. Prepares Terraform for cloud interactions.",
            },
            {
              name: "Provider Versioning",
              description:
                "Pin versions, like version = '~> 4.0', in required_providers. Ensures compatibility and stability.",
            },
          ],
        },
        {
          name: "Common Providers",
          description:
            "Use popular providers to manage resources and data. This section covers AWS (preferred), Azure, GCP, and data sources, equipping you for multi-cloud deployments.",
          children: [
            {
              name: "AWS Provider",
              description:
                "Use provider 'aws' for EC2, S3, etc. Preferred for its extensive AWS support and adoption.",
              preferred: true,
            },
            {
              name: "Azure Provider",
              description:
                "Use provider 'azurerm' for Azure VMs, storage. Strong for Microsoft cloud integrations.",
            },
            {
              name: "GCP Provider",
              description:
                "Use provider 'google' for GCE, GCS. Ideal for Google Cloud infrastructure management.",
            },
            {
              name: "Data Sources",
              description:
                "Fetch with data 'aws_ami' 'latest' {}. Retrieves existing resource info dynamically.",
            },
          ],
        },
      ],
      dividerText: " Define resources and variables.",
    },
    {
      name: "Resources and Variables",
      description:
        "Define and manage infrastructure with Terraform resources and variables. This section covers creating resources, using input/output variables, and local variables, providing tools for flexible, parameterized configurations.",
      children: [
        {
          name: "Resources",
          description:
            "Define resources, Terraform’s core building blocks. This section explores resource syntax, dependencies, and lifecycle management, enabling you to provision infrastructure effectively.",
          children: [
            {
              name: "Resource Syntax",
              description:
                "Define with resource 'type' 'name' {attributes}. Creates infrastructure like servers or databases.",
            },
            {
              name: "Dependencies",
              description:
                "Link with depends_on or implicit refs, like aws_instance.id. Ensures correct provisioning order.",
            },
            {
              name: "Lifecycle Management",
              description:
                "Use lifecycle {create_before_destroy = true}. Controls resource creation and updates.",
            },
            {
              name: "Meta Arguments",
              description:
                "Use meta-arguments, like count = 3. Iterates resources dynamically.",
            },
          ],
        },
        {
          name: "Variables",
          description:
            "Parameterize configs with variables for reusability. This section covers input, output, and local variables, enhancing flexibility in Terraform setups.",
          children: [
            {
              name: "Input Variables",
              description:
                "Define with variable 'name' {default = 'value'}. Allows customization via CLI or tfvars.",
            },
            {
              name: "Output Variables",
              description:
                "Expose with output 'name' {value = resource.id}. Shares resource data post-deployment.",
            },
            {
              name: "Local Variables",
              description:
                "Use locals {key = 'value'} for reusable values. Simplifies config with internal references.",
            },
            {
              name: "Variable Types",
              description:
                "Specify types, like variable 'count' {type = number}. Ensures type safety in configs.",
            },
            {
              name: "Environment Variables",
              description: "Use environment variables for sensitive data.",
            },
          ],
        },
      ],
      dividerText: " Manage Terraform state.",
    },
    {
      name: "State Management",
      description:
        "Handle Terraform state to track and manage infrastructure changes. This section covers local and remote state, locking, and workspaces, ensuring consistency and collaboration in IaC deployments.",
      children: [
        {
          name: "State Basics",
          description:
            "Understand Terraform state as its record of managed resources. This section explores state files, initialization, and basic operations, critical for tracking infrastructure.",
          children: [
            {
              name: "State File",
              description:
                "Stored as terraform.tfstate locally post-apply. Records resource details and mappings.",
            },
            {
              name: "State Initialization",
              description:
                "Run terraform init to set up state. Prepares Terraform for managing resources.",
            },
            {
              name: "State Commands",
              description:
                "Use terraform state list, show for inspection. Manages and views state data.",
            },
            {
              name: "Sensitive Data",
              description: "Avoid storing sensitive data in state files.",
            },
          ],
        },
        {
          name: "Advanced State",
          description:
            "Scale state management with remote backends and workspaces. This section covers S3 (preferred), Terraform Cloud, and environment separation for team workflows.",
          children: [
            {
              name: "Remote State",
              description:
                "Store in S3 or Terraform Cloud, like backend 's3' {}. Preferred for team access and locking.",
              preferred: true,
            },
            {
              name: "State Locking",
              description:
                "Enable locking with backends, like DynamoDB with S3. Prevents concurrent state changes.",
            },
            {
              name: "Workspaces",
              description:
                "Use terraform workspace new dev for environments. Separates state per environment.",
            },
          ],
        },
      ],
      dividerText: " Work with Terraform modules.",
    },
    {
      name: "Modules",
      description:
        "Organize Terraform code with modules for reusability and modularity. This section covers creating, using, and sourcing modules from registries or Git, enabling structured, scalable infrastructure configurations.",
      children: [
        {
          name: "Module Basics",
          description:
            "Learn modules as reusable Terraform configurations. This section explores module structure, calling modules, and basic usage, forming the foundation for modular IaC.",
          children: [
            {
              name: "Module Structure",
              description:
                "Create in folders with main.tf, variables.tf. Encapsulates resources for reuse.",
            },
            {
              name: "Root vs Child Modules",
              description:
                "Root modules contain resources, while child modules contain modules.",
            },
            {
              name: "Calling Modules",
              description:
                "Use module 'name' {source = './path'}. Integrates module into configs.",
            },
            {
              name: "Module Inputs",
              description:
                "Pass variables, like module 'vpc' {cidr = '10.0.0.0/16'}. Customizes module behavior.",
            },
          ],
        },
        {
          name: "Module Sources",
          description:
            "Source and version modules from registries or Git. This section covers public/private modules, with Terraform Registry preferred for community resources.",
          children: [
            {
              name: "Terraform Registry",
              description:
                "Source from registry, like module 'aws_vpc' {source = 'terraform-aws-modules/vpc/aws'}. Preferred for community modules.",
              preferred: true,
            },
            {
              name: "Git Modules",
              description:
                "Use Git, like source = 'git::github.com/repo'. Enables custom module sourcing.",
            },
            {
              name: "Module Versioning",
              description:
                "Pin with version = '1.0.0' in module calls. Ensures stable module usage.",
            },
          ],
        },
      ],
      dividerText: " Use provisioners in Terraform.",
    },
    {
      name: "Provisioners",
      description:
        "Enhance Terraform with provisioners to execute scripts or commands post-resource creation. This section covers local and remote provisioners, their use cases, and best practices, adding flexibility to infrastructure setup.",
      children: [
        {
          name: "Provisioner Basics",
          description:
            "Understand provisioners as Terraform’s tool for post-deployment tasks. This section explores local-exec and remote-exec, introducing how they extend resource provisioning capabilities.",
          children: [
            {
              name: "Local-Exec",
              description:
                "Run local commands, like provisioner 'local-exec' {command = 'echo Hello'}. Executes on the Terraform machine.",
            },
            {
              name: "Remote-Exec",
              description:
                "Run on resources, like provisioner 'remote-exec' {inline = ['ls']}. Executes scripts on deployed instances.",
            },
            {
              name: "When to Use",
              description:
                "Use for initial setup, like installing software. Avoid over-reliance; prefer configuration management tools.",
            },
          ],
        },
        {
          name: "Advanced Provisioners",
          description:
            "Leverage advanced provisioner features for complex setups. This section covers file transfers, connection settings, and lifecycle integration for precise provisioning control.",
          children: [
            {
              name: "File Provisioner",
              description:
                "Transfer files with provisioner 'file' {source = 'local'}. Uploads configs to resources.",
            },
            {
              name: "Connection Settings",
              description:
                "Set connection, like connection {type = 'ssh'}, for remote-exec. Configures access to instances.",
            },
            {
              name: "Lifecycle Triggers",
              description:
                "Use on_destroy or when = 'destroy' to run on cleanup. Manages resource lifecycle tasks.",
            },
          ],
        },
      ],
      dividerText: " Scale infrastructure with Terraform.",
    },
    {
      name: "Scaling Infrastructure",
      description:
        "Scale infrastructure with Terraform using dynamic resources and workspaces. This section covers count, for_each, and multi-environment strategies, enabling you to manage growing or variable infrastructure efficiently.",
      children: [
        {
          name: "Scaling Basics",
          description:
            "Learn to scale resources dynamically with Terraform constructs. This section introduces count and for_each for creating multiple instances, foundational for scalable IaC.",
          children: [
            {
              name: "Count",
              description:
                "Use count = 3 in resources, like aws_instance. Creates multiple identical resources.",
            },
            {
              name: "For_Each",
              description:
                "Use for_each = var.map for resources. Creates instances from maps or sets dynamically.",
            },
          ],
        },
        {
          name: "Scaling Strategies",
          description:
            "Implement scaling with workspaces and modules. This section covers environment separation and reusable configs for managing large-scale infrastructure deployments.",
          children: [
            {
              name: "Workspaces for Scaling",
              description:
                "Separate scaling with terraform workspace new prod. Manages state per environment.",
              preferred: true,
            },
            {
              name: "Module Scaling",
              description:
                "Scale via modules, like module 'servers' {count = 5}. Reuses configs for multiple instances.",
            },
            {
              name: "Dynamic Blocks",
              description:
                "Use dynamic 'ingress' {} in resources. Scales nested configurations dynamically.",
            },
          ],
        },
      ],
      dividerText: " Secure Terraform configurations.",
    },
    {
      name: "Security",
      description:
        "Secure Terraform configurations and infrastructure with best practices. This section covers credential management, encryption, IAM, and drift detection, ensuring your deployments are safe and compliant.",
      children: [
        {
          name: "Security Basics",
          description:
            "Implement basic security in Terraform configs. This section covers protecting secrets and enforcing least privilege, foundational for secure infrastructure management.",
          children: [
            {
              name: "Credential Management",
              description:
                "Store secrets in variables or vaults, not plaintext. Prevents exposure in configs.",
            },
            {
              name: "Sensitive Variables",
              description:
                "Mark with sensitive = true in outputs. Hides values in logs and UI.",
            },
          ],
        },
        {
          name: "Advanced Security",
          description:
            "Enhance security with encryption, IAM, and drift checks. This section integrates tools like HashiCorp Vault and Terraform Cloud for robust, secure IaC.",
          children: [
            {
              name: "Encryption",
              description:
                "Encrypt state with backend 's3' {encrypt = true}. Protects state data at rest.",
            },
            {
              name: "IAM Policies",
              description:
                "Define IAM with aws_iam_policy for least privilege. Secures cloud resource access.",
              preferred: true,
            },
            {
              name: "Drift Detection",
              description:
                "Detect changes with terraform plan -refresh-only. Ensures config matches reality.",
            },
            {
              name: "HashiCorp Vault",
              description:
                "Integrate Vault for secrets, like vault_generic_secret. Enhances credential security.",
            },
          ],
        },
      ],
      dividerText: " Utilize Terraform tools.",
    },
    {
      name: "Development Tools",
      description:
        "Enhance Terraform workflows with tools for coding, validation, and formatting. This section covers CLI enhancements, IDE plugins, and utilities like Terragrunt, streamlining infrastructure management.",
      children: [
        {
          name: "CLI and Utilities",
          description:
            "Boost productivity with Terraform CLI and additional tools. This section explores commands, formatting, and Terragrunt for efficient configuration and deployment management.",
          children: [
            {
              name: "Terraform CLI",
              description: "Core commands like init, apply.",
              preferred: true,
            },
            {
              name: "terraform fmt",
              description: "Formats HCL code consistently.",
            },
            {
              name: "Terragrunt",
              description: "Wrapper for DRY configs and remote state.",
            },
          ],
        },
        {
          name: "IDE and Validation",
          description:
            "Improve coding with IDE plugins and validation tools. This section covers VS Code support and tools like TFLint for error checking and best practices.",
          children: [
            {
              name: "VS Code Extension",
              description: "Syntax highlighting and validation.",
              preferred: true,
            },
            {
              name: "TFLint",
              description: "Static analysis for Terraform code.",
            },
            {
              name: "terraform validate",
              description: "Validates configuration syntax.",
            },
          ],
        },
      ],
      dividerText: " Test Terraform configurations.",
    },
    {
      name: "Testing",
      description:
        "Ensure Terraform configuration reliability with testing tools and practices. This section covers unit testing with Terratest, linting, and validation, ensuring robust IaC deployments.",
      children: [
        {
          name: "Basic Testing",
          description:
            "Validate Terraform configs with built-in tools and linting. This section focuses on syntax checks and static analysis to catch errors early.",
          children: [
            {
              name: "terraform validate",
              description: "Checks syntax and references.",
            },
            {
              name: "TFLint",
              description: "Lints for best practices and errors.",
            },
          ],
        },
        {
          name: "Advanced Testing",
          description:
            "Test Terraform deployments with tools like Terratest. This section covers unit and integration testing, ensuring infrastructure behaves as expected.",
          children: [
            {
              name: "Terratest",
              description: "Go-based testing for Terraform.",
              preferred: true,
            },
            {
              name: "Kitchen-Terraform",
              description: "Integration testing framework.",
            },
          ],
        },
      ],
      dividerText: " Integrate with HCP (HashiCorp Cloud Platform).",
    },
    {
      name: "HCP (HashiCorp Cloud Platform)",
      description:
        "Leverage HashiCorp Cloud Platform (HCP) for advanced Terraform workflows. This section covers HCP Terraform (formerly Terraform Cloud), HCP Vault, and Packer integration, enhancing collaboration, security, and image management.",
      children: [
        {
          name: "HCP Terraform",
          description:
            "Use HCP Terraform for cloud-based state and runs. This section explores its features for team collaboration, remote execution, and state management.",
          children: [
            {
              name: "Remote Runs",
              description: "Execute runs in HCP Terraform.",
              preferred: true,
            },
            {
              name: "State Storage",
              description: "Store state securely in HCP.",
            },
            {
              name: "Team Collaboration",
              description: "Manage teams and permissions.",
            },
          ],
        },
        {
          name: "HCP Integrations",
          description:
            "Integrate HCP Vault and Packer with Terraform. This section enhances security with secrets and pre-builds images for Terraform deployments.",
          children: [
            {
              name: "HCP Vault",
              description: "Secure secrets with HCP Vault.",
            },
            {
              name: "HCP Packer",
              description: "Build images for Terraform use.",
            },
          ],
        },
      ],
      dividerText: " Deploy and manage Terraform infrastructure.",
    },
    {
      name: "Deployment and Management",
      description:
        "Deploy and manage Terraform infrastructure with workflows and advanced state control. This section covers applying configurations, managing drift, and CI/CD integration for production-ready deployments.",
      children: [
        {
          name: "Deployment Workflow",
          description:
            "Deploy infrastructure with Terraform’s plan/apply cycle. This section details initializing, planning, and applying configurations, ensuring controlled infrastructure changes.",
          children: [
            {
              name: "terraform init",
              description: "Initialize Terraform working directory.",
            },
            {
              name: "terraform plan",
              description: "Preview changes before applying.",
            },
            {
              name: "terraform apply",
              description: "Deploy infrastructure changes.",
              preferred: true,
            },
          ],
        },
        {
          name: "Infrastructure Management",
          description:
            "Manage deployed infrastructure with state and automation tools. This section covers drift detection and CI/CD with GitHub Actions for efficient lifecycle management.",
          children: [
            {
              name: "Drift Detection",
              description: "Check with terraform plan -refresh-only.",
            },
            {
              name: "CI/CD with GitHub Actions",
              description: "Automate apply with CI.",
              preferred: true,
            },
          ],
        },
      ],
      dividerText: " Practice and learn with resources.",
    },
    {
      name: "Practice and Resources",
      description:
        "Apply Terraform skills through projects and deepen knowledge with resources. This section fosters hands-on experience with infrastructure setups and learning from Terraform’s official docs and community.",
      children: [
        {
          name: "Projects",
          description:
            "Build practical Terraform projects to reinforce skills, from simple resources to multi-cloud setups with CI/CD. These exercises solidify providers, state, and advanced features.",
          children: [
            {
              name: "AWS EC2 Instance",
              description: "Deploy a single EC2 instance.",
            },
            {
              name: "Multi-Cloud VPC",
              description: "Set up VPCs on AWS and GCP.",
            },
            {
              name: "Secure Pipeline",
              description: "Use HCP Vault with CI/CD.",
            },
          ],
        },
        {
          name: "Learning Resources",
          description:
            "Access top Terraform resources, from official docs to tutorials. Terraform.io is preferred for its comprehensive guidance, complemented by community content.",
          children: [
            {
              name: "Terraform.io",
              description: "Official Terraform documentation.",
              preferred: true,
            },
            {
              name: "HashiCorp Learn",
              description: "Free Terraform tutorials.",
            },
            {
              name: "Terraform Community",
              description: "Forums and GitHub discussions.",
            },
          ],
        },
      ],
    },
    {
      name: "Continuous Learning",
      description:
        "Stay updated with Terraform’s evolution, tracking releases like 2.x and ecosystem trends. Engage with the community, explore new providers, and adapt to IaC advancements for cutting-edge skills.",
    },
  ],
};

export default terraformDeveloperRoadmap;
