const graphqlDeveloperRoadmap = {
  name: "GraphQL Developer Roadmap for Beginners to Advanced 2025",
  children: [
    {
      name: "GraphQL Foundations",
      children: [
        {
          name: "GraphQL Basics",
          children: [
            {
              name: "What is GraphQL",
            },
            {
              name: "History",
            },
            {
              name: "Advantages",
            },
            {
              name: "GraphQL vs REST",
            },
            {
              name: "GraphQL vs gRPC",
            },
            {
              name: "First Look",
            },
          ],
        },
        {
          name: "Setup",
          children: [
            {
              name: "Node.js",
              preferred: true,
            },
            {
              name: "Apollo Server",
              preferred: true,
            },
            {
              name: "GraphQL.js",
            },
            {
              name: "First Schema",
            },
            {
              name: "VS Code",
              preferred: true,
            },
            {
              name: "GraphQL Playground",
            },
          ],
        },
      ],
      dividerText: " Master GraphQL schema design.",
    },
    {
      name: "Schema Design",
      children: [
        {
          name: "Schema Basics",
          children: [
            {
              name: "Scalar Types",
            },
            {
              name: "Object Types",
            },
            {
              name: "Fields",
            },
            {
              name: "Non-Null Types",
            },
            {
              name: "Enums",
            },
          ],
        },
        {
          name: "Schema Relationships",
          children: [
            {
              name: "Nested Types",
            },
            {
              name: "List Types",
            },
            {
              name: "Interfaces",
            },
            {
              name: "Unions",
            },
            {
              name: "Schema-First vs Code-First",
              preferred: true,
            },
          ],
        },
      ],
      dividerText: " Understand GraphQL serving.",
    },
    {
      name: "Serving GraphQL",
      children: [
        {
          name: "Serving Basics",
          children: [
            {
              name: "HTTP Endpoint",
              preferred: true,
            },
            {
              name: "GET vs POST",
            },
            {
              name: "Middleware",
            },
          ],
        },
        {
          name: "Advanced Serving",
          children: [
            {
              name: "WebSockets",
              preferred: true,
            },
            {
              name: "CORS",
            },
            {
              name: "CDN Integration",
            },
            {
              name: "HTTPS",
            },
          ],
        },
      ],
      dividerText: " Execute GraphQL queries and mutations.",
    },
    {
      name: "Queries and Mutations",
      children: [
        {
          name: "Queries",
          children: [
            {
              name: "Basic Queries",
            },
            {
              name: "Arguments",
            },
            {
              name: "Aliases",
            },
            {
              name: "Fragments",
            },
            {
              name: "Directives",
            },
          ],
        },
        {
          name: "Mutations",
          children: [
            {
              name: "Basic Mutations",
            },
            {
              name: "Input Types",
            },
            {
              name: "Variables",
            },
            {
              name: "Error Handling",
            },
          ],
        },
      ],
      dividerText: " Implement GraphQL execution.",
    },
    {
      name: "Execution",
      children: [
        {
          name: "Execution Basics",
          children: [
            {
              name: "Resolver Functions",
              preferred: true,
            },
            {
              name: "Root Queries",
            },
            {
              name: "Execution Order",
            },
          ],
        },
        {
          name: "Execution Optimization",
          children: [
            {
              name: "DataLoader",
              preferred: true,
            },
            {
              name: "Parallel Execution",
            },
            {
              name: "Error Propagation",
            },
          ],
        },
      ],
      dividerText: " Validate GraphQL schemas and queries.",
    },
    {
      name: "Validation",
      children: [
        {
          name: "Schema Validation",
          children: [
            {
              name: "Schema Linting",
              preferred: true,
            },
            {
              name: "Type Checking",
            },
          ],
        },
        {
          name: "Query Validation",
          children: [
            {
              name: "Depth Limiting",
            },
            {
              name: "Cost Analysis",
              preferred: true,
            },
            {
              name: "Field Validation",
            },
          ],
        },
      ],
      dividerText: " Implement GraphQL servers and clients.",
    },
    {
      name: "Implementation",
      children: [
        {
          name: "Server Implementation",
          children: [
            {
              name: "Apollo Server",
              preferred: true,
            },
            {
              name: "Express-GraphQL",
            },
            {
              name: "Schema Stitching",
            },
          ],
        },
        {
          name: "Client Implementation",
          children: [
            {
              name: "Apollo Client",
              preferred: true,
            },
            {
              name: "Relay",
            },
            {
              name: "Custom Fetch",
            },
          ],
        },
      ],
      dividerText: " Integrate GraphQL with clients.",
    },
    {
      name: "Client Integration",
      children: [
        {
          name: "Client Setup",
          children: [
            {
              name: "Apollo Client",
              preferred: true,
            },
            {
              name: "HTTP Requests",
            },
            {
              name: "Relay",
            },
            {
              name: "URQL",
            },
          ],
        },
        {
          name: "Client Features",
          children: [
            {
              name: "useQuery",
            },
            {
              name: "useMutation",
            },
            {
              name: "useSubscription",
            },
            {
              name: "Client-Side Cache",
            },
          ],
        },
      ],
      dividerText: " Manage state in GraphQL.",
    },
    {
      name: "State Management",
      children: [
        {
          name: "Client-Side State",
          children: [
            {
              name: "Local State",
            },
            {
              name: "Reactive Variables",
            },
            {
              name: "Cache Policies",
            },
          ],
        },
        {
          name: "Server-Side State",
          children: [
            {
              name: "Resolver Chains",
            },
            {
              name: "Context",
            },
            {
              name: "Session Management",
            },
            {
              name: "Data Loaders",
            },
          ],
        },
      ],
      dividerText: " Secure GraphQL APIs.",
    },
    {
      name: "Security",
      children: [
        {
          name: "Basic Security",
          children: [
            {
              name: "JWT Authentication",
              preferred: true,
            },
            {
              name: "Role-Based Access",
            },
            {
              name: "Schema Directives",
            },
          ],
        },
        {
          name: "Advanced Security",
          children: [
            {
              name: "Query Complexity",
            },
            {
              name: "Depth Limiting",
            },
            {
              name: "Rate Limiting",
            },
            {
              name: "Error Handling",
            },
            {
              name: "graphql-shield",
              preferred: true,
            },
          ],
        },
      ],
      dividerText: " Utilize GraphQL tools.",
    },
    {
      name: "Development Tools",
      children: [
        {
          name: "Query Tools",
          children: [
            {
              name: "GraphiQL",
              preferred: true,
            },
            {
              name: "Apollo Studio",
            },
            {
              name: "Postman",
            },
            {
              name: "Insomnia",
            },
          ],
        },
        {
          name: "Development Utilities",
          children: [
            {
              name: "GraphQL Codegen",
              preferred: true,
            },
            {
              name: "graphql-tools",
            },
            {
              name: "graphql-eslint",
            },
            {
              name: "graphql-inspector",
            },
          ],
        },
      ],
      dividerText: " Test GraphQL APIs.",
    },
    {
      name: "Testing",
      children: [
        {
          name: "Unit Testing",
          children: [
            {
              name: "Jest",
              preferred: true,
            },
            {
              name: "Mock Resolvers",
            },
            {
              name: "graphql-tools Mocking",
            },
          ],
        },
        {
          name: "Integration Testing",
          children: [
            {
              name: "Apollo Server Testing",
              preferred: true,
            },
            {
              name: "graphql-request",
            },
            {
              name: "Supertest",
            },
          ],
        },
      ],
      dividerText: " Deploy GraphQL APIs.",
    },
    {
      name: "Deployment",
      children: [
        {
          name: "Server Deployment",
          children: [
            {
              name: "Node.js with PM2",
              preferred: true,
            },
            {
              name: "AWS EC2",
            },
            {
              name: "Heroku",
            },
            {
              name: "DigitalOcean",
            },
          ],
        },
        {
          name: "Serverless and Optimization",
          children: [
            {
              name: "AWS Lambda",
              preferred: true,
            },
            {
              name: "Vercel",
            },
            {
              name: "Cloudflare Workers",
            },
            {
              name: "Response Caching",
            },
          ],
        },
      ],
      dividerText: " Explore advanced GraphQL topics.",
    },
    {
      name: "Advanced GraphQL Topics",
      children: [
        {
          name: "Subscriptions",
          children: [
            {
              name: "WebSocket Setup",
              preferred: true,
            },
            {
              name: "Subscription Resolvers",
            },
            {
              name: "Pub/Sub",
            },
          ],
        },
        {
          name: "Federation and Optimization",
          children: [
            {
              name: "Apollo Federation",
              preferred: true,
            },
            {
              name: "Schema Stitching",
            },
            {
              name: "Persisted Queries",
            },
            {
              name: "Gateway",
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
              name: "User API",
            },
            {
              name: "Chat App",
            },
            {
              name: "Federated Services",
            },
          ],
        },
        {
          name: "Learning Resources",
          children: [
            {
              name: "GraphQL.org",
              preferred: true,
            },
            {
              name: "Apollo Docs",
            },
            {
              name: "GraphQL Community",
            },
            {
              name: "Hasura Docs",
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

export default graphqlDeveloperRoadmap;
