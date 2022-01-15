import { useDispatch } from "react-redux";
import { deleteAProduct } from "../store/products";
import {  useHistory } from "react-router-dom";


const DeleteProduct = ({id}) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const onSubmit = async () => {
        await dispatch(deleteAProduct(id))
        return history.push('/')
    }


    return (
        <div>
            <button
            onClick={() => onSubmit(id)}
            id={id}
            className="prod-edit-button"
            >
                Delete
            </button>
        </div>

    )
}

export default DeleteProduct
