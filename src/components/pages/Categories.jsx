import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Categories = () => {
    const categories = useSelector(state => state.categories)
    const posts = useSelector(state => state.posts)
    console.log(categories)
    console.log(posts)
    
    return (
        <div>
            <ul>
                {categories.map((category) => (
                    <li key={category}>
                        <Link to={`/categories/${category}`}>{category}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;