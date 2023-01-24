import React, {useState} from "react";
import "./ErrorButton.styles.css";

const ErrorButton = () => {
    const [renderError, setRenderError] = useState(false);

    if(renderError) throw new Error("Boom test error")

    return (
        <button
            className="error-button btn btn-danger btn-lg"
            onClick={() => setRenderError(true)}
        >
            Throw Error
        </button>
    );
}

export default ErrorButton;