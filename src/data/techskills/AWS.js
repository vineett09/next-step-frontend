const awsDeveloperRoadmap = {
  name: "AWS Developer Roadmap for Beginners 2025",
  description:
    "This beginner-friendly roadmap provides a clear, step-by-step guide to mastering Amazon Web Services (AWS) by 2025, starting from zero knowledge to practical cloud skills. Covering cloud basics, AWS setup, core and advanced services like SES, ECS, ECR, EKS, Route 53, and Auto Scaling, it’s packed with detailed subtopics and practical examples—taught with tools like AWS Console, CLI, and VS Code—for newcomers aiming to thrive in the 2025 cloud ecosystem.",
  children: [
    {
      name: " Understanding Cloud Computing",
      description:
        "Start by learning what cloud computing is and why it’s useful, taught with everyday examples like renting storage space online instead of buying a hard drive.",
      children: [
        {
          name: "Cloud Computing Concepts",
          description:
            "Core ideas behind cloud computing, explained with simple analogies.",
          children: [
            {
              name: "Service Models",
              description:
                "Types like IaaS (renting a computer), PaaS (renting a platform), SaaS (renting an app).",
            },
            {
              name: "Deployment Models",
              description:
                "Options like public (shared), private (exclusive), hybrid (mixed).",
            },
            {
              name: "Key Features",
              description:
                "Aspects like scalability (grow easily), elasticity (adjust quickly), pay-as-you-go.",
            },
          ],
        },
        {
          name: "Cloud Benefits",
          description: "Advantages of using the cloud over traditional setups.",
          children: [
            {
              name: "Cost Benefits",
              description:
                "Types like no upfront cost, pay-per-use, reduced maintenance.",
            },
            {
              name: "Flexibility Benefits",
              description:
                "Options like instant scaling, global access, quick setup.",
            },
            {
              name: "Reliability Benefits",
              description:
                "Features like backups, redundancy, uptime guarantees.",
            },
          ],
        },
      ],
      dividerText: "discover what AWS offers.",
    },
    {
      name: " Introduction to AWS",
      description:
        "Learn what AWS is and its basic structure as a beginner, taught with an overview comparing AWS to a big online toolbox.",
      children: [
        {
          name: "AWS Overview",
          description: "Key aspects of AWS as a cloud provider.",
          children: [
            {
              name: "Service Categories",
              description:
                "Areas like compute, storage, databases, networking.",
            },
            {
              name: "Global Reach",
              description:
                "Components like regions (locations), availability zones (data centers), edge locations (delivery points).",
            },
            {
              name: "User Benefits",
              description:
                "Advantages like scalability, cost savings, wide toolset.",
            },
          ],
        },
        {
          name: "AWS Ecosystem",
          description: "Parts that make up AWS’s structure.",
          children: [
            {
              name: "Core Services",
              description:
                "Main tools like EC2 (computers), S3 (storage), RDS (databases).",
            },
            {
              name: "Support Services",
              description:
                "Extras like IAM (security), CloudWatch (monitoring), Route 53 (DNS).",
            },
            {
              name: "Specialty Services",
              description:
                "Advanced options like SES (email), ECS/EKS (containers).",
            },
          ],
        },
      ],
      dividerText: "set up your AWS account.",
    },
    {
      name: " Setting Up Your AWS Account",
      description:
        "Create your AWS account and explore free options, taught with a beginner’s walkthrough of signing up online.",
      children: [
        {
          name: "AWS Account Components",
          description: "Parts of your AWS account setup.",
          children: [
            {
              name: "Account Types",
              description:
                "Options like personal, business, educational accounts.",
            },
            {
              name: "Billing Elements",
              description:
                "Features like payment methods (credit card), invoices, cost tracking.",
            },
            {
              name: "Security Features",
              description: "Tools like root user, MFA, initial password.",
            },
          ],
        },
        {
          name: "AWS Free Tier",
          description: "Free services and limits available to beginners.",
          children: [
            {
              name: "Free Services",
              description:
                "Options like EC2 (12 months), S3 (5 GB), SES (62,000 emails).",
            },
            {
              name: "Usage Limits",
              description:
                "Constraints like hours (750 EC2), storage (5 GB S3), requests (1M Lambda).",
            },
            {
              name: "Monitoring Tools",
              description:
                "Features like billing dashboard, usage alerts, Free Tier status.",
            },
            {
              name: "Cost Management Tools",
              description:
                "Features like cost explorer, cost allocation, Savings Plans.",
            },
          ],
        },
      ],
      dividerText: "install tools to use AWS.",
    },
    {
      name: " Installing AWS Tools",
      description:
        "Set up tools to interact with AWS, taught with a beginner’s guide to installing the AWS CLI and exploring the Console.",
      children: [
        {
          name: "AWS Command Line Interface (CLI)",
          description: "Command-line tool for AWS control.",
          children: [
            {
              name: "CLI Versions",
              description: "Options like CLI v1, CLI v2 for different systems.",
            },
            {
              name: "CLI Components",
              description:
                "Parts like commands (aws ec2), config files, profiles.",
            },
            {
              name: "CLI Features",
              description:
                "Functions like querying (aws s3 ls), managing (aws ecs list-clusters).",
            },
          ],
        },
        {
          name: "AWS Management Console",
          description: "Web interface for AWS management.",
          children: [
            {
              name: "Console Sections",
              description: "Areas like services, billing, account settings.",
            },
            {
              name: "Navigation Tools",
              description:
                "Features like search bar, region selector, favorites.",
            },
            {
              name: "Access Options",
              description: "Methods like web browser, mobile app.",
            },
          ],
        },
      ],
      dividerText: "run your first computer with EC2.",
    },
    {
      name: " Running Your First Computer with EC2",
      description:
        "Learn to use Amazon EC2 to run a virtual computer, taught with a beginner’s guide to launching an instance in the Console.",
      children: [
        {
          name: "EC2 Components",
          description: "Parts that make up an EC2 instance.",
          children: [
            {
              name: "Instance Types",
              description:
                "Options like t2.micro (free), m5.large (general), c5 (compute).",
            },
            {
              name: "AMIs",
              description: "Images like Amazon Linux, Ubuntu, Windows Server.",
            },
            {
              name: "Storage Options",
              description:
                "Types like EBS (hard drive), instance store (temp).",
            },
          ],
        },
        {
          name: "EC2 Features",
          description: "Capabilities within EC2.",
          children: [
            {
              name: "Networking",
              description: "Options like VPCs, public IPs, private IPs.",
            },
            {
              name: "Security",
              description: "Tools like security groups, key pairs.",
            },
            {
              name: "Monitoring",
              description: "Features like CloudWatch metrics, instance status.",
            },
          ],
        },
      ],
      dividerText: "store files with Amazon S3.",
    },
    {
      name: " Storing Files with Amazon S3",
      description:
        "Use Amazon S3 to store files in the cloud, taught with a beginner’s example of creating a bucket in the Console.",
      children: [
        {
          name: "S3 Storage Types",
          description: "Different storage options in S3.",
          children: [
            {
              name: "Storage Classes",
              description:
                "Options like Standard (frequent), Glacier (archive), Intelligent-Tiering.",
            },
            {
              name: "Data Types",
              description: "Items like objects (files), buckets (folders).",
            },
            {
              name: "Access Levels",
              description: "Settings like public, private, restricted.",
            },
          ],
        },
        {
          name: "S3 Features",
          description: "Tools and capabilities within S3.",
          children: [
            {
              name: "Versioning",
              description: "Options like enabled, disabled for file versions.",
            },
            {
              name: "Lifecycle Policies",
              description: "Rules like move to Glacier, delete after time.",
            },
            {
              name: "Encryption",
              description: "Types like SSE-S3, SSE-KMS for security.",
            },
          ],
        },
      ],
      dividerText: "set up a simple database with RDS.",
    },
    {
      name: " Setting Up a Simple Database with RDS",
      description:
        "Learn to use Amazon RDS for a beginner-friendly database, taught with a MySQL setup in the Console.",
      children: [
        {
          name: "RDS Database Types",
          description: "Different database options in RDS.",
          children: [
            {
              name: "Engines",
              description: "Options like MySQL, PostgreSQL, Aurora.",
            },
            {
              name: "Instance Classes",
              description: "Sizes like db.t3.micro (free), db.m5.large.",
            },
            {
              name: "Storage Types",
              description:
                "Choices like General Purpose SSD, Provisioned IOPS.",
            },
          ],
        },
        {
          name: "RDS Features",
          description: "Capabilities within RDS.",
          children: [
            {
              name: "Backups",
              description: "Options like automated, manual snapshots.",
            },
            {
              name: "Access Control",
              description: "Settings like VPC security groups, DB credentials.",
            },
            {
              name: "Scaling Options",
              description: "Features like read replicas, vertical scaling.",
            },
          ],
        },
      ],
      dividerText: "secure your AWS account with IAM.",
    },
    {
      name: " Securing Your AWS Account with IAM",
      description:
        "Protect your AWS account with Identity and Access Management (IAM), taught with a simple user setup in the Console.",
      children: [
        {
          name: "IAM Entities",
          description: "Types of access control in IAM.",
          children: [
            {
              name: "Users",
              description: "Individuals like you, admins, developers.",
            },
            {
              name: "Groups",
              description: "Collections like dev team, ops team.",
            },
            {
              name: "Roles",
              description: "Temporary access like EC2 role, Lambda role.",
            },
          ],
        },
        {
          name: "IAM Policies",
          description: "Rules defining permissions in IAM.",
          children: [
            {
              name: "Policy Types",
              description:
                "Options like AWS-managed, customer-managed, inline.",
            },
            {
              name: "Permission Levels",
              description:
                "Access like read-only, full access, specific actions.",
            },
            {
              name: "Resources",
              description: "Targets like S3 buckets, EC2 instances.",
            },
          ],
        },
      ],
      dividerText: "explore AWS networking with VPC.",
    },
    {
      name: " Exploring AWS Networking with VPC",
      description:
        "Set up a simple network with Amazon Virtual Private Cloud (VPC), taught with a beginner’s VPC example in the Console.",
      children: [
        {
          name: "VPC Components",
          description: "Parts that make up a VPC network.",
          children: [
            {
              name: "CIDR Blocks",
              description: "IP ranges like 10.0.0.0/16, 192.168.0.0/24.",
            },
            {
              name: "Subnets",
              description: "Sections like public subnet, private subnet.",
            },
            {
              name: "Route Tables",
              description: "Paths like internet routes, private routes.",
            },
          ],
        },
        {
          name: "VPC Networking Features",
          description: "Tools for network control and access.",
          children: [
            {
              name: "Security Groups",
              description: "Firewalls like inbound rules, outbound rules.",
            },
            {
              name: "Internet Gateway",
              description: "Connects like public internet access point.",
            },
            {
              name: "NAT Gateway",
              description: "Routes like private-to-internet access.",
            },
          ],
        },
      ],
      dividerText: "send emails with Amazon SES.",
    },
    {
      name: " Sending Emails with Amazon SES",
      description:
        "Learn to send emails using Amazon Simple Email Service (SES), taught with a beginner’s email example in the Console.",
      children: [
        {
          name: "SES Components",
          description: "Parts of SES for email sending.",
          children: [
            {
              name: "Email Types",
              description: "Options like transactional, promotional, bulk.",
            },
            {
              name: "Sender Identities",
              description: "Sources like email addresses, domains.",
            },
            {
              name: "Delivery Methods",
              description: "Channels like SMTP, API.",
            },
          ],
        },
        {
          name: "SES Features",
          description: "Capabilities within SES.",
          children: [
            {
              name: "Sending Limits",
              description: "Quotas like daily limit, rate limit.",
            },
            {
              name: "Reputation Tools",
              description: "Metrics like bounce rate, spam complaints.",
            },
            {
              name: "Monitoring",
              description: "Logs like delivery status, error reports.",
            },
          ],
        },
      ],
      dividerText: "run code without servers with Lambda.",
    },
    {
      name: " Running Code Without Servers with Lambda",
      description:
        "Explore serverless computing with AWS Lambda, taught with a beginner’s function example in the Console.",
      children: [
        {
          name: "Lambda Function Types",
          description: "Different ways Lambda can be used.",
          children: [
            {
              name: "Runtimes",
              description: "Languages like Python, Node.js, Java.",
            },
            {
              name: "Triggers",
              description: "Events like S3 upload, API call, schedule.",
            },
            {
              name: "Execution Models",
              description: "Modes like on-demand, provisioned concurrency.",
            },
          ],
        },
        {
          name: "Lambda Features",
          description: "Capabilities within Lambda.",
          children: [
            {
              name: "Memory Options",
              description: "Sizes like 128 MB, 512 MB, 1024 MB.",
            },
            {
              name: "Timeout Settings",
              description: "Limits like 15 seconds, 5 minutes.",
            },
            {
              name: "Logging",
              description: "Outputs like CloudWatch Logs, custom logs.",
            },
          ],
        },
      ],
      dividerText: "monitor resources with CloudWatch.",
    },
    {
      name: " Monitoring Resources with CloudWatch",
      description:
        "Learn to monitor AWS with Amazon CloudWatch, taught with a beginner’s EC2 monitoring example in the Console.",
      children: [
        {
          name: "CloudWatch Metrics",
          description: "Types of data CloudWatch tracks.",
          children: [
            {
              name: "Compute Metrics",
              description: "Measures like CPU usage, network in/out.",
            },
            {
              name: "Storage Metrics",
              description: "Stats like S3 requests, bytes stored.",
            },
            {
              name: "Custom Metrics",
              description: "User-defined like app-specific counters.",
            },
          ],
        },
        {
          name: "CloudWatch Tools",
          description: "Features for monitoring and alerting.",
          children: [
            {
              name: "Alarms",
              description: "Alerts like high CPU, low storage.",
            },
            {
              name: "Logs",
              description: "Records like Lambda logs, EC2 logs.",
            },
            {
              name: "Dashboards",
              description: "Views like metric graphs, summary widgets.",
            },
          ],
        },
      ],
      dividerText: "launch your first app with Elastic Beanstalk.",
    },
    {
      name: "Step 13: Launching Your First App with Elastic Beanstalk",
      description:
        "Deploy a simple app with AWS Elastic Beanstalk, taught with a beginner’s web app example in the Console.",
      children: [
        {
          name: "Elastic Beanstalk Environments",
          description: "Types of setups in Beanstalk.",
          children: [
            {
              name: "Platforms",
              description: "Options like Python, Node.js, Java.",
            },
            {
              name: "Environment Types",
              description: "Modes like single instance, load-balanced.",
            },
            {
              name: "Instance Types",
              description: "Sizes like t2.micro, t3.medium.",
            },
          ],
        },
        {
          name: "Beanstalk Features",
          description: "Capabilities for app management.",
          children: [
            {
              name: "Scaling Options",
              description: "Settings like auto-scaling, manual scaling.",
            },
            {
              name: "Health Monitoring",
              description: "Checks like green/yellow status, metrics.",
            },
            {
              name: "Logs",
              description: "Outputs like app logs, server logs.",
            },
          ],
        },
      ],
      dividerText: "store containers with Amazon ECR.",
    },
    {
      name: "Step 14: Storing Containers with Amazon ECR",
      description:
        "Learn to store Docker containers with Amazon Elastic Container Registry (ECR), taught with a beginner’s container push example.",
      children: [
        {
          name: "ECR Repository Types",
          description: "Different repository options in ECR.",
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
              description: "Locations like us-east-1, eu-west-1.",
            },
          ],
        },
        {
          name: "ECR Features",
          description: "Capabilities within ECR.",
          children: [
            { name: "Tagging", description: "Labels like latest, v1.0, dev." },
            {
              name: "Security",
              description: "Options like IAM policies, image scanning.",
            },
            {
              name: "Storage",
              description: "Features like versioning, lifecycle policies.",
            },
          ],
        },
      ],
      dividerText: "run containers with Amazon ECS.",
    },
    {
      name: " Running Containers with Amazon ECS",
      description:
        "Use Amazon Elastic Container Service (ECS) to run containers, taught with a beginner’s ECS task example.",
      children: [
        {
          name: "ECS Components",
          description: "Parts that make up ECS.",
          children: [
            {
              name: "Clusters",
              description: "Groups like default, custom clusters.",
            },
            {
              name: "Tasks",
              description:
                "Units like single container, multi-container tasks.",
            },
            {
              name: "Services",
              description: "Types like long-running, short-lived services.",
            },
          ],
        },
        {
          name: "ECS Features",
          description: "Capabilities within ECS.",
          children: [
            { name: "Launch Types", description: "Options like EC2, Fargate." },
            {
              name: "Networking",
              description: "Modes like bridge, host, awsvpc.",
            },
            {
              name: "Scaling",
              description: "Features like auto-scaling, manual scaling.",
            },
          ],
        },
      ],
      dividerText: "manage Kubernetes with Amazon EKS.",
    },
    {
      name: " Managing Kubernetes with Amazon EKS",
      description:
        "Learn to use Amazon Elastic Kubernetes Service (EKS) for container orchestration, taught with a beginner’s cluster setup.",
      children: [
        {
          name: "EKS Components",
          description: "Parts that make up EKS.",
          children: [
            {
              name: "Clusters",
              description: "Groups like managed control plane, worker nodes.",
            },
            {
              name: "Pods",
              description: "Units like single container, multi-container pods.",
            },
            {
              name: "Node Types",
              description: "Options like EC2 nodes, Fargate nodes.",
            },
          ],
        },
        {
          name: "EKS Features",
          description: "Capabilities within EKS.",
          children: [
            {
              name: "Networking",
              description: "Options like VPC CNI, Calico.",
            },
            {
              name: "Scaling",
              description:
                "Features like cluster autoscaler, horizontal pod autoscaler.",
            },
            {
              name: "Monitoring",
              description: "Tools like CloudWatch, Kubernetes dashboard.",
            },
          ],
        },
      ],
      dividerText: "manage DNS with Route 53.",
    },
    {
      name: " Managing DNS with Route 53",
      description:
        "Learn to manage domain names with Amazon Route 53, taught with a beginner’s DNS setup example.",
      children: [
        {
          name: "Route 53 Components",
          description: "Parts that make up Route 53.",
          children: [
            {
              name: "Hosted Zones",
              description: "Types like public, private zones.",
            },
            {
              name: "Record Types",
              description:
                "Options like A (address), CNAME (alias), MX (mail).",
            },
            {
              name: "Domains",
              description: "Sources like registered, transferred domains.",
            },
          ],
        },
        {
          name: "Route 53 Features",
          description: "Capabilities within Route 53.",
          children: [
            {
              name: "Routing Policies",
              description: "Options like simple, weighted, latency-based.",
            },
            {
              name: "Health Checks",
              description: "Types like endpoint, calculated health checks.",
            },
            {
              name: "DNS Services",
              description: "Features like DNSSEC, query logging.",
            },
          ],
        },
      ],
      dividerText: "scale resources with Auto Scaling.",
    },
    {
      name: " Scaling Resources with Auto Scaling",
      description:
        "Learn to automatically scale AWS resources with Auto Scaling, taught with a beginner’s EC2 scaling example.",
      children: [
        {
          name: "Auto Scaling Components",
          description: "Parts that make up Auto Scaling.",
          children: [
            {
              name: "Groups",
              description: "Collections like EC2 Auto Scaling groups.",
            },
            {
              name: "Launch Templates",
              description: "Configs like AMI, instance type.",
            },
            {
              name: "Scaling Targets",
              description: "Resources like EC2 instances, ECS tasks.",
            },
          ],
        },
        {
          name: "Auto Scaling Features",
          description: "Capabilities within Auto Scaling.",
          children: [
            {
              name: "Scaling Policies",
              description:
                "Types like target tracking, step scaling, scheduled.",
            },
            {
              name: "Metrics",
              description: "Triggers like CPU usage, request count.",
            },
            {
              name: "Health Checks",
              description: "Options like EC2 status, ELB health.",
            },
          ],
        },
      ],
      dividerText: "get ready for certification.",
    },
    {
      name: " Getting Ready for Certification",
      description:
        "Prepare for your first AWS certification, taught with beginner study tips for Cloud Practitioner.",
      children: [
        {
          name: "Certification Types",
          description: "AWS certification options for beginners.",
          children: [
            {
              name: "Cloud Practitioner",
              description: "Basic level like fundamentals, overview.",
            },
            {
              name: "Associate Levels",
              description: "Next steps like Solutions Architect, Developer.",
            },
            {
              name: "Specialty Tracks",
              description: "Advanced areas like ML, networking.",
            },
          ],
        },
        {
          name: "Study Resources",
          description: "Tools to help you learn.",
          children: [
            {
              name: "AWS Training",
              description: "Courses like free online, paid classes.",
            },
            {
              name: "Practice Exams",
              description: "Tests like sample questions, mock exams.",
            },
            {
              name: "Guides",
              description: "Docs like exam guide, whitepapers.",
            },
          ],
        },
      ],
      dividerText: "grow skills and join the community.",
    },
    {
      name: " Growing Skills and Joining the Community",
      description:
        "Build on your AWS knowledge and connect with others, taught with beginner-friendly growth ideas.",
      children: [
        {
          name: "Skill Growth Areas",
          description: "Ways to expand your AWS skills.",
          children: [
            {
              name: "More Services",
              description: "Tools like DynamoDB (NoSQL), ECS (containers).",
            },
            {
              name: "Project Ideas",
              description: "Apps like websites, data tools.",
            },
            {
              name: "Advanced Topics",
              description: "Areas like VPC design, serverless apps.",
            },
          ],
        },
        {
          name: "Community Options",
          description: "Places to connect and learn.",
          children: [
            {
              name: "Forums",
              description: "Sites like re:Post, Stack Overflow.",
            },
            {
              name: "Blogs",
              description: "Sources like AWS Blog, Medium posts.",
            },
            {
              name: "Events",
              description: "Meetings like re:Invent, local meetups.",
            },
          ],
        },
      ],
    },
  ],
};

export default awsDeveloperRoadmap;
