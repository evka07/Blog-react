import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import PostForm from "../views/PostForm/PostForm.jsx";
import {editPost} from "../../redux/postsRedux.js";

const EditPostPage = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const post = useSelector((state) => state.posts.find((post) => post.id === id))

    const handleEdit = (formData) => {
        const updatePost = {
            ...post,
            ...formData,
            publishedDate: formData.publishedDate.toISOString(),
        }
        dispatch(editPost(updatePost))
        navigate('/')
    }


    return (
        <div>
            <PostForm
                action={editPost}
                actionText={"Edit post"}
                initialData={{
                    ...post,
                    publishedDate: new Date(post.publishedDate),
                }}
                onSubmit={handleEdit}
            />


        </div>
    );
};

export default EditPostPage;