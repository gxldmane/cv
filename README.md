# Portfolio (RU/EN)

## Описание (RU)

Лёгкое одностраничное портфолио на Tailwind (CDN) и чистом JavaScript без сборки. Тёмная тема по умолчанию, локализация RU/EN с сохранением в localStorage, адаптивная верстка.

### Возможности

- Локализация RU/EN (переключатель, запоминается)
- Блоки: Обо мне, Опыт, Контакты
- Аватар и реальные иконки (GitHub/Telegram)
- Плавная прокрутка, анимации появления
- Футер с автогодом, фавикон (inline SVG)

### Структура

```text
index.html
assets/
  css/styles.css
  js/
    config.js   # данные: тексты, опыт, контакты, иконки
    state.js    # состояние приложения (язык)
    render.js   # отрисовка секций
    nav.js      # навигация и переключение языка
    main.js     # инициализация
  img/
    avatar.jpg
    github.svg
    telegram.svg
```

### Как запустить

Вариант 1: просто открыть `index.html` в браузере.

Вариант 2 (локальный сервер, опционально):

- Python 3: `python3 -m http.server 8080`
- Node (serve): `npx serve -l 8080`

Откройте <https://localhost:8080> или <http://127.0.0.1:8080>.

### Настройка

- Имя и «Обо мне»: `assets/js/config.js` → `data.user`
- Аватар: положите файл в `assets/img` и пропишите путь в `avatarUrl`
- Опыт/стек: `data.experience`
- Контакты/иконки: `data.contacts`, `icons`
- Шрифт: задаётся в `styles.css` (Rubik через Google Fonts)

### Примечания по карточкам опыта

Сейчас текст показывается полностью (карточка растёт по содержимому). Если хотите выровнять высоту карточек и обрезать длинные описания:

- Верните ограничение строк (line‑clamp) и скрытие переполнения в `render.js` / `styles.css`.
- Или уменьшите/повышайте минимальную высоту (класс `min-h-[16rem]`).

### Favicon (RU)

Встроен inline SVG в `<head>`. Можно заменить на файл `.ico/.svg/.png`.

### Известные моменты/решение проблем

- Иконки не отображаются: проверьте пути к `assets/img/github.svg` и `telegram.svg`.
- Переключатель языка не меняет тексты: очистите localStorage или проверьте `state.js` и ключ `language`.
- Аватар не виден: проверьте `assets/js/config.js → avatarUrl` и наличие файла.

---

## Overview (EN)

A lightweight single‑page portfolio using Tailwind (CDN) and vanilla JavaScript with no build step. Dark‑only theme, RU/EN localization persisted in localStorage, fully responsive.

### Features

- RU/EN localization (toggle, persisted)
- Sections: About, Experience, Contacts
- Avatar and real icons (GitHub/Telegram)
- Smooth scrolling, entry animations
- Footer with auto year, inline SVG favicon

### Project structure

```text
index.html
assets/
  css/styles.css
  js/
    config.js   # data: texts, experience, contacts, icons
    state.js    # app state (language)
    render.js   # DOM rendering
    nav.js      # navigation & language toggle
    main.js     # bootstrap
  img/
    avatar.jpg
    github.svg
    telegram.svg
```

### Run

Option 1: open `index.html` directly in a browser.

Option 2 (local server, optional):

- Python 3: `python3 -m http.server 8080`
- Node (serve): `npx serve -l 8080`

Open <https://localhost:8080> or <http://127.0.0.1:8080>.

### Customize

- Name and About: `assets/js/config.js` → `data.user`
- Avatar: put a file in `assets/img` and set `avatarUrl`
- Experience/stack: `data.experience`
- Contacts/icons: `data.contacts`, `icons`
- Font: set in `styles.css` (Rubik via Google Fonts)

### Experience cards notes

Currently descriptions show fully (cards grow with content). If you prefer equal heights with truncated text:

- Re‑enable line‑clamp and overflow hiding in `render.js` / `styles.css`.
- Or tweak the min height (class `min-h-[16rem]`).

### Favicon (EN)

Inline SVG in `<head>`. Replace with a file (`.ico/.svg/.png`) if preferred.

### Troubleshooting

- Icons missing: check paths to `assets/img/github.svg` and `telegram.svg`.
- Language toggle doesn’t update: clear localStorage or verify `state.js` and `language` key.
- Avatar missing: verify `assets/js/config.js → avatarUrl` and the file presence.
