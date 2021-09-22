import React,{useContext} from 'react'
import { ListGroup, Row,Col,Form,Image } from 'react-bootstrap'
import {CardContext, CartContext} from '../Context/CardContext'
import Rating from './Rating'
const Cart = () => {
    const {state,dispatch}=useContext(CardContext)
    return (
        <div className="home">
            <div className="productContainer">
                <ListGroup>
                    {state.cart.map(prod=>(
                        <ListGroup.Item key={prod.id}>
                            <Row>
                            <Col md={2}>
                                    <img src={prod.image} alt={prod.name} />
                                </Col>
                                <Col md={2}>
                                    {prod.name}
                                </Col>
                                <Col md={2}>
                                    {prod.price}
                                </Col>
                                <Col md={2}>
                                    <Rating rating={prod.ratings} />
                                </Col>
                                <Col md={2}>
                                    <Form.Control>
                                        {[...Array(prod.inStock)].map((x)=>(
                                            <option key={x+1}>{x+1}</option>
                                        ))}
                                    </Form.Control>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>

            </div>
            <div className="filter">

            </div>
           
        </div>
    )
}

export default Cart
