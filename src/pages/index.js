import React from "react"
import Layout from "../components/layout";
import {graphql, useStaticQuery} from 'gatsby';
import HomePageStyles from './homepage.module.css';
import TopSectionIllustration from '../assets/top-section-illustration.svg';

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
            <div className={HomePageStyles.topBrandingSectionContainer}>
                <div className={HomePageStyles.left}>
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
                <div className={HomePageStyles.right}>
                    <img src={TopSectionIllustration} alt='top section illustration'/>
                </div>
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
