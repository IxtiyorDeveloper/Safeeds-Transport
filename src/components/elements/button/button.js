import React from 'react';
import "./button.scss"

function Button({title, onClick, size = "24px",htmlType}) {
    return (
        <button style={{fontSize: size}} className="ubutton" onClick={onClick} type={htmlType}>
            {title}
        </button>
    );
}

export default Button;
