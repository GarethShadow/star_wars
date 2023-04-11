import React, {useState} from "react";
import Row from "../Row";
import {useItemsList} from "../../hooks/useItemsList";
import {getAllPeople} from "../../api/api";
import ItemList from "../ItemList";
import PeopleDetails from "../Details/PersonDetails";


const People = () => {
  const [selectedId, setSelectedId] = useState(1);

  const {
    itemList,
    isLoading,
    error
  } = useItemsList(getAllPeople);

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
        <PeopleDetails id={selectedId}/>
      }
    />
  );
};

export default People;