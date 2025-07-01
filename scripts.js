document.addEventListener("DOMContentLoaded", function () {
  const thingsCard = document.getElementById("things-register");
  const wrapper = thingsCard.closest(".project-wrapper");

  thingsCard.style.cursor = "pointer";
  thingsCard.addEventListener("click", function (e) {
    e.stopPropagation();
    wrapper.classList.toggle("show-buttons");
  });

  // Optional: Hide buttons if click outside
  document.addEventListener("click", function (e) {
    if (!wrapper.contains(e.target)) {
      wrapper.classList.remove("show-buttons");
    }
  });
});
