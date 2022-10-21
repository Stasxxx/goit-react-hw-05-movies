import { useState } from "react";
import { Outlet } from "react-router-dom";
import { searchMovie } from "services/api";

export const SearchMovies = () => {
    const [movieName, setMovieName] = useState('');
    const [movieList, setMovieList] = useState('');
    console.log(movieList)
    const handleMovie = e => {
        
        setMovieName(e.currentTarget.value)
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const movies = await searchMovie(movieName);
        // console.log(movies)
        setMovieList(movies)
    }
    return (
        <>
        <form onSubmit={handleFormSubmit}>
                <input value={movieName} onChange={handleMovie}>
        </input>
        <button type="submit" >Serch</button>
        </form>
        
        <Outlet/>
        </>
    )
}