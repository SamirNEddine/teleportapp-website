import React from "react"
import {navigate} from "gatsby"
import supportedLanguages from "../../../i18n/supported-languages";
const languages = Object.keys(supportedLanguages);

const LanguageSelector =  function ({language}) {
    const handleSelect = async (e) => {
        const selectedLanguage = e.target.value;
        const path = supportedLanguages[selectedLanguage].isDefault ? "/" : `/${selectedLanguage}`;
        await navigate(path)
    };
    return (
        <select
            name="languages"
            value={language}
            onChange={handleSelect}
        >
            {languages.map(lang => (
                <option key={lang} value={lang}>
                    {supportedLanguages[lang].displayName}
                </option>
            ))}
        </select>
    )
};

export default LanguageSelector;