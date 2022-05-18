import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Home/HomeScreen";
import Movie from "./Movie/Movie";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />}/>
                <Route path="/movie" element={<Movie/>}/>
            </Routes>
        </BrowserRouter>
    );
}