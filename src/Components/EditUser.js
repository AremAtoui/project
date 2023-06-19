import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
// import { addhotel } from '../redux/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../redux/UserSlice';
function EditUser({ el, ping, setping }) {
    const user= useSelector((state)=> state.user?.user);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const [edited, setedited] = useState({
        image: user?.image,
        name: user?.name,
        lastName: user?.lastName,
        email: user?.email,
        // password: el.password
    })
    return (
        <div className="Aa" style={{ borderRadius: "7px" }}>
            <Button onClick={handleShow} style={{ width: "50px", marginLeft: "30px" }} >
                <u>Edit </u>
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{height:"100px"}}><Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" placeholder={user?.image} onChange={(e) => setedited({ ...edited, image: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder={user?.name} onChange={(e) => setedited({ ...edited, name: e.target.value })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>LastName</Form.Label>
                        <Form.Control type="text" placeholder={user?.lastName} onChange={(e) => setedited({ ...edited, lastName: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder={user?.email} onChange={(e) => setedited({ ...edited, email: e.target.value })} />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" placeholder={el?.password} onChange={(e) => setedited({ ...edited, password: e.target.value })} />
                    </Form.Group> */}



                </Form></Modal.Body>
                <Modal.Footer >
                    <Button className="btn1" style={{ width: "70px" }} onClick={handleClose}>
                        Close
                    </Button>
                    <Button className="btn2" style={{ width: "55px", marginLeft: "30px"}}  onClick={() => { dispatch(editUser({ id: user?._id, edited })); handleClose() }}>
                        Edit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EditUser