import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton"
const Header = (props) =>{
    return (
        <>
        <header className={classes.header}>
            <h2 className={classes.name}>FoodZ</h2>
            <HeaderCartButton onClick={props.onShow}/>
        </header>
        <div className={classes['main-image']}> 
            <img src="/images/pic.avif" alt="food_img"/>
        </div>
         </>
    )
}

export default Header