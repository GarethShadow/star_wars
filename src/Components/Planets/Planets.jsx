import React, {useState} from "react";
import {useItemsList} from "../../hooks/useItemsList";
import {getAllPlanets} from "../../api/api";
import Row from "../Row";
import ItemList from "../ItemList";
import PlanetsDetails from "../Details/PlanetDetails";

const Planets = () => {
    const [selectedId, setSelectedId] = useState(1);

    const {
        itemList,
        isLoading,
        error
    } = useItemsList(getAllPlanets);


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
                <PlanetsDetails id={selectedId}/>
            }
        />
    );
};

export default Planets;