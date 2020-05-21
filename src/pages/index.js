import React from "react"
import Layout from "../components/layout";
import {graphql, useStaticQuery} from 'gatsby';

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
            <h1>Hello world</h1>
            <ul>
                {
                    productFeatures.map( featureEdge => {
                        const {node: feature} = featureEdge;
                        return(
                            <li>
                                <h2>{feature.title}</h2>
                                <p>{feature.description.description}</p>
                            </li>
                        )
                    })
                };
            </ul>
        </Layout>
    )
};
export default ProductPage;
