const kubernetesRoadmap = {
  name: "Kubernetes Developer Roadmap 2025",
  description:
    "This detailed roadmap provides a step-by-step guide to mastering Kubernetes by 2025, from basic orchestration concepts to advanced cluster management. Covering core Kubernetes concepts, pods, deployments, services, networking, storage, CI/CD, custom resources, and more, it’s enriched with nested subtopics and practical examples—taught with tools like minikube, kubectl, and Helm—for hands-on learners aiming to excel in the 2025 Kubernetes ecosystem.",
  children: [
    {
      name: " Prerequisites & Setup",
      description:
        "Set up the foundation for Kubernetes learning with essential tools and concepts, taught with a simple pod in minikube. This step ensures readiness for orchestration in 2025.",
      children: [
        {
          name: "Docker Basics",
          description:
            "Understand Docker for Kubernetes, taught with a container example.",
          children: [
            {
              name: "Containers",
              description:
                "Run containers, taught with docker run hello-world.",
            },
            {
              name: "Images",
              description: "Build images, taught with a Dockerfile example.",
            },
            {
              name: "Docker Commands",
              description:
                "Use docker ps, taught with a container list example.",
            },
          ],
        },
        {
          name: "Basics",
          description:
            "Understand basic concepts, taught with simple examples.",
          children: [
            {
              name: "Linux Basics",
              description: "Understand Linux, taught with basic commands.",
            },
            {
              name: "Networking Basics",
              description: "Learn networking, taught with basic concepts.",
            },
            {
              name: "Yaml files",
              description: "Understand Yaml, taught with a yaml example.",
            },
          ],
        },
        {
          name: "Tools Setup",
          description:
            "Install and configure Kubernetes tools, taught with a minikube cluster.",
          children: [
            {
              name: "Minikube Installation",
              description:
                "Install minikube, taught with minikube start check.",
            },
            {
              name: "kubectl",
              description:
                "Install kubectl, taught with kubectl version check.",
            },
            {
              name: "VS Code",
              description:
                "Set up VS Code with Kubernetes extension, taught with setup steps.",
            },
            {
              name: "Practice Cluster",
              description:
                "Start minikube, taught with minikube start example.",
            },
          ],
        },
      ],
      dividerText: "start with Kubernetes basics.",
    },
    {
      name: " Kubernetes Core Basics",
      description:
        "Master foundational Kubernetes concepts and commands, taught with a simple pod in minikube. This step builds the essentials for 2025 orchestration.",
      children: [
        {
          name: "What is Kubernetes?",
          description:
            "Understand Kubernetes and orchestration, taught with a pod example.",
          children: [
            {
              name: "Orchestration Overview",
              description:
                "Learn orchestration, taught with a Kubernetes vs. Docker explanation.",
            },
            {
              name: "Architecture",
              description:
                "Explore master/worker, taught with a cluster diagram.",
            },
            {
              name: "Benefits",
              description:
                "Understand scalability, taught with a deployment benefit example.",
            },
          ],
        },
        {
          name: "Basic Commands",
          description:
            "Use core kubectl commands, taught with a pod creation example.",
          children: [
            {
              name: "kubectl get",
              description:
                "List resources, taught with kubectl get pods example.",
            },
            {
              name: "kubectl apply",
              description:
                "Apply configs, taught with kubectl apply -f pod.yaml.",
            },
            {
              name: "kubectl delete",
              description:
                "Remove resources, taught with kubectl delete pod example.",
            },
          ],
        },
        {
          name: "Pods",
          description: "Work with pods, taught with a Node.js pod example.",
          children: [
            {
              name: "Pod Definition",
              description: "Write pod YAML, taught with a pod.yaml example.",
            },
            {
              name: "Pod Creation",
              description: "Create pod, taught with kubectl apply example.",
            },
            {
              name: "Pod Inspection",
              description:
                "Inspect pod, taught with kubectl describe pod example.",
            },
          ],
        },
      ],
      dividerText: "move to deployments and replicas.",
    },
    {
      name: " Deployments and Replicas",
      description:
        "Learn to manage deployments and replication, taught with a Node.js app in minikube. This step enhances app management for 2025.",
      children: [
        {
          name: "Deployments",
          description: "Create deployments, taught with a deployment example.",
          children: [
            {
              name: "Deployment YAML",
              description:
                "Write deployment, taught with a deployment.yaml example.",
            },
            {
              name: "Create Deployment",
              description: "Deploy app, taught with kubectl apply -f example.",
            },
            {
              name: "Rolling Updates",
              description: "Update app, taught with kubectl set image example.",
            },
          ],
        },
        {
          name: "ReplicaSets",
          description:
            "Manage replicas, taught with a replicas scaling example.",
          children: [
            {
              name: "ReplicaSet Role",
              description:
                "Understand replicas, taught with a ReplicaSet explanation.",
            },
            {
              name: "Scaling",
              description: "Scale pods, taught with kubectl scale example.",
            },
            {
              name: "Inspect Replicas",
              description: "View replicas, taught with kubectl get rs example.",
            },
          ],
        },
        {
          name: "Rollbacks",
          description: "Rollback deployments, taught with a rollback example.",
          children: [
            {
              name: "History",
              description:
                "View history, taught with kubectl rollout history example.",
            },
            {
              name: "Rollback",
              description:
                "Rollback, taught with kubectl rollout undo example.",
            },
            {
              name: "Status",
              description:
                "Check status, taught with kubectl rollout status example.",
            },
          ],
        },
      ],
      dividerText: "explore services and networking.",
    },
    {
      name: " Services and Networking",
      description:
        "Master Kubernetes services and networking, taught with a Node.js service in minikube. This step enables 2025 app communication.",
      children: [
        {
          name: "Services",
          description:
            "Expose apps with services, taught with a service example.",
          children: [
            {
              name: "ClusterIP",
              description:
                "Internal access, taught with a ClusterIP YAML example.",
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
        {
          name: "Networking Basics",
          description:
            "Understand Kubernetes networking, taught with a pod ping example.",
          children: [
            {
              name: "Pod Networking",
              description: "Pod-to-pod, taught with a pod IP example.",
            },
            {
              name: "DNS",
              description: "Use DNS, taught with a service name ping example.",
            },
            {
              name: "Network Policies",
              description:
                "Control traffic, taught with a policy YAML example.",
            },
          ],
        },
        {
          name: "Ingress",
          description:
            "Manage external access, taught with an Ingress example.",
          children: [
            {
              name: "Ingress Controller",
              description:
                "Set up controller, taught with a minikube addons example.",
            },
            {
              name: "Ingress Resource",
              description:
                "Define Ingress, taught with an ingress.yaml example.",
            },
            {
              name: "Path Routing",
              description: "Route paths, taught with a /api path example.",
            },
          ],
        },
      ],
      dividerText: "manage storage in Kubernetes.",
    },
    {
      name: " Storage in Kubernetes",
      description:
        "Handle Kubernetes storage, taught with a persistent volume for a database in minikube. This step ensures 2025 data persistence.",
      children: [
        {
          name: "Volumes",
          description: "Use basic volumes, taught with a volume mount example.",
          children: [
            {
              name: "EmptyDir",
              description:
                "Temp storage, taught with an emptyDir YAML example.",
            },
            {
              name: "HostPath",
              description: "Host storage, taught with a hostPath example.",
            },
            {
              name: "Volume Mount",
              description: "Mount volume, taught with a volumeMounts example.",
            },
          ],
        },
        {
          name: "Persistent Volumes (PV)",
          description: "Define PVs, taught with a PV creation example.",
          children: [
            {
              name: "PV Creation",
              description: "Create PV, taught with a pv.yaml example.",
            },
            {
              name: "PV Claim",
              description: "Claim PV, taught with a pvc.yaml example.",
            },
            {
              name: "Inspect PV",
              description: "View PV, taught with kubectl get pv example.",
            },
          ],
        },
        {
          name: "Storage Classes",
          description: "Dynamic storage, taught with a storage class example.",
          children: [
            {
              name: "Define StorageClass",
              description:
                "Create class, taught with a storageclass.yaml example.",
            },
            {
              name: "Use StorageClass",
              description:
                "Claim storage, taught with a PVC using StorageClass.",
            },
            {
              name: "Dynamic Provisioning",
              description:
                "Provision storage, taught with a provisioner example.",
            },
          ],
        },
      ],
      dividerText: "configure and manage resources.",
    },
    {
      name: " Configuration and Resource Management",
      description:
        "Configure apps and manage resources, taught with a configured Node.js app in minikube. This step optimizes 2025 deployments.",
      children: [
        {
          name: "ConfigMaps",
          description: "Manage configs, taught with a config example.",
          children: [
            {
              name: "Create ConfigMap",
              description:
                "Define config, taught with a configmap.yaml example.",
            },
            {
              name: "Use ConfigMap",
              description: "Mount config, taught with an env example.",
            },
            {
              name: "Update Config",
              description:
                "Edit config, taught with kubectl edit configmap example.",
            },
          ],
        },
        {
          name: "Secrets",
          description: "Secure secrets, taught with a secret example.",
          children: [
            {
              name: "Create Secret",
              description: "Define secret, taught with a secret.yaml example.",
            },
            {
              name: "Use Secret",
              description: "Mount secret, taught with an env secret example.",
            },
            {
              name: "Base64 Encoding",
              description: "Encode secret, taught with a base64 example.",
            },
          ],
        },
        {
          name: "Resource Limits",
          description: "Limit resources, taught with a resource limit example.",
          children: [
            {
              name: "CPU Limits",
              description: "Set CPU, taught with a cpu limit example.",
            },
            {
              name: "Memory Limits",
              description: "Set memory, taught with a memory limit example.",
            },
            {
              name: "Requests",
              description: "Set requests, taught with a request example.",
            },
          ],
        },
      ],
      dividerText: "monitor and log Kubernetes.",
    },
    {
      name: " Monitoring and Logging",
      description:
        "Monitor and log Kubernetes apps, taught with a Node.js app in minikube. This step ensures 2025 observability.",
      children: [
        {
          name: "Logging",
          description: "View logs, taught with a pod log example.",
          children: [
            {
              name: "kubectl logs",
              description:
                "Get logs, taught with kubectl logs pod-name example.",
            },
            {
              name: "Multi-Container Logs",
              description:
                "Specify container, taught with -c container-name example.",
            },
            {
              name: "Tail Logs",
              description: "Tail logs, taught with --tail=10 example.",
            },
          ],
        },
        {
          name: "Monitoring",
          description: "Monitor cluster, taught with a metrics example.",
          children: [
            {
              name: "Metrics Server",
              description:
                "Install server, taught with minikube addons enable metrics-server.",
            },
            {
              name: "kubectl top",
              description: "View usage, taught with kubectl top pod example.",
            },
            {
              name: "Events",
              description:
                "Check events, taught with kubectl get events example.",
            },
          ],
        },
      ],
      dividerText: "secure Kubernetes.",
    },
    {
      name: " Kubernetes Security",
      description:
        "Secure Kubernetes clusters, taught with a secured Node.js app in minikube. This step protects 2025 deployments.",
      children: [
        {
          name: "RBAC",
          description: "Implement RBAC, taught with a role example.",
          children: [
            {
              name: "Roles",
              description: "Define role, taught with a role.yaml example.",
            },
            {
              name: "RoleBindings",
              description: "Bind role, taught with a rolebinding.yaml example.",
            },
            {
              name: "ClusterRoles",
              description: "Cluster scope, taught with a clusterrole example.",
            },
          ],
        },
        {
          name: "Pod Security",
          description: "Secure pods, taught with a security context example.",
          children: [
            {
              name: "RunAsNonRoot",
              description: "Non-root, taught with a securityContext example.",
            },
            {
              name: "Privileged",
              description:
                "Limit privileges, taught with a privileged: false example.",
            },
            {
              name: "PodSecurityPolicy",
              description:
                "Legacy PSP, taught with a PSP example (deprecated note).",
            },
          ],
        },
        {
          name: "Network Policies",
          description: "Control network, taught with a policy example.",
          children: [
            {
              name: "Define Policy",
              description:
                "Write policy, taught with a networkpolicy.yaml example.",
            },
            {
              name: "Ingress/Egress",
              description: "Set rules, taught with an ingress rule example.",
            },
            {
              name: "Apply Policy",
              description: "Apply policy, taught with kubectl apply example.",
            },
          ],
        },
      ],
      dividerText: "test Kubernetes apps.",
    },
    {
      name: " Testing Kubernetes",
      description:
        "Test Kubernetes deployments, taught with a Node.js test in minikube. This step ensures 2025 quality.",
      children: [
        {
          name: "Unit Testing",
          description: "Test app locally, taught with a Jest test example.",
          children: [
            {
              name: "Local Test",
              description:
                "Run tests, taught with npm test in container example.",
            },
            {
              name: "Kubernetes Context",
              description: "Mock K8s, taught with a mock pod test example.",
            },
            {
              name: "Dependencies",
              description: "Install test deps, taught with npm install jest.",
            },
          ],
        },
        {
          name: "Integration Testing",
          description: "Test in cluster, taught with a service test example.",
          children: [
            {
              name: "Test Pod",
              description:
                "Deploy test pod, taught with a test-pod.yaml example.",
            },
            {
              name: "Service Testing",
              description: "Test service, taught with a curl test example.",
            },
            {
              name: "Cleanup",
              description: "Remove test, taught with kubectl delete example.",
            },
          ],
        },
      ],
      dividerText: "use Helm for package management.",
    },
    {
      name: " Helm Package Management",
      description:
        "Manage apps with Helm, taught with a Helm chart for a Node.js app in minikube. This step simplifies 2025 deployments.",
      children: [
        {
          name: "Helm Basics",
          description: "Understand Helm, taught with a chart install example.",
          children: [
            {
              name: "Install Helm",
              description: "Install Helm, taught with helm version check.",
            },
            {
              name: "Helm Charts",
              description: "Explore charts, taught with a chart.yaml example.",
            },
            {
              name: "Repositories",
              description: "Add repo, taught with helm repo add example.",
            },
          ],
        },
        {
          name: "Using Helm Charts",
          description:
            "Deploy with Helm, taught with a chart deployment example.",
          children: [
            {
              name: "Install Chart",
              description: "Install app, taught with helm install example.",
            },
            {
              name: "Upgrade Chart",
              description: "Upgrade app, taught with helm upgrade example.",
            },
            {
              name: "Uninstall Chart",
              description: "Remove app, taught with helm uninstall example.",
            },
          ],
        },
        {
          name: "Custom Charts",
          description:
            "Create custom charts, taught with a Node.js chart example.",
          children: [
            {
              name: "Chart Creation",
              description: "Create chart, taught with helm create example.",
            },
            {
              name: "Values.yaml",
              description:
                "Customize values, taught with a values.yaml example.",
            },
            {
              name: "Package Chart",
              description: "Package chart, taught with helm package example.",
            },
          ],
        },
      ],
      dividerText: "integrate CI/CD.",
    },
    {
      name: " CI/CD with Kubernetes",
      description:
        "Integrate Kubernetes with CI/CD, taught with a GitHub Actions workflow in VS Code. This step automates 2025 deployments.",
      children: [
        {
          name: "GitHub Actions",
          description:
            "Set up CI/CD, taught with a build/deploy workflow example.",
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
              name: "Deploy to Kubernetes",
              description: "Deploy app, taught with a kubectl apply step.",
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
              name: "Cluster Testing",
              description:
                "Test in K8s, taught with a test pod deploy example.",
            },
            {
              name: "Artifacts",
              description: "Save logs, taught with an artifact upload example.",
            },
          ],
        },
      ],
      dividerText: "explore advanced Kubernetes.",
    },
    {
      name: " Advanced Kubernetes",
      description:
        "Master advanced Kubernetes features, taught with a complex app in minikube. This step refines 2025 skills.",
      children: [
        {
          name: "StatefulSets",
          description: "Manage stateful apps, taught with a database example.",
          children: [
            {
              name: "StatefulSet YAML",
              description:
                "Define StatefulSet, taught with a statefulset.yaml example.",
            },
            {
              name: "Deploy StatefulSet",
              description: "Deploy app, taught with kubectl apply example.",
            },
            {
              name: "Headless Service",
              description: "Use headless, taught with a service example.",
            },
          ],
        },
        {
          name: "DaemonSets",
          description: "Run on all nodes, taught with a monitoring example.",
          children: [
            {
              name: "DaemonSet YAML",
              description:
                "Define DaemonSet, taught with a daemonset.yaml example.",
            },
            {
              name: "Deploy DaemonSet",
              description: "Deploy app, taught with kubectl apply example.",
            },
            {
              name: "Use Cases",
              description: "Monitor nodes, taught with a logging example.",
            },
          ],
        },
        {
          name: "Custom Resources (CRDs)",
          description: "Extend Kubernetes, taught with a CRD example.",
          children: [
            {
              name: "Define CRD",
              description: "Create CRD, taught with a crd.yaml example.",
            },
            {
              name: "Custom Object",
              description: "Use CR, taught with a custom resource example.",
            },
            {
              name: "Operators",
              description:
                "Build operator, taught with an operator intro example.",
            },
          ],
        },
      ],
      dividerText: "administer Kubernetes clusters.",
    },
    {
      name: " Cluster Administration",
      description:
        "Administer Kubernetes clusters, taught with a multi-node setup in minikube. This step ensures 2025 management.",
      children: [
        {
          name: "Cluster Setup",
          description:
            "Set up clusters, taught with a minikube multi-node example.",
          children: [
            {
              name: "Multi-Node Minikube",
              description:
                "Start multi-node, taught with minikube start --nodes 2.",
            },
            {
              name: "Cluster Info",
              description:
                "View cluster, taught with kubectl cluster-info example.",
            },
            {
              name: "Node Management",
              description:
                "Manage nodes, taught with kubectl get nodes example.",
            },
          ],
        },
        {
          name: "Upgrades",
          description:
            "Upgrade clusters, taught with a version upgrade example.",
          children: [
            {
              name: "Check Version",
              description: "View version, taught with kubectl version example.",
            },
            {
              name: "Upgrade Cluster",
              description:
                "Upgrade K8s, taught with a minikube upgrade example.",
            },
            {
              name: "Drain Nodes",
              description: "Drain node, taught with kubectl drain example.",
            },
          ],
        },
        {
          name: "Backup and Recovery",
          description: "Backup cluster, taught with a state backup example.",
          children: [
            {
              name: "Backup Resources",
              description:
                "Export resources, taught with kubectl get all -o yaml.",
            },
            {
              name: "Etcd Backup",
              description:
                "Backup etcd, taught with an etcdctl snapshot example.",
            },
            {
              name: "Restore",
              description:
                "Restore state, taught with an etcdctl restore example.",
            },
          ],
        },
      ],
      dividerText: "optimize and scale Kubernetes.",
    },
    {
      name: " Optimization and Scaling",
      description:
        "Optimize and scale Kubernetes, taught with a large app in minikube. This step ensures 2025 performance.",
      children: [
        {
          name: "Horizontal Pod Autoscaler (HPA)",
          description: "Auto-scale pods, taught with an HPA example.",
          children: [
            {
              name: "Define HPA",
              description: "Create HPA, taught with an hpa.yaml example.",
            },
            {
              name: "Metrics",
              description: "Set metrics, taught with a CPU metric example.",
            },
            {
              name: "Apply HPA",
              description: "Scale app, taught with kubectl apply hpa example.",
            },
          ],
        },
        {
          name: "Cluster Autoscaler",
          description: "Scale cluster, taught with a node scaling example.",
          children: [
            {
              name: "Enable Autoscaler",
              description:
                "Set up autoscaler, taught with a minikube addons example.",
            },
            {
              name: "Scale Nodes",
              description: "Adjust nodes, taught with a node count example.",
            },
            {
              name: "Monitor Scaling",
              description:
                "Check scaling, taught with kubectl get nodes example.",
            },
          ],
        },
        {
          name: "Performance Tuning",
          description:
            "Tune performance, taught with a resource tweak example.",
          children: [
            {
              name: "Limit Ranges",
              description: "Set ranges, taught with a limitrange.yaml example.",
            },
            {
              name: "QoS Classes",
              description: "Define QoS, taught with a QoS class example.",
            },
            {
              name: "Profiling",
              description:
                "Profile app, taught with a metrics analysis example.",
            },
          ],
        },
      ],
      dividerText: "specialize and contribute.",
    },
    {
      name: " Specialization and Contribution",
      description:
        "Specialize and contribute to Kubernetes, taught with a custom app and GitHub PR. This step elevates 2025 expertise.",
      children: [
        {
          name: "Specialization",
          description:
            "Focus on Kubernetes niches, taught with a serverless example.",
          children: [
            {
              name: "Serverless",
              description: "Use Knative, taught with a Knative example.",
            },
            {
              name: "Service Mesh",
              description: "Use Istio, taught with an Istio intro example.",
            },
            {
              name: "Big Data",
              description: "Run Spark, taught with a Spark on K8s example.",
            },
          ],
        },
        {
          name: "Contribute to Open Source",
          description:
            "Contribute to Kubernetes, taught with a PR to Kubernetes.",
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
        {
          name: "Continuous Learning",
          description: "Stay updated, taught with Kubernetes docs and X posts.",
          children: [
            {
              name: "Documentation",
              description: "Use K8s docs, taught with a feature dive example.",
            },
            {
              name: "Communities",
              description: "Join Reddit, taught with a K8s subreddit example.",
            },
            {
              name: "Trends",
              description: "Follow X, taught with K8s trend tracking tips.",
            },
          ],
        },
      ],
    },
  ],
};

export default kubernetesRoadmap;
