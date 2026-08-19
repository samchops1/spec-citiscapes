(function () {
  var header = document.querySelector(".site-header");
  var btn = document.querySelector(".menu-toggle");
  if (header && btn) {
    btn.addEventListener("click", function () {
      var open = header.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    header.querySelectorAll("nav a").forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        btn.setAttribute("aria-label", "Open menu");
      });
    });
  }

  document.querySelectorAll("[data-quote-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var get = function (name) {
        var el = form.elements.namedItem(name);
        return el && el.value ? el.value.trim() : "";
      };
      var lines = [
        "Name: " + get("name"),
        "Phone: " + get("phone"),
        "Email: " + get("email"),
        "",
        get("message")
      ];
      var subject = encodeURIComponent("Build My Fence!");
      var body = encodeURIComponent(lines.join("\n"));
      window.location.href = "mailto:Bill@CitiScapesCO.com?subject=" + subject + "&body=" + body;
    });
  });
})();
