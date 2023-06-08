// import { Link } from "react-router-dom";

import { searchForShows, searchForPeople } from './../api/tvmaze'
import { useState } from "react";
const Home = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [apiData, setApiData] = useState(null);
    const [apiDataError, setApiDataError] = useState(null);
    const [searchOption, setSearchOption] = useState("shows");

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }

    const onRadioChange = (e) => {
        setSearchOption(e.target.value);
    }

    const onSearch = async (e) => {
        e.preventDefault();
        try {
            setApiDataError(null);

            if (searchOption === 'shows') {
            const body = await searchForShows(searchTerm);
                setApiData(body);
            } else {
                const body = await searchForPeople(searchTerm);
                setApiData(body);
            }
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
            <form onSubmit={onSearch}>
                <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />
                
                <label>
                    Shows 
                    <input type="radio" name="searchType" value="shows" checked={searchOption === 'shows'} onChange={onRadioChange} />
                </label>
                
                <label>
                    Actors 
                    <input type="radio" name="searchType" value="actors" checked={searchOption === 'actors'} onChange={onRadioChange} />
                </label>
                <button type="submit" > search  </button>
            </form>
        
            <div>
                {renderApiData()}
            </div>

        </div>
    );
}
    
export default Home;