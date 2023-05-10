import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  const getFetch = async () => {
    setState({ ...state, isLoading: true });

    const resp = await fetch(url);
    const data = await resp.json();

    setState({ ...state, data, isLoading: false });
    console.log(data);
  };
  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    ...state,
    state,
  };
};

export default useFetch;
