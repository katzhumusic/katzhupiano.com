function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');
  elements.forEach(async (el) => {
    const file = el.getAttribute('data-include');
    if (file) {
      try {
        const res = await fetch(file);
        if (res.ok) {
          const html = await res.text();
          el.innerHTML = html;
        } else {
          el.innerHTML = "[Content not found]";
        }
      } catch (e) {
        el.innerHTML = "[Error loading content]";
        console.error("Error including", file, e);
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", includeHTML);