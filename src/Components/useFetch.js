import { useState, useEffect } from "react";

// setting the api link
export const API_URL = `https://movie-task.vercel.app/api/`;



const useFetch = (apiParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ show: "false", msg: '' });
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.data?.page <= 1) {
        setIsLoading(false);
        setMovie(data.data.results);
        setIsError({ show: "false", msg: "" });
      } else {
        setIsError({ show: "true", msg: data.Error });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // debouncing in react js
  useEffect(() => {
    const S_PATH = `search?page=1${apiParams}`;
    const P_PATH = `popular?page=1`;
    const PATH = (apiParams === "&query=") ? P_PATH : S_PATH;
    let timeOut = setTimeout(() => {
      getMovie(API_URL + PATH);
    }, 1000);
    console.log("set");
    return () => {
      clearTimeout(timeOut);
      console.log("clear");
    };
  }, [apiParams]);

  return { isLoading, isError, movie };
};

export default useFetch;