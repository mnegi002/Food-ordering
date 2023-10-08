import classes from "./AvailableMeals.module.css"
import Dummy_Meals from "./DummyMeals"
import MealItem from "./MealItem"
import Card from "../UI/Card"
const AvailableMeals = () => {
    return (
        <>
            <section className={classes.meals}>
                <Card>
                    <ul>
                        {Dummy_Meals.map((meal) => (
                            <MealItem
                                id={meal.id} // this is new!
                                key={meal.id}
                                name={meal.name}
                                description={meal.description}
                                price={meal.price}
                            />
                        ))
                        }
                    </ul>

                </Card>

            </section>

        </>
    )
}

export default AvailableMeals