import "./style_loader.css";
import LoaderGif from "../../Images/star-wars-loading.gif";

const Loader = () => {
    return (
        <div className="loader">
            <img src={`${LoaderGif}?${Date.now()}`} alt="Loader-animation"/>
        </div>
    );
}

export default Loader;