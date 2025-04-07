const vueDeveloperRoadmap = {
  name: "Vue.js Developer Roadmap for Beginners to Advanced 2025",
  children: [
    {
      name: "Starting with Vue.js",
      children: [
        {
          name: "Vue.js Basics",
          children: [
            {
              name: "What is Vue.js",
            },
            {
              name: "History",
            },
            {
              name: "Advantages",
            },
            {
              name: "Vue 2 vs Vue 3",
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
              name: "Node.js and npm",
            },
            {
              name: "Vue CLI",
            },
            {
              name: "Vite",
            },
            {
              name: "First Project",
            },
            {
              name: "VS Code",
            },
            {
              name: "Project Structure",
            },
          ],
        },
      ],
      dividerText: " Master Vue.js components.",
    },
    {
      name: "Components",
      children: [
        {
          name: "Component Fundamentals",
          children: [
            {
              name: "Component Creation",
            },
            {
              name: "Single-File Components",
            },
            {
              name: "Component Registration",
            },
          ],
        },
        {
          name: "Component Features",
          children: [
            {
              name: "Props",
            },
            {
              name: "Events",
            },
            {
              name: "Slots",
            },
            {
              name: "Scoped Slots",
            },
          ],
        },
      ],
      dividerText: " Master Vue.js directives.",
    },
    {
      name: "Directives",
      children: [
        {
          name: "Built-in Directives",
          children: [
            {
              name: "v-bind",
            },
            {
              name: "v-if",
            },
            {
              name: "v-for",
            },
            {
              name: "v-model",
            },
            {
              name: "v-show",
            },
            {
              name: "v-on",
            },
            {
              name: "v-once",
            },
            {
              name: "v-pre",
            },
            {
              name: "v-cloak",
            },
          ],
        },
        {
          name: "Custom Directives",
          children: [
            {
              name: "Directive Definition",
            },
            {
              name: "Directive Hooks",
            },
            {
              name: "Directive Usage",
            },
          ],
        },
      ],
      dividerText: " Master Vue.js rendering.",
    },
    {
      name: "Rendering",
      children: [
        {
          name: "Template Rendering",
          children: [
            {
              name: "Basic Templates",
            },
            {
              name: "Conditional Rendering",
            },
            {
              name: "List Rendering",
            },
          ],
        },
        {
          name: "Advanced Rendering",
          children: [
            {
              name: "Render Functions",
            },
            {
              name: "JSX",
            },
            {
              name: "Dynamic Components",
            },
            {
              name: "Functional Components",
            },
          ],
        },
      ],
      dividerText: " Configure Vue.js applications.",
    },
    {
      name: "App Configuration",
      children: [
        {
          name: "Vue Instance",
          children: [
            {
              name: "Options API",
            },
            {
              name: "Lifecycle Hooks",
            },
            {
              name: "Global Properties",
            },
          ],
        },
        {
          name: "App Settings",
          children: [
            {
              name: "Environment Variables",
            },
            {
              name: "Vue Plugins",
            },
            {
              name: "TypeScript Setup",
            },
            {
              name: "Vue Config",
            },
          ],
        },
      ],
      dividerText: " Handle events and reactivity.",
    },
    {
      name: "Event Handling and Reactivity",
      children: [
        {
          name: "Event Handling",
          children: [
            {
              name: "Event Listeners",
            },
            {
              name: "Event Modifiers",
            },
            {
              name: "Custom Events",
            },
            {
              name: "Event Bus",
            },
          ],
        },
        {
          name: "Reactivity",
          children: [
            {
              name: "Reactive Data (Options API)",
            },
            {
              name: "Ref and Reactive (Composition API)",
            },
            {
              name: "Computed Properties",
            },
            {
              name: "Watchers",
            },
            {
              name: "Reactivity Caveats",
            },
          ],
        },
      ],
      dividerText: " Implement routing and navigation.",
    },
    {
      name: "Routing and Navigation",
      children: [
        {
          name: "Routing Basics",
          children: [
            {
              name: "Route Configuration",
            },
            {
              name: "Router View",
            },
            {
              name: "Router Link",
            },
            {
              name: "Route Parameters",
            },
            {
              name: "Programmatic Navigation",
            },
          ],
        },
        {
          name: "Advanced Routing",
          children: [
            {
              name: "Lazy Loading",
            },
            {
              name: "Navigation Guards",
            },
            {
              name: "Nested Routes",
            },
            {
              name: "Route Meta",
            },
          ],
        },
      ],
      dividerText: " Manage state in Vue.js.",
    },
    {
      name: "State Management",
      children: [
        {
          name: "State Basics",
          children: [
            {
              name: "Why State Management",
            },
            {
              name: "Reactive State",
            },
          ],
        },
        {
          name: "State Libraries",
          children: [
            {
              name: "Pinia",
              preferred: true,
            },
            { name: "Vuex" },
            {
              name: "Vuex 4",
            },
          ],
        },
      ],
      dividerText: " Work with forms and validation.",
    },
    {
      name: "Forms and Validation",
      children: [
        {
          name: "Form Handling",
          children: [
            {
              name: "v-model",
              preferred: true,
            },
            {
              name: "Form Submission",
            },
            {
              name: "Form Events",
            },
          ],
        },
        {
          name: "Validation",
          children: [
            {
              name: "Vuelidate",
              preferred: true,
            },
            {
              name: "VeeValidate",
            },
            {
              name: "Custom Validation",
            },
          ],
        },
      ],
      dividerText: " Utilize Vue.js tools.",
    },
    {
      name: "Development Tools",
      children: [
        {
          name: "Build Tools",
          children: [
            {
              name: "Vite",
              preferred: true,
            },
            {
              name: "Vue CLI",
            },
            {
              name: "Webpack",
            },
          ],
        },
        {
          name: "Debugging and Utilities",
          children: [
            {
              name: "Vue Devtools",
              preferred: true,
            },
            {
              name: "TypeScript",
              preferred: true,
            },
            { name: "ESLint" },
          ],
        },
      ],
      dividerText: " Test Vue.js applications.",
    },
    {
      name: "Testing",
      children: [
        {
          name: "Unit and Component Testing",
          children: [
            {
              name: "Vitest",
              preferred: true,
            },
            { name: "Jest" },
            {
              name: "Vue Test Utils",
            },
          ],
        },
        {
          name: "End-to-End Testing",
          children: [
            {
              name: "Cypress",
              preferred: true,
            },
            {
              name: "Nightwatch",
            },
          ],
        },
      ],
      dividerText: " Deploy and optimize Vue.js apps.",
    },
    {
      name: "Deployment and Optimization",
      children: [
        {
          name: "Build and Deployment",
          children: [
            {
              name: "Vite Build",
              preferred: true,
            },
            {
              name: "Netlify",
              preferred: true,
            },
            {
              name: "Vercel",
            },
            {
              name: "Firebase Hosting",
            },
          ],
        },
        {
          name: "Optimization Techniques",
          children: [
            { name: "Lazy Loading" },
            {
              name: "Server-Side Rendering",
            },
            {
              name: "Static Site Generation",
            },
            {
              name: "Minification",
            },
          ],
        },
      ],
      dividerText: " Explore advanced Vue.js topics.",
    },
    {
      name: "Advanced Vue.js Topics",
      children: [
        {
          name: "Composition API",
          children: [
            {
              name: "Setup Function",
            },
            {
              name: "Ref and Reactive",
            },
            {
              name: "Lifecycle Hooks",
            },
            {
              name: "Composables",
            },
          ],
        },
        {
          name: "Advanced Features",
          children: [
            {
              name: "Custom Plugins",
            },
            { name: "Transitions" },
            {
              name: "Internationalization",
            },
            {
              name: "Teleport",
            },
            {
              name: "Provide/Inject",
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
            { name: "Dashboard" },
            {
              name: "E-commerce Store",
            },
            { name: "Todo App" },
            { name: "Blog with SSG" },
            {
              name: "Real-Time Chat",
            },
          ],
        },
        {
          name: "Learning Resources",
          children: [
            {
              name: "Vuejs.org",
              preferred: true,
            },
            {
              name: "Vue Mastery",
            },
            {
              name: "Vue Forum",
            },
            { name: "Nuxt Docs" },
          ],
        },
      ],
    },
    {
      name: "Continuous Learning",
    },
  ],
};

export default vueDeveloperRoadmap;
