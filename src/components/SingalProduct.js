import React,{useContext} from 'react'
import {Card,Button} from 'react-bootstrap'
import Rating from './Rating'
import { CardContext } from '../Context/CardContext'


const SingalProduct = ({product}) => {

    const {state,dispatch} =useContext(CardContext)
    console.log(state.cart)

    return (

        <div className="card">
            <Card style={{display:'flex',}}>
                <Card.Img variant='top' src={product.image} alt={product.name} style={{width:'300px',padding:"15px"}} />
               <Card.Body>
                   <Card.Title>{product.name}</Card.Title>
                   <Card.Subtitle>
                       <span>${product.price}</span>
                   
                   {product.fastDelivery ? (<div>fast Delivery</div>):(<div>4 days left</div>)}

                   <Rating rating={product.rating} />
                   </Card.Subtitle>

                    {state.cart.some(p=> p.id===product.id)?(
                        <Button variant='danger' size="sm" className="mt-3"
                         onClick={()=>{dispatch({type:'REMOVE_FROM_CART',payload:product})}} > Romove from Cart</Button>
                    ):( <Button disabled={!product.inStock} className="ml-2 mt-3" onClick={()=>{dispatch({type:'ADD_TO_CART',payload:product})}}>
                        {!product.inStock ? "Out of Stock" :"Add to Cart"}</Button>)
                    
                    
                    }
                   
              
                   


               </Card.Body>
              

            </Card>
        </div>
    )
}

export default SingalProduct
