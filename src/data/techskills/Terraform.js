const terraformDeveloperRoadmap = {
  name: "Terraform Developer Roadmap for Beginners to Advanced 2025",
  children: [
    {
      name: "Terraform Foundations",
      children: [
        {
          name: "Terraform Basics",
          children: [
            {
              name: "What is Terraform",
            },
            {
              name: "What is IaC?",
            },
            {
              name: "Advantages",
            },
            {
              name: "Terraform vs Others",
            },
          ],
        },
        {
          name: "Setup",
          children: [
            {
              name: "Terraform CLI",
            },
            {
              name: "Editor Setup",
            },
            {
              name: "First Resource",
            },
            {
              name: "Provider Authentication",
            },
            {
              name: "CLI Commands",
            },
          ],
        },
      ],
      dividerText: " Learn HCL fundamentals.",
    },
    {
      name: "HCL Fundamentals",
      children: [
        {
          name: "HCL Basics",
          children: [
            {
              name: "Syntax Overview",
            },
            {
              name: "Blocks",
            },
            {
              name: "Attributes",
            },
          ],
        },
        {
          name: "HCL Features",
          children: [
            {
              name: "Variables",
            },
            {
              name: "Expressions",
            },
            {
              name: "Functions",
            },
            {
              name: "Comments",
            },
          ],
        },
      ],
      dividerText: " Configure Terraform providers.",
    },
    {
      name: "Providers",
      children: [
        {
          name: "Provider Setup",
          children: [
            {
              name: "Provider Configuration",
            },
            {
              name: "Provider Initialization",
            },
            {
              name: "Provider Versioning",
            },
          ],
        },
        {
          name: "Common Providers",
          children: [
            {
              name: "AWS Provider",
            },
            {
              name: "Azure Provider",
            },
            {
              name: "GCP Provider",
            },
            {
              name: "Data Sources",
            },
          ],
        },
      ],
      dividerText: " Define resources and variables.",
    },
    {
      name: "Resources and Variables",
      children: [
        {
          name: "Resources",
          children: [
            {
              name: "Resource Syntax",
            },
            {
              name: "Dependencies",
            },
            {
              name: "Lifecycle Management",
            },
            {
              name: "Meta Arguments",
            },
          ],
        },
        {
          name: "Variables",
          children: [
            {
              name: "Input Variables",
            },
            {
              name: "Output Variables",
            },
            {
              name: "Local Variables",
            },
            {
              name: "Variable Types",
            },
            {
              name: "Environment Variables",
            },
          ],
        },
      ],
      dividerText: " Manage Terraform state.",
    },
    {
      name: "State Management",
      children: [
        {
          name: "State Basics",
          children: [
            {
              name: "State File",
            },
            {
              name: "State Initialization",
            },
            {
              name: "State Commands",
            },
            {
              name: "Sensitive Data",
            },
          ],
        },
        {
          name: "Advanced State",
          children: [
            {
              name: "Remote State",
            },
            {
              name: "State Locking",
            },
            {
              name: "Workspaces",
            },
          ],
        },
      ],
      dividerText: " Work with Terraform modules.",
    },
    {
      name: "Modules",
      children: [
        {
          name: "Module Basics",
          children: [
            {
              name: "Module Structure",
            },
            {
              name: "Root vs Child Modules",
            },
            {
              name: "Calling Modules",
            },
            {
              name: "Module Inputs",
            },
          ],
        },
        {
          name: "Module Sources",
          children: [
            {
              name: "Terraform Registry",
            },
            {
              name: "Git Modules",
            },
            {
              name: "Module Versioning",
            },
          ],
        },
      ],
      dividerText: " Use provisioners in Terraform.",
    },
    {
      name: "Provisioners",
      children: [
        {
          name: "Provisioner Basics",
          children: [
            {
              name: "Local-Exec",
            },
            {
              name: "Remote-Exec",
            },
            {
              name: "When to Use",
            },
          ],
        },
        {
          name: "Advanced Provisioners",
          children: [
            {
              name: "File Provisioner",
            },
            {
              name: "Connection Settings",
            },
            {
              name: "Lifecycle Triggers",
            },
          ],
        },
      ],
      dividerText: " Scale infrastructure with Terraform.",
    },
    {
      name: "Scaling Infrastructure",
      children: [
        {
          name: "Scaling Basics",
          children: [
            {
              name: "Count",
            },
            {
              name: "For_Each",
            },
          ],
        },
        {
          name: "Scaling Strategies",
          children: [
            {
              name: "Workspaces for Scaling",
            },
            {
              name: "Module Scaling",
            },
            {
              name: "Dynamic Blocks",
            },
          ],
        },
      ],
      dividerText: " Secure Terraform configurations.",
    },
    {
      name: "Security",
      children: [
        {
          name: "Security Basics",
          children: [
            {
              name: "Credential Management",
            },
            {
              name: "Sensitive Variables",
            },
          ],
        },
        {
          name: "Advanced Security",
          children: [
            {
              name: "Encryption",
            },
            {
              name: "IAM Policies",
            },
            {
              name: "Drift Detection",
            },
            {
              name: "HashiCorp Vault",
            },
          ],
        },
      ],
      dividerText: " Utilize Terraform tools.",
    },
    {
      name: "Development Tools",
      children: [
        {
          name: "CLI and Utilities",
          children: [
            {
              name: "Terraform CLI",
            },
            {
              name: "terraform fmt",
            },
            {
              name: "Terragrunt",
            },
          ],
        },
        {
          name: "IDE and Validation",
          children: [
            {
              name: "VS Code Extension",
            },
            {
              name: "TFLint",
            },
            {
              name: "terraform validate",
            },
          ],
        },
      ],
      dividerText: " Test Terraform configurations.",
    },
    {
      name: "Testing",
      children: [
        {
          name: "Basic Testing",
          children: [
            {
              name: "terraform validate",
            },
            {
              name: "TFLint",
            },
          ],
        },
        {
          name: "Advanced Testing",
          children: [
            {
              name: "Terratest",
            },
            {
              name: "Kitchen-Terraform",
            },
          ],
        },
      ],
      dividerText: " Integrate with HCP (HashiCorp Cloud Platform).",
    },
    {
      name: "HCP (HashiCorp Cloud Platform)",
      children: [
        {
          name: "HCP Terraform",
          children: [
            {
              name: "Remote Runs",
            },
            {
              name: "State Storage",
            },
            {
              name: "Team Collaboration",
            },
          ],
        },
        {
          name: "HCP Integrations",
          children: [
            {
              name: "HCP Vault",
            },
            {
              name: "HCP Packer",
            },
          ],
        },
      ],
      dividerText: " Deploy and manage Terraform infrastructure.",
    },
    {
      name: "Deployment and Management",
      children: [
        {
          name: "Deployment Workflow",
          children: [
            {
              name: "terraform init",
            },
            {
              name: "terraform plan",
            },
            {
              name: "terraform apply",
            },
          ],
        },
        {
          name: "Infrastructure Management",
          children: [
            {
              name: "Drift Detection",
            },
            {
              name: "CI/CD with GitHub Actions",
            },
          ],
        },
      ],
      dividerText: " Practice and learn with resources.",
    },
    {
      name: "Practice and Resources",
      children: [
        {
          name: "Projects",
          children: [
            {
              name: "AWS EC2 Instance",
            },
            {
              name: "Multi-Cloud VPC",
            },
            {
              name: "Secure Pipeline",
            },
          ],
        },
        {
          name: "Learning Resources",
          children: [
            {
              name: "Terraform.io",
            },
            {
              name: "HashiCorp Learn",
            },
            {
              name: "Terraform Community",
            },
          ],
        },
      ],
    },
    {
      name: "Continuous Learning",
    },
  ],
};

export default terraformDeveloperRoadmap;
