// import { Link } from "react-router-dom";

import { searchForShows, searchForPeople } from './../api/tvmaze'
import { useState } from 'react';
import SearchForm  from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import ActorGrid from '../components/actors/ActorGrid';
import { useQuery } from '@tanstack/react-query'

const Home = () => {

    const [filter, setFilter] = useState(null);

    const { data: apiData, error: apiDataError } = useQuery({
        queryKey: ['search', filter],
        queryFn: () =>
            filter.searchOption === 'shows'
                ? searchForShows(filter.q)
                : searchForPeople(filter.q),
        // ⬇️ disabled as long as the filter is empty
        enabled: !!filter,

        refetchOnWindowFocus: false,
    })

     
    const onSearch = async ({q,searchOption}) => {

        setFilter({q,searchOption})
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