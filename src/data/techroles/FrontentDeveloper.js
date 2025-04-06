const frontendDeveloperRoadmap = {
  name: "Frontend Developer Roadmap 2025",
  children: [
    {
      name: "Mastering the Fundamentals",
      children: [
        {
          name: "HTML5",
          children: [
            {
              name: "Semantic Tags",
            },
            {
              name: "Forms",
            },
            {
              name: "Canvas and SVG",
            },
          ],
        },
        {
          name: "CSS3",
          children: [
            {
              name: "Basics",
            },
            {
              name: "Flexbox",
            },
            {
              name: "Grid",
            },
            {
              name: "Media Queries",
            },
            {
              name: "Animations",
            },
          ],
        },
        {
          name: "JavaScript (ES6+)",
          children: [
            {
              name: "Variables & Scope",
            },
            {
              name: "Functions",
            },
            {
              name: "DOM Manipulation",
            },
            {
              name: "Async/Await",
            },
            {
              name: "Modules",
            },
            {
              name: "Classes",
            },
          ],
        },
      ],
      dividerText: "Fundamentals mastered—streamline with development tools.",
    },
    {
      name: "Tools for Development Workflow",
      children: [
        {
          name: "Version Control Systems",
          children: [
            {
              name: "Git",
              preferred: true,
            },
            {
              name: "GitHub",
            },
            {
              name: "GitLab",
            },
            {
              name: "Bitbucket",
            },
          ],
        },
        {
          name: "Package Managers",
          children: [
            {
              name: "npm",
              preferred: true,
            },
            {
              name: "Yarn",
            },
            {
              name: "pnpm",
            },
          ],
        },
        {
          name: "Build Tools and Module Bundlers",
          children: [
            {
              name: "Webpack",
            },
            {
              name: "Vite",
              preferred: true,
            },
            {
              name: "Rollup",
            },
          ],
        },
      ],
      dividerText: "Tools optimized—build with front-end frameworks.",
    },
    {
      name: "Front-End Frameworks and Libraries",
      children: [
        {
          name: "React.js",
          preferred: true,
          children: [
            {
              name: "Components",
            },
            {
              name: "Hooks",
            },
            {
              name: "JSX",
            },
            {
              name: "React Router",
            },
          ],
        },
        {
          name: "Angular",
          children: [
            {
              name: "Components",
            },
            {
              name: "Directives",
            },
            {
              name: "Services",
            },
            {
              name: "Routing",
            },
          ],
        },
        {
          name: "Vue.js",
          children: [
            {
              name: "Directives",
            },
            {
              name: "Reactivity",
            },
            {
              name: "Vue CLI",
            },
            {
              name: "Vue Router",
            },
          ],
        },
        {
          name: "Svelte",
          children: [
            {
              name: "Syntax",
            },
            {
              name: "SvelteKit",
            },
            {
              name: "Stores",
            },
          ],
        },
      ],
      dividerText: "Frameworks built—enhance with styling and state.",
    },
    {
      name: "Styling and State Management",
      children: [
        {
          name: "Styling Libraries and Preprocessors",
          children: [
            {
              name: "Sass",
            },
            {
              name: "Tailwind CSS",
              preferred: true,
            },
            {
              name: "Styled-Components",
            },
          ],
        },
        {
          name: "State Management",
          children: [
            {
              name: "Redux",
              preferred: true,
            },
            {
              name: "Recoil",
            },
            {
              name: "Context API",
            },
          ],
        },
      ],
      dividerText: "Styling and state enhanced—connect with APIs and data.",
    },
    {
      name: "APIs and Data Fetching",
      children: [
        {
          name: "RESTful APIs",
          preferred: true,
          children: [
            {
              name: "HTTP Methods",
            },
            {
              name: "Fetch API",
            },
            {
              name: "Axios",
            },
          ],
        },
        {
          name: "GraphQL",
          children: [
            {
              name: "Queries",
            },
            {
              name: "Mutations",
            },
            {
              name: "Subscriptions",
            },
          ],
        },
        {
          name: "Apollo Client",
          children: [
            {
              name: "Setup",
            },
            {
              name: "useQuery",
            },
            {
              name: "Caching",
            },
          ],
        },
      ],
      dividerText:
        "Data connected—ensure quality with testing and optimization.",
    },
    {
      name: "Testing and Optimization",
      children: [
        {
          name: "Testing",
          children: [
            {
              name: "Jest",
              preferred: true,
            },
            {
              name: "Cypress",
            },
            {
              name: "React Testing Library",
            },
          ],
        },
        {
          name: "Performance Optimization",
          children: [
            {
              name: "Lazy Loading",
            },
            {
              name: "Code Splitting",
            },
            {
              name: "Minification",
            },
            {
              name: "Lighthouse",
            },
          ],
        },
      ],
      dividerText: "Quality ensured—build mobile-friendly PWAs.",
    },
    {
      name: "Progressive Web Apps and Mobile-Friendly Design",
      children: [
        {
          name: "Responsive Design",
          children: [
            {
              name: "Breakpoints",
            },
            {
              name: "Viewport Meta",
            },
            {
              name: "Touch Events",
            },
          ],
        },
        {
          name: "Progressive Web Apps",
          children: [
            {
              name: "Service Workers",
            },
            {
              name: "Web App Manifest",
            },
            {
              name: "Push Notifications",
            },
          ],
        },
      ],
      dividerText:
        "Mobile apps crafted—master advanced techniques and security.",
    },
    {
      name: "Advanced Techniques and Security",
      children: [
        {
          name: "Server-Side Rendering (SSR)",
          children: [
            {
              name: "Next.js",
            },
          ],
        },
        {
          name: "WebAssembly",
          children: [
            {
              name: "Basics",
            },
            {
              name: "Rust Integration",
            },
          ],
        },
        {
          name: "Web Security",
          children: [
            {
              name: "XSS Prevention",
            },
            {
              name: "CSRF Protection",
            },
            {
              name: "HTTPS",
            },
          ],
        },
      ],
      dividerText: "Advanced skills secured—prepare for career readiness.",
    },
    {
      name: "Career Readiness and Soft Skills",
      children: [
        {
          name: "Portfolio Development",
          children: [
            {
              name: "Projects",
            },
            {
              name: "Code Quality",
            },
            {
              name: "Deployment",
            },
          ],
        },
        {
          name: "Soft Skills",
          children: [
            {
              name: "Communication",
            },
            {
              name: "Collaboration",
            },
            {
              name: "Problem-Solving",
            },
            {
              name: "Time Management",
            },
          ],
        },
      ],
      dividerText: "Career ready—commit to continuous learning.",
    },
    {
      name: "Continuous Learning",
    },
  ],
};

export default frontendDeveloperRoadmap;
