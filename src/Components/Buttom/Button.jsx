import React from "react";
import "./Button.styles.css";

const Button = ({text, handleClick}) => {
    return(
        <button type="button" className="btn btn-warning" onClick={() => handleClick()}>
            {text}
        </button>
    );
}

export default Button;