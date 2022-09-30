import React from 'react';
import "./header.scss"
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <div className="header">
            <div className="content pd">
                <div className="logo">
                    <img
                        src="https://mercuryautotransport.com/wp-content/uploads/2022/01/Asset-31.svg"
                        alt="logo"
                        className="img"
                    />
                </div>
                <div className="pages">
                    <div className="link">About</div>
                    <div className="link">Services</div>
                    <div className="link">News</div>
                    <div className="link">Faqs</div>
                    <div className="link">Team</div>
                    <div className="link">Contact</div>
                </div>
                <div className="quote">
                    <Link className="button">get a quote</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
