import React,{useState} from 'react'
import {Form ,Button} from 'react-bootstrap'
import Rating from './Rating'
const Filter = () => {

    const [rate,setrate]=useState(0)
    return (
        <div className="filter">
            <span className="title">Products Filters</span>
            <span>
                <Form.Check
                inline
                type='radio'
                label="Ascending"
                name="group1"
                id={'inline-1'}
                />
                
            </span>
            <span>
                <Form.Check
                inline
                type='radio'
                label="Descending"
                name="group1"
                id={'inline-2'}
                />
                
            </span>
            <span>
                <Form.Check
                inline
                type='checkbox'
                label="Include out of Stock"
                name="group1"
                id={'inline-3'}
                />
                
            </span>
            <span>
                <Form.Check
                inline
                type='checkbox'
                label="Fast Delivery Only"
                name="group1"
                id={'inline-4'}
                />
               
                
            </span>
            <span>
                    <label style={{paddingRight:'10px'}}>Rating...</label>
                    <Rating rating={rate} onClick={(i)=>setrate(i+1)} style={{cursor:'pointer'}} />
                </span>
                <Button variant="primary">Clear Filters</Button>

            
        </div>
    )
}

export default Filter
