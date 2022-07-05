import React from "react";
import ItemList from "../ItemList";
import {api} from "../../services/swapi-service";
import WithData from "../HocHelpers";

const {
    getAllPersons,
    getAllPlanets,
    getAllStarships
} = api;

const PersonList = WithData(ItemList, getAllPersons);

const PlanetList = WithData(ItemList, getAllPlanets);

const StarshipsList = WithData(ItemList, getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipsList
};