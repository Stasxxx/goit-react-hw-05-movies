import { useEffect, useState } from "react";
import { Outlet,Link, useSearchParams, useLocation } from "react-router-dom";
import { searchMovie } from "services/api";

export const SearchMovies = () => {
    const location = useLocation();
    const [movieName, setMovieName] = useState('');
    const [movieList, setMovieList] = useState('');
    const [searchMovieParams, setSearchMovieParams] = useSearchParams();
    const nameOfMovie = searchMovieParams.get('name') ?? '';
    let savedName = movieName !== '' ? movieName : nameOfMovie;

    
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const name = e.currentTarget.elements.query.value
        
        const nextName = name !== "" ? {name} : {}
        setSearchMovieParams(nextName);
        setMovieName(name)
        
    }
    useEffect(() => {
        const getMoviesList = async () => {
            
            if (savedName !== '') {
                const movies = await searchMovie(savedName);
            setMovieList(movies)
            }
        }
        getMoviesList()
    }, [savedName])

    return (
        <>
        <form onSubmit={handleFormSubmit}>
            <input name="query" type="text"></input>
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