import React from 'react';
import "./button.scss"

function Button({title}) {
    return (
        <div className="ubutton">
            {title}
        </div>
    );
}

export default Button;
