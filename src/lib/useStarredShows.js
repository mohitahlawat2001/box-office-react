import { useReducer ,useEffect } from "react";

const usePersistedReducer = (reducer, initialState, key) => {
    const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
        const persisted = localStorage.getItem(key);
        return persisted ? JSON.parse(persisted) : initial;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [state, key])
    
    return [state, dispatch]
}

export const useStarredShows = () => {

    return usePersistedReducer((state, action) => {
        switch (action.type) {
            case 'add':
                return [...state, action.showId]
            case 'remove':
                return state.filter(showId => showId !== action.showId)
            default:
                return state
        }
    }, [], 'starred')
}