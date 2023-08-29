"use client"

import { useState } from 'react';
import { Button , Modal, Form } from 'react-bootstrap';
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';

interface ICreateModalProps {
    showModalCreate: boolean;
    setShowModalCreate: (value: boolean) => void;
}

function CreateModal(createModalProps: ICreateModalProps) {

    const {showModalCreate, setShowModalCreate} = createModalProps;

    const [author, setAuthor] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    
    const handleSubmit = () => {
        console.log(">>> check data: ...", title, author, content);
    }

    const handleCloseModal = () => {
        setAuthor("");
        setTitle("");
        setContent("");
        setShowModalCreate(false);
    }

  return (
    <>
      <Modal
        show={showModalCreate}
        // onHide={handleClose}
        onHide={() => handleCloseModal}
        backdrop="static"
        keyboard={false}
        size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Create a new blog?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" /*controlId="exampleForm.ControlInput1"*/>
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" placeholder="John Doe" 
                    value={author}
                    onChange={(e) => setContent(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="The title"
                        value={title}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Content</Form.Label>
                    <Form.Control type="textarea" placeholder="The content blah blah ..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" 
                onClick={() => handleCloseModal}>
                Cancel
            </Button>
            <Button variant="secondary" 
                onClick={() => handleSubmit}>
                Save
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateModal;