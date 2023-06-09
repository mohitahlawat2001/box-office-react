import { useParams , Link } from "react-router-dom";
import { getShowDetails } from "../api/tvmaze";
import { useQuery } from '@tanstack/react-query'
import ShowMainData from "../components/shows/ShowMainData";
import Details from "../components/shows/Details";
import Season from "../components/shows/Season";
import Cast from "../components/shows/Cast";
import styled from 'styled-components';
import { TextCenter } from "../components/common/TextCenter";
  
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
        return <TextCenter> Error occured: {showError.message} </TextCenter>
    }

    if (show) {
        // return <div> got show: {show.name} </div>

        return <div>
            <BackHomeWrapper>
                <Link to='/'> Go Back To home</Link>
            </BackHomeWrapper>
            {/* <button type="button" onClick={onGoBack}> Go Back To home</button> */}

            <ShowPageWrapper>
            <ShowMainData
                image={show.image}
                name={show.name}
                rating={show.rating}
                summary={show.summary}
                genres={show.genres} 
            />
            
            <InfoBlock>
                <h2>Details</h2>
                <Details
                    status={show.status}
                    network={show.network}
                    premiered={show.premiered}
                />
            </InfoBlock>

            <InfoBlock>
                <h2>Seasons</h2>
                <Season seasons={show._embedded.seasons} />
            </InfoBlock>

            <InfoBlock>
                <h2>Cast</h2>
                <Cast cast={show._embedded.cast} />
            </InfoBlock>
            </ShowPageWrapper>
                            

        </div>
    }

    return (
        <TextCenter>
            {/* This is Show Page for Show Id: {showId} */}
            data is loading
        </TextCenter>
    )
}

export default Show;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;