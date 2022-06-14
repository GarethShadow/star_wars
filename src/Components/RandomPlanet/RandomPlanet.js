import React, {useEffect, useState} from "react";
import {api} from "../../services/swapi-service";
import "./style_random_planet.css";
import Loader from "../Loader";
import ErrorIndicator from "../ErrorIndicator";
import PlanetView from "../PlanetView";

const RandomPlanet = () => {
    const [planet, setPlanet] = useState({});
    const [loader, setLoader] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const id = Math.floor(Math.random() * 20) + 3;
        let mount = true;
        let interval = null;
        api.getPlanet(id)
            .then((planet) => {
                interval = setInterval(() => {
                    if (mount) {
                        setPlanet({
                            ...planet
                        });
                        setLoader(false);
                    }
                }, 2500);
            })
            .catch(() => {
                setError(true);
                setLoader(false);
            });
        return () => {
            mount = false;
            clearInterval(interval);
        };
    }, [planet]);

    console.log("Planet >>> ", planet.id);

    if (loader) {
        return (
            <div className="random-planet jumbotron rounded">
                <Loader/>
            </div>
        );
    }

    if (error) {
        return (
            <div className="random-planet jumbotron rounded">
                <ErrorIndicator/>
            </div>
        );
    }

    return (
        <div className="random-planet jumbotron rounded">
            <PlanetView planet={planet}/>
        </div>

    );
};

export default RandomPlanet;