import React from "react";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import ErrorBoundry from "../ErroBoundry";

const PeoplePage = ({getData, onItemSelectir, personId}) => {

    return (
        <ErrorBoundry>
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList getData={getData} onItemSelectir={onItemSelectir}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={personId}/>
                </div>
            </div>
        </ErrorBoundry>

    );
};

export default PeoplePage;