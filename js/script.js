tailwind.config = {
  theme: {
    extend: {
      colors: {
        customblue: "#2144a3",
        darkbg: "#eee",
        darkcard: "#e0e0e0",
        darktext: "#232323",
      },
    },
  },
};

// Optional: smooth scroll polyfill for older browsers
document.querySelectorAll("a.scroll-smooth").forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (btn && menu) {
    btn.addEventListener("click", function () {
      menu.classList.toggle("hidden");
    });
    // Optional: close menu on link click
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.add("hidden");
      });
    });
  }
});