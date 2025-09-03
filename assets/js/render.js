const config = window.PortfolioConfig;
const state = window.PortfolioState;

function getIcon(name) { return config.icons[name] || config.icons.default; }

function renderAbout() {
    const lang = state.language;
    const about = document.getElementById("about-text");
    if (about) about.textContent = config.data.user.about[lang];
    const nameEl = document.getElementById("user-name");
    if (nameEl) {
        const nameConf = config.data.user.name;
        const localized = typeof nameConf === "string" ? nameConf : (nameConf[lang] || nameConf.ru || "");
        nameEl.textContent = localized;
    }
    const avatar = document.getElementById("avatar");
    if (avatar && config.data.user.avatarUrl) {
        avatar.innerHTML = "";
        avatar.style.background = "none";
        const img = document.createElement("img");
        img.src = config.data.user.avatarUrl;
        img.alt = "avatar";
        img.className = "w-28 h-28 rounded-full object-cover";
        avatar.appendChild(img);
    }
}

function renderExperience() {
    const lang = state.language;
    const container = document.getElementById("experience-cards");
    if (!container) return;
    container.innerHTML = "";
    // ensure grid base
    container.className = "grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch";
    config.data.experience.forEach((exp, i) => {
        const card = document.createElement("div");
        card.className = "bg-slate-800/70 backdrop-blur p-6 rounded-xl shadow-md theme-transition ring-1 ring-slate-700 hover:-translate-y-0.5 hover:shadow-2xl hover:ring-emerald-400/40 transition-transform duration-200 animate-in fade-in slide-in-from-bottom-2 flex flex-col h-full min-h-[16rem]";
        card.style.animationDelay = `${i * 80}ms`;
        card.innerHTML = `
            <h3 class="text-xl font-semibold">${exp.position[lang]}</h3>
            <p class="text-lg text-emerald-400">${exp.company[lang]}</p>
            <p class="text-slate-400 mb-4">${exp.period[lang]}</p>
            <p class="mb-4 leading-relaxed break-words">${exp.description[lang]}</p>
            <div class="mt-auto flex flex-wrap gap-2 justify-center md:justify-start pt-2">
                ${exp.stack.map(tech => `<span class=\"bg-slate-700/80 px-3 py-1 rounded-full text-sm text-gray-100 ring-1 ring-slate-600\">${tech}</span>`).join("")}
            </div>
        `;
        container.appendChild(card);
    });
}

function renderIcon(name) {
    const map = window.PortfolioConfig.icons
    const def = map[name] || map.default
    if (typeof def === "string") {
        const span = document.createElement("span")
        span.textContent = def
        return span
    }
    if (def && def.type === "img" && def.src) {
        const img = document.createElement("img")
        img.src = def.src
        img.alt = name
        img.width = 20
        img.height = 20
        img.className = "w-5 h-5"
        return img
    }
    const span = document.createElement("span")
    span.textContent = ""
    return span
}

function renderContacts() {
    const container = document.getElementById("contact-links");
    if (!container) return;
    const lang = state.language;
    container.innerHTML = "";
    window.PortfolioConfig.data.contacts.forEach((item) => {
        const a = document.createElement("a");
        a.href = item.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.className = "flex items-center gap-3 p-3 rounded-lg bg-gray-900/60 ring-1 ring-gray-800 hover:ring-gray-700 theme-transition";
        const icon = renderIcon(item.icon);
        a.appendChild(icon);
        const span = document.createElement("span");
        span.textContent = item.text[lang];
        a.appendChild(span);
        container.appendChild(a);
    });
}

function renderHeadings() {
    const lang = state.language;
    const texts = config.uiTexts[lang];
    Object.keys(texts).forEach((key) => {
        document.querySelectorAll(`[data-i18n="${key}"]`).forEach((el) => {
            el.textContent = texts[key];
        });
    });
}

window.PortfolioRender = {
    updateAll() {
        renderHeadings();
        renderAbout();
        renderExperience();
        renderContacts();
    },
};
