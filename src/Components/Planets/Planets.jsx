import React, {useState} from "react";
import {useItemsList} from "../../hooks/useItemsList";
import {getAllPlanets} from "../../api/api";
import Row from "../Row";
import ItemList from "../ItemList";
import PlanetsDetails from "../Details/PlanetDetails";
import {useNavigate, useSearchParams} from "react-router-dom";
import paths from "../../AppRouter/paths";

const Planets = ({itemSelected}) => {
  const [selectedId, setSelectedId] = useState(1);
  const navigate = useNavigate()
  const [searchParams] = useSearchParams();
  const planet = searchParams.get("planet")

  const {
    itemList,
    isLoading,
    error
  } = useItemsList(getAllPlanets);


  const onItemSelected = (id) => {
    setSelectedId(id);
    navigate(`${paths.planets}?planet=${id}`);
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
        <PlanetsDetails id={planet ? planet : selectedId}/>
      }
    />
  );
};

export default Planets;