module.exports = {
   darkMode: "class",
   content: ["./public/index.html"],
   theme: {
      screens: {
         sm: "480px",
         // => @media (min-width: 480px) { ... }

         md: "768px",
         // => @media (min-width: 768px) { ... }

         lg: "1280px",
         // => @media (min-width: 1024px) { ... }

         xl: "1280px",
         // => @media (min-width: 1280px) { ... }
      },
      fontFamily: {
         main: ["Rosario", "sans-serif"],
      },
      extend: {
         backgroundImage: {
            "header-image": "url('./img/bgImage.png')",
            "second-image": "url('./img/bgImage3.png')",
            "third-image": "url('./img/bgImage2.png')",
         },
         colors: {
            "text-green": "#58baa7",
            "bg-green": "#16a085",
            "bg-white": "#f5f6f7",
            "icon-clr": "#cccfcc",
         },
      },
      container: {
         center: true,
         padding: "1rem",
         screen: {
            sm: "480px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1280px",
         },
      },
   },
   plugins: [],
};
