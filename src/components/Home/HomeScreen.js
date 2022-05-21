import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function ImagePoster({ source, identification }) {
    const id = Number(identification);
    return (
        <div id={id} className="poster">
            <Link to={`/sessao/${id}`}>
                <img className="img-poster" alt="poster" src={source} />
            </Link>
        </div>
    );
}


export default function HomeScreen() {
    const [posters, setPosters] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promise.then(response => {
            setPosters([...response.data]);
        });
    }, []);
    return (
        <>
            <header><h1>CINEFLEX</h1></header>
            <main>
                <div className="select"><h3>Selecione o filme</h3></div>
                <div className="posters-container">
                    {posters.map((poster, index) => <ImagePoster
                        key={index}
                        source={poster.posterURL}
                        identification={poster.id} />)}
                </div>
            </main>
        </>
    );
}