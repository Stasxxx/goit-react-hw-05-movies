import { useState, useEffect } from "react";
import { addMovies } from "services/api";
import { Link } from "react-router-dom";

export const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([])
   
    useEffect(() => {
        const getMoviesList = async () => {
            const moviesList = await addMovies()
            setTrendingMovies([...moviesList])
        }
        
        getMoviesList()
    }, []);
   
    
    return (
        <section>
            <h2>Trending today</h2>
            <ul>
                {trendingMovies.map(({id, title,}) => (
                <li key={id}>
                 <Link to={`/movies/${id}`}>{title}</Link>   
                </li>
                ))}
                
            </ul>
        </section>
    )
};