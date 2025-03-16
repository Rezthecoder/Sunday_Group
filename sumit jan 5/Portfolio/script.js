const htmlElement = document.documentElement;
    const themeToggler = document.getElementById("theme-toggler");
    const themeIcon = document.getElementById("theme-icon");

    themeToggler.addEventListener("click", () => {
      const currentTheme = htmlElement.getAttribute("data-bs-theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";
      htmlElement.setAttribute("data-bs-theme", newTheme);

      // Change the icon based on the theme
      if (newTheme === "dark") {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
      } else {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
      }
    });