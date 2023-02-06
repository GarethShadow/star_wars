import React, {useState} from "react";
import Row from "../Row";
import {useItemsList} from "../../hooks/useItemsList";
import {getAllPeople, getPerson, getPersonImage} from "../../api/api";
import {useItemDetails} from "../../hooks/useItemDetails";
import ItemList from "../ItemList";
import ItemDetails from "../ItemDetails";


const People = () => {
    const [selectedId, setSelectedId] = useState(1);

    const {
        itemList,
        isLoading,
        error
    } = useItemsList(getAllPeople);

    const {
        details: {
            name,
            gender,
            birthYear,
            eyeColor
        },
        image,
        isLoading: isLoadingDetails,
        error: errorDetails
    } = useItemDetails(getPerson, getPersonImage, selectedId);

    const onItemSelected = (id) => {
        setSelectedId(id);
    }


    return (
        <Row
            childrenList={
                <ItemList
                    data={itemList}
                    loading={isLoading}
                    error={error}
                    handleClick={onItemSelected}
                />
            }
            childrenDetails={
                <ItemDetails
                    title={name}
                    itemTop={"Gender:"}
                    itemMiddle={"Birth Year:"}
                    itemBottom={"Eye Color:"}
                    labelTop={gender}
                    labelMiddle={birthYear}
                    labelBottom={eyeColor}
                    image={image}
                    loading={isLoadingDetails}
                    error={errorDetails}
                />
            }
        />
    );
};

export default People;