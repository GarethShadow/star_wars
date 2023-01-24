import React, {useEffect, useState} from "react";

export const useItemsList = (getData) => {
    const [itemList, setItemList] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        getData()
            .then((itemList) => {
                setItemList(itemList);
                setIsLoading(false);
                setError(false);
            })
            .catch(() => {
                setItemList(null);
                setIsLoading(false);
                setError(true);
            });
    }, []);

    return {itemList, isLoading, error};
}