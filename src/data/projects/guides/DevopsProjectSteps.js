const DevopsProjectSteps = {
  "CI/CD Pipeline with Jenkins": [
    {
      title: "Set Up Jenkins Environment",
      description:
        "1. Install Jenkins on a local machine or a cloud VM (e.g., AWS EC2) using the official installer.\n" +
        "2. Configure Jenkins with initial admin setup via the web UI (port 8080).\n" +
        "3. Install required plugins (e.g., Git, Pipeline, Docker) from the Jenkins Plugin Manager.\n" +
        "4. Initialize a Git repository for the project and commit the setup.",
    },
    {
      title: "Create a Sample Application",
      description:
        "1. Set up a simple application (e.g., a Node.js or Python app) in a Git repository.\n" +
        "2. Add a basic test script (e.g., unit tests with Jest or pytest).\n" +
        "3. Include a Dockerfile for containerization (optional for deployment).\n" +
        "4. Push the app to GitHub or GitLab.",
    },
    {
      title: "Configure Jenkins Pipeline",
      description:
        "1. Create a new Pipeline job in Jenkins and link it to your Git repository.\n" +
        "2. Write a `Jenkinsfile` defining stages: checkout, build, test, and deploy.\n" +
        "3. Use declarative syntax (e.g., `pipeline { stages { stage('Build') { steps { sh 'npm install' } } } }`).\n" +
        "4. Trigger the pipeline manually or via a webhook on code push.",
    },
    {
      title: "Test and Deploy",
      description:
        "1. Run the pipeline and verify each stage (build, test, deploy) completes successfully.\n" +
        "2. Deploy the app to a target (e.g., Docker container or a VM) as the final stage.\n" +
        "3. Check Jenkins console logs for errors and troubleshoot.\n" +
        "4. Push the `Jenkinsfile` and setup docs to GitHub with a README.",
    },
  ],
  "Docker Containerization": [
    {
      title: "Install Docker",
      description:
        "1. Install Docker Desktop (Windows/Mac) or Docker Engine (Linux) following official docs.\n" +
        "2. Verify installation with `docker --version` and `docker run hello-world`.\n" +
        "3. Install Docker Compose for multi-container apps.\n" +
        "4. Initialize a Git repository for the project.",
    },
    {
      title: "Create a Sample App",
      description:
        "1. Write a simple app (e.g., Flask or Express.js) with a basic endpoint.\n" +
        "2. Add dependencies in a `requirements.txt` or `package.json` file.\n" +
        "3. Test the app locally to ensure it runs without Docker.\n" +
        "4. Commit the app to the Git repository.",
    },
    {
      title: "Write Dockerfile",
      description:
        "1. Create a `Dockerfile` in the app directory (e.g., `FROM python:3.9`, `COPY . /app`, `RUN pip install -r requirements.txt`).\n" +
        "2. Define the app’s entry point (e.g., `CMD ['python', 'app.py']`).\n" +
        "3. Build the Docker image with `docker build -t my-app:latest .`.\n" +
        "4. Run the container locally with `docker run -p 5000:5000 my-app:latest`.",
    },
    {
      title: "Add Docker Compose (Optional)",
      description:
        "1. Create a `docker-compose.yml` file to define services (e.g., app and a database like Postgres).\n" +
        "2. Run the app with `docker-compose up` and test connectivity.\n" +
        "3. Push the Dockerfile and Compose file to GitHub with a README.\n" +
        "4. Share the image on Docker Hub (optional) with `docker push`.",
    },
  ],
  "Kubernetes Cluster Deployment": [
    {
      title: "Set Up Kubernetes",
      description:
        "1. Install Minikube locally or use a cloud provider (e.g., GKE, EKS) for a real cluster.\n" +
        "2. Install `kubectl` and verify with `kubectl version`.\n" +
        "3. Start Minikube with `minikube start` or configure cloud cluster credentials.\n" +
        "4. Initialize a Git repository for the project.",
    },
    {
      title: "Prepare Microservices",
      description:
        "1. Create two simple microservices (e.g., a frontend and backend) with Dockerfiles.\n" +
        "2. Build and test Docker images locally (e.g., `docker build -t frontend:latest .`).\n" +
        "3. Push images to a registry (e.g., Docker Hub or GCR).\n" +
        "4. Ensure services communicate (e.g., via REST APIs).",
    },
    {
      title: "Write Kubernetes Manifests",
      description:
        "1. Create YAML files for Deployments (e.g., replicas, container specs) and Services (e.g., LoadBalancer).\n" +
        "2. Define a ConfigMap or Secret for environment variables.\n" +
        "3. Apply manifests with `kubectl apply -f .` and verify pods with `kubectl get pods`.\n" +
        "4. Expose the app externally (e.g., `minikube service frontend-service`).",
    },
    {
      title: "Scale and Test",
      description:
        "1. Scale the deployment with `kubectl scale deployment frontend --replicas=3`.\n" +
        "2. Test load balancing and failover by killing a pod.\n" +
        "3. Push manifests to GitHub with a README on setup and scaling.\n" +
        "4. Optionally, set up Horizontal Pod Autoscaler (HPA) for advanced scaling.",
    },
  ],
  "Infrastructure as Code with Terraform": [
    {
      title: "Install Terraform",
      description:
        "1. Download and install Terraform from the official site.\n" +
        "2. Verify installation with `terraform --version`.\n" +
        "3. Set up credentials for a cloud provider (e.g., AWS IAM keys).\n" +
        "4. Initialize a Git repository for the project.",
    },
    {
      title: "Define Infrastructure",
      description:
        "1. Create a `main.tf` file and specify a provider (e.g., `provider 'aws' { region = 'us-east-1' }`).\n" +
        "2. Define resources (e.g., VPC, EC2 instance, or S3 bucket) with Terraform syntax.\n" +
        "3. Add variables in a `variables.tf` file for flexibility.\n" +
        "4. Initialize the project with `terraform init`.",
    },
    {
      title: "Plan and Apply",
      description:
        "1. Preview changes with `terraform plan` to ensure correctness.\n" +
        "2. Deploy infrastructure with `terraform apply` and confirm.\n" +
        "3. Verify resources in the cloud provider’s console (e.g., AWS).\n" +
        "4. Test connectivity (e.g., SSH into an EC2 instance).",
    },
    {
      title: "Manage and Share",
      description:
        "1. Destroy resources with `terraform destroy` when done.\n" +
        "2. Add a `terraform.tfstate` file to track state (store remotely in S3 optionally).\n" +
        "3. Push Terraform files to GitHub with a README on setup and usage.\n" +
        "4. Document variables and outputs for reusability.",
    },
  ],
  "Ansible for Configuration Management": [
    {
      title: "Set Up Ansible",
      description:
        "1. Install Ansible on a control node (e.g., local machine or VM) via pip or package manager.\n" +
        "2. Verify with `ansible --version`.\n" +
        "3. Set up SSH keys and test connectivity to target nodes (e.g., VMs).\n" +
        "4. Initialize a Git repository for the project.",
    },
    {
      title: "Configure Inventory",
      description:
        "1. Create an `inventory` file listing target hosts (e.g., IPs or hostnames).\n" +
        "2. Group hosts (e.g., `[webservers]` or `[dbservers]`) for role-based management.\n" +
        "3. Test connectivity with `ansible all -m ping`.\n" +
        "4. Add host-specific variables if needed.",
    },
    {
      title: "Write Playbooks",
      description:
        "1. Create a playbook (e.g., `setup.yml`) to install software (e.g., Nginx) and configure settings.\n" +
        "2. Use tasks (e.g., `apt`, `service`) and roles for modularity.\n" +
        "3. Run the playbook with `ansible-playbook setup.yml`.\n" +
        "4. Verify changes on target nodes (e.g., Nginx running).",
    },
    {
      title: "Test and Share",
      description:
        "1. Test idempotency by running the playbook multiple times.\n" +
        "2. Add error handling (e.g., `ignore_errors`) and debug with `-v`.\n" +
        "3. Push playbooks and inventory to GitHub with a README.\n" +
        "4. Document how to add new nodes or tasks.",
    },
  ],
  "Monitoring with Prometheus & Grafana": [
    {
      title: "Set Up Tools",
      description:
        "1. Install Prometheus and Grafana on a local machine or VM (via binaries or Docker).\n" +
        "2. Start Prometheus with default config (`prometheus.yml`) and verify at `localhost:9090`.\n" +
        "3. Start Grafana and log in at `localhost:3000` (default admin/admin).\n" +
        "4. Initialize a Git repository for the project.",
    },
    {
      title: "Instrument an Application",
      description:
        "1. Create a simple app (e.g., Node.js with Prometheus client library).\n" +
        "2. Expose metrics (e.g., HTTP request count) at an endpoint (e.g., `/metrics`).\n" +
        "3. Run the app in a Docker container for consistency.\n" +
        "4. Test the metrics endpoint with `curl`.",
    },
    {
      title: "Configure Monitoring",
      description:
        "1. Edit `prometheus.yml` to scrape the app’s metrics endpoint (e.g., `scrape_configs`).\n" +
        "2. Reload Prometheus config and verify metrics in the UI.\n" +
        "3. Add Prometheus as a data source in Grafana and create a dashboard.\n" +
        "4. Build panels (e.g., graphs for request rate, latency).",
    },
    {
      title: "Test and Share",
      description:
        "1. Simulate app load (e.g., with a script) and check metrics in Grafana.\n" +
        "2. Export the dashboard as JSON and save it.\n" +
        "3. Push config files and app code to GitHub with a README.\n" +
        "4. Optionally, set up alerts in Prometheus for thresholds.",
    },
  ],
  "Logging with ELK Stack": [
    {
      title: "Set Up ELK Components",
      description:
        "1. Install Elasticsearch, Logstash, and Kibana on a VM or use Docker Compose.\n" +
        "2. Start Elasticsearch (`localhost:9200`) and verify with a GET request.\n" +
        "3. Start Kibana (`localhost:5601`) and connect to Elasticsearch.\n" +
        "4. Initialize a Git repository for the project.",
    },
    {
      title: "Generate Logs",
      description:
        "1. Create a sample app (e.g., Python with logging) to generate log messages.\n" +
        "2. Configure the app to write logs to a file (e.g., `app.log`).\n" +
        "3. Run the app in a Docker container for consistency.\n" +
        "4. Test log output locally.",
    },
    {
      title: "Configure Logstash",
      description:
        "1. Create a Logstash config file (e.g., `logstash.conf`) with input (file) and output (Elasticsearch).\n" +
        "2. Start Logstash with the config and verify logs reach Elasticsearch.\n" +
        "3. Set up an index pattern in Kibana to visualize logs.\n" +
        "4. Build a dashboard with log counts, errors, or timelines.",
    },
    {
      title: "Test and Share",
      description:
        "1. Generate varied logs (e.g., errors, info) and check Kibana visuals.\n" +
        "2. Optimize Logstash filters (e.g., grok for parsing) if needed.\n" +
        "3. Push config files and app code to GitHub with a README.\n" +
        "4. Document scaling tips (e.g., adding more nodes).",
    },
  ],
  "Serverless Deployment with AWS Lambda": [
    {
      title: "Set Up AWS Environment",
      description:
        "1. Create an AWS account and configure the AWS CLI with credentials.\n" +
        "2. Install the AWS SAM CLI for local testing.\n" +
        "3. Verify setup with `aws configure` and `sam --version`.\n" +
        "4. Initialize a Git repository for the project.",
    },
    {
      title: "Create Lambda Function",
      description:
        "1. Use SAM to create a new project (e.g., `sam init --runtime python3.9`).\n" +
        "2. Write a simple function (e.g., API handler returning JSON) in `app.py`.\n" +
        "3. Define an API Gateway trigger in `template.yaml`.\n" +
        "4. Test locally with `sam local invoke` and `sam local start-api`.",
    },
    {
      title: "Deploy to AWS",
      description:
        "1. Build the app with `sam build`.\n" +
        "2. Deploy to AWS with `sam deploy --guided` (set up S3 bucket and stack).\n" +
        "3. Get the API Gateway URL from the deployment output.\n" +
        "4. Test the live endpoint with `curl` or a browser.",
    },
    {
      title: "Monitor and Share",
      description:
        "1. Check Lambda logs in CloudWatch for execution details.\n" +
        "2. Add basic error handling or scaling configs if needed.\n" +
        "3. Push SAM files and code to GitHub with a README.\n" +
        "4. Document the API endpoint and usage instructions.",
    },
  ],
  "GitOps with ArgoCD": [
    {
      title: "Set Up Kubernetes and ArgoCD",
      description:
        "1. Install Minikube or use a cloud Kubernetes cluster (e.g., EKS).\n" +
        "2. Install ArgoCD CLI and deploy ArgoCD to the cluster with `kubectl apply`.\n" +
        "3. Access the ArgoCD UI (e.g., `argocd admin initial-password`) and log in.\n" +
        "4. Initialize a Git repository for manifests.",
    },
    {
      title: "Prepare Application",
      description:
        "1. Create a simple app (e.g., Nginx) with a Dockerfile and Kubernetes manifests.\n" +
        "2. Push the app image to a registry (e.g., Docker Hub).\n" +
        "3. Store manifests (Deployment, Service) in a separate Git repo.\n" +
        "4. Test manifests manually with `kubectl apply`.",
    },
    {
      title: "Configure ArgoCD",
      description:
        "1. Add the Git repo to ArgoCD via the UI or CLI (`argocd app create`).\n" +
        "2. Set up sync policy (e.g., auto-sync) to deploy changes from Git.\n" +
        "3. Sync the app and verify deployment in the ArgoCD dashboard.\n" +
        "4. Update the manifest in Git and check automatic redeployment.",
    },
    {
      title: "Test and Share",
      description:
        "1. Simulate a failure (e.g., edit replicas) and verify rollback or sync.\n" +
        "2. Explore ArgoCD logs and UI for troubleshooting.\n" +
        "3. Push both app and manifest repos to GitHub with a README.\n" +
        "4. Document GitOps workflow and ArgoCD setup.",
    },
  ],
  "Security & Compliance with DevSecOps": [
    {
      title: "Set Up Environment",
      description:
        "1. Install a CI tool (e.g., Jenkins or GitLab CI) and security tools (e.g., Trivy, OWASP ZAP).\n" +
        "2. Configure a local or cloud VM with Docker for testing.\n" +
        "3. Initialize a Git repository for the project.\n" +
        "4. Choose a sample app for security integration.",
    },
    {
      title: "Secure the Application",
      description:
        "1. Write a simple app (e.g., Flask) and containerize it with a Dockerfile.\n" +
        "2. Scan the Docker image for vulnerabilities with Trivy (`trivy image my-app`).\n" +
        "3. Fix identified issues (e.g., update base image or packages).\n" +
        "4. Commit the secured app to Git.",
    },
    {
      title: "Integrate Security in CI/CD",
      description:
        "1. Create a pipeline (e.g., Jenkinsfile) with stages: build, scan, and deploy.\n" +
        "2. Add security scans (e.g., Trivy for images, ZAP for app vulnerabilities).\n" +
        "3. Fail the pipeline if critical issues are found.\n" +
        "4. Test the pipeline with a deliberate vulnerability (e.g., outdated library).",
    },
    {
      title: "Monitor and Share",
      description:
        "1. Deploy the app and monitor logs for runtime issues.\n" +
        "2. Document findings (e.g., fixed CVEs) in the pipeline output.\n" +
        "3. Push pipeline config and app to GitHub with a README.\n" +
        "4. Suggest compliance steps (e.g., secrets management with Vault).",
    },
  ],
  "Hybrid Cloud Deployment with OpenShift": [
    {
      title: "Set Up OpenShift",
      description:
        "1. Install OpenShift CLI (`oc`) and access an OpenShift cluster (e.g., local CodeReady Containers or cloud).\n" +
        "2. Log in to the cluster with `oc login` and verify with `oc whoami`.\n" +
        "3. Create a new project with `oc new-project my-hybrid-app`.\n" +
        "4. Initialize a Git repository for the project.",
    },
    {
      title: "Prepare Application",
      description:
        "1. Create a multi-service app (e.g., frontend and backend) with Dockerfiles.\n" +
        "2. Build and push images to a registry (e.g., Quay.io or Docker Hub).\n" +
        "3. Test locally with Docker Compose if needed.\n" +
        "4. Commit the app code to Git.",
    },
    {
      title: "Deploy to OpenShift",
      description:
        "1. Use `oc new-app` to deploy the app from the Git repo or image.\n" +
        "2. Expose services with routes (`oc expose svc`) for external access.\n" +
        "3. Simulate hybrid setup by deploying across multiple environments (e.g., local + cloud).\n" +
        "4. Verify pods and routes with `oc get all`.",
    },
    {
      title: "Scale and Share",
      description:
        "1. Scale the app with `oc scale --replicas=3` and test load balancing.\n" +
        "2. Monitor via OpenShift’s web console or `oc logs`.\n" +
        "3. Push app code and OpenShift configs to GitHub with a README.\n" +
        "4. Document hybrid cloud benefits and setup steps.",
    },
  ],
  "Automating CI/CD with GitHub Actions": [
    {
      title: "Set Up GitHub Repository",
      description:
        "1. Create a new GitHub repository for the project.\n" +
        "2. Add a simple app (e.g., Node.js or Python) with a test script.\n" +
        "3. Include a Dockerfile for deployment (optional).\n" +
        "4. Commit and push the initial code.",
    },
    {
      title: "Create Workflow",
      description:
        "1. Add a `.github/workflows/ci.yml` file in the repository.\n" +
        "2. Define jobs: build (e.g., `npm install`), test (e.g., `npm test`), and deploy.\n" +
        "3. Use GitHub-provided runners (e.g., `ubuntu-latest`).\n" +
        "4. Trigger the workflow on push or pull request to `main`.",
    },
    {
      title: "Test Workflow",
      description:
        "1. Push a code change and check the Actions tab for workflow execution.\n" +
        "2. Verify build and test steps pass in the logs.\n" +
        "3. Add a failing test and ensure the workflow catches it.\n" +
        "4. Fix and re-run to confirm resolution.",
    },
    {
      title: "Deploy and Share",
      description:
        "1. Add a deploy step (e.g., to GitHub Pages or a cloud service like Vercel).\n" +
        "2. Use secrets (e.g., `secrets.AWS_ACCESS_KEY`) for secure deployment.\n" +
        "3. Update the README with workflow details and badge.\n" +
        "4. Test the deployed app and share the repo link.",
    },
  ],
};

export default DevopsProjectSteps;
