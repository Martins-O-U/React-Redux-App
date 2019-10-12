import * as types from "./types";

const initialState = {
    films: [],
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case types.ADD_FILMS:
            return {
                ...state,
                films: action.payload,
            }
        default: 
        return state
    }
} 

const iniState =[];
export const oneMovie =(state = iniState, action)=>{
    switch(action.type){
        case types.DISPLAY_FILM:
            return {
                ...state,
                film: action.payload,
            }
        default:
            return state
    }
}
