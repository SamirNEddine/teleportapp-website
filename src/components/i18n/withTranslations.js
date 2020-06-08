import React from "react"
import {I18nextProvider} from "react-i18next"
import i18next from "./config"

const WithTranslations = () => (WrappedComponent) => {
    return ({pageContext}, props) => {
        const addResources = (pc, language) => {
            if (pc && pc.localeResources) {
                if (!i18next.hasResourceBundle(language, "translations")) {
                    i18next.addResourceBundle(language, "translations", {
                        ...pc.localeResources,
                    })
                }
            }
        };
        if (pageContext) {
            const currentLanguage = pageContext.locale;
            if (currentLanguage && currentLanguage !== i18next.language) {
                addResources(pageContext, currentLanguage);
                i18next.changeLanguage(currentLanguage);
            }
        }
        return (
            <I18nextProvider i18n={i18next}>
                <WrappedComponent {...props} language={i18next.language}/>
            </I18nextProvider>
        )
    }
};

export default WithTranslations;