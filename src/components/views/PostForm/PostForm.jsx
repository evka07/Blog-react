import React, {useState} from 'react';

const PostForm = ({action, actionText, initialData, onSubmit}) => {
    const [formData, setFormData] = useState(initialData)

    const handleInput = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(formData)
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

export default PostForm;