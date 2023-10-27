import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addPost} from "../../redux/postsRedux.js";

const AddPostPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const  [formData, setFormData] = useState({
        title: '',
        shortDescription: '',
        content: '',
        author: '',
        publishedDate: '',
    })

    const handleInput = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newPost = {
            id:new Date().toISOString(),
            ...formData,
        }
        dispatch(addPost(newPost))
        navigate('/')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleInput}/>
            </div>
            <div>
                <label htmlFor="">ShortDescription</label>
                <input type="text" name="shortDescription" value={formData.shortDescription} onChange={handleInput}/>
            </div>
            <div>
                <label htmlFor="">Data</label>
                <input type="text" name="publishedDate" value={formData.publishedDate} onChange={handleInput}/>
            </div>
            <div>
                <label htmlFor="">Content</label>
                <input type="text" name="content" value={formData.content} onChange={handleInput}/>
            </div>
            <div>
                <label htmlFor="">Author</label>
                <input type="text" name="author" value={formData.author} onChange={handleInput}/>
            </div>

            <button type={'submit'}>Add</button>
        </form>
    );
};

export default AddPostPage;