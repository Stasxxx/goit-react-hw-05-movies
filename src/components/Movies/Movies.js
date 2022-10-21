import { useState } from "react";
import { Outlet,Link, useSearchParams, useLocation } from "react-router-dom";
import { searchMovie } from "services/api";

export const SearchMovies = () => {
    const location = useLocation();
    const [movieName, setMovieName] = useState('');
    const [movieList, setMovieList] = useState('');
    const [searchMovieParams, setSearchMovieParams] = useSearchParams();
    const nameOfMovie = searchMovieParams.get('name') ?? '';
    // console.log(nameOfMovie)

    const handleMovie = e => {
        const name = e.currentTarget.value
        setMovieName(name);
       const nextName = name !== "" ? {name} : {}
        setSearchMovieParams(nextName)
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
            <input type="text" value={nameOfMovie} onChange={handleMovie}></input>
            <button type="submit" >Serch</button>
        </form>
        
        {movieList !== '' &&
        <div>
            <ul>
                {movieList.map(({id, title,}) => (
                <li key={id}>
                    <Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link>   
                </li>
                ))}
                
            </ul>
        </div>}
        
        
        <Outlet/>
        </>
    )
}