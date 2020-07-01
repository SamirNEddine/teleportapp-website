import React from "react"
import Layout from "../components/layout";
import Styles from './slack.module.css';
import SEO from "../components/seo"
import WithTranslations from '../components/i18n/withTranslations';
import i18n from "../components/i18n/config";

const SlackPage = function ({language}) {
    return (
        <Layout>
            <SEO title={i18n.t('Slack Integration | Teleport')} description={i18n.t('Slack integration')} lang={language} />
            <div className={Styles.container}>
                SLACK PAGE!
            </div>
        </Layout>
    )
};
export default WithTranslations()(SlackPage);