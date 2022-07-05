import React, {useEffect, useState} from "react";
import "./style_item_list.css";
import Loader from "../Loader";
import ErrorIndicator from "../ErrorIndicator";

const ItemList = (props) => {
    const {getData, onItemSelectir, children: renderLabel} = props;

    const [itemList, setItemList] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        getData()
            .then((itemList) => {
                setItemList(itemList);
                setLoading(false);
                setError(false);
            })
            .catch(() => {
                setItemList(null);
                setLoading(false);
                setError(true);
            })
    }, []);

    if (loading) {
        return (
            <ul className="item-list list-group">
                <Loader/>
            </ul>
        );
    }

    if (error) {
        return (
            <div>
                <ErrorIndicator />
            </div>
        );
    }

    return (
        <ul className="item-list list-group">
            {itemList.map((item) => (
                <li className="list-group-item" key={item.id} onClick={() => onItemSelectir(item.id)}>
                    {renderLabel(item)}
                </li>
            ))}
        </ul>
    );
};

export default ItemList;