import React from "react"
import Header from "./Header";
import Footer from "./Footer";

const Layout = function ({ children }) {
    return(
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
};
export default Layout;