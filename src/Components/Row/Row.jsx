import React from "react";
import "./Row.styles.css";
import ItemList from "../ItemList";
import ItemDetails from "../ItemDetails";

const Row = ({itemsList, itemDetails, selectedId}) => {

    return (
        <div className="row mb2">
            <div className="col-md-6">
                <ItemList data={itemsList.itemList} loading={itemsList.isLoading} error={itemsList.error} handleClick={selectedId}/>
            </div>
            <div className="col-md-6">
                <ItemDetails data={itemDetails.details} loading={itemDetails.isLoading} error={itemDetails.error} image={itemDetails.image}/>
            </div>
        </div>
    );
}

export default Row;