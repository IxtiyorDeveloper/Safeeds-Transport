import React from 'react';
import "./header.scss"
import {Link, useNavigate} from "react-router-dom";
import logo from "../../assets/imgs/logo.png"
import {AiOutlineMenu} from "react-icons/ai"

function Header({isOpen, setIsOpen}) {
    const navigate = useNavigate()
    return (
        <div className="header">
            <div className="content pd">
                <div className="logo">
                    <a href="/">
                        <Link to="/">
                            <img src={logo} alt="logo" className="img"/>
                        </Link>
                    </a>
                </div>
                <div className="pages">
                    <Link to="/about" className="lk">
                        <div className="link">About</div>
                    </Link>
                    <Link to="/services" className="lk">
                        <div className="link">Services</div>
                    </Link>
                    <Link to="/blogs" className="lk">
                        <div className="link">Blogs</div>
                    </Link>
                    <Link to="/team" className="lk">
                        <div className="link">Team</div>
                    </Link>
                    <Link to="/contact" className="lk">
                        <div className="link">Contact</div>
                    </Link>
                    <Link to="/help" className="lk">
                        <div className="link">Help</div>
                    </Link>
                </div>
                <div className="quote" onClick={() => navigate("/quote")}>
                    <button className="glow-on-hover" type="button">GET A QUOTE</button>
                </div>
                <div className="menu" onClick={() => setIsOpen(!isOpen)}>
                    <AiOutlineMenu className="icon"/>
                </div>
            </div>
        </div>
    );
}

export default Header;
