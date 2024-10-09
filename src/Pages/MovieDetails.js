import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardImage from "../assets/CardImage.jpg";
import { useTitle } from "../hooks/useTitle";

export const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : CardImage;
  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`;
  useEffect(() => {
    async function fetchMovieDetails() {
      const response = await fetch(url);
      const json = await response.json();
      setMovie(json);
    }
    fetchMovieDetails();
  });

  useTitle(movie.title);
  return (
    <main>
      <section>
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={image}
            alt={movie.title}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movie.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {movie.overview}
            </p>
            {movie.genres ? (
              <p className="my-7 flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="mr-2 border border-gray-200 rounded p-2 dark:text-white"
                  >
                    {genre.name}
                  </span>
                ))}
              </p>
            ) : (
              ""
            )}
            <div className="flex items-center">
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">
                {movie.vote_average}
              </p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <span className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
                {movie.vote_count} reviews
              </span>
            </div>
            <p className="my-4">
              <span className="mr-2 font-bold">Runtime:</span>
              <span>{movie.runtime} min.</span>
            </p>
            <p className="my-4">
              <span className="mr-2 font-bold">Release date:</span>
              <span>{movie.release_date}</span>
            </p>
            <p className="my-4">
              <span className="mr-2 font-bold">Budget:</span>
              <span>{movie.budget}</span>
            </p>
            <p className="my-4">
              <span className="mr-2 font-bold">IMDB Code:</span>
              <a
                href={`https://www.imdb.com/title/${movie.imdb_id}`}
                target="_blank"
                rel="noreferrer"
              >
                {movie.imdb_id}
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
