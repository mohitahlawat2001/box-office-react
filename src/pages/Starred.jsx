import { useStarredShows } from "../lib/useStarredShows";

const Starred = () => {

    const [starredShows] = useStarredShows();

    return (
        <div>
            <h1>Starred Page</h1>
            {
                starredShows.length > 0 ? starredShows.map(showId => <div key={showId}> {showId} </div>) : 'No starred shows'
            }
        </div>
    );
}

export default Starred;