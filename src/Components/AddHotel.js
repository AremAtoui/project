import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
// import { addhotel } from '../redux/UserSlice';
import { useDispatch } from 'react-redux';
import { addhotel } from '../redux/HotelSlice';
function AddHotel({ ping, setping }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const [newhotel, setnewhotel] = useState({
    image: "",

    name: "",
    adresse: "",
    description: "",

    price: "",
    images: ""
  })
  return (
    <div className="Aa" >
      <Button variant="primary" onClick={handleShow}style={{backgroundColor:"blue", width:"100px"}} >
        <u>Add Hotel</u>
      </Button>


      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="FORM" style={{marginLefT:"0px"}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Image</Form.Label>
              <Form.Control type="text" placeholder="Enter image" onChange={(e) => setnewhotel({ ...newhotel, image: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" onChange={(e) => setnewhotel({ ...newhotel, name: e.target.value })} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Adresse</Form.Label>
              <Form.Control type="text" placeholder="Enter adresse" onChange={(e) => setnewhotel({ ...newhotel, adresse: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>description</Form.Label>
              <Form.Control type="text" placeholder="Enter description" onChange={(e) => setnewhotel({ ...newhotel, description: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>price</Form.Label>
              <Form.Control type="text" placeholder="Enter price" onChange={(e) => setnewhotel({ ...newhotel, price: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Images</Form.Label>
              <Form.Control type="text" placeholder="Enter images" onChange={(e) => setnewhotel({ ...newhotel, images: e.target.value })} />
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer >
          <Button className="btn1" variant="secondary" onClick={handleClose} style={{ backgroundColor: "bleu", width: "70px" }}>
            Close
          </Button>
          <Button className="btn2" variant="primary" onClick={() => {
            {
              dispatch(addhotel(newhotel)); setping(!ping); { handleClose() }

            }
          }} >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddHotel