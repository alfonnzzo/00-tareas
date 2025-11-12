import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
  });

  const getFetch = async () => {
    try {
      setState({ data: null, isLoading: true });

      const resp = await fetch(url);
      const data = await resp.json();
      setState({ data, isLoading: false });
    } catch (error) {
      console.log("Error al mostrar los personajes:", error);
      setState({ data: null, isLoading: false });
    }
  };

  useEffect(() => {
    getFetch();

    return () => {
      console.log("Desmonta el componente");
    };
  }, [url]);

  return state;
};
