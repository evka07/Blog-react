import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addPost} from "../../redux/postsRedux.js";
import PostForm from "../views/PostForm/PostForm.jsx";

const AddPostPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleSubmit = (formData) => {
        const newPost = {
            id:new Date().toISOString(),
            ...formData,
        }
        dispatch(addPost(newPost))
        navigate('/')
    }

    return (
        <div>
            <PostForm
            action={addPost}
            actionText={"Add Post"}
            initialData={{
                title: '',
                shortDescription: '',
                content: '',
                category: '',
                author: '',
                publishedDate: '',
            }}
            onSubmit={handleSubmit}
            />


        </div>
    );
};

export default AddPostPage;