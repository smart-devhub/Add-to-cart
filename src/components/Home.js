import React,{useContext} from 'react'
import { CardContext } from '../Context/CardContext'
import SingalProduct from './SingalProduct'
import Filter from './Filter'
import './style.css'


const Home = () => {

    const {state:{products}}=useContext(CardContext)
    
    return (
        <div className="home">
            <Filter />
            <div className="productContainer">
             {products.map((product)=>{
                 return(
                 <SingalProduct product={product} key={product.id} />)
            })}
            </div>
        </div>
    )
}

export default Home
