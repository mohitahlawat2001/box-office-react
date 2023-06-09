import { useQuery } from '@tanstack/react-query'
import { getShowsByIds } from '../api/tvmaze';
import { useStarredShows } from "../lib/useStarredShows";
import ShowGrid from '../components/shows/ShowGrid';

const Starred = () => {

    const [starredShows] = useStarredShows();

    const { data: starred, error: starredError } = useQuery(
        {
            queryKey: ['starred', starredShows],
            queryFn: async () => getShowsByIds(starredShows).then(res => res.map(show => ({ show }))),

        }
    );

    if (starred?.length === 0) {
        return <div> No starred shows </div>
    }
    if (starred?.length > 0) {
        return <ShowGrid shows={starred} />
    }
    if (starredError) {
        return <div> Error occured: {starredError.message} </div>
    }

    return (
        <div>
            loading...
        </div>
    );
}

export default Starred;