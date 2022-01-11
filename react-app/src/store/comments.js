const GET_COMMENTS = 'comments/GET_COMMENTS'

const getProductComments = (comments) => ({
    type: GET_COMMENTS,
    comments
})

export const productComments = (id) => async (dispatch) => {
    const response = await fetch(`/api/products/${id}/comments`);
    const data = await response.json()
    dispatch(getProductComments(data))
    return data;
}

const commentsReducer = (state = {}, action) => {
    let newState;
    switch(action.type) {
        case GET_COMMENTS:
            newState = { ...state }
            action.comments.comments.forEach(comment => {
                newState[comment.id] = comment
            })
            return newState;
        default:
            return state;
    }
}

export default commentsReducer;
