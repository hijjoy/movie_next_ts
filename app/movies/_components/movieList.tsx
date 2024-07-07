import { TMovie } from "@/types/movies";
import React from "react";
import MoviePoster from "./moviePoster";

interface IMovieProps {
  movies: TMovie[];
}

const MovieList = ({ movies }: IMovieProps) => {
  return (
    <div className="flex flex-wrap justify-center w-8/12 h-full gap-10 mb-12 mt-36 ">
      {movies.map((e) => (
        <MoviePoster key={e.id} movie={e} />
      ))}
    </div>
  );
};

export default MovieList;
