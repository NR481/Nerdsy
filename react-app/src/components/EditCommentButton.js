import { useState } from "react";
import { useDispatch } from "react-redux";
import { commentEdit } from "../store/comments";
import DeleteCommentButton from "./DeleteCommentButton";

const EditCommentButton = ({ user, signedInUser, comment, rating, showModal }) => {
  const [editComment, setComment] = useState(comment?.comment)
  const [editRating, setRating] = useState(rating)
  // const [showForm, setShowForm] = useState(false)
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newComment = {
      comment: editComment,
      rating: +editRating,
      productId: comment?.productId,
      userId: signedInUser.id
    }
    await dispatch(commentEdit(newComment, comment?.id))
    // setShowForm(!showForm)
    showModal(false)
  }

  const handleClick = (e) => {
    e.preventDefault()
    // setShowForm(!showForm)
  }


  return (
    <>
      {/* {user?.id === signedInUser?.id &&
        <button onClick={handleClick}>Edit</button>
      } */}
        <form onSubmit={handleSubmit}>
          <input
            value={editComment}
            onChange={(e) => setComment(e.target.value)}
          />
          <label>Rating: </label>
          <select
            value={editRating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
          <button>Submit</button>
          <DeleteCommentButton id={comment?.id}/>
        </form>
    </>
  )
}

export default EditCommentButton;
