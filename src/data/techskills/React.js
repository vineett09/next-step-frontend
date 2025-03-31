const reactDeveloperRoadmap = {
  name: "React Developer Roadmap 2025",
  description:
    "This detailed roadmap offers a step-by-step guide to mastering React.js by 2025, broken into granular phases from foundational skills to advanced specialization. Covering components, hooks, rendering, routing, state management, styling, APIs, and more, it’s enriched with nested subtopics and practical examples—taught with tools like Vite, Next.js, and Jest—for hands-on learners aiming to excel in the 2025 React ecosystem.",
  children: [
    {
      name: "Prerequisites & Foundation",
      description:
        "Establish a strong web development foundation before React, taught with projects like a portfolio site and ES6+ refactoring. This step ensures readiness for React’s demands in 2025.",
      children: [
        {
          name: "HTML & CSS Basics",
          description:
            "Learn HTML and CSS for React layouts, taught with a portfolio site in VS Code.",
          children: [
            {
              name: "Semantic HTML",
              description:
                "Use tags like <header>, taught with a portfolio structure.",
            },
            {
              name: "CSS Flexbox",
              description:
                "Apply Flexbox, taught with a centered card in Chrome DevTools.",
            },
            {
              name: "CSS Grid",
              description: "Master Grid, taught with a portfolio grid example.",
            },
            {
              name: "Responsive Design",
              description:
                "Use media queries, taught with a mobile-first portfolio.",
            },
          ],
        },
        {
          name: "JavaScript Fundamentals",
          description:
            "Build JS skills for React, taught with a to-do list script in Node.js.",
          children: [
            {
              name: "Variables and Scope",
              description:
                "Learn let, const, closures, taught with a scope example.",
            },
            {
              name: "Functions",
              description:
                "Master functions, taught with a to-do add function.",
            },
            {
              name: "Array Methods",
              description:
                "Use .map(), .filter(), taught with a task filter script.",
            },
            {
              name: "Objects",
              description:
                "Manipulate objects, taught with a task object example.",
            },
          ],
        },
        {
          name: "ES6+ Features",
          description:
            "Learn modern JS for React, taught with a refactored to-do list in Vite.",
          children: [
            {
              name: "Destructuring",
              description:
                "Apply destructuring, taught with a task unpack example.",
            },
            {
              name: "Spread/Rest Operators",
              description: "Use spread/rest, taught with a task clone example.",
            },
            {
              name: "Promises & Async/Await",
              description: "Handle async, taught with a mock fetch example.",
            },
            {
              name: "Modules",
              description:
                "Use import/export, taught with a modular to-do list.",
            },
          ],
        },
      ],
      dividerText: "Step 1 complete—proceed to React introduction.",
    },
    {
      name: "Introduction to React",
      description:
        "Get started with React’s core concepts, taught with a Hello World app in Vite. This step introduces React’s essentials for 2025 development.",
      children: [
        {
          name: "What is React?",
          description:
            "Understand React’s basics, taught with a Hello World app.",
          children: [
            {
              name: "Declarative Paradigm",
              description:
                "Learn declarative coding, taught with a UI example.",
            },
            {
              name: "Virtual DOM",
              description: "Explore Virtual DOM, taught with a diff example.",
            },
            {
              name: "React 19 Updates",
              description: "Study 2025 features, taught with React 19 docs.",
            },
          ],
        },
        {
          name: "Setup Your First React App",
          description:
            "Bootstrap a project, taught with Vite setup in VS Code.",
          children: [
            {
              name: "Vite Installation",
              description:
                "Set up with npm create vite, taught with CLI steps.",
            },
            {
              name: "Project Structure",
              description: "Understand src/, taught with a file tweak example.",
            },
            {
              name: "Running the App",
              description: "Use npm run dev, taught with a live server check.",
            },
          ],
        },
      ],
      dividerText: "Step 2 complete—move to React components and JSX.",
    },
    {
      name: "Components and JSX",
      description:
        "Master React components and JSX, taught with a Card component app in Vite. This step builds foundational UI skills for 2025.",
      children: [
        {
          name: "JSX Basics",
          description: "Learn JSX syntax, taught with a Greeting component.",
          children: [
            {
              name: "Syntax Rules",
              description:
                "Understand JSX vs. HTML, taught with a tag example.",
            },
            {
              name: "Expressions",
              description: "Use {} for JS, taught with a dynamic name example.",
            },
            {
              name: "Attributes",
              description: "Apply className, taught with a styled component.",
            },
          ],
        },
        {
          name: "Components",
          description: "Build reusable components, taught with a Card example.",
          children: [
            {
              name: "Functional Components",
              description: "Write as functions, taught with a Card component.",
            },
            {
              name: "Props",
              description: "Pass data, taught with a title/desc Card render.",
            },
            {
              name: "Reusability",
              description: "Reuse components, taught with multiple Cards.",
            },
          ],
        },
      ],
      dividerText: "Step 3 complete—advance to state and events.",
    },
    {
      name: "Basic Hooks and Event Handling",
      description:
        "Learn state management and events, taught with a counter app in Vite. This step introduces interactivity for 2025 apps.",
      children: [
        {
          name: "useState",
          description: "Use useState for state, taught with a counter example.",
          children: [
            {
              name: "State Initialization",
              description: "Set initial state, taught with a count example.",
            },
            {
              name: "State Updates",
              description:
                "Update with setState, taught with an increment button.",
            },
            {
              name: "Multiple States",
              description:
                "Manage multiple states, taught with a reset feature.",
            },
          ],
        },
        {
          name: "Event Handling",
          description: "Handle events, taught with a counter form example.",
          children: [
            {
              name: "Event Syntax",
              description: "Use onClick, taught with a button example.",
            },
            {
              name: "Event Objects",
              description: "Access event data, taught with an input example.",
            },
            {
              name: "Form Events",
              description: "Handle submissions, taught with a set count form.",
            },
          ],
        },
      ],
      dividerText: "Step 4 complete—explore rendering techniques.",
    },
    {
      name: " Rendering Techniques",
      description:
        "Master React rendering, taught with a to-do list app in Vite. This step covers dynamic UI for 2025.",
      children: [
        {
          name: "Rendering Basics",
          description: "Learn rendering mechanics, taught with a list example.",
          children: [
            {
              name: "Rendering Process",
              description: "Understand triggers, taught with a state change.",
            },
            {
              name: "List Rendering",
              description: "Render lists, taught with a task map example.",
            },
            {
              name: "Keys in Lists",
              description: "Assign keys, taught with a task ID example.",
            },
          ],
        },
        {
          name: "Conditional Rendering",
          description:
            "Implement conditional UI, taught with a 'No tasks' message.",
          children: [
            {
              name: "If Statements",
              description:
                "Use if outside JSX, taught with a condition example.",
            },
            {
              name: "Ternary Operators",
              description: "Apply ternaries, taught with a toggle example.",
            },
            {
              name: "Logical &&",
              description: "Use &&, taught with an empty list check.",
            },
          ],
        },
      ],
      dividerText: "Step 5 complete—proceed to forms and side effects.",
    },
    {
      name: "Forms and Side Effects",
      description:
        "Handle forms and side effects, taught with a to-do list app in Vite. This step enhances interactivity for 2025.",
      children: [
        {
          name: "Forms in React",
          description: "Build controlled forms, taught with a task form.",
          children: [
            {
              name: "Controlled Components",
              description: "Bind inputs, taught with a title input example.",
            },
            {
              name: "Form Submission",
              description: "Handle onSubmit, taught with a task add example.",
            },
            {
              name: "Validation",
              description: "Add validation, taught with a required check.",
            },
          ],
        },
        {
          name: "useEffect",
          description: "Use useEffect, taught with a mock API fetch.",
          children: [
            {
              name: "Effect Setup",
              description: "Run on mount, taught with a log example.",
            },
            {
              name: "Dependency Array",
              description: "Control triggers, taught with a fetch example.",
            },
            {
              name: "Cleanup",
              description: "Clean up, taught with a timer example.",
            },
          ],
        },
      ],
      dividerText: "Step 6 complete—add routing and composition.",
    },
    {
      name: "Routing and Composition",
      description:
        "Implement routing and composition, taught with a multi-page to-do app in Vite. This step prepares for complex UIs in 2025.",
      children: [
        {
          name: "Routers",
          description:
            "Add navigation with react-router-dom, taught with page setup.",
          children: [
            {
              name: "Setup Router",
              description: "Configure BrowserRouter, taught with npm steps.",
            },
            {
              name: "Route Definition",
              description: "Define Routes, taught with Home/Tasks examples.",
            },
            {
              name: "Navigation Links",
              description: "Use Link, taught with a navbar example.",
            },
          ],
        },
        {
          name: "Component Composition",
          description:
            "Compose components, taught with a refactored to-do app.",
          children: [
            {
              name: "Child Components",
              description: "Break into TaskItem, taught with a render example.",
            },
            {
              name: "Children Props",
              description: "Pass content, taught with a wrapper example.",
            },
            {
              name: "Prop Drilling",
              description: "Pass props, taught with a delete handler example.",
            },
          ],
        },
      ],
      dividerText: "Step 7 complete—dive into advanced state management.",
    },
    {
      name: "Advanced State Management",
      description:
        "Master advanced state tools, taught with a dashboard in Vite. This step scales state handling for 2025 apps.",
      children: [
        {
          name: "Advanced Hooks",
          description:
            "Use useContext and useReducer, taught with a theme/task example.",
          children: [
            {
              name: "useContext",
              description: "Manage global state, taught with a theme example.",
            },
            {
              name: "useReducer",
              description: "Handle logic, taught with a task reducer example.",
            },
            {
              name: "Combining Hooks",
              description: "Use together, taught with a combo example.",
            },
          ],
        },
        {
          name: "State Management Libraries",
          description: "Use React-Redux, taught with a post management system.",
          children: [
            {
              name: "Redux Setup",
              description: "Configure store, taught with npm steps.",
            },
            {
              name: "Actions & Reducers",
              description: "Define actions, taught with a post add example.",
            },
            {
              name: "useSelector & useDispatch",
              description: "Access state, taught with a post list example.",
            },
          ],
        },
      ],
      dividerText: "Step 8 complete—optimize and integrate APIs.",
    },
    {
      name: "Optimization and API Integration",
      description:
        "Optimize performance and fetch data, taught with a dashboard in Vite using Axios. This step enhances 2025 app efficiency.",
      children: [
        {
          name: "Performance Optimization",
          description: "Optimize rendering, taught with useMemo in a list.",
          children: [
            {
              name: "useMemo",
              description: "Memoize values, taught with a computed example.",
            },
            {
              name: "useCallback",
              description: "Memoize functions, taught with a handler example.",
            },
            {
              name: "React.memo",
              description:
                "Prevent re-renders, taught with a memoized component.",
            },
          ],
        },
        {
          name: "API Calls",
          description: "Integrate APIs, taught with a post fetch example.",
          children: [
            {
              name: "Fetch API",
              description: "Use fetch, taught with a GET example.",
            },
            {
              name: "Axios",
              description: "Use Axios, taught with a post fetch example.",
            },
            {
              name: "State Handling",
              description: "Manage loading/errors, taught with a UI example.",
            },
          ],
        },
      ],
      dividerText: "Step 9 complete—enhance with custom hooks and errors.",
    },
    {
      name: "Custom Hooks and Error Handling",
      description:
        "Build custom hooks and handle errors, taught with a dashboard in Vite. This step refines 2025 app robustness.",
      children: [
        {
          name: "Custom Hooks",
          description: "Create reusable hooks, taught with a useFetch example.",
          children: [
            {
              name: "Hook Creation",
              description: "Build useFetch, taught with a fetch logic example.",
            },
            {
              name: "Hook Reuse",
              description: "Reuse in components, taught with a post fetch.",
            },
            {
              name: "Hook Testing",
              description: "Test with Jest, taught with a mock test case.",
            },
          ],
        },
        {
          name: "Error Boundaries",
          description: "Handle errors, taught with a boundary in a dashboard.",
          children: [
            {
              name: "Boundary Setup",
              description: "Create boundary, taught with a catch example.",
            },
            {
              name: "Error Display",
              description: "Show fallback, taught with an error UI example.",
            },
            {
              name: "Integration",
              description: "Wrap components, taught with an API error example.",
            },
          ],
        },
      ],
      dividerText: "Step 10 complete—adopt professional tools.",
    },
    {
      name: "Professional Development Tools",
      description:
        "Use professional tools like TypeScript and testing, taught with a dashboard in Vite. This step prepares for 2025 careers.",
      children: [
        {
          name: "TypeScript with React",
          description:
            "Integrate TypeScript, taught with a dashboard conversion.",
          children: [
            {
              name: "TypeScript Basics",
              description: "Learn types, taught with a props example.",
            },
            {
              name: "React Integration",
              description: "Add TS, taught with a typed component.",
            },
            {
              name: "Type Checking",
              description: "Use linting, taught with an error catch.",
            },
          ],
        },
        {
          name: "Testing",
          description: "Test apps with Jest/RTL, taught with dashboard tests.",
          children: [
            {
              name: "Jest Setup",
              description: "Configure Jest, taught with a setup example.",
            },
            {
              name: "React Testing Library",
              description: "Test components, taught with a render test.",
            },
            {
              name: "Coverage",
              description: "Check coverage, taught with a report example.",
            },
          ],
        },
      ],
      dividerText: "Step 11 complete—style and enhance with libraries.",
    },
    {
      name: "Styling and Libraries",
      description:
        "Style apps and use libraries, taught with a dashboard in Vite. This step improves 2025 app polish.",
      children: [
        {
          name: "CSS Frameworks",
          description: "Style with frameworks, taught with Tailwind CSS.",
          children: [
            {
              name: "Tailwind CSS",
              description: "Use utilities, taught with a styled component.",
            },
            {
              name: "Material UI",
              description: "Apply MUI, taught with a button example.",
            },
            {
              name: "Styled-Components",
              description: "Use CSS-in-JS, taught with a styled div.",
            },
          ],
        },
        {
          name: "Libraries",
          description: "Enhance with libraries, taught with React Query.",
          children: [
            {
              name: "Axios",
              description: "Simplify calls, taught with a fetch example.",
            },
            {
              name: "React Query",
              description: "Manage data, taught with a query example.",
            },
            {
              name: "Lodash",
              description: "Use utilities, taught with a debounce example.",
            },
          ],
        },
      ],
      dividerText: "Step 12 complete—explore frameworks and deployment.",
    },
    {
      name: "Frameworks and Deployment",
      description:
        "Learn Next.js and deploy apps, taught with a blog app in VS Code. This step scales for 2025 production.",
      children: [
        {
          name: "Next.js",
          description: "Use Next.js for SSR/SSG, taught with a blog migration.",
          children: [
            {
              name: "Setup Next.js",
              description: "Create app, taught with npx create-next-app.",
            },
            {
              name: "SSR",
              description: "Implement SSR, taught with getServerSideProps.",
            },
            {
              name: "SSG",
              description: "Use SSG, taught with getStaticProps.",
            },
          ],
        },
        {
          name: "Deployment",
          description: "Deploy to Vercel, taught with a blog app launch.",
          children: [
            {
              name: "Vercel Setup",
              description: "Link to Vercel, taught with CLI steps.",
            },
            {
              name: "Environment Variables",
              description: "Configure env, taught with a .env example.",
            },
            {
              name: "Deploy Process",
              description: "Run deploy, taught with a URL example.",
            },
          ],
        },
      ],
      dividerText: "Step 13 complete—master advanced patterns.",
    },
    {
      name: "Advanced Patterns and Rendering",
      description:
        "Master advanced React patterns and rendering, taught with a dashboard in Vite. This step refines 2025 expertise.",
      children: [
        {
          name: "Advanced Patterns",
          description:
            "Use advanced patterns, taught with a Compound Component.",
          children: [
            {
              name: "HOCs",
              description: "Build HOC, taught with a withAuth example.",
            },
            {
              name: "Render Props",
              description: "Use render props, taught with a tracker example.",
            },
            {
              name: "Compound Components",
              description: "Create compound UIs, taught with a tab example.",
            },
          ],
        },
        {
          name: "Advanced Rendering",
          description: "Explore React 19 rendering, taught with Suspense.",
          children: [
            {
              name: "Suspense",
              description: "Use Suspense, taught with a lazy load example.",
            },
            {
              name: "Server Components",
              description: "Learn server rendering, taught with Next.js docs.",
            },
            {
              name: "Transitions",
              description: "Manage transitions, taught with a loading example.",
            },
          ],
        },
      ],
      dividerText: "Step 14 complete—pursue mastery and specialization.",
    },
    {
      name: "Mastery and Specialization",
      description:
        "Achieve mastery and specialize, taught with a React Native app in VS Code. This step prepares for 2025 leadership.",
      children: [
        {
          name: "React Internals",
          description: "Study internals, taught with Fiber exploration.",
          children: [
            {
              name: "Reconciliation",
              description: "Learn diffing, taught with a trace example.",
            },
            {
              name: "Fiber Architecture",
              description:
                "Understand Fiber, taught with a scheduling example.",
            },
            {
              name: "React 19 Compiler",
              description: "Explore compiler, taught with docs analysis.",
            },
          ],
        },
        {
          name: "Contribute to Open Source",
          description: "Contribute to React, taught with a PR to react-router.",
          children: [
            {
              name: "Find Projects",
              description: "Identify repos, taught with search tips.",
            },
            {
              name: "Fork & Clone",
              description: "Set up locally, taught with git steps.",
            },
            {
              name: "Submit PR",
              description: "Push change, taught with a PR example.",
            },
          ],
        },
        {
          name: "Specialization",
          description: "Specialize in a niche, taught with a React Native app.",
          children: [
            {
              name: "React Native",
              description: "Build mobile apps, taught with Expo setup.",
            },
            {
              name: "GraphQL with Apollo",
              description: "Use Apollo, taught with a data fetch example.",
            },
            {
              name: "Framer Motion",
              description: "Add animations, taught with a fade-in example.",
            },
          ],
        },
        {
          name: "Build Your Own Library",
          description: "Create a hook, taught with a useLocalStorage package.",
          children: [
            {
              name: "Hook Development",
              description: "Code hook, taught with a storage example.",
            },
            {
              name: "Packaging",
              description: "Bundle with Rollup, taught with a config example.",
            },
            {
              name: "Publishing",
              description: "Push to npm, taught with publish steps.",
            },
          ],
        },
      ],
      dividerText: "Step 15 complete—commit to continuous learning.",
    },
    {
      name: "Continuous Learning",
      description:
        "Stay updated in 2025, taught with resources like React.dev and X posts.",
      children: [
        {
          name: "Documentation",
          description:
            "Track updates via React.dev, taught with a dive example.",
        },
        {
          name: "Conferences",
          description: "Attend React Conf, taught with a signup guide.",
        },
        {
          name: "Community",
          description: "Follow X/Reddit, taught with trend tracking tips.",
        },
      ],
    },
  ],
};

export default reactDeveloperRoadmap;
