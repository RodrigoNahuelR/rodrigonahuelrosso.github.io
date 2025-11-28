// scripts.js - accessible toggle for "ThingsRegister" buttons and basic behavior
document.addEventListener("DOMContentLoaded", () => {
  // Attach toggle behavior to wrappers declared with data-toggle="buttons"
  const toggleWrappers = document.querySelectorAll(
    '.project-wrapper[data-toggle="buttons"]'
  );

  toggleWrappers.forEach((wrapper) => {
    const project = wrapper.querySelector(".project");
    const buttonGroup = wrapper.querySelector(".button-group");

    // ensure aria state initial
    if (buttonGroup) buttonGroup.setAttribute("aria-hidden", "true");

    const toggle = (ev) => {
      // if click is on a link, let the link work without toggling
      if (ev && ev.target.closest("a")) return;
      wrapper.classList.toggle("show-buttons");
      const expanded = wrapper.classList.contains("show-buttons");
      if (buttonGroup)
        buttonGroup.setAttribute("aria-hidden", expanded ? "false" : "true");
    };

    // click on wrapper toggles (but not when clicking a link)
    wrapper.addEventListener("click", toggle);

    // keyboard: Enter or Space on the project toggles
    project.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle(e);
      }
    });

    // close when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !wrapper.contains(e.target) &&
        wrapper.classList.contains("show-buttons")
      ) {
        wrapper.classList.remove("show-buttons");
        if (buttonGroup) buttonGroup.setAttribute("aria-hidden", "true");
      }
    });

    // close with Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && wrapper.classList.contains("show-buttons")) {
        wrapper.classList.remove("show-buttons");
        if (buttonGroup) buttonGroup.setAttribute("aria-hidden", "true");
        project.focus();
      }
    });
  });
});
