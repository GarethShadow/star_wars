import React, {useState} from "react";
import "./style_app.css";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import Button from "../Button";
import ErrorButton from "../ErrorButton";
import ErrorBoundry from "../ErroBoundry";
import {api} from "../../services/swapi-service";
import PeoplePage from "../PeoplePage";

const App = () => {
    const [showRandomPlanet, setShowRandomPlanet] = useState(true);
    const [selectedPerson, setSelectedPerson] = useState(1);

    const toggleRandomPlanet = () => setShowRandomPlanet(!showRandomPlanet);

    const onPersonSelected = (id) => {
        setSelectedPerson(id);
    }
    console.log('Planet', api.getAllPlanets());
    console.log('Person', api.getAllPersons());
    console.log('getAllStarships', api.getAllStarships());

    return (
        <ErrorBoundry>
            <div className="app__star-wars">
                <Header/>
                {showRandomPlanet ? (
                    <RandomPlanet/>
                ) : null}
                <Button text={'Toggle Random Planet'} functionClick={toggleRandomPlanet}/>
                <ErrorButton/>
                <PeoplePage getData={api.getAllPersons} onItemSelectir={onPersonSelected} personId={selectedPerson}/>
                {/*test block*/}
                <div style={{marginTop: "30px"}} className="row mb2">
                    <div className="col-md-6">
                        <ItemList getData={api.getAllPlanets} onItemSelectir={onPersonSelected}/>
                    </div>
                    <div className="col-md-6">
                        Hello Plants
                    </div>
                </div>

                <div style={{marginTop: "30px"}} className="row mb2">
                    <div className="col-md-6">
                        <ItemList getData={api.getAllStarships} onItemSelectir={onPersonSelected}/>
                    </div>
                    <div className="col-md-6">
                        Hello Starships
                    </div>
                </div>
            </div>
        </ErrorBoundry>
    );
};

export default App;
