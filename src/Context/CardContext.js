import { createContext, useReducer } from "react";
import faker from 'faker'
import {CartReducer} from "./CartReducer";
export const CardContext=createContext()

const CartContexProvider=({children})=>{

    faker.seed(99)

    const products=[...Array(20)].map(()=>({
        id:faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.random.image(),
        inStock:faker.random.arrayElement([0,3,5,6,7]),
        fastDelivery:faker.datatype.boolean(),
        rating:faker.random.arrayElement([1,2,3,4,5])
    }))

    const [state,dispatch]=useReducer(CartReducer,{products:products,cart:[]})

    return(
        <CardContext.Provider value={{state,dispatch}}>
            {children}
        </CardContext.Provider>
    )
}

export default CartContexProvider;