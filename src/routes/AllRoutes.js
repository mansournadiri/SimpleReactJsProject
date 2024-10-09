import { Routes, Route, ScrollRestoration } from "react-router-dom";
import { MovieDetails, MovieList, Search, PageNotFound } from "../Pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path=""
          element={
            <MovieList apiPath="movie/now_playing" title="now playing" />
          }
        />
        <Route path="movie/:id" element={<MovieDetails />} />
        <Route
          path="movies/popular"
          element={<MovieList apiPath="movie/popular" title="popular" />}
        />
        <Route
          path="movies/top_rated"
          element={<MovieList apiPath="movie/top_rated" title="top rated" />}
        />
        <Route
          path="movies/upcoming"
          element={<MovieList apiPath="movie/upcoming" title="up coming" />}
        />
        <Route path="search" element={<Search apiPath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ScrollRestoration />
    </>
  );
};
