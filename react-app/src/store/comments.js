const GET_COMMENTS = 'comments/GET_COMMENTS'
const ADD_COMMENT = 'comments/ADD_COMMENT'

const getProductComments = (comments) => ({
    type: GET_COMMENTS,
    comments
})

const addComment = (comment) => ({
    type: ADD_COMMENT,
    comment
})


export const productComments = (id) => async (dispatch) => {
    const response = await fetch(`/api/products/${id}/comments`);
    const data = await response.json()
    dispatch(getProductComments(data))
    return data;
}

export const addNewComment = (comment) => async (dispatch) => {
    const res = await fetch(`/api/comments/`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comment)
    });
    const data = await res.json()
    dispatch(addComment(data))
    return data

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
        case ADD_COMMENT:
            return { ...state, [action.comment.id]: action.comment }

        default:
            return state;
    }
}

export default commentsReducer;
