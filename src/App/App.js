import React, {useState} from "react";
import ErrorBoundry from "../Components/ErrorBoundry";
import Header from "../Components/Header";
import RandomPlanet from "../Components/RandomPlanet";
import Button from "../Components/Buttom/Button";
import ErrorButton from "../Components/ErrorButton";
import "./App.styles.css";
import AppRouter from "../AppRouter";

const App = () => {
    const [showRandomPlanet, setShowRandomPlanet] = useState(true);

    const toggleRandomPlanet = () => setShowRandomPlanet(!showRandomPlanet)

    return (
        <div className="app__star-wars">
            <ErrorBoundry>
                <Header/>
                {showRandomPlanet &&
                    <RandomPlanet/>
                }
                <Button text={"Toggle Random Planet"} handleClick={toggleRandomPlanet}/>
                <ErrorButton/>
                <AppRouter />
            </ErrorBoundry>
        </div>
    );
};

export default App;
