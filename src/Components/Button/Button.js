import "./style-button.css";

const Button = (props) => {
    const {text, functionClick} = props;
    return (
        <button type="button" class="btn btn-warning" onClick={() => functionClick()}>
            {text}
        </button>
    );
}

export default Button;