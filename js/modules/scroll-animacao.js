export default function initAnimationScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

  function animationScroll() {
    const halfWindow = window.innerHeight * 0.6;

    sections.forEach((element) => {
      const sectionTop = element.getBoundingClientRect().top - halfWindow < 0;
      if (sectionTop) {
        element.classList.add("ativo");
      } else if (element.classList.contains("ativo")) {
        element.classList.remove("ativo");
      }
    });
  }

  if (sections.length) {
    animationScroll();

    window.addEventListener("scroll", animationScroll);
  }
}
