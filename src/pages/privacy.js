import React from "react"
import Layout from "../components/layout";
import {graphql, useStaticQuery} from 'gatsby';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Styles from './legal.module.css';
import SEO from "../components/seo"
import i18n from "../components/i18n/config";

const privacyPolicyQuery = graphql`
    query {
        contentfulLegalInformation(title: {eq: "Privacy Policy"}) {
            content {
                json
            }
        }
    }
`;

const PrivacyPage = function ({language}) {
    const {contentfulLegalInformation: privacyPolicyNode} = useStaticQuery(privacyPolicyQuery);

    return (
        <Layout>
            <SEO title={i18n.t('Privacy policy | Teleport')} description={i18n.t('Privacy policy')} lang={language} />
            <div className={Styles.container}>
                {documentToReactComponents(privacyPolicyNode.content.json)}
            </div>
        </Layout>
    )
};
export default PrivacyPage;