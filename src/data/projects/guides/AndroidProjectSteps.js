const AndroidProjectSteps = {
  "Weather App": [
    {
      title: "Set Up the Project",
      description:
        "1. Create a new Android project in Android Studio with an Empty Activity.\n" +
        "2. Add dependencies in `build.gradle`: Retrofit (for API calls) and a permission library (e.g., Dexter) for location/internet access.\n" +
        "3. Define permissions in `AndroidManifest.xml` for internet access.\n" +
        "4. Initialize Git and commit the initial setup.",
    },
    {
      title: "Design the UI",
      description:
        "1. Create a layout with an EditText for city input, a Button to fetch weather, and TextViews for temperature, description, and icons.\n" +
        "2. Use ConstraintLayout to ensure responsiveness across screen sizes.\n" +
        "3. Add a placeholder for a weather icon using ImageView.\n" +
        "4. Apply Material Design principles (e.g., colors, typography).",
    },
    {
      title: "Integrate Weather API",
      description:
        "1. Sign up for an API key from OpenWeatherMap or a similar service.\n" +
        "2. Use Retrofit to create an API interface and fetch current weather data based on city name.\n" +
        "3. Parse the JSON response and update the UI with temperature, description, and icon.\n" +
        "4. Handle errors (e.g., invalid city or no internet) with Toast messages.",
    },
    {
      title: "Test and Deploy",
      description:
        "1. Test the app on an emulator and a physical device for responsiveness.\n" +
        "2. Generate a signed APK using Android Studio’s Build menu.\n" +
        "3. Share the APK locally or upload to Google Play Console for beta testing.\n" +
        "4. Verify API calls and UI updates work as expected.",
    },
  ],
  "Chat Application": [
    {
      title: "Set Up the Project",
      description:
        "1. Create a new Android project in Android Studio with Kotlin support.\n" +
        "2. Add Firebase dependencies in `build.gradle`: Authentication, Realtime Database, and Cloud Messaging.\n" +
        "3. Connect the app to a Firebase project via the Firebase Assistant in Android Studio.\n" +
        "4. Initialize Git and commit the setup.",
    },
    {
      title: "Implement Authentication",
      description:
        "1. Set up Firebase Authentication with email/password or Google sign-in.\n" +
        "2. Create a login/signup UI with EditTexts and Buttons.\n" +
        "3. Handle user sessions and redirect to the chat screen on successful login.\n" +
        "4. Add logout functionality in a menu or settings screen.",
    },
    {
      title: "Build Real-Time Chat",
      description:
        "1. Design a chat UI with a RecyclerView for messages and an EditText/Button for sending.\n" +
        "2. Use Firebase Realtime Database to store and sync messages in real-time.\n" +
        "3. Implement a data model for messages (e.g., sender, text, timestamp).\n" +
        "4. Add listeners to update the RecyclerView when new messages arrive.",
    },
    {
      title: "Add Notifications",
      description:
        "1. Integrate Firebase Cloud Messaging (FCM) for push notifications.\n" +
        "2. Send a notification to users when they receive a new message while the app is in the background.\n" +
        "3. Test notifications on multiple devices.\n" +
        "4. Deploy the signed APK and test the full app flow.",
    },
  ],
  "To-Do List App": [
    {
      title: "Initialize the Project",
      description:
        "1. Create a new Android project in Android Studio with an Empty Activity.\n" +
        "2. Add Room persistence library dependencies in `build.gradle` for SQLite.\n" +
        "3. Set up a basic folder structure for entities, DAOs, and database.\n" +
        "4. Initialize Git and commit the initial setup.",
    },
    {
      title: "Design the UI",
      description:
        "1. Create a main layout with a RecyclerView for tasks and a FloatingActionButton to add tasks.\n" +
        "2. Design a dialog or new screen for task input (title, description).\n" +
        "3. Use Material Design components for consistency.\n" +
        "4. Ensure the layout adapts to different screen sizes.",
    },
    {
      title: "Implement Database Logic",
      description:
        "1. Define a Task entity with fields like id, title, description, and isCompleted.\n" +
        "2. Create a DAO for CRUD operations (add, update, delete, get all tasks).\n" +
        "3. Set up a Room database and repository pattern to manage data.\n" +
        "4. Use LiveData to update the RecyclerView when tasks change.",
    },
    {
      title: "Test and Deploy",
      description:
        "1. Test adding, editing, and deleting tasks on an emulator.\n" +
        "2. Verify data persistence after app restart.\n" +
        "3. Generate a signed APK and test on a physical device.\n" +
        "4. Share the APK or upload to Google Play for distribution.",
    },
  ],
  "News App": [
    {
      title: "Set Up the Project",
      description:
        "1. Create a new Android project in Android Studio with Kotlin.\n" +
        "2. Add Retrofit and Glide dependencies in `build.gradle` for API calls and image loading.\n" +
        "3. Add internet permission in `AndroidManifest.xml`.\n" +
        "4. Initialize Git and commit the setup.",
    },
    {
      title: "Design the UI",
      description:
        "1. Create a main screen with a RecyclerView for news articles.\n" +
        "2. Design an article card layout with ImageView (thumbnail), TextViews (title, summary), and a Button (read more).\n" +
        "3. Add a swipe-to-refresh layout for updating news.\n" +
        "4. Ensure responsiveness with ConstraintLayout.",
    },
    {
      title: "Fetch News Data",
      description:
        "1. Choose a news API (e.g., NewsAPI) and get an API key.\n" +
        "2. Use Retrofit to fetch a list of articles in JSON format.\n" +
        "3. Parse the response and populate the RecyclerView with article data.\n" +
        "4. Load article thumbnails using Glide.",
    },
    {
      title: "Add Navigation",
      description:
        "1. Implement a click listener on articles to open a detailed view or WebView for the full story.\n" +
        "2. Handle no-internet scenarios with a retry option.\n" +
        "3. Test the app on multiple devices for UI and API reliability.\n" +
        "4. Generate a signed APK and deploy for testing.",
    },
  ],
  "Gallery App": [
    {
      title: "Set Up the Project",
      description:
        "1. Create a new Android project in Android Studio with an Empty Activity.\n" +
        "2. Add Glide dependency in `build.gradle` for image loading.\n" +
        "3. Request storage permissions in `AndroidManifest.xml`.\n" +
        "4. Initialize Git and commit the initial setup.",
    },
    {
      title: "Design the UI",
      description:
        "1. Create a main layout with a GridLayout or RecyclerView for image thumbnails.\n" +
        "2. Add a full-screen ImageView for viewing selected images.\n" +
        "3. Use Material Design for a clean, minimal look.\n" +
        "4. Ensure the grid adapts to different screen sizes.",
    },
    {
      title: "Access Device Gallery",
      description:
        "1. Use the MediaStore API to query images from the device’s external storage.\n" +
        "2. Request runtime permissions for READ_EXTERNAL_STORAGE.\n" +
        "3. Load image thumbnails into the RecyclerView using Glide.\n" +
        "4. Handle permission denial with a user-friendly message.",
    },
    {
      title: "Test and Deploy",
      description:
        "1. Test the app with various image counts on an emulator and device.\n" +
        "2. Verify full-screen image viewing works smoothly.\n" +
        "3. Generate a signed APK and test on a physical device.\n" +
        "4. Share or distribute the APK locally.",
    },
  ],
  "Note Taking App": [
    {
      title: "Set Up the Project",
      description:
        "1. Create a new Android project in Android Studio with Kotlin.\n" +
        "2. Add Room and WorkManager dependencies in `build.gradle` for database and reminders.\n" +
        "3. Set up a folder structure for entities, DAOs, and database.\n" +
        "4. Initialize Git and commit the setup.",
    },
    {
      title: "Design the UI",
      description:
        "1. Create a main screen with a RecyclerView for note previews.\n" +
        "2. Design a note creation screen with EditTexts for title, content, and tags.\n" +
        "3. Add a FloatingActionButton to start a new note.\n" +
        "4. Ensure a responsive and intuitive layout.",
    },
    {
      title: "Implement Notes and Tags",
      description:
        "1. Define a Note entity with fields like id, title, content, tags, and timestamp.\n" +
        "2. Set up Room for CRUD operations and tag filtering.\n" +
        "3. Use LiveData to update the RecyclerView dynamically.\n" +
        "4. Add a tag input system (e.g., comma-separated or chips).",
    },
    {
      title: "Add Reminders",
      description:
        "1. Use WorkManager to schedule one-time or recurring reminders for notes.\n" +
        "2. Create a notification channel and trigger notifications at set times.\n" +
        "3. Test reminders on a device with the app closed.\n" +
        "4. Deploy the signed APK and verify all features.",
    },
  ],
  "QR Code Generator": [
    {
      title: "Set Up the Project",
      description:
        "1. Create a new Android project in Android Studio with an Empty Activity.\n" +
        "2. Add the ZXing library (or similar) dependency in `build.gradle` for QR code generation.\n" +
        "3. Set up a basic folder structure.\n" +
        "4. Initialize Git and commit the initial setup.",
    },
    {
      title: "Design the UI",
      description:
        "1. Create a layout with an EditText for input (text/URL/phone) and a Button to generate.\n" +
        "2. Add an ImageView to display the generated QR code.\n" +
        "3. Use Material Design for simplicity and clarity.\n" +
        "4. Ensure the layout works on all screen sizes.",
    },
    {
      title: "Generate QR Codes",
      description:
        "1. Use ZXing to encode the user’s input into a QR code bitmap.\n" +
        "2. Display the bitmap in the ImageView after generation.\n" +
        "3. Handle empty input with a Toast message.\n" +
        "4. Add an option to save the QR code to the device (optional).",
    },
    {
      title: "Test and Deploy",
      description:
        "1. Test QR generation with various inputs (text, URLs, numbers).\n" +
        "2. Verify the QR code is scannable using a QR reader app.\n" +
        "3. Generate a signed APK and test on a physical device.\n" +
        "4. Share the APK locally or via Google Play.",
    },
  ],
  "Expense Tracker": [
    {
      title: "Set Up the Project",
      description:
        "1. Create a new Android project in Android Studio with Kotlin.\n" +
        "2. Add Room and MPAndroidChart dependencies in `build.gradle` for database and charts.\n" +
        "3. Set up a folder structure for entities, DAOs, and database.\n" +
        "4. Initialize Git and commit the setup.",
    },
    {
      title: "Design the UI",
      description:
        "1. Create a main screen with a RecyclerView for expense entries.\n" +
        "2. Design an expense input form with fields for amount, category, and date.\n" +
        "3. Add a chart view (e.g., pie chart) for monthly budget overview.\n" +
        "4. Use Material Design for a clean look.",
    },
    {
      title: "Implement Expense Tracking",
      description:
        "1. Define an Expense entity with fields like id, amount, category, and date.\n" +
        "2. Set up Room for CRUD operations on expenses.\n" +
        "3. Use LiveData to update the RecyclerView with expense data.\n" +
        "4. Calculate monthly totals and display them in the chart.",
    },
    {
      title: "Add Budget Features",
      description:
        "1. Allow users to set a monthly budget via a settings screen.\n" +
        "2. Show a progress indicator or alert when nearing budget limits.\n" +
        "3. Test the app with multiple entries and chart updates.\n" +
        "4. Deploy the signed APK and verify functionality.",
    },
  ],
  "Simple Games": [
    {
      title: "Set Up the Project",
      description:
        "1. Create a new Android project in Android Studio with an Empty Activity.\n" +
        "2. Add no external dependencies (use Android’s Canvas or View system).\n" +
        "3. Set up a folder structure for game logic and UI.\n" +
        "4. Initialize Git and commit the initial setup.",
    },
    {
      title: "Design Game UIs",
      description:
        "1. For Tic-Tac-Toe: Create a 3x3 grid with Buttons or custom Views.\n" +
        "2. For Snake: Use a custom View for the game board and TextViews for score.\n" +
        "3. Add a main menu to select between games.\n" +
        "4. Ensure layouts are simple and responsive.",
    },
    {
      title: "Implement Game Logic",
      description:
        "1. For Tic-Tac-Toe: Code win conditions and alternate turns (X/O).\n" +
        "2. For Snake: Use a game loop to move the snake, detect collisions, and spawn food.\n" +
        "3. Store scores locally using SharedPreferences.\n" +
        "4. Add a restart option for each game.",
    },
    {
      title: "Test and Deploy",
      description:
        "1. Test gameplay on an emulator and device for smoothness.\n" +
        "2. Verify win conditions and score tracking work correctly.\n" +
        "3. Generate a signed APK and test on a physical device.\n" +
        "4. Share the APK or upload to Google Play.",
    },
  ],
  "Unit Converter": [
    {
      title: "Set Up the Project",
      description:
        "1. Create a new Android project in Android Studio with an Empty Activity.\n" +
        "2. No external dependencies needed (use Kotlin for logic).\n" +
        "3. Set up a basic folder structure.\n" +
        "4. Initialize Git and commit the initial setup.",
    },
    {
      title: "Design the UI",
      description:
        "1. Create a layout with two EditTexts for input/output, Spinners for unit selection, and a Button to convert.\n" +
        "2. Add tabs or a dropdown for categories (e.g., length, weight, temperature).\n" +
        "3. Use Material Design for a polished look.\n" +
        "4. Ensure responsiveness across devices.",
    },
    {
      title: "Implement Conversion Logic",
      description:
        "1. Define conversion formulas for common units (e.g., meters to feet, kg to lbs).\n" +
        "2. Handle user input and update the output field on button click.\n" +
        "3. Validate input (e.g., numeric only) with error messages.\n" +
        "4. Support bidirectional conversion (swap units).",
    },
    {
      title: "Test and Deploy",
      description:
        "1. Test conversions for accuracy across all categories.\n" +
        "2. Verify UI works on small and large screens.\n" +
        "3. Generate a signed APK and test on a device.\n" +
        "4. Share the APK locally or via Google Play.",
    },
  ],
  "Android Things Project": [
    {
      title: "Set Up the Environment",
      description:
        "1. Install Android Things SDK and set up a new project in Android Studio.\n" +
        "2. Use a supported hardware board (e.g., Raspberry Pi 3) and flash it with Android Things.\n" +
        "3. Add dependencies for GPIO or sensor interaction in `build.gradle`.\n" +
        "4. Initialize Git and commit the setup.",
    },
    {
      title: "Design a Simple UI",
      description:
        "1. Create a basic UI to display sensor data or control hardware (e.g., LED status).\n" +
        "2. Use TextViews or Buttons for interaction with physical components.\n" +
        "3. Keep the layout minimal due to hardware constraints.\n" +
        "4. Test the UI on the target device.",
    },
    {
      title: "Integrate Hardware",
      description:
        "1. Use Peripheral I/O APIs to control an LED or read a sensor (e.g., temperature).\n" +
        "2. Write logic to toggle the LED or display sensor readings.\n" +
        "3. Handle hardware exceptions (e.g., unavailable pins).\n" +
        "4. Debug directly on the Android Things device.",
    },
    {
      title: "Test and Deploy",
      description:
        "1. Test the app on the hardware board with real inputs/outputs.\n" +
        "2. Optimize for low power and stability (headless mode optional).\n" +
        "3. Build an APK and sideload it onto the device.\n" +
        "4. Document the project for others to replicate.",
    },
  ],
  "ARCore Project": [
    {
      title: "Set Up the Project",
      description:
        "1. Create a new Android project in Android Studio with ARCore support.\n" +
        "2. Add ARCore and Sceneform dependencies in `build.gradle`.\n" +
        "3. Ensure the project targets a compatible API level (24+).\n" +
        "4. Initialize Git and commit the setup.",
    },
    {
      title: "Configure AR Environment",
      description:
        "1. Add an ARFragment to the main layout for the AR camera view.\n" +
        "2. Request camera permissions in `AndroidManifest.xml` and runtime.\n" +
        "3. Set up a basic 3D model (e.g., .obj file) or use Sceneform’s built-in shapes.\n" +
        "4. Test ARCore compatibility on a supported device.",
    },
    {
      title: "Implement AR Features",
      description:
        "1. Use ARCore to detect planes (horizontal/vertical surfaces).\n" +
        "2. Allow users to tap on a plane to place the 3D model.\n" +
        "3. Add basic interaction (e.g., scale or rotate the model with gestures).\n" +
        "4. Handle AR session errors (e.g., poor lighting) with user feedback.",
    },
    {
      title: "Test and Deploy",
      description:
        "1. Test the app on an ARCore-supported device (e.g., Pixel or Samsung Galaxy).\n" +
        "2. Verify plane detection and model placement in different environments.\n" +
        "3. Generate a signed APK and sideload for testing.\n" +
        "4. Share or publish to Google Play with ARCore requirements noted.",
    },
  ],
};

export default AndroidProjectSteps;
