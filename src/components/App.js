import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Home/HomeScreen";
import Schedule from "./Schedule/Schedule";
import Seats from "./Seats/Seats";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />}/>
                <Route path="/sessao/:idMovies" element={<Schedule/>}/>
                <Route path="/sessao/:idMovies/:idSection" element={<Seats/>}/>
            </Routes>
        </BrowserRouter>
    );
}