import React from "react";
import Loader from "../Loader";
import ErrorIndicator from "../ErrorIndicator"
import "./ItemDetails.styles.css";
import ErrorBoundry from "../ErrorBoundry";
import ErrorButton from "../ErrorButton";

const ItemDetails = ({data, loading, error, image}) => {

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
                    <h4>{data.name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender:</span>
                            <span>{data.gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year:</span>
                            <span>{data.birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color:</span>
                            <span>{data.eyeColor}</span>
                        </li>
                    </ul>
                    <ErrorButton/>
                </div>
            </div>
        </ErrorBoundry>
    );
};

export default ItemDetails;