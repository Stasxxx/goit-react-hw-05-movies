import { addMovies } from "services/api";

export const Home = () => {

    const getMoviesList = async () => {
    const moviesList = await addMovies()
     return console.log(moviesList)
    }
    getMoviesList()
    
    return (
        <>
            <ul>
                <li> Hi</li>
            </ul>
        </>
    )
};