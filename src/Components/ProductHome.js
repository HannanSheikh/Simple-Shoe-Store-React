import React,{useReducer} from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import CartReducer from '../cartReducer';
import shoes from '../../src/shoes.json'

export  const ProductHome=()=> {

 
  const [state, dispatch] = useReducer(CartReducer,0)
    return(
      <div>
        <h1>Cart Products {state}</h1>
        <div className ="productConatiner">
        {
        Object.keys(shoes).map(keyname=>{
          const shoe = shoes[keyname]
          return(
            <div key={keyname}>
              <Link to={`/product/${keyname}`}>
              <h2>{shoe.name}</h2>
              <img src={shoe.img} style={{height:"20em"}} />
              </Link>
              <Button variant="contained" color="primary" onClick={()=>dispatch({type:'ADD_CART'})}>+</Button>
              </div>
           
          )
        })
        }
        </div>
        
      </div>
    );
}


////////////////////////////////
// <div>
      // <h1>Cart Products {state}</h1>
        
      //     {Object.key(shoes).map(keyname => {
      //       return(
      //         <div>
      //             <li key={shoeid}>
      //         <Link to={`/product/${keyname}`}>
      //           <h2>{name}</h2>
      //           <img src={img} alt={name} />
      //         </Link>
              
      //         <Button variant="contained" color="primary" onClick={()=>dispatch({type:'ADD_CART'})}>+</Button>
      //       </li>
      //         </div>
      //       )
         
      //     }
      //   </div>