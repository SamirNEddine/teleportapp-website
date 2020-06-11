import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultTitle: title
                titleTemplate
                defaultDescription: description
                siteUrl: url
                defaultImage: image
                twitterUsername
            }
        }
    }
`;

function SEO({ description, lang, meta, title, image }) {
    const { pathname } = useLocation();
    const { site } = useStaticQuery(query);
    const {
        defaultTitle,
        titleTemplate,
        defaultDescription,
        siteUrl,
        defaultImage,
        twitterUsername,
    } = site.siteMetadata;
    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        metaDescription: description || defaultDescription,
        image: `${image ? `${siteUrl}${image}` : defaultImage}`,
        url: `${siteUrl}${pathname}`,
        lang
    };

    return (
        <Helmet
            htmlAttributes={{
                lang: seo.lang,
            }}
            title={seo.title}
            titleTemplate={titleTemplate}
            meta={[
                {
                    name: `og:url`,
                    content: seo.url
                },
                {
                    name: 'image',
                    content: seo.image
                },
                {
                    name: 'og:image',
                    content: seo.image
                },
                {
                    name: `description`,
                    content: seo.description,
                },
                {
                    property: `og:title`,
                    content: seo.title,
                },
                {
                    property: `og:description`,
                    content: seo.metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: twitterUsername,
                },
                {
                    name: `twitter:title`,
                    content: seo.title,
                },
                {
                    name: `twitter:description`,
                    content: {titleTemplate},
                },
                {
                    name: `twitter:image`,
                    content: seo.image
                }
            ].concat(meta)}
        />
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
};

export default SEO