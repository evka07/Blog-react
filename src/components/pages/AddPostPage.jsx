import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addPost} from "../../redux/postsRedux.js";
import PostForm from "../views/PostForm/PostForm.jsx";
import shortid from "shortid";

const AddPostPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleSubmit = (formData) => {
        const newPost = {
            id: shortid(),
            publishedDate: formData.publishedDate.toISOString(),
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
                    publishedDate: new Date(),
                }}
                onSubmit={handleSubmit}
            />


        </div>
    );
};

export default AddPostPage;