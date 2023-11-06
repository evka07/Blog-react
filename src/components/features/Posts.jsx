import React from 'react';
import {Button, Card, Col, ListGroup, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import dateToStr from "../../utils/dateToStr.js";

const Posts = () => {
    const posts = useSelector((state) => state.posts)
    const postsWith = posts.map((post) => ({
        ...post,
        publishedDate: new Date(post.publishedDate),
    }))
    console.log(posts)



    return (
        <div>
            <div className={'d-flex justify-content-between align-items-center mt-5 mb-5'}>
                <h2>All messages</h2>
                <Button as={Link}  to={`/post/add`} variant="outline-primary">Add post</Button>
            </div>
            <Row>
                {postsWith.map((post) => (
                    <Col className={'pb-2'} key={post.id}>
                        <Card style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>
                                    {post.shortDescription}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item  dangerouslySetInnerHTML={{ __html: post.content }}></ListGroup.Item>
                                <ListGroup.Item>{post.publishedDate.toLocaleDateString('pl-Pl')}</ListGroup.Item>
                                <ListGroup.Item>{post.category}</ListGroup.Item>
                                <ListGroup.Item>{post.author}</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Link to={`/post/${post.id}`}>
                                    <Button variant="primary">Reed</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Posts;