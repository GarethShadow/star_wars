import {useEffect, useState} from "react";
import {getPersonImage} from "../api/api";

export const useItemDetails = (getData, id) => {
    const [details, setDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [image, setImage] = useState(null);

    useEffect(() => {
        getData(id)
            .then((item) => {
                setDetails(item);
                setImage(getPersonImage(item.id.toString()))
                setIsLoading(false);
                setError(false);
            })
            .catch(() => {
                setDetails({});
                setImage(null);
                setIsLoading(false);
                setError(true);
            })
    }, [id]);

    return {details, isLoading, error, image};
}