import { useStarredShows } from "../../lib/useStarredShows";
import ShowCard from "./ShowCard";
import { FlexGrid } from "../common/FlexGrid"; 
import NotFound from '../../lib/not-found.png'



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
        <FlexGrid>
            
            {
                shows.map(data => 
                    <ShowCard
                        key={data.show.id}
                        id={data.show.id}
                        name={data.show.name}
                        summary={data.show.summary}
                        image={data.show.image ? data.show.image.medium : NotFound}
                        onStarMeClick={onStarMeClick}
                        isStarred={starredShows.includes(data.show.id)}
                    />
                    
                )
            }
        </FlexGrid>
    );
}


export default ShowGrid;