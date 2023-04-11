import React, {useState} from "react";
import Row from "../Row";
import {getAllStarships} from "../../api/api";
import {useItemsList} from "../../hooks/useItemsList";
import ItemList from "../ItemList";
import StarshipDetails from "../Details/StarshipDetails";

const Starships = () => {
  const [selectedId, setSelectedId] = useState(2);

  const {
    itemList,
    isLoading,
    error
  } = useItemsList(getAllStarships);

  const onItemSelected = (id) => {
    setSelectedId(id);
  }

  return (
    <Row
      childrenList={
        <ItemList
          data={itemList}
          loading={isLoading}
          error={error}
          handleClick={onItemSelected}
        />
      }
      childrenDetails={
        <StarshipDetails id={selectedId}/>
      }
    />
  );
}

export default Starships;