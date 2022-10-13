import React from 'react';
import "./button.scss"

function Button({title,onClick}) {
    return (
        <div className="ubutton" onClick={onClick}>
            {title}
        </div>
    );
}

export default Button;
