const graphqlDeveloperRoadmap = {
  name: "GraphQL Developer Roadmap for Beginners to Advanced 2025",
  description:
    "This roadmap guides you from zero GraphQL knowledge to advanced mastery by 2025, leveraging its efficiency for modern APIs. It progresses through basics, schema design, serving, queries, execution, validation, client integration, and advanced topics like federation and subscriptions. With projects and resources, you’ll build scalable, real-time APIs.",
  children: [
    {
      name: "GraphQL Foundations",
      description:
        "Begin your GraphQL journey by understanding its role as a query language for APIs, offering precise data fetching. This section introduces GraphQL’s history, benefits like type safety, and its evolution from REST. You’ll set up a basic server with Apollo or a similar tool, running your first query.",
      children: [
        {
          name: "GraphQL Basics",
          description:
            "Learn GraphQL’s essence as an API query language, launched in 2015 by Facebook. This section covers its purpose for flexible data retrieval, advantages like reduced over-fetching, and its schema-driven approach, preparing you for modern API development.",
          children: [
            {
              name: "What is GraphQL",
              description:
                "GraphQL is a query language for APIs, enabling clients to request exact data. It uses a strongly-typed schema, reducing over-fetching and under-fetching compared to REST, ideal for efficient, flexible data interactions.",
            },
            {
              name: "History",
              description:
                "Developed by Facebook in 2012 and open-sourced in 2015, GraphQL gained traction with its 1.0 spec in 2018. By 2025, it’s a standard for modern APIs, surpassing REST in flexibility.",
            },
            {
              name: "Advantages",
              description:
                "GraphQL offers type safety, single endpoint queries, and client-driven data fetching. Its schema evolution, reduced round-trips, and introspection make it powerful for scalable, efficient APIs.",
            },
            {
              name: "GraphQL vs REST",
              description:
                "Unlike REST’s multiple endpoints, GraphQL uses one endpoint with flexible queries. It avoids over-fetching, offering precise data over REST’s rigid structure.",
            },
            {
              name: "GraphQL vs gRPC",
              description:
                "Compared to gRPC’s binary protocol, GraphQL uses readable JSON over HTTP, prioritizing developer experience and flexibility over raw performance.",
            },
            {
              name: "First Look",
              description:
                "Set up a GraphQL server with type Query { hello: String }, query with { hello }. Previews its schema and query simplicity.",
            },
          ],
        },
        {
          name: "Setup",
          description:
            "Set up your GraphQL environment with Node.js, a server library like Apollo Server, and an IDE. This section guides you through installation, creating a basic schema, and running your first query, ensuring a smooth start.",
          children: [
            {
              name: "Node.js",
              description:
                "Install Node.js (16+ recommended) for JavaScript GraphQL servers. Essential runtime for most setups.",
              preferred: true,
            },
            {
              name: "Apollo Server",
              description:
                "Use Apollo Server with npm install @apollo/server. Preferred for its robust GraphQL server features.",
              preferred: true,
            },
            {
              name: "GraphQL.js",
              description:
                "Alternative with npm install graphql. Core library for minimal GraphQL servers.",
            },
            {
              name: "First Schema",
              description:
                "Define type Query { hello: String } and resolver, run with node server.js. Starts a basic server.",
            },
            {
              name: "VS Code",
              description:
                "Set up VS Code with GraphQL extension for syntax support. Preferred for its development tools.",
              preferred: true,
            },
            {
              name: "GraphQL Playground",
              description:
                "Access via localhost:4000/graphql after server start. Test queries interactively.",
            },
          ],
        },
      ],
      dividerText: " Master GraphQL schema design.",
    },
    {
      name: "Schema Design",
      description:
        "Master GraphQL schema design, defining your API’s structure. This section covers types, scalars, objects, relationships, and schema-first vs code-first approaches, building a robust, type-safe foundation for GraphQL APIs.",
      children: [
        {
          name: "Schema Basics",
          description:
            "Learn the fundamentals of GraphQL schemas with types and fields. This section introduces scalar types, object types, and basic schema definitions, essential for structuring your API.",
          children: [
            {
              name: "Scalar Types",
              description:
                "Use Int, Float, String, Boolean, ID, like type Query { id: ID }. Define basic data units.",
            },
            {
              name: "Object Types",
              description:
                "Define with type User { id: ID, name: String }. Structures complex data objects.",
            },
            {
              name: "Fields",
              description:
                "Add fields, like type Query { user: User }. Represents retrievable data points.",
            },
            {
              name: "Non-Null Types",
              description:
                "Mark with !, like String!. Ensures fields return non-null values.",
            },
            {
              name: "Enums",
              description:
                "Define enum Status { ACTIVE INACTIVE }. Provides predefined value sets.",
            },
          ],
        },
        {
          name: "Schema Relationships",
          description:
            "Build relationships in GraphQL schemas for connected data. This section covers nested types, lists, interfaces, and schema design approaches, enabling complex API designs.",
          children: [
            {
              name: "Nested Types",
              description:
                "Nest with type Post { author: User }, linking objects. Represents one-to-one relations.",
            },
            {
              name: "List Types",
              description:
                "Use [Type], like type User { posts: [Post] }. Defines one-to-many relationships.",
            },
            {
              name: "Interfaces",
              description:
                "Define interface Node { id: ID }, implement with type User implements Node {}. Abstracts common fields.",
            },
            {
              name: "Unions",
              description:
                "Use union SearchResult = User | Post for mixed types. Enables flexible returns.",
            },
            {
              name: "Schema-First vs Code-First",
              description:
                "Choose schema-first (SDL) or code-first (resolvers). SDL preferred for clarity.",
              preferred: true,
            },
          ],
        },
      ],
      dividerText: " Understand GraphQL serving.",
    },
    {
      name: "Serving GraphQL",
      description:
        "Learn how GraphQL APIs are served over the internet, WebSockets, and HTTP. This section covers server setup, transport protocols, and real-time serving options, ensuring your API is accessible and efficient for clients.",
      children: [
        {
          name: "Serving Basics",
          description:
            "Understand the basics of serving GraphQL APIs over HTTP. This section explores HTTP endpoints, server configuration, and basic transport, laying the groundwork for API accessibility.",
          children: [
            {
              name: "HTTP Endpoint",
              description:
                "Serve at /graphql with Apollo Server, e.g., app.use('/graphql', graphqlHTTP()). Standard endpoint setup.",
              preferred: true,
            },
            {
              name: "GET vs POST",
              description:
                "Support GET for simple queries, POST for complex ones via query param or body. Flexible client access.",
            },
            {
              name: "Middleware",
              description:
                "Add middleware, like expressMiddleware(server), for routing. Integrates GraphQL with HTTP servers.",
            },
          ],
        },
        {
          name: "Advanced Serving",
          description:
            "Serve GraphQL over WebSockets and optimize for the internet. This section covers subscriptions (WebSockets preferred), CORS, and CDN integration for real-time and global access.",
          children: [
            {
              name: "WebSockets",
              description:
                "Serve subscriptions with ws:// via subscriptions-transport-ws. Preferred for real-time updates.",
              preferred: true,
            },
            {
              name: "CORS",
              description:
                "Enable CORS with cors: { origin: '*' } in Apollo Server. Allows cross-origin requests.",
            },
            {
              name: "CDN Integration",
              description:
                "Cache queries with CDN like Cloudflare. Speeds up global GraphQL access.",
            },
            {
              name: "HTTPS",
              description:
                "Secure with HTTPS via SSL certs, e.g., https.createServer(). Encrypts API traffic.",
            },
          ],
        },
      ],
      dividerText: " Execute GraphQL queries and mutations.",
    },
    {
      name: "Queries and Mutations",
      description:
        "Execute GraphQL queries and mutations to fetch and modify data. This section covers query syntax, mutation operations, variables, and directives, enabling dynamic interaction with your schema.",
      children: [
        {
          name: "Queries",
          description:
            "Learn to fetch data with GraphQL queries. This section explores basic queries, arguments, aliases, fragments, and directives, providing tools for precise data retrieval.",
          children: [
            {
              name: "Basic Queries",
              description:
                "Write query { user { name } }. Fetches data from schema fields.",
            },
            {
              name: "Arguments",
              description:
                "Add args, like query { user(id: '1') { name } }. Filters query results.",
            },
            {
              name: "Aliases",
              description:
                "Use aliases, like query { u1: user(id: '1') { name } }. Renames fields in responses.",
            },
            {
              name: "Fragments",
              description:
                "Define fragment UserFields on User { name }, use with ...UserFields. Reuses field sets.",
            },
            {
              name: "Directives",
              description:
                "Use @include(if: $var), e.g., query { user @include(if: true) { name } }. Conditionally includes fields.",
            },
          ],
        },
        {
          name: "Mutations",
          description:
            "Modify data with GraphQL mutations. This section covers mutation syntax, input types, variables, and error handling, enabling data updates and feedback.",
          children: [
            {
              name: "Basic Mutations",
              description:
                "Write mutation { createUser(name: 'John') { id } }. Modifies data and returns results.",
            },
            {
              name: "Input Types",
              description:
                "Define input CreateUserInput { name: String! }. Groups mutation arguments cleanly.",
            },
            {
              name: "Variables",
              description:
                "Use variables, like mutation ($name: String!) { createUser(name: $name) }. Parameterizes mutations.",
            },
            {
              name: "Error Handling",
              description:
                "Return errors, like { errors: [{ message: 'Invalid' }] }. Provides mutation feedback.",
            },
          ],
        },
      ],
      dividerText: " Implement GraphQL execution.",
    },
    {
      name: "Execution",
      description:
        "Understand how GraphQL executes queries and mutations on the server. This section covers resolver functions, execution flow, and performance optimization, ensuring efficient data resolution and response generation.",
      children: [
        {
          name: "Execution Basics",
          description:
            "Learn the basics of GraphQL query execution with resolvers. This section explores resolver definition, root queries, and execution order, foundational for server-side logic.",
          children: [
            {
              name: "Resolver Functions",
              description:
                "Define resolvers, like Query: { hello: () => 'Hi' }. Maps fields to data sources.",
              preferred: true,
            },
            {
              name: "Root Queries",
              description:
                "Set root with Query: { user: (parent, args) => fetchUser(args.id) }. Entry point for queries.",
            },
            {
              name: "Execution Order",
              description:
                "Executes top-down, e.g., Query → User → name. Resolves fields sequentially.",
            },
          ],
        },
        {
          name: "Execution Optimization",
          description:
            "Optimize GraphQL execution for performance. This section covers DataLoader for batching (preferred), parallel execution, and error propagation, enhancing server efficiency.",
          children: [
            {
              name: "DataLoader",
              description:
                "Batch with DataLoader, like new DataLoader(keys => fetch(keys)). Reduces N+1 queries.",
              preferred: true,
            },
            {
              name: "Parallel Execution",
              description:
                "Execute fields concurrently with async resolvers, e.g., Promise.all(). Speeds up responses.",
            },
            {
              name: "Error Propagation",
              description:
                "Propagate errors in resolvers, like throw new Error('Not found'). Ensures proper error handling.",
            },
          ],
        },
      ],
      dividerText: " Validate GraphQL schemas and queries.",
    },
    {
      name: "Validation",
      description:
        "Validate GraphQL schemas and queries to ensure correctness and security. This section covers schema validation, query validation, and complexity analysis, preventing errors and malicious requests.",
      children: [
        {
          name: "Schema Validation",
          description:
            "Validate GraphQL schemas for consistency and correctness. This section explores schema linting and type checking, ensuring a robust API structure before execution.",
          children: [
            {
              name: "Schema Linting",
              description:
                "Lint with graphql-schema-linter, e.g., check type naming. Enforces schema best practices.",
              preferred: true,
            },
            {
              name: "Type Checking",
              description:
                "Validate types, like ensure User implements Node correctly. Prevents type mismatches.",
            },
          ],
        },
        {
          name: "Query Validation",
          description:
            "Validate queries against the schema for correctness and safety. This section covers depth limits, cost analysis, and field validation, protecting against invalid requests.",
          children: [
            {
              name: "Depth Limiting",
              description:
                "Restrict with graphql-depth-limit, e.g., maxDepth: 5. Prevents overly nested queries.",
            },
            {
              name: "Cost Analysis",
              description:
                "Limit with graphql-cost-analysis, e.g., maxCost: 1000. Controls query complexity.",
              preferred: true,
            },
            {
              name: "Field Validation",
              description:
                "Ensure fields exist, e.g., reject query { invalidField }. Validates query structure.",
            },
          ],
        },
      ],
      dividerText: " Implement GraphQL servers and clients.",
    },
    {
      name: "Implementation",
      description:
        "Implement GraphQL servers and clients with practical approaches. This section covers server frameworks (Apollo preferred), client libraries, and integration patterns, guiding you through real-world GraphQL deployment choices.",
      children: [
        {
          name: "Server Implementation",
          description:
            "Implement GraphQL servers with popular frameworks and tools. This section explores Apollo Server (preferred), Express-GraphQL, and schema stitching for flexible server setups.",
          children: [
            {
              name: "Apollo Server",
              description:
                "Use Apollo Server with @apollo/server for robust servers. Preferred for its ecosystem.",
              preferred: true,
            },
            {
              name: "Express-GraphQL",
              description:
                "Use express-graphql with app.use('/graphql', graphqlHTTP()). Lightweight alternative.",
            },
            {
              name: "Schema Stitching",
              description:
                "Combine schemas with graphql-tools, e.g., mergeSchemas(). Modularizes server logic.",
            },
          ],
        },
        {
          name: "Client Implementation",
          description:
            "Implement GraphQL clients for front-end integration. This section covers Apollo Client (preferred), Relay, and custom fetch, ensuring efficient client-side querying.",
          children: [
            {
              name: "Apollo Client",
              description:
                "Use @apollo/client with useQuery for React. Preferred for caching and state.",
              preferred: true,
            },
            {
              name: "Relay",
              description:
                "Use Relay with relay-runtime for complex React apps. Structured client option.",
            },
            {
              name: "Custom Fetch",
              description:
                "Fetch with custom fetch('/graphql', { query }). Simple, framework-agnostic approach.",
            },
          ],
        },
      ],
      dividerText: " Integrate GraphQL with clients.",
    },
    {
      name: "Client Integration",
      description:
        "Integrate GraphQL with clients for front-end apps. This section covers Apollo Client (preferred), Relay, HTTP requests, and client-side tooling, enabling seamless data fetching and state management.",
      children: [
        {
          name: "Client Setup",
          description:
            "Set up GraphQL clients for front-end integration. This section explores Apollo Client (preferred), HTTP requests, and Relay, connecting your API to client-side code.",
          children: [
            {
              name: "Apollo Client",
              description:
                "Use Apollo Client with npm install @apollo/client. Preferred for its robust GraphQL features.",
              preferred: true,
            },
            {
              name: "HTTP Requests",
              description:
                "Fetch with fetch('/graphql', { query }). Simple client-side GraphQL access.",
            },
            {
              name: "Relay",
              description:
                "Use Relay for React with npm install relay-runtime. Alternative for complex apps.",
            },
            {
              name: "URQL",
              description:
                "Use URQL with npm install urql for lightweight React client. Minimal alternative.",
            },
          ],
        },
        {
          name: "Client Features",
          description:
            "Leverage client features for queries, mutations, and caching. This section covers useQuery, useMutation, subscriptions, and local state, enhancing client-side interactions.",
          children: [
            {
              name: "useQuery",
              description:
                "Fetch with useQuery(gql`query { user { name } }`). Executes queries in Apollo.",
            },
            {
              name: "useMutation",
              description:
                "Mutate with useMutation(gql`mutation { createUser }`). Updates data from clients.",
            },
            {
              name: "useSubscription",
              description:
                "Subscribe with useSubscription(gql`subscription { message }`). Handles real-time data.",
            },
            {
              name: "Client-Side Cache",
              description:
                "Cache with Apollo’s InMemoryCache. Reduces server calls with stored data.",
            },
          ],
        },
      ],
      dividerText: " Manage state in GraphQL.",
    },
    {
      name: "State Management",
      description:
        "Manage state in GraphQL applications on both client and server. This section covers Apollo Client state, server-side resolvers, context, and caching strategies, ensuring efficient data flow.",
      children: [
        {
          name: "Client-Side State",
          description:
            "Handle client-side state with Apollo Client. This section explores local state management, reactive variables, and cache policies, integrating GraphQL with front-end needs.",
          children: [
            {
              name: "Local State",
              description:
                "Manage with Apollo’s cache, like writeQuery({ query, data }). Stores client-side data.",
            },
            {
              name: "Reactive Variables",
              description:
                "Use makeVar({}), like const myVar = makeVar(0). Enables reactive client state.",
            },
            {
              name: "Cache Policies",
              description:
                "Set fetchPolicy, like cache-and-network. Balances cache and network fetches.",
            },
          ],
        },
        {
          name: "Server-Side State",
          description:
            "Manage server-side state with resolvers and context. This section covers resolver logic, global context, and session management, ensuring consistent server-side data handling.",
          children: [
            {
              name: "Resolver Chains",
              description:
                "Chain resolvers, like user: (parent) => fetchUser(parent.id). Links data across types.",
            },
            {
              name: "Context",
              description:
                "Pass context, like context: ({ req }) => ({ user: req.user }). Shares server state.",
            },
            {
              name: "Session Management",
              description:
                "Store sessions in Redis/context, e.g., context.session = req.session. Persists user state.",
            },
            {
              name: "Data Loaders",
              description:
                "Use DataLoader for batching, like new DataLoader(keys => fetch(keys)). Reduces N+1 issues.",
            },
          ],
        },
      ],
      dividerText: " Secure GraphQL APIs.",
    },
    {
      name: "Security",
      description:
        "Secure GraphQL APIs against threats and unauthorized access. This section covers authentication, authorization, query complexity limits, rate limiting, and error handling, ensuring a robust API.",
      children: [
        {
          name: "Basic Security",
          description:
            "Implement basic security measures for GraphQL APIs. This section explores JWT auth (preferred), role-based access, and schema protection, providing foundational security.",
          children: [
            {
              name: "JWT Authentication",
              description:
                "Use JWT in context, like verify(token). Preferred for stateless authentication.",
              preferred: true,
            },
            {
              name: "Role-Based Access",
              description:
                "Check roles in resolvers, like if (!user.isAdmin) throw Error(). Restricts access.",
            },
            {
              name: "Schema Directives",
              description:
                "Use @auth directive, e.g., type User @auth(requires: ADMIN). Guards schema fields.",
            },
          ],
        },
        {
          name: "Advanced Security",
          description:
            "Enhance security with complexity limits, rate limiting, and error masking. This section ensures production-ready APIs with tools like graphql-shield and rate limiting.",
          children: [
            {
              name: "Query Complexity",
              description:
                "Limit with graphql-cost-analysis, e.g., maxCost: 1000. Prevents expensive queries.",
            },
            {
              name: "Depth Limiting",
              description:
                "Restrict with graphql-depth-limit, e.g., maxDepth: 5. Avoids deep nesting.",
            },
            {
              name: "Rate Limiting",
              description:
                "Use graphql-rate-limit, e.g., max: 100 per minute. Throttles excessive requests.",
            },
            {
              name: "Error Handling",
              description:
                "Mask with formatError: (err) => ({ message: 'Error' }). Hides sensitive data.",
            },
            {
              name: "graphql-shield",
              description:
                "Apply permissions with graphql-shield, e.g., rule(isAuthenticated). Enforces access control.",
              preferred: true,
            },
          ],
        },
      ],
      dividerText: " Utilize GraphQL tools.",
    },
    {
      name: "Development Tools",
      description:
        "Enhance GraphQL development with tools for schema design, querying, and debugging. This section covers GraphiQL, Apollo Studio, codegen, and linting, streamlining your workflow.",
      children: [
        {
          name: "Query Tools",
          description:
            "Interact with GraphQL APIs using query tools. This section explores GraphiQL (preferred), Apollo Studio, and Postman, enabling efficient query testing and exploration.",
          children: [
            {
              name: "GraphiQL",
              description: "In-browser IDE for queries.",
              preferred: true,
            },
            {
              name: "Apollo Studio",
              description: "Cloud tool for schema exploration.",
            },
            {
              name: "Postman",
              description: "HTTP client for GraphQL requests.",
            },
            {
              name: "Insomnia",
              description: "Alternative REST/GraphQL client.",
            },
          ],
        },
        {
          name: "Development Utilities",
          description:
            "Boost productivity with schema generation and linting utilities. This section covers GraphQL Codegen (preferred), schema stitching tools, and linting for consistent development.",
          children: [
            {
              name: "GraphQL Codegen",
              description: "Generate types with graphql-codegen.",
              preferred: true,
            },
            {
              name: "graphql-tools",
              description: "Stitch schemas with mergeSchemas.",
            },
            {
              name: "graphql-eslint",
              description: "Lint schemas with @graphql-eslint.",
            },
            {
              name: "graphql-inspector",
              description: "Validate schema changes.",
            },
          ],
        },
      ],
      dividerText: " Test GraphQL APIs.",
    },
    {
      name: "Testing",
      description:
        "Test GraphQL APIs for reliability and correctness. This section covers unit testing resolvers, integration testing with Apollo Server, schema testing, and mocking, ensuring robust functionality.",
      children: [
        {
          name: "Unit Testing",
          description:
            "Test GraphQL resolvers and logic with unit tests. This section explores Jest (preferred), schema mocking, and resolver testing for individual component verification.",
          children: [
            {
              name: "Jest",
              description: "Test with Jest, like expect(resolver()).toBe().",
              preferred: true,
            },
            {
              name: "Mock Resolvers",
              description: "Mock with jest.fn(), e.g., mockUserResolver().",
            },
            {
              name: "graphql-tools Mocking",
              description: "Mock schema with addMocksToSchema().",
            },
          ],
        },
        {
          name: "Integration Testing",
          description:
            "Perform integration tests on GraphQL APIs. This section covers Apollo Server testing (preferred), query execution, and end-to-end validation for full API testing.",
          children: [
            {
              name: "Apollo Server Testing",
              description: "Test with @apollo/server-testing.",
              preferred: true,
            },
            {
              name: "graphql-request",
              description: "Execute queries with graphql-request.",
            },
            {
              name: "Supertest",
              description: "Test HTTP endpoints with supertest.",
            },
          ],
        },
      ],
      dividerText: " Deploy GraphQL APIs.",
    },
    {
      name: "Deployment",
      description:
        "Deploy GraphQL APIs to production with scalability and performance in mind. This section covers server deployment, cloud platforms, serverless options, and production optimizations, ensuring accessibility.",
      children: [
        {
          name: "Server Deployment",
          description:
            "Deploy GraphQL servers with Node.js and hosting solutions. This section explores PM2 for process management (preferred), cloud platforms, and traditional hosting options.",
          children: [
            {
              name: "Node.js with PM2",
              description: "Run with pm2 start server.js.",
              preferred: true,
            },
            {
              name: "AWS EC2",
              description: "Deploy on EC2 with Node.js runtime.",
            },
            {
              name: "Heroku",
              description: "Deploy with heroku create and git push.",
            },
            {
              name: "DigitalOcean",
              description: "Use Droplets for Node.js hosting.",
            },
          ],
        },
        {
          name: "Serverless and Optimization",
          description:
            "Deploy GraphQL APIs serverlessly and optimize for production. This section covers AWS Lambda (preferred), Vercel, and performance tweaks for efficient scaling.",
          children: [
            {
              name: "AWS Lambda",
              description: "Deploy with Serverless Framework.",
              preferred: true,
            },
            {
              name: "Vercel",
              description: "Deploy with vercel --prod for serverless.",
            },
            {
              name: "Cloudflare Workers",
              description: "Run GraphQL in Workers.",
            },
            {
              name: "Response Caching",
              description: "Cache with Apollo Server’s responseCachePlugin.",
            },
          ],
        },
      ],
      dividerText: " Explore advanced GraphQL topics.",
    },
    {
      name: "Advanced GraphQL Topics",
      description:
        "Master advanced GraphQL features like subscriptions, federation, persisted queries, and schema stitching. This section enhances your skills with real-time data, distributed APIs, and optimized querying.",
      children: [
        {
          name: "Subscriptions",
          description:
            "Implement real-time updates with GraphQL subscriptions. This section covers WebSocket setup (preferred), subscription resolvers, and Pub/Sub patterns for live data applications.",
          children: [
            {
              name: "WebSocket Setup",
              description: "Use subscriptions-transport-ws.",
              preferred: true,
            },
            {
              name: "Subscription Resolvers",
              description: "Define subscription { messageAdded }.",
            },
            {
              name: "Pub/Sub",
              description: "Implement with Redis or in-memory PubSub.",
            },
          ],
        },
        {
          name: "Federation and Optimization",
          description:
            "Build distributed APIs and optimize with advanced techniques. This section covers Apollo Federation (preferred), schema stitching, and persisted queries for scalability.",
          children: [
            {
              name: "Apollo Federation",
              description: "Federate with @apollo/gateway.",
              preferred: true,
            },
            {
              name: "Schema Stitching",
              description: "Stitch with graphql-tools mergeSchemas.",
            },
            {
              name: "Persisted Queries",
              description: "Use APQ with persistgraphql for optimization.",
            },
            {
              name: "Gateway",
              description: "Route with Apollo Gateway for federated services.",
            },
          ],
        },
      ],
      dividerText: " Practice and learn with resources.",
    },
    {
      name: "Practice and Resources",
      description:
        "Apply GraphQL skills through projects and deepen knowledge with resources. This section fosters hands-on experience with APIs, real-time apps, and federated services, alongside ecosystem learning.",
      children: [
        {
          name: "Projects",
          description:
            "Build practical GraphQL projects to reinforce skills, from simple APIs to real-time systems. These exercises solidify schema design, queries, and advanced features for real-world use.",
          children: [
            {
              name: "User API",
              description: "Build a CRUD GraphQL API with JPA.",
            },
            {
              name: "Chat App",
              description: "Real-time app with subscriptions and Redis.",
            },
            {
              name: "Federated Services",
              description: "Combine APIs with Apollo Federation.",
            },
          ],
        },
        {
          name: "Learning Resources",
          description:
            "Access top GraphQL resources, from official docs to tutorials. GraphQL.org is preferred for its comprehensive guidance, complemented by community and tool-specific content.",
          children: [
            {
              name: "GraphQL.org",
              description: "Official GraphQL documentation.",
              preferred: true,
            },
            {
              name: "Apollo Docs",
              description: "Guide for Apollo Server/Client.",
            },
            {
              name: "GraphQL Community",
              description: "Forums and GitHub discussions.",
            },
            {
              name: "Hasura Docs",
              description: "Learn GraphQL with Hasura engine.",
            },
          ],
        },
      ],
    },
    {
      name: "Continuous Learning",
      description:
        "Stay updated with GraphQL’s evolution, tracking updates like schema federation, new specs, and tools. Engage with the community, explore extensions, and adapt to API development trends for cutting-edge skills.",
    },
  ],
};

export default graphqlDeveloperRoadmap;
