import React from 'react'
import {Navbar,Container,FormControl,Dropdown,Nav,Badge} from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Header = () => {
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
             <Badge>{10}</Badge>
               </Dropdown.Toggle>
              
               <Dropdown.Menu>
                  <span style={{padding:'10px'}}>Cart isEmpty</span>
               </Dropdown.Menu>
             </Dropdown>
             </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
