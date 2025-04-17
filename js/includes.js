function includeHTML(callback) {
  const elements = document.querySelectorAll('[data-include]');
  let includesRemaining = elements.length;

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
      } finally {
        includesRemaining--;
        if (includesRemaining === 0 && typeof callback === "function") {
          callback(); // Once all includes are done, run callback
        }
      }
    } else {
      includesRemaining--;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  includeHTML(() => {
    // When all includes are finished, load the navbar scroll animation script
    const script = document.createElement('script');
    script.src = '/js/navbar-animation.js';
    document.body.appendChild(script);
  });
});
