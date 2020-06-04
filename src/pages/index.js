import React from "react"
import Layout from "../components/layout";
import {graphql, useStaticQuery} from 'gatsby';
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

    const {edges: productFeatures} = allContentfulProductFeatureDescription;
    return (
        <Layout>
            <div className={TopSectionStyles.container}>
                <div className={TopSectionStyles.left}>
                    <ul>
                        <li><h1>Your remote working assistant</h1></li>
                        <li><h2>Let your team know how and when is best to reach you in few clicks.</h2></li>
                        <li>
                            <form>
                                <input type='email' placeholder='Your work email'/>
                                <button>Get early access</button>
                            </form>
                        </li>

                    </ul>
                </div>
                <div className={TopSectionStyles.right}>
                    <img src={TopSectionIllustration} alt='top section illustration'/>
                </div>
            </div>
            <div className={ProductSectionStyles.container}>
                <h1>Your assistant for <span style={{color:'#E127EB'}}>remote teams</span></h1>
                <img src={PurpleStart} className={ProductSectionStyles.separator} alt='Purple start'/>
                <ul>
                    <li>
                        <img src={Number1} className={ProductSectionStyles.number} alt='Number-1'/>
                        <div className={ProductSectionStyles.featureDescription}>
                            <h1>Your context</h1>
                            <h2>Define how your day look like.</h2>
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
export default ProductPage;
