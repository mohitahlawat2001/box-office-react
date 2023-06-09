import { useQuery } from '@tanstack/react-query'
import { getShowsByIds } from '../api/tvmaze';
import { useStarredShows } from "../lib/useStarredShows";
import ShowGrid from '../components/shows/ShowGrid';
import { TextCenter } from '../components/common/TextCenter';

const Starred = () => {

    const [starredShows] = useStarredShows();

    const { data: starred, error: starredError } = useQuery(
        {
            queryKey: ['starred', starredShows],
            queryFn: async () => getShowsByIds(starredShows).then(res => res.map(show => ({ show }))),

        }
    );

    if (starred?.length === 0) {
        return <TextCenter> No starred shows </TextCenter>
    }
    if (starred?.length > 0) {
        return <ShowGrid shows={starred} />
    }
    if (starredError) {
        return <TextCenter> Error occured: {starredError.message} </TextCenter>
    }

    return (
        <TextCenter>
            loading...
        </TextCenter>
    );
}

export default Starred;