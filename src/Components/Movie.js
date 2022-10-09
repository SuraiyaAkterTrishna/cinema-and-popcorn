import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";

const imgUrl = "https://image.tmdb.org/t/p/original";

const Movie = () => {
  const { movie, isLoading } = useGlobalContext();
  if (isLoading) {
    return <div className="loading">Loading....</div>;
  }

  return (
    <>
      <section className="movie-page">
        <div className="grid grid-4-col">
          {movie
            ? movie.map((data) => {
                const { id, original_title, poster_path } = data;
                const movieName = original_title.substring(0, 15);
                const poster = (poster_path === null)? 'https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg':  imgUrl+poster_path;

                return (
                  <NavLink to={`movie/${id}`} key={id}>
                    <div className="card">
                      <div className="card-info">
                        <h2>
                          {movieName.length > 13
                            ? `${movieName}...`
                            : movieName}
                        </h2>
                        <img src={poster} alt="#" />
                      </div>
                    </div>
                  </NavLink>
                );
              })
            : ""}
        </div>
      </section>
    </>
  );
};

export default Movie;