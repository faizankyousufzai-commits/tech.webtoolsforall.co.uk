(function () {
  var toggle = document.getElementById("menuToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    });
    links.addEventListener("click", function (event) {
      if (event.target && event.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }
  var year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
  var form = document.getElementById("contactForm");
  var note = document.getElementById("formNote");
  if (form && note) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      note.style.display = "block";
      note.textContent = "Thanks. This form does not send a message on its own. Please email the details to faizan.kyousufzai@gmail.com and I will read it there.";
    });
  }
})();
