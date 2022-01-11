import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productComments } from "../store/comments";
import { allUsers } from "../store/session";
import { addNewComment } from "../store/comments";

const Comments = ({ product }) => {
    const dispatch = useDispatch()
    const commentsObj = useSelector(state => state.comments)
    const usersObj = useSelector(state => state.session.users)
    const signedInUser = useSelector(state => state.session.user)
    const productId = product?.id

    const [comment, setComment] = useState('')
    const [rating, setRating] = useState('5')

    useEffect(() => {
        dispatch(productComments(product?.id))
    }, [dispatch, product?.id])

    useEffect(() => {
        dispatch(allUsers())
    }, [dispatch])

    console.log(product)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newComment = {
            comment,
            rating: +rating,
            productId,
            userId: signedInUser.id
        }
        await dispatch(addNewComment(newComment))
    }

    let users;
    if (usersObj){
        users = Object.values(usersObj)
    }

    let comments;
    if (commentsObj) {
        comments = Object.values(commentsObj);
    }

    const productComment = comments?.filter(comment => {
        return +comment.productId === +product?.id
    });

    return (
        <>
            <h2>Comments</h2>
            {productComment?.length > 0 &&
                productComment?.map(comment => (
                    <div>
                        <p>{`${users[comment?.userId - 1]?.firstName} ${users[comment?.userId - 1]?.lastName}`}</p>
                        <p>{comment?.comment}</p>
                    </div>
                ))
            }
            {signedInUser.id > 0 &&
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="Leave a comment..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <label>Rating: </label>
                    <select
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    >
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                    <button>Submit</button>
                </form>
            }
        </>
    )


}

export default Comments
