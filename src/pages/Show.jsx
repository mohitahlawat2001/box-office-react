import { useParams } from "react-router-dom";

const Show = () => {

    const {showId} = useParams();
    return (
        <div>
            This is Show Page for Show Id: {showId}
        </div>
    )
}

export default Show;