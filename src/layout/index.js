import React from 'react';
import Header from "./header/header";


function Layout(props) {
    return (
        <div className="layout">
            <div className="head">
                <Header/>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    );
}

export default Layout;
