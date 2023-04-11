import React from "react";
import PeopleDetails from "../../Components/Details/PersonDetails";
import {useParams} from "react-router-dom";

const PersonDetailsPage = () => {
    const {id} = useParams();

    return <PeopleDetails id={id}/>
};

export default PersonDetailsPage;