import { TMovie } from "@/types/movies";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IMoviePosterProps {
  movie: TMovie;
}

const MoviePoster = ({ movie }: IMoviePosterProps) => {
  const { title, slug, image, id } = movie;

  return (
    <div className="flex flex-col items-center rounded-[5px] w-[200px] h-[380px] bg-[#1a1a1a]">
      <Image
        src={image}
        width={200}
        height={285}
        alt="movie-poster"
        className="object-cover rounded-t-[5px] w-[200px] h-[285px] mb-[10px]"
      />
      <h1 className="text-sm tracking-wider">{title}</h1>
      <p className="text-xs opacity-30">{slug}</p>
      <Link
        href={`/movies/${id}`}
        className="no-underline rounded-[5px] border-white py-[2px] px-[11px] text-xs border-solid border-[1px] mt-[13px] opacity-30 hover:opacity-100 cursor-pointer hover:text-primary hover:border-primary"
      >
        상세정보
      </Link>
    </div>
  );
};

export default MoviePoster;
