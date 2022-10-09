import Movie from "./Movie";
import Search from "./Search";

const Home = () => {
    return (
        <>
      <div className="max-w-screen-2xl mx-auto p-9">
        <Search />
        <Movie />
      </div>
    </>
    );
};

export default Home;