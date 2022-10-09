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

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img
            src={`https://image.tmdb.org/t/p/original${data.data.backdrop_path}`}
            alt=""
          />
        </figure>
        <div className="card-content">
          <p className="title">{data.data?.original_title}</p>
          <ul className="genres">
            {data.data?.genres.map((genre) => (
              <li key={genre.name}>{genre.name}</li>
            ))}
          </ul>
          <p className="card-text">
            <span className="color">{data.data?.overview}</span>
          </p>
          <p className="card-text">
            Release Date:{" "}
            <span className="color">{data.data?.release_date}</span>
          </p>
          <p className="card-text">Companies:</p>
          <ul className="companies">
            {data.data?.production_companies.map((company) => (
              <li key={company.name}>{company.name}</li>
            ))}
          </ul>
          <p className="card-text">
            Ratting:{" "}
            <span className="color">{data.data?.vote_average} / 10</span>
          </p>
          <p className="card-text">
            Vote: <span className="color">{data.data.vote_count}</span>
          </p>
          <p className="card-text">
            Popularity: <span className="color">{data.data.popularity}</span>
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
