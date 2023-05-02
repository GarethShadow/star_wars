import React, {useState} from "react";
import Row from "../Row";
import {useItemsList} from "../../hooks/useItemsList";
import {getAllPeople} from "../../api/api";
import ItemList from "../ItemList";
import PeopleDetails from "../Details/PersonDetails";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import paths from "../../AppRouter/paths";


const People = () => {
  const [selectedId, setSelectedId] = useState(1);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const person = searchParams.get("person");

  const {
    itemList,
    isLoading,
    error
  } = useItemsList(getAllPeople);

  const onItemSelected = (id) => {
    navigate(`${paths.people}?person=${id}`);
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
        <PeopleDetails id={person ? person : selectedId}/>
      }
    />
  );
};

export default People;