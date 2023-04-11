import React from "react";
import {useParams} from "react-router-dom";
import StarshipDetails from "../../Components/Details/StarshipDetails";

const StarshipDetailsPage = () => {
    const {id} = useParams();

    return <StarshipDetails id={id}/>;
};

export default StarshipDetailsPage;