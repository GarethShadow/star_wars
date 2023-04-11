import React from "react";
import ItemDetails from "../ItemDetails";
import {useItemDetails} from "../../../hooks/useItemDetails";
import {getPerson, getPersonImage} from "../../../api/api";
import {useNavigate} from "react-router-dom";
import paths from "../../../AppRouter/paths";

const PersonDetails = ({id}) => {
  const navigate = useNavigate()

  const handleOpenDetails = () => {
    navigate(`${paths.people}/${id}`);
  };

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
    handleClickInfo={handleOpenDetails}
  />
};

export default PersonDetails;