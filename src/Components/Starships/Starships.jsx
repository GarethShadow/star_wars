import React, {useState} from "react";
import Row from "../Row";
import {getAllStarships} from "../../api/api";
import {useItemsList} from "../../hooks/useItemsList";
import ItemList from "../ItemList";
import StarshipDetails from "../Details/StarshipDetails";
import {useNavigate, useSearchParams} from "react-router-dom";
import paths from "../../AppRouter/paths";

const Starships = () => {
  const [selectedId, setSelectedId] = useState(2);
  const navigate = useNavigate()
  const [searchParams] = useSearchParams();
  const starship = searchParams.get("starship")

  const {
    itemList,
    isLoading,
    error
  } = useItemsList(getAllStarships);

  const onItemSelected = (id) => {
    navigate(`${paths.starships}?starship=${id}`);
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
        <StarshipDetails id={starship ? starship : selectedId}/>
      }
    />
  );
}

export default Starships;