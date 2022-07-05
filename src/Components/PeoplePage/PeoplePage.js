import React, {useState} from "react";
import {api} from "../../services/swapi-service";
import ItemList from "../ItemList";
import ItemDetails from "../ItemDetails";
import Row from "../Row";
import {Record} from "../ItemDetails/ItemDetails";

const PeoplePage = ({onItemSelectir, personId}) => {
    const renderItem = ({name, gender, birthYear}) => {
        return (<span>{name} ({gender}, {birthYear})</span>);
    }

    const itemList = (<ItemList getData={api.getAllPersons} onItemSelectir={onItemSelectir}>{renderItem}</ItemList>);
    const personDetails = <ItemDetails getData={api.getPerson} itemId={personId} getImageUrl={api.getPersonImage}>
        <Record field="Gender" label="Model"/>
        <Record field="Birth Year" label="Length"/>
        <Record field="Eye Color" label="Cost"/>
    </ItemDetails>;

    return (
        <Row left={itemList} right={personDetails}/>

    );
};

export default PeoplePage;