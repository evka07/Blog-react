import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dateToStr from "../../../utils/dateToStr.js";
import {useForm} from "react-hook-form";

const PostForm = ({ action, actionText, initialData, onSubmit }) => {
    const [formData, setFormData] = useState(initialData);

    const {register, handleSubmit, formState: {errors}} = useForm()

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

  const submitForm = (data) => {
      onSubmit(data)
  }

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    {...register("title", {
                        required: 'Title is required',
                        minLength: {value: 3, message: 'Title short'}
                    })}
                />
                {errors.title && (
                    <small className={"d-block form-text text-danger mt-2"}>{errors.title.message}</small>
                )}
            </div>
            <div>
                <label htmlFor="shortDescription">ShortDescription</label>
                <input
                    type="text"
                    name="shortDescription"
                    {...register("shortDescription", {
                        required: 'shortDescription is required',
                        minLength: {value: 20, message: 'shortDescription short'}
                    })}
                />
                {errors.shortDescription && (
                    <small className={"d-block form-text text-danger mt-2"}>{errors.shortDescription.message}</small>
                )}
            </div>
            <div>
                <label htmlFor="publishedDate">Date</label>
                <DatePicker
                    selected={formData.publishedDate}
                    onChange={handleDateChange}
                    dateFormat="MM/dd/yyyy"
                    {...register("publishedDate", {required: 'Date is required'})}
                />

                {errors.publishedDate && (
                    <small className={"d-block form-text text-danger mt-2"}>{errors.publishedDate.message}</small>
                )}
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
                    {...register("content", {required: 'Content is required'})}
                />
                {errors.content && (
                    <small className={"d-block form-text text-danger mt-2"}>{errors.content.message}</small>
                )}
            </div>
            <div>
                <label htmlFor="author">Author</label>
                <input
                    type="text"
                    name="author"
                    {...register("author", {
                        required: 'Autor is required',
                        minLength: {
                            value: 3, message:"Author is short"
                        }
                    })}
                />
                {errors.author&& (
                    <small className={"d-block form-text text-danger mt-2"}>{errors.author.message}</small>
                )}
            </div>
            <button type="submit">{actionText}</button>
        </form>
    );
};

export default PostForm;