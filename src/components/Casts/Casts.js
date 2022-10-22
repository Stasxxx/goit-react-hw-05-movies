import { addCasts } from "services/api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const Casts = () => {
    const [actors, setActors] = useState([])
    const { id } = useParams();

    
    useEffect(() => {
        const movieCasts = async () => {
            const cast = await addCasts(id)
            setActors(cast)
        }
        movieCasts()
        
    }, [id])

    return (
        <div>
            <div>
           {actors.length>0 && <img src={`https://image.tmdb.org/t/p/w500/${actors[0].profile_path}`} alt={actors[0].original_name} width="100"></img>} 
            </div>
            {actors.length > 0 && 
                <>
                    <p>{actors[0].original_name}</p>
                    <p>Character: {actors[0].character}</p>
                </>
            }
        </div>
    )
}