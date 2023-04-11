import React from "react";
import {useItemDetails} from "../../../hooks/useItemDetails";
import {getPlanet, getPlanetImage} from "../../../api/api";
import ItemDetails from "../ItemDetails";

const PlanetDetails = ({id}) => {

    const {
        details : {
            name,
            population,
            rotationPeriod,
            diameter
        },
        image,
        isLoading: isLoadingDetails,
        error: errorDetails
    } = useItemDetails(getPlanet, getPlanetImage, id);

    return <ItemDetails
        title={name}
        itemTop={"Population:"}
        itemMiddle={"Rotation Period:"}
        itemBottom={"Diameter:"}
        labelTop={population}
        labelMiddle={rotationPeriod}
        labelBottom={diameter}
        image={image}
        loading={isLoadingDetails}
        error={errorDetails}
    />
}

export default PlanetDetails;