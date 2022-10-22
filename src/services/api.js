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

export const addCasts = async (id) => {
    const response = await axios.get(`/movie/${id}/credits?api_key=${KEY}&language=en-US`)
    return response.data.cast;
}

export const searchMovie = async (movie) => {
    const response = await axios.get(`/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${movie}`)
    return response.data.results;
}

export const addReviews = async (id) => {
    const response = await axios.get(`/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`)
    return response.data.results;
}

