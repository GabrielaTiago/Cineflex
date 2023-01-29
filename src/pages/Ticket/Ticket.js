import { useState, useEffect  } from "react";
import { Link, useLocation } from "react-router-dom";

export function Ticket() {
    const location = useLocation();
    const info = location.state;
    const [seat, setSeat] = useState([]);

    useEffect(() => {setSeat(info.number)},[]);
    return (
        <>
            <header><h1>CINEFLEX</h1></header>
            <main>
                <div className="select"><h4 className="sucess">Pedido feito com sucesso!</h4></div>
                <div className="ticket">
                    <p className="tittle">Filme e sessão</p>
                    <p>Filme: {}</p>
                    <p>Sessão: {}</p>
                </div>
                <div className="ticket">
                    <p className="tittle">Ingressos</p>
                     {seat.map((value) =><p>Assento {value}</p>)}
                </div>
                <div className="ticket">
                    <p className="tittle">Comprador</p>
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