import { useDispatch } from "react-redux";
import { deleteAProduct } from "../store/products";
import {  useHistory } from "react-router-dom";


const DeleteProduct = ({id}) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const onSubmit = () => {
        dispatch(deleteAProduct(id))
        history.push('/')
    }


    return (
        <div>
            <button
            onClick={() => onSubmit(id)}
            id={id}
            >
                delete
            </button>
        </div>
        
    )
}

export default DeleteProduct