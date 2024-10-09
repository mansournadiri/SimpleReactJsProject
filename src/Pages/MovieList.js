import React from "react";
import { Card } from "../Components";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);

  useTitle(title);
  return (
    <main>
      <section className="max-w-7x1 mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
