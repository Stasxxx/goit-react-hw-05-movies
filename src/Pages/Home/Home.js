import { useState, useEffect } from "react";
import { addMovies } from "services/api";
import { Section, LinkMovie,Item } from "./Home.styled";

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
        <Section>
            <h2>Trending today</h2>
            <ul>
                {trendingMovies.map(({id, title}) => (
                <Item key={id}>
                 <LinkMovie to={`/movies/${id}`}>{title}</LinkMovie>   
                </Item>
                ))}
                
            </ul>
        </Section>
    )
};