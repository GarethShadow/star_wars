import React from "react";
import "./RandomPlanet.styled.css";
import Loader from "../Loader";
import ErrorIndicator from "../ErrorIndicator";
import PlanetView from "../PlanetView";
import {getPlanet} from "../../api/api";
import {useRandomPlanet} from "../../hooks/useRandomPlanet";

const RandomPlanet = () => {
    const {result, isLoading, error} = useRandomPlanet(getPlanet);

    if(isLoading) {
        return (
            <div className="random-planet jumbotron rounded">
                <Loader/>
            </div>
        )
    }

    if(error) {
        return  (
            <div className="random-planet jumbotron rounded">
                <ErrorIndicator/>
            </div>
        );
    }

    return (
        <div className="random-planet jumbotron rounded">
            <PlanetView planet={result}/>
        </div>
    );
}

export default RandomPlanet;