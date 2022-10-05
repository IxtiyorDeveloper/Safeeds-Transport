import React from 'react';
import Header from "./header/header";
import Footer from "./footer/footer";


function Layout(props) {
    return (
        <div className="layout">
            <div className="head">
                <Header/>
            </div>
            <div>
                {props.children}
            </div>
            <div>
                {/*<Footer/>*/}
            </div>
        </div>
    );
}

export default Layout;
