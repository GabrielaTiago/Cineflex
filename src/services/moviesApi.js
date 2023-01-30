import api from "./api";

export function getMovies() {
  const response = api.get("/movies");

  return response;
}

export function getSessions(id) {
  const response = api.get(`/movies/${id}/showtimes`);

  return response;
}
