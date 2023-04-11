import React from "react";
import {useItemDetails} from "../../../hooks/useItemDetails";
import {getPlanet, getPlanetImage} from "../../../api/api";
import ItemDetails from "../ItemDetails";
import paths from "../../../AppRouter/paths";
import {useNavigate} from "react-router-dom";

const PlanetDetails = ({id}) => {
  const navigate = useNavigate()

  const handleOpenDetails = () => {
    navigate(`${paths.planets}/${id}`);
  };

  const {
    details: {
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
    handleClickInfo={handleOpenDetails}
  />
}

export default PlanetDetails;