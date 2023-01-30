import { Navigate, Route, Routes } from "react-router-dom";
import { HomeScreen, Schedule, Seats, Ticket } from "../pages";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/sessao/:idMovies" element={<Schedule />} />
      <Route path="/assento/:idSeats" element={<Seats />} />
      <Route path="/sucesso" element={<Ticket />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}
