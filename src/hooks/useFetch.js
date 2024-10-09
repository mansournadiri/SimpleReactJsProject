import { useEffect, useState } from "react";

export const useFetch = (apiPath, queryText = "") => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryText}`;
  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(url);
      const json = await res.json();
      setData(json.results);
    }
    fetchMovies();
  }, [url]);
  return { data };
};
