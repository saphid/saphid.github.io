(() => {
  const key = "theme-preference";
  const root = document.documentElement;
  const stored = localStorage.getItem(key);
  const preferred = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  const theme = stored === "light" || stored === "dark" ? stored : preferred;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;

  window.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("[data-theme-toggle]");
    if (!button) return;
    const sync = () => { button.textContent = root.dataset.theme === "dark" ? "light" : "dark"; };
    sync();
    button.addEventListener("click", () => {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      root.style.colorScheme = next;
      localStorage.setItem(key, next);
      sync();
    });
  });
})();
