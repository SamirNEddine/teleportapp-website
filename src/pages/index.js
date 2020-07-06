import React, {useState} from "react"
import WithTranslations from '../components/i18n/withTranslations';
import i18n from "../components/i18n/config"
import axios from "axios";
import SEO from "../components/seo"
import Layout from "../components/layout";
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import TopSectionStyles from './homepage-top-section.module.css';
import TopSectionIllustration from '../assets/top-section-illustration.svg';
import ProductSectionStyles from './homepage-product-section.module.css';
import PurpleStart from '../assets/purple-star.svg';
import Number1 from '../assets/big-number-1.svg';
import ProductIllustration1 from '../assets/product-illustration-1.svg';
import Number2 from '../assets/big-number-2.svg';
import ProductIllustration2 from '../assets/product-illustration-2.svg';
import Number3 from '../assets/big-number-3.svg';
import ProductIllustration3 from '../assets/product-illustration-3.svg';

const ProductPage = function ({language}) {
    const [formState, setFormState] = useState('initial');
    const isMac = (typeof navigator === 'object' && navigator.platform.toUpperCase().indexOf('MAC')>=0);

    const onWaitingListFormSubmit = async (e) => {
        e.preventDefault();
        const email = new FormData(e.target).get('email');
        if(email){
            setFormState('loading');
            try {
                const response = await axios.post('https://api.teleport.so/stable/waiting-list/', {email});
                if(response.status === 200){
                    setFormState('confirmed');
                }else{
                    setFormState('initial');
                }
            }catch(e){
                setFormState('initial');
            }
        }
    };
    return (
        <Layout>
            <SEO title={i18n.t('Your remote working assistant | Teleport')} description={i18n.t('Let your team know how and when is best to reach you in few clicks')} lang={language} />
            <div className={TopSectionStyles.container}>
                <div className={TopSectionStyles.left}>
                    <ul>
                        <li><h1>{i18n.t('Your remote working assistant')}</h1></li>
                        <li><h2>{i18n.t('Let your team know how and when is best to reach you in few clicks')}</h2></li>
                        <li>
                            {isMac ?
                                (
                                    <a href='https://storage.googleapis.com/desktop-app-binaries-eu-west1/beta/Teleport.dmg'  download='Teleport'>{i18n.t('Product - Download button')}</a>
                                ) : (
                                    <form action="" onSubmit={onWaitingListFormSubmit}>
                                        <p>{i18n.t('Available on OS X. Get notified when other platforms become available')}</p>
                                        <input type='email' name='email' placeholder={i18n.t('Your work email')} disabled={formState === 'loading'} onChange={ _ => {if(formState !== 'initial') setFormState('initial')}}/>
                                        <button disabled={formState !== 'initial'}> {formState === 'confirmed' ? i18n.t('Stay tuned!✨') : i18n.t('Get notified')}</button>
                                        {formState === 'loading' ? (<span className={TopSectionStyles.waitingListLoader}><Loader type="Puff" color="#00BFFF" height={30} width={30} /></span>) : ('')}
                                    </form>
                                )
                            }
                        </li>
                    </ul>
                </div>
                <div className={TopSectionStyles.right}>
                    <img src={TopSectionIllustration} alt='top section illustration'/>
                </div>
            </div>
            <div className={ProductSectionStyles.container}>
                <h1 className={ProductSectionStyles.mainTitle}>Your assistant for <span style={{color:'#E127EB'}}>remote teams</span></h1>
                <img src={PurpleStart} className={ProductSectionStyles.separator} alt='Purple start'/>
                <ul>
                    <li>
                        <img src={Number1} className={ProductSectionStyles.number} alt='Number-1'/>
                        <div className={ProductSectionStyles.featureDescription}>
                            <h1>{i18n.t('Your context')}</h1>
                            <h2>{i18n.t('Define how your day looks like')}</h2>
                        </div>
                        <img src={ProductIllustration1} className={ProductSectionStyles.featureIllustration}  alt='product-illustration-1'/>
                    </li>
                    <li className={ProductSectionStyles.alternate}>
                        <img src={Number2} className={ProductSectionStyles.number} alt='Number-2'/>
                        <div className={ProductSectionStyles.featureDescription}>
                            <h1>{i18n.t('Update your status')}</h1>
                            <h2>{i18n.t('Automatically update your Slack status depending on your availability level')}</h2>
                        </div>
                        <img src={ProductIllustration2} className={ProductSectionStyles.featureIllustration} alt='product-illustration-2'/>
                    </li>
                    <li>
                        <img src={Number3} className={ProductSectionStyles.number} alt='Number-3'/>
                        <div className={ProductSectionStyles.featureDescription}>
                            <h1>{i18n.t('Block slots on your Calendar')}</h1>
                            <h2>{i18n.t('Block a personalized schedule on your calendar to get the best out of your working day')}</h2>
                        </div>
                        <img src={ProductIllustration3} className={ProductSectionStyles.featureIllustration} alt='product-illustration-3'/>
                    </li>
                </ul>
            </div>
            {isMac ?
                (
                    <div className={ProductSectionStyles.downloadContainer}>
                        <h1>{i18n.t('Try Teleport for free!')}</h1>
                        <a href='https://storage.googleapis.com/desktop-app-binaries-eu-west1/beta/Teleport.dmg'  download='Teleport'>{i18n.t('Product - Download button')}</a>
                    </div>
                ) : (
                    <div/>
                )
            }
        </Layout>
    )
};
export default WithTranslations()(ProductPage);
