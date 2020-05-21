import React from "react"
import Header from "./Header";
import Footer from "./Footer";

import Styles from './layout.module.css';

const Layout = function ({ children }) {
    return(
        <div className={Styles.container}>
            <div className={Styles.content}>
                <Header/>
                {children}
            </div>
            <Footer/>
        </div>
    )
};
export default Layout;