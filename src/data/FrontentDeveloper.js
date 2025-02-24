const frontendDeveloperRoadmap = {
  name: "Frontend Developer Roadmap 2025",
  description:
    "This detailed step-by-step guide prepares aspiring front-end developers for proficiency in 2025, covering core skills, tools, frameworks, and career readiness. It progresses from mastering web fundamentals to advanced techniques like WebAssembly and PWAs. Designed for practical learning, it ensures developers can craft modern, performant, and user-friendly interfaces aligned with industry trends.",
  children: [
    {
      name: "Mastering the Fundamentals",
      description:
        "This section builds a strong foundation in web development essentials, focusing on HTML, CSS, and JavaScript. Learners master the core technologies that power modern websites. It’s the critical starting point in 2025, ensuring developers can create structured, styled, and interactive interfaces as the bedrock of front-end expertise.",
      children: [
        {
          name: "HTML5",
          description:
            "HTML5 teaches semantic structuring for web content, using modern tags and attributes effectively. This section emphasizes accessibility and SEO-friendly markup. It’s a foundational skill in 2025, enabling developers to build well-organized, inclusive websites that meet current standards and user expectations seamlessly.",
          children: [
            {
              name: "Semantic Tags",
              description:
                "Semantic Tags like <article>, <section>, and <nav> enhance accessibility and SEO, taught with practical layouts. This section improves content meaning. It’s an essential skill in 2025, ensuring websites are machine-readable and user-friendly for diverse audiences and search engines.",
            },
            {
              name: "Forms",
              description:
                "Forms create interactive inputs with validation like 'required', taught with examples. This section covers user data collection effectively. It’s a key skill in 2025, enabling developers to design intuitive, secure forms for web applications like sign-ups or surveys.",
            },
            {
              name: "Accessibility (ARIA)",
              description:
                "ARIA attributes enhance screen reader support, taught with roles and states. This section improves inclusivity in HTML5. It’s a vital skill in 2025, ensuring web content is accessible to all users, meeting legal and ethical web development standards.",
            },
          ],
        },
        {
          name: "CSS3",
          description:
            "CSS3 explores styling for responsive, modern designs, taught with Flexbox and Grid. This section focuses on visual layout and adaptability. It’s a core skill in 2025, enabling developers to craft aesthetically pleasing, device-agnostic interfaces that enhance user experience across platforms.",
          children: [
            {
              name: "Basics",
              description:
                "Basics cover selectors, properties, and the box model, taught with styling examples. This section builds CSS foundations. It’s an essential skill in 2025, providing the groundwork for controlling web presentation and layout effectively in any project.",
            },
            {
              name: "Flexbox",
              description:
                "Flexbox creates flexible, one-dimensional layouts, taught with alignment examples. This section simplifies responsive design challenges. It’s a key skill in 2025, enabling developers to build adaptive, user-friendly interfaces with minimal code for modern web applications.",
            },
            {
              name: "Grid",
              description:
                "Grid designs complex, two-dimensional layouts, taught with grid-template setups. This section tackles intricate design needs. It’s a critical skill in 2025, offering powerful control over web layouts for visually rich, responsive front-end experiences.",
            },
            {
              name: "Media Queries",
              description:
                "Media Queries apply responsive design, taught with breakpoints for all screens. This section ensures device compatibility. It’s a practical skill in 2025, adapting styles dynamically to enhance usability across mobile, tablet, and desktop devices.",
            },
          ],
        },
        {
          name: "JavaScript (ES6+)",
          description:
            "JavaScript (ES6+) adds interactivity with modern features, taught with async coding. This section enhances dynamic web functionality. It’s a foundational skill in 2025, empowering developers to create engaging, responsive user experiences with clean, efficient code in front-end projects.",
          children: [
            {
              name: "Variables & Scope",
              description:
                "Variables & Scope use let and const with block scope, taught with examples. This section manages data effectively. It’s an essential skill in 2025, ensuring clean, predictable variable handling in JavaScript-driven web applications.",
            },
            {
              name: "Functions",
              description:
                "Functions explore arrow syntax and closures, taught with practical uses. This section builds reusable logic. It’s a key skill in 2025, enabling concise, maintainable code for interactive front-end features and behaviors.",
            },
            {
              name: "DOM Manipulation",
              description:
                "DOM Manipulation selects and modifies elements, taught with querySelector. This section creates dynamic UIs. It’s a critical skill in 2025, driving real-time updates and interactivity in web pages for enhanced user engagement.",
            },
            {
              name: "Async/Await",
              description:
                "Async/Await handles asynchronous tasks like fetching, taught with examples. This section simplifies data operations. It’s a practical skill in 2025, ensuring smooth, efficient handling of external data in front-end applications.",
            },
            {
              name: "Modules",
              description:
                "Modules organize code with import/export, taught with file structuring. This section enhances scalability. It’s a vital skill in 2025, keeping large JavaScript projects modular and maintainable for team collaboration.",
            },
          ],
        },
      ],
    },
    {
      name: "Tools for Development Workflow",
      description:
        "This section sets up an efficient workflow with tools like Git and Webpack, taught with practical setups. Learners streamline coding and collaboration. It’s an essential skill in 2025, boosting productivity and ensuring front-end developers can manage projects effectively in modern environments.",
      children: [
        {
          name: "Version Control Systems",
          description:
            "Version Control Systems track and manage code changes, taught with Git workflows. This section ensures collaborative development. It’s a core skill in 2025, enabling front-end developers to maintain project history and work seamlessly in teams.",
          children: [
            {
              name: "Git",
              description:
                "Git masters version control, taught with branching and merging. This section manages code history and collaboration effectively. It’s a foundational skill in 2025, critical for tracking front-end code changes and integrating with team workflows.",
              children: [
                {
                  name: "Commands",
                  description:
                    "Commands like git init and commit, taught with examples. This section covers essential Git operations. It’s an essential skill in 2025, enabling developers to manage repositories and collaborate efficiently on front-end projects.",
                },
                {
                  name: "GitHub",
                  description:
                    "GitHub hosts repos and pull requests, taught with workflows. This section enhances team collaboration. It’s a key skill in 2025, providing a platform for front-end code sharing and version control integration.",
                },
                {
                  name: "GitLab",
                  description:
                    "GitLab offers CI/CD with version control, taught with setups. This section explores an alternative platform. It’s a practical skill in 2025, adding automation to front-end development workflows for efficiency.",
                },
              ],
            },
          ],
        },
        {
          name: "Package Managers",
          description:
            "Package Managers install and manage dependencies, taught with npm setups. This section streamlines front-end tooling. It’s a critical skill in 2025, ensuring developers can efficiently integrate libraries and maintain project dependencies seamlessly.",
          children: [
            {
              name: "npm",
              description:
                "npm manages libraries and scripts, taught with install commands. This section simplifies dependency handling in front-end projects. It’s a core skill in 2025, foundational for incorporating tools and frameworks into development workflows.",
              children: [
                {
                  name: "Basics",
                  description:
                    "Basics run npm init and scripts, taught with examples. This section sets up front-end projects. It’s an essential skill in 2025, enabling developers to start and manage JavaScript-based applications effectively.",
                },
                {
                  name: "package.json",
                  description:
                    "package.json configures dependencies, taught with edits. This section manages project metadata. It’s a key skill in 2025, ensuring front-end projects are well-organized and dependency-ready for builds.",
                },
              ],
            },
            {
              name: "Yarn",
              description:
                "Yarn offers fast installs and caching, taught with commands. This section enhances npm with performance. It’s a practical skill in 2025, providing an alternative for managing front-end dependencies efficiently in large projects.",
              children: [
                {
                  name: "Commands",
                  description:
                    "Commands like yarn add, taught with examples. This section manages dependencies quickly. It’s a valuable skill in 2025, speeding up front-end development workflows with reliable package handling.",
                },
              ],
            },
          ],
        },
        {
          name: "Build Tools and Module Bundlers",
          description:
            "Build Tools and Bundlers optimize code, taught with Webpack configs. This section prepares front-end apps for production. It’s an essential skill in 2025, ensuring efficient asset management and performance for modern web applications.",
          children: [
            {
              name: "Webpack",
              description:
                "Webpack bundles assets and dependencies, taught with configurations. This section optimizes front-end builds effectively. It’s a core skill in 2025, handling modules and assets for scalable, performant web applications in production.",
              children: [
                {
                  name: "Configuration",
                  description:
                    "Configuration sets entry and loaders, taught with files. This section customizes Webpack builds. It’s an essential skill in 2025, tailoring front-end bundling for specific project needs efficiently.",
                },
                {
                  name: "Plugins",
                  description:
                    "Plugins like HtmlWebpackPlugin, taught with examples. This section enhances Webpack functionality. It’s a key skill in 2025, automating tasks like HTML generation in front-end builds.",
                },
              ],
            },
            {
              name: "Vite",
              description:
                "Vite uses ES modules for fast development, taught with setups. This section boosts front-end productivity. It’s a modern skill in 2025, offering rapid builds and hot reloading for efficient development workflows.",
              children: [
                {
                  name: "Setup",
                  description:
                    "Setup initializes Vite with HMR, taught with commands. This section speeds up front-end coding. It’s a practical skill in 2025, enhancing development with instant feedback loops.",
                },
                {
                  name: "Performance",
                  description:
                    "Performance leverages quick starts, taught with examples. This section optimizes build times. It’s a valuable skill in 2025, ensuring fast, efficient front-end development cycles.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Front-End Frameworks and Libraries",
      description:
        "This section builds dynamic UIs with frameworks like React, taught with component examples. Learners create reusable, scalable interfaces. It’s a high-demand skill in 2025, enabling developers to craft modern, interactive web applications using industry-standard tools efficiently.",
      children: [
        {
          name: "React.js",
          description:
            "React.js creates reusable, component-based UIs, taught with hooks and JSX. This section focuses on scalable front-end development. It’s a dominant skill in 2025, widely used for its flexibility and performance in building interactive web applications.",
          children: [
            {
              name: "Components",
              description:
                "Components build functional UIs with props, taught with examples. This section modularizes React apps. It’s an essential skill in 2025, enabling reusable, maintainable front-end code for dynamic interfaces.",
            },
            {
              name: "Hooks",
              description:
                "Hooks like useState manage state, taught with examples. This section enhances React functionality. It’s a key skill in 2025, simplifying state and effects in front-end components efficiently.",
            },
            {
              name: "JSX",
              description:
                "JSX writes HTML-like code in JS, taught with syntax. This section blends markup and logic. It’s a core skill in 2025, streamlining React UI development with intuitive, readable code.",
            },
            {
              name: "React Router",
              description:
                "React Router adds routing, taught with setups. This section navigates React apps. It’s a practical skill in 2025, enabling seamless page transitions in single-page applications.",
            },
          ],
        },
        {
          name: "Angular",
          description:
            "Angular builds dynamic UIs with TypeScript, taught with components. This section focuses on enterprise-grade front-end apps. It’s a critical skill in 2025, offering a robust framework for large-scale, structured web development projects.",
          children: [
            {
              name: "Components",
              description:
                "Components create UIs in Angular, taught with examples. This section builds modular front-end apps. It’s an essential skill in 2025, ensuring reusable, organized code in complex applications.",
            },
            {
              name: "Directives",
              description:
                "Directives like *ngIf manage rendering, taught with syntax. This section enhances Angular UIs. It’s a key skill in 2025, controlling dynamic content efficiently in front-end development.",
            },
            {
              name: "Services",
              description:
                "Services manage state in Angular, taught with examples. This section centralizes logic. It’s a practical skill in 2025, enabling clean, maintainable state handling in front-end apps.",
            },
            {
              name: "Routing",
              description:
                "Routing navigates with Angular Router, taught with configs. This section handles page transitions. It’s a vital skill in 2025, ensuring smooth navigation in Angular-based web applications.",
            },
          ],
        },
        {
          name: "Vue.js",
          description:
            "Vue.js develops reactive UIs, taught with directives and CLI. This section offers an approachable front-end framework. It’s a valuable skill in 2025, balancing simplicity and power for crafting modern, interactive web experiences efficiently.",
          children: [
            {
              name: "Directives",
              description:
                "Directives like v-if render dynamically, taught with examples. This section controls Vue UI logic. It’s an essential skill in 2025, enabling flexible, reactive front-end designs with minimal effort.",
            },
            {
              name: "Reactivity",
              description:
                "Reactivity binds data in Vue, taught with examples. This section updates UIs automatically. It’s a key skill in 2025, simplifying front-end state management for seamless user experiences.",
            },
            {
              name: "Vue CLI",
              description:
                "Vue CLI scaffolds projects, taught with setups. This section streamlines Vue development. It’s a practical skill in 2025, accelerating front-end app creation with built-in tools.",
            },
            {
              name: "Vue Router",
              description:
                "Vue Router navigates apps, taught with configs. This section handles routing in Vue. It’s a core skill in 2025, ensuring smooth transitions in single-page Vue applications.",
            },
          ],
        },
        {
          name: "Svelte",
          description:
            "Svelte builds UIs with a compiler, taught with reactive syntax. This section eliminates runtime overhead for performance. It’s a modern skill in 2025, offering a fresh, efficient approach to front-end development with lightweight, fast applications.",
          children: [
            {
              name: "Syntax",
              description:
                "Syntax writes reactive code, taught with examples. This section skips virtual DOM in Svelte. It’s an essential skill in 2025, enabling fast, intuitive front-end development with less complexity.",
            },
            {
              name: "SvelteKit",
              description:
                "SvelteKit offers full-stack tools, taught with setups. This section handles routing and SSR. It’s a key skill in 2025, unifying front-end and back-end development in Svelte projects.",
            },
            {
              name: "Stores",
              description:
                "Stores manage state reactively, taught with examples. This section simplifies Svelte state. It’s a practical skill in 2025, enhancing front-end apps with efficient, scalable state management.",
            },
          ],
        },
      ],
    },
    {
      name: "Styling and State Management",
      description:
        "This section enhances UI development with styling and state tools, taught with Tailwind and Redux. Learners improve design and logic scalability. It’s a critical skill in 2025, ensuring front-end developers craft visually appealing, manageable applications for complex projects.",
      children: [
        {
          name: "Styling Libraries and Preprocessors",
          description:
            "Styling Libraries and Preprocessors boost CSS efficiency, taught with Sass and Tailwind. This section scales front-end design workflows. It’s an essential skill in 2025, enabling developers to create consistent, maintainable styles for modern web applications effectively.",
          children: [
            {
              name: "Sass",
              description:
                "Sass enhances CSS with features, taught with nesting examples. This section improves style maintainability. It’s a core skill in 2025, streamlining front-end styling with reusable, organized code for large-scale projects.",
              children: [
                {
                  name: "Variables",
                  description:
                    "Variables define reusable values, taught with Sass syntax. This section simplifies style updates. It’s an essential skill in 2025, ensuring consistent front-end design across applications.",
                },
                {
                  name: "Mixins",
                  description:
                    "Mixins create reusable blocks, taught with examples. This section reduces CSS repetition. It’s a key skill in 2025, enhancing front-end style efficiency and scalability.",
                },
                {
                  name: "Nesting",
                  description:
                    "Nesting organizes styles hierarchically, taught with Sass. This section improves readability. It’s a practical skill in 2025, structuring front-end CSS for clarity and maintenance.",
                },
              ],
            },
            {
              name: "Tailwind CSS",
              description:
                "Tailwind CSS uses utility-first styling, taught with classes. This section speeds up UI development. It’s a modern skill in 2025, offering rapid, customizable front-end design with minimal custom CSS.",
              children: [
                {
                  name: "Utilities",
                  description:
                    "Utilities apply classes like flex, taught with examples. This section builds UIs fast. It’s an essential skill in 2025, enabling efficient front-end styling without extensive CSS.",
                },
                {
                  name: "Customization",
                  description:
                    "Customization tweaks themes, taught with config files. This section tailors Tailwind. It’s a key skill in 2025, adapting styles to unique front-end project needs.",
                },
                {
                  name: "JIT Mode",
                  description:
                    "JIT Mode compiles instantly, taught with setups. This section boosts build speed. It’s a practical skill in 2025, optimizing front-end development performance.",
                },
              ],
            },
          ],
        },
        {
          name: "State Management",
          description:
            "State Management handles app state, taught with Redux and Context. This section ensures scalable front-end logic. It’s a critical skill in 2025, managing complexity in interactive, data-driven web applications efficiently.",
          children: [
            {
              name: "Redux",
              description:
                "Redux centralizes state in React, taught with store setups. This section manages complex app logic. It’s a core skill in 2025, ensuring predictable state in large front-end projects.",
              children: [
                {
                  name: "Actions",
                  description:
                    "Actions dispatch events, taught with examples. This section updates Redux state. It’s an essential skill in 2025, driving front-end interactivity systematically.",
                },
                {
                  name: "Reducers",
                  description:
                    "Reducers define state changes, taught with logic. This section manages Redux updates. It’s a key skill in 2025, keeping front-end state predictable.",
                },
                {
                  name: "Redux Toolkit",
                  description:
                    "Redux Toolkit simplifies setup, taught with slices. This section streamlines Redux. It’s a practical skill in 2025, enhancing front-end state efficiency.",
                },
              ],
            },
            {
              name: "Recoil",
              description:
                "Recoil uses atoms for React state, taught with examples. This section simplifies state management. It’s a modern skill in 2025, offering a lightweight alternative for front-end apps.",
              children: [
                {
                  name: "Atoms",
                  description:
                    "Atoms create shareable state, taught with setups. This section manages Recoil data. It’s an essential skill in 2025, enabling modular front-end state.",
                },
                {
                  name: "Selectors",
                  description:
                    "Selectors compute state, taught with examples. This section derives Recoil data. It’s a key skill in 2025, optimizing front-end state calculations.",
                },
              ],
            },
            {
              name: "Context API",
              description:
                "Context API shares state, taught with useContext. This section avoids props drilling in React. It’s a practical skill in 2025, simplifying front-end state for smaller apps.",
              children: [
                {
                  name: "useContext",
                  description:
                    "useContext accesses state, taught with examples. This section uses Context API. It’s a core skill in 2025, enhancing front-end state sharing.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "APIs and Data Fetching",
      description:
        "This section connects front-ends to data sources, taught with Fetch and GraphQL. Learners fetch and manage external data efficiently. It’s an essential skill in 2025, enabling dynamic, data-driven web applications that integrate seamlessly with back-end services.",
      children: [
        {
          name: "RESTful APIs",
          description:
            "RESTful APIs consume services, taught with HTTP requests. This section integrates front-ends with back-ends. It’s a core skill in 2025, ensuring developers can fetch and display data from REST endpoints in web applications.",
          children: [
            {
              name: "HTTP Methods",
              description:
                "HTTP Methods like GET and POST, taught with examples. This section handles REST interactions. It’s an essential skill in 2025, enabling front-end data operations with RESTful services.",
            },
            {
              name: "Fetch API",
              description:
                "Fetch API makes requests, taught with async examples. This section fetches data natively. It’s a key skill in 2025, providing a built-in way to connect front-ends to APIs.",
            },
            {
              name: "Axios",
              description:
                "Axios simplifies HTTP calls, taught with setups. This section enhances REST fetching. It’s a practical skill in 2025, streamlining front-end data retrieval with a popular library.",
            },
          ],
        },
        {
          name: "GraphQL",
          description:
            "GraphQL queries data efficiently, taught with Apollo examples. This section modernizes front-end data fetching. It’s a critical skill in 2025, offering precise, flexible data retrieval for dynamic web applications.",
          children: [
            {
              name: "Queries",
              description:
                "Queries fetch specific data, taught with syntax. This section uses GraphQL efficiently. It’s an essential skill in 2025, optimizing front-end data requests for performance.",
            },
            {
              name: "Mutations",
              description:
                "Mutations modify data, taught with examples. This section updates servers via GraphQL. It’s a key skill in 2025, enabling front-end data manipulation seamlessly.",
            },
            {
              name: "Subscriptions",
              description:
                "Subscriptions set real-time updates, taught with configs. This section enhances GraphQL interactivity. It’s a practical skill in 2025, supporting live front-end data feeds.",
            },
          ],
        },
        {
          name: "Apollo Client",
          description:
            "Apollo Client integrates GraphQL with React, taught with setups. This section manages data fetching efficiently. It’s a valuable skill in 2025, streamlining GraphQL use in front-end applications for robust data handling.",
          children: [
            {
              name: "Setup",
              description:
                "Setup configures Apollo, taught with endpoints. This section connects GraphQL to React. It’s an essential skill in 2025, enabling front-end GraphQL integration.",
            },
            {
              name: "useQuery",
              description:
                "useQuery fetches with hooks, taught with examples. This section uses Apollo in React. It’s a key skill in 2025, simplifying GraphQL data in front-ends.",
            },
            {
              name: "Caching",
              description:
                "Caching boosts performance, taught with Apollo. This section optimizes GraphQL fetches. It’s a practical skill in 2025, enhancing front-end speed with cached data.",
            },
          ],
        },
      ],
    },
    {
      name: "Testing and Optimization",
      description:
        "This section ensures app reliability and performance, taught with Jest and Lighthouse. Learners validate and enhance front-end code. It’s a critical skill in 2025, guaranteeing robust, fast web applications that meet user expectations and industry standards effectively.",
      children: [
        {
          name: "Testing",
          description:
            "Testing validates code with Jest and Cypress, taught with examples. This section ensures front-end reliability across scenarios. It’s an essential skill in 2025, catching bugs and ensuring quality in interactive web applications before deployment.",
          children: [
            {
              name: "Jest",
              description:
                "Jest writes unit tests, taught with React examples. This section validates front-end logic and components. It’s a core skill in 2025, ensuring code correctness and integration in development workflows.",
              children: [
                {
                  name: "Assertions",
                  description:
                    "Assertions use expect(), taught with tests. This section checks front-end outcomes. It’s an essential skill in 2025, verifying expected behavior in code.",
                },
                {
                  name: "React Testing Library",
                  description:
                    "React Testing Library tests components, taught with examples. This section ensures UI reliability. It’s a key skill in 2025, validating React front-ends effectively.",
                },
              ],
            },
            {
              name: "Cypress",
              description:
                "Cypress performs end-to-end tests, taught with scripts. This section validates front-end user flows. It’s a practical skill in 2025, ensuring complete app functionality from a user perspective.",
              children: [
                {
                  name: "Commands",
                  description:
                    "Commands like cy.visit(), taught with tests. This section automates front-end checks. It’s an essential skill in 2025, simulating user actions accurately.",
                },
                {
                  name: "Assertions",
                  description:
                    "Assertions with should(), taught with examples. This section verifies UI behavior. It’s a key skill in 2025, ensuring front-end expectations are met.",
                },
              ],
            },
          ],
        },
        {
          name: "Performance Optimization",
          description:
            "Performance Optimization enhances speed, taught with lazy loading. This section improves front-end efficiency. It’s a critical skill in 2025, ensuring fast, user-friendly web applications that compete in a performance-driven digital landscape.",
          children: [
            {
              name: "Lazy Loading",
              description:
                "Lazy Loading defers assets with React.lazy(), taught with examples. This section speeds up front-ends. It’s an essential skill in 2025, reducing initial load times effectively.",
            },
            {
              name: "Code Splitting",
              description:
                "Code Splitting uses dynamic imports, taught with Webpack. This section optimizes bundle sizes. It’s a key skill in 2025, enhancing front-end load performance.",
            },
            {
              name: "Minification",
              description:
                "Minification reduces files, taught with build tools. This section shrinks front-end assets. It’s a practical skill in 2025, boosting app speed with smaller payloads.",
            },
            {
              name: "Lighthouse",
              description:
                "Lighthouse audits performance, taught with DevTools. This section optimizes front-ends. It’s a vital skill in 2025, ensuring high scores in speed and usability.",
            },
          ],
        },
      ],
    },
    {
      name: "Progressive Web Apps and Mobile-Friendly Design",
      description:
        "This section creates mobile-optimized PWAs, taught with service workers. Learners build modern, offline-capable apps. It’s a high-demand skill in 2025, delivering app-like experiences on the web with enhanced usability across devices.",
      children: [
        {
          name: "Responsive Design",
          description:
            "Responsive Design ensures device compatibility, taught with media queries. This section optimizes front-ends for all screens. It’s an essential skill in 2025, meeting the mobile-first expectations of modern web users effectively.",
          children: [
            {
              name: "Breakpoints",
              description:
                "Breakpoints set media queries, taught with examples. This section adapts layouts responsively. It’s a core skill in 2025, ensuring front-ends fit mobile to desktop screens.",
            },
            {
              name: "Viewport Meta",
              description:
                "Viewport Meta scales with <meta>, taught with tags. This section ensures proper mobile display. It’s a key skill in 2025, optimizing front-end rendering on devices.",
            },
            {
              name: "Touch Events",
              description:
                "Touch Events handle swipes, taught with JavaScript. This section enhances mobile UX. It’s a practical skill in 2025, improving front-end interactivity on touch devices.",
            },
          ],
        },
        {
          name: "Progressive Web Apps",
          description:
            "Progressive Web Apps enable offline use, taught with manifests. This section builds installable front-ends. It’s a critical skill in 2025, merging web and app experiences for modern, user-friendly applications.",
          children: [
            {
              name: "Service Workers",
              description:
                "Service Workers cache assets, taught with setups. This section enables offline front-ends. It’s a core skill in 2025, ensuring app reliability without connectivity.",
              children: [
                {
                  name: "Registration",
                  description:
                    "Registration adds service workers, taught with scripts. This section activates offline features. It’s an essential skill in 2025, enabling PWA functionality.",
                },
                {
                  name: "Caching",
                  description:
                    "Caching uses Cache API, taught with examples. This section stores front-end assets. It’s a key skill in 2025, optimizing offline performance.",
                },
              ],
            },
            {
              name: "Web App Manifest",
              description:
                "Web App Manifest makes apps installable, taught with JSON. This section enhances PWA usability. It’s a practical skill in 2025, improving front-end accessibility on devices.",
              children: [
                {
                  name: "manifest.json",
                  description:
                    "manifest.json defines metadata, taught with examples. This section sets PWA identity. It’s an essential skill in 2025, enabling app-like installs.",
                },
                {
                  name: "PWA Installation",
                  description:
                    "PWA Installation tests prompts, taught with mobile. This section ensures installability. It’s a key skill in 2025, verifying front-end PWA readiness.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Advanced Techniques and Security",
      description:
        "This section explores advanced front-end tech and security, taught with Next.js and HTTPS. Learners enhance performance and safety. It’s a high-value skill in 2025, preparing developers for cutting-edge, secure web development in a competitive industry.",
      children: [
        {
          name: "Server-Side Rendering (SSR)",
          description:
            "SSR optimizes performance and SEO, taught with Next.js. This section pre-renders front-end content. It’s a critical skill in 2025, improving load times and searchability for modern web applications effectively.",
          children: [
            {
              name: "Next.js",
              description:
                "Next.js implements SSR and SSG, taught with setups. This section enhances front-end rendering. It’s a core skill in 2025, offering a powerful framework for performant React apps.",
              children: [
                {
                  name: "getServerSideProps",
                  description:
                    "getServerSideProps fetches at request, taught with examples. This section enables SSR. It’s an essential skill in 2025, serving dynamic front-end content.",
                },
                {
                  name: "getStaticProps",
                  description:
                    "getStaticProps pre-renders, taught with setups. This section boosts SSG. It’s a key skill in 2025, optimizing static front-end performance.",
                },
                {
                  name: "Incremental Static Regeneration",
                  description:
                    "ISR updates statically, taught with configs. This section refreshes SSG. It’s a practical skill in 2025, balancing front-end speed and freshness.",
                },
              ],
            },
          ],
        },
        {
          name: "WebAssembly",
          description:
            "WebAssembly runs high-performance code, taught with Rust examples. This section boosts front-end speed. It’s an advanced skill in 2025, enabling complex computation in web applications efficiently.",
          children: [
            {
              name: "Basics",
              description:
                "Basics cover WASM’s role, taught with concepts. This section enhances front-end performance. It’s an essential skill in 2025, supporting intensive tasks in browsers.",
            },
            {
              name: "Rust Integration",
              description:
                "Rust compiles to WASM, taught with demos. This section integrates high-speed code. It’s a key skill in 2025, optimizing front-end apps with Rust.",
            },
          ],
        },
        {
          name: "Web Security",
          description:
            "Web Security protects apps, taught with XSS prevention. This section ensures front-end safety. It’s a vital skill in 2025, safeguarding user data and app integrity against common vulnerabilities.",
          children: [
            {
              name: "XSS Prevention",
              description:
                "XSS Prevention sanitizes inputs, taught with examples. This section secures front-ends. It’s an essential skill in 2025, blocking malicious script injections.",
            },
            {
              name: "CSRF Protection",
              description:
                "CSRF Protection uses tokens, taught with setups. This section prevents unauthorized actions. It’s a key skill in 2025, securing front-end forms.",
            },
            {
              name: "HTTPS",
              description:
                "HTTPS ensures secure transfers, taught with SSL. This section protects front-end data. It’s a practical skill in 2025, enforcing encrypted communication.",
            },
          ],
        },
      ],
    },
    {
      name: "Career Readiness and Soft Skills",
      description:
        "This section prepares for a front-end career, taught with portfolio building. Learners develop technical and soft skills for success. It’s a strategic skill in 2025, ensuring employability and effectiveness in professional web development roles.",
      children: [
        {
          name: "Portfolio Development",
          description:
            "Portfolio Development showcases skills, taught with project examples. This section prepares front-end devs for jobs. It’s a critical skill in 2025, proving expertise with tangible, impressive work to potential employers.",
          children: [
            {
              name: "Projects",
              description:
                "Projects build unique apps, taught with e-commerce examples. This section creates portfolio pieces. It’s an essential skill in 2025, demonstrating front-end capabilities practically.",
            },
            {
              name: "Code Quality",
              description:
                "Code Quality writes clean code, taught with examples. This section enhances portfolio appeal. It’s a key skill in 2025, ensuring professional front-end standards.",
            },
            {
              name: "Deployment",
              description:
                "Deployment hosts on Netlify, taught with setups. This section shares front-end work. It’s a practical skill in 2025, making projects accessible online.",
            },
          ],
        },
        {
          name: "Soft Skills",
          description:
            "Soft Skills develop non-technical abilities, taught with scenarios. This section ensures front-end success in teams. It’s a vital skill in 2025, complementing technical expertise for effective collaboration and problem-solving.",
          children: [
            {
              name: "Communication",
              description:
                "Communication explains tech to non-devs, taught with examples. This section bridges gaps. It’s an essential skill in 2025, aiding front-end collaboration.",
            },
            {
              name: "Collaboration",
              description:
                "Collaboration works with teams, taught with scenarios. This section enhances front-end teamwork. It’s a key skill in 2025, syncing with designers and devs.",
            },
            {
              name: "Problem-Solving",
              description:
                "Problem-Solving debugs code, taught with examples. This section optimizes front-ends. It’s a practical skill in 2025, fixing issues efficiently.",
            },
          ],
        },
      ],
    },
    {
      name: "Continuous Learning",
      description:
        "Continuous Learning keeps front-end devs current, taught with resources. This section ensures adaptability in 2025’s evolving field. It’s a lifelong skill, maintaining relevance with emerging trends and technologies in web development.",
    },
  ],
};

export default frontendDeveloperRoadmap;
