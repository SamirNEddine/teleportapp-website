const supportedLanguages = require(`./i18n/supported-languages`);
const translationsCache = {};

exports.onCreatePage = ({page, actions}) => {
    const {createPage, deletePage} = actions;
    deletePage(page);
    Object.keys(supportedLanguages).map(lang => {
        const {path, is_default} = supportedLanguages[lang];
        const localizedPath = is_default ? page.path : `${path}${page.path}`;
        if (!translationsCache[lang]) {
            translationsCache[lang] = require(`./src/translations/${lang}`);
        }
        return createPage({
            ...page,
            path: localizedPath,
            context: {
                ...page.context,
                locale: lang,
                localeResources: translationsCache[lang],
            },
        })
    })
};