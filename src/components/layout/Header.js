import React from "react";
import {Link, graphql, useStaticQuery} from "gatsby";

import HeaderStyles from './header.module.css';

const titleQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }  
    }
`;
const Header = function () {
    const data = useStaticQuery(titleQuery);

    return(
        <div className={HeaderStyles.container}>
            {data.site.siteMetadata.title}  
            <ul className={HeaderStyles.navigationList}>
                <li><Link className={HeaderStyles.navigationItem} activeClassName={HeaderStyles.selectedNavigationItem} to="/">Product</Link></li>
                <li><Link className={HeaderStyles.navigationItem} activeClassName={HeaderStyles.selectedNavigationItem} to="/consulting">Consulting</Link></li>
                <li><Link className={HeaderStyles.navigationItem} activeClassName={HeaderStyles.selectedNavigationItem} to="/about">About</Link></li>
            </ul>
        </div>
    )
};
export default Header;
