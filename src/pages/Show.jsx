import { useEffect ,useState } from "react";
import { useParams } from "react-router-dom";
import { getShowDetails } from "../api/tvmaze";

const useShowById = (showId) => {
    const [show, setShow] = useState(null);
    const [showError, setShowError] = useState(null);



    useEffect(() => {
        // console.log('Component did mount');
        async function fetchData() {
            try {
                const data = await getShowDetails(showId);
                setShow(data);
            } catch (error) {
                setShowError(error);
            }
        }

        fetchData();
    }, [showId]);

    return { show, showError };
}

const Show = () => {
    const { showId } = useParams();
    
    const { show, showError } = useShowById(showId);

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