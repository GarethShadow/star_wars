import React, {useEffect, useRef, useState} from "react";
import {api} from "../../services/swapi-service";
import "./style_item_list.css";
import Loader from "../Loader";
import ErrorIndicator from "../ErrorIndicator";

const ItemList = ({onItemSelectir}) => {
    const [peopleList, setPeopleList] = useState({people: [], loading: true, error: false});

    useEffect(() => {
        api.getAllPersons()
            .then((people) => {
                setPeopleList({
                    people: people,
                    loading: false,
                    error: false
                });
            })
            .catch(() => {
                setPeopleList({
                    people: [],
                    loading: false,
                    error: true
                })
            })
    }, []);

    if (peopleList.loading) {
        return (
            <ul className="item-list list-group">
                <Loader/>
            </ul>
        );
    }

    if (peopleList.error) {
        return (
            <div>
                <ErrorIndicator />
            </div>
        );
    }

    return (
        <ul className="item-list list-group">
            {peopleList.people.map((item) => (
                <li className="list-group-item" key={item.id} onClick={() => onItemSelectir(item.id)}>
                    {item.name}
                </li>
            ))}
        </ul>
    );
};

export default ItemList;