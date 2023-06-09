// import { Link } from "react-router-dom";

import { searchForShows, searchForPeople } from './../api/tvmaze'
import { useState , useReducer } from 'react';
import SearchForm  from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import ActorGrid from '../components/actors/ActorGrid';
import { useQuery } from '@tanstack/react-query'
import { TextCenter } from '../components/common/TextCenter';

const Home = () => {

    const [filter, setFilter] = useState(null);

    // const [counter, dispatch] = useReducer((state, action) => {
    //     switch (action.type) {
    //         case 'increment':
    //             return state + 1
    //         case 'decrement':
    //             return state - 1
    //         case 'reset':
    //             return 0
    //         case 'set':
    //             return action.payload
    //         default:
    //             throw new Error()
    //     }
    // }, 0)

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
            return <TextCenter> {apiDataError.message} </TextCenter>
        }

        if (apiData?.length === 0) {
            return <TextCenter> No results </TextCenter>
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
    
            {/* <div>
                <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
                <span>{counter}</span>
                <button onClick={() => dispatch({ type: 'increment' })}>+</button>
                <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
                < form
                    onSubmit={e => {
                    e.preventDefault()
                    dispatch({ type: 'set', payload: Number(e.target[0].value) })
                }}>
                <input type="number" />
                <button type="submit">set</button>
                </form>

            </div> */}
            
            <div>
                {renderApiData()}
            </div>

        </div>
    );
}
    
export default Home;