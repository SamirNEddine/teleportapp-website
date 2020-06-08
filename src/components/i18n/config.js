import i18n from "i18next"
import {initReactI18next} from "react-i18next"
import supportedLanguages from "../../../i18n/supported-languages";

i18n.use(initReactI18next)
    .init({
        fallbackLng: "en",
        ns: ["translations"],
        defaultNS: "translations",
        debug: false,
        interpolation: {
            escapeValue: false,
        }
    });

i18n.languages = Object.keys(supportedLanguages);
export default i18n;