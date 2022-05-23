import axios from 'axios';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


export default function Forms({info, setInfo}) {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    
    function form(event) {
        event.preventDefault();

        const newData = {...info};
        newData.name = name;
        newData.cpf = cpf;
        setInfo(newData);
        console.log(newData);

        const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", info);

        promise.then(() => navigate("/sucesso"));
    }

    return (
        <form onSubmit={form}>
            <div className="forms">
                <label>Nome do comprador:</label>
                <input type="text" placeholder="Digite seu nome..."
                    onChange={(e) => {setName(e.target.value)}}
                    value={name}
                    required />
                <label>CPF do comprador:</label>
                <input type="text" placeholder="Digite seu CPF..."
                    onChange={(e) => setCpf(e.target.value)}
                    value={cpf}
                    required
                    minLength={11}
                    maxLength={11}
                    pattern="\d*" />
            </div>

            <input type="submit" value="Reservar assento(s)" />
        </form>
    );
}