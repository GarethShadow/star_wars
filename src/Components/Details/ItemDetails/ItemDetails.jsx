import React from "react";
import Loader from "../../Loader";
import ErrorIndicator from "../../ErrorIndicator"
import "./ItemDetails.styles.css";
import ErrorBoundry from "../../ErrorBoundry";
import ErrorButton from "../../ErrorButton";

const ItemDetails = ({
    title,
    itemTop,
    itemMiddle,
    itemBottom,
    labelTop,
    labelMiddle,
    labelBottom,
    loading,
    error,
    image,
    handleClickInfo
}) => {
    if(loading) {
        return (
            <ul className="item-list list-group">
                <Loader/>
            </ul>
        );
    }

    if(error) {
        return (
            <div>
                <ErrorIndicator/>
            </div>
        );
    }

    return (
        <ErrorBoundry>
            <div className="person-details card">
                <img className="person-image" src={image}/>

                <div className="card-body">
                    <h4>{title}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">{itemTop}</span>
                            <span>{labelTop}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">{itemMiddle}</span>
                            <span>{labelMiddle}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">{itemBottom}</span>
                            <span>{labelBottom}</span>
                        </li>
                    </ul>
                    <button onClick={handleClickInfo}>More info</button>
                    <ErrorButton/>
                </div>
            </div>
        </ErrorBoundry>
    );
};

export default ItemDetails;