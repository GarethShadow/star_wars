import React from "react";
import "./Row.styles.css";
import ItemList from "../ItemList";
import ItemDetails from "../Details/ItemDetails";

const Row = ({childrenList, childrenDetails}) => {

  return (
    <div className="row mb2">
      <div className="col-md-6">
        {childrenList}
      </div>
      <div className="col-md-6">
        {childrenDetails}
      </div>
    </div>
  );
}

export default Row;