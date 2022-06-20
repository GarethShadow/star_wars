import React, {useState} from "react";
import "./style_app.css";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import Button from "../Button";

const App = () => {
    const [showRandomPlanet, setShowRandomPlanet] = useState(true);
    const [selectedPerson, setSelectedPerson] = useState(1);

    const toggleRandomPlanet = () => setShowRandomPlanet(!showRandomPlanet);

    const onPersonSelected = (id) => {
        setSelectedPerson(id);
    }

    return (
        <div className="app__star-wars">
            <Header/>
            {showRandomPlanet? (
                <RandomPlanet/>
            ) : null}
            <Button text={'Toggle Random Planet'} functionClick={toggleRandomPlanet}/>
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onItemSelectir={onPersonSelected}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={selectedPerson}/>
                </div>
            </div>
        </div>
    );
};

export default App;
