import { useEffect,useState } from "react";
import { Outlet, useParams, Link } from "react-router-dom"
import { addMovieDetails } from "services/api";

export const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    // console.log(movie.genres)
    useEffect(() => {
        const movieDetails = async () => {
            const movieItem = await addMovieDetails(id)
            setMovie(movieItem)
            
        }
        movieDetails()

    }, [id]);
    const userScore = Math.trunc(movie.vote_average * 10)
    let genres = movie.genres ? [...movie.genres] : false;
    
    return (
        <>
            <button>Go back</button>
            <div>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} width="200"></img>
                </div>
                <div>
                    <p>{movie.original_title}</p>
                    <p>User Score: {userScore}%</p>
                    <p>Overview</p>
                    <p>{ movie.overview }</p>
                    <p>Genres</p>
                    {genres && genres.map(({ name }) => <span>{name}</span>)}
                </div>
                <div>
                    <h2>Additional information</h2>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to="casts">Casts</Link>
                        </li>
                        <li>
                            <Link to="reviews">Reviews</Link>
                        </li>
                    </ul>
                </div>
                
                <Outlet/>
            </div>
        </>
    )
}