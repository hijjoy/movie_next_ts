"use client";

import Link from "next/link";
import React from "react";
import { SiThemoviedatabase } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full h-14">
      <h1 className="pl-10 mb-1">
        <SiThemoviedatabase size={30} />
      </h1>
      <nav className="pr-10 space-x-7">
        <Link href="/">Home</Link>
        <Link href="/movies">Movies</Link>
        <Link href="/post">Post</Link>
      </nav>
    </div>
  );
};

export default Navbar;
