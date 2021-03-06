const GET_COMMENTS = 'comments/GET_COMMENTS'
const ADD_COMMENT = 'comments/ADD_COMMENT'
const EDIT_COMMENT = 'comments/EDIT_COMMENT'
const DELETE_COMMENT = 'comments/DELETE_COMMENT'

const getProductComments = (comments) => ({
    type: GET_COMMENTS,
    comments
})

const addComment = (comment) => ({
    type: ADD_COMMENT,
    comment
})

const editComment = (comment) => ({
    type: EDIT_COMMENT,
    comment
})

const deleteComment = (id) => ({
    type: DELETE_COMMENT,
    id
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

export const commentEdit = (comment, id) => async (dispatch) => {
    const res = await fetch(`/api/comments/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comment)
    });
    const data = await res.json()
    dispatch(editComment(data))
    return data
}

export const commentDelete = (id) => async (dispatch) => {
    const res = await fetch(`/api/comments/${id}`, {
        method: 'DELETE'
    })
    if(res.ok) {
        dispatch(deleteComment(id))
    }
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
        case EDIT_COMMENT:
            newState = { ...state }
            newState[action.comment.id] = action.comment
            return newState;
        case DELETE_COMMENT:
            newState = { ...state }
            delete newState[action.id]
            return newState

        default:
            return state;
    }
}

export default commentsReducer;
