import React, {useEffect, useState} from "react";
import {api} from "../../services/swapi-service";
import "./style_random_planet.css";
import Loader from "../Loader";
import ErrorIndicator from "../ErrorIndicator";
import PlanetView from "../PlanetView";

const RandomPlanet = () => {
    const [planet, setPlanet] = useState({planet: {}, loader: true, error: false});

    useEffect(() => {
        const id = Math.floor(Math.random() * 20) + 3;
        let mount = true;
        let interval = null;
        api.getPlanet(id)
            .then((planet) => {
                interval = setInterval(() => {
                    if (mount) {
                        setPlanet({
                            planet: {...planet},
                            loader: false,
                            error: false
                        });
                    }
                }, 2500);
            })
            .catch(() => {
                if(mount) {
                    setPlanet({
                        planet: {},
                        loader: false,
                        error: true
                    });
                }

            });
        return () => {
            mount = false;
            clearInterval(interval);
        };
    }, [planet]);

    if (planet.loader) {
        return (
            <div className="random-planet jumbotron rounded">
                <Loader/>
            </div>
        );
    }

    if (planet.error) {
        return (
            <div className="random-planet jumbotron rounded">
                <ErrorIndicator/>
            </div>
        );
    }

    return (
        <div className="random-planet jumbotron rounded">
            <PlanetView planet={planet.planet}/>
        </div>

    );
};

export default RandomPlanet;