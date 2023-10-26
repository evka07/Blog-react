import React from 'react';
import {Button, Modal} from "react-bootstrap";



const DeleteModal = ({show, onClose, onConfirm, handleDel}) => {



    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header onClick={handleDel} closeButton>
                <Modal.Title>Подтвердите удаление</Modal.Title>
            </Modal.Header>
            <Modal.Body>Вы уверены, что хотите удалить эту публикацию?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleDe}>
                    Отмена
                </Button>
                <Button variant="danger" onClick={onConfirm}>
                    Удалить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteModal;