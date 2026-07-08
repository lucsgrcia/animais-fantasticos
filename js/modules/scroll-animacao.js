export default function initAnimationScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

  if (sections.length) {
    const halfWindow = window.innerHeight * 0.6;

    function animationScroll() {
      sections.forEach((element) => {
        const sectionTop = element.getBoundingClientRect().top - halfWindow < 0;
        if (sectionTop) {
          element.classList.add("ativo");
        } else if (element.classList.contains("ativo")) {
          element.classList.remove("ativo");
        }
      });
    }

    animationScroll();

    window.addEventListener("scroll", animationScroll);
  }
}
