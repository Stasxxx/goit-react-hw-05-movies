import { useEffect,useState } from "react";
import { Outlet, useParams, Link, useLocation } from "react-router-dom"
import { addMovieDetails } from "services/api";
import { BackLink } from "components/BackLink/BackLink";
import { MovieCard, FilmDetails,FilmName, FilmTitleItem, MovieAdditional } from "./MovieDetails.styled";

export const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/"
    const userScore = Math.trunc(movie.vote_average * 10)
    let genres = movie.genres ? [...movie.genres] : false;
    
    useEffect(() => {
        const movieDetails = async () => {
            const movieItem = await addMovieDetails(id)
            setMovie(movieItem);
        }
        movieDetails();
    }, [id]);
    
    return (
        <>
            <BackLink to={backLinkHref}>Go back</BackLink>

            <div>
                <MovieCard>
                    <div>
                        {movie.poster_path && <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} width="200"></img>} 
                    </div>
                    <FilmDetails>
                        <FilmName>{movie.original_title}</FilmName>
                        <p>User Score: {userScore}%</p>
                        <FilmTitleItem>Overview</FilmTitleItem>
                        <p>{ movie.overview }</p>
                        <FilmTitleItem>Genres</FilmTitleItem>
                        {genres && genres.map(({ name, id }) => <span key={id}>{name}</span>)}
                    </FilmDetails>
                </MovieCard>
                <MovieAdditional>
                    <h2>Additional information</h2>
                
                    <ul>
                        <li>
                            <Link to="casts" state={{ from: backLinkHref }}>Casts</Link>
                        </li>
                        <li>
                            <Link to="reviews" state={{ from: backLinkHref }}>Reviews</Link>
                        </li>
                    </ul>
                </MovieAdditional>
                
                <Outlet/>
            </div>
        </>
    )
}