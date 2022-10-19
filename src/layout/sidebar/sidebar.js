import React from 'react';
import logo from "../../assets/imgs/logo.png"
import {Link} from "react-router-dom"
import "./sidebar.scss"

function Sidebar({isOpen, setIsOpen}) {
    const handleNavigate = () => {
        setIsOpen(false)
    }
    return (
        <div className={`sidebar ${isOpen ? "active" : ""}`}>
            <div className="sio">
                <div className="lg">
                    <Link to="/" onClick={() => handleNavigate()}>
                        <img src={logo} alt="logo"/>
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link to="/about" onClick={() => handleNavigate()}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/services" onClick={() => handleNavigate()}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to="/blogs" onClick={() => handleNavigate()}>
                            Blogs
                        </Link>
                    </li>
                    <li>
                        <Link to="/team" onClick={() => handleNavigate()}>
                            Team
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={() => handleNavigate()}>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/help" onClick={() => handleNavigate()}>
                            Help
                        </Link>
                    </li>
                </ul>
                <div className="bt">
                    <button className="glow-on-hover" type="button">GET A QUOTE</button>
                </div>
                <div className="tel">
                    <a href="tel:315-314-4337">315-314-4337</a>
                </div>
                <ul className="ntr">
                    <li>
                        <Link to="/">
                            Our license
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Terms & Conditions
                        </Link>
                    </li>
                    <li>
                        <Link to="/contacts">
                            Contact us
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
