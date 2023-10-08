import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import { useContext } from 'react'
import CartItem from './CartItem'
const Cart = (props)=>{
    const cartCtx = useContext(CartContext)
    const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0
    const itemRemoveHandler = (id) =>{
        cartCtx.removeItem(id)
    }

    const itemAddHandler = (item) =>{
        cartCtx.addItem({...item, amount : 1})

    }
    const orderHandler = (id)=>{
        alert('Your order is placed')

    }
    const cartItems = (
    <ul className={classes['cart-items']}>
        {cartCtx.items.map((item)=> (
    <li>
       <CartItem 
       key = {item.id}
       name = {item.name}
       amount = {item.amount}
       price = {item.price}
       onRemove = {itemRemoveHandler.bind(null,item)}
       onAdd = {itemAddHandler.bind(null,item)}/>
        </li>
        ))
        }
    </ul>)
    return (
        <Modal onClose={props.onClose}>
        <div>
            <ul className={classes['cart-items']}>
        {cartItems}
        </ul>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
           {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>} 
        </div>
        </div>
        </Modal>
    )
}
export default Cart