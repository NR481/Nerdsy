import { useDispatch } from "react-redux";
import { deleteAProduct } from "../store/products";


const DeleteProduct = ({id}) => {
    const dispatch = useDispatch()

    const onSubmit = () => {
        dispatch(deleteAProduct(id))
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