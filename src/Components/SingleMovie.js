import { useQuery } from "react-query";
import { NavLink, useParams } from "react-router-dom";

const SingleMovie = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(`https://movie-task.vercel.app/api/movie?movieId=${id}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const {backdrop_path, original_title, genres, overview, release_date, production_companies, vote_average, vote_count, popularity, production_countries} = data.data;
  console.log(data.data);

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            alt=""
          />
        </figure>
        <div className="card-content">
          <p className="title">{original_title}</p>
          <ul className="genres">
            {genres.map((genre) => (
              <li key={genre.name}>{genre.name}</li>
            ))}
          </ul>
          <p className="card-text">
            <span className="color">{overview}</span>
          </p>
          <p className="card-text">
            Release Date:{" "}
            <span className="color">{release_date}</span>
          </p>
          <p className="card-text">Countries:</p>
          <ul className="genres">
            {production_countries.map((country) => (
              <li key={country.name}>{country.name}</li>
            ))}
          </ul>
          <p className="card-text">Companies:</p>
          <ul className="genres">
            {production_companies.map((company) => (
              <li key={company.name}>{company.name}</li>
            ))}
          </ul>
          <p className="card-text">
            Ratting:{" "}
            <span className="color">{vote_average} / 10</span>
          </p>
          <p className="card-text">
            Vote: <span className="color">{vote_count}</span>
          </p>
          <p className="card-text">
            Popularity: <span className="color">{popularity}</span>
          </p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
