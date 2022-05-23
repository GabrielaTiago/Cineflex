import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Forms from "./Forms";
import Footer from '../Schedule/Footer';

// function piked ({selected, id}){
//     const arr = [];

//     return(
//         <>
//             {!selected ? arr.push(id) : ""}
//             {console.log(arr)}
//         </>
//     );

// }


function IndividualSeat({ seat, status, id, info, setInfo }) {
    const [selected, setSelected] = useState(false);
    const select = `seat ${selected ? "green" : ""}`;

    return (
        <>
            {status ?
                <div className={select} onClick={() => {
                    setSelected(!selected);
                    const newInfo = {...info};
                    console.log(newInfo);
                    newInfo.ids.push(id)
                    setInfo(newInfo);
                }}>
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
    const [info, setInfo] = useState({ ids: [], name: '', cpf: '' });

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSeats}/seats`);

        promise.then(response => {
            setSeats(response.data.seats);
        })
    }, []);

    return (
        <>
            <header><h1>CINEFLEX</h1></header>
            <main>
                <div className="select"><h3>Selecione o(s) assento(s)</h3></div>
                <div className="seats">
                    {seats.map((seat, index) => <IndividualSeat
                        hey={index}
                        seat={seat.name}
                        status={seat.isAvailable}
                        id={seat.id}
                        info={info}
                        setInfo={setInfo}>
                    </IndividualSeat>)}
                </div>
                <div className="status">
                    <div className="status a"><div className="seat green"></div>Selcionado</div>
                    <div className="status a"><div className="seat"></div>Disponível</div>
                    <div className="status a"><div className="seat yellow"></div>Indisponível</div>
                </div>
                <Forms info={info} setInfo={setInfo}/>
            </main>
            <Footer></Footer>
        </>
    );
}