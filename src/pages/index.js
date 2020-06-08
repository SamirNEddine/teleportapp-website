import React, {useState} from "react"
import WithTranslations from '../components/i18n/withTranslations';
import { Helmet } from "react-helmet"
import i18n from "../components/i18n/config"
import axios from "axios";
import Layout from "../components/layout";
import {graphql, useStaticQuery} from 'gatsby';
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

const productFeaturesQuery = graphql`
    query {
        allContentfulProductFeatureDescription {
            edges {
                node {
                    title
                    description {
                        description
                    }
                }
            }
        }
    }
`;
const ProductPage = function () {
    const {allContentfulProductFeatureDescription} = useStaticQuery(productFeaturesQuery);
    const [formState, setFormState] = useState('initial');

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
    const {edges: productFeatures} = allContentfulProductFeatureDescription;
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{i18n.t('Your remote working assistant | Teleport')}</title>
                <link rel="canonical" href="https://www.teleport.so" />
            </Helmet>
            <div className={TopSectionStyles.container}>
                <div className={TopSectionStyles.left}>
                    <ul>
                        <li><h1>Your remote working assistant</h1></li>
                        <li><h2>Let your team know how and when is best to reach you in few clicks.</h2></li>
                        <li>
                            <form action="" onSubmit={onWaitingListFormSubmit}>
                                <input type='email' name='email' placeholder='Your work email' disabled={formState === 'loading'} onChange={ _ => {if(formState !== 'initial') setFormState('initial')}}/>
                                <button disabled={formState !== 'initial'}> {formState === 'confirmed' ? 'Stay tuned!✨' : 'Get early access'}</button>
                                {formState === 'loading' ? (<span className={TopSectionStyles.waitingListLoader}><Loader type="Puff" color="#00BFFF" height={30} width={30} /></span>) : ('')}
                            </form>
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
                            <h1>Your context</h1>
                            <h2>Define how your day looks like.</h2>
                        </div>
                        <img src={ProductIllustration1} className={ProductSectionStyles.featureIllustration}  alt='product-illustration-1'/>
                    </li>
                    <li className={ProductSectionStyles.alternate}>
                        <img src={Number2} className={ProductSectionStyles.number} alt='Number-2'/>
                        <div className={ProductSectionStyles.featureDescription}>
                            <h1>Update your status</h1>
                            <h2>Automatically update your Slack status depending on your availability level.</h2>
                        </div>
                        <img src={ProductIllustration2} className={ProductSectionStyles.featureIllustration} alt='product-illustration-2'/>
                    </li>
                    <li>
                        <img src={Number3} className={ProductSectionStyles.number} alt='Number-3'/>
                        <div className={ProductSectionStyles.featureDescription}>
                            <h1>Block slots on your Calendar</h1>
                            <h2>Block a personalized schedule on your calendar to get the best out of your working day.</h2>
                        </div>
                        <img src={ProductIllustration3} className={ProductSectionStyles.featureIllustration} alt='product-illustration-3'/>
                    </li>
                </ul>
            </div>
            {/*<h1>Hello world</h1>*/}
            {/*<ul>*/}
            {/*    {*/}
            {/*        productFeatures.map( featureEdge => {*/}
            {/*            const {node: feature} = featureEdge;*/}
            {/*            return(*/}
            {/*                <li>*/}
            {/*                    <h2>{feature.title}</h2>*/}
            {/*                    <p>{feature.description.description}</p>*/}
            {/*                </li>*/}
            {/*            )*/}
            {/*        })*/}
            {/*    };*/}
            {/*</ul>*/}
        </Layout>
    )
};
export default WithTranslations()(ProductPage);
