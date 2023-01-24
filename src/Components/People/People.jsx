import React, {useEffect, useState} from "react";
import Row from "../Row";
import {useItemsList} from "../../hooks/useItemsList";
import {getAllPeople, getPerson} from "../../api/api";
import {useItemDetails} from "../../hooks/useItemDetails";

const People = () => {
    const [selectedId, setSelectedId] = useState(1);

    const people = useItemsList(getAllPeople);
    const person = useItemDetails(getPerson, selectedId);

    const onItemSelected = (id) => {
        setSelectedId(id);
    }

    return <Row itemsList={people} itemDetails={person} selectedId={onItemSelected}/>
};

export default People;