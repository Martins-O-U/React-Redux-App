import axios from 'axios'
import * as types from './types'

export const getFilm = () => {
    return dispatch => {
        axios
        .get('https://ghibliapi.herokuapp.com/films')
        .then(res => {
            dispatch({ type: types.ADD_FILMS, payload: res.data })
        })
        .catch(err => {
            console.log(err.message);
          });
    }
} 
