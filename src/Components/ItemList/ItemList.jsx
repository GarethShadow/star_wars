import React from "react";
import Loader from "../Loader";
import ErrorIndicator from "../ErrorIndicator";
import "./ItemList.styles.css"

const ItemList = ({data, loading, error, handleClick}) => {
  if (loading) {
    return (
      <ul className="item-list list-group">
        <Loader/>
      </ul>
    );
  }
  ;

  if (error) {
    return (
      <div>
        <ErrorIndicator/>
      </div>
    );
  }

  return (
    <ul className="item-list list-group">
      {data.map((item) => (
        <li className="list-group-item" key={item.id} onClick={() => handleClick(item.id)}>
          {item.name}
        </li>
      ))}
    </ul>
  );

}

export default ItemList;