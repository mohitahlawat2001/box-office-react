import { useReducer ,useEffect } from "react";
import ShowCard from "./ShowCard";

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
const ShowGrid = ({ shows }) => {
    // const [starredShows, dispatchStarred] = useReducer((state, action) => {
    //     switch (action.type) {
    //         case 'add':
    //             return [...state, action.showId]
    //         case 'remove':
    //             return state.filter(showId => showId !== action.showId)
    //         default:
    //             return state
    //     }
    // }, [])

    const [starredShows, dispatchStarred] = usePersistedReducer((state, action) => {
        switch (action.type) {
            case 'add':
                return [...state, action.showId]
            case 'remove':
                return state.filter(showId => showId !== action.showId)
            default:
                return state
        }
    }, [], 'starred')


    console.log(starredShows);
    const onStarMeClick = (showId) => {
        const isStarred = starredShows.includes(showId);
        if (isStarred) {
            dispatchStarred({ type: 'remove', showId })
        } else {
            dispatchStarred({ type: 'add', showId })
        }
    }

    return (
        <div>
            
            {
                shows.map(data => 
                    <ShowCard
                        key={data.show.id}
                        id={data.show.id}
                        name={data.show.name}
                        summary={data.show.summary}
                        image={data.show.image ? data.show.image.medium : 'not-found.png'}
                        onStarMeClick={onStarMeClick}
                    />
                    
                )
            }
        </div>
    );
}


export default ShowGrid;