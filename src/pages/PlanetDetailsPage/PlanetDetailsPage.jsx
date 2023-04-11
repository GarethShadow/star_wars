import React from "react";
import PlanetsDetails from "../../Components/Details/PlanetDetails";
import {useParams} from "react-router-dom";

const PlanetDetailsPage = () => {
    const {id} = useParams();

    return <PlanetsDetails id={id}/>
};

export default PlanetDetailsPage;