import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import initialState from '../../../redux/initialState';

const PostForm = ({ action, actionText, initialData, onSubmit }) => {
    const [formData, setFormData] = useState(initialData);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [contentError, setContentError] = useState(false);
    const [dateError, setDateError] = useState(false);

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

    const customSubmit = (data) => {
        if (!data.content) {
            setContentError(true);
        } else {
            setContentError(false);
        }

        if (!data.publishedDate) {
            setDateError(true);
        } else {
            setDateError(false);
        }

        if (data.content && data.publishedDate) {
            onSubmit(data);
        }
    };

    return (
        <form onSubmit={handleSubmit(customSubmit)}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    {...register('title', {
                        required: 'Title is required',
                        minLength: { value: 3, message: 'Title too short' },
                    })}
                />
                {errors.title && (
                    <small className="d-block form-text text-danger mt-2">
                        {errors.title.message}
                    </small>
                )}
            </div>
            <div>
                <label htmlFor="shortDescription">ShortDescription</label>
                <input
                    type="text"
                    name="shortDescription"
                    {...register('shortDescription', {
                        required: 'Short Description is required',
                        minLength: { value: 20, message: 'Short Description too short' },
                    })}
                />
                {errors.shortDescription && (
                    <small className="d-block form-text text-danger mt-2">
                        {errors.shortDescription.message}
                    </small>
                )}
            </div>
            <div>
                <label htmlFor="publishedDate">Date</label>
                <DatePicker
                    name="publishedDate"
                    selected={formData.publishedDate}
                    onChange={handleDateChange}
                    dateFormat="MM/dd/yyyy"
                />
                {dateError && (
                    <small className="d-block form-text text-danger mt-2">
                        Published Date is required
                    </small>
                )}
            </div>
            <div>
                <label htmlFor="content">Content</label>
                <ReactQuill
                    name="content"
                    value={formData.content}
                    onChange={(value) =>
                        setFormData({
                            ...formData,
                            content: value,
                        })
                    }
                />
                {contentError && (
                    <small className="d-block form-text text-danger mt-2">
                        Content can't be empty
                    </small>
                )}
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select name="category" {...register('category', { required: 'Category required' })}>
                    <option value="">Please select</option>
                    {initialState.categories.map((category) => (
                        <option value={category} key={category}>
                            {category}
                        </option>
                    ))}
                </select>
                {errors.category && (
                    <small className="d-block form-text text-danger mt-2">
                        {errors.category.message}
                    </small>
                )}
            </div>
            <div>
                <label htmlFor="author">Author</label>
                <input
                    type="text"
                    name="author"
                    {...register('author', {
                        required: 'Author is required',
                        minLength: {
                            value: 3,
                            message: 'Author too short',
                        },
                    })}
                />
                {errors.author && (
                    <small className="d-block form-text text-danger mt-2">
                        {errors.author.message}
                    </small>
                )}
            </div>

            <button type="submit">{actionText}</button>
        </form>
    );
};

export default PostForm;
