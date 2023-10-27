import initialState from "./initialState.js";

const ADD_POST = 'app/posts/ADD_POST'
const DELETE_POST = 'app/posts/DELETE_POST'

export const deletePost = (postId) => ({
    type: DELETE_POST,
    payload: postId
})
export const addPost = (post) => ({
    type: ADD_POST,
    payload: post
})

const postsReducer = (statePart = initialState.posts, action) => {
    switch (action.type) {
        case DELETE_POST:
            return statePart.filter((post) => post.id !== action.payload)
        case ADD_POST:
            return [...statePart, action.payload]
        default:
            return statePart;
    }
};

export default postsReducer


