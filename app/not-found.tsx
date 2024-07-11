import Link from "next/link";
import React from "react";
import { AiFillAlert } from "react-icons/ai";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center">
      <AiFillAlert size={35} color="#eb87a2" className="mt-72" />
      <h1 className="text-3xl font-semibold tracking-widest mt-[20px]">
        Not found
      </h1>
      <Link
        href={"/"}
        className="font-medium tracking-wider mt-[5px] opacity-70 hover:opacity-100 hover:text-[#eb87a2]"
      >
        click !
      </Link>
    </div>
  );
};

export default NotFoundPage;
