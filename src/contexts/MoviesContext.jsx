import { createContext, useContext } from "react";

const MoviesContext = createContext();

export const useMoviesContext = () => {
  return useContext(MoviesContext);
};

export function MoviesContextProvider({ children }) {
  return <MoviesContext.Provider>{children}</MoviesContext.Provider>;
}
