import React from 'react';
import logo from "../../assets/imgs/logo.png"
import {Link, useNavigate} from "react-router-dom"
import "./sidebar.scss"

function Sidebar({isOpen, setIsOpen}) {
    const navigate = useNavigate()

    const handleNavigate = (path) => {
        setIsOpen(false)
        navigate(path)
    }

    const handlePath = () => {
        navigate("/quote");
        setIsOpen(false)
    }

    return (
        <div className={`sidebar ${isOpen ? "active" : ""}`}>
            <div className="sio">
                <div className="lg">
                    <Link to="/" onClick={() => handleNavigate("/")}>
                        <img src={logo} alt="logo"/>
                    </Link>
                </div>
                <ul>
                    <li onClick={() => handleNavigate("/about")}>
                        About
                    </li>
                    <li onClick={() => handleNavigate("/services")}>
                        Services
                    </li>
                    <li onClick={() => handleNavigate("/blogs")}>
                        Blogs
                    </li>
                    <li onClick={() => handleNavigate("/team")}>
                        Team
                    </li>
                    <li onClick={() => handleNavigate("/contact")}>
                        Contact
                    </li>
                    <li onClick={() => handleNavigate("/help")}>
                            Help
                    </li>
                </ul>
                <div className="bt">
                    <button className="glow-on-hover" type="button" onClick={() => handlePath()}>GET A QUOTE</button>
                </div>
                <div className="tel">
                    <a href="tel:315-314-4337">315-314-4337</a>
                </div>
                <ul className="ntr">
                    <li onClick={() => handleNavigate("/")}>
                        Our license
                    </li>
                    <li onClick={() => handleNavigate("/")}>
                        Terms & Conditions
                    </li>
                    <li onClick={() => handleNavigate("/")}>
                        Contact us
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
