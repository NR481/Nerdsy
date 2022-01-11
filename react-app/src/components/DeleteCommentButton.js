import { useDispatch } from "react-redux"
import { commentDelete } from "../store/comments"

const DeleteCommentButton = ({id}) => {
    const dispatch = useDispatch()

    const onSubmit = async (e) => {
        e.preventDefault()
        await dispatch(commentDelete(id))
    }

    return (
        <div>
            <button
                onClick={onSubmit}
                id={id}
                >
                    Delete
            </button>
        </div>
    )
}

export default DeleteCommentButton
