import initialState from "./initialState.js";

const ADD_POST = 'app/posts/ADD_POST'
export const addPost = (post) => ({
    type: ADD_POST,
    payload: post
})

const postsReducer = (statePart = initialState.blogPosts, action) => {
    switch (action.type) {
        default:
            return statePart;
    }
};

export default postsReducer


