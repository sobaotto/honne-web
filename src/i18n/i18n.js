import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationJA from "./locales/ja/translation.json";

const resources = {
  ja: {
    translation: translationJA,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ja",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
