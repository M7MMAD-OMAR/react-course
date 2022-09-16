import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = (props) => {

    const temp = props.products.reverse()

    return (
        <Card className="expenses">
            {
                // print all products
                temp.map((item, key) => {
                    return <ExpenseItem
                        index={key}
                        title={item.title}
                        price={item.price}
                        date={item.date}
                    ></ExpenseItem>
                })
            }

            <h2>{props.mTitle}</h2>
        </Card>
    );
}


export default Expenses;