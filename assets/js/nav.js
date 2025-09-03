const navState = window.PortfolioState;

function bindNavLinks(scope = document) {
    scope.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener("click", (e) => {
            const id = a.getAttribute("href");
            const target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
}

const langButtons = Array.from(document.querySelectorAll('[data-role="lang-toggle"], #language-toggle'));
function setLangLabels() {
    const label = navState.language === "ru" ? "EN" : "RU";
    langButtons.forEach((b) => (b.textContent = label));
}
setLangLabels();
langButtons.forEach((btn) =>
    btn.addEventListener("click", () => {
        navState.setLanguage(navState.language === "ru" ? "en" : "ru");
        setLangLabels();
    })
);

bindNavLinks();
