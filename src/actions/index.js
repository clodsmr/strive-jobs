export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'

export const addToFavAction = (jobToAdd) => ({
    type: ADD_TO_FAVORITES,
    payload: jobToAdd,
})

export const removeFromFavAction = (indexToRemove) => ({

    type: REMOVE_FROM_FAVORITES,
    payload: indexToRemove,
})