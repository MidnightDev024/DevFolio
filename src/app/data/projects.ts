const projects = [
  {
    id: 1,
    title: "EvalAI - AI Powered Mock Interview Platform",
    description: "EvalAI is an AI-powered mock interview platform designed to help job seekers prepare for technical, Management, HR Round interviews.",
    mainImage: "/EvalAI_MainPage.png",
    liveLink: "https://ai-interview-agent-client-bgax.onrender.com/",
    components: [
      {
        id: "c1-navbar",
        name: "SignUp",
        image: "/EvalAI_SignUp.png",
        annotation: "Authentication and user login interface.",
        position: { x: -150, y: -110 },
        mobilePosition: { "x": -110, "y": -190 },
        size: 'medium'
      },
      {
        id: "c1-gallery",
        name: "interview Interface",
        image: "/EvalAI_Interview.png",
        annotation: "Displays the interview interface with real-time question updates and AI-generated feedback.",
        "position": { "x": -100, "y": 20 },
        "mobilePosition": { "x": -5, "y": -120 },
      },
      {
        id: "c1-History",
        name: "history section",
        image: "/EvalAI_History.png",
        annotation: "View past interviews List.",
        "position": { "x": -40, "y": -70 },
        "mobilePosition": { "x": -105, "y": -55 },
      },
      {
        id: "c1-reports",
        name: "reports section",
        image: "/EvalAI_PerformanceAnalytics.png",
        annotation: "View detailed reports and analytics for past interviews.",
        "position": { "x": 50, "y": -125 },
        "mobilePosition": { "x": 0, "y": 30 }
      },
      {
        id: "c1-credits",
        name: "credits section",
        image: "/EvalAI_credits.png",
        annotation: "Buy credits to unlock more features and access premium content.",
        "position": { "x": 40, "y": 25 },
        "mobilePosition": { "x": -110, "y": 70 }
      },
    ]
  },{
    id: 2,
    title: "TextUtils - A text Manipulation App",
    description: "A text manipulation app that provides various utilities for editing and transforming text. Dark mode protects the eyes of the user.", //convert eye protect line in another line
    mainImage: "/TextUtils.png",
    liveLink: "https://text-utils-kappa-ten.vercel.app/",
    components: [
      {
        id: "c1-navbar",
        name: "Navbar",
        image: "/textutilsNavBar.png",
        annotation: "Designed a clean, responsive navigation with Dark Mode support.",
        position: { x: -85, y: -100 },
        mobilePosition: { x: 0, y: -50 },
        size: 'Large'
      },
      {
        id: "c1-gallery",
        name: "Main Section",
        image: "/textutilsHero.png",
        annotation: "Easy to use text manipulation tools with real-time preview.",
        position: { x: -40, y: 10 },
        mobilePosition: { x: -30, y: 0 },
        size: 'medium'
      },
      {
        id: "c1-form",
        name: "About Section",
        image: "/textutilsAbout.png",
        annotation: "Provides information about the app and its features.",
        position: { x: 60, y: -60 },
        mobilePosition: { x: 30, y: 80 },
        size: 'medium'
      },
    ]
  },
  {
    id: 3,
    title: "AuraChat - Connect Your Frequency",
    description: "A real-time chat application that allows users to connect and communicate seamlessly. Allow Users to Connect with their loved ones.",
    mainImage: "/AuraChat_MainPage.png",
    liveLink: "https://aura-chat-ten.vercel.app",
    components: [
      {
        id: "c1-navbar",
        name: "SignUp",
        image: "/AuraChat_SignUp.png",
        annotation: "Authentication and user login interface.",
        position: { x: -85, y: -100 },
        mobilePosition: { x: 0, y: -80 },
        size: 'medium'
      },
      {
        id: "c1-gallery",
        name: "Chat Interface",
        image: "/AuraChat_HomePage.png",
        annotation: "Displays the chat interface with real-time message updates.",
        position: { x: -40, y: 10 },
        mobilePosition: { x: -30, y: 0 },
      },
      {
        id: "c1-form",
        name: "About Section",
        image: "/AuraChat_ProfilePage.png",
        annotation: "User profile management and settings.",
        position: { x: 60, y: -60 },
        mobilePosition: { x: 30, y: 80 },
      },
    ]
  },
];

// Add this line at the very bottom to make it the default export
export default projects;



