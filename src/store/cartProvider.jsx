import CartContext from './cart-context'
import { useReducer } from 'react'

const defaultCartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state,action)=>{
    if(action.type==='add'){
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id)
        const existingItem = state.items[existingItemIndex]
        
        let updatedItems
        if (existingItem ){
            const updatedItem = {
                ...existingItem,
                amount : existingItem.amount + action.item.amount 
            }
            
            updatedItems = [...state.items]
            updatedItems[existingItemIndex] = updatedItem
        } else {
            updatedItems = state.items.concat(action.item)
        }
        
        
        return {
            items : updatedItems,
            totalAmount : updatedTotalAmount
        }
    }
    if(action.type === 'remove'){
        const existingItemIndex = state.items.findIndex((item) => {
            return item.id === action.id.id
        })
        const existingItem = state.items[existingItemIndex]
        const updatedTotalAmount = state.totalAmount - existingItem.id.price
        
        let updatedItems
        if (existingItem.amount===1){
            updatedItems = state.items.filter(item => item.id !== action.id.id)
        } else {
            const updatedItem = {
                ...existingItem,
                amount : existingItem.amount - 1  
            }
            updatedItems = [...state.items]
            updatedItems[existingItemIndex] = updatedItem
        }
        return {
            items : updatedItems,
            totalAmount : updatedTotalAmount
        }
    }
    return defaultCartState
}

const CartProvider = (props) =>{
    const [cartState , dispatchCartAction] = useReducer(cartReducer,defaultCartState)

    const addItemHandler = item => {
        dispatchCartAction({type:'add', item : item})
    }
    const removeItemHandler = id => {
        dispatchCartAction({type:'remove' , id:id})
    }
    const cartContext = {
        items:cartState.items,
        totalAmount : cartState.totalAmount,
        addItem : addItemHandler,
        removeItem : removeItemHandler,
    }
    return (
        <CartContext.Provider value ={cartContext} >
        {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider