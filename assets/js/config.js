window.PortfolioConfig = {
    data: {
        user: {
            name: { ru: "Тимофей Ходотаев", en: "Timofey Khodotaev" },
            about: {
                ru: "21 год. PHP‑разработчик с 3‑летним опытом. Бакалавр IT (ПГНИУ). Работаю с чистым PHP и Laravel — создаю надёжные API и сервисы. Уверенно использую Node.js/Express, знаю React. Сейчас углубляюсь в Go и ищу возможности применять его в продакшене.",
                en: "21 years old. PHP developer with 3 years of experience. BSc in IT (PSU). I build reliable APIs and services with vanilla PHP and Laravel. Comfortable with Node.js/Express and use React when it makes sense. Currently diving into Go and looking for opportunities to use it in production."
            },
            avatarUrl: "assets/img/avatar.jpg",
        },
        experience: [
            {
                position: { ru: "Web разработчик", en: "Web developer" },
                company: { ru: "AlternativaGames", en: "AlternativaGames" },
                period: { ru: "Октябрь 2024 - настоящее время", en: "October 2024 - Present" },
                description: {
                    ru: "Разработка и поддержка высоконагруженных веб-приложений на Laravel и Node.js с использованием вебсокетов и брокеров сообщений. Разработка внутриигровых игр и ивентов. Работа с CI/CD и инфраструктурой Kubernetes.",
                    en: "Development and maintenance of high-load web applications on Laravel and Node.js using WebSockets and message brokers. Development of in-game games and events. Working with CI/CD and Kubernetes infrastructure.",
                },
                stack: ["PHP", "Laravel 10+", "Javascript", "React", "Node.js", "Express", "Kubernetes", "Docker", "MongoDB", "WebSockets", "RabbitMQ"],
            },
            {
                position: { ru: "Laravel разработчик", en: "Laravel Developer" },
                company: { ru: "ФЛАГ", en: "ФЛАГ" },
                period: { ru: "Июль 2023 - Июнь 2024", en: "July 2023 - June 2024" },
                description: {
                    ru: "Разрабатывал API на Laravel и админ‑панели на Filament и Laravel Orchid. Внедрил Meilisearch, что заметно ускорило поиск. Настроил аутентификацию и авторизацию через Laravel Sanctum, покрывал функционал тестами (Pest/PHPUnit), реализовал уведомления и фоновые задачи. Интегрировал внешние API с кешированием в Redis, применял шаблоны проектирования и использовал Docker/docker‑compose для окружения.",
                    en: "Built Laravel APIs and admin panels using Filament and Laravel Orchid. Introduced Meilisearch, significantly speeding up search. Implemented authentication and authorization with Laravel Sanctum, wrote tests (Pest/PHPUnit), and delivered notifications and background jobs. Integrated external APIs with Redis caching, applied design patterns, and used Docker/docker-compose for the environment."
                },
                stack: ["PHP", "Laravel", "Linux", "Docker", "MySQL", "Nginx", "Redis", "Meilisearch"],
            },
            {
                position: { ru: "PHP разработчик", en: "PHP Developer" },
                company: { ru: "NTI TEAM", en: "NTI TEAM" },
                period: { ru: "Январь 2023 - Март 2023", en: "January 2023 - March 2023" },
                description: {
                    ru: "Создавал админ‑панели (CRUD) для управления контентом. Разрабатывал парсеры сайтов и интеграции. Работал с MySQL: проектирование схем и оптимизация запросов.",
                    en: "Built admin panels (CRUD) for content management. Developed web scrapers and integrations. Worked with MySQL: schema design and query optimization."
                },
                stack: ["PHP", "MySQL", "Bitrix", "WordPress"],
            },
        ],
        contacts: [
            { name: "GitHub", icon: "github", url: "https://github.com/gxldmane", text: { ru: "Мой GitHub", en: "My GitHub" } },
            { name: "Telegram", icon: "telegram", url: "https://t.me/gxldmane", text: { ru: "Мой Telegram", en: "My Telegram" } },
        ],
    },
    uiTexts: {
        ru: { about: "Обо мне", experience: "Опыт работы", contacts: "Контакты" },
        en: { about: "About me", experience: "Work experience", contacts: "Contacts" },
    },
    icons: {
        github: { type: "img", src: "assets/img/github.svg" },
        telegram: { type: "img", src: "assets/img/telegram.svg" },
        email: "✉️",
        linkedin: "🔗",
        default: "📞"
    },
};
