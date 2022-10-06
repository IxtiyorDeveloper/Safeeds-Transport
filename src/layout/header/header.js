import React from 'react';
import "./header.scss"
import {Link} from "react-router-dom";
import logo from "../../assets/imgs/logo.png"

function Header(props) {
    return (
        <div className="header">
            <div className="content pd">
                <div className="logo">
                    <a href="/">
                        <img
                            src={logo}
                            alt="logo"
                            className="img"
                        />
                    </a>
                </div>
                <div className="pages">
                    <Link to="/about" className="lk">
                        <div className="link">About</div>
                    </Link>
                    <Link to="/services" className="lk">
                        <div className="link">Services</div>
                    </Link>
                    <Link to="/about" className="lk">
                        <div className="link">Blogs</div>
                    </Link>
                    <Link to="/about" className="lk">
                        <div className="link">Team</div>
                    </Link>
                    <Link to="/about" className="lk">
                        <div className="link">Contact</div>
                    </Link>
                    <Link to="/about" className="lk">
                        <div className="link">Help</div>
                    </Link>
                </div>
                <div className="quote">
                    <Link className="button">get a quote</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
