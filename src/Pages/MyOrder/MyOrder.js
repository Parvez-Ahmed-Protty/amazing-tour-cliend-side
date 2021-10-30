import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

const MyOrder = () => {

  const {user} = useAuth()

  const [orders,setOrders] = useState([])

  useEffect(()=>{
    fetch('http://localhost:7000/users')
    .then(res => res.json())
    .then(data => {
      const myOrder = data.filter(order => order.email === user.email)
      setOrders(myOrder)
    })
  },[])


  const cancelBtn = id => {
    const confirm = window.confirm('Are you sure wanna remove this item?')
    if (confirm) {
      fetch(`http://localhost:7000/users/${id}`,{
        method:'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        if (data.deletedCount > 0) {
            alert('Deleted Seccessfully')
            const newAllUser = orders.filter(a => a._id !== id)
            setOrders(newAllUser)
            
        }
    })
    }
}

  return (
    <>
      {
        (orders.length !==0) ? <Container className="my-5">
        <Row xs={1} md={3} sm={1} className="g-4">
          {
            orders.map(orderr => <Col key={orderr._id}>
              <Card className="card-de">
                <Card.Img
                  variant="top rounded"
                  src={orderr?.img}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">{orderr?.title}</Card.Title>
                  <Card.Text>
                    <h6>Traveller</h6>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <button onClick={()=>cancelBtn(orderr._id)} className="btn default-bg text-white border-0">
                  Cancel
                </button>
              </Card>
            </Col>)
          }
        </Row>
      </Container> : <h1>Please wait ...</h1>
      }
    </>
  );
};

export default MyOrder;
