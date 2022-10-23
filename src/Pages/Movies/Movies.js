import { useEffect, useState } from "react";
import { Outlet, useSearchParams, } from "react-router-dom";
import { searchMovie } from "services/api";
import { Seachbar } from "components/Seachbar/Searchbar"
import { MovieSearchList } from "components/MovieSeachList/MovieSeachList";
import { Section } from "./Movies.styled";

const SearchMovies = () => {
    const [movieName, setMovieName] = useState('');
    const [movieList, setMovieList] = useState('');
    const [searchMovieParams, setSearchMovieParams] = useSearchParams();
    const nameOfMovie = searchMovieParams.get('query') ?? '';
    let savedName = movieName !== '' ? movieName : nameOfMovie;

    
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const name = e.currentTarget.elements.query.value;
        const nextName = name !== "" ? {query:name} : {}
        setSearchMovieParams(nextName);
        setMovieName(name)
        e.target.reset()
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
        <Section>            
            <Seachbar onSubmit={handleFormSubmit} />
            {movieList !== '' && <MovieSearchList movies={movieList} />}
            
            <Outlet/>
        </Section>
    )
}

export default SearchMovies