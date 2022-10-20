import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = 'da8191bf1a96c6d7dc13ce1ead68a3a9';

export const addMovies = async () => {
    const response = await axios.get(`/trending/movie/day?api_key=${KEY}`);
    // console.log(response)
    return response.data.results;
}

export const addMovieDetails = async (id) => {
    const response = await axios.get(`/movie/${id}?api_key=${KEY}&language=en-US`);
    return response.data;
}