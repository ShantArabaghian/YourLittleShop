import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import './Mycard.css';
const Cart = () => {
   const {
       isEmpty,
       totalUniqueItems,
       items,
       cartTotal,
       totalItems,
       updateItemQuantity,
       removeItem,
       emptyCart, 
   } = useCart();
   
  
   if(isEmpty) return <h1 className='text-center'>Your cart is empty</h1>
    
    return (
        <section className='seccart'>
            
<div className='row justify-content-center'>
        <div className='col-12'>
            <h5>Cart ({totalUniqueItems}) Total Items : ({totalItems})</h5>
            <table className='table'>
                <tbody>
                {items.map((item, index) =>{
                    return(
                    <tr key={index}>
                        
                        <td>
                            <img className='cartimg' src={item.img} alt="/"></img>
                        </td>
                        <td className='price'>Price : ${item.price}</td>
                        <td className='price'>Quantity ({item.quantity})</td>
                        <td>
                            <button className='btn btn-info ms-2 m-2' onClick={()=> updateItemQuantity(item.id, item.quantity -1)}>-</button>
                            <button className='btn btn-info ms-2' onClick={()=> updateItemQuantity(item.id, item.quantity +1)}>+</button>
                            <button className='btn btn-danger ms-2 m-2' onClick={()=> removeItem(item.id)}>Remove Item</button>
                        </td>
                    </tr>
                    )
                }
                )}
                </tbody>
            </table>
        </div>
        <div className='col-auto'>
          
        <div className='col-auto ms-auto'><h2>Total Price : ${cartTotal}</h2> </div>
           </div>
    
    <div className='col-auto'>
        <button className='btn btn-danger m-2' onClick={()=> emptyCart()}>Empty Cart</button></div>
        <div className='col-auto'>
        
    </div>
       <div style={{textAlign:"center"}} >
       <Link to='/checkout' className='btn btn-outline-primary m-2'  >Checkout</Link>
       <p>Or</p>
           <Link to='/' className='btn btn-outline-primary m-2 ' > Back to shoping</Link>
       </div>
    </div>
    </section>
    );
};
export default Cart;