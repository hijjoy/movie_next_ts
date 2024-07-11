import { getMovies } from "@/api/movie";
import { TMovie } from "@/types/movies";
import React from "react";
import { AiFillAliwangwang } from "react-icons/ai";
import MovieList from "./_components/movieList";
import Link from "next/link";

const MoviePage = async () => {
  const { data } = await getMovies();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center mt-40">
        <AiFillAliwangwang size={50} color="#72d5cf" />
        <h2 className="mt-4 mb-2 text-xl font-semibold tracking-wide opacity-65 ">
          재밌고, 슬프고 감동적인
        </h2>
        <h1 className="text-4xl font-bold tracking-wide ">
          당신의 영화를 추천해주세요
        </h1>
        {/* <Link href={"/post"} className="w-[300px] opacity-90 text-center ">
          Share your favorite movie
        </Link> */}
      </div>
      <MovieList movies={data} />
    </div>
  );
};

export default MoviePage;
