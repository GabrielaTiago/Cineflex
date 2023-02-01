import { createContext, useContext, useState, useMemo } from "react";

const MoviesContext = createContext();

export const useMoviesContext = () => {
  return useContext(MoviesContext);
};

export function MoviesContextProvider({ children }) {
  const [movieData, setMovieData] = useState({
    poster: "",
    title: "",
    schedule: "",
    weekday: "",
    day: "",
    ids: [],
    number: [],
    name: "",
    cpf: "",
  });

  const contextValue = useMemo(() => {
    return { movieData, setMovieData };
  }, [movieData, setMovieData]);

  return (
    <MoviesContext.Provider value={contextValue}>
      {children}
    </MoviesContext.Provider>
  );
}
