import { Link, useLocation } from "react-router-dom"

export const MovieSearchList = ({ movies }) => {
    const location = useLocation();
    return (
        <div>
            <ul>
                {movies.map(({id, title,}) => (
                <li key={id}>
                    <Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link>   
                </li>
                ))}
                
            </ul>
        </div>
    )
}