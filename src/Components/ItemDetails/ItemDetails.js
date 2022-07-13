import React, {useEffect, useState} from "react";
import "./style_persom_details.css";
import Loader from "../Loader";
import ErrorButton from "../ErrorButton";
import ErrorIndicator from "../ErrorIndicator";
import ErrorBoundry from "../ErroBoundry";

const Record = ({item, field, label}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export {Record};

const ItemDetails = (props) => {
    const {itemId, getData, getImageUrl, children} = props;
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [image, setImage] = useState(null);

    useEffect(() => {
        getData(itemId)
            .then((item) => {
                setItem(item);
                setImage(getImageUrl(item));
                setLoading(false);
                setError(false);
            })
            .catch(() => {
                setItem(null);
                setImage(null);
                setLoading(false);
                setError(true)
            })
    }, [itemId]);

    if (loading) {
        return (
            <ul className="item-list list-group">
                <Loader/>
            </ul>
        )
    }

    if (error) {
        return (
            <div>
                <ErrorIndicator/>
            </div>
        );
    }

    return (
        <ErrorBoundry>
            <div className="person-details card">
                <img className="person-image"
                     src={image}/>

                <div className="card-body">
                    <h4>{item.name}</h4>
                    <ul className="list-group list-group-flush">
                        {React.Children.map(children, (child) => {
                            return React.cloneElement(child, {item});
                        })}
                    </ul>
                    <ErrorButton/>
                </div>
            </div>
        </ErrorBoundry>
    )
};

export default ItemDetails;