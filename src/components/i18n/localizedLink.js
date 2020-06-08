import React from "react"
import {Link as GatsbyLink} from "gatsby"
import supportLanguages from "../../../i18n/supported-languages"

export const LocalizedLink = ({ to, language, ...props }) => {
    const { is_default, path } = supportLanguages[language];
    const path_to = is_default ? to : `/${path}/${to}`;
    return <GatsbyLink {...props} to={path_to} />
};