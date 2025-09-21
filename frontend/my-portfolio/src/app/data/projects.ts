export const projects = [
  {
    id: 1,
    title: "AI Image Generation App",
    description: "A full-stack MERN app that leverages AI for text-to-image generation.",
    mainImage: "/project-1-main.png", // The image for the main grid
    
    // New: An array of the project's key components for deconstruction
    components: [
      {
        id: "c1-navbar",
        name: "Navbar",
        image: "/project-1-navbar.png", // Image of just the navbar
        annotation: "Designed a clean, responsive navigation with user authentication status.",
        position: { x: -80, y: -60 } // Where it will fly to (in %)
      },
      {
        id: "c1-gallery",
        name: "Image Gallery",
        image: "/project-1-gallery.png",
        annotation: "Implemented an infinite scroll gallery with a credit system for API usage.",
        position: { x: 0, y: 30 }
      },
      {
        id: "c1-form",
        name: "Prompt Form",
        image: "/project-1-form.png",
        annotation: "Connected the form to the Clipdrop API for AI image generation.",
        position: { x: 80, y: -40 }
      },
    ]
  },
  // --- Add your second project here in the same format ---
  {
    id: 2,
    title: "PG and Rental Website",
    description: "A freelance project for a PG and rental booking platform.",
    mainImage: "/project-2-main.png",
    components: [
      // Define components for your second project here...
      
      {
        id: "c1-navbar",
        name: "Navbar",
        image: "/project-1-navbar.png", // Image of just the navbar
        annotation: "Designed a clean, responsive navigation with user authentication status.",
        position: { x: -80, y: -60 } // Where it will fly to (in %)
      },
      {
        id: "c1-gallery",
        name: "Image Gallery",
        image: "/project-1-gallery.png",
        annotation: "Implemented an infinite scroll gallery with a credit system for API usage.",
        position: { x: 0, y: 30 }
      },
      {
        id: "c1-form",
        name: "Prompt Form",
        image: "/project-1-form.png",
        annotation: "Connected the form to the Clipdrop API for AI image generation.",
        position: { x: 80, y: -40 }
      },
    ]
  }
];