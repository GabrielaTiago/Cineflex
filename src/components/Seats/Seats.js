import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Footer from '../Schedule/Footer';

function IndividualSeat({ seat, status }) {
    const [selected, setSelected] = useState(false);
    const select = `seat ${selected ? "green" : ""}`;

    return (
        <>
            {status ?
                <div className={select} onClick={() => setSelected(!selected)}>
                    <h6>{seat}</h6>
                </div>
                :
                <div className="seat yellow">
                    <h6>{seat}</h6>
                </div>}
        </>
    );
}

export default function Seats() {
    const { idSeats } = useParams();
    const [seats, setSeats] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSeats}/seats`);

        promise.then(response => {
            setSeats(response.data.seats);
        })
    }, [])

    return (
        <>
            <header>CINEFLEX</header>
            <main>
                <div className="select"><h3>Selecione o(s) assento(s)</h3></div>
                <div className="seats">
                    {seats.map((seat, index) => <IndividualSeat hey={index} seat={seat.name} status={seat.isAvailable}></IndividualSeat>)}
                </div>
                <div className="status">
                    <div className="status a"><div className="seat green"></div>Selcionado</div>
                    <div className="status a"><div className="seat"></div>Disponível</div>
                    <div className="status a"><div className="seat yellow"></div>Indisponível</div>
                </div>
                <form>
                    <div className="forms">
                        <label>Nome do comprador:</label>
                        <input type="text" placeholder="Digite seu nome..." />
                        <label>CPF do comprador:</label>
                        <input type="text" placeholder="Digite seu CPF..." />
                    </div>

                    <input type="submit" value="Reservar assento(s)" />
                </form>
            </main>
            <Footer></Footer>
        </>
    );
}