import React from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import PlanetsPage from "../pages/PlanetsPage/PlanetsPage";
import paths from "./paths";
import StarshipsPage from "../pages/StarshipsPage";
import PeoplePage from "../pages/PeoplePage";

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<HomePage/>} path={paths.home}/>
            <Route element={<PeoplePage/>}  path={paths.people}/>
            <Route element={<PlanetsPage/>} path={paths.planets}/>
            <Route element={<StarshipsPage/>} path={paths.starships}/>
        </Routes>
    );

}

export default AppRouter;