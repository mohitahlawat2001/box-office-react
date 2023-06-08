// import { useEffect ,useState } from "react";
import { useParams } from "react-router-dom";
import { getShowDetails } from "../api/tvmaze";
import {
    useQuery
} from '@tanstack/react-query'
  
const Show = () => {
    const { showId } = useParams();
    
    // const { show, showError } = useShowById(showId);

    const { data: show, error: showError } = useQuery(['show', { showId }], () => getShowDetails(showId));

    if (showError) {
        return <div> Error occured: {showError.message} </div>
    }

    if (show) {
        // console.log(show);
        return <div> got show: {show.name} </div>
    }

    return (
        <div>
            {/* This is Show Page for Show Id: {showId} */}
            data is loading
        </div>
    )
}

export default Show;