import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      "popular": "Trending",
      "top_rated": "Top Rated",
      "upcoming": "Upcoming",
      "movies": "Movies"
    }
  },
  ru: {
    translation: {
      "popular": "В Тренде",
      "top_rated": "Лучшие",
      "upcoming": "Новинки",
      "movies": "Фильмы"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;