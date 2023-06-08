// import { Link } from "react-router-dom";

import { searchForShows, searchForPeople } from './../api/tvmaze'
import { useState } from 'react';
import SearchForm  from '../components/SearchForm';

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

        if (apiData) {
            return apiData[0].show ? apiData.map((show) => {
                return <div key={show.show.id}> {show.show.name} </div>
            }) : apiData.map((person) => {
                return <div key={person.person.id}> {person.person.name} </div>
            }
            )
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