import React from 'react';

const WantToWatchFilms = ({toWatchFilms}) => {

    const wantToWatch = toWatchFilms.map((film, index) => {
        return <li key={index}>{film.title}</li>
    })
        

    return(
            <ul>
             {wantToWatch}
            </ul>
    )
}

export default WantToWatchFilms;