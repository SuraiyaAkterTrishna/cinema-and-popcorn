import React from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const { query, setQuery, isError } = useGlobalContext();
  return (
    <>
      <section className="mx-auto text-center my-12">
        <h2>Cinema & Popcorn</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              className="w-96 rounded-full border-none border-blue-400 px-6 py-3 text-2xl shadow-sm shadow-blue-500/50 outline-none mt-6"
              type="text"
              placeholder="search movie"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
        <div className="text-error mt-3 text-xl">
          <p>{isError.show && isError.msg}</p>
        </div>
      </section>
    </>
  );
};

export default Search;