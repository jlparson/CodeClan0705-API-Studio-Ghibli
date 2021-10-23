import React from 'react';
import './FilmList.css';

const FilmList = ({films, onFilmSelect}) => {

    const handleFilmClick = (index) => {
        const selectedFilm = films[index]
        onFilmSelect(selectedFilm)
    }

    const filmNodes = films.map((film, index) => {
        return <li onClick={() => handleFilmClick(index)} key={index}><img src={film.image} width="200px"></img></li>
    })

    return(
        <div className="film-list">
            {filmNodes}
        </div>
    )
}

export default FilmList;