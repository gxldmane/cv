document.documentElement.classList.add("dark");
window.PortfolioRender.updateAll();
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());
