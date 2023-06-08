// import { Link } from "react-router-dom";

import { searchForShows, searchForPeople } from './../api/tvmaze'
import { useState } from 'react';
import SearchForm  from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import ActorGrid from '../components/actors/ActorGrid';

const Home = () => {

    const [apiData, setApiData] = useState(null);
    const [apiDataError, setApiDataError] = useState(null);

    

    const onSearch = async (e) => {
        // e.preventDefault();
        const { q, searchOption } = e;
        try {
            setApiDataError(null);

            let body;
            if (searchOption === 'shows') {
             body = await searchForShows(q);
            } else {
             body = await searchForPeople(q);
            }
            setApiData(body);
        } catch (error) {
            setApiDataError(error);
        }
    };

    const renderApiData = () => {
        if (apiDataError) {
            return <div> {apiDataError.message} </div>
        }

        if (apiData?.length === 0) {
            return <div> No results </div>
        }

        if (apiData) {
            return apiData[0].show ? 
                <div> <ShowGrid shows={ apiData} /> </div>:
                <div> <ActorGrid actors={ apiData} /> </div>
        }

        return null;
        
    }

    return (
        <div>
            <SearchForm onSearch={onSearch} />
    
        
            <div>
                {renderApiData()}
            </div>

        </div>
    );
}
    
export default Home;