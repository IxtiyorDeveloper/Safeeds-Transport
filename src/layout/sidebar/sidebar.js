import React from 'react';
import logo from "../../assets/imgs/logo.png"
import {Link} from "react-router-dom"
import "./sidebar.scss"

function Sidebar({isOpen,setIsOpen}) {
    return (
        <div className={`sidebar ${isOpen ? "active":""}`}>
            <div className="sio">
                <div className="lg">
                   <Link to="/">
                       <img src={logo} alt="logo"/>
                   </Link>
                </div>
                <ul>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/services">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to="/blogs">
                            Blogs
                        </Link>
                    </li>
                    <li>
                        <Link to="/team">
                            Team
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/help">
                            Help
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
