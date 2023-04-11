import React from "react";
import {useItemDetails} from "../../../hooks/useItemDetails";
import {getStarship, getStarsipImage} from "../../../api/api";
import ItemDetails from "../ItemDetails";

const StarshipDetails = ({id}) => {

    const {
        details: {
            name,
            model,
            length,
            costInCredits
        },
        image,
        isLoading: isLoadingDetails,
        error: errorDetails
    } = useItemDetails(getStarship, getStarsipImage, id);

    return <ItemDetails
        title={name}
        itemTop={"Model:"}
        itemMiddle={"Length:"}
        itemBottom={"Cost:"}
        labelTop={model}
        labelMiddle={length}
        labelBottom={costInCredits}
        image={image}
        loading={isLoadingDetails}
        error={errorDetails}
    />;
};

export default StarshipDetails;