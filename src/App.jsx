import { BrowserRouter } from "react-router-dom";
import { MoviesContextProvider } from "./contexts/MoviesContext";
import { AppRoutes } from "./routes";

export function App() {
  return (
    <BrowserRouter>
      <MoviesContextProvider>
        <AppRoutes />
      </MoviesContextProvider>
    </BrowserRouter>
  );
}
