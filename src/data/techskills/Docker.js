const dockerRoadmap = {
  name: "Docker Developer Roadmap 2025",
  description:
    "This detailed roadmap provides a step-by-step guide to mastering Docker by 2025, from basic containerization to advanced orchestration and deployment. Covering core Docker concepts, images, containers, networking, Docker Compose, Kubernetes, CI/CD, and more, it’s enriched with nested subtopics and practical examples—taught with tools like Docker Desktop, VS Code, and Git—for hands-on learners aiming to excel in the 2025 Docker ecosystem.",
  children: [
    {
      name: " Prerequisites & Setup",
      description:
        "Set up the foundation for Docker learning with essential tools and concepts, taught with a simple container in Docker Desktop. This step ensures readiness for containerization in 2025.",
      children: [
        {
          name: "Basic Computer Skills",
          description:
            "Understand computing basics for Docker, taught with a terminal example.",
          children: [
            {
              name: "File Systems",
              description:
                "Navigate files, taught with dir (Windows) or ls (Unix).",
            },
            {
              name: "Terminal Basics",
              description:
                "Learn cd, ls, taught with a folder navigation example.",
            },
            {
              name: "Virtualization Basics",
              description:
                "Understand VMs, taught with a VM vs. container comparison.",
            },
          ],
        },
        {
          name: "Tools Setup",
          description:
            "Install and configure Docker tools, taught with a hello-world container.",
          children: [
            {
              name: "Docker Installation",
              description:
                "Install Docker Desktop, taught with docker --version check.",
            },
            {
              name: "VS Code",
              description:
                "Set up VS Code with Docker extension, taught with setup steps.",
            },
            {
              name: "Git",
              description: "Install Git, taught with git --version check.",
            },
            {
              name: "Practice Container",
              description:
                "Run docker run hello-world, taught with a terminal example.",
            },
          ],
        },
      ],
      dividerText: "start with Docker basics.",
    },
    {
      name: " Docker Core Basics",
      description:
        "Master foundational Docker concepts and commands, taught with a simple Node.js container in Docker Desktop. This step builds the essentials for 2025 containerization.",
      children: [
        {
          name: "What is Docker?",
          description:
            "Understand Docker and containers, taught with a basic container example.",
          children: [
            {
              name: "Containerization Overview",
              description:
                "Learn containers vs. VMs, taught with a diagram explanation.",
            },
            {
              name: "Docker Architecture",
              description:
                "Explore Docker Engine, taught with a Docker docs example.",
            },
            {
              name: "Benefits",
              description:
                "Understand portability, taught with a consistency example.",
            },
          ],
        },
        {
          name: "Basic Commands",
          description:
            "Use core Docker commands, taught with a Node.js container example.",
          children: [
            {
              name: "docker run",
              description:
                "Run containers, taught with docker run node example.",
            },
            {
              name: "docker ps",
              description: "List containers, taught with docker ps -a example.",
            },
            {
              name: "docker stop",
              description:
                "Stop containers, taught with docker stop <id> example.",
            },
          ],
        },
        {
          name: "Images vs. Containers",
          description:
            "Differentiate images and containers, taught with a pull/run example.",
          children: [
            {
              name: "Docker Images",
              description: "Pull images, taught with docker pull node example.",
            },
            {
              name: "Running Containers",
              description:
                "Start containers, taught with docker run node example.",
            },
            {
              name: "Image Layers",
              description:
                "Understand layers, taught with docker history example.",
            },
          ],
        },
      ],
      dividerText: "move to creating Docker images.",
    },
    {
      name: " Creating Docker Images",
      description:
        "Learn to create custom Docker images, taught with a Node.js app Dockerfile in VS Code. This step enhances image-building skills for 2025.",
      children: [
        {
          name: "Dockerfile Basics",
          description:
            "Write Dockerfiles, taught with a simple Node.js Dockerfile example.",
          children: [
            {
              name: "FROM Instruction",
              description: "Base image, taught with FROM node:18 example.",
            },
            {
              name: "WORKDIR",
              description: "Set directory, taught with WORKDIR /app example.",
            },
            {
              name: "COPY and RUN",
              description:
                "Copy files, run cmds, taught with COPY . . example.",
            },
          ],
        },
        {
          name: "Building Images",
          description: "Build images, taught with a docker build example.",
          children: [
            {
              name: "docker build",
              description: "Build image, taught with docker build -t myapp .",
            },
            {
              name: "Tagging",
              description: "Tag images, taught with -t myapp:1.0 example.",
            },
            {
              name: "Inspecting Images",
              description: "View image, taught with docker images example.",
            },
          ],
        },
        {
          name: "Running Custom Images",
          description:
            "Run custom images, taught with a container start example.",
          children: [
            {
              name: "Run Command",
              description: "Start container, taught with docker run myapp.",
            },
            {
              name: "Port Mapping",
              description: "Map ports, taught with -p 3000:3000 example.",
            },
            {
              name: "Detached Mode",
              description: "Run in bg, taught with -d flag example.",
            },
          ],
        },
      ],
      dividerText: "explore container management.",
    },
    {
      name: " Container Management",
      description:
        "Manage Docker containers effectively, taught with a Node.js app in Docker Desktop. This step prepares for container operations in 2025.",
      children: [
        {
          name: "Container Lifecycle",
          description: "Control containers, taught with start/stop examples.",
          children: [
            {
              name: "Start/Stop",
              description:
                "Manage state, taught with docker start/stop example.",
            },
            {
              name: "Restart",
              description:
                "Restart container, taught with docker restart example.",
            },
            {
              name: "Remove",
              description: "Delete container, taught with docker rm example.",
            },
          ],
        },
        {
          name: "Logs and Monitoring",
          description: "Monitor containers, taught with a log view example.",
          children: [
            {
              name: "docker logs",
              description: "View logs, taught with docker logs <id> example.",
            },
            {
              name: "docker inspect",
              description:
                "Inspect details, taught with docker inspect example.",
            },
            {
              name: "docker stats",
              description: "Monitor usage, taught with docker stats example.",
            },
          ],
        },
        {
          name: "Interacting with Containers",
          description:
            "Interact with running containers, taught with an exec example.",
          children: [
            {
              name: "docker exec",
              description: "Run commands, taught with docker exec -it bash.",
            },
            {
              name: "Shell Access",
              description: "Access shell, taught with a bash entry example.",
            },
            {
              name: "File Transfer",
              description: "Copy files, taught with docker cp example.",
            },
          ],
        },
      ],
      dividerText: "learn Docker networking.",
    },
    {
      name: " Docker Networking",
      description:
        "Master Docker networking, taught with a multi-container app in Docker Desktop. This step enables 2025 container communication.",
      children: [
        {
          name: "Network Types",
          description:
            "Understand network modes, taught with a bridge example.",
          children: [
            {
              name: "Bridge Network",
              description:
                "Default network, taught with docker network ls example.",
            },
            {
              name: "Host Network",
              description: "Use host, taught with --network host example.",
            },
            {
              name: "None Network",
              description:
                "Isolate container, taught with --network none example.",
            },
          ],
        },
        {
          name: "Custom Networks",
          description:
            "Create custom networks, taught with a network setup example.",
          children: [
            {
              name: "Create Network",
              description:
                "Make network, taught with docker network create example.",
            },
            {
              name: "Connect Containers",
              description:
                "Link containers, taught with --network mynet example.",
            },
            {
              name: "Inspect Network",
              description:
                "View network, taught with docker network inspect example.",
            },
          ],
        },
        {
          name: "Container Communication",
          description: "Enable container talk, taught with a ping example.",
          children: [
            {
              name: "Name Resolution",
              description:
                "Use names, taught with a container name ping example.",
            },
            {
              name: "Port Exposure",
              description: "Expose ports, taught with a -p mapping example.",
            },
            {
              name: "Linking (Legacy)",
              description: "Understand linking, taught with a --link example.",
            },
          ],
        },
      ],
      dividerText: "manage volumes and storage.",
    },
    {
      name: " Volumes and Storage",
      description:
        "Handle Docker storage with volumes, taught with a database container in Docker Desktop. This step ensures 2025 data persistence.",
      children: [
        {
          name: "Bind Mounts",
          description: "Use bind mounts, taught with a local folder example.",
          children: [
            {
              name: "Mount Local Dir",
              description:
                "Mount dir, taught with -v /local:/container example.",
            },
            {
              name: "Read-Only Mount",
              description:
                "Set read-only, taught with -v /local:/container:ro example.",
            },
            {
              name: "Verify Mount",
              description: "Check mount, taught with docker inspect example.",
            },
          ],
        },
        {
          name: "Volumes",
          description:
            "Create Docker volumes, taught with a volume creation example.",
          children: [
            {
              name: "Create Volume",
              description:
                "Make volume, taught with docker volume create example.",
            },
            {
              name: "Use Volume",
              description: "Mount volume, taught with -v myvol:/data example.",
            },
            {
              name: "Manage Volumes",
              description:
                "List/remove, taught with docker volume ls/rm example.",
            },
          ],
        },
        {
          name: "Persistent Data",
          description: "Persist data, taught with a MySQL volume example.",
          children: [
            {
              name: "Database Persistence",
              description: "Persist DB, taught with a mysql -v example.",
            },
            {
              name: "Backup Volumes",
              description: "Backup data, taught with a tar backup example.",
            },
            {
              name: "Restore Volumes",
              description: "Restore data, taught with a tar restore example.",
            },
          ],
        },
      ],
      dividerText: "use Docker Compose.",
    },
    {
      name: " Docker Compose",
      description:
        "Orchestrate multi-container apps with Docker Compose, taught with a Node.js and MongoDB app in VS Code. This step simplifies 2025 app management.",
      children: [
        {
          name: "Compose Basics",
          description:
            "Understand Compose, taught with a basic compose file example.",
          children: [
            {
              name: "Install Compose",
              description:
                "Install Compose, taught with docker-compose --version.",
            },
            {
              name: "docker-compose.yml",
              description: "Write file, taught with a services example.",
            },
            {
              name: "Services",
              description:
                "Define services, taught with a node service example.",
            },
          ],
        },
        {
          name: "Running Compose",
          description:
            "Run Compose apps, taught with a docker-compose up example.",
          children: [
            {
              name: "Up Command",
              description:
                "Start app, taught with docker-compose up -d example.",
            },
            {
              name: "Down Command",
              description: "Stop app, taught with docker-compose down example.",
            },
            {
              name: "Logs",
              description:
                "View logs, taught with docker-compose logs example.",
            },
          ],
        },
        {
          name: "Networking in Compose",
          description:
            "Manage networks, taught with a compose network example.",
          children: [
            {
              name: "Default Network",
              description: "Use default, taught with a service link example.",
            },
            {
              name: "Custom Network",
              description:
                "Define network, taught with a networks section example.",
            },
            {
              name: "Service Communication",
              description: "Link services, taught with a ping example.",
            },
          ],
        },
      ],
      dividerText: "push images to registries.",
    },
    {
      name: " Docker Registries",
      description:
        "Work with Docker registries, taught with a push to Docker Hub in VS Code. This step enables 2025 image sharing.",
      children: [
        {
          name: "Docker Hub",
          description: "Use Docker Hub, taught with a login/push example.",
          children: [
            {
              name: "Login",
              description: "Log in, taught with docker login example.",
            },
            {
              name: "Tag Image",
              description:
                "Tag for Hub, taught with docker tag myapp:user/myapp.",
            },
            {
              name: "Push Image",
              description: "Push to Hub, taught with docker push user/myapp.",
            },
          ],
        },
        {
          name: "Private Registries",
          description:
            "Set up private registries, taught with a local registry example.",
          children: [
            {
              name: "Run Registry",
              description: "Start registry, taught with docker run registry:2.",
            },
            {
              name: "Push to Private",
              description: "Push image, taught with a localhost push example.",
            },
            {
              name: "Pull from Private",
              description: "Pull image, taught with a localhost pull example.",
            },
          ],
        },
      ],
      dividerText: "secure Docker.",
    },
    {
      name: " Docker Security",
      description:
        "Secure Docker containers, taught with a hardened Node.js app in Docker Desktop. This step protects 2025 deployments.",
      children: [
        {
          name: "Image Security",
          description: "Secure images, taught with a scan example.",
          children: [
            {
              name: "Scan Images",
              description: "Scan for vulns, taught with docker scan myapp.",
            },
            {
              name: "Trusted Base Images",
              description:
                "Use official, taught with FROM node:18-slim example.",
            },
            {
              name: "Minimize Layers",
              description: "Reduce layers, taught with a multi-stage example.",
            },
          ],
        },
        {
          name: "Container Security",
          description:
            "Secure containers, taught with a capability drop example.",
          children: [
            {
              name: "Run as Non-Root",
              description: "Use USER, taught with USER node in Dockerfile.",
            },
            {
              name: "Limit Privileges",
              description: "Drop caps, taught with --cap-drop example.",
            },
            {
              name: "Read-Only Filesystem",
              description: "Set read-only, taught with --read-only example.",
            },
          ],
        },
      ],
      dividerText: "test Docker apps.",
    },
    {
      name: " Testing with Docker",
      description:
        "Test Dockerized apps, taught with a Node.js test suite in VS Code. This step ensures 2025 quality.",
      children: [
        {
          name: "Unit Testing",
          description: "Test in containers, taught with a Jest test example.",
          children: [
            {
              name: "Dockerfile for Tests",
              description: "Write test file, taught with a test stage example.",
            },
            {
              name: "Run Tests",
              description: "Execute tests, taught with docker run test-image.",
            },
            {
              name: "Dependencies",
              description: "Install test deps, taught with npm install jest.",
            },
          ],
        },
        {
          name: "Integration Testing",
          description:
            "Test with Compose, taught with a multi-service example.",
          children: [
            {
              name: "Compose Test Setup",
              description: "Write compose, taught with a test service example.",
            },
            {
              name: "Run Integration",
              description: "Test app, taught with docker-compose up test.",
            },
            {
              name: "Cleanup",
              description: "Remove test env, taught with docker-compose down.",
            },
          ],
        },
      ],
      dividerText: "orchestrate with Kubernetes.",
    },
    {
      name: " Orchestration with Kubernetes",
      description:
        "Learn Kubernetes for orchestration, taught with a Node.js app in minikube. This step scales for 2025.",
      children: [
        {
          name: "Kubernetes Basics",
          description: "Understand Kubernetes, taught with a pod example.",
          children: [
            {
              name: "Install Minikube",
              description: "Set up minikube, taught with minikube start.",
            },
            {
              name: "Pods",
              description: "Define pods, taught with a pod.yaml example.",
            },
            {
              name: "kubectl",
              description: "Use kubectl, taught with kubectl apply example.",
            },
          ],
        },
        {
          name: "Deployments",
          description: "Manage deployments, taught with a deployment example.",
          children: [
            {
              name: "Create Deployment",
              description: "Deploy app, taught with a deployment.yaml example.",
            },
            {
              name: "Scale Deployment",
              description: "Scale pods, taught with kubectl scale example.",
            },
            {
              name: "Rolling Updates",
              description: "Update app, taught with kubectl set image example.",
            },
          ],
        },
        {
          name: "Services",
          description: "Expose services, taught with a service example.",
          children: [
            {
              name: "ClusterIP",
              description: "Internal access, taught with a ClusterIP example.",
            },
            {
              name: "NodePort",
              description: "Expose port, taught with a NodePort example.",
            },
            {
              name: "LoadBalancer",
              description:
                "External access, taught with a LoadBalancer example.",
            },
          ],
        },
      ],
      dividerText: "integrate CI/CD.",
    },
    {
      name: " CI/CD with Docker",
      description:
        "Integrate Docker with CI/CD, taught with a GitHub Actions workflow in VS Code. This step automates 2025 deployments.",
      children: [
        {
          name: "GitHub Actions",
          description:
            "Set up CI/CD, taught with a build/push workflow example.",
          children: [
            {
              name: "Workflow File",
              description:
                "Write .yml, taught with a .github/workflows example.",
            },
            {
              name: "Build Image",
              description: "Build in CI, taught with a docker build step.",
            },
            {
              name: "Push to Registry",
              description: "Push image, taught with a docker push step.",
            },
          ],
        },
        {
          name: "Testing in CI",
          description: "Test in pipeline, taught with a test stage example.",
          children: [
            {
              name: "Test Stage",
              description: "Add test, taught with a run jest step.",
            },
            {
              name: "Multi-Stage",
              description: "Test/build, taught with a multi-job example.",
            },
            {
              name: "Artifacts",
              description: "Save logs, taught with an artifact upload example.",
            },
          ],
        },
      ],
      dividerText: "optimize and manage Docker.",
    },
    {
      name: " Optimization and Management",
      description:
        "Optimize and manage Docker environments, taught with a multi-container app in Docker Desktop. This step ensures 2025 efficiency.",
      children: [
        {
          name: "Resource Management",
          description: "Manage resources, taught with a limit example.",
          children: [
            {
              name: "CPU Limits",
              description: "Set CPU, taught with --cpus example.",
            },
            {
              name: "Memory Limits",
              description: "Set memory, taught with --memory example.",
            },
            {
              name: "Resource Monitoring",
              description: "Monitor usage, taught with docker stats example.",
            },
          ],
        },
        {
          name: "Cleanup",
          description: "Clean Docker, taught with a prune example.",
          children: [
            {
              name: "Remove Unused Images",
              description: "Prune images, taught with docker image prune.",
            },
            {
              name: "Remove Stopped Containers",
              description:
                "Prune containers, taught with docker container prune.",
            },
            {
              name: "System Cleanup",
              description: "Full cleanup, taught with docker system prune.",
            },
          ],
        },
      ],
      dividerText: "specialize and contribute.",
    },
    {
      name: " Specialization and Contribution",
      description:
        "Specialize and contribute to Docker, taught with a custom image and GitHub PR. This step elevates 2025 expertise.",
      children: [
        {
          name: "Specialization",
          description:
            "Focus on Docker niches, taught with a microservices example.",
          children: [
            {
              name: "Microservices",
              description:
                "Build microservices, taught with a Compose example.",
            },
            {
              name: "Serverless",
              description:
                "Use Docker with FaaS, taught with a Knative example.",
            },
            {
              name: "DevOps",
              description: "Integrate DevOps, taught with a Jenkins example.",
            },
          ],
        },
        {
          name: "Contribute to Open Source",
          description:
            "Contribute to Docker projects, taught with a PR to Docker.",
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
      name: " Continuous Learning",
      description:
        "Stay updated in 2025, taught with resources like Docker docs and X posts.",
      children: [
        {
          name: "Documentation",
          description: "Use Docker docs, taught with a feature dive example.",
        },
        {
          name: "Communities",
          description: "Join Reddit, taught with a Docker subreddit example.",
        },
        {
          name: "Trends",
          description: "Follow X, taught with Docker trend tracking tips.",
        },
      ],
    },
  ],
};

export default dockerRoadmap;
