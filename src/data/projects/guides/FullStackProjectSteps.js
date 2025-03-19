const FullStackProjectSteps = {
  "Portfolio Website": [
    {
      title: "Project Setup",
      description:
        "1. Create a new React project using `create-react-app` or any other React boilerplate.\n" +
        "2. Install Tailwind CSS and configure it in your project.\n" +
        "3. Set up a basic folder structure for components, assets, and styles.\n" +
        "4. Initialize a Git repository and commit your initial setup.",
    },
    {
      title: "Design the Layout",
      description:
        "1. Design the navigation bar with links to Home, About, Projects, Skills, and Contact sections.\n" +
        "2. Create a responsive layout using Tailwind CSS for different screen sizes.\n" +
        "3. Add a footer with social media links and a copyright notice.\n" +
        "4. Ensure the layout is visually appealing and user-friendly.",
    },
    {
      title: "Implement Sections",
      description:
        "1. Create the Home section with a brief introduction and a call-to-action button.\n" +
        "2. Develop the About section to showcase your background, skills, and experience.\n" +
        "3. Build the Projects section with cards that display project summaries and links to details.\n" +
        "4. Add a Skills section to list your technical and soft skills.\n" +
        "5. Implement the Contact section with a form for users to reach out to you.",
    },
    {
      title: "Add Interactivity",
      description:
        "1. Implement smooth scrolling to different sections when navigation links are clicked.\n" +
        "2. Add hover effects and animations to buttons and links.\n" +
        "3. Ensure the site is fully responsive and works well on mobile devices.\n" +
        "4. Test the site on different browsers to ensure compatibility.",
    },
    {
      title: "Deploy the Project",
      description:
        "1. Build the project for production using `npm run build`.\n" +
        "2. Deploy the project to a hosting service like Netlify, Vercel, or GitHub Pages.\n" +
        "3. Set up a custom domain if available.\n" +
        "4. Test the live site to ensure everything is working as expected.",
    },
  ],
  "Weather App": [
    {
      title: "Project Setup",
      description:
        "1. Create a new React project using `create-react-app` or any other React boilerplate.\n" +
        "2. Install necessary dependencies like Axios for API calls and a CSS framework for styling.\n" +
        "3. Set up a basic folder structure for components, assets, and styles.\n" +
        "4. Initialize a Git repository and commit your initial setup.",
    },
    {
      title: "Design the Layout",
      description:
        "1. Design a search bar for users to input city names.\n" +
        "2. Create a section to display current weather conditions, including temperature, weather icon, and description.\n" +
        "3. Add a section for the 5-day forecast with daily highs, lows, and weather icons.\n" +
        "4. Ensure the layout is responsive and works well on different screen sizes.",
    },
    {
      title: "Integrate Weather API",
      description:
        "1. Sign up for an API key from OpenWeatherMap or any other weather API provider.\n" +
        "2. Implement API calls to fetch current weather and forecast data based on the user's input.\n" +
        "3. Display the fetched data in the respective sections of the app.\n" +
        "4. Handle errors gracefully, such as invalid city names or network issues.",
    },
    {
      title: "Add Features",
      description:
        "1. Implement a toggle button to switch between Celsius and Fahrenheit.\n" +
        "2. Add functionality to save the user's last searched location and unit preference.\n" +
        "3. Optionally, allow users to save favorite cities for quick access.\n" +
        "4. Add a dark/light theme toggle for better user experience.",
    },
    {
      title: "Deploy the Project",
      description:
        "1. Build the project for production using `npm run build`.\n" +
        "2. Deploy the project to a hosting service like Netlify, Vercel, or GitHub Pages.\n" +
        "3. Set up a custom domain if available.\n" +
        "4. Test the live site to ensure everything is working as expected.",
    },
  ],
  "Online Quiz App": [
    {
      title: "Project Setup",
      description:
        "1. Create a new React project using `create-react-app` or a similar tool.\n" +
        "2. Install a CSS framework (e.g., Tailwind CSS or Bootstrap) for styling.\n" +
        "3. Set up a folder structure for components, assets, and quiz data (e.g., JSON file).\n" +
        "4. Initialize a Git repository and commit your initial setup.",
    },
    {
      title: "Design the Layout",
      description:
        "1. Create a homepage with a 'Start Quiz' button and quiz category selection.\n" +
        "2. Design a quiz page to display questions, multiple-choice options, and a submit button.\n" +
        "3. Add a results page to show the user’s score and correct answers.\n" +
        "4. Ensure the design is responsive and intuitive for all devices.",
    },
    {
      title: "Implement Quiz Logic",
      description:
        "1. Create a static or dynamic quiz dataset with questions, options, and correct answers.\n" +
        "2. Implement logic to cycle through questions and track user selections.\n" +
        "3. Calculate the score based on correct answers and display it on the results page.\n" +
        "4. Add a timer (optional) to limit time per question or the entire quiz.",
    },
    {
      title: "Add Interactivity",
      description:
        "1. Add feedback animations for correct/incorrect answers (e.g., color changes or icons).\n" +
        "2. Implement a progress bar to show quiz completion status.\n" +
        "3. Allow users to restart the quiz or try a different category.\n" +
        "4. Test responsiveness and compatibility across browsers.",
    },
    {
      title: "Deploy the Project",
      description:
        "1. Build the project for production using `npm run build`.\n" +
        "2. Deploy to a hosting platform like Netlify, Vercel, or GitHub Pages.\n" +
        "3. Set up a custom domain if desired.\n" +
        "4. Test the live site for functionality and performance.",
    },
  ],
  "Chat Application": [
    {
      title: "Project Setup",
      description:
        "1. Set up a full-stack project with a React frontend and Node.js/Express backend.\n" +
        "2. Install Socket.IO for real-time communication and a CSS framework for styling.\n" +
        "3. Create a folder structure for frontend components and backend routes.\n" +
        "4. Initialize a Git repository and commit your initial setup.",
    },
    {
      title: "Design the Layout",
      description:
        "1. Create a chat window with a message display area and input field.\n" +
        "2. Add a user list sidebar to show online users (optional).\n" +
        "3. Design a simple login screen for users to enter a username.\n" +
        "4. Ensure the layout is responsive and user-friendly.",
    },
    {
      title: "Implement Real-Time Messaging",
      description:
        "1. Set up Socket.IO on the backend to handle WebSocket connections.\n" +
        "2. Implement real-time message sending and receiving on the frontend.\n" +
        "3. Store messages temporarily in memory or a database (e.g., MongoDB).\n" +
        "4. Add notifications for new messages or user join/leave events.",
    },
    {
      title: "Add Features",
      description:
        "1. Implement private messaging between users (optional).\n" +
        "2. Add message timestamps and user avatars for better UX.\n" +
        "3. Include a typing indicator when users are composing messages.\n" +
        "4. Test the app with multiple users to ensure real-time updates work.",
    },
    {
      title: "Deploy the Project",
      description:
        "1. Build the frontend for production with `npm run build`.\n" +
        "2. Deploy the backend to a platform like Heroku or Render, and the frontend to Netlify/Vercel.\n" +
        "3. Configure environment variables (e.g., port, Socket.IO settings).\n" +
        "4. Test the live app to ensure real-time functionality works.",
    },
  ],
  "Task Manager": [
    {
      title: "Project Setup",
      description:
        "1. Set up a MERN stack project (MongoDB, Express, React, Node.js).\n" +
        "2. Install dependencies like Mongoose for MongoDB and a CSS framework.\n" +
        "3. Create a folder structure for frontend components and backend API routes.\n" +
        "4. Initialize a Git repository and commit your initial setup.",
    },
    {
      title: "Design the Layout",
      description:
        "1. Create a login/register page for user authentication.\n" +
        "2. Design a dashboard to display tasks in a list or grid format.\n" +
        "3. Add a form to create new tasks with fields for title, description, and due date.\n" +
        "4. Ensure the design is clean and responsive.",
    },
    {
      title: "Implement Core Functionality",
      description:
        "1. Set up user authentication with JWT (JSON Web Tokens) and bcrypt for password hashing.\n" +
        "2. Create API endpoints for CRUD operations (Create, Read, Update, Delete) on tasks.\n" +
        "3. Connect the frontend to the backend to fetch and display user-specific tasks.\n" +
        "4. Implement task status toggling (e.g., complete/incomplete).",
    },
    {
      title: "Add Features",
      description:
        "1. Add task filtering by status (e.g., all, pending, completed).\n" +
        "2. Implement due date reminders or notifications (optional).\n" +
        "3. Allow task categorization or prioritization (e.g., high, medium, low).\n" +
        "4. Test the app with multiple users to ensure data isolation.",
    },
    {
      title: "Deploy the Project",
      description:
        "1. Build the frontend with `npm run build` and prepare the backend.\n" +
        "2. Deploy the backend to Heroku/Render and the frontend to Netlify/Vercel.\n" +
        "3. Set up MongoDB Atlas for a cloud database and configure environment variables.\n" +
        "4. Test the live app for authentication and task management.",
    },
  ],
  "Expense Tracker": [
    {
      title: "Project Setup",
      description:
        "1. Set up a MERN stack project (MongoDB, Express, React, Node.js).\n" +
        "2. Install Chart.js or a similar library for visualizations, plus a CSS framework.\n" +
        "3. Create a folder structure for frontend components and backend API routes.\n" +
        "4. Initialize a Git repository and commit your initial setup.",
    },
    {
      title: "Design the Layout",
      description:
        "1. Create a dashboard with sections for expense input and spending overview.\n" +
        "2. Design a form to log expenses with fields for amount, category, and date.\n" +
        "3. Add a chart section to display spending trends (e.g., pie or bar chart).\n" +
        "4. Ensure the layout is responsive and visually appealing.",
    },
    {
      title: "Implement Core Functionality",
      description:
        "1. Set up user authentication with JWT and secure password storage.\n" +
        "2. Create API endpoints to add, fetch, and delete expense entries.\n" +
        "3. Integrate Chart.js to display spending data based on user entries.\n" +
        "4. Connect the frontend to the backend to persist and retrieve expenses.",
    },
    {
      title: "Add Features",
      description:
        "1. Implement expense categorization (e.g., food, travel, bills).\n" +
        "2. Add a monthly budget feature with alerts when nearing limits.\n" +
        "3. Allow filtering expenses by date range or category.\n" +
        "4. Test the app for accurate data tracking and chart updates.",
    },
    {
      title: "Deploy the Project",
      description:
        "1. Build the frontend with `npm run build` and prepare the backend.\n" +
        "2. Deploy to Heroku/Render (backend) and Netlify/Vercel (frontend).\n" +
        "3. Use MongoDB Atlas for the database and configure environment variables.\n" +
        "4. Test the live site for functionality and data visualization.",
    },
  ],
  "Job Board": [
    {
      title: "Project Setup",
      description:
        "1. Set up a MERN stack project (MongoDB, Express, React, Node.js).\n" +
        "2. Install a CSS framework and any search/filtering libraries if needed.\n" +
        "3. Create a folder structure for frontend components and backend API routes.\n" +
        "4. Initialize a Git repository and commit your initial setup.",
    },
    {
      title: "Design the Layout",
      description:
        "1. Create a homepage with a search bar and job listing section.\n" +
        "2. Design job cards with details like title, company, location, and apply button.\n" +
        "3. Add a filters sidebar for location, category, and job type.\n" +
        "4. Ensure the design is responsive and easy to navigate.",
    },
    {
      title: "Implement Core Functionality",
      description:
        "1. Set up a MongoDB schema for job listings (title, company, location, etc.).\n" +
        "2. Create API endpoints to fetch, search, and filter job listings.\n" +
        "3. Implement search functionality on the frontend with real-time updates.\n" +
        "4. Add a job details page with full description and application link.",
    },
    {
      title: "Add Features",
      description:
        "1. Allow users to save favorite jobs (requires user authentication).\n" +
        "2. Add pagination or infinite scroll for large job lists.\n" +
        "3. Implement sorting options (e.g., by date posted or salary).\n" +
        "4. Test filtering and search accuracy with various inputs.",
    },
    {
      title: "Deploy the Project",
      description:
        "1. Build the frontend with `npm run build` and prepare the backend.\n" +
        "2. Deploy to Heroku/Render (backend) and Netlify/Vercel (frontend).\n" +
        "3. Set up MongoDB Atlas and configure environment variables.\n" +
        "4. Test the live site for search, filtering, and responsiveness.",
    },
  ],
  "E-commerce Website": [
    {
      title: "Project Setup",
      description:
        "1. Set up a MERN stack project (MongoDB, Express, React, Node.js).\n" +
        "2. Install dependencies like Redux for state management and a payment gateway SDK (e.g., Stripe).\n" +
        "3. Create a folder structure for frontend components and backend API routes.\n" +
        "4. Initialize a Git repository and commit your initial setup.",
    },
    {
      title: "Design the Layout",
      description:
        "1. Create a homepage with featured products and a search bar.\n" +
        "2. Design product pages with images, descriptions, and 'Add to Cart' buttons.\n" +
        "3. Add a cart page and checkout form with payment options.\n" +
        "4. Ensure the design is responsive and visually appealing.",
    },
    {
      title: "Implement Core Functionality",
      description:
        "1. Set up user authentication with JWT and admin roles for product management.\n" +
        "2. Create API endpoints for products, cart, and order processing.\n" +
        "3. Integrate a payment gateway (e.g., Stripe) for secure transactions.\n" +
        "4. Implement order history for logged-in users.",
    },
    {
      title: "Add Features",
      description:
        "1. Add product filtering and search by category, price, etc.\n" +
        "2. Implement a wishlist feature for users to save products.\n" +
        "3. Add admin dashboard for managing products and orders.\n" +
        "4. Test the app for secure payments and order fulfillment.",
    },
    {
      title: "Deploy the Project",
      description:
        "1. Build the frontend with `npm run build` and prepare the backend.\n" +
        "2. Deploy to Heroku/Render (backend) and Netlify/Vercel (frontend).\n" +
        "3. Set up MongoDB Atlas and configure payment gateway credentials.\n" +
        "4. Test the live site for shopping, checkout, and admin features.",
    },
  ],
  "Blog Platform": [
    {
      title: "Project Setup",
      description:
        "1. Set up a MERN stack project (MongoDB, Express, React, Node.js).\n" +
        "2. Install a rich-text editor library (e.g., React-Quill or TinyMCE) and a CSS framework.\n" +
        "3. Create a folder structure for frontend components and backend API routes.\n" +
        "4. Initialize a Git repository and commit your initial setup.",
    },
    {
      title: "Design the Layout",
      description:
        "1. Create a homepage with a list of blog post previews.\n" +
        "2. Design a post creation page with a rich-text editor and title field.\n" +
        "3. Add a blog post detail page with comments section.\n" +
        "4. Ensure the design is responsive and reader-friendly.",
    },
    {
      title: "Implement Core Functionality",
      description:
        "1. Set up user authentication with JWT for post creation/editing.\n" +
        "2. Create API endpoints for CRUD operations on blog posts.\n" +
        "3. Integrate the rich-text editor to save formatted content in MongoDB.\n" +
        "4. Implement a commenting system tied to each post.",
    },
    {
      title: "Add Features",
      description:
        "1. Add post categorization or tagging for better organization.\n" +
        "2. Implement search functionality for finding posts by title or tags.\n" +
        "3. Allow users to edit or delete their own posts.\n" +
        "4. Test the app for formatting preservation and comment functionality.",
    },
    {
      title: "Deploy the Project",
      description:
        "1. Build the frontend with `npm run build` and prepare the backend.\n" +
        "2. Deploy to Heroku/Render (backend) and Netlify/Vercel (frontend).\n" +
        "3. Set up MongoDB Atlas and configure environment variables.\n" +
        "4. Test the live site for post creation, editing, and commenting.",
    },
  ],
  "Social Media Clone": [
    {
      title: "Project Setup",
      description:
        "1. Set up a MERN stack project (MongoDB, Express, React, Node.js).\n" +
        "2. Install dependencies like Socket.IO (optional for real-time) and a CSS framework.\n" +
        "3. Create a folder structure for frontend components and backend API routes.\n" +
        "4. Initialize a Git repository and commit your initial setup.",
    },
    {
      title: "Design the Layout",
      description:
        "1. Create a homepage with a post feed and a post creation form.\n" +
        "2. Design a profile page with user info and their posts.\n" +
        "3. Add a friends/followers list or sidebar.\n" +
        "4. Ensure the design is responsive and social-media-like.",
    },
    {
      title: "Implement Core Functionality",
      description:
        "1. Set up user authentication with JWT and profile creation.\n" +
        "2. Create API endpoints for posting, liking, and fetching posts.\n" +
        "3. Implement a feed system showing posts from followed users or all users.\n" +
        "4. Add like functionality with real-time updates (optional with Socket.IO).",
    },
    {
      title: "Add Features",
      description:
        "1. Implement a follow/unfollow system for user connections.\n" +
        "2. Add commenting on posts with nested replies (optional).\n" +
        "3. Allow image uploads for posts using a service like Cloudinary.\n" +
        "4. Test the app for feed updates, likes, and user interactions.",
    },
    {
      title: "Deploy the Project",
      description:
        "1. Build the frontend with `npm run build` and prepare the backend.\n" +
        "2. Deploy to Heroku/Render (backend) and Netlify/Vercel (frontend).\n" +
        "3. Set up MongoDB Atlas and configure environment variables.\n" +
        "4. Test the live site for posting, liking, and social features.",
    },
  ],
};

export default FullStackProjectSteps;
