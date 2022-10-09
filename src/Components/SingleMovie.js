import { useQuery } from "react-query";
import { NavLink, useParams } from "react-router-dom";

const SingleMovie = () => {
  const { id } = useParams();
  console.log(id);

  const { isLoading, error, data } = useQuery('repoData', () =>
     fetch(`https://movie-task.vercel.app/api/movie?movieId=${id}`).then(res =>
       res.json()
     )
   )
 
   if (isLoading) return 'Loading...';
 
   if (error) return 'An error has occurred: ' + error.message;

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={`https://image.tmdb.org/t/p/original${data.data.backdrop_path}`} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{data.data?.original_title
}</p>
          <p className=""></p>
          <p className="card-text">{data.data?.release_date}</p>
          <p className="card-text">{data.data?.Genre}</p>
          <p className="card-text">{data.data?.vote_average} / 10</p>
          <p className="card-text">{data.data.vote_count}</p>
          <p className="card-text">{data.data.popularity}</p>
          <p className="card-text">{data.data.overview}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;