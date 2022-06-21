import React, {useState} from "react";
import "./style_errorButton.css";

const ErrorButton = () => {
  const [renderError, setRenderError] = useState(false);

  if(renderError) {
      throw new Error("Boom Test Error");
  }



    return (
        <button
            className="error-button btn btn-danger btn-lg"
            onClick={() => setRenderError(true)}>
            Throw Error
        </button>
    );
};

export default ErrorButton;