import "./style_errorIndicator.css";
import Icon from "../../Images/death-star.png";

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={Icon} alt="error icon"/>
            <span className="boom">Error!</span>
            <span>something has gone terribly wrong</span>
            <span>(but we already sent droids to fix it)</span>
        </div>
    );
};

export default ErrorIndicator;