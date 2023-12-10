import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Col, ListGroup } from 'react-bootstrap';
import DeleteModal from '../views/Modal/DeleteModal.jsx';
import { deletePost } from '../../redux/postsRedux.js';
import dateToStr from "../../utils/dateToStr.js";

const PostPage = () => {
    const { id } = useParams();
    const post = useSelector((state) =>
        state.posts.find((post) => post.id === id)
    );
    const categories = useSelector(state => state.categories);
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const [showDelete, setShowDelete] = useState(false);

    const handleDel = () => {
        setShowDelete(!showDelete);
    };

    const handleDelete = () => {
        dispatch(deletePost(id));
        setShowDelete(false);
        navigation('/');
    };

    return (
        <div>
            {post ? (
                <div className="d-flex justify-content-between">
                    <Col className={'pb-2'} key={post.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>{post.shortDescription}</Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item  dangerouslySetInnerHTML={{ __html: post.content }}/>
                                <ListGroup.Item>{post.publishedDate}</ListGroup.Item>
                                <ListGroup.Item>{post.author}</ListGroup.Item>
                                <ListGroup.Item>Category: {post.category}</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Link to={`/post/${post.id}`}>
                                    <Button variant="primary">Read</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <div>
                        <Button as={Link} to={`/post/edit/${id}`} variant="secondary">
                            Edit
                        </Button>
                        <Button onClick={handleDel} variant="danger">
                            Delete
                        </Button>
                    </div>
                    <DeleteModal
                        show={showDelete}
                        handleDel={handleDel}
                        onConfirm={handleDelete}
                    />
                </div>
            ) : (
                <p>No</p>
            )}
        </div>
    );
};

export default PostPage;