import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
// import { addhotel } from '../redux/UserSlice';
import { useDispatch } from 'react-redux';
import { edithotel } from '../redux/HotelSlice';
import Swal from 'sweetalert2';
function EditHotel({ el, ping, setping }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const [edited, setedited] = useState({
    image: el.image,
    name: el.name,
    adresse: el.adresse,
    description: el.description,
    price: el.price,
    images: el.images
  })

  const  alertUp = () =>{
  
    Swal.fire({
      icon: 'success',
      title:'Your information was successfully update!'  
       
    })
  }

  return (
    <div className="Aa" style={{ borderRadius: "7px" }}>
      <Button onClick={handleShow} style={{width:"50px", marginLeft: "30px"}} >
        <u>Edit </u>
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image</Form.Label>
            <Form.Control type="text" placeholder={el.image} onChange={(e) => setedited({ ...edited, image: e.target.value })} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder={el.name} onChange={(e) => setedited({ ...edited, name: e.target.value })} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Adresse</Form.Label>
            <Form.Control type="text" placeholder={el.adresse} onChange={(e) => setedited({ ...edited, adresse: e.target.value })} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>description</Form.Label>
            <Form.Control type="text" placeholder={el.description} onChange={(e) => setedited({ ...edited, description: e.target.value })} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>price</Form.Label>
            <Form.Control type="text" placeholder={el.price} onChange={(e) => setedited({ ...edited, price: e.target.value })} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Images</Form.Label>
            <Form.Control type="text" placeholder={el.images}onChange={(e) => setedited({ ...edited, images: e.target.value })} />
          </Form.Group>


        </Form></Modal.Body>
        <Modal.Footer >
          <Button className="btn1" style={{width:"70px"}} onClick={handleClose}>
            Close
          </Button>
          <Button className="btn2" style={{width:"70px"}}onClick={() => { dispatch(edithotel({id:el._id, edited})); setping(!ping); handleClose() ; alertUp()}}>
            Edit 
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditHotel