const dockerRoadmap = {
  name: "Docker Developer Roadmap 2025",
  children: [
    {
      name: " Prerequisites & Setup",
      children: [
        {
          name: "Basic Computer Skills",
          children: [
            {
              name: "File Systems",
            },
            {
              name: "Terminal Basics",
            },
            {
              name: "Virtualization Basics",
            },
          ],
        },
        {
          name: "Tools Setup",
          children: [
            {
              name: "Docker Installation",
            },
            {
              name: "VS Code",
            },
            {
              name: "Git",
            },
            {
              name: "Practice Container",
            },
          ],
        },
      ],
      dividerText: "start with Docker basics.",
    },
    {
      name: " Docker Core Basics",
      children: [
        {
          name: "What is Docker?",
          children: [
            {
              name: "Containerization Overview",
            },
            {
              name: "Docker Architecture",
            },
            {
              name: "Benefits",
            },
          ],
        },
        {
          name: "Basic Commands",
          children: [
            {
              name: "docker run",
            },
            {
              name: "docker ps",
            },
            {
              name: "docker stop",
            },
          ],
        },
        {
          name: "Images vs. Containers",
          children: [
            {
              name: "Docker Images",
            },
            {
              name: "Running Containers",
            },
            {
              name: "Image Layers",
            },
          ],
        },
      ],
      dividerText: "move to creating Docker images.",
    },
    {
      name: " Creating Docker Images",
      children: [
        {
          name: "Dockerfile Basics",
          children: [
            {
              name: "FROM Instruction",
            },
            {
              name: "WORKDIR",
            },
            {
              name: "COPY and RUN",
            },
          ],
        },
        {
          name: "Building Images",
          children: [
            {
              name: "docker build",
            },
            {
              name: "Tagging",
            },
            {
              name: "Inspecting Images",
            },
          ],
        },
        {
          name: "Running Custom Images",
          children: [
            {
              name: "Run Command",
            },
            {
              name: "Port Mapping",
            },
            {
              name: "Detached Mode",
            },
          ],
        },
      ],
      dividerText: "explore container management.",
    },
    {
      name: " Container Management",
      children: [
        {
          name: "Container Lifecycle",
          children: [
            {
              name: "Start/Stop",
            },
            {
              name: "Restart",
            },
            {
              name: "Remove",
            },
          ],
        },
        {
          name: "Logs and Monitoring",
          children: [
            {
              name: "docker logs",
            },
            {
              name: "docker inspect",
            },
            {
              name: "docker stats",
            },
          ],
        },
        {
          name: "Interacting with Containers",
          children: [
            {
              name: "docker exec",
            },
            {
              name: "Shell Access",
            },
            {
              name: "File Transfer",
            },
          ],
        },
      ],
      dividerText: "learn Docker networking.",
    },
    {
      name: " Docker Networking",
      children: [
        {
          name: "Network Types",
          children: [
            {
              name: "Bridge Network",
            },
            {
              name: "Host Network",
            },
            {
              name: "None Network",
            },
          ],
        },
        {
          name: "Custom Networks",
          children: [
            {
              name: "Create Network",
            },
            {
              name: "Connect Containers",
            },
            {
              name: "Inspect Network",
            },
          ],
        },
        {
          name: "Container Communication",
          children: [
            {
              name: "Name Resolution",
            },
            {
              name: "Port Exposure",
            },
            {
              name: "Linking (Legacy)",
            },
          ],
        },
      ],
      dividerText: "manage volumes and storage.",
    },
    {
      name: " Volumes and Storage",
      children: [
        {
          name: "Bind Mounts",
          children: [
            {
              name: "Mount Local Dir",
            },
            {
              name: "Read-Only Mount",
            },
            {
              name: "Verify Mount",
            },
          ],
        },
        {
          name: "Volumes",
          children: [
            {
              name: "Create Volume",
            },
            {
              name: "Use Volume",
            },
            {
              name: "Manage Volumes",
            },
          ],
        },
        {
          name: "Persistent Data",
          children: [
            {
              name: "Database Persistence",
            },
            {
              name: "Backup Volumes",
            },
            {
              name: "Restore Volumes",
            },
          ],
        },
      ],
      dividerText: "use Docker Compose.",
    },
    {
      name: " Docker Compose",
      children: [
        {
          name: "Compose Basics",
          children: [
            {
              name: "Install Compose",
            },
            {
              name: "docker-compose.yml",
            },
            {
              name: "Services",
            },
          ],
        },
        {
          name: "Running Compose",
          children: [
            {
              name: "Up Command",
            },
            {
              name: "Down Command",
            },
            {
              name: "Logs",
            },
          ],
        },
        {
          name: "Networking in Compose",
          children: [
            {
              name: "Default Network",
            },
            {
              name: "Custom Network",
            },
            {
              name: "Service Communication",
            },
          ],
        },
      ],
      dividerText: "push images to registries.",
    },
    {
      name: " Docker Registries",
      children: [
        {
          name: "Docker Hub",
          children: [
            {
              name: "Login",
            },
            {
              name: "Tag Image",
            },
            {
              name: "Push Image",
            },
          ],
        },
        {
          name: "Private Registries",
          children: [
            {
              name: "Run Registry",
            },
            {
              name: "Push to Private",
            },
            {
              name: "Pull from Private",
            },
          ],
        },
      ],
      dividerText: "secure Docker.",
    },
    {
      name: " Docker Security",
      children: [
        {
          name: "Image Security",
          children: [
            {
              name: "Scan Images",
            },
            {
              name: "Trusted Base Images",
            },
            {
              name: "Minimize Layers",
            },
          ],
        },
        {
          name: "Container Security",
          children: [
            {
              name: "Run as Non-Root",
            },
            {
              name: "Limit Privileges",
            },
            {
              name: "Read-Only Filesystem",
            },
          ],
        },
      ],
      dividerText: "test Docker apps.",
    },
    {
      name: " Testing with Docker",
      children: [
        {
          name: "Unit Testing",
          children: [
            {
              name: "Dockerfile for Tests",
            },
            {
              name: "Run Tests",
            },
            {
              name: "Dependencies",
            },
          ],
        },
        {
          name: "Integration Testing",
          children: [
            {
              name: "Compose Test Setup",
            },
            {
              name: "Run Integration",
            },
            {
              name: "Cleanup",
            },
          ],
        },
      ],
      dividerText: "orchestrate with Kubernetes.",
    },
    {
      name: " Orchestration with Kubernetes",
      children: [
        {
          name: "Kubernetes Basics",
          children: [
            {
              name: "Install Minikube",
            },
            {
              name: "Pods",
            },
            {
              name: "kubectl",
            },
          ],
        },
        {
          name: "Deployments",
          children: [
            {
              name: "Create Deployment",
            },
            {
              name: "Scale Deployment",
            },
            {
              name: "Rolling Updates",
            },
          ],
        },
        {
          name: "Services",
          children: [
            {
              name: "ClusterIP",
            },
            {
              name: "NodePort",
            },
            {
              name: "LoadBalancer",
            },
          ],
        },
      ],
      dividerText: "integrate CI/CD.",
    },
    {
      name: " CI/CD with Docker",
      children: [
        {
          name: "GitHub Actions",
          children: [
            {
              name: "Workflow File",
            },
            {
              name: "Build Image",
            },
            {
              name: "Push to Registry",
            },
          ],
        },
        {
          name: "Testing in CI",
          children: [
            {
              name: "Test Stage",
            },
            {
              name: "Multi-Stage",
            },
            {
              name: "Artifacts",
            },
          ],
        },
      ],
      dividerText: "optimize and manage Docker.",
    },
    {
      name: " Optimization and Management",
      children: [
        {
          name: "Resource Management",
          children: [
            {
              name: "CPU Limits",
            },
            {
              name: "Memory Limits",
            },
            {
              name: "Resource Monitoring",
            },
          ],
        },
        {
          name: "Cleanup",
          children: [
            {
              name: "Remove Unused Images",
            },
            {
              name: "Remove Stopped Containers",
            },
            {
              name: "System Cleanup",
            },
          ],
        },
      ],
      dividerText: "specialize and contribute.",
    },
    {
      name: " Specialization and Contribution",
      children: [
        {
          name: "Specialization",
          children: [
            {
              name: "Microservices",
            },
            {
              name: "Serverless",
            },
            {
              name: "DevOps",
            },
          ],
        },
        {
          name: "Contribute to Open Source",
          children: [
            {
              name: "Find Projects",
            },
            {
              name: "Fork & Clone",
            },
            {
              name: "Submit PR",
            },
          ],
        },
      ],
      dividerText: "commit to continuous learning.",
    },
    {
      name: " Continuous Learning",
      children: [
        {
          name: "Documentation",
        },
        {
          name: "Communities",
        },
        {
          name: "Trends",
        },
      ],
    },
  ],
};

export default dockerRoadmap;
