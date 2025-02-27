const frontendDeveloperRoadmap = {
  name: "Frontend Developer Roadmap 2025",
  description:
    "This detailed guide equips aspiring front-end developers with essential skills for 2025, progressing from web fundamentals to advanced techniques. It covers HTML, CSS, JavaScript, frameworks, APIs, testing, PWAs, and career readiness, with practical tools and soft skills. Designed for practical mastery, it ensures readiness to craft modern, performant, user-friendly interfaces aligned with industry trends.",
  children: [
    {
      name: "Mastering the Fundamentals",
      description:
        "Build a solid foundation in web development essentials, taught with examples like structuring a webpage with HTML5 or styling with CSS3. This section covers HTML, CSS, and JavaScript—critical in 2025 for creating structured, styled, and interactive interfaces, forming the bedrock of front-end expertise for modern applications.",
      children: [
        {
          name: "HTML5",
          description:
            "Master semantic HTML5 for content structure, taught with examples using <article> tags or forms. A 2025 foundational skill, this section ensures developers build accessible, SEO-friendly websites, meeting user and search engine needs effectively with modern markup.",
          children: [
            {
              name: "Semantic Tags",
              description:
                "Use semantic tags like <nav>, taught with layout examples. A 2025 essential skill for accessibility and SEO.",
            },
            {
              name: "Forms",
              description:
                "Build forms with validation, taught with input examples. A 2025 key skill for user input.",
            },

            {
              name: "Canvas and SVG",
              description:
                "Create graphics with <canvas> or SVG, taught with examples. A 2025 skill for visuals.",
            },
          ],
        },
        {
          name: "CSS3",
          description:
            "Craft responsive designs with CSS3, taught with Flexbox layouts or media queries. A 2025 core skill, this section enables developers to create visually appealing, adaptable interfaces, enhancing user experience across devices effectively.",
          children: [
            {
              name: "Basics",
              description:
                "Learn selectors and box model, taught with styling examples. A 2025 essential skill for layouts.",
            },
            {
              name: "Flexbox",
              description:
                "Design flexible layouts, taught with alignment examples. A 2025 key skill for responsiveness.",
            },
            {
              name: "Grid",
              description:
                "Build grid layouts, taught with template examples. A 2025 critical skill for complex designs.",
            },
            {
              name: "Media Queries",
              description:
                "Adapt with breakpoints, taught with mobile examples. Preferred in 2025 for device compatibility.",
            },
            {
              name: "Animations",
              description:
                "Create animations with transitions, taught with examples. A 2025 skill for engagement.",
            },
          ],
        },
        {
          name: "JavaScript (ES6+)",
          description:
            "Add interactivity with JavaScript, taught with async/await examples or DOM updates. A 2025 foundational skill, this section empowers developers to build dynamic, responsive front-ends, enhancing user experience with clean, modern code in web applications.",
          children: [
            {
              name: "Variables & Scope",
              description:
                "Manage with let/const, taught with examples. A 2025 essential skill for data handling.",
            },
            {
              name: "Functions",
              description:
                "Use arrow functions, taught with closure examples. A 2025 key skill for logic.",
            },
            {
              name: "DOM Manipulation",
              description:
                "Modify with querySelector, taught with examples. A 2025 critical skill for interactivity.",
            },
            {
              name: "Async/Await",
              description:
                "Handle async tasks, taught with fetch examples. Preferred in 2025 for efficiency.",
            },
            {
              name: "Modules",
              description:
                "Organize with import/export, taught with examples. A 2025 vital skill for scalability.",
            },
            {
              name: "Classes",
              description:
                "Use ES6 classes, taught with examples. A 2025 skill for structure.",
            },
          ],
        },
      ],
      dividerText: "Fundamentals mastered—streamline with development tools.",
    },
    {
      name: "Tools for Development Workflow",
      description:
        "Set up an efficient workflow with Git and npm, taught with examples configuring repositories or managing dependencies. A 2025 essential skill, this section boosts productivity, enabling front-end developers to collaborate, build, and deploy modern web applications effectively.",
      children: [
        {
          name: "Version Control Systems",
          description:
            "Track code with Git, taught with examples branching for a React app. A 2025 core skill, this section ensures front-end developers can manage changes and collaborate seamlessly, maintaining project history and integrity in team workflows.",
          children: [
            {
              name: "Git",
              preferred: true,
              description:
                "Master Git with commands, taught with commit examples. Preferred in 2025 for universal adoption.",
            },
            {
              name: "GitHub",
              description:
                "Host with GitHub, taught with PR examples. A 2025 key skill for collaboration.",
            },
            {
              name: "GitLab",
              description:
                "Use GitLab CI/CD, taught with setups. A 2025 practical skill for automation.",
            },
            {
              name: "Bitbucket",
              description:
                "Collaborate with Bitbucket, taught with examples. A 2025 skill for teams.",
            },
          ],
        },
        {
          name: "Package Managers",
          description:
            "Manage dependencies with npm, taught with examples installing React libraries. A 2025 critical skill, this section ensures front-end developers can efficiently integrate tools, maintaining project consistency and scalability in modern workflows.",
          children: [
            {
              name: "npm",
              preferred: true,
              description:
                "Install with npm, taught with package.json examples. Preferred in 2025 for JavaScript dominance.",
            },
            {
              name: "Yarn",
              description:
                "Use Yarn for fast installs, taught with examples. A 2025 practical skill for speed.",
            },
            {
              name: "pnpm",
              description:
                "Use pnpm for efficient installs, taught with examples. A 2025 skill for performance.",
            },
          ],
        },
        {
          name: "Build Tools and Module Bundlers",
          description:
            "Optimize code with Webpack, taught with examples bundling a React app. A 2025 essential skill, this section ensures front-end developers can prepare high-performance applications, enhancing build efficiency and scalability for production-ready web projects.",
          children: [
            {
              name: "Webpack",
              description:
                "Bundle with Webpack, taught with config examples. A 2025 core skill for assets.",
            },
            {
              name: "Vite",
              preferred: true,
              description:
                "Build with Vite, taught with HMR examples. Preferred in 2025 for speed and simplicity.",
            },
            {
              name: "Rollup",
              description:
                "Use Rollup for modules, taught with examples. A 2025 skill for libraries.",
            },
          ],
        },
      ],
      dividerText: "Tools optimized—build with front-end frameworks.",
    },
    {
      name: "Front-End Frameworks and Libraries",
      description:
        "Create dynamic UIs with React and Angular, taught with examples building components or directives. A 2025 high-demand skill, this section enables developers to craft scalable, interactive web applications, leveraging industry-standard tools for modern front-end development effectively.",
      children: [
        {
          name: "React.js",
          preferred: true,
          description:
            "Develop with React.js, taught with hooks and components for a dashboard. A 2025 dominant skill, this section builds reusable, performant UIs, ensuring front-end developers can handle complex, interactive web applications efficiently.",
          children: [
            {
              name: "Components",
              description:
                "Build with props, taught with examples. A 2025 essential skill for modularity.",
            },
            {
              name: "Hooks",
              description:
                "Use useState, taught with state examples. Preferred in 2025 for simplicity.",
            },
            {
              name: "JSX",
              description:
                "Write JSX, taught with markup examples. A 2025 core skill for React.",
            },
            {
              name: "React Router",
              description:
                "Navigate with Router, taught with examples. A 2025 practical skill for routing.",
            },
          ],
        },
        {
          name: "Angular",
          description:
            "Build with Angular, taught with TypeScript components for an app. A 2025 critical skill, this section offers a robust framework for enterprise front-ends, ensuring developers can create structured, scalable web applications effectively.",
          children: [
            {
              name: "Components",
              description:
                "Create with Angular, taught with examples. A 2025 essential skill for modularity.",
            },
            {
              name: "Directives",
              description:
                "Use *ngIf, taught with examples. A 2025 key skill for logic.",
            },
            {
              name: "Services",
              description:
                "Manage state, taught with examples. A 2025 practical skill for logic.",
            },
            {
              name: "Routing",
              description:
                "Navigate with Router, taught with examples. A 2025 vital skill for apps.",
            },
          ],
        },
        {
          name: "Vue.js",
          description:
            "Develop with Vue.js, taught with directives for a reactive UI. A 2025 valuable skill, this section provides an approachable framework for modern front-ends, enabling developers to build efficient, interactive web applications effectively.",
          children: [
            {
              name: "Directives",
              description:
                "Use v-if, taught with examples. A 2025 essential skill for reactivity.",
            },
            {
              name: "Reactivity",
              description:
                "Bind data, taught with examples. A 2025 key skill for state.",
            },
            {
              name: "Vue CLI",
              description:
                "Scaffold with CLI, taught with setups. A 2025 practical skill for projects.",
            },
            {
              name: "Vue Router",
              description:
                "Navigate with Router, taught with examples. A 2025 core skill for navigation.",
            },
          ],
        },
        {
          name: "Svelte",
          description:
            "Build with Svelte, taught with reactive syntax for a fast app. A 2025 modern skill, this section offers a compiler-based approach for lightweight front-ends, ensuring developers can create performant, efficient web applications effectively.",
          children: [
            {
              name: "Syntax",
              description:
                "Write reactive code, taught with examples. A 2025 essential skill for performance.",
            },
            {
              name: "SvelteKit",
              description:
                "Use SvelteKit, taught with setups. A 2025 key skill for full-stack.",
            },
            {
              name: "Stores",
              description:
                "Manage state, taught with examples. A 2025 practical skill for state.",
            },
          ],
        },
      ],
      dividerText: "Frameworks built—enhance with styling and state.",
    },
    {
      name: "Styling and State Management",
      description:
        "Improve UI design and logic with Tailwind and Redux, taught with examples styling a React app or managing state. A 2025 critical skill, this section ensures front-end developers craft visually appealing, scalable applications, meeting modern design and interactivity demands effectively.",
      children: [
        {
          name: "Styling Libraries and Preprocessors",
          description:
            "Enhance CSS with Tailwind and Sass, taught with examples styling a responsive layout. A 2025 essential skill, this section streamlines front-end design, enabling developers to create consistent, maintainable styles for modern web applications efficiently.",
          children: [
            {
              name: "Sass",
              description:
                "Use Sass for nested styles, taught with variable examples. A 2025 core skill for maintainability.",
            },
            {
              name: "Tailwind CSS",
              preferred: true,
              description:
                "Style with Tailwind, taught with utility examples. Preferred in 2025 for speed and customization.",
            },
            {
              name: "Styled-Components",
              description:
                "Style with components, taught with React examples. A 2025 skill for modularity.",
            },
          ],
        },
        {
          name: "State Management",
          description:
            "Manage app state with Redux, taught with examples centralizing React state. A 2025 critical skill, this section ensures front-end developers handle complex, interactive applications, maintaining predictability and scalability for large-scale web projects effectively.",
          children: [
            {
              name: "Redux",
              preferred: true,
              description:
                "Centralize with Redux, taught with store examples. Preferred in 2025 for predictability.",
            },
            {
              name: "Recoil",
              description:
                "Use Recoil for React state, taught with atom examples. A 2025 modern skill for simplicity.",
            },
            {
              name: "Context API",
              description:
                "Share state with Context, taught with useContext examples. A 2025 practical skill for small apps.",
            },
          ],
        },
      ],
      dividerText: "Styling and state enhanced—connect with APIs and data.",
    },
    {
      name: "APIs and Data Fetching",
      description:
        "Integrate front-ends with data using REST and GraphQL, taught with examples fetching a user API in React. A 2025 essential skill, this section ensures developers build dynamic, data-driven web applications, connecting seamlessly to back-end services for modern, interactive experiences.",
      children: [
        {
          name: "RESTful APIs",
          preferred: true,
          description:
            "Consume REST APIs, taught with Fetch examples for a blog app. A 2025 core skill, this section enables front-end data integration, ensuring developers can fetch and display external data effectively in web projects.",
          children: [
            {
              name: "HTTP Methods",
              description:
                "Use GET/POST, taught with examples. A 2025 essential skill for REST.",
            },
            {
              name: "Fetch API",
              description:
                "Fetch with Fetch API, taught with async examples. Preferred in 2025 for native use.",
            },
            {
              name: "Axios",
              description:
                "Simplify with Axios, taught with examples. A 2025 practical skill for requests.",
            },
          ],
        },
        {
          name: "GraphQL",
          description:
            "Query with GraphQL, taught with Apollo examples for a dashboard. A 2025 critical skill, this section modernizes data fetching, offering flexible, efficient front-end integration for complex web applications.",
          children: [
            {
              name: "Queries",
              description:
                "Fetch data, taught with syntax examples. A 2025 essential skill for precision.",
            },
            {
              name: "Mutations",
              description:
                "Modify data, taught with examples. A 2025 key skill for updates.",
            },
            {
              name: "Subscriptions",
              description:
                "Enable real-time, taught with examples. A 2025 practical skill for live data.",
            },
          ],
        },
        {
          name: "Apollo Client",
          description:
            "Manage GraphQL with Apollo, taught with React setups for a blog. A 2025 valuable skill, this section streamlines front-end data, ensuring efficient, reusable data handling in modern web applications.",
          children: [
            {
              name: "Setup",
              description:
                "Configure Apollo, taught with examples. A 2025 essential skill for integration.",
            },
            {
              name: "useQuery",
              description:
                "Fetch with useQuery, taught with examples. A 2025 key skill for React.",
            },
            {
              name: "Caching",
              description:
                "Optimize with caching, taught with examples. A 2025 practical skill for speed.",
            },
          ],
        },
      ],
      dividerText:
        "Data connected—ensure quality with testing and optimization.",
    },
    {
      name: "Testing and Optimization",
      description:
        "Validate and optimize front-ends with Jest and Lighthouse, taught with examples testing a React app or auditing performance. A 2025 critical skill, this section ensures robust, fast web applications, meeting user expectations and industry standards for reliability and speed effectively.",
      children: [
        {
          name: "Testing",
          description:
            "Test with Jest and Cypress, taught with examples for a React form. A 2025 essential skill, this section verifies front-end functionality, catching bugs early to ensure high-quality, interactive web applications.",
          children: [
            {
              name: "Jest",
              preferred: true,
              description:
                "Test with Jest, taught with unit examples. Preferred in 2025 for JavaScript testing.",
            },
            {
              name: "Cypress",
              description:
                "E2E test with Cypress, taught with user flow examples. A 2025 practical skill for apps.",
            },
            {
              name: "React Testing Library",
              description:
                "Test with RTL, taught with component examples. A 2025 key skill for React.",
            },
          ],
        },
        {
          name: "Performance Optimization",
          description:
            "Boost performance with lazy loading, taught with examples for a React app. A 2025 critical skill, this section ensures fast, user-friendly web applications, enhancing load times and scalability for modern front-ends effectively.",
          children: [
            {
              name: "Lazy Loading",
              description:
                "Defer with React.lazy, taught with examples. A 2025 essential skill for speed.",
            },
            {
              name: "Code Splitting",
              description:
                "Split with Webpack, taught with examples. A 2025 key skill for bundles.",
            },
            {
              name: "Minification",
              description:
                "Minify with tools, taught with examples. A 2025 practical skill for assets.",
            },
            {
              name: "Lighthouse",
              description:
                "Audit with Lighthouse, taught with DevTools examples. Preferred in 2025 for performance.",
            },
          ],
        },
      ],
      dividerText: "Quality ensured—build mobile-friendly PWAs.",
    },
    {
      name: "Progressive Web Apps and Mobile-Friendly Design",
      description:
        "Create mobile-optimized PWAs, taught with service workers and responsive design for a React app. A 2025 high-demand skill, this section delivers app-like web experiences, enhancing usability and offline capabilities across devices effectively.",
      children: [
        {
          name: "Responsive Design",
          description:
            "Ensure compatibility with media queries, taught with examples for a mobile layout. A 2025 essential skill, this section optimizes front-ends for all devices, meeting mobile-first user expectations in 2025 web development.",
          children: [
            {
              name: "Breakpoints",
              description:
                "Set with queries, taught with examples. A 2025 core skill for responsiveness.",
            },
            {
              name: "Viewport Meta",
              description:
                "Scale with meta tags, taught with examples. A 2025 key skill for mobile.",
            },
            {
              name: "Touch Events",
              description:
                "Handle with JavaScript, taught with swipe examples. A 2025 practical skill for UX.",
            },
          ],
        },
        {
          name: "Progressive Web Apps",
          description:
            "Build offline-capable PWAs, taught with manifests for a React app. A 2025 critical skill, this section merges web and app features, ensuring modern, installable front-ends for enhanced user engagement.",
          children: [
            {
              name: "Service Workers",
              description:
                "Cache with workers, taught with examples. A 2025 core skill for offline.",
            },
            {
              name: "Web App Manifest",
              description:
                "Define with manifest.json, taught with examples. Preferred in 2025 for installability.",
            },
            {
              name: "Push Notifications",
              description:
                "Implement pushes, taught with examples. A 2025 practical skill for engagement.",
            },
          ],
        },
      ],
      dividerText:
        "Mobile apps crafted—master advanced techniques and security.",
    },
    {
      name: "Advanced Techniques and Security",
      description:
        "Explore cutting-edge front-end tech and security, taught with Next.js SSR and HTTPS for a React app. A 2025 high-value skill, this section prepares developers for performant, secure web applications, ensuring competitiveness in a fast-evolving industry.",
      children: [
        {
          name: "Server-Side Rendering (SSR)",
          description:
            "Optimize with Next.js, taught with SSR examples for a blog. A 2025 critical skill, this section improves performance and SEO, ensuring front-end developers can deliver fast, search-friendly web applications effectively.",
          children: [
            {
              name: "Next.js",
              description:
                "Use Next.js for SSR, taught with setups. Preferred in 2025 for React performance.",
            },
          ],
        },
        {
          name: "WebAssembly",
          description:
            "Run high-performance code with WebAssembly, taught with Rust examples for a game. A 2025 advanced skill, this section boosts front-end speed, enabling complex computations in web applications efficiently.",
          children: [
            {
              name: "Basics",
              description:
                "Learn WASM concepts, taught with examples. A 2025 essential skill for performance.",
            },
            {
              name: "Rust Integration",
              description:
                "Compile Rust to WASM, taught with examples. A 2025 key skill for speed.",
            },
          ],
        },
        {
          name: "Web Security",
          description:
            "Protect apps with XSS prevention, taught with examples for a React form. A 2025 vital skill, this section safeguards front-end data, ensuring secure, trustworthy web applications against modern threats.",
          children: [
            {
              name: "XSS Prevention",
              description:
                "Sanitize with DOMPurify, taught with examples. A 2025 essential skill for safety.",
            },
            {
              name: "CSRF Protection",
              description:
                "Use tokens, taught with examples. A 2025 key skill for security.",
            },
            {
              name: "HTTPS",
              description:
                "Secure with HTTPS, taught with SSL examples. Preferred in 2025 for encryption.",
            },
          ],
        },
      ],
      dividerText: "Advanced skills secured—prepare for career readiness.",
    },
    {
      name: "Career Readiness and Soft Skills",
      description:
        "Prepare for a front-end career with portfolios and soft skills, taught with examples building a React project or collaborating on a team. A 2025 strategic skill, this section ensures employability and success, combining technical prowess with professional abilities effectively.",
      children: [
        {
          name: "Portfolio Development",
          description:
            "Showcase skills with projects, taught with examples deploying a React app. A 2025 critical skill, this section builds a compelling portfolio, demonstrating front-end expertise to potential employers tangibly and professionally.",
          children: [
            {
              name: "Projects",
              description:
                "Build apps, taught with examples. A 2025 essential skill for proof.",
            },
            {
              name: "Code Quality",
              description:
                "Write clean code, taught with examples. A 2025 key skill for standards.",
            },
            {
              name: "Deployment",
              description:
                "Deploy on Netlify, taught with examples. Preferred in 2025 for simplicity.",
            },
          ],
        },
        {
          name: "Soft Skills",
          description:
            "Develop non-technical skills, taught with scenarios like presenting to stakeholders. A 2025 vital skill, this section ensures front-end developers excel in teamwork, communication, and problem-solving, enhancing professional effectiveness.",
          children: [
            {
              name: "Communication",
              description:
                "Explain tech, taught with examples. A 2025 essential skill for teams.",
            },
            {
              name: "Collaboration",
              description:
                "Work with teams, taught with examples. A 2025 key skill for projects.",
            },
            {
              name: "Problem-Solving",
              description:
                "Debug issues, taught with examples. A 2025 practical skill for efficiency.",
            },
            {
              name: "Time Management",
              description:
                "Manage tasks, taught with examples. A 2025 skill for deadlines.",
            },
          ],
        },
      ],
      dividerText: "Career ready—commit to continuous learning.",
    },
    {
      name: "Continuous Learning",
      description:
        "Stay current with front-end trends, taught with resources like MDN and conferences. A 2025 lifelong skill, this section ensures adaptability to new tools, frameworks, and techniques, keeping developers competitive in the fast-evolving web landscape.",
    },
  ],
};

export default frontendDeveloperRoadmap;
