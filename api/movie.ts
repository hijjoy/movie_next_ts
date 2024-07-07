import { AxiosResponse } from "axios";
import { Instance } from "./axiosInstance";
import { TMovie } from "@/types/movies";

function getMovies(): Promise<AxiosResponse<TMovie[]>> {
  return Instance.get("/movies");
}

function getDetailMovie(id: string | number): Promise<AxiosResponse<TMovie>> {
  return Instance.get(`/movies/${id}`);
}

export { getMovies, getDetailMovie };
