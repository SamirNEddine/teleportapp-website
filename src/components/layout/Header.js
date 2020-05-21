import React from "react";
import {Link} from "gatsby";

const Header = function () {
    return(
        <div>
            <Link to="/">Product</Link>
            <Link to="/consulting">Consulting</Link>
            <Link to="/about">About</Link>
        </div>
    )
};
export default Header;
