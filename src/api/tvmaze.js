const baseUrl = 'https://api.tvmaze.com';

const apiGet = async (queryString) => {
    const response = await fetch(`${baseUrl}${queryString}`);
    const data = await response.json();
    return data;
}
    
export const searchForShows = async (searchTerm) => {
    const queryString = `/search/shows?q=${searchTerm}`;
    return await apiGet(queryString);
}

export const searchForPeople = async (searchTerm) => {
    const queryString = `/search/people?q=${searchTerm}`;
    return await apiGet(queryString);
}

export const getShowDetails = async (showId) => {
    const queryString = `/shows/${showId}?embed[]=seasons&embed[]=cast`;
    return await apiGet(queryString);
}

export const getShowsByIds = async (showIds) => {
    const promises = showIds.map(showId => apiGet(`/shows/${showId}`));
    return await Promise.all(promises);
}