export default function initSmoothScroll() {
  const linksInternos = document.querySelectorAll(
    "[data-menu='smooth'] a[href^='#']",
  );

   function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

  if (linksInternos.length) {
   

    linksInternos.forEach((element) => {
      element.addEventListener("click", scrollToSection);
    });
  }
}
