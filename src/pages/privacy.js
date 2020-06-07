import React from "react"
import Layout from "../components/layout";
import {graphql, useStaticQuery} from 'gatsby';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Styles from './legal.module.css';
import {Helmet} from "react-helmet";

const privacyPolicyQuery = graphql`
    query {
        contentfulLegalInformation(title: {eq: "Privacy Policy"}) {
            content {
                json
            }
        }
    }
`;

const PrivacyPage = function () {
    const {contentfulLegalInformation: privacyPolicyNode} = useStaticQuery(privacyPolicyQuery);

    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Privacy policy | Teleport</title>
                <link rel="canonical" href="https://www.teleport.so/privacy" />
            </Helmet>
            <div className={Styles.container}>
                {documentToReactComponents(privacyPolicyNode.content.json)}
            </div>
        </Layout>
    )
};
export default PrivacyPage;