import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";

const imgUrl = "https://image.tmdb.org/t/p/original";

const Movie = () => {
  const { movie, isLoading } = useGlobalContext();
  const movieFilter = () => {
    return [...new Set(movie.map((item) => item.release_date))];
  };
  if (isLoading) {
    return <div className="loading">Loading....</div>;
  }

  return (
    <>
      <section className="movie-page">
        <div className="filter">
          <input
            className="dropdown"
            type="checkbox"
            id="dropdown"
            name="dropdown"
          />
          <label className="for-dropdown" for="dropdown">
            Select Year
          </label>
          <div className="section-dropdown">
            {movieFilter().map((year) => (
              <option className="link" value={year} key={year}>
                {year}
              </option>
            ))}
          </div>
        </div>
        <div className="grid grid-4-col">
          {movie
            ? movie.map((data) => {
                const { id, original_title, poster_path } = data;
                const poster =
                  poster_path === null
                    ? "https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg"
                    : imgUrl + poster_path;

                return (
                  <NavLink to={`movie/${id}`} key={id}>
                    <div className="card">
                      <div className="card-info">
                        <h2>{original_title}</h2>
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
