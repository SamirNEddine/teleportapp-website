import React from "react"
import Layout from "../components/layout";
import {graphql, useStaticQuery} from 'gatsby';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Styles from './legal.module.css';
import SEO from "../components/seo"
import WithTranslations from '../components/i18n/withTranslations';
import i18n from "../components/i18n/config";

const termsQuery = graphql`
    query {
        contentfulLegalInformation(title: {eq: "Terms"}) {
            content {
                json
            }
        }
    }
`;

const TermsPage = function ({language}) {
    const {contentfulLegalInformation: termsNode} = useStaticQuery(termsQuery);

    return (
        <Layout>
            <SEO title={i18n.t('Terms | Teleport')} description={i18n.t('Terms')} lang={language} />
            <div className={Styles.container}>
                {documentToReactComponents(termsNode.content.json)}
            </div>
        </Layout>
    )
};
export default WithTranslations()(TermsPage);g