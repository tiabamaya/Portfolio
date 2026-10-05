    import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "ka-gabai",
    title: "KA-GABAI",
    shortTitle: "KA-GABAI",
    category: "AI / Smart Retail / Backend",
    year: "2026",
    theme: "ai",

    description:
      "An AI-powered smart grocery cart prototype designed to help shoppers make healthier choices, manage their budget, and navigate stores more efficiently.",

    longDescription:
      "KA-GABAI is an AI-powered smart grocery cart prototype developed to improve the grocery shopping experience through nutritional guidance, real-time budget tracking, and in-store navigation. The system combines a tablet-based interface, backend services, AI-assisted recommendations, and smart-cart hardware to provide shoppers with useful information while they shop.",

    technologies: [
      "Flask",
      "Firebase",
      "Gemini API",
      "OpenFoodFacts API",
      "Android",
      "Arduino",
    ],

    problem:
      "Existing smart-cart technologies can improve shopping convenience, but previous implementations in the Philippine setting encountered issues with adoption, reliability, and alignment with shopper needs. The project identified three key gaps: limited support for healthier purchasing decisions, the absence of real-time budget tracking, and the lack of integrated in-store navigation.",

    solution:
      "KA-GABAI was designed as a low-cost AI-powered smart grocery cart prototype that brings health guidance, budgeting, and navigation into a single shopping experience. After a shopper scans a product, the system retrieves product and nutritional information, provides nutritional feedback and healthier alternatives, tracks the shopper's running total against a set budget, and supports product location through a simplified indoor store map.",

    role:
      "I worked primarily on the backend and AI recommendation logic. My main responsibility was the product recommendation flow after a shopper scanned a product. I worked on processing the scanned product data, evaluating possible alternatives, and generating healthier product recommendations that could be returned through the backend and displayed on the tablet interface. I also contributed to the integration between the application, backend APIs, and AI-related services.",

    highlights: [
      "Implemented backend logic for generating healthier product alternatives after a product was scanned.",
      "Processed product and nutritional information used by the recommendation workflow.",
      "Integrated backend APIs with AI and external product-data services.",
      "Supported nutritional guidance designed to help shoppers compare products and make healthier choices.",
      "The overall system included real-time budget tracking with spending alerts.",
      "The overall system included simplified in-store navigation for locating grocery items.",
    ],

    recognition: [
      "Bronze Award — Startup QC Squad 3, 2026",
      "Nominated for Best Research during academic research evaluation",
    ],

    flowTitle: "Recommendation Flow",

    flowDescription:
      "My main contribution focused on the backend recommendation process that begins after a shopper scans a grocery product.",

    flow: [
      {
        title: "Product Scan",
        description:
          "A grocery product is scanned through the smart-cart interface.",
      },
      {
        title: "Product Data",
        description:
          "Product and nutritional information for the scanned item is retrieved for processing.",
      },
      {
        title: "Backend Processing",
        description:
          "The Flask backend processes the product information and prepares it for the recommendation workflow.",
      },
      {
        title: "AI Recommendation",
        description:
          "The recommendation logic evaluates possible alternatives using product information and nutritional quality.",
      },
      {
        title: "Healthier Alternatives",
        description:
          "Recommended alternatives are returned to the application for the shopper to review.",
      },
    ],

    featured: true,
  },

  {
    slug: "deped-ems",
    title: "DepEd NEU Region III Event Management System",
    shortTitle: "DepEd EMS",
    category: "Full-Stack Web Application",
    year: "2026",
    theme: "events",

    description:
      "A full-stack event management platform supporting event scheduling, venue information, guest registration, payment tracking, and administrative monitoring.",

    longDescription:
      "The DepEd NEU Region III Event Management System was developed during my Software Developer internship at YouCode Technologies Corporation. The platform was designed to centralize several event-related workflows, including event scheduling, venue information, guest registration, payment tracking, and administrative monitoring. I contributed to both frontend and backend development while working with Vue.js, Laravel REST APIs, JavaScript, and Axios.",

    technologies: [
      "Vue.js",
      "Laravel",
      "JavaScript",
      "Axios",
      "REST API",
    ],

    problem:
      "Managing events involves several connected processes such as publishing event details, communicating the venue, organizing schedules, registering guests, monitoring payments, and giving administrators visibility over event activity. When these responsibilities are handled separately, users may have difficulty finding important information while administrators have to manage multiple parts of the event workflow independently. The project required a centralized web application that could make event information easier to access while giving administrators the tools needed to manage registrations, schedules, payments, and event-related records in one system.",

    solution:
      "The team developed a centralized event management platform using Vue.js for the frontend and Laravel REST APIs for backend functionality. The system organized event information, registration workflows, payment-related records, and administrative monitoring within a single application. To improve the user experience, venue information was supported by map integration so users could better understand where an event would take place. A calendar-based interface was also implemented to make scheduled events easier to view and understand. The frontend communicated with the Laravel backend through API requests using Axios, allowing event information and related records to be managed dynamically throughout the application.",

    role:
      "I worked on the project as a Software Developer Intern at YouCode Technologies Corporation and contributed to both implementation and maintenance of the system. My work included developing and updating frontend functionality, integrating the Vue.js interface with Laravel REST APIs, debugging application issues, testing and validating modules, and supporting feature updates. I specifically implemented map integration to provide users with a clearer view of event venues and developed calendar functionality for displaying scheduled events. I also worked with the development team through Git and an Agile/Kanban workflow, participating in bug fixes, testing, code-related updates, and ongoing system maintenance.",

    highlights: [
      "Implemented map integration so users could better view and understand event venue locations.",
      "Implemented calendar functionality for displaying and organizing scheduled events.",
      "Supported development of event details and guest registration workflows.",
      "Debugged, tested, and validated application modules.",
      "Contributed to bug fixes, feature updates, code reviews, and ongoing system maintenance.",
      "Collaborated with other developers using Git and an Agile/Kanban development workflow.",
    ],

    flowTitle: "Event Management Flow",

    flowDescription:
      "The platform brings together scheduling, venue information, registration, and administrative monitoring within a centralized event workflow.",

    flow: [
      {
        title: "Event Details",
        description:
          "Event information is created and made available through the platform.",
      },
      {
        title: "Schedule",
        description:
          "Calendar functionality helps users view upcoming and scheduled events.",
      },
      {
        title: "Venue",
        description:
          "Map integration provides users with a clearer view of the event location.",
      },
      {
        title: "Registration",
        description:
          "Guest registration information is handled as part of the event workflow.",
      },
      {
        title: "Monitoring",
        description:
          "Administrative functionality provides visibility into event activity and related records.",
      },
    ],

    featured: true,
  },

  {

    slug: "kanban-task-board",
    title: "Kanban Task Board",
    shortTitle: "Kanban Task Board",
    category: "Full-Stack Productivity Application",
    year: "2026",
    theme: "workflow",

    description:
      "A full-stack task management platform for organizing issues by priority and tracking their progress through a Kanban workflow.",

    longDescription:
      "The Kanban Task Board is a full-stack productivity application designed to help users organize tasks based on urgency and track their progress through different stages of work. Tasks can be assigned priority levels such as High, Medium, and Low, while the Kanban workflow provides a clear view of whether an issue is still in the Backlog, ready in To Do, actively being worked on in In Progress, or already completed in Done. The application combines a React frontend with Django REST Framework, PostgreSQL, and GitHub OAuth authentication.",

    technologies: [
      "React",
      "Django REST Framework",
      "PostgreSQL",
      "GitHub OAuth",
    ],

    problem:
      "When multiple tasks or issues are being handled at the same time, it can become difficult to determine which items need immediate attention and which ones can be addressed later. A simple task list may show what needs to be done, but it does not always communicate urgency or the current stage of each task clearly. This makes it harder to prioritize work and monitor progress. The project focused on creating a structured task-management workflow where users could quickly identify the priority of an issue and understand whether it was still in the Backlog, ready to be worked on, currently in progress, or already completed.",

    solution:
      "The application uses a Kanban-style workflow to organize tasks into four stages: Backlog, To Do, In Progress, and Done. Each issue can also be assigned a High, Medium, or Low priority level, helping users determine which tasks should receive attention first. By combining workflow status and priority in the same interface, users can understand both the urgency and progress of their work at a glance. React provides the interactive frontend, Django REST Framework handles backend APIs, PostgreSQL stores application data, and GitHub OAuth provides authentication.",

    role:
      "I worked on the full-stack implementation of the Kanban Task Board, covering both frontend functionality and backend development. I implemented the task workflow that organizes issues into Backlog, To Do, In Progress, and Done, as well as the priority system that classifies tasks as High, Medium, or Low. I also worked on task-management functionality, integration between the React frontend and Django REST Framework APIs, persistent data storage through PostgreSQL, and GitHub OAuth authentication. My focus was to make it easy for users to understand what needed attention first and where each task currently stood in the development workflow.",

    highlights: [
      "Implemented task prioritization using High, Medium, and Low priority levels.",
      "Built a Kanban workflow using Backlog, To Do, In Progress, and Done stages.",
      "Allowed users to track issues from initial backlog through completion.",
      "Built task-management functionality for creating, updating, and managing issues.",
      "Developed REST APIs using Django REST Framework.",
      "Used PostgreSQL for persistent task and workflow data.",
      "Implemented GitHub OAuth authentication.",
      "Integrated the React frontend with backend APIs for dynamic task and workflow updates.",
    ],

    flowTitle: "Task Workflow",

    flowDescription:
      "Priority communicates how urgently an issue should be handled, while the Kanban status shows where the task currently stands in the workflow.",

    flow: [
      {
        title: "Create Task",
        description:
          "A new issue or task is created and added to the board.",
      },
      {
        title: "Set Priority",
        description:
          "The task is assigned a High, Medium, or Low priority level.",
      },
      {
        title: "Backlog",
        description:
          "New or planned tasks begin in the backlog before they are prepared for work.",
      },
      {
        title: "To Do",
        description:
          "Tasks that are ready to be worked on move into the To Do stage.",
      },
      {
        title: "In Progress",
        description:
          "Tasks currently being worked on are moved into In Progress.",
      },
      {
        title: "Done",
        description:
          "Completed tasks move into the final Done stage.",
      },
    ],

    featured: true,
  },

  {

    slug: "budget-tracker",
    title: "Budget Tracker",
    shortTitle: "Budget Tracker",
    category: "Full-Stack Finance Application",
    year: "2026",
    theme: "finance",

    description:
      "A full-stack personal finance application for recording income and expenses, monitoring balances, and understanding spending through interactive dashboards.",

    longDescription:
      "Budget Tracker is a full-stack personal finance application designed to make everyday financial activity easier to record and understand. Instead of manually calculating income, expenses, and remaining balances, users can manage their transactions through a centralized interface while the application automatically updates financial totals. Interactive charts provide a visual overview of financial activity, helping users understand how their income and expenses affect their current balance.",

    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Chart.js",
    ],

    problem:
      "Keeping track of personal finances can become difficult when income and expenses are recorded across different places or calculated manually. Users may know that they are spending money, but without a centralized record it becomes harder to see how much has been earned, how much has been spent, and what balance remains. Manually reviewing individual transactions also makes it difficult to quickly understand overall spending patterns. The project focused on creating a simpler way for users to record their financial activity while automatically maintaining updated totals and presenting the information in a more understandable visual format.",

    solution:
      "Budget Tracker provides a centralized application where users can record and manage income and expense transactions. The application automatically recalculates financial totals whenever transactions are added, updated, or removed, allowing users to see their current financial position without performing calculations manually. React is used to provide an interactive frontend, while Node.js handles the backend and application logic. MongoDB provides persistent storage for transaction data, and Chart.js transforms the recorded financial information into visual dashboards so users can more easily understand the relationship between their income, expenses, and remaining balance.",

    role:
      "I worked on the full-stack development of the Budget Tracker, including the user interface, backend functionality, database integration, transaction management, financial calculations, and data visualization. I implemented the functionality for creating, viewing, updating, and deleting income and expense records and connected the frontend to the backend so changes to transactions were reflected throughout the application. I also worked with MongoDB to persist financial records and used Chart.js to visualize the stored data. My focus was to make financial information easier to manage by automatically updating totals and presenting important values through a straightforward dashboard.",

    highlights: [
      "Implemented income and expense tracking within a centralized financial dashboard.",
      "Built CRUD functionality for creating, viewing, updating, and deleting financial transactions.",
      "Implemented automatic calculations for income, expenses, and remaining balance.",
      "Connected the frontend and backend so financial totals update as transaction data changes.",
      "Used MongoDB for persistent storage of transaction records.",
      "Created interactive financial visualizations using Chart.js.",
      "Developed the application across both frontend and backend functionality.",
    ],

     flowTitle: "Financial Data Flow",

    flowDescription:
      "Transaction data moves through the application so financial totals and visual summaries remain updated as users manage their records.",

    flow: [
      {
        title: "Transaction",
        description:
          "The user records an income or expense transaction.",
      },
      {
        title: "Store Data",
        description:
          "Transaction information is persisted in MongoDB.",
      },
      {
        title: "Calculate",
        description:
          "The application recalculates income, expenses, and remaining balance.",
      },
      {
        title: "Update Dashboard",
        description:
          "The latest financial values are reflected throughout the user interface.",
      },
      {
        title: "Visualize",
        description:
          "Chart.js presents the stored financial information through visual summaries.",
      },
    ],

    featured: false,
  },
];

export const featuredProjects = projects.filter(
  (project) => project.featured
);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}