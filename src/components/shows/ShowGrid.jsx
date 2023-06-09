import { useStarredShows } from "../../lib/useStarredShows";
import ShowCard from "./ShowCard";


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

    const [ starredShows, dispatchStarred ] = useStarredShows();


    // console.log(starredShows);
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
                        isStarred={starredShows.includes(data.show.id)}
                    />
                    
                )
            }
        </div>
    );
}


export default ShowGrid;