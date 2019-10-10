import * as types from "./types";

const initialState = {
    films: [],
    // isFetching: false,
    // error: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        // case types.FETCHING_JOKE_START:
        //     return {
        //         ...state,
        //         isFetching: true,
        //         error: ""
        //     }
        case types.ADD_FILMS:
            return {
                ...state,
                films: action.payload,
            }
        default: 
        return state
    }
} 
