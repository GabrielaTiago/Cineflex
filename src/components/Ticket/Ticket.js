import { useState, useEffect  } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Ticket() {
    const location = useLocation();
    const info = location.state;
    const [seat, setSeat] = useState([]);

    useEffect(() => {setSeat(info.number)},[]);
    return (
        <>
            <header><h1>CINEFLEX</h1></header>
            <main>
                <div className="select"><h4>Pedido feito com sucesso!</h4></div>
                <div className="ticket">
                    <h6>Filme e sessão</h6>
                    <p>Filme: {}</p>
                    <p>Sessão: {}</p>
                </div>
                <div className="ticket">
                    <h6>Ingressos</h6>
                     {seat.map((value) =><p>Assento {value}</p>)}
                </div>
                <div className="ticket">
                    <h6>Comprador</h6>
                    <p>Nome: {info.name}</p>
                    <p>CPF: {info.cpf}</p>
                </div>
                <Link to="/">
                    <button>Voltar para a Home</button>
                </Link>
            </main>
        </>
    );
}