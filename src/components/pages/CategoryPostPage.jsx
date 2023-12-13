import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import PostPage from "./PostPage.jsx";


const CategoryPostPage = () => {
    const {category} = useParams()
    const posts = useSelector(state => state.posts.filter((post) => post.category === category))
    return (
        <div>
<h2>{category}</h2>
            <PostPage posts={posts}/>
        </div>
    );
};

export default CategoryPostPage;