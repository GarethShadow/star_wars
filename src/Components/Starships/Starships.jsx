import React, {useState} from "react";
import Row from "../Row";
import {getAllStarships, getStarship, getStarsipImage} from "../../api/api";
import {useItemsList} from "../../hooks/useItemsList";
import {useItemDetails} from "../../hooks/useItemDetails";
import ItemList from "../ItemList";
import ItemDetails from "../ItemDetails";

const Starships = () => {
    const [selectedId, setSelectedId] = useState(2);

    const {
        itemList,
        isLoading,
        error
    } = useItemsList(getAllStarships);
    const {
        details,
        image,
        isLoading: isLoadingDetails,
        error: errorDetails
    } = useItemDetails(getStarship, getStarsipImage, selectedId);


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
                    title={details.name}
                    itemTop={"Model:"}
                    itemMiddle={"Length:"}
                    itemBottom={"Cost:"}
                    labelTop={details.model}
                    labelMiddle={details.length}
                    labelBottom={details.costInCredits}
                    image={image}
                    loading={isLoadingDetails}
                    error={errorDetails}
                />
            }
        />
    );
}

export default Starships;