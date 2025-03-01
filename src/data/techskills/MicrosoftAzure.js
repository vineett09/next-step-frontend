const azureDeveloperRoadmap = {
  name: "Azure Developer Roadmap for Beginners 2025",
  description:
    "This beginner-friendly roadmap offers a tailored, step-by-step guide to mastering Microsoft Azure by 2025, starting from zero knowledge to practical cloud skills. Designed to fit Azure’s ecosystem, it covers foundational concepts, core services, advanced tools like Communication Services, ACI, ACR, AKS, DNS, and Auto Scaling, with detailed subtopics and practical examples—taught using Azure Portal, CLI, and VS Code—for newcomers aiming to excel in the 2025 cloud ecosystem.",
  children: [
    {
      name: " Grasping Cloud Computing Basics",
      description:
        "Begin your Azure journey by understanding what cloud computing is, taught with relatable examples like renting online storage instead of buying a hard drive.",
      children: [
        {
          name: "Cloud Concepts",
          description: "Core ideas behind cloud computing.",
          children: [
            {
              name: "Service Models",
              description:
                "Types like IaaS (renting servers), PaaS (renting platforms), SaaS (renting apps).",
            },
            {
              name: "Deployment Models",
              description:
                "Options like public (shared), private (exclusive), hybrid (mixed).",
            },
            {
              name: "Key Traits",
              description:
                "Features like scalability, elasticity, pay-as-you-go.",
            },
          ],
        },
        {
          name: "Cloud Advantages",
          description: "Benefits of cloud computing.",
          children: [
            {
              name: "Cost Savings",
              description: "Types like no upfront cost, pay-per-use.",
            },
            {
              name: "Flexibility",
              description: "Options like quick scaling, global reach.",
            },
            {
              name: "Reliability",
              description: "Aspects like backups, high availability.",
            },
          ],
        },
      ],
      dividerText: "meet Microsoft Azure.",
    },
    {
      name: " Meeting Microsoft Azure",
      description:
        "Learn what Azure is and how it works, taught with an overview comparing Azure to a giant online toolkit.",
      children: [
        {
          name: "Azure Essentials",
          description: "Key aspects of Azure as a cloud platform.",
          children: [
            {
              name: "Service Groups",
              description: "Categories like compute, storage, AI, networking.",
            },
            {
              name: "Global Structure",
              description:
                "Components like regions (locations), availability zones (data centers).",
            },
            {
              name: "User Perks",
              description:
                "Benefits like integration with Microsoft tools, scalability.",
            },
          ],
        },
        {
          name: "Azure Offerings",
          description: "Main areas of Azure services.",
          children: [
            {
              name: "Core Tools",
              description:
                "Services like Virtual Machines (VMs), Blob Storage, App Service.",
            },
            {
              name: "Support Tools",
              description:
                "Extras like Azure AD (security), Monitor (tracking).",
            },
            {
              name: "Advanced Tools",
              description:
                "Options like AKS (containers), Communication Services (email).",
            },
          ],
        },
      ],
      dividerText: "set up your Azure playground.",
    },
    {
      name: " Setting Up Your Azure Playground",
      description:
        "Create your Azure account and explore free stuff, taught with a beginner’s signup walkthrough in the Azure Portal.",
      children: [
        {
          name: "Account Elements",
          description: "Parts of your Azure account.",
          children: [
            {
              name: "Account Options",
              description: "Types like personal, student, business accounts.",
            },
            {
              name: "Billing Features",
              description:
                "Components like credit cards, invoices, cost tracking.",
            },
            {
              name: "Security Basics",
              description: "Tools like root user, MFA setup.",
            },
          ],
        },
        {
          name: "Azure Free Account",
          description: "Free services beginners can use.",
          children: [
            {
              name: "Free Offers",
              description:
                "Options like 200 USD credit, 25 GB storage, free VMs.",
            },
            {
              name: "Limits",
              description: "Constraints like 30-day credit, 750 VM hours.",
            },
            {
              name: "Tracking Tools",
              description: "Features like Cost Management, budget alerts.",
            },
          ],
        },
      ],
      dividerText: "get your Azure tools ready.",
    },
    {
      name: " Getting Your Azure Tools Ready",
      description:
        "Install tools to control Azure, taught with a beginner’s guide to setting up Azure CLI and Portal access.",
      children: [
        {
          name: "Azure CLI",
          description: "Command-line tool for Azure.",
          children: [
            {
              name: "CLI Versions",
              description: "Options like CLI 2.x for different systems.",
            },
            {
              name: "CLI Parts",
              description:
                "Elements like commands (az vm), profiles, config files.",
            },
            {
              name: "CLI Capabilities",
              description:
                "Functions like creating (az group create), listing (az vm list).",
            },
          ],
        },
        {
          name: "Azure Portal",
          description: "Web-based control panel for Azure.",
          children: [
            {
              name: "Portal Areas",
              description: "Sections like services, billing, resource groups.",
            },
            {
              name: "Navigation Aids",
              description: "Tools like search bar, favorites, quick start.",
            },
            {
              name: "Access Methods",
              description: "Options like browser, mobile app.",
            },
          ],
        },
      ],
      dividerText: "say hello with Azure Functions.",
    },
    {
      name: " Saying Hello with Azure Functions",
      description:
        "Start with a simple serverless app using Azure Functions, taught with a beginner’s ‘hello world’ function in the Portal.",
      children: [
        {
          name: "Functions Types",
          description: "Different ways Azure Functions can work.",
          children: [
            {
              name: "Runtimes",
              description: "Languages like Python, JavaScript, C#.",
            },
            {
              name: "Triggers",
              description: "Events like HTTP request, timer, queue message.",
            },
            {
              name: "Bindings",
              description: "Connections like input (Blob), output (Storage).",
            },
          ],
        },
        {
          name: "Functions Features",
          description: "Capabilities in Azure Functions.",
          children: [
            {
              name: "Hosting Plans",
              description:
                "Options like Consumption (pay-per-use), Premium (faster).",
            },
            {
              name: "Scaling",
              description: "Modes like event-driven, manual scaling.",
            },
            {
              name: "Monitoring",
              description: "Tools like Application Insights, logs.",
            },
          ],
        },
      ],
      dividerText: "run your first computer with Azure VMs.",
    },
    {
      name: " Running Your First Computer with Azure VMs",
      description:
        "Learn to use Azure Virtual Machines (VMs) for computing power, taught with a beginner’s VM setup in the Portal.",
      children: [
        {
          name: "VM Components",
          description: "Parts that make up an Azure VM.",
          children: [
            {
              name: "VM Sizes",
              description:
                "Options like B1s (free tier), D2s_v3 (general), F-series (compute).",
            },
            {
              name: "Images",
              description: "Types like Ubuntu, Windows Server, CentOS.",
            },
            {
              name: "Disk Types",
              description:
                "Options like Managed Disks (persistent), Temp Disks.",
            },
          ],
        },
        {
          name: "VM Features",
          description: "Capabilities within Azure VMs.",
          children: [
            {
              name: "Networking",
              description: "Options like Virtual Networks, public IPs.",
            },
            {
              name: "Security",
              description: "Tools like Network Security Groups, SSH keys.",
            },
            {
              name: "Monitoring",
              description: "Features like Azure Monitor, VM health.",
            },
          ],
        },
      ],
      dividerText: "store files with Azure Blob Storage.",
    },
    {
      name: " Storing Files with Azure Blob Storage",
      description:
        "Use Azure Blob Storage to keep files in the cloud, taught with a beginner’s storage account example in the Portal.",
      children: [
        {
          name: "Blob Storage Types",
          description: "Different storage options in Blob Storage.",
          children: [
            {
              name: "Storage Tiers",
              description:
                "Options like Hot (frequent), Cool (less used), Archive.",
            },
            {
              name: "Data Types",
              description: "Items like blobs (files), containers (folders).",
            },
            {
              name: "Access Levels",
              description:
                "Settings like public, private, shared access signatures.",
            },
          ],
        },
        {
          name: "Blob Storage Features",
          description: "Capabilities within Blob Storage.",
          children: [
            {
              name: "Versioning",
              description: "Options like enabled, disabled for file versions.",
            },
            {
              name: "Lifecycle Management",
              description: "Rules like move to Cool, delete after time.",
            },
            {
              name: "Encryption",
              description:
                "Types like SSE (server-side), client-side encryption.",
            },
          ],
        },
      ],
      dividerText: "set up a database with Azure SQL.",
    },
    {
      name: " Setting Up a Database with Azure SQL",
      description:
        "Learn to use Azure SQL Database for storage, taught with a beginner’s SQL setup in the Portal.",
      children: [
        {
          name: "Azure SQL Types",
          description: "Different database options in Azure SQL.",
          children: [
            {
              name: "Deployment Models",
              description:
                "Options like Single Database, Elastic Pool, Managed Instance.",
            },
            {
              name: "Compute Tiers",
              description: "Sizes like Basic (free tier), Standard, Premium.",
            },
            {
              name: "Storage Types",
              description: "Choices like Locally Redundant, Zone-Redundant.",
            },
          ],
        },
        {
          name: "Azure SQL Features",
          description: "Capabilities within Azure SQL.",
          children: [
            {
              name: "Backups",
              description: "Options like automated, point-in-time restore.",
            },
            {
              name: "Security",
              description:
                "Tools like firewall rules, Azure AD authentication.",
            },
            {
              name: "Scaling",
              description: "Features like vertical scaling, read replicas.",
            },
          ],
        },
      ],
      dividerText: "secure your Azure account.",
    },
    {
      name: " Securing Your Azure Account",
      description:
        "Protect your Azure account with Azure Active Directory (AD), taught with a beginner’s user setup in the Portal.",
      children: [
        {
          name: "Azure AD Entities",
          description: "Types of access control in Azure AD.",
          children: [
            {
              name: "Users",
              description: "Individuals like you, admins, guests.",
            },
            {
              name: "Groups",
              description: "Collections like dev team, ops team.",
            },
            {
              name: "Roles",
              description: "Permissions like Owner, Contributor, Reader.",
            },
          ],
        },
        {
          name: "Azure AD Features",
          description: "Capabilities within Azure AD.",
          children: [
            {
              name: "Authentication",
              description: "Options like passwords, MFA, SSO.",
            },
            {
              name: "Access Control",
              description: "Tools like RBAC, conditional access.",
            },
            {
              name: "Monitoring",
              description: "Logs like sign-in logs, audit logs.",
            },
          ],
        },
      ],
      dividerText: "connect with Azure Virtual Network.",
    },
    {
      name: " Connecting with Azure Virtual Network",
      description:
        "Set up a simple network with Azure Virtual Network (VNet), taught with a beginner’s VNet example in the Portal.",
      children: [
        {
          name: "VNet Components",
          description: "Parts that make up a Virtual Network.",
          children: [
            {
              name: "Address Spaces",
              description: "IP ranges like 10.0.0.0/16, 192.168.0.0/24.",
            },
            {
              name: "Subnets",
              description: "Sections like public subnet, private subnet.",
            },
            {
              name: "Route Tables",
              description: "Paths like internet routes, custom routes.",
            },
          ],
        },
        {
          name: "VNet Features",
          description: "Tools for network control and access.",
          children: [
            {
              name: "Security",
              description: "Options like Network Security Groups, firewalls.",
            },
            {
              name: "Gateways",
              description:
                "Connects like Virtual Network Gateway, Application Gateway.",
            },
            {
              name: "Peering",
              description: "Links like VNet-to-VNet, cross-region peering.",
            },
          ],
        },
      ],
      dividerText: "send emails with Azure Communication Services.",
    },
    {
      name: " Sending Emails with Azure Communication Services",
      description:
        "Learn to send emails using Azure Communication Services (ACS), taught with a beginner’s email example in the Portal.",
      children: [
        {
          name: "ACS Communication Types",
          description: "Different communication options in ACS.",
          children: [
            { name: "Channels", description: "Options like email, SMS, chat." },
            {
              name: "Sender Identities",
              description: "Sources like verified domains, email addresses.",
            },
            { name: "Delivery Modes", description: "Methods like API, SDK." },
          ],
        },
        {
          name: "ACS Features",
          description: "Capabilities within ACS.",
          children: [
            {
              name: "Message Types",
              description: "Options like transactional, bulk emails.",
            },
            {
              name: "Monitoring",
              description: "Logs like delivery status, error reports.",
            },
            {
              name: "Integration",
              description: "Tools like Event Grid, Logic Apps.",
            },
          ],
        },
      ],
      dividerText: "launch an app with Azure App Service.",
    },
    {
      name: " Launching an App with Azure App Service",
      description:
        "Deploy a simple app with Azure App Service, taught with a beginner’s web app example in the Portal.",
      children: [
        {
          name: "App Service Environments",
          description: "Types of setups in App Service.",
          children: [
            {
              name: "Runtimes",
              description: "Options like .NET, Python, Node.js.",
            },
            {
              name: "Hosting Plans",
              description: "Tiers like Free, Basic, Standard.",
            },
            {
              name: "Deployment Types",
              description: "Methods like web apps, APIs, static sites.",
            },
          ],
        },
        {
          name: "App Service Features",
          description: "Capabilities within App Service.",
          children: [
            {
              name: "Scaling",
              description: "Options like manual scale, auto-scale.",
            },
            {
              name: "Domains",
              description: "Tools like custom domains, SSL certificates.",
            },
            {
              name: "Monitoring",
              description: "Features like diagnostics, logs.",
            },
          ],
        },
      ],
      dividerText: "monitor with Azure Monitor.",
    },
    {
      name: " Monitoring with Azure Monitor",
      description:
        "Learn to keep an eye on Azure resources with Azure Monitor, taught with a beginner’s VM example in the Portal.",
      children: [
        {
          name: "Azure Monitor Metrics",
          description: "Types of data Azure Monitor tracks.",
          children: [
            {
              name: "Compute Metrics",
              description: "Measures like CPU usage, memory usage.",
            },
            {
              name: "Storage Metrics",
              description: "Stats like Blob requests, throughput.",
            },
            {
              name: "Custom Metrics",
              description: "User-defined like app-specific counters.",
            },
          ],
        },
        {
          name: "Azure Monitor Tools",
          description: "Features for monitoring and alerting.",
          children: [
            {
              name: "Alerts",
              description: "Notifications like high CPU, low disk space.",
            },
            {
              name: "Logs",
              description: "Records like VM logs, function logs.",
            },
            {
              name: "Dashboards",
              description: "Views like metric graphs, health summaries.",
            },
          ],
        },
      ],
      dividerText: "store containers with Azure Container Registry.",
    },
    {
      name: " Storing Containers with Azure Container Registry",
      description:
        "Learn to store Docker containers with Azure Container Registry (ACR), taught with a beginner’s container example.",
      children: [
        {
          name: "ACR Repository Types",
          description: "Different repository options in ACR.",
          children: [
            {
              name: "Visibility",
              description: "Options like private, public repositories.",
            },
            {
              name: "Image Formats",
              description: "Types like Docker images, OCI images.",
            },
            {
              name: "Regions",
              description: "Locations like East US, West Europe.",
            },
          ],
        },
        {
          name: "ACR Features",
          description: "Capabilities within ACR.",
          children: [
            { name: "Tagging", description: "Labels like latest, v1.0, dev." },
            {
              name: "Security",
              description: "Options like Azure AD, role-based access.",
            },
            {
              name: "Replication",
              description: "Features like geo-replication, multi-region pulls.",
            },
          ],
        },
      ],
      dividerText: "run containers with Azure Container Instances.",
    },
    {
      name: " Running Containers with Azure Container Instances",
      description:
        "Use Azure Container Instances (ACI) to run containers easily, taught with a beginner’s container example in the Portal.",
      children: [
        {
          name: "ACI Container Types",
          description: "Different container options in ACI.",
          children: [
            { name: "Images", description: "Sources like ACR, Docker Hub." },
            {
              name: "Resource Sizes",
              description: "Options like 1 CPU/1 GB, 2 CPU/4 GB.",
            },
            {
              name: "Execution Types",
              description:
                "Modes like single container, multi-container groups.",
            },
          ],
        },
        {
          name: "ACI Features",
          description: "Capabilities within ACI.",
          children: [
            {
              name: "Networking",
              description: "Options like public IP, VNet integration.",
            },
            {
              name: "Restart Policies",
              description: "Settings like always, on-failure, never.",
            },
            {
              name: "Monitoring",
              description: "Tools like Azure Monitor, logs.",
            },
          ],
        },
      ],
      dividerText: "orchestrate with Azure Kubernetes Service.",
    },
    {
      name: " Orchestrating with Azure Kubernetes Service",
      description:
        "Learn to manage containers with Azure Kubernetes Service (AKS), taught with a beginner’s cluster example.",
      children: [
        {
          name: "AKS Components",
          description: "Parts that make up AKS.",
          children: [
            {
              name: "Clusters",
              description: "Groups like managed control plane, node pools.",
            },
            {
              name: "Pods",
              description: "Units like single container, multi-container pods.",
            },
            {
              name: "Node Types",
              description: "Options like VM-based nodes, serverless nodes.",
            },
          ],
        },
        {
          name: "AKS Features",
          description: "Capabilities within AKS.",
          children: [
            {
              name: "Networking",
              description: "Options like Azure CNI, kubenet.",
            },
            {
              name: "Scaling",
              description:
                "Features like cluster autoscaler, horizontal pod autoscaler.",
            },
            {
              name: "Monitoring",
              description: "Tools like Azure Monitor, Kubernetes dashboard.",
            },
          ],
        },
      ],
      dividerText: "manage domains with Azure DNS.",
    },
    {
      name: " Managing Domains with Azure DNS",
      description:
        "Learn to handle domain names with Azure DNS, taught with a beginner’s DNS setup in the Portal.",
      children: [
        {
          name: "Azure DNS Components",
          description: "Parts that make up Azure DNS.",
          children: [
            {
              name: "Zones",
              description: "Types like public DNS zones, private DNS zones.",
            },
            {
              name: "Record Types",
              description:
                "Options like A (address), CNAME (alias), MX (mail).",
            },
            {
              name: "Domains",
              description: "Sources like registered, linked domains.",
            },
          ],
        },
        {
          name: "Azure DNS Features",
          description: "Capabilities within Azure DNS.",
          children: [
            {
              name: "Routing",
              description: "Options like traffic manager, simple routing.",
            },
            {
              name: "Security",
              description: "Features like DNSSEC, private links.",
            },
            {
              name: "Monitoring",
              description: "Tools like query logs, metrics.",
            },
          ],
        },
      ],
      dividerText: "scale with Azure Auto Scaling.",
    },
    {
      name: " Scaling with Azure Auto Scaling",
      description:
        "Learn to scale resources automatically with Virtual Machine Scale Sets (VMSS) and Azure Monitor, taught with a beginner’s scaling example.",
      children: [
        {
          name: "Auto Scaling Components",
          description: "Parts that make up Auto Scaling.",
          children: [
            {
              name: "Scale Sets",
              description: "Groups like VMSS, App Service scale sets.",
            },
            {
              name: "Resources",
              description: "Targets like VMs, containers, functions.",
            },
            {
              name: "Scaling Triggers",
              description: "Sources like CPU, memory, custom metrics.",
            },
          ],
        },
        {
          name: "Auto Scaling Features",
          description: "Capabilities within Auto Scaling.",
          children: [
            {
              name: "Scaling Policies",
              description: "Types like metric-based, schedule-based.",
            },
            {
              name: "Capacity Limits",
              description: "Settings like min instances, max instances.",
            },
            {
              name: "Monitoring",
              description: "Tools like Azure Monitor, alerts.",
            },
          ],
        },
      ],
      dividerText: "automate with Azure DevOps.",
    },
    {
      name: " Automating with Azure DevOps",
      description:
        "Learn to automate app deployment with Azure DevOps, taught with a beginner’s pipeline example.",
      children: [
        {
          name: "Azure DevOps Services",
          description: "Parts of Azure DevOps for automation.",
          children: [
            { name: "Repos", description: "Sources like Git repos, TFVC." },
            {
              name: "Pipelines",
              description: "Types like build, release pipelines.",
            },
            {
              name: "Artifacts",
              description: "Outputs like build packages, deployable files.",
            },
          ],
        },
        {
          name: "Azure DevOps Features",
          description: "Capabilities within Azure DevOps.",
          children: [
            {
              name: "Triggers",
              description: "Events like code push, manual trigger.",
            },
            { name: "Stages", description: "Steps like build, test, deploy." },
            {
              name: "Monitoring",
              description: "Tools like pipeline logs, run status.",
            },
          ],
        },
      ],
      dividerText: "certify and connect.",
    },
    {
      name: " Certifying and Connecting",
      description:
        "Prepare for Azure certification and join the community, taught with beginner-friendly tips.",
      children: [
        {
          name: "Certification Paths",
          description: "Azure certification options for beginners.",
          children: [
            {
              name: "Fundamentals",
              description: "Basic level like Azure Fundamentals (AZ-900).",
            },
            {
              name: "Associate Levels",
              description:
                "Next steps like Administrator (AZ-104), Developer (AZ-204).",
            },
            {
              name: "Specialty Tracks",
              description: "Advanced areas like AI, security.",
            },
          ],
        },
        {
          name: "Community and Growth",
          description: "Ways to grow and connect.",
          children: [
            {
              name: "Learning Resources",
              description: "Tools like Microsoft Learn, Azure docs.",
            },
            {
              name: "Community Spaces",
              description: "Places like Microsoft Q&A, Reddit.",
            },
            {
              name: "Events",
              description: "Meetings like Ignite, local Azure meetups.",
            },
          ],
        },
      ],
    },
  ],
};

export default azureDeveloperRoadmap;
