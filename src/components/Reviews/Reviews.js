import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { addReviews } from "services/api"

export const Reviews = () => {
    const { id } = useParams();
    const [filmReviews, setMovieReviews] = useState('')

    useEffect(() => {
        const reviews = async () => {
            const movieReviews = await addReviews(id) 
            setMovieReviews(movieReviews)
        }
        reviews()
    }, [id])
    
    return (
    <>
        {filmReviews.length === 0 && <p>We don't have any reviews for this movie.</p>}; 
        
        {
        filmReviews.length > 0 &&
            <div>
                <ul>
                    <li>Author:{filmReviews[0].author}
                        <p>{ filmReviews[0].content}</p>
                    </li>
                </ul>
            </div>
        };
        
    </>
    )
}