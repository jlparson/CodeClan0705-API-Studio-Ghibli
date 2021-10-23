import React, { useState, useEffect} from 'react';
import FilmList from '../components/FilmList';
import FilmDetail from '../components/FilmDetail';
import WantToWatchFilms from '../components/WantToWatchList';
import './FilmContainer.css';

const FilmContainer = () => {

    const [films, setFilms] = useState([])
    const [selectedFilm, setSelectedFilm] = useState(null);
    const [toWatchFilms, setToWatchFilms] = useState([]);
    

    useEffect(() => {
        fetchFilms();
    }, [])

    const fetchFilms = function(){
        fetch("https://ghibliapi.herokuapp.com/films")
        .then((response) => response.json())
        .then((films) => setFilms(films))
    }

    const handleFilmSelect = (film) => {
        setSelectedFilm(film)
    }

    const addFilm = () => {
        const updatedWatchList = [...toWatchFilms, selectedFilm];
        setToWatchFilms(updatedWatchList);
    }

    return(
        <div className="main-container">    
            <h2>Choose a film:</h2>  
            <FilmList films={films} onFilmSelect={handleFilmSelect} />
            <h2>Film Details: </h2>    
            {selectedFilm && <FilmDetail film={selectedFilm} addFilm={addFilm}/>}
            <h2>Want to Watch List:</h2>
            <div id="watch-list">
                <WantToWatchFilms toWatchFilms={toWatchFilms} />
            </div>
        </div>
    )
}

export default FilmContainer;