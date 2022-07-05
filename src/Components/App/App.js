import React, {useState} from "react";
import "./style_app.css";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ItemList from "../ItemList";
import PersonDetails from "../ItemDetails";
import Button from "../Button";
import ErrorButton from "../ErrorButton";
import ErrorBoundry from "../ErroBoundry";
import {api} from "../../services/swapi-service";
import PeoplePage from "../PeoplePage";
import ItemDetails, {Record} from "../ItemDetails/ItemDetails";
import Row from "../Row";

const App = () => {
    const [showRandomPlanet, setShowRandomPlanet] = useState(true);
    const [selectedPerson, setSelectedPerson] = useState(1);
    const {
        getPerson,
        getStarship,
        getPersonImage,
        getStarshipImage
    } = api;

    const toggleRandomPlanet = () => setShowRandomPlanet(!showRandomPlanet);

    const onPersonSelected = (id) => {
        setSelectedPerson(id);
    }

    const personDetails = (<ItemDetails getData={getPerson} itemId={11} getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>);

    const starshipDetails = (<ItemDetails getData={getStarship} itemId={5} getImageUrl={getStarshipImage}>
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
    </ItemDetails>);

    return (
        <ErrorBoundry>
            <div className="app__star-wars">
                <Header/>
                {showRandomPlanet ? (
                    <RandomPlanet/>
                ) : null}
                <Button text={'Toggle Random Planet'} functionClick={toggleRandomPlanet}/>
                <ErrorButton/>
                <PeoplePage onItemSelectir={onPersonSelected} personId={selectedPerson}/>
                <Row left={personDetails} right={starshipDetails}/>
            </div>
        </ErrorBoundry>
    );
};

export default App;
