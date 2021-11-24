import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions";
import { initialState } from "../store";

const mainReducer = (state=initialState, action) => {

    switch(action.type) {
        case ADD_TO_FAVORITES:
            return{
                ...state,

                favorites: {
                    ...state.favorites,
                    jobs: [...state.favorites.jobs, action.payload],
                }

            }
        case REMOVE_FROM_FAVORITES: 
    return {
        ...state,
        favorites: {
            ...state.favorites,
            jobs: state.favorites.jobs.filter((el, i)=> i !== action.payload),
        }

    }

    default: 

    return state

}
}

export default mainReducer