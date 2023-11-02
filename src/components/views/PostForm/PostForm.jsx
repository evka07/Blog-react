import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dateToStr from "../../../utils/dateToStr.js";

const PostForm = ({ action, actionText, initialData, onSubmit }) => {
    const [formData, setFormData] = useState(initialData);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleDateChange = (date) => {
        setFormData({
            ...formData,
            publishedDate: date,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInput}
                />
            </div>
            <div>
                <label htmlFor="shortDescription">ShortDescription</label>
                <input
                    type="text"
                    name="shortDescription"
                    value={formData.shortDescription}
                    onChange={handleInput}
                />
            </div>
            <div>
                <label htmlFor="publishedDate">Date</label>
                <DatePicker
                    selected={formData.publishedDate}
                    onChange={handleDateChange}
                    dateFormat="MM/dd/yyyy"
                />
            </div>
            <div>
                <label htmlFor="content">Content</label>
                <ReactQuill
                    value={formData.content}
                    onChange={(value) =>
                        setFormData({
                            ...formData,
                            content: value,
                        })
                    }
                />
            </div>
            <div>
                <label htmlFor="author">Author</label>
                <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleInput}
                />
            </div>
            <button type="submit">{actionText}</button>
        </form>
    );
};

export default PostForm;