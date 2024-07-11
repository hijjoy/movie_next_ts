import { getDetailMovie } from "@/api/movie";
import Image from "next/image";
import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";

const MovieDetailPage = async ({ params }: { params: { id: string } }) => {
  const { data } = await getDetailMovie(params.id);
  const { title, image, slug, instructions, summary, creator } = data;
  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
      <AiFillThunderbolt
        size={35}
        color="#72d5cf"
        className="mt-20 mb-[10px]"
      />
      <h1 className="text-[26px] font-semibold tracking-wider mb-14">
        {title}
      </h1>
      <div className="relative flex animate-moveLeftToRight p-[10px] h-[318px] w-3/5 shadow-custom rounded-[20px] border-light_gray border border-solid">
        <Image
          src={image}
          width={200}
          height={285}
          alt="poster"
          className="object-cover p-[10px] border-r border-white border-dashed"
        />
        <div className="flex flex-col p-[20px]">
          <div className="flex items-baseline mb-6">
            <h3 className="mr-2 text-lg font-bold">{title}</h3>
            <p className="text-sm opacity-70">{slug}</p>
          </div>
          <span className="text-[15px]">{summary}</span>
          <p className="absolute text-xs right-5 bottom-5 opacity-70">
            creator {creator}
          </p>
        </div>
      </div>
      <div className="relative flex flex-col animate-moveRightToLeft my-[50px] w-3/5 shadow-custom rounded-[20px] border-light_gray border border-solid  py-[30px] px-[18px]">
        {instructions.split("\n").map((line, idx) => (
          <p className="p-3 text-[15px]" key={idx}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MovieDetailPage;
