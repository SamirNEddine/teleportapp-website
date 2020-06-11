import React from "react";
import WithTranslations from '../i18n/withTranslations';
import i18n from "../i18n/config"
import {LocalizedLink} from '../i18n/localizedLink';
import {OutboundLink} from 'gatsby-plugin-gtag'
import FooterStyles from './footer.module.css';
import TeleportLogo from '../../assets/teleport-logo-full-colour.svg';
import ContactMail from '../../assets/contact-mail.svg';
import ContactLinkedIn from '../../assets/contact-linkedIn.svg';
import ContactTwitter from '../../assets/contact-twitter.svg';

const Footer = function ({language}) {
    return(
        <div className={FooterStyles.container}>
            <div className={FooterStyles.subContainer}>
                <div className={FooterStyles.brandingContainer}>
                    <img src={TeleportLogo} alt='Teleport Logo'/>
                    <p>{i18n.t('Footer - Your remote working assistant')}</p>
                </div>
                <div className={FooterStyles.mainPages}>
                    <div className={FooterStyles.sectionTitle}>{i18n.t('Footer - About Teleport')}</div>
                    <LocalizedLink language={language} to="/">{i18n.t('Footer - Product')}</LocalizedLink>
                </div>
                <div className={FooterStyles.legalPages}>
                    <div className={FooterStyles.sectionTitle}>{i18n.t('Footer - Legal')}</div>
                    <LocalizedLink language={language} to="/privacy">{i18n.t('Footer - Privacy policy')}</LocalizedLink>
                </div>
                <div className={FooterStyles.contactContainer}>
                    <h2 className={FooterStyles.sectionTitle}>{i18n.t('Footer - Created by a fully remote team')}</h2>
                    <ul>
                        <li><OutboundLink target="_blank" href='https://twitter.com/teleport_io'><img src={ContactTwitter} alt='Twitter page'/></OutboundLink></li>
                        <li><OutboundLink target="_blank" href='https://www.linkedin.com/company/tlprt/'><img src={ContactLinkedIn} alt='Linked page'/></OutboundLink></li>
                        <li><OutboundLink target="_blank" href='mailto:contact@teleport.so'><img src={ContactMail} alt='Contact by email'/></OutboundLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
};
export default WithTranslations()(Footer);