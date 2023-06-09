// import { useEffect ,useState } from "react";
import { useParams , Link } from "react-router-dom";
import { getShowDetails } from "../api/tvmaze";
import { useQuery } from '@tanstack/react-query'
import ShowMainData from "../components/shows/ShowMainData";
import Details from "../components/shows/Details";
import Season from "../components/shows/Season";
import Cast from "../components/shows/Cast";
  
const Show = () => {
    const { showId } = useParams();
    const { data: show, error: showError } = useQuery(
        ['show', { showId }],
        () => getShowDetails(showId),
        { enabled: !!showId }
    );

    // const navigate = useNavigate();
    // const onGoBack = () => {
    //     navigate('/'); // go back to home page
    // }

    if (showError) {
        return <div> Error occured: {showError.message} </div>
    }

    if (show) {
        // return <div> got show: {show.name} </div>

        return <div>

            <Link to='/'> Go Back To home</Link>
            {/* <button type="button" onClick={onGoBack}> Go Back To home</button> */}
            <ShowMainData
                image={show.image}
                name={show.name}
                rating={show.rating}
                summary={show.summary}
                genres={show.genres} 
            />
            
            <div>
                <h2>Details</h2>
                <Details
                    status={show.status}
                    network={show.network}
                    premiered={show.premiered}
                />
            </div>

            <div>
                <h2>Seasons</h2>
                <Season seasons={show._embedded.seasons} />
            </div>

            <div>
                <h2>Cast</h2>
                <Cast cast={show._embedded.cast} />
            </div>
                            

        </div>
    }

    return (
        <div>
            {/* This is Show Page for Show Id: {showId} */}
            data is loading
        </div>
    )
}

export default Show;