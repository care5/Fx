
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector("[data-menu]");
  const nav = document.querySelector(".nav");
  if (menu && nav) menu.addEventListener("click", () => nav.classList.toggle("open"));

  document.querySelectorAll("[data-tab]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-tab]").forEach(x => x.classList.remove("active"));
      document.querySelectorAll("[data-panel]").forEach(x => x.classList.remove("active"));
      btn.classList.add("active");
      const panel = document.querySelector(`[data-panel="${btn.dataset.tab}"]`);
      if (panel) panel.classList.add("active");
    });
  });

  document.querySelectorAll("[data-demo-form]").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const msg = form.querySelector("[data-form-message]");
      if (msg) msg.textContent = "Demo mode: your details were captured locally. Connect your backend to enable live accounts.";
    });
  });

  document.querySelectorAll("[data-save]").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.textContent = "Saved ✓";
      setTimeout(() => btn.textContent = "Save Strategy", 1400);
    });
  });

  const status = document.querySelector("[data-live-status]");
  if (status) {
    status.textContent = "● Live";
    status.classList.add("up");
  }
});
