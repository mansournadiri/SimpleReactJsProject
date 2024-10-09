import { Card } from "../Components";
import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const Search = ({ apiPath }) => {
  const [searchParameters] = useSearchParams();
  const query = searchParameters.get("query");
  const { data: movies } = useFetch(apiPath, query);
  useTitle(`search ${query}`);
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
