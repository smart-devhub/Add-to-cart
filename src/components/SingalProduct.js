import React from 'react'
import {Card,Button} from 'react-bootstrap'
import Rating from './Rating'

const SingalProduct = ({product}) => {
    return (
        <div className="card">
            <Card style={{display:'flex',}}>
                <Card.Img variant='top' src={product.image} alt={product.name} style={{width:'300px',padding:"15px"}} />
               <Card.Body>
                   <Card.Title>{product.name}</Card.Title>
                   <Card.Subtitle>
                       <span>${product.price.split('.')[0]}</span>
                   
                   {product.fastDelivery ? (<div>fast Delivery</div>):(<div>4 days left</div>)}

                   <Rating rating={product.rating} />
                   </Card.Subtitle>
                   <Button variant='danger' size="sm" className="mt-3">Romove from Cart</Button><br />
               <Button disabled={!product.inStock} className="ml-2 mt-3">{!product.inStock ? "Out of Stock" :"Add to Cart"}</Button>
                   


               </Card.Body>
              

            </Card>
        </div>
    )
}

export default SingalProduct
