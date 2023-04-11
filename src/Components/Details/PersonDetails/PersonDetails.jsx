import React from "react";
import ItemDetails from "../ItemDetails";
import {useItemDetails} from "../../../hooks/useItemDetails";
import {getPerson, getPersonImage} from "../../../api/api";
import {useParams} from "react-router-dom";

const PersonDetails = ({id}) => {
    // const {id} = useParams();

    const {
        details: {
            name,
            gender,
            birthYear,
            eyeColor
        },
        image,
        isLoading: isLoadingDetails,
        error: errorDetails
    } = useItemDetails(getPerson, getPersonImage, id);


    return <ItemDetails
        title={name}
        itemTop={"Gender:"}
        itemMiddle={"Birth Year:"}
        itemBottom={"Eye Color:"}
        labelTop={gender}
        labelMiddle={birthYear}
        labelBottom={eyeColor}
        image={image}
        loading={isLoadingDetails}
        error={errorDetails}
    />
};

export default PersonDetails;