import React from "react"
import Layout from "../components/layout";
import {graphql, useStaticQuery} from 'gatsby';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Styles from './legal.module.css';

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
            <div className={Styles.container}>
                {documentToReactComponents(privacyPolicyNode.content.json)}
            </div>
        </Layout>
    )
};
export default PrivacyPage;