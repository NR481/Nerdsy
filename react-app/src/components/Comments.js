import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productComments } from "../store/comments";
import { allUsers } from "../store/session";
import { addNewComment } from "../store/comments";
// import EditCommentButton from "./EditCommentButton";
import EditCommentModal from "./editCommentModal"
import './css/Comments.css'

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

    const resetForm = () => {
        setComment('')
        setRating('5')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newComment = {
            comment,
            rating: +rating,
            productId,
            userId: signedInUser.id
        }
        await dispatch(addNewComment(newComment))
        resetForm()
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

    console.log("RATING:",comments)

    return (
        <>
            <div className="whole-comment">
                <h2 className="title-comment">Comments</h2>
                {productComment?.length > 0 &&
                    productComment?.map(comment => (
                        <div className="comment-box">
                            <div className="user-comment">
                                <p className="from-user">{`🤓 ${users[comment?.userId - 1]?.firstName} ${users[comment?.userId - 1]?.lastName}`}</p>
                                <p className="user-rating">{comment.rating === 5? "★★★★★" : comment.rating === 4? "★★★★" : comment.rating === 3? "★★★" : comment.rating === 2? "★★" : "★"}</p>
                                <div className="product-comment">{comment?.comment}
                                {signedInUser?.id === comment?.userId && (
                                    <EditCommentModal
                                    user={users[comment?.userId-1]}
                                    signedInUser={signedInUser}
                                    comment={comment}
                                    rating={comment?.rating}
                                />
                                )}

                                </div>
                            </div>

                        </div>
                    ))
                }
                {signedInUser !== null &&
                    <form onSubmit={handleSubmit} className="add-comment">
                        <textarea
                            className="add-comment-box"
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
            </div>
        </>
    )


}

export default Comments
