import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { addReviews } from "services/api"

const Reviews = () => {
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
        {filmReviews.length === 0 && <p>We don't have any reviews for this movie.</p>}
        
        {filmReviews.length > 0 &&
        <>
            {filmReviews.map(({ author, content,id }) => (
            <div key={id}>
                <ul>
                    <li>Author:{author}
                        <p>{content}</p>
                    </li>
                </ul>
            </div>
            ))}
        </>
        }
    </>
    )
}

export default Reviews