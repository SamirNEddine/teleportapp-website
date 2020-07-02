import React from "react"
import Layout from "../components/layout";
import Styles from './slack.module.css';
import SEO from "../components/seo"
import WithTranslations from '../components/i18n/withTranslations';
import i18n from "../components/i18n/config";

const signInWithSlackStepImagesURLs = {
    '1x': 'https://storage.googleapis.com/teleport-main-website-assets/images/slack-1.png',
    '2x': 'https://storage.googleapis.com/teleport-main-website-assets/images/slack-1@2x.png',
    '3x': 'https://storage.googleapis.com/teleport-main-website-assets/images/slack-1@3x.png'
};
const myDayStepImagesURLs = {
    '1x': 'https://storage.googleapis.com/teleport-main-website-assets/images/slack-2.png',
    '2x': 'https://storage.googleapis.com/teleport-main-website-assets/images/slack-2@2x.png',
    '3x': 'https://storage.googleapis.com/teleport-main-website-assets/images/slack-2@3x.png',
};
const statusImagesURLs = {
    '1x': 'https://storage.googleapis.com/teleport-main-website-assets/images/slack-3.png',
    '2x': 'https://storage.googleapis.com/teleport-main-website-assets/images/slack-3@2x.png',
    '3x': 'https://storage.googleapis.com/teleport-main-website-assets/images/slack-3@3x.png',
};

const isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
const SlackPage = function ({language, history}) {
    // if(!isMac){
    //     window.location.replace(`/`)
    // }
    return (
        <Layout>
            <SEO title={i18n.t('Slack Integration | Teleport')} description={i18n.t('Slack integration')} lang={language} />
            <div className={Styles.container}>
                <div className={Styles.mainTitle}><span>{i18n.t('Slack + Teleport')}</span></div>
            </div>
            <ul className={Styles.steps}>
                <li><span className={Styles.stepNumber}>1/ </span>{i18n.t('Download Teleport')}</li>
                <li>
                    <span className={Styles.stepNumber}>2/ </span>{i18n.t('Sign in with Slack')}
                    <img src={signInWithSlackStepImagesURLs["1x"]} srcSet={signInWithSlackStepImagesURLs["1x"] + ' 1x,' + signInWithSlackStepImagesURLs["2x"] + ' 2x,' + signInWithSlackStepImagesURLs["3x"] + ' 3x' } alt='Sign in with Slack'/>
                </li>
                <li>
                    <span className={Styles.stepNumber}>3/ </span>{i18n.t('Setup your day to update your Slack status automatically')}
                    <img src={myDayStepImagesURLs["1x"]} srcSet={myDayStepImagesURLs["1x"] + ' 1x,' + myDayStepImagesURLs["2x"] + ' 2x,' + myDayStepImagesURLs["3x"] + ' 3x' } alt='Setup your day'/>
                </li>
                <li>
                    <span className={Styles.stepNumber}>4/ </span>{i18n.t('Manually change your status at anytime in one click')}
                    <img src={statusImagesURLs["1x"]} srcSet={statusImagesURLs["1x"] + ' 1x,' + statusImagesURLs["2x"] + ' 2x,' + statusImagesURLs["3x"] + ' 3x' } alt='Set status manually'/>
                </li>
            </ul>
            <div className={Styles.downloadContainer}>
                <h1>{i18n.t('Slack - Download Teleport - Bottom')}</h1>
                <a href='https://storage.googleapis.com/desktop-app-binaries-eu-west1/beta/Teleport.dmg'  download='Teleport'>{i18n.t('Slack - Download button')}</a>
            </div>
        </Layout>
    )
};
export default WithTranslations()(SlackPage);