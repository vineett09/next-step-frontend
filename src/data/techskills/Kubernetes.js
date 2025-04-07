const kubernetesRoadmap = {
  name: "Kubernetes Developer Roadmap 2025",
  children: [
    {
      name: "Prerequisites & Setup",
      children: [
        {
          name: "Docker Basics",
          children: [
            { name: "Containers" },
            { name: "Images" },
            { name: "Docker Commands" },
          ],
        },
        {
          name: "Basics",
          children: [
            { name: "Linux Basics" },
            { name: "Networking Basics" },
            { name: "Yaml files" },
          ],
        },
        {
          name: "Tools Setup",
          children: [
            { name: "Minikube Installation" },
            { name: "kubectl" },
            { name: "VS Code" },
            { name: "Practice Cluster" },
          ],
        },
      ],
      dividerText: "start with Kubernetes basics.",
    },
    {
      name: "Kubernetes Core Basics",
      children: [
        {
          name: "What is Kubernetes?",
          children: [
            { name: "Orchestration Overview" },
            { name: "Architecture" },
            { name: "Benefits" },
          ],
        },
        {
          name: "Basic Commands",
          children: [
            { name: "kubectl get" },
            { name: "kubectl apply" },
            { name: "kubectl delete" },
          ],
        },
        {
          name: "Pods",
          children: [
            { name: "Pod Definition" },
            { name: "Pod Creation" },
            { name: "Pod Inspection" },
          ],
        },
      ],
      dividerText: "move to deployments and replicas.",
    },
    {
      name: "Deployments and Replicas",
      children: [
        {
          name: "Deployments",
          children: [
            { name: "Deployment YAML" },
            { name: "Create Deployment" },
            { name: "Rolling Updates" },
          ],
        },
        {
          name: "ReplicaSets",
          children: [
            { name: "ReplicaSet Role" },
            { name: "Scaling" },
            { name: "Inspect Replicas" },
          ],
        },
        {
          name: "Rollbacks",
          children: [
            { name: "History" },
            { name: "Rollback" },
            { name: "Status" },
          ],
        },
      ],
      dividerText: "explore services and networking.",
    },
    {
      name: "Services and Networking",
      children: [
        {
          name: "Services",
          children: [
            { name: "ClusterIP" },
            { name: "NodePort" },
            { name: "LoadBalancer" },
          ],
        },
        {
          name: "Networking Basics",
          children: [
            { name: "Pod Networking" },
            { name: "DNS" },
            { name: "Network Policies" },
          ],
        },
        {
          name: "Ingress",
          children: [
            { name: "Ingress Controller" },
            { name: "Ingress Resource" },
            { name: "Path Routing" },
          ],
        },
      ],
      dividerText: "manage storage in Kubernetes.",
    },
    {
      name: "Storage in Kubernetes",
      children: [
        {
          name: "Volumes",
          children: [
            { name: "EmptyDir" },
            { name: "HostPath" },
            { name: "Volume Mount" },
          ],
        },
        {
          name: "Persistent Volumes (PV)",
          children: [
            { name: "PV Creation" },
            { name: "PV Claim" },
            { name: "Inspect PV" },
          ],
        },
        {
          name: "Storage Classes",
          children: [
            { name: "Define StorageClass" },
            { name: "Use StorageClass" },
            { name: "Dynamic Provisioning" },
          ],
        },
      ],
      dividerText: "configure and manage resources.",
    },
    {
      name: "Configuration and Resource Management",
      children: [
        {
          name: "ConfigMaps",
          children: [
            { name: "Create ConfigMap" },
            { name: "Use ConfigMap" },
            { name: "Update Config" },
          ],
        },
        {
          name: "Secrets",
          children: [
            { name: "Create Secret" },
            { name: "Use Secret" },
            { name: "Base64 Encoding" },
          ],
        },
        {
          name: "Resource Limits",
          children: [
            { name: "CPU Limits" },
            { name: "Memory Limits" },
            { name: "Requests" },
          ],
        },
      ],
      dividerText: "monitor and log Kubernetes.",
    },
    {
      name: "Monitoring and Logging",
      children: [
        {
          name: "Logging",
          children: [
            { name: "kubectl logs" },
            { name: "Multi-Container Logs" },
            { name: "Tail Logs" },
          ],
        },
        {
          name: "Monitoring",
          children: [
            { name: "Metrics Server" },
            { name: "kubectl top" },
            { name: "Events" },
          ],
        },
      ],
      dividerText: "secure Kubernetes.",
    },
    {
      name: "Kubernetes Security",
      children: [
        {
          name: "RBAC",
          children: [
            { name: "Roles" },
            { name: "RoleBindings" },
            { name: "ClusterRoles" },
          ],
        },
        {
          name: "Pod Security",
          children: [
            { name: "RunAsNonRoot" },
            { name: "Privileged" },
            { name: "PodSecurityPolicy" },
          ],
        },
        {
          name: "Network Policies",
          children: [
            { name: "Define Policy" },
            { name: "Ingress/Egress" },
            { name: "Apply Policy" },
          ],
        },
      ],
      dividerText: "test Kubernetes apps.",
    },
    {
      name: "Testing Kubernetes",
      children: [
        {
          name: "Unit Testing",
          children: [
            { name: "Local Test" },
            { name: "Kubernetes Context" },
            { name: "Dependencies" },
          ],
        },
        {
          name: "Integration Testing",
          children: [
            { name: "Test Pod" },
            { name: "Service Testing" },
            { name: "Cleanup" },
          ],
        },
      ],
      dividerText: "use Helm for package management.",
    },
    {
      name: "Helm Package Management",
      children: [
        {
          name: "Helm Basics",
          children: [
            { name: "Install Helm" },
            { name: "Helm Charts" },
            { name: "Repositories" },
          ],
        },
        {
          name: "Using Helm Charts",
          children: [
            { name: "Install Chart" },
            { name: "Upgrade Chart" },
            { name: "Uninstall Chart" },
          ],
        },
        {
          name: "Custom Charts",
          children: [
            { name: "Chart Creation" },
            { name: "Values.yaml" },
            { name: "Package Chart" },
          ],
        },
      ],
      dividerText: "integrate CI/CD.",
    },
    {
      name: "CI/CD with Kubernetes",
      children: [
        {
          name: "GitHub Actions",
          children: [
            { name: "Workflow File" },
            { name: "Build Image" },
            { name: "Deploy to Kubernetes" },
          ],
        },
        {
          name: "Testing in CI",
          children: [
            { name: "Test Stage" },
            { name: "Cluster Testing" },
            { name: "Artifacts" },
          ],
        },
      ],
      dividerText: "explore advanced Kubernetes.",
    },
    {
      name: "Advanced Kubernetes",
      children: [
        {
          name: "StatefulSets",
          children: [
            { name: "StatefulSet YAML" },
            { name: "Deploy StatefulSet" },
            { name: "Headless Service" },
          ],
        },
        {
          name: "DaemonSets",
          children: [
            { name: "DaemonSet YAML" },
            { name: "Deploy DaemonSet" },
            { name: "Use Cases" },
          ],
        },
        {
          name: "Custom Resources (CRDs)",
          children: [
            { name: "Define CRD" },
            { name: "Custom Object" },
            { name: "Operators" },
          ],
        },
      ],
      dividerText: "administer Kubernetes clusters.",
    },
    {
      name: "Cluster Administration",
      children: [
        {
          name: "Cluster Setup",
          children: [
            { name: "Multi-Node Minikube" },
            { name: "Cluster Info" },
            { name: "Node Management" },
          ],
        },
        {
          name: "Upgrades",
          children: [
            { name: "Check Version" },
            { name: "Upgrade Cluster" },
            { name: "Drain Nodes" },
          ],
        },
        {
          name: "Backup and Recovery",
          children: [
            { name: "Backup Resources" },
            { name: "Etcd Backup" },
            { name: "Restore" },
          ],
        },
      ],
      dividerText: "optimize and scale Kubernetes.",
    },
    {
      name: "Optimization and Scaling",
      children: [
        {
          name: "Horizontal Pod Autoscaler (HPA)",
          children: [
            { name: "Define HPA" },
            { name: "Metrics" },
            { name: "Apply HPA" },
          ],
        },
        {
          name: "Cluster Autoscaler",
          children: [
            { name: "Enable Autoscaler" },
            { name: "Scale Nodes" },
            { name: "Monitor Scaling" },
          ],
        },
        {
          name: "Performance Tuning",
          children: [
            { name: "Limit Ranges" },
            { name: "QoS Classes" },
            { name: "Profiling" },
          ],
        },
      ],
      dividerText: "specialize and contribute.",
    },
    {
      name: "Specialization and Contribution",
      children: [
        {
          name: "Specialization",
          children: [
            { name: "Serverless" },
            { name: "Service Mesh" },
            { name: "Big Data" },
          ],
        },
        {
          name: "Contribute to Open Source",
          children: [
            { name: "Find Projects" },
            { name: "Fork & Clone" },
            { name: "Submit PR" },
          ],
        },
        {
          name: "Continuous Learning",
          children: [
            { name: "Documentation" },
            { name: "Communities" },
            { name: "Trends" },
          ],
        },
      ],
    },
  ],
};

export default kubernetesRoadmap;
