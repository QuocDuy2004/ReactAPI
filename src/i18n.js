// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import các tệp ngôn ngữ
import en from './locales/en.json';
import vi from './locales/vi.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      vi: { translation: vi }
    },
    lng: "en", // Ngôn ngữ mặc định
    fallbackLng: "en", // Ngôn ngữ dự phòng
    interpolation: {
      escapeValue: false // Không cần thiết cho React
    }
  });

export default i18n;
