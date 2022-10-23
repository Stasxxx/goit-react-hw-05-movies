import { addCasts } from "services/api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Section } from "./Casts.styled";

const Casts = () => {
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
    <>
            {actors.length > 0 &&
            <Section>
                {actors.map(({ profile_path, original_name, character, id }) => (
                <div key={id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={original_name} width="100"></img>
                    <div>
                            <ul>
                                <li >{original_name}>
                                <p>Character: {character}</p>
                                </li>
                               
                            </ul>
                    </div>
                </div>
                    ))}
            </Section>}
            
    </>
        
    )
}

export default Casts