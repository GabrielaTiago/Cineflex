import api from "./api";

export function getMovies() {
  const response = api.get("/movies");

  return response;
}
