// Función para expandir y centrar la sección
function expandSection(section) {
  // Si la sección está expandida, la contraemos
  if (section.classList.contains("expanded")) {
    section.classList.remove("expanded");
  } else {
    // Si está contraída, la expandimos y mostramos más información
    document
      .querySelectorAll(".expandable")
      .forEach((sec) => sec.classList.remove("expanded")); // Cerrar otras secciones
    section.classList.add("expanded");

    // Centrar la sección expandida en la pantalla, asegurando que el inicio quede visible
    section.scrollIntoView({
      behavior: "smooth",
      block: "start", // Alinea la parte superior de la sección con la parte superior del viewport
    });
  }
}

// Asignar el evento de clic a todas las secciones
document.querySelectorAll(".expandable").forEach((section) => {
  section.addEventListener("click", function () {
    expandSection(section);
  });
});
