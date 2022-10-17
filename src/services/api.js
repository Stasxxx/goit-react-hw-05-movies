import axios from "axios";

// axios.defaults.baseURL = 'https://pixabay.com/api';
const KEY = 'da8191bf1a96c6d7dc13ce1ead68a3a9';

export const addMovies = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`);
    // console.log(response)
    return response.data.results;
}