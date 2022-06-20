import React, {useEffect, useState} from "react";
import {api} from "../../services/swapi-service";
import "./style_persom_details.css";
import Loader from "../Loader";

const PersonDetails = (props) => {
    const {personId} = props;
    const [person, setPerson] = useState({people: [], loading: true, error: false});

    const {
        id,
        name,
        gender,
        birthYear,
        eyeColor
    } = person.people;

    useEffect(() => {
            api.getPerson(personId)
                .then((person) => {
                    setPerson({
                        people: person,
                        loading: false,
                        error: false
                    });
                })
                .catch(() => {
                    setPerson({
                        people: [],
                        loading: false,
                        error: true
                    })
                })
    }, [personId]);

    if (person.loading) {
        return (
            <ul className="item-list list-group">
                <Loader/>
            </ul>
        )
    }

    return (
        <div className="person-details card">
            <img className="person-image"
                 src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>

            <div className="card-body">
                <h4>{name} {id}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year</span>
                        <span>{birthYear}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color</span>
                        <span>{eyeColor}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default PersonDetails;