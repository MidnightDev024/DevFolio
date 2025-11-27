const projects = [
  {
    id: 1,
    title: "TextUtils - A text Manipulation App",
    description: "A text manipulation app that provides various utilities for editing and transforming text.",
    mainImage: "/TextUtils.png",
    liveLink: "https://text-utils-kappa-ten.vercel.app/",
    previewLink: "https://text-utils-kappa-ten.vercel.app/",
    components: [
      {
        id: "c1-navbar",
        name: "Navbar",
        image: "/textutilsNavBar.png",
        annotation: "Designed a clean, responsive navigation with user authentication status.",
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
      },
      {
        id: "c1-form",
        name: "About Section",
        image: "/textutilsAbout.png",
        annotation: "Provides information about the app and its features.",
        position: { x: 60, y: -60 },
        mobilePosition: { x: 30, y: 80 },
      },
    ]
  },
  {
    id: 2,
    title: "AuraChat - Connect Your Frequency",
    description: "A real-time chat application that allows users to connect and communicate seamlessly. Allow Users to Connect with their loved ones.",
    mainImage: "/AuraChat_MainPage.png",
    liveLink: "https://aura-chat-ten.vercel.app",
    previewLink: "https://aura-chat-ten.vercel.app",
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



