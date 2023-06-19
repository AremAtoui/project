import React from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { deletehotel } from '../redux/UserSlice';
function CardHotels({ hotel, ping, setping }) {
  const dispatch = useDispatch();
  return (
    <div className="Card">
      <Link style={{ textDecoration: "none", color: "black" }} to={`/trailer/${hotel.name}`}>
        <Card style={{ width: '18rem', margin: "20px", borderRadius: "12px 12px 0px 0px" }}>
          <Card.Img variant="top" src={hotel.image} />

          <Card.Body>
            <Card.Text>
              {hotel.name}
            </Card.Text>
            <Card.Text>
              {hotel.adresse}
            </Card.Text>
            {/* <Card.Title> {hotel.name}</Card.Title> */}
            <Card.Text>
              {hotel.description}
            </Card.Text>
            <Card.Text>
              {hotel.price}
            </Card.Text>
            {/* <button
          // onClick={() => {
          //   dispatch(deletehotel(hotel._id));
          //   setping(!ping);
          // }}
        >
          X
        </button> */}
            {/* <UpdateHotel hotel={hotel} ping={ping} setping={setping} /> */}
          </Card.Body>

        </Card>
      </Link>
    </div>
  )
}

export default CardHotels