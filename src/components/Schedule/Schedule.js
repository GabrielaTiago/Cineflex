import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import Footer from './Footer';


function MovieSchedules({ weekday, day, children }) {
    return (
        <div className="schedules-available">
            <div className="schedules-day"><h4>{weekday} - {day}</h4></div>
            <div className="schedules-time">
                <div className="buttons">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default function Schedule() {
    const { idMovies } = useParams();
    const [schedules, setSchedules] = useState([]);
    const [images, setImages] = useState({});

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovies}/showtimes`);

        promise.then(response => {
            setSchedules(response.data.days);
            setImages(response.data);
        });
    }, []);

    return (
        <>
            <header><h1>CINEFLEX</h1></header>
            <main className='schedules'>
                <div className="select"><h3>Selecione o horário</h3></div>
                {schedules.map((schedule, index) =>
                    <MovieSchedules
                        key={index}
                        weekday={schedule.weekday}
                        day={schedule.date}
                    >
                        {schedule.showtimes.map((schedule) =>
                            <Link to={`/assento/${schedule.id}`}>
                                <button className="time-button">{schedule.name}</button>
                            </Link>)}
                    </MovieSchedules>
                )}
            </main>
            <Footer>
                <img className="footer-img" src={images.posterURL} />
                <div><h5>{images.title}</h5></div></Footer>
        </>
    );
}