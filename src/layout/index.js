import React, {useState} from 'react';
import Header from "./header/header";
import Footer from "./footer/footer";
import Sidebar from "./sidebar/sidebar";


function Layout(props) {
    const [isOpen, setIsOpen] = useState(false)
    const styles = {
        position: "fixed",
        width: "100%",
        height: "100vh",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,0.4)",
        zIndex: 1200,
        display: isOpen ? "block" : "none"
    }
    return (
        <div className="layout">
            <div style={styles} onClick={() => setIsOpen(!isOpen)}/>
            <div>
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>
            <div className="head">
                <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>
            <div className="w100">
                {props.children}
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default Layout;
