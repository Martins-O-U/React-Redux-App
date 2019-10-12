import React, {useState, useEffect } from 'react';
import axios from 'axios';

const FilmDetailed = (props) => {
    const [movies, setMovies] = useState({});
    const id = props.match.params.id;
    
    useEffect(() => {

        axios
        .get(`https://ghibliapi.herokuapp.com/films/${id}`)
        .then(response => {
            setMovies(response.data)
        })
        .catch(error => {
            console.error('error');
        });
        
    },[id]);

	return (
		<div className='movie-card'>
                <h3><i>{movies.title}</i></h3>
                <p className='description'>{movies.description}</p>
            <div className='dir-prod'>
                <p><strong>Movie Director: </strong><i>{movies.director}</i></p>
                <p><strong>Movie Producer: </strong><i>{movies.producer}</i></p>
            </div>
		</div>
	);
};

export default FilmDetailed;