import {useEffect, useState} from "react";

export const useRandomPlanet = (getData) => {

  const [result, setResult] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mount = true;
    let interval = null;
    const id = Math.floor(Math.random() * 20) + 3;
    getData(id)
      .then((planet) => {
        interval = setInterval(() => {
          if (mount) {
            setResult(planet);
            setIsLoading(false);
            setError(false);
          }
        }, 2500);
      })
      .catch(() => {
        if (mount) {
          setResult({});
          setIsLoading(false);
          setError(true);
        }

      });

    return () => {
      mount = false;
      clearInterval(interval);
    };
  }, [result]);

  return {result, isLoading, error}
};


