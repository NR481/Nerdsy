import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productComments } from "../store/comments";
import { allUsers } from "../store/session";

const Comments = ({ product }) => {
    const dispatch = useDispatch()
    const commentsObj = useSelector(state => state.comments)
    const usersObj = useSelector(state => state.session.users)

    useEffect(() => {
        dispatch(productComments(product?.id))
    }, [dispatch, product?.id])

    useEffect(() => {
        dispatch(allUsers())
    }, [dispatch])

    const users = Object.values(usersObj)

    const comments = Object.values(commentsObj);
    const productComment = comments?.filter(comment => {
        return +comment.productId === +product?.id
    });

    return (
        <>
            <h2>Comments</h2>
            {productComment?.length > 0 &&
                productComment.map(comment => (
                    <div>
                        <p>{`${users[comment.userId - 1].firstName} ${users[comment.userId - 1].lastName}`}</p>
                        <p>{comment.comment}</p>
                    </div>
                ))
            }
        </>
    )


}

export default Comments
