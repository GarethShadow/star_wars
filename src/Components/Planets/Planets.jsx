import React, {useState} from "react";
import {useItemsList} from "../../hooks/useItemsList";
import {getAllPlanets, getPlanet, getPlanetImage} from "../../api/api";
import {useItemDetails} from "../../hooks/useItemDetails";
import Row from "../Row";
import ItemList from "../ItemList";
import ItemDetails from "../ItemDetails";

const Planets = () => {
    const [selectedId, setSelectedId] = useState(1);

    const {
        itemList,
        isLoading,
        error
    } = useItemsList(getAllPlanets);

    const {
        details,
        image,
        isLoading: isLoadingDetails,
        error: errorDetails
    } = useItemDetails(getPlanet, getPlanetImage, selectedId);


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
                <ItemDetails
                    itemTop={"Population:"}
                    itemMiddle={"Rotation Period:"}
                    itemBottom={"Diameter:"}
                    labelTop={details.population}
                    labelMiddle={details.rotationPeriod}
                    labelBottom={details.diameter}
                    image={image}
                    loading={isLoadingDetails}
                    error={errorDetails}
                />
            }
        />
    );
};

export default Planets;