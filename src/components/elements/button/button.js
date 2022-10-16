import React from 'react';
import "./button.scss"

function Button({title, onClick, size = "24px"}) {
    return (
        <div style={{fontSize: size}} className="ubutton" onClick={onClick}>
            {title}
        </div>
    );
}

export default Button;
