import { useLocation } from "react-router-dom"
import { LinkMovie, Item } from "./MovieSeachList.styled";

export const MovieSearchList = ({ movies }) => {
    const location = useLocation();
    return (
        <div>
            <ul>
                {movies.map(({id, title,}) => (
                <Item key={id}>
                    <LinkMovie to={`/movies/${id}`} state={{ from: location }}>{title}</LinkMovie>   
                </Item>
                ))}
                
            </ul>
        </div>
    )
}