import React from "react";
import {Routes, Route} from "react-router-dom";
import paths from "./paths";
import HomePage from "../pages/HomePage";
import PlanetsPage from "../pages/PlanetsPage/PlanetsPage";
import StarshipsPage from "../pages/StarshipsPage";
import PeoplePage from "../pages/PeoplePage";
import PeopleDetailsPage from "../pages/PersonDetailsPage";
import PlanetDetailsPage from "../pages/PlanetDetailsPage";
import StarshipDetailsPage from "../pages/StarshipDetailsPage";


const AppRouter = () => {
    return (
        <Routes>
            <Route element={<HomePage/>} path={paths.home}/>
            <Route element={<PeoplePage/>}  path={paths.people}/>
            <Route element={<PlanetsPage/>} path={paths.planets}/>
            <Route element={<StarshipsPage/>} path={paths.starships}/>
            <Route element={<PeopleDetailsPage/>} path={`${paths.people}/:id`} />
            <Route element={<PlanetDetailsPage/>} path={`${paths.planets}/:id`} />
            <Route element={<StarshipDetailsPage/>} path={`${paths.starships}/:id`} />
        </Routes>
    );
}

export default AppRouter;