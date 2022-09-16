import "./ExpenseForm.css";
import {useState} from "react";

let counter = 1;

const ExpenseForm = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(1);
    const [date, setDate] = useState(new Date());
    const [products, setProduct] = useState(JSON.parse(localStorage.getItem('products') || '[]'));

    // convert date to array
    // date = date.toString().split('-')

    // add expense value in array
    const add_expense = (e) => {
        const temp = {
            id: products.length + 1, // create auto ID
            title: title,
            price: price,
            date: new Date(date),
        }

        products.push(temp);
        setProduct(products);
        localStorage.setItem('products', JSON.stringify(products));
    }

    // Clear all input in Expense Form
    const clear_expense = (e) => {
        e.defaultPrevented();
        setTitle('');
        setPrice(1);
    }

    return (
        <form onSubmit={add_expense}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => {
                        setTitle(e.target.value)
                    }}/>
                </div>

                <div className="new-expense__control">
                    <label>Price</label>
                    <input type="number" min="1" step="0.1"
                           value={price} onChange={(e) => {
                        setPrice(parseFloat(e.target.value))
                    }}/>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2022-01-01" max="2022-12-31"
                           onChange={(e) => {
                               setDate(e.target.value)
                           }}/>
                </div>
            </div>

            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>


        </form>
    );
};

export {ExpenseForm};
