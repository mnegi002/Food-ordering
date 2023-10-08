import classes from "./MealForm.module.css"
import Input from "../UI/Input"
import { useState } from "react"
const MealForm = (props) => {
    const [enteredValue, setEnteredValue] = useState('1')
    const changeHandler = (event) => {
        const quant = event.target.value
        console.log(quant)
        setEnteredValue(quant)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        const enteredValueNumber = +enteredValue
        if (enteredValue.trim().length === 0 || enteredValueNumber < 1 || enteredValueNumber > 5) {
            return
        }
        props.onAddToCart(enteredValueNumber)
    }
    return (
        <>
            <form className={classes.form} onSubmit={submitHandler}>
                <Input label="Amount"
                    input={{
                        id: "amount_" + props.id,
                        type: 'number',
                        min: '1',
                        max: '5',
                        value: enteredValue,
                        onChange: changeHandler,
                    }
                    } />
                <button >+ Add</button>
            </form>
        </>
    )
}
export default MealForm