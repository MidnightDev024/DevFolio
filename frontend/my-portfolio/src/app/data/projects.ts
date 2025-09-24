// Inside src/data/projects.ts...

export const projects = [
  {
    id: 1,
    title: "TextUtils - A text Manipulation App",
    description: "A text manipulation app that provides various utilities for editing and transforming text.",
    mainImage: "/TextUtils.png",
    components: [
      {
        id: "c1-navbar",
        name: "Navbar",
        image: "/textutilsNavBar.png",
        annotation: "Designed a clean, responsive navigation with user authentication status.",
        position: { x: -80, y: -100 },
        size: 'large'
      },
      {
        id: "c1-gallery",
        name: "Main Section",
        image: "/textutilsHero.png",
        annotation: "Easy to use text manipulation tools with real-time preview.",
        position: { x: -40, y: 10 }
      },
      {
        id: "c1-form",
        name: "About Section",
        image: "/textutilsAbout.png",
        annotation: "Provides information about the app and its features.",
        position: { x: 60, y: -60 }
      },
    ]
  },
  {
    id: 2,
    title: "NewsHatch - A app for latest news",
    description: "A news app that provides the latest news articles from various sources. created with the concept of fetching data from an API.",
    mainImage: "/NewsHatch.png",
    components: [
      {
        id: "c1-navbar",
        name: "Navbar",
        image: "/newhatchNavBar.png",
        annotation: "Designed a clean, responsive navigation with user authentication status.",
        position: { x: -80, y: -100 },
        size: 'large'
      },
      {
        id: "c1-gallery",
        name: "Main Section",
        image: "/newhatchHero.png",
        annotation: "Displays the latest news articles with a clean and modern layout.",
        position: { x: -40, y: 10 }
      },
      {
        id: "c1-form",
        name: "About Section",
        image: "/newhatchBotomLook.png",
        annotation: "Further look at APP features. Include Previous and Next buttons for better navigation.",
        position: { x: 60, y: -60 }
      },
    ]
  },
  // ... update positions for your other projects as well
];