# Movie Website

Кино-сервис на React для просмотра подборок фильмов и сериалов, поиска по базе TMDB и открытия детальной страницы медиаконтента. Проект сделан как pet-проект с фокусом на современный frontend-стек, типизацию, работу с внешним API и переиспользуемые UI-компоненты.

## Возможности

- Главная страница с промо-блоком и каталогом фильмов/сериалов по жанрам.
- Поиск фильмов и сериалов через модальное окно с debounce.
- Детальная страница фильма или сериала.
- Информация о рейтинге, жанрах, длительности, годе выхода и описании.
- Рецензии и базовые данные о медиаконтенте.
- Skeleton-состояния во время загрузки.
- Адаптеры для работы с TMDB API.
- Storybook для UI-компонентов.
- Unit/component-тесты на Vitest и Testing Library.

## Стек

- React 19
- TypeScript
- Vite
- React Router
- TanStack Query
- CSS Modules
- Swiper
- Orval для генерации API-клиента
- Vitest, Testing Library, jsdom
- Storybook
- Oxlint / Oxfmt
- Lefthook
- Sonda для анализа сборки

## Структура проекта

```text
src/
  api/          ручные API-адаптеры поверх сгенерированного клиента
  components/   общие компоненты приложения
  generated/    код, сгенерированный Orval
  hooks/        переиспользуемые React-хуки
  pages/        страницы приложения
  shared/       общие типы, константы, роутинг и утилиты
  stories/      Storybook-примеры
  tests/        тестовые helpers и setup
```

## Переменные окружения

Для работы с TMDB API нужен ключ API.

Создай файл `.env` в корне проекта:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

Получить ключ можно в личном кабинете TMDB.

## Запуск

Установить зависимости:

```bash
npm install
```

Запустить dev-сервер:

```bash
npm run dev
```

Собрать production-версию:

```bash
npm run build
```

Открыть production-preview:

```bash
npm run preview
```

## Тесты и качество кода

Запуск тестов:

```bash
npm run test
```

Тесты в watch-режиме:

```bash
npm run test:watch
```

Покрытие тестами:

```bash
npm run test:coverage
```

Линтинг:

```bash
npm run lint
```

Форматирование:

```bash
npm run format
```

Проверка форматирования:

```bash
npm run format:check
```

## Storybook

Запустить Storybook:

```bash
npm run storybook
```

Собрать Storybook:

```bash
npm run build-storybook
```

## Генерация API-клиента

Проект использует Orval для генерации клиента по TMDB API.

```bash
npm run generate:api
```

Сгенерированные файлы находятся в `src/generated/`.

## Анализ сборки

```bash
npm run analyze
```

Команда собирает проект с конфигурацией `vite.sonda.config.ts` и помогает посмотреть размер чанков.

## Деплой

В проекте есть `netlify.toml`, поэтому приложение можно деплоить на Netlify. Для корректной работы маршрутов SPA используется fallback на `index.html`.

Перед деплоем нужно добавить переменную окружения `VITE_TMDB_API_KEY` в настройках проекта на Netlify.

## Что можно улучшить дальше

- Исправить битую кодировку русских строк в UI и тестах.
- Убрать non-null assertions при работе с ответами TMDB API.
- Добавить полноценные error/empty states для страниц и модальных окон.
- Расширить тесты на сценарии поиска, страницы медиа и ошибки API.
- Добавить E2E-проверки критических пользовательских сценариев.
