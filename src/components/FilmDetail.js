import React from 'react';
import './FilmDetail.css'

const FilmDetail = ({film, addFilm}) => {

    const handleClick = () => {
        addFilm();
    }

    return(
        <div class="film-info">
        <img src={film.image} width="200" alt="film poster"/>
            <div id="film-detail">
            <h2>{film.title}</h2>
            <h3>{film.original_title_romanised}</h3>
            <p><b>Director:</b> {film.director}</p>
            <p><b>Release Date:</b> {film.release_date}</p>
            <p><b>Running Time:</b> {film.running_time} minutes</p>
            <button onClick={handleClick}>Want to Watch</button>
            </div>
            <div id="film-description">
                <h3>Film Synopsis:</h3>
                <p>{film.description}</p>
            </div>
        </div>
    )
}

export default FilmDetail;