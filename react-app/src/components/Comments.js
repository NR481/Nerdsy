import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import commentsReducer, { productComments } from "../store/comments";

const Comments = ({ product }) => {
    const dispatch = useDispatch()
    const commentsObj = useSelector(state => state.comments)

    useEffect(() => {
        dispatch(productComments(product?.id))
    }, [dispatch, product?.id])
    // const comments =
    // const comment = commentsObj?.filter(comment => {
    //     return comment.productId === product.id
    // })

    return (
        <>
            {/* <h2>Comments</h2>
            {comments?.length > 0 &&
                comments.map(comment => (
                    <p>{comment.comment}</p>
                )) */}
            {/* } */}
        </>
    )


}

export default Comments
