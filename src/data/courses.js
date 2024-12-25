const courses = [
  {
    id: "mern",
    title: "MERN Stack Development",
    description: "Learn full-stack web development with MongoDB, Express.js, React.js, and Node.js.",
    sections: [
      {
        title: "HTML & CSS",
        modules: [
          "HTML5: Basic Structure",
          "HTML Forms and Input Elements",
          "HTML Tables and Lists",
          "HTML Multimedia: Audio and Video",
          "HTML Accessibility (ARIA)",
          "CSS Basics: Selectors, Properties, and Values",
          "CSS Box Model",
          "CSS Flexbox: Layout and Alignment",
          "CSS Grid System: Layout and Positioning",
          "CSS Transitions and Animations",
          "Responsive Design with Media Queries",
          "CSS Variables for Dynamic Styling",
          "CSS Pseudo-classes and Pseudo-elements",
          "CSS Custom Properties and Inheritance",
          "CSS Preprocessors (SASS/LESS)",
          "Advanced CSS: Transform, Rotate, and Scale",
          "CSS Frameworks: Bootstrap, Tailwind CSS",
          "Building Custom Themes in CSS",
          "Cross-Browser Compatibility and Vendor Prefixes",
          "Optimizing CSS for Performance",
          "Handling Fonts in Web Development",
          "Mobile-First Design Approach",
          "Best Practices for CSS Organization",
          "CSS Design Patterns",
          "Advanced CSS Selectors and Combinators",
          "Creating CSS Grids and Cards Layout",
          "CSS Modules and Scoped Styles",
          "CSS in JS (Styled Components)",
          "Building Forms with CSS",
          "Positioning and Z-index",
          "Using Clip-path in CSS",
          "Grid and Flexbox in Harmony",
          "Advanced Responsive Design Techniques",
          "Flexbox Debugging Tools",
          "CSS Debugging with DevTools",
          "Practical Projects with HTML and CSS"
        ]
      },
      {
        title: "JavaScript (JS)",
        modules: [
          "JavaScript Syntax and Basic Concepts",
          "Variables and Data Types",
          "Operators in JavaScript",
          "Control Flow: if, switch, and loops",
          "Functions in JavaScript",
          "Objects and Arrays in JS",
          "ES6 Features: let, const, and arrow functions",
          "ES6 Classes and Inheritance",
          "Promises and Async/Await",
          "Working with APIs in JavaScript (Fetch, Axios)",
          "DOM Manipulation and Event Handling",
          "JavaScript Closures and Scopes",
          "Handling Errors in JavaScript (try, catch)",
          "JavaScript Modules (ES6)",
          "Understanding 'this' Keyword",
          "JavaScript Destructuring",
          "JavaScript Spread and Rest Operators",
          "JavaScript Higher-Order Functions",
          "Array Methods in JavaScript",
          "Object-Oriented Programming in JavaScript",
          "Prototypes and Inheritance in JS",
          "JavaScript Design Patterns",
          "Functional Programming Concepts",
          "Working with Dates and Time",
          "Regular Expressions in JavaScript",
          "Unit Testing JavaScript Code (Jest)",
          "Web Storage API (localStorage, sessionStorage)",
          "JavaScript Debugging Tools",
          "JavaScript Event Loop and Callbacks",
          "JavaScript Memory Management",
          "JavaScript Security Best Practices",
          "Modular JavaScript with NPM",
          "Advanced Error Handling and Logging in JS",
          "JavaScript Performance Optimization",
          "JavaScript Optimization with Web Workers",
          "DOM Optimization Techniques",
          "JavaScript Development Tools (Webpack, Babel)"
        ]
      },
      {
        title: "Tailwind CSS",
        modules: [
          "Introduction to Tailwind CSS",
          "Setting Up Tailwind CSS in a Project",
          "Tailwind CSS Utility Classes",
          "Responsive Design with Tailwind",
          "Customizing Tailwind Configuration",
          "Creating Custom Components with Tailwind",
          "Using Tailwind with CSS Grid and Flexbox",
          "Tailwind's Color Palette and Themes",
          "Building Forms with Tailwind CSS",
          "Tailwind Typography Plugin",
          "Tailwind for Building Buttons and Navigation",
          "Tailwind CSS Transitions and Animations",
          "Working with Tailwind Plugins",
          "Tailwind's Dark Mode Support",
          "Advanced Customization with Tailwind",
          "Tailwind CSS Purge for Optimized CSS",
          "Integrating Tailwind CSS with React",
          "Responsive Components with Tailwind",
          "Best Practices for Tailwind CSS Development",
          "Tailwind CSS Debugging",
          "Deploying Tailwind Projects",
          "Accessibility Considerations with Tailwind",
          "Building Accessible Forms with Tailwind",
          "Tailwind CSS for Typography and Readability",
          "Tailwind and Design Systems",
          "Advanced Tailwind Features and Use Cases"
        ]
      },
      {
        title: "React.js",
        modules: [
          "Introduction to React",
          "React Components (Class vs Function)",
          "JSX Syntax and Rendering",
          "State and Props in React",
          "React Lifecycle Methods",
          "Handling User Inputs in React",
          "Conditional Rendering in React",
          "Event Handling in React",
          "Handling Forms in React",
          "React Router for Navigation",
          "React Hooks: useState, useEffect",
          "Context API for Global State Management",
          "Redux Basics: Actions, Reducers",
          "Working with Redux Toolkit",
          "Optimizing React Performance",
          "React Router: Dynamic Routes",
          "Server-Side Rendering with React",
          "React Component Patterns",
          "React Error Boundaries",
          "Testing React Components (Jest, Enzyme)",
          "React Debugging Tools",
          "React Performance Optimization",
          "React Developer Tools",
          "React Forms with Validation (Formik, React Hook Form)",
          "React and TypeScript Integration",
          "React and Firebase Integration",
          "Building Real-Time Apps with React and WebSockets",
          "GraphQL and React",
          "Building Progressive Web Apps (PWA) with React",
          "React Animation Libraries",
          "React DevTools Usage for Performance Tuning"
        ]
      },
      {
        title: "Node.js & Express.js",
        modules: [
          "Introduction to Node.js",
          "Node.js Event Loop and Asynchronous Programming",
          "File System (fs) Module in Node.js",
          "Creating HTTP Server with Node.js",
          "Express.js Basics and Routing",
          "Handling GET, POST, PUT, DELETE Requests",
          "Express Middleware",
          "Authentication and Authorization with JWT",
          "Error Handling in Express",
          "File Uploads with Express.js",
          "RESTful API Design with Express",
          "Database Integration in Express (MongoDB)",
          "Session Management in Express",
          "Building WebSocket Applications with Node.js",
          "Security in Node.js Applications",
          "Logging and Debugging with Winston, Morgan",
          "Rate Limiting and Throttling in Express",
          "Unit Testing Node.js APIs",
          "Deploying Node.js Applications to Heroku",
          "Node.js Package Management with NPM",
          "Using Environment Variables in Node.js",
          "Integrating MongoDB with Node.js",
          "Deploying Node.js Applications to AWS",
          "Building Scalable Node.js Applications",
          "Node.js and Microservices Architecture",
          "Node.js for Real-Time Apps"
        ]
      },
      {
        title: "MongoDB",
        modules: [
          "Introduction to MongoDB",
          "MongoDB Installation and Setup",
          "MongoDB Database and Collections",
          "CRUD Operations in MongoDB",
          "Querying MongoDB Data",
          "MongoDB Aggregation Framework",
          "Indexes in MongoDB",
          "Data Modeling in MongoDB",
          "MongoDB Relations and Data Types",
          "Mongoose ODM for MongoDB",
          "MongoDB Transactions",
          "Security in MongoDB",
          "Backup and Restore MongoDB Databases",
          "Data Replication in MongoDB",
          "Sharding in MongoDB",
          "MongoDB Performance Optimization",
          "Handling Large Data Sets in MongoDB",
          "MongoDB Atlas for Cloud Database",
          "Integrating MongoDB with Node.js",
          "Monitoring MongoDB Performance",
          "Error Handling in MongoDB",
          "MongoDB and GraphQL Integration",
          "MongoDB Security Best Practices"
        ]
      },
      {
        title: "Git & GitHub",
        modules: [
          "Introduction to Git",
          "Git Initialization and Setup",
          "Git Workflow (Clone, Commit, Push)",
          "Working with Branches in Git",
          "Merging and Resolving Git Conflicts",
          "Rebasing in Git",
          "Git Remotes and Collaboration",
          "Tagging in Git",
          "Git Stashing and Cleaning",
          "Using GitHub for Version Control",
          "GitHub for Collaboration (Pull Requests)",
          "Setting Up GitHub Actions for CI/CD",
          "GitHub Pages for Hosting Projects",
          "Forking Repositories on GitHub",
          "GitHub Issues for Project Management",
          "Git Hooks for Pre/Post Commit",
          "GitLab vs GitHub: Differences and Use Cases",
          "Git Submodules"
        ]
      }
    ]
  },
  {
    id: "android-development",
    title: "Android Development",
    description:
      "Learn how to develop mobile applications for Android devices using Kotlin and Android Studio. Master concepts from UI/UX design to networking, database management, and advanced topics like Firebase and Android architecture.",
    sections: [
      {
        title: "Introduction to Android Development",
        modules: [
          "Setting up Android Studio",
          "Overview of Android Studio Interface",
          "Android SDK and Emulator Setup",
          "Understanding Android Project Structure",
          "Creating a New Android Project",
          "Android Manifest and Permissions",
          "Gradle Build System",
          "Android Debugging Tools",
          "Introduction to Kotlin",
          "Setting Up Kotlin for Android",
          "Basic Kotlin Syntax",
          "Variables and Data Types in Kotlin",
          "Kotlin Functions and Control Flow",
          "Object-Oriented Programming (OOP) in Kotlin",
          "Using Lambda Expressions in Kotlin",
          "Extension Functions in Kotlin",
          "Kotlin Collections and Generics",
          "Nullable Types in Kotlin",
          "Exception Handling in Kotlin",
          "Using Coroutines in Kotlin",
          "Android Application Lifecycle",
          "Understanding Activities in Android",
          "Fragment Lifecycle and Management",
          "Working with Intents",
          "Android User Interface (UI) Design",
          "Introduction to XML Layouts",
          "LinearLayout and RelativeLayout",
          "ConstraintLayout Basics",
          "Working with Views in Android",
          "Custom Views in Android",
          "Using Drawable Resources",
          "Handling Input Controls (Buttons, TextFields)",
          "Android Themes and Styles",
          "Material Design Principles",
          "Designing Responsive Layouts",
          "Using ImageView and Vector Assets",
          "Android Accessibility Basics",
          "Android View Hierarchy",
          "Working with Animation",
          "Custom Animations in Android",
          "Implementing ActionBar and Toolbar",
          "Creating Dialogs and Toast Messages",
          "Handling Time and Date in Android",
          "Internationalization and Localization in Android",
          "Introduction to Android Navigation",
          "Navigating Between Activities and Fragments",
          "Android Navigation Component Overview",
          "Custom Transitions in Android",
          "Best Practices for UI Design",
          "Debugging Android Apps",
        ],
      },
      {
        title: "Working with Data and Persistence",
        modules: [
          "SharedPreferences for Local Storage",
          "Working with Files in Android",
          "SQLite Database in Android",
          "Introduction to Room Database",
          "Setting up Room Database in Android",
          "Room Database CRUD Operations",
          "Handling Complex Queries with Room",
          "Using LiveData and ViewModel",
          "Integrating RecyclerView for Lists",
          "Adapters and ViewHolders in RecyclerView",
          "Swipe to Delete and Reorder in RecyclerView",
          "Working with CursorLoader",
          "Storing Images in Android",
          "Working with JSON in Android",
          "Parsing JSON using Gson",
          "Handling API Requests with Retrofit",
          "Parsing Responses with Retrofit",
          "Using OkHttp with Retrofit",
          "Making Asynchronous Network Calls",
          "Handling Network Errors and Timeouts",
          "Using Firebase Realtime Database",
          "Firebase Cloud Firestore Integration",
          "Firebase Authentication in Android",
          "Firebase Push Notifications",
          "Firebase Storage Integration",
          "Storing User Data in Firebase",
          "Using Firebase Analytics for Tracking",
          "Firebase Cloud Messaging (FCM)",
          "Implementing OAuth in Android",
          "Working with Google APIs",
          "Google Maps Integration",
          "Implementing Google Sign-In",
          "Integrating Payment Gateways",
          "Working with REST APIs in Android",
          "Handling Network Errors and Retry Mechanisms",
          "Secure Data Storage in Android",
          "Working with WorkManager for Background Tasks",
          "Handling Notifications in Android",
          "Implementing Broadcast Receivers",
          "Introduction to Android Services",
          "Background Services in Android",
          "Binding Services to Activities",
          "Foreground Services",
          "Handling Long-Running Background Tasks",
          "Using AlarmManager for Scheduling Tasks",
          "Syncing Data in Android Apps",
          "Storing and Retrieving Data in Android",
          "Using Firebase Database Rules for Security",
          "Using Android’s Data Binding Library",
          "Integrating SQLite with RecyclerView",
        ],
      },
      {
        title: "Advanced Android Topics",
        modules: [
          "Advanced Kotlin Programming Concepts",
          "Understanding Coroutines for Async Tasks",
          "Dependency Injection in Android with Dagger/Hilt",
          "Implementing MVI Architecture",
          "MVP and MVC Patterns in Android",
          "Dependency Injection with Koin",
          "Introduction to Jetpack Components",
          "Using Jetpack Navigation Component",
          "LiveData and ViewModel in Android",
          "Creating Custom Views in Android",
          "Building Modular Android Applications",
          "Using Fragment Transaction and Back Stack",
          "Customizing Views with Tailwind CSS (WebView in Android)",
          "Building Animations in Jetpack Compose",
          "Modern Android UI Design with Jetpack Compose",
          "Creating a Splash Screen in Android",
          "Unit Testing in Android",
          "UI Testing with Espresso",
          "Mocking Dependencies for Testing",
          "Creating Custom Android Libraries",
          "Android Performance Optimization Techniques",
          "Memory Management in Android",
          "Reducing APK Size",
          "Working with Bitmaps in Android",
          "Using WorkManager for Background Tasks",
          "Multithreading in Android Apps",
          "Networking Optimization in Android",
          "Profiling Android Apps with Android Studio",
          "Using GPU for Rendering in Android",
          "Optimizing UI Rendering in Android",
          "Best Practices for Android App Security",
          "Preventing Reverse Engineering of APK",
          "Code ProGuard and R8 for Obfuscation",
          "Integrating with RESTful APIs",
          "Secure Communication in Android with SSL/TLS",
          "Managing App Permissions in Android",
          "Secure Storage of Sensitive Data",
          "Multi-Module Projects in Android",
          "Gradle Optimization in Android",
          "Integrating Android with Wear OS",
          "Building Android Apps for Tablets",
          "Android Auto Integration",
          "Android TV App Development",
          "Building AR Apps with ARCore",
          "Integrating Machine Learning in Android",
          "Android App Analytics",
          "Deep Linking in Android",
          "Android App Deployment on Google Play Store",
        ],
      },
      {
        title: "Building Real-World Android Applications",
        modules: [
          "Creating a Weather App with Retrofit",
          "Building a To-Do List App with Room",
          "Creating a Music Player App",
          "Building a Chat Application with Firebase",
          "Social Media App Development with Firebase",
          "E-commerce App with Product Search and Payment Gateway",
          "News App with RecyclerView and API",
          "Movie App with TMDB API",
          "Building a Finance Tracker App",
          "Fitness Tracking App with Google Fit API",
          "Building a Recipe App with Firebase Authentication",
          "Location-Based App with Maps API",
          "Building a Travel App with Google Places API",
          "Building a QR Code Scanner App",
          "Creating a Note-Taking App with SQLite",
          "Building a Blog App with Firebase and Authentication",
          "Building a News Reader App",
          "Multi-Page App with Jetpack Compose",
          "Creating a Shopping Cart App",
          "Music Streaming App with Firebase Storage",
          "Calendar App Integration with Google Calendar API",
          "Building a Photo Gallery App",
          "Building a Task Manager with WorkManager",
          "Building a News Aggregator with Retrofit",
          "Recipe Sharing App with Firebase Firestore",
          "User Authentication and Login in Apps",
          "Building a Real-Time Messaging App",
          "Building a Social Media Feed App",
          "Building a Video Streaming App",
          "Real-Time Location Sharing App",
          "Creating a Custom Chatbot App",
          "Building an Augmented Reality (AR) App",
          "Building an IoT App with Bluetooth Low Energy (BLE)",
          "Integrating Google Pay in Android",
          "Building an Event Planning App",
          "Building a Live Auction App",
          "Health and Wellness App with Firebase",
          "Building a Custom WebView App",
          "Building a Voice Assistant App",
          "Podcast App Development",
          "Fitness App with Google Fit",
          "Expense Tracker App with Graphs",
          "Personal Finance Management App",
          "Cryptocurrency Portfolio Tracker App",
          "Pet Care App with Firebase",
          "Personal Assistant App with Google Assistant Integration",
          "Cryptocurrency News and Trading App",
          "Real-Time Sports Score App",
          "Creating a Dynamic Survey App",
          "Deploying a Full Android Application",
        ],
      },
    ],
  },
  {

    id: "ethical-hacking",
    title: "Ethical Hacking",
    description: "Learn the basics of ethical hacking.",
    sections: [
      {
        title: "Introduction to Cybersecurity",
        modules: [
          "What is Cybersecurity?",
          "Importance of Cybersecurity",
          "Cybersecurity vs. Ethical Hacking",
          "Legal and Ethical Aspects of Hacking",
          "Cyber Threat Landscape",
          "Types of Hackers (Black Hat, White Hat, Grey Hat)",
          "Common Cyber Attacks and Vulnerabilities",
          "The Role of an Ethical Hacker",
          "Ethical Hacking Frameworks (OWASP, PTES, OSCP)",
          "Setting Up a Hacking Lab"
        ]
      },
      {
        title: "Networking Basics for Hackers",
        modules: [
          "Introduction to Networking Concepts",
          "OSI Model and TCP/IP",
          "IP Addressing and Subnetting",
          "DNS and DHCP",
          "Routing and Switching Basics",
          "Types of Networks (LAN, WAN, VPN)",
          "Network Devices (Router, Switch, Hub)",
          "Network Protocols (HTTP, FTP, TCP, UDP, ICMP)",
          "Firewalls and Network Security",
          "Introduction to Wireshark"
        ]
      },
      {
        title: "Reconnaissance Techniques",
        modules: [
          "Overview of Reconnaissance",
          "Types of Reconnaissance (Active, Passive)",
          "Footprinting and Information Gathering",
          "WHOIS Lookup",
          "DNS Interrogation",
          "Google Dorking for Information Gathering",
          "Social Media Reconnaissance",
          "OSINT (Open Source Intelligence)",
          "Footprinting with Maltego",
          "Subdomain Enumeration"
        ]
      },
      {
        title: "Passive Information Gathering",
        modules: [
          "Understanding Passive Reconnaissance",
          "Using Publicly Available Information",
          "DNS Interrogation and Zone Transfer",
          "WHOIS and Reverse WHOIS Lookup",
          "OSINT and its Importance",
          "Using Shodan for Finding Devices",
          "Social Media Footprinting (LinkedIn, Facebook)",
          "Extracting Metadata from Documents",
          "WHOIS History for Investigating Domains",
          "Analyzing SSL Certificates"
        ]
      },
      {
        title: "Active Information Gathering",
        modules: [
          "Understanding Active Reconnaissance",
          "Network Scanning with Nmap",
          "OS Fingerprinting with Nmap",
          "Port Scanning Techniques (TCP, UDP)",
          "Service Version Detection with Nmap",
          "Banner Grabbing with Netcat",
          "Traceroute and Network Mapping",
          "Active DNS Interrogation",
          "Active Directory Enumeration",
          "Network Sniffing and Packet Analysis"
        ]
      },
      {
        title: "Scanning and Enumeration",
        modules: [
          "Introduction to Scanning and Enumeration",
          "Network Discovery with Nmap",
          "Vulnerability Scanning with Nessus",
          "Identifying Open Ports and Services",
          "Banner Grabbing and Service Enumeration",
          "SNMP Enumeration",
          "SMB Enumeration",
          "LDAP Enumeration",
          "DNS and DHCP Enumeration",
          "OS Detection and Fingerprinting"
        ]
      },
      {
        title: "Exploitation Techniques",
        modules: [
          "Introduction to Exploitation",
          "Buffer Overflow Attacks",
          "SQL Injection (SQLi) Fundamentals",
          "Cross-Site Scripting (XSS) Attacks",
          "Command Injection",
          "Local File Inclusion (LFI)",
          "Remote File Inclusion (RFI)",
          "Cross-Site Request Forgery (CSRF)",
          "Exploiting Insecure Direct Object References (IDOR)",
          "Exploiting XML External Entity (XXE) Attacks"
        ]
      },
      {
        title: "Post-Exploitation Tactics",
        modules: [
          "Introduction to Post-Exploitation",
          "Privilege Escalation Techniques",
          "Maintaining Access (Backdoors, Web Shells)",
          "Lateral Movement on the Network",
          "Using Meterpreter for Post-Exploitation",
          "Data Exfiltration Techniques",
          "Credential Dumping (SAM, LSASS)",
          "Windows and Linux Exploitation Tools",
          "Clearing Logs and Traces",
          "Evasion Techniques"
        ]
      },
      {
        title: "Web Application Security",
        modules: [
          "Introduction to Web Application Security",
          "OWASP Top 10 Web Vulnerabilities",
          "SQL Injection (SQLi)",
          "Cross-Site Scripting (XSS)",
          "Cross-Site Request Forgery (CSRF)",
          "Insecure Deserialization",
          "Security Misconfiguration",
          "Sensitive Data Exposure",
          "Broken Authentication and Session Management",
          "Insufficient Logging and Monitoring"
        ]
      },
      {
        title: "Wireless Hacking",
        modules: [
          "Introduction to Wireless Networks",
          "Wireless Network Standards (Wi-Fi, Bluetooth)",
          "Cracking WEP Encryption",
          "Cracking WPA/WPA2 Encryption",
          "Deauthentication Attacks",
          "Wi-Fi Sniffing and Packet Capture",
          "Using Aircrack-ng for Wireless Attacks",
          "Rogue Access Points and Evil Twin Attacks",
          "Bluetooth Hacking Techniques",
          "Attacking IoT Devices via Wireless Networks"
        ]
      },
      {
        title: "Cracking WPA2 Networks",
        modules: [
          "Introduction to WPA2 Security",
          "Understanding WPA2 Handshakes",
          "Capturing WPA2 Handshakes",
          "Dictionary Attacks for WPA2 Cracking",
          "Brute Force Attacks on WPA2",
          "Cracking WPA2 Using GPU (Hashcat)",
          "Dictionary vs. Rainbow Table Attacks",
          "Using Reaver for WPS Attacks",
          "De-authentication and Replay Attacks",
          "Prevention Techniques for WPA2 Attacks"
        ]
      },
      {
        title: "Bluetooth Exploitation",
        modules: [
          "Introduction to Bluetooth Security",
          "Bluetooth Protocols and Attacks",
          "Bluetooth Hacking Tools (BlueMaho, Crackle)",
          "Bluetooth Sniffing and Eavesdropping",
          "Pairing and Man-in-the-Middle Attacks",
          "Bluejacking and Bluesnarfing",
          "Exploiting Bluetooth Low Energy (BLE)",
          "BlueBorne Attack Overview",
          "Securing Bluetooth Devices",
          "Legal and Ethical Aspects of Bluetooth Hacking"
        ]
      },
      {
        title: "Cloud Security Testing",
        modules: [
          "Introduction to Cloud Computing",
          "Cloud Service Models (IaaS, PaaS, SaaS)",
          "Common Cloud Vulnerabilities",
          "Cloud Misconfigurations (AWS, Azure, GCP)",
          "Testing Cloud Storage (AWS S3, Google Cloud)",
          "API Security in Cloud Applications",
          "Cloud Identity and Access Management",
          "Cloud Penetration Testing Tools (Pacu, ScoutSuite)",
          "Exploiting Cloud-based Applications",
          "Securing Cloud Environments"
        ]
      },
      {
        title: "Malware Analysis Basics",
        modules: [
          "Introduction to Malware",
          "Types of Malware (Viruses, Trojans, Worms)",
          "Static vs. Dynamic Malware Analysis",
          "Reverse Engineering Malware",
          "Analyzing Executable Files (PE Format)",
          "Tools for Malware Analysis (OllyDbg, IDA Pro)",
          "Sandboxing for Malware Analysis",
          "Malware Detection Techniques",
          "Understanding Ransomware",
          "Dealing with Rootkits and Keyloggers"
        ]
      },
      {
        title: "Simulated Full-Scale Penetration Testing of a Complex Network",
        modules: [
          "Introduction to Full-Scale Penetration Testing",
          "Defining Penetration Testing Methodology",
          "Scoping and Rules of Engagement",
          "Penetration Testing Tools Overview (Kali Linux)",
          "Active Directory Penetration Testing",
          "Internal Network Penetration Testing",
          "External Network Penetration Testing",
          "Web Application Penetration Testing",
          "Wireless Network Penetration Testing",
          "Reporting and Delivering Findings"
        ]
      },
      {
        title: "Advanced Ethical Hacking Techniques",
        modules: [
          "Exploiting IoT Devices",
          "Advanced Wi-Fi Hacking",
          "DNS Spoofing and Cache Poisoning",
          "Man-in-the-Middle (MITM) Attacks",
          "Privilege Escalation in Windows and Linux",
          "Creating Custom Exploits",
          "Bypassing Antivirus and IDS/IPS Systems",
          "Physical Security Penetration Testing",
          "Cross-Platform Penetration Testing",
          "Malware Creation and Reverse Engineering",
          "Penetrating Mobile Applications",
          "Smart Device Hacking",
          "Ethical Hacking in Smart Cities",
          "Targeted Phishing Attacks and Social Engineering",
          "Testing Security of SCADA Systems",
          "Ransomware Analysis and Countermeasures",
          "Threat Hunting Techniques",
          "Zero-Day Exploit Research",
          "Exploiting Cloud Platforms",
          "Post-Exploitation in Corporate Networks"
        ]
      }
    ],
  },
  {
    id: "Php-And-Sql",
    title: "PHP and SQL Backend Development",
    description: "Learn how to build a backend web application using PHP and MySQL.",
    sections: [
      {
        title: "Introduction to Web Development",
        modules: [
          "Overview of Web Development",
          "Client-Server Architecture",
          "Web Browsers and Web Servers",
          "Introduction to HTML, CSS, and JavaScript",
          "Basic Web Design Principles",
          "Setting Up a Local Development Environment",
          "Introduction to PHP and MySQL",
          "Basic Web Hosting and Deployment",
          "Understanding Web Development Workflow",
          "Working with Version Control (Git)"
        ]
      },
      {
        title: "HTML5 and CSS3 Basics",
        modules: [
          "Understanding HTML5 Structure",
          "Creating Web Pages with HTML5",
          "Using HTML5 Semantic Tags",
          "Introduction to CSS3",
          "Styling Web Pages with CSS3",
          "Responsive Web Design Principles",
          "CSS Flexbox and Grid Layout",
          "Creating Forms in HTML5",
          "HTML5 Multimedia Elements",
          "Introduction to Web Accessibility"
        ]
      },
      {
        title: "Introduction to PHP",
        modules: [
          "What is PHP?",
          "Setting Up PHP Development Environment",
          "PHP Syntax and Variables",
          "Control Structures (If, Else, Switch)",
          "PHP Functions",
          "PHP Arrays and Superglobals",
          "Working with PHP Forms",
          "Session Management in PHP",
          "Cookies in PHP",
          "Error Handling in PHP"
        ]
      },
      {
        title: "Working with MySQL",
        modules: [
          "Introduction to MySQL",
          "Setting Up MySQL Database",
          "Understanding SQL Syntax",
          "Creating and Managing Databases",
          "Creating Tables and Columns",
          "Inserting, Updating, and Deleting Data",
          "SQL Queries and Joins",
          "Using PHP to Interact with MySQL",
          "MySQL Security Best Practices",
          "Database Backups and Restoration"
        ]
      },
      {
        title: "Advanced PHP Techniques",
        modules: [
          "Object-Oriented Programming in PHP",
          "Working with Classes and Objects",
          "PHP Inheritance and Polymorphism",
          "Encapsulation and Abstraction",
          "Namespaces and Autoloading",
          "Error and Exception Handling in PHP",
          "PHP File Handling",
          "Regular Expressions in PHP",
          "PHP Security Best Practices",
          "PHP for RESTful APIs"
        ]
      },
      {
        title: "Building Dynamic Websites with PHP and MySQL",
        modules: [
          "Building Forms with PHP and MySQL",
          "User Registration and Authentication",
          "Session Handling for User Login",
          "Working with File Uploads in PHP",
          "Handling File Validation and Security",
          "Search Functionality in PHP",
          "Pagination in PHP",
          "Building Contact Forms",
          "Sending Emails from PHP",
          "Admin Panel Development"
        ]
      },
      {
        title: "PHP and MySQL Advanced Topics",
        modules: [
          "Working with Prepared Statements in MySQL",
          "Database Optimization and Indexing",
          "Database Relationships (One-to-One, One-to-Many, Many-to-Many)",
          "PHP and MySQL Security (SQL Injection, XSS, CSRF)",
          "Introduction to PDO (PHP Data Objects)",
          "Database Transactions",
          "Data Validation in PHP",
          "Error Logging and Debugging in PHP",
          "User Role Management and Permissions",
          "Building an E-commerce Platform"
        ]
      },
      {
        title: "PHP Frameworks: Laravel",
        modules: [
          "Introduction to Laravel Framework",
          "Setting Up Laravel Environment",
          "Routing and Controllers in Laravel",
          "Working with Views and Blade Templates",
          "Creating Models and Migrations",
          "Database CRUD Operations in Laravel",
          "Authentication and Authorization in Laravel",
          "Middleware in Laravel",
          "Laravel API Development",
          "Testing and Debugging in Laravel"
        ]
      },
      {
        title: "Building a CMS (Content Management System)",
        modules: [
          "Understanding Content Management Systems",
          "Creating a Basic CMS with PHP and MySQL",
          "Managing Content with the Admin Panel",
          "Creating Dynamic Pages and Posts",
          "User Roles and Permissions for CMS",
          "SEO Best Practices for CMS",
          "Creating and Managing Media Libraries",
          "Implementing Commenting Systems",
          "Building a Blog with PHP",
          "Security Features in CMS Development"
        ]
      },
      {
        title: "Web Security Fundamentals",
        modules: [
          "Understanding Web Security Threats",
          "SQL Injection Prevention Techniques",
          "Cross-Site Scripting (XSS) Prevention",
          "Cross-Site Request Forgery (CSRF) Prevention",
          "Securing PHP Sessions and Cookies",
          "Password Hashing and Encryption",
          "HTTPS and SSL Certificates",
          "File Upload Security",
          "Security Headers for Web Applications",
          "Handling User Authentication Securely"
        ]
      },
      {
        title: "Final Project: Building a Full-Scale Website",
        modules: [
          "Project Planning and Requirements",
          "Designing the Website Layout",
          "Developing the Frontend (HTML, CSS, JS)",
          "Building the Backend with PHP and MySQL",
          "Connecting Frontend with Backend",
          "Implementing Dynamic Features",
          "Ensuring Website Security",
          "Testing the Website",
          "Deploying the Website on a Server",
          "Final Project Review and Presentation"
        ]
      }

    ]
  },{
    id: "Backend-Development",
    title: "Backend Development with Node.js and Express.js",
    description: "Learn how to build a backend web application using Node.js and Express.js.",
    sections:

    [
      {
        title: "Introduction to Backend Development",
        modules: [
          "Overview of Backend Development",
          "Client-Server Architecture",
          "Introduction to Node.js",
          "Understanding NPM (Node Package Manager)",
          "Setting Up a Node.js Development Environment",
          "Introduction to Express.js",
          "Building Your First Express Server",
          "Handling HTTP Requests and Responses",
          "Setting Up Version Control with Git",
          "Understanding RESTful APIs"
        ]
      },
      {
        title: "Node.js Fundamentals",
        modules: [
          "Node.js Architecture and Event Loop",
          "Understanding Asynchronous Programming",
          "Working with Callbacks in Node.js",
          "Promises in Node.js",
          "Using Async/Await in Node.js",
          "Managing Node.js Packages",
          "Understanding Global Objects in Node.js",
          "Handling Errors in Node.js",
          "Building CLI Applications with Node.js",
          "Debugging Node.js Applications"
        ]
      },
      {
        title: "Express.js Basics",
        modules: [
          "Introduction to Express.js",
          "Setting Up an Express Server",
          "Routing in Express.js",
          "Handling HTTP Requests (GET, POST, PUT, DELETE)",
          "Middleware in Express.js",
          "Error Handling in Express.js",
          "Serving Static Files",
          "Working with Templates in Express.js",
          "Creating RESTful APIs with Express.js",
          "Handling JSON and Form Data in Express.js"
        ]
      },
      {
        title: "Database Integration with MongoDB",
        modules: [
          "Introduction to NoSQL Databases",
          "Setting Up MongoDB and MongoDB Atlas",
          "MongoDB CRUD Operations",
          "MongoDB Data Modeling",
          "Using Mongoose ODM (Object Data Modeling)",
          "Creating and Managing MongoDB Collections",
          "Performing Aggregation Queries",
          "Working with MongoDB Indexing",
          "Managing Relationships in MongoDB (One-to-One, One-to-Many)",
          "Handling Database Transactions in MongoDB"
        ]
      },
      {
        title: "Working with Authentication and Authorization",
        modules: [
          "Understanding Authentication vs Authorization",
          "Creating User Registration and Login Systems",
          "Password Hashing with bcrypt.js",
          "Session Management in Express.js",
          "JWT (JSON Web Tokens) Authentication",
          "Role-Based Access Control (RBAC)",
          "OAuth2 Authentication with Google/Facebook",
          "Social Media Login Integration",
          "Securing APIs with Passport.js",
          "JWT Refresh Tokens"
        ]
      },
      {
        title: "Advanced Node.js Concepts",
        modules: [
          "Working with Streams in Node.js",
          "Building a Real-Time Chat Application with Socket.io",
          "WebSocket Communication with Express",
          "File Uploads and Handling Files in Node.js",
          "Caching Data with Redis",
          "Building Microservices with Node.js",
          "Working with Message Queues (RabbitMQ, Kafka)",
          "Event-Driven Architecture in Node.js",
          "Logging and Debugging Node.js Applications",
          "Unit Testing Node.js Applications"
        ]
      },
      {
        title: "API Development and RESTful Best Practices",
        modules: [
          "Designing RESTful APIs",
          "HTTP Status Codes and Response Formatting",
          "Versioning REST APIs",
          "Securing REST APIs with JWT",
          "Rate Limiting and Throttling APIs",
          "Building Pagination and Sorting in APIs",
          "Creating API Documentation with Swagger",
          "Testing APIs with Postman",
          "Error Handling and Logging in APIs",
          "Deploying REST APIs to Production"
        ]
      },
      {
        title: "Building Full-Stack Applications with Node.js",
        modules: [
          "Integrating Node.js with Frontend Frameworks (React, Angular, etc.)",
          "Building a Full-Stack Web Application",
          "Handling Forms and Validations in Node.js",
          "Authentication Flow in Full-Stack Applications",
          "State Management in Full-Stack Applications",
          "Connecting MongoDB to the Frontend",
          "Implementing Real-Time Features in Full-Stack Apps",
          "Testing Full-Stack Applications",
          "Deployment of Full-Stack Applications",
          "Version Control with Git and GitHub"
        ]
      },
      {
        title: "Deployment and DevOps for Node.js Applications",
        modules: [
          "Introduction to Cloud Deployment",
          "Deploying Node.js Applications on Heroku",
          "Deploying Node.js Applications on AWS EC2",
          "Using Docker for Node.js Application Deployment",
          "Introduction to CI/CD (Continuous Integration and Deployment)",
          "Setting Up Jenkins for Node.js Projects",
          "Using Kubernetes for Container Orchestration",
          "Setting Up Nginx as a Reverse Proxy for Node.js",
          "Scaling Node.js Applications with Load Balancers",
          "Monitoring and Debugging Node.js Applications in Production"
        ]
      },
      {
        title: "Project: Building a Full-Stack Application",
        modules: [
          "Project Planning and Requirements",
          "Creating the Database Schema for the Application",
          "Building the Backend API with Node.js and Express",
          "Creating User Authentication and Authorization",
          "Building Frontend Interface and Connecting to API",
          "Handling Form Submissions and Validations",
          "Testing the Application",
          "Integrating Third-Party Services (Payment Gateway, SMS, etc.)",
          "Deploying the Application to Production",
          "Project Presentation and Review"
        ]
      }
    ]
  },{

    id: "frontend-development",
    title: "Frontend Development with React.js and Next.js",
    description: "Learn how to build user interfaces for web applications using React.js and Next.js.",
    sections:
      [
        {
          title: "Introduction to Frontend Development",
          modules: [
            "Overview of Frontend Development",
            "Client-Side vs Server-Side Development",
            "Setting Up a Frontend Development Environment",
            "Introduction to HTML, CSS, and JavaScript",
            "Version Control with Git",
            "Setting Up a Local Server with Live Server",
            "Understanding Web Browsers and Developer Tools",
            "Responsive Web Design Principles",
            "Basic Web Design Principles",
            "Introduction to Frontend Frameworks"
          ]
        },
        {
          title: "HTML5 Fundamentals",
          modules: [
            "Understanding the Structure of HTML5",
            "Creating Basic HTML Pages",
            "HTML5 Tags and Elements",
            "Semantic HTML for Better Accessibility",
            "Forms and Input Elements in HTML",
            "Embedding Multimedia (Audio/Video) in HTML5",
            "HTML5 Canvas and SVG Graphics",
            "HTML5 Local Storage and Session Storage",
            "Introduction to Accessibility in HTML",
            "HTML5 for Web SEO"
          ]
        },
        {
          title: "CSS3 Basics",
          modules: [
            "Introduction to CSS3",
            "CSS Selectors, Properties, and Values",
            "Styling Text and Fonts",
            "Box Model in CSS",
            "Margins, Padding, Borders, and Backgrounds",
            "Using CSS Layouts (Flexbox and Grid)",
            "Positioning Elements (Static, Relative, Absolute, Fixed)",
            "CSS3 Transitions and Animations",
            "Responsive Design with Media Queries",
            "Creating Fluid Layouts"
          ]
        },
        {
          title: "Advanced CSS Techniques",
          modules: [
            "Advanced Selectors in CSS",
            "CSS Variables for Dynamic Styling",
            "CSS Preprocessors: SASS/LESS",
            "Modular CSS Architecture (BEM, SMACSS)",
            "CSS Grid Layout: 2D Layout System",
            "Flexbox Layout: 1D Layout System",
            "CSS Animations and Keyframes",
            "Advanced Transitions and Effects",
            "CSS for Mobile-First Design",
            "CSS Frameworks: Bootstrap, Tailwind CSS"
          ]
        },
        {
          title: "JavaScript Fundamentals",
          modules: [
            "Introduction to JavaScript",
            "JavaScript Syntax and Operators",
            "Data Types and Variables",
            "Functions and Scope",
            "Conditional Statements (If, Switch)",
            "Loops (For, While, ForEach)",
            "Objects and Arrays in JavaScript",
            "DOM Manipulation with JavaScript",
            "Event Handling in JavaScript",
            "Error Handling and Debugging in JavaScript"
          ]
        },
        {
          title: "Advanced JavaScript Concepts",
          modules: [
            "Understanding the JavaScript Execution Context",
            "Closures and Lexical Scope",
            "Asynchronous JavaScript: Callbacks, Promises, and Async/Await",
            "JavaScript ES6+ Features (Arrow Functions, Template Literals)",
            "Destructuring and Spread/Rest Operators",
            "JavaScript Modules (ES6 Modules, CommonJS)",
            "Understanding the Event Loop",
            "Higher-Order Functions and Functional Programming",
            "Error Handling with Try/Catch",
            "JavaScript Design Patterns"
          ]
        },
        {
          title: "Version Control with Git and GitHub",
          modules: [
            "Introduction to Version Control",
            "Setting Up Git and GitHub",
            "Basic Git Commands (init, clone, add, commit, push)",
            "Branching and Merging in Git",
            "Handling Merge Conflicts",
            "Collaborating with GitHub",
            "Using Git for Team Development",
            "Pull Requests and Code Reviews",
            "Git Workflow Strategies (Git Flow)",
            "Best Practices for Git Commit Messages"
          ]
        },
        {
          title: "Introduction to React.js",
          modules: [
            "What is React.js?",
            "Setting Up a React Project",
            "Understanding JSX and Virtual DOM",
            "Creating Your First React Component",
            "React Component Lifecycle",
            "Functional Components vs Class Components",
            "Props and State in React",
            "Event Handling in React",
            "Conditional Rendering in React",
            "React Router for Navigation"
          ]
        },
        {
          title: "State Management in React",
          modules: [
            "Managing State in React with useState",
            "Handling Complex State with useReducer",
            "Context API for Global State Management",
            "Using useEffect for Side Effects",
            "React Component Composition",
            "Component Communication in React (Props, Context)",
            "React Hooks: useState, useEffect, useContext",
            "Forms and Input Handling in React",
            "React Router for Dynamic Navigation",
            "Building Reusable Components in React"
          ]
        },
        {
          title: "Advanced React Concepts",
          modules: [
            "React Component Optimization Techniques",
            "Higher-Order Components (HOCs)",
            "Custom Hooks in React",
            "React Context API for State Management",
            "Error Boundaries in React",
            "Lazy Loading and Code Splitting",
            "React Performance Optimization",
            "Server-Side Rendering (SSR) with React",
            "Static Site Generation (SSG) with React",
            "React Suspense and Concurrent Mode"
          ]
        },
        {
          title: "Building Real-World Applications with React",
          modules: [
            "Project Planning and Architecture",
            "Building a Todo Application in React",
            "Connecting React with REST APIs",
            "Form Validation and Submission in React",
            "State Management with Redux",
            "Handling API Requests with Axios",
            "Working with Firebase and Firestore in React",
            "Authentication and Authorization in React",
            "Testing React Applications with Jest and React Testing Library",
            "Building a Full-Stack Application with React"
          ]
        },
        {
          title: "Frontend Development with Tailwind CSS",
          modules: [
            "Introduction to Tailwind CSS",
            "Setting Up Tailwind in a Project",
            "Utility-First CSS Concepts",
            "Responsive Design with Tailwind CSS",
            "Creating Layouts with Tailwind CSS Grid and Flexbox",
            "Customizing Tailwind Theme",
            "Building Forms with Tailwind CSS",
            "Handling Typography and Spacing",
            "Tailwind CSS Transitions and Animations",
            "Optimizing Tailwind CSS for Production"
          ]
        },
        {
          title: "Frontend Build Tools and Deployment",
          modules: [
            "Introduction to Webpack",
            "Setting Up Webpack for React Projects",
            "Using Babel for Transpiling",
            "Optimizing Assets with Webpack",
            "Creating a Production Build with Webpack",
            "Introduction to Parcel.js",
            "Deployment with Netlify",
            "Deploying React Apps to Vercel",
            "Setting Up Continuous Deployment (CI/CD)",
            "Monitoring and Debugging Deployed Frontend Apps"
          ]
        },
        {
          title: "Project: Building a Full-Stack Application",
          modules: [
            "Understanding Project Requirements",
            "Setting Up the Backend API with Node.js and Express",
            "Building the Frontend with React",
            "Connecting Frontend and Backend with Axios",
            "Implementing Authentication and Authorization",
            "State Management with Redux",
            "Handling File Uploads in React",
            "Unit Testing with Jest and React Testing Library",
            "Final Deployment of the Application",
            "Project Review and Presentation"
          ]
        }
      ],
    
    
  },{
    id:"Game Development",
    title:"Game Development",
    description:"Learn how to create games using game engines like Unity and Unreal Engine.",
    sections: [
      {
        title: "Introduction to Game Development",
        modules: [
          "Overview of Game Development",
          "Game Development Life Cycle",
          "Game Genres and Platforms",
          "Introduction to Game Design",
          "Choosing a Game Engine (Unity, Unreal, Godot)",
          "Setting Up a Game Development Environment",
          "Introduction to Game Programming",
          "Understanding Game Loops",
          "Game Development Tools and Resources",
          "Version Control for Game Development"
        ]
      },
      {
        title: "Game Design Fundamentals",
        modules: [
          "Understanding Core Game Mechanics",
          "Game Design Documents (GDD)",
          "Player Experience and Game Flow",
          "Creating Engaging Challenges and Rewards",
          "Level Design Principles",
          "Prototyping Game Ideas",
          "Balancing Game Mechanics",
          "Game Narrative and Storytelling",
          "Creating Game Environments",
          "Playtesting and Feedback"
        ]
      },
      {
        title: "Game Programming Basics",
        modules: [
          "Introduction to C# for Game Development",
          "Variables, Functions, and Data Types in C#",
          "Control Flow (Loops, Conditionals, Switches)",
          "Working with Arrays and Collections",
          "OOP Principles in Game Programming",
          "Event-Driven Programming",
          "Handling Input and User Interaction",
          "Working with Physics in Games",
          "Creating Game Objects and Components",
          "Collision Detection and Response"
        ]
      },
      {
        title: "Unity Basics",
        modules: [
          "Introduction to Unity3D",
          "Setting Up Unity Development Environment",
          "Unity Interface and Workspace",
          "Creating Your First Game in Unity",
          "Understanding Scenes, GameObjects, and Prefabs",
          "Using Unity Asset Store",
          "Lighting and Shading in Unity",
          "Camera Setup and Perspective",
          "Working with Materials and Textures",
          "Handling 2D and 3D Game Assets in Unity"
        ]
      },
      {
        title: "Scripting in Unity with C#",
        modules: [
          "Introduction to Unity Scripting",
          "Creating Scripts for Game Objects",
          "Unity MonoBehaviour Lifecycle",
          "Handling Player Input in Unity",
          "Working with Unity’s Physics Engine",
          "Animating Game Objects in Unity",
          "Working with Audio in Unity",
          "UI Development in Unity",
          "AI and Pathfinding in Unity",
          "Creating and Managing Game States"
        ]
      },
      {
        title: "2D Game Development with Unity",
        modules: [
          "Creating 2D Games in Unity",
          "Setting Up a 2D Project in Unity",
          "2D Sprites and Animations",
          "Handling 2D Physics and Collisions",
          "Designing 2D Game Levels",
          "Creating 2D Characters and Environments",
          "Implementing 2D Combat Systems",
          "Building UI for 2D Games",
          "Adding Audio and Sound Effects",
          "Optimizing 2D Games for Performance"
        ]
      },
      {
        title: "3D Game Development with Unity",
        modules: [
          "Introduction to 3D Game Development",
          "Creating a 3D Game Project in Unity",
          "Working with 3D Models and Assets",
          "Lighting and Shadow Techniques for 3D Games",
          "3D Physics and Collision Detection",
          "Creating 3D Characters and Animation",
          "Building 3D Game Environments",
          "Working with Terrain in Unity",
          "Camera Techniques for 3D Games",
          "Creating 3D Game UI Elements"
        ]
      },
      {
        title: "Game Artificial Intelligence (AI)",
        modules: [
          "Introduction to Game AI",
          "Finite State Machines (FSM) for AI",
          "Pathfinding Algorithms (A* and NavMesh)",
          "Enemy AI Behavior",
          "AI for NPCs and Character Interactions",
          "Learning AI with Machine Learning for Games",
          "Procedural Content Generation",
          "Creating Dynamic Game Worlds with AI",
          "AI in Strategy and Puzzle Games",
          "Optimizing AI for Performance in Games"
        ]
      },
      {
        title: "Multiplayer Game Development",
        modules: [
          "Introduction to Multiplayer Game Design",
          "Networking Concepts and Protocols",
          "Unity Multiplayer and UNet",
          "Client-Server Architecture for Games",
          "Handling Player Connections and Latency",
          "Synchronizing Game State in Multiplayer",
          "Creating Multiplayer Game Modes",
          "Building Matchmaking Systems",
          "Creating Player Authentication and Security",
          "Testing Multiplayer Games"
        ]
      },
      {
        title: "Game Monetization and Publishing",
        modules: [
          "Understanding Game Monetization Strategies",
          "Implementing In-App Purchases (IAP)",
          "Ads and Microtransactions in Games",
          "Freemium vs Paid Games",
          "Designing for Mobile Game Monetization",
          "Setting Up Game Analytics",
          "Preparing Games for App Stores (iOS/Android)",
          "Creating Marketing Strategies for Games",
          "Understanding Game Publishing Platforms",
          "Launching and Updating Games Post-Release"
        ]
      },
      {
        title: "Game Testing and Debugging",
        modules: [
          "Introduction to Game Testing",
          "Unit Testing and Automation in Game Development",
          "Identifying and Debugging Bugs",
          "Playtesting and Balancing Game Difficulty",
          "Stress Testing Multiplayer Games",
          "Performance Profiling for Games",
          "Optimizing Game Performance",
          "Testing Game UI/UX",
          "Handling Game Crashes and Issues",
          "Bug Reporting and Resolution"
        ]
      },
      {
        title: "Building a Portfolio and Getting Hired",
        modules: [
          "Creating a Game Development Portfolio",
          "Best Practices for Showcasing Games",
          "Networking and Building Connections in Game Development",
          "Freelance vs Full-time Game Developer Jobs",
          "Writing a Winning Resume for Game Developers",
          "Interviewing Tips for Game Development Roles",
          "Building Your Brand as a Game Developer",
          "Contributing to Open Source Game Projects",
          "Finding Game Development Communities",
          "Building a Career Path in Game Development"
        ]
      },
      {
        title: "Capstone Project: Building a Full Game",
        modules: [
          "Game Concept and Design",
          "Building the Game Prototype",
          "Developing Core Mechanics and Features",
          "Iterating and Testing Game Mechanics",
          "Implementing Art, Sound, and Animation",
          "Integrating Multiplayer and Networking",
          "Finalizing Game Levels and Content",
          "Optimizing the Game for Performance",
          "Polishing Game UI/UX",
          "Launching and Marketing the Game"
        ]
      },
    ],
  },
  {
    id:"Graphics Design",
    title:"Graphics Design",
    description:"Learn the fundamentals of graphic design, including color theory, typography, and layout principles.",
    sections: [
      {
        title: "Introduction to Graphic Design",
        modules: [
          "What is Graphic Design?",
          "Principles of Design: Contrast, Balance, Unity",
          "Elements of Design: Line, Shape, Color, Texture",
          "Introduction to Design Software",
          "Overview of the Graphic Design Industry",
          "Typography Basics",
          "Color Theory in Graphic Design",
          "Understanding Visual Hierarchy",
          "Design Thinking and Problem Solving",
          "Basic Graphic Design Tools and Techniques"
        ]
      },
      {
        title: "Typography and Fonts",
        modules: [
          "History of Typography",
          "Anatomy of Letterforms",
          "Choosing the Right Font for Your Design",
          "Font Pairing Techniques",
          "Understanding Font Families",
          "Kerning, Tracking, and Leading",
          "Creating Custom Typography",
          "Web Fonts vs Desktop Fonts",
          "Typography in Digital Design",
          "Applying Typography in Layout Design"
        ]
      },
      {
        title: "Color Theory and Application",
        modules: [
          "The Color Wheel",
          "Color Harmony and Schemes",
          "Psychology of Color",
          "Understanding RGB vs CMYK",
          "Working with Gradients and Color Transitions",
          "Color in Branding and Identity Design",
          "Creating Color Palettes",
          "Contrast and Accessibility in Design",
          "Using Color for Emphasis and Impact",
          "Color in Web and Mobile Design"
        ]
      },
      {
        title: "Adobe Photoshop Basics",
        modules: [
          "Introduction to Adobe Photoshop",
          "Navigating the Photoshop Interface",
          "Working with Layers and Layer Styles",
          "Using Selection Tools",
          "Masking and Layer Masks",
          "Adjustment Layers and Color Correction",
          "Retouching and Editing Photos",
          "Creating Text Effects",
          "Working with Filters and Effects",
          "Exporting and Saving Files in Photoshop"
        ]
      },
      {
        title: "Adobe Illustrator Basics",
        modules: [
          "Introduction to Adobe Illustrator",
          "Creating and Editing Vectors",
          "Using the Pen Tool",
          "Working with Paths and Anchor Points",
          "Creating Shapes and Text in Illustrator",
          "Using Layers in Illustrator",
          "Illustrator Brushes and Patterns",
          "Vector Tracing and Image Trace",
          "Working with Gradients and Mesh",
          "Exporting Files from Illustrator"
        ]
      },
      {
        title: "Adobe InDesign Basics",
        modules: [
          "Introduction to Adobe InDesign",
          "Creating a Document in InDesign",
          "Working with Text and Paragraph Styles",
          "Designing with Grids and Guides",
          "Managing and Formatting Images",
          "Typography and Text Formatting in InDesign",
          "Creating Interactive PDFs",
          "Working with Master Pages",
          "Designing Magazines, Brochures, and Flyers",
          "Printing and Exporting InDesign Documents"
        ]
      },
      {
        title: "Logo Design",
        modules: [
          "The Importance of a Logo in Branding",
          "Types of Logos: Wordmarks, Pictorial Marks, Abstract Marks",
          "Logo Design Process",
          "Sketching and Brainstorming Logo Ideas",
          "Choosing Colors and Typography for Logos",
          "Creating Scalable and Versatile Logos",
          "Designing Logos in Illustrator",
          "Working with Clients on Logo Design",
          "Refining and Finalizing Logo Designs",
          "Logo Trends and Best Practices"
        ]
      },
      {
        title: "Branding and Identity Design",
        modules: [
          "What is Branding?",
          "The Role of Graphic Design in Branding",
          "Creating a Brand Identity",
          "Logo Design and Branding Systems",
          "Brand Guidelines and Style Guides",
          "Typography and Color in Branding",
          "Designing Business Cards, Letterheads, and Stationery",
          "Branding for Web and Mobile",
          "Creating Social Media Assets for Branding",
          "Rebranding Strategies and Design"
        ]
      },
      {
        title: "Web and UI/UX Design",
        modules: [
          "Introduction to Web Design",
          "UI vs UX: Understanding the Difference",
          "Designing for Web and Mobile Platforms",
          "Wireframing and Prototyping",
          "Working with Design Systems",
          "Responsive Design and Layouts",
          "UI/UX Design Tools (Sketch, Figma, Adobe XD)",
          "Creating Interactive Web Mockups",
          "User-Centered Design Principles",
          "Testing and Iterating UI/UX Designs"
        ]
      },
      {
        title: "Print and Packaging Design",
        modules: [
          "Principles of Print Design",
          "Designing for Print vs Digital",
          "Creating Print Materials (Flyers, Posters, Brochures)",
          "Working with Bleeds, Margins, and Safe Zones",
          "Packaging Design for Products",
          "Designing Labels and Product Packaging",
          "Preparing Files for Printing",
          "Understanding Print Production Processes",
          "Color Management in Print Design",
          "Designing for Large Format Printing"
        ]
      },
      {
        title: "Social Media and Digital Marketing Design",
        modules: [
          "Designing for Social Media Platforms",
          "Creating Engaging Social Media Graphics",
          "Visual Content Marketing Strategies",
          "Designing Ads and Banners for Digital Marketing",
          "Email Marketing Design",
          "Designing Landing Pages and Web Banners",
          "Optimizing Designs for Mobile Devices",
          "Creating Infographics and Data Visualizations",
          "SEO Basics for Designers",
          "Digital Advertising Design Trends"
        ]
      },
      {
        title: "Motion Graphics and Animation",
        modules: [
          "Introduction to Motion Graphics",
          "Designing Animated Logos",
          "Working with Keyframes and Animation Curves",
          "Animating Text and Shape Layers",
          "Using Adobe After Effects for Animation",
          "Creating Explainer Videos and Animations",
          "Animating in Adobe Premiere Pro",
          "Sound Design for Motion Graphics",
          "Visual Effects in Animation",
          "Exporting and Optimizing Motion Graphics"
        ]
      },
      {
        title: "Advanced Design Techniques",
        modules: [
          "Working with 3D Graphics and Tools",
          "Designing for Augmented Reality (AR)",
          "Creating Complex Vector Illustrations",
          "Advanced Photo Manipulation Techniques",
          "Digital Painting and Illustrations",
          "Designing for Interactive Media",
          "Creating Virtual Reality (VR) Interfaces",
          "Advanced Typography and Custom Font Creation",
          "Designing for Large Scale Installations",
          "Integrating AI and Machine Learning in Design"
        ]
      },
      {
        title: "Design Portfolio Development",
        modules: [
          "Building a Graphic Design Portfolio",
          "Creating a Personal Branding for Designers",
          "Choosing Your Best Work for Portfolio",
          "Designing a Portfolio Website",
          "Creating an Online Presence for Designers",
          "Networking in the Design Industry",
          "Freelancing vs Full-time Employment",
          "Client Communication and Contracts",
          "Building Relationships with Design Agencies",
          "Portfolio Review and Critique"
        ]
      },
      {
        title: "Capstone Project: Full Design Campaign",
        modules: [
          "Conceptualizing and Planning a Design Campaign",
          "Working with Real Clients on Design Projects",
          "Designing a Full Branding Package",
          "Creating Digital and Print Collateral",
          "Building a Social Media Marketing Campaign",
          "Developing Interactive Digital Experiences",
          "Designing Packaging for Products",
          "Creating Motion Graphics and Animations",
          "Refining and Presenting Final Design Work",
          "Project Presentation and Client Feedback"
        ]
      }
    ]
  },{
    id:"Video Editing",
    title:"Video Editing",
    description:"Learn the fundamentals of video editing and create engaging videos for social media, marketing, and more.",
    modules: [
      {
        title: "Introduction to Video Editing",
        modules: [
          "What is Video Editing?",
          "Overview of Video Editing Software",
          "Setting Up Your Editing Environment",
          "Understanding Video File Formats",
          "Basic Video Editing Terminology",
          "Introduction to Video Timeline",
          "Importing and Organizing Media Files",
          "Setting Up a New Project",
          "Understanding Frame Rates and Resolution",
          "Understanding Aspect Ratios and Color Spaces"
        ]
      },
      {
        title: "Video Editing Software Basics",
        modules: [
          "Introduction to Adobe Premiere Pro",
          "Navigating the Premiere Pro Interface",
          "Basic Editing Tools in Premiere Pro",
          "Setting Preferences and Shortcuts",
          "Importing Media Files into Premiere Pro",
          "Working with Video and Audio Tracks",
          "Timeline Overview and Organization",
          "Basic Transitions: Cuts and Fades",
          "Introduction to Final Cut Pro",
          "Introduction to DaVinci Resolve"
        ]
      },
      {
        title: "Basic Video Editing Techniques",
        modules: [
          "Cutting and Trimming Clips",
          "Splitting and Joining Clips",
          "Basic Transitions (Dissolves, Fades, etc.)",
          "Working with Audio Tracks",
          "Audio Fades and Adjustments",
          "Color Grading Basics",
          "Adding Titles and Text Overlays",
          "Working with Multiple Video Tracks",
          "Speed Adjustments: Slow Motion & Fast Motion",
          "Using the Razor Tool for Editing"
        ]
      },
      {
        title: "Advanced Editing Techniques",
        modules: [
          "Using Keyframes for Video Effects",
          "Advanced Transitions: Slide, Wipe, Zoom",
          "Working with Multiple Camera Angles (Multicam Editing)",
          "Advanced Color Correction and Grading",
          "Creating Picture-in-Picture Effects",
          "Stabilizing Shaky Footage",
          "Working with Audio Effects and Filters",
          "Time-Lapse and Motion Effects",
          "Creating Custom Transitions",
          "Editing for Different Aspect Ratios"
        ]
      },
      {
        title: "Sound Editing and Mixing",
        modules: [
          "Understanding Audio Editing Basics",
          "Cleaning Up Audio Tracks",
          "Noise Reduction Techniques",
          "Syncing Audio and Video",
          "Using Audio Effects (Reverb, EQ, Compression)",
          "Mixing Audio Levels and Panning",
          "Creating a Soundtrack",
          "Adding Sound Effects and Foley",
          "Creating Music for Videos",
          "Exporting Audio and Video for Different Platforms"
        ]
      },
      {
        title: "Motion Graphics and Visual Effects",
        modules: [
          "Introduction to After Effects",
          "Creating Basic Motion Graphics",
          "Working with Layers in After Effects",
          "Animating Text and Objects",
          "Using Masks and Rotoscoping",
          "Green Screen and Chroma Keying",
          "Adding Special Effects (Explosion, Fire, etc.)",
          "Tracking and Stabilizing Motion",
          "Creating Titles and Credits",
          "Using Templates in After Effects"
        ]
      },
      {
        title: "Transitions and Effects in Video Editing",
        modules: [
          "Working with Video Transitions",
          "Using Audio Transitions",
          "Creating Custom Transitions",
          "Applying Filters and Color Effects",
          "Adjusting Speed: Time Remapping",
          "Adding Light Leaks and Lens Flares",
          "Creating and Using Presets",
          "Using Visual Effects to Enhance Storytelling",
          "Transitions for Music Videos",
          "Understanding Motion Graphics in Video Editing"
        ]
      },
      {
        title: "Advanced Color Grading",
        modules: [
          "Understanding Color Grading Principles",
          "Introduction to DaVinci Resolve for Color Grading",
          "Primary Color Correction: Exposure, Contrast, Saturation",
          "Secondary Color Grading: Isolating Colors",
          "Using LUTs for Color Grading",
          "Creating Mood with Color Grading",
          "Color Wheels and Curves",
          "Skin Tone Adjustments in Color Grading",
          "Creating a Vintage Film Look",
          "Exporting for Film and Web"
        ]
      },
      {
        title: "Editing for Different Platforms",
        modules: [
          "Editing for YouTube and Vimeo",
          "Creating Content for Social Media",
          "Aspect Ratios for Different Platforms",
          "Optimizing Video for Mobile Viewing",
          "Creating Vertical Video for Instagram",
          "Editing for Facebook Ads",
          "Video Length and Engagement",
          "Creating Thumbnails and Previews",
          "Adding Subtitles and Captions",
          "Video SEO for YouTube"
        ]
      },
      {
        title: "Editing for Commercials and Advertising",
        modules: [
          "Introduction to Commercial Video Editing",
          "Understanding Ad Formats and Standards",
          "Editing Short Commercials",
          "Storyboarding for Commercials",
          "Creating Product Demos and Infomercials",
          "Understanding Brand Guidelines",
          "Adding Call-to-Action in Commercials",
          "Editing for Web and TV Commercials",
          "Using Audio to Enhance Commercials",
          "Creating a Commercial Portfolio"
        ]
      },
      {
        title: "Documentary and Narrative Editing",
        modules: [
          "Understanding Documentary Storytelling",
          "Editing Interviews and B-Roll",
          "Creating a Story Arc for Documentaries",
          "Using Voiceovers and Narration",
          "Creating Transitions for Storytelling",
          "Editing for Emotional Impact",
          "Color Grading for Documentary",
          "Editing for TV and Film",
          "Film Script Analysis for Editors",
          "Working with Directors and Producers"
        ]
      },
      {
        title: "Final Project: Complete Video Production",
        modules: [
          "Choosing a Project for Final Video",
          "Storyboarding and Pre-Production Planning",
          "Shooting and Capturing Video Content",
          "Editing the Video with Effects and Transitions",
          "Adding Sound and Music",
          "Color Grading the Final Video",
          "Finalizing the Video for Output",
          "Exporting Video for Different Platforms",
          "Creating a Video Portfolio",
          "Client Presentation and Feedback"
        ]
      },
      {
        title: "Exporting and Sharing Your Work",
        modules: [
          "Understanding Video Compression",
          "Exporting for Web: H.264, MP4",
          "Exporting for Film: ProRes, DNxHD",
          "Exporting for YouTube and Social Media",
          "Creating a YouTube Channel for Your Videos",
          "Creating Blu-ray and DVD Versions",
          "Understanding Bitrates and Quality Settings",
          "Uploading and Sharing Videos on Cloud Services",
          "Creating Video Previews and Trailers",
          "Archiving Projects for Future Use"
        ]
      },
    ],
  },
  {
    id:"Animation and Motion Graphics",
    title:"Animation and Motion Graphics",
    description:"Learn the fundamentals of animation and motion graphics, including the basics of character animation and motion graphics design.",
    sections: [
      {
        title: "Introduction to Animation",
        modules: [
          "What is Animation?",
          "History and Evolution of Animation",
          "Overview of Animation Types: 2D, 3D, Stop Motion",
          "Understanding Animation Software",
          "Animation Terminology and Basics",
          "The Role of Animation in Film and Media",
          "Introduction to Storyboarding",
          "Types of Animation Techniques",
          "Animation and Cinematic Storytelling",
          "Keyframes and Timeline Basics"
        ]
      },
      {
        title: "Fundamentals of Animation",
        modules: [
          "The 12 Principles of Animation",
          "Timing and Spacing in Animation",
          "Squash and Stretch",
          "Anticipation and Follow-through",
          "Staging and Composition",
          "Straight-Ahead Action and Pose-to-Pose Animation",
          "Arcs and Exaggeration",
          "Secondary Actions",
          "Appeal in Animation",
          "Animating Simple Shapes and Objects"
        ]
      },
      {
        title: "2D Animation Basics",
        modules: [
          "Introduction to 2D Animation",
          "Using Adobe Animate for 2D Animation",
          "Drawing and Creating Characters in 2D",
          "Working with Layers and Timelines",
          "Animating Simple Objects in 2D",
          "Principles of 2D Character Animation",
          "Lip Syncing and Facial Animation",
          "Animating Walk Cycles",
          "Creating 2D Character Walk Cycles",
          "Animating Fluid Movements"
        ]
      },
      {
        title: "Advanced 2D Animation Techniques",
        modules: [
          "Advanced Principles of 2D Animation",
          "Character Rigging in 2D",
          "Creating Advanced Walk Cycles",
          "Animating Complex Facial Expressions",
          "Animating Dialogue and Lip Sync",
          "Understanding Perspective in 2D Animation",
          "Creating Backgrounds and Environments",
          "Advanced Motion Tweens and Shape Tweens",
          "Animating for Different Genres: Cartoon, Realistic",
          "Working with Special Effects in 2D Animation"
        ]
      },
      {
        title: "Introduction to 3D Animation",
        modules: [
          "Introduction to 3D Animation",
          "3D Modeling Basics",
          "Setting Up a 3D Workspace (Blender, Maya, etc.)",
          "Understanding 3D Animation Software: Blender, Maya, Cinema 4D",
          "Principles of 3D Animation",
          "Introduction to 3D Character Design",
          "Creating Basic 3D Objects and Scenes",
          "Animating 3D Objects: Position, Rotation, Scale",
          "Camera Movement in 3D Animation",
          "Lighting and Shading in 3D Animation"
        ]
      },
      {
        title: "Advanced 3D Animation",
        modules: [
          "Advanced Principles of 3D Animation",
          "Character Rigging and Skinning in 3D",
          "Animating 3D Characters: Walk Cycles, Running, and Jumping",
          "Animating Complex Facial Expressions in 3D",
          "Inverse Kinematics in 3D Animation",
          "Animating in 3D with Motion Capture",
          "Rendering Techniques in 3D Animation",
          "Advanced Texturing and Shading in 3D",
          "Animating for Film and Video Games",
          "Animating Particles and Special Effects in 3D"
        ]
      },
      {
        title: "Motion Graphics and Visual Effects",
        modules: [
          "Introduction to Motion Graphics",
          "Understanding Adobe After Effects",
          "Creating Simple Motion Graphics",
          "Animating Text and Logos",
          "Animating in 3D Space with After Effects",
          "Creating Transitions and Effects",
          "Using Shape Layers for Animation",
          "Working with Masks and Rotoscoping",
          "Advanced Animation with Expressions",
          "Creating Motion Graphics for Commercials"
        ]
      },
      {
        title: "Character Design and Animation",
        modules: [
          "Understanding Character Design Principles",
          "Sketching Characters and Concepts",
          "Creating Turnarounds and Expressions Sheets",
          "Designing for 2D vs 3D Animation",
          "Understanding the Role of Color in Character Design",
          "Building a 3D Character Model",
          "Creating 2D Character Rigging and Posing",
          "Animating Characters with Personality",
          "Animation for Children’s Cartoons",
          "Character Animation in Short Films"
        ]
      },
      {
        title: "Stop Motion Animation",
        modules: [
          "Introduction to Stop Motion Animation",
          "History of Stop Motion",
          "Materials and Tools for Stop Motion",
          "Creating Clay and Puppet Animations",
          "Animating Stop Motion Characters",
          "Lighting and Camera Setup for Stop Motion",
          "Using the Dragonframe Software for Stop Motion",
          "Creating Set Designs for Stop Motion",
          "Advanced Stop Motion Techniques",
          "Stop Motion for Commercials and Short Films"
        ]
      },
      {
        title: "Animation for Film and Television",
        modules: [
          "Overview of Animation in Film and TV",
          "Animation Pre-Production: Script to Storyboard",
          "Character Design and Development for Film",
          "Creating Animated Short Films",
          "Editing and Compositing in Animation",
          "Sound Design and Music in Animation",
          "Working with Directors and Producers",
          "Animating for 2D TV Shows",
          "Working on Full-Length Animated Films",
          "The Animation Production Pipeline"
        ]
      },
      {
        title: "Creating a Short Animated Film",
        modules: [
          "Brainstorming and Scriptwriting for Animation",
          "Storyboarding Your Animation",
          "Designing Characters and Environments",
          "Creating a Rough Animation",
          "Adding Final Details to the Animation",
          "Creating Final Edits and Compositing",
          "Sound and Music for Animation",
          "Final Rendering and Exporting",
          "Animation Portfolio Development",
          "Presenting Your Short Film"
        ]
      },
      {
        title: "Animation for Video Games",
        modules: [
          "Introduction to Video Game Animation",
          "Character and Object Animation in Video Games",
          "Creating Animation Loops for Games",
          "Animating Characters for Action Games",
          "Using Motion Capture for Game Animation",
          "Creating Interactive Animations in Games",
          "Game Engines: Unity vs Unreal Engine",
          "Integrating Animations into Game Engines",
          "Animating Cutscenes for Video Games",
          "Optimizing Animation for Game Performance"
        ]
      },
      {
        title: "Advanced Animation Techniques",
        modules: [
          "Animating with Particle Systems",
          "Fluid and Cloth Simulation in Animation",
          "Creating Realistic Simulations: Water, Fire, etc.",
          "Procedural Animation Techniques",
          "Facial Animation for Film",
          "Animating Complex Actions in 3D",
          "Creating Digital Puppets for Animation",
          "3D Animation for Virtual Reality",
          "Advanced Rigging and Animation for Characters",
          "Animating for Large-Scale Productions"
        ]
      },
      {
        title: "Final Project and Portfolio Development",
        modules: [
          "Choosing Your Final Animation Project",
          "Planning and Storyboarding Your Final Project",
          "Designing Characters and Scenes",
          "Animating Your Final Project: Techniques and Tools",
          "Post-Production: Compositing and Sound Design",
          "Creating a Portfolio to Showcase Your Work",
          "Creating an Animation Demo Reel",
          "Presenting Your Final Project to an Audience",
          "Freelance Work and Getting Animation Jobs",
          "Building Your Career in Animation"
        ]
      }
    ]
  },
  {
    id:"Dev Ops and cloud computing",
    title:"Dev Ops and cloud computing",
    description:"DevOps and cloud computing",
    sections: [
      {
        title: "Introduction to DevOps",
        modules: [
          "What is DevOps?",
          "History and Evolution of DevOps",
          "DevOps Culture and Principles",
          "DevOps Lifecycle Overview",
          "Roles and Responsibilities in a DevOps Team",
          "Benefits of DevOps",
          "Understanding DevOps Metrics",
          "DevOps Tools Ecosystem",
          "Agile vs DevOps",
          "Building a DevOps Mindset"
        ]
      },
      {
        title: "Version Control with Git",
        modules: [
          "Introduction to Version Control",
          "Setting up Git and GitHub",
          "Basic Git Commands: Clone, Add, Commit",
          "Branching and Merging in Git",
          "Resolving Merge Conflicts",
          "Git Flow Workflow",
          "Working with Remote Repositories",
          "Collaboration with GitHub",
          "Git Rebase vs Merge",
          "Version Control Best Practices"
        ]
      },
      {
        title: "Continuous Integration (CI)",
        modules: [
          "What is Continuous Integration?",
          "Setting up a CI Pipeline",
          "CI Tools Overview: Jenkins, CircleCI, Travis CI",
          "Automating Builds with Jenkins",
          "Configuring Jenkins for CI",
          "Writing CI Scripts and Pipelines",
          "Code Quality and Static Code Analysis",
          "Unit Testing and Test Automation",
          "Integrating CI with GitHub and GitLab",
          "Handling Build Failures and Notifications"
        ]
      },
      {
        title: "Continuous Deployment (CD)",
        modules: [
          "What is Continuous Deployment?",
          "CI vs CD: Understanding the Difference",
          "Setting up Continuous Deployment Pipeline",
          "Automating Deployments with Jenkins",
          "Blue/Green Deployment Strategy",
          "Canary Releases",
          "Automating Rollbacks",
          "Integration with Cloud Platforms",
          "Configuring CD Tools: Jenkins, GitLab CI/CD",
          "Monitoring and Managing Deployments"
        ]
      },
      {
        title: "Containerization with Docker",
        modules: [
          "What is Docker?",
          "Installing Docker and Basic Commands",
          "Understanding Docker Images and Containers",
          "Creating Custom Docker Images",
          "Dockerfile Basics",
          "Docker Compose for Multi-Container Applications",
          "Networking in Docker",
          "Docker Volumes and Persistent Storage",
          "Managing Docker Containers and Images",
          "Docker Best Practices"
        ]
      },
      {
        title: "Orchestration with Kubernetes",
        modules: [
          "What is Kubernetes?",
          "Installing and Setting up Kubernetes",
          "Understanding Kubernetes Architecture",
          "Deploying Applications in Kubernetes",
          "Creating Pods and Services",
          "Scaling Applications with Kubernetes",
          "ConfigMaps and Secrets in Kubernetes",
          "Managing Deployments in Kubernetes",
          "Health Checks and Self-Healing in Kubernetes",
          "Kubernetes Security Best Practices"
        ]
      },
      {
        title: "Configuration Management with Ansible",
        modules: [
          "What is Ansible?",
          "Installing Ansible",
          "Basic Ansible Commands and Setup",
          "Writing Ansible Playbooks",
          "Managing Hosts with Ansible",
          "Ansible Roles and Variables",
          "Automating Infrastructure with Ansible",
          "Configuring Servers with Ansible",
          "Ansible for Continuous Deployment",
          "Ansible Best Practices"
        ]
      },
      {
        title: "Infrastructure as Code (IaC)",
        modules: [
          "What is Infrastructure as Code?",
          "Introduction to IaC Tools: Terraform, CloudFormation",
          "Setting up Terraform",
          "Terraform Basics: Providers, Resources, and Modules",
          "Managing Cloud Infrastructure with Terraform",
          "Terraform State and Backend Configuration",
          "CloudFormation Basics",
          "Managing Infrastructure with CloudFormation",
          "Versioning Infrastructure with Git",
          "IaC Best Practices"
        ]
      },
      {
        title: "Cloud Platforms: AWS, Azure, Google Cloud",
        modules: [
          "Introduction to Cloud Computing",
          "Overview of AWS, Azure, and Google Cloud",
          "Setting up AWS EC2 Instances",
          "Managing Storage with AWS S3",
          "Working with AWS Lambda Functions",
          "Setting up Networking in AWS (VPC, Subnets)",
          "Managing Resources in Azure",
          "Google Cloud Console and Compute Engine",
          "Cloud Security and IAM",
          "Cost Management in Cloud Platforms"
        ]
      },
      {
        title: "Monitoring and Logging",
        modules: [
          "What is Monitoring in DevOps?",
          "Monitoring Tools Overview: Prometheus, Nagios, Grafana",
          "Setting up Prometheus for Metrics Collection",
          "Integrating Prometheus with Grafana",
          "Application Performance Monitoring with New Relic",
          "Setting up Logging with ELK Stack (Elasticsearch, Logstash, Kibana)",
          "Centralized Logging with Fluentd",
          "Alerting and Notifications",
          "Log Aggregation and Analysis",
          "Best Practices for Monitoring and Logging"
        ]
      },
      {
        title: "DevOps Security (DevSecOps)",
        modules: [
          "What is DevSecOps?",
          "Integrating Security into DevOps Pipeline",
          "Automating Security Scanning with Jenkins",
          "Securing Containers and Kubernetes",
          "Security Vulnerability Management",
          "OWASP Top 10 and Application Security",
          "Implementing Static Application Security Testing (SAST)",
          "Implementing Dynamic Application Security Testing (DAST)",
          "Managing Secrets and Credentials",
          "Security Best Practices for CI/CD"
        ]
      },
      {
        title: "Automation and Scripting",
        modules: [
          "Introduction to Automation in DevOps",
          "Scripting with Bash and Shell",
          "Writing Python Scripts for DevOps",
          "Automating Tasks with PowerShell",
          "Integrating Automation with CI/CD Pipelines",
          "Scripting for Infrastructure Automation",
          "Automating Cloud Resources",
          "Writing Scripts for Monitoring and Alerts",
          "Versioning Scripts and Automation",
          "Best Practices for Automation in DevOps"
        ]
      },
      {
        title: "Collaboration and Communication in DevOps",
        modules: [
          "DevOps Culture and Collaboration",
          "Communication Tools: Slack, Microsoft Teams",
          "Agile and Scrum in DevOps",
          "Collaborating with Developers and Operations Teams",
          "Managing Code Reviews and Pull Requests",
          "Collaborative CI/CD Pipeline Management",
          "Automating Documentation Generation",
          "Using JIRA for DevOps Project Management",
          "Cross-Functional Collaboration with DevOps",
          "Conflict Resolution in DevOps Teams"
        ]
      },
      {
        title: "DevOps Best Practices and Case Studies",
        modules: [
          "DevOps Best Practices Overview",
          "Common DevOps Pitfalls and How to Avoid Them",
          "Case Study: Successful DevOps Implementation",
          "Case Study: Building Scalable and Reliable CI/CD Pipelines",
          "DevOps for Large-Scale Systems",
          "Building a Resilient Infrastructure",
          "Managing Failure and Downtime in DevOps",
          "Managing Version Control in DevOps",
          "Real-World DevOps Challenges and Solutions",
          "Future Trends in DevOps"
        ]
      },
      {
        title: "Capstone Project and Certification",
        modules: [
          "Project Planning and Design",
          "Choosing a DevOps Toolchain for Your Project",
          "Implementing a Complete DevOps Pipeline",
          "Testing, Deployment, and Monitoring",
          "Automating Infrastructure and Configurations",
          "Integrating Security in DevOps Workflow",
          "Final Project Presentation",
          "Collecting Feedback and Iteration",
          "Preparing for DevOps Certifications",
          "DevOps Career Path and Next Steps"
        ]
      }
    ]
  },{
    id: "Digital-Marketing",
    title: "Digital Marketing",
    description: "Digital Marketing",
    sections: [
      {
        title: "Introduction to Digital Marketing",
        modules: [
          "What is Digital Marketing?",
          "History and Evolution of Digital Marketing",
          "Digital Marketing vs Traditional Marketing",
          "Key Concepts in Digital Marketing",
          "Digital Marketing Strategy Framework",
          "Digital Marketing Channels Overview",
          "Understanding the Digital Marketing Funnel",
          "Creating Buyer Personas",
          "Customer Journey and Touchpoints",
          "Introduction to Marketing Automation"
        ]
      },
      {
        title: "Search Engine Optimization (SEO)",
        modules: [
          "What is SEO?",
          "Search Engine Algorithms",
          "On-Page SEO: Title Tags, Meta Descriptions, and Headers",
          "Keyword Research and Analysis",
          "Content Optimization for SEO",
          "Technical SEO: Site Speed, Mobile Optimization, and More",
          "Building High-Quality Backlinks",
          "Local SEO: Optimizing for Local Search Results",
          "SEO Tools Overview: Google Search Console, Ahrefs, SEMrush",
          "SEO Analytics and Reporting"
        ]
      },
      {
        title: "Search Engine Marketing (SEM)",
        modules: [
          "Introduction to SEM and PPC",
          "Google Ads Overview",
          "Setting Up Google Ads Campaigns",
          "Keyword Research for Paid Campaigns",
          "Creating Effective Ads and Copywriting",
          "Bidding Strategies and Budgeting",
          "Understanding Quality Score",
          "Google Ads Extensions and Features",
          "Conversion Tracking and ROI Measurement",
          "Optimizing PPC Campaigns"
        ]
      },
      {
        title: "Content Marketing",
        modules: [
          "What is Content Marketing?",
          "Content Strategy Development",
          "Content Creation: Blog Posts, Videos, and Infographics",
          "Understanding Content Marketing Channels",
          "Content Distribution Strategies",
          "Content Curation and Repurposing",
          "SEO and Content Marketing Integration",
          "Writing for the Web: Best Practices",
          "Content Marketing Analytics",
          "Building a Content Calendar"
        ]
      },
      {
        title: "Social Media Marketing",
        modules: [
          "What is Social Media Marketing?",
          "Choosing the Right Social Media Platforms",
          "Building a Social Media Strategy",
          "Creating Engaging Content for Social Media",
          "Social Media Advertising: Facebook, Instagram, LinkedIn, Twitter",
          "Paid vs Organic Social Media Strategies",
          "Community Management and Engagement",
          "Social Media Analytics and Reporting",
          "Social Media Influencer Marketing",
          "Social Media Crisis Management"
        ]
      },
      {
        title: "Email Marketing",
        modules: [
          "Introduction to Email Marketing",
          "Building and Growing an Email List",
          "Creating Effective Email Campaigns",
          "Segmentation and Personalization",
          "Email Marketing Automation",
          "A/B Testing for Email Campaigns",
          "Email Marketing Analytics and Metrics",
          "Designing Emails for Maximum Engagement",
          "Compliance: GDPR, CAN-SPAM Act",
          "Email Deliverability Best Practices"
        ]
      },
      {
        title: "Affiliate Marketing",
        modules: [
          "What is Affiliate Marketing?",
          "Types of Affiliate Programs",
          "Choosing the Right Affiliate Networks",
          "Building an Affiliate Marketing Strategy",
          "Setting Up an Affiliate Program",
          "Tracking Affiliate Performance",
          "Affiliate Marketing for Bloggers and Influencers",
          "Legal Aspects of Affiliate Marketing",
          "Affiliate Marketing Optimization",
          "Scaling and Expanding Your Affiliate Marketing"
        ]
      },
      {
        title: "Online Reputation Management (ORM)",
        modules: [
          "What is Online Reputation Management?",
          "Building a Positive Online Presence",
          "Social Listening and Monitoring",
          "Handling Negative Reviews and Feedback",
          "Crisis Management and PR",
          "ORM Tools: Brand24, Mention, Google Alerts",
          "Responding to Customer Complaints Online",
          "Content Marketing and ORM",
          "SEO and ORM Integration",
          "Building Trust and Credibility Online"
        ]
      },
      {
        title: "Web Analytics and Data-Driven Marketing",
        modules: [
          "Introduction to Web Analytics",
          "Google Analytics Setup and Configuration",
          "Understanding Key Metrics and KPIs",
          "Analyzing Website Traffic and User Behavior",
          "Conversion Rate Optimization (CRO)",
          "Using UTM Parameters and Tracking Links",
          "Segmentation and Audience Analysis",
          "Google Tag Manager",
          "A/B Testing and Multivariate Testing",
          "Reporting and Dashboards"
        ]
      },
      {
        title: "Mobile Marketing",
        modules: [
          "What is Mobile Marketing?",
          "Mobile Marketing Channels and Platforms",
          "Building Mobile-Friendly Websites",
          "SMS Marketing Campaigns",
          "In-App Advertising",
          "Mobile App Marketing Strategies",
          "Mobile Search Optimization",
          "Push Notifications and Geo-Targeting",
          "Measuring Mobile Marketing Success",
          "Mobile Marketing Analytics"
        ]
      },
      {
        title: "Video Marketing",
        modules: [
          "Introduction to Video Marketing",
          "Creating Engaging Video Content",
          "Video SEO: Optimizing Videos for Search Engines",
          "YouTube Marketing Strategies",
          "Live Streaming and Webinars",
          "Video Advertising: YouTube, Facebook, Instagram",
          "Video Analytics and Metrics",
          "Video Marketing Tools: Adobe Premiere, Final Cut Pro",
          "Video Marketing for Social Media",
          "Maximizing Video Engagement and Shares"
        ]
      },
      {
        title: "E-commerce Marketing",
        modules: [
          "E-commerce Marketing Fundamentals",
          "Building an E-commerce Website",
          "SEO for E-commerce Websites",
          "Product Listing Optimization",
          "Paid Search and Product Ads",
          "Email Marketing for E-commerce",
          "Social Media Marketing for E-commerce",
          "Influencer Marketing for E-commerce",
          "Affiliate Marketing for E-commerce",
          "E-commerce Analytics and Reporting"
        ]
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        modules: [
          "What is Conversion Rate Optimization?",
          "Understanding Conversion Funnels",
          "Optimizing Landing Pages for Conversions",
          "A/B Testing for CRO",
          "Heatmaps and User Behavior Analysis",
          "Improving User Experience (UX) for Conversions",
          "Optimizing CTAs and Forms",
          "Building Trust with Social Proof",
          "Conversion Analytics and Reporting",
          "CRO Tools: Optimizely, VWO, Unbounce"
        ]
      },
      {
        title: "Digital Marketing Strategy and Campaign Management",
        modules: [
          "Developing a Digital Marketing Strategy",
          "Setting Goals and Objectives",
          "Target Audience Analysis",
          "Choosing Marketing Channels",
          "Creating a Digital Marketing Plan",
          "Budgeting for Digital Campaigns",
          "Campaign Execution and Optimization",
          "Performance Tracking and Reporting",
          "Adjusting Strategies Based on Analytics",
          "Scaling and Growing Digital Campaigns"
        ]
      },
      {
        title: "Digital Marketing Trends and Future",
        modules: [
          "Emerging Digital Marketing Trends",
          "The Role of AI and Machine Learning in Digital Marketing",
          "Voice Search and Virtual Assistants",
          "Personalization and Predictive Marketing",
          "Chatbots and Conversational Marketing",
          "Interactive Content and AR/VR",
          "Blockchain in Digital Marketing",
          "Marketing Automation Future",
          "Influencer Marketing Growth",
          "Preparing for the Future of Digital Marketing"
        ]
      },
      {
        title: "Capstone Project and Certification",
        modules: [
          "Project Overview and Requirements",
          "Choosing a Digital Marketing Focus Area",
          "Implementing Strategies for the Chosen Area",
          "Campaign Planning and Execution",
          "Tracking and Analyzing Results",
          "Optimizing Your Campaign",
          "Final Project Presentation",
          "Feedback and Iteration",
          "Preparing for Digital Marketing Certifications",
          "Digital Marketing Career Path and Next Steps"
        ]
      }
    ]
  }
];

export default courses;
