import React from "react";
import {useItemDetails} from "../../../hooks/useItemDetails";
import {getStarship, getStarsipImage} from "../../../api/api";
import ItemDetails from "../ItemDetails";
import {useNavigate} from "react-router-dom";
import paths from "../../../AppRouter/paths";

const StarshipDetails = ({id}) => {
    const navigate = useNavigate()

    const handleOpenDetails = () => {
        navigate(`${paths.starships}/${id}`);
    };

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
        handleClickInfo={handleOpenDetails}
    />;
};

export default StarshipDetails;