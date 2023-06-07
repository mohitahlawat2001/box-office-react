// import { Link } from "react-router-dom";

import { searchForShows } from './../api/tvmaze'
import { useState } from "react";
const Home = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [apiData, setApiData] = useState(null);
    const [apiDataError, setApiDataError] = useState(null);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }

    const onSearch = async (e) => {
        e.preventDefault();
        try {
            setApiDataError(null);
            const body = await searchForShows(searchTerm);
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
            return apiData.map((show) => {
                return <div key={show.show.id}> {show.show.name} </div>
            });
        }

        return null;
        
    }

    return (
        <div>
            <form onSubmit={onSearch}>
                <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />
                <button type="submit" > search  </button>
            </form>
        
            <div>
                {renderApiData()}
            </div>

        </div>
    );
}
    
export default Home;