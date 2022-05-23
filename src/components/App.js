import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Home/HomeScreen";
import Schedule from "./Schedule/Schedule";
import Seats from "./Seats/Seats";
import Ticket from "./Ticket/Ticket";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />}/>
                <Route path="/sessao/:idMovies" element={<Schedule/>}/>
                <Route path="/assento/:idSeats" element={<Seats/>}/>
                <Route path="/sucesso" element={<Ticket/>}/>
            </Routes>
        </BrowserRouter>
    );
}