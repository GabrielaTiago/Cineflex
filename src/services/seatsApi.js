import api from "./api";

export function getSeats(id) {
  const response = api.get(`/showtimes/${id}/seats`);

  return response;
}

export function postSeats(body) {
  const response = api.post("/seats/book-many", body);

  return response;
}
