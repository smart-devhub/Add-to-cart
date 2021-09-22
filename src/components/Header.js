import React,{useContext} from 'react'
import {Navbar,Container,FormControl,Dropdown,Nav,Badge} from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { CardContext } from '../Context/CardContext'


const Header = () => {

    const {state}=useContext(CardContext)
    return (
        <Navbar bg="dark" variant="dark" style={{height:80}}>
            <Container>
            <Navbar.Brand>
                <Link to="/">ROMEO</Link>
            </Navbar.Brand>
            <Navbar.Text className="search">
                <FormControl  style={{width:500}}
                placeholder="Search products"
                className="m-auto"
                />
            </Navbar.Text>
             <Nav>
             <Dropdown>
             <Dropdown.Toggle variant="success" id="dropdown-basic">
             <FaShoppingCart color="white" fontSize="25px" />
             <Badge>{state.cart.length}</Badge>
               </Dropdown.Toggle>
              
               <Dropdown.Menu>
                   {state.cart.length > 0 ? (
                       <>
                       {state.cart.map(prod=>(
                           <span key={prod.id} className="cartitem">
                               <img src={prod.image} alt={prod.name}  />
                               <div className="cartitemdetails">
                                   <span>{prod.name}</span>
                                   <span>{prod.price.split('.')[0]}</span>

                               </div>

                           </span>
                       )

                       )}

                       </>
                   ):(
                       <span style={{padding:'10px'}}>Cart isEmpty</span>
                   )}
                  
               </Dropdown.Menu>
             </Dropdown>
             </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
