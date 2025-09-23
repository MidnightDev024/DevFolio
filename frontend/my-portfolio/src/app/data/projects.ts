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
        name: "Image Gallery",
        image: "/TextUtils-gallery.png",
        annotation: "Implemented an infinite scroll gallery with a credit system for API usage.",
        position: { x: -40, y: 10 }
      },
      {
        id: "c1-form",
        name: "Prompt Form",
        image: "/TextUtils-form.png",
        annotation: "Connected the form to the Clipdrop API for AI image generation.",
        position: { x: 60, y: -60 }
      },
    ]
  },
  {
    id: 2,
    title: "NewsHatch - A app for latest news",
    description: "A news app that provides the latest news articles from various sources.",
    mainImage: "/NewsHatch.png",
    components: [
      {
        id: "c1-navbar",
        name: "Navbar",
        image: "/NewsHatch-navbar.png",
        annotation: "Designed a clean, responsive navigation with user authentication status.",
        position: { x: -80, y: -100 },
        size: 'large'
      },
      {
        id: "c1-gallery",
        name: "Image Gallery",
        image: "/NewsHatch-gallery.png",
        annotation: "Implemented an infinite scroll gallery with a credit system for API usage.",
        position: { x: -40, y: 10 }
      },
      {
        id: "c1-form",
        name: "Prompt Form",
        image: "/NewsHatch-form.png",
        annotation: "Connected the form to the Clipdrop API for AI image generation.",
        position: { x: 60, y: -60 }
      },
    ]
  },
  // ... update positions for your other projects as well
];