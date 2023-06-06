// import { Link } from "react-router-dom";

import { useState } from "react";
const Home = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }

    const onSearch = async (e) => {
        e.preventDefault();
        // console.log("searchTerm", searchTerm);

        const apiResponse = await fetch(`http://api.tvmaze.com/search/shows?q=${searchTerm}`)
        const body = apiResponse.then(r => r.json())
        console.log("body", body);
    }

    return (
        <div>
            <form onSubmit={onSearch}>
                <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />
                <button type="submit" > search  </button>
            </form>
        </div>
    );
}
    
export default Home;