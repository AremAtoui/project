import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
// import { addhotel } from '../redux/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addhotel } from '../redux/HotelSlice';
import { addreservation } from '../redux/ReservationSlice';
function AddRservation({ hotel1 }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.user);
  const [newreservation, setnewreservation] = useState({
    User: user?.name,
    nameHotel: hotel1?.name,
    dateArrive: "",
    dateSortie: "",
    price: hotel1?.price
  })
  return (
    <div className="Aa" >
      <Button variant="primary" onClick={handleShow} style={{ backgroundColor: "blue", width: "100px" }} >
        <u> Réserver</u>
      </Button>


      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="FORM">
            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User</Form.Label>
              <Form.Control type="text" placeholder="Enter user" onChange={(e) => setnewreservation({ ...newreservation, User: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>nameHotel</Form.Label>
              <Form.Control type="text" placeholder="Enter name hotel" onChange={(e) => setnewreservation({ ...newreservation, nameHotel: e.target.value })} />
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>dateArrive</Form.Label>
              <Form.Control type="text" placeholder="Enter date arrivé" onChange={(e) => setnewreservation({ ...newreservation, dateArrive: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>dateSortie</Form.Label>
              <Form.Control type="text" placeholder="Enter date sortie" onChange={(e) => setnewreservation({ ...newreservation, dateSortie: e.target.value })} />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>price</Form.Label>
              <Form.Control type="text" placeholder="Enter price" onChange={(e) => setnewreservation({ ...newreservation, price: e.target.value })} />
            </Form.Group> */}

          </Form>

        </Modal.Body>
        <Modal.Footer >
          <Button className="btn1" variant="secondary" onClick={handleClose} style={{ backgroundColor: "bleu", width: "70px" }}>
            Close
          </Button>
          <Button className="btn2" style={{ backgroundColor: "bleu", width: "70px" }} variant="primary" onClick={() => {
            {
              dispatch(addreservation(newreservation)); { handleClose() }

            }
          }} >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddRservation