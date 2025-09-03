const savedLanguage = localStorage.getItem("language");

window.PortfolioState = {
    language: savedLanguage === "ru" || savedLanguage === "en" ? savedLanguage : "ru",
    setLanguage(lang) {
        if (lang !== "ru" && lang !== "en") return;
        this.language = lang;
        localStorage.setItem("language", lang);
        window.PortfolioRender.updateAll();
    },
};
