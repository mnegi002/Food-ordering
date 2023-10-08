import classes from "./HeaderCartButton.module.css"
import { useContext, useEffect, useState } from "react"
import CartContext from "../../store/cart-context"
const HeaderCartButton = (props) =>{
    const [isHighlighted , setIsHighlighted] = useState(false)
    const cartCtx = useContext(CartContext)
    const {items } =  cartCtx
    const numberOfCartItems = items.reduce((curNumber,item) => {
        return curNumber + item.amount
    } , 0)
    const btnClass = `${classes.button} ${isHighlighted ? classes.bump : ' '}`
    useEffect(()=>{
        if(items.length === 0){
            return 
        }
        setIsHighlighted(true)  
        const timer = setTimeout(()=>{
            setIsHighlighted(false)
        },300)
        return () =>{
            clearTimeout(timer)
        }
    },[items])
    return (
        <>
        <button className={btnClass} onClick={props.onClick}>
        <span className={classes.icon}><i className="fa-solid fa-cart-shopping"></i></span>
        <span>Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
        </>
    )
}
export default HeaderCartButton 