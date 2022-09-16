import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

  const [myTitle, setMyTitle] = useState(props.title);
  const [myDate, setMyDate] = useState(props.date);
  const [myPrice, setMyPrice] = useState(props.price);


  const clickHandler = () => {
    setMyTitle("Updated Value!");
    console.log(myTitle);
    setMyDate(new Date());
    setMyPrice(100);
    // title = "Updated Value!";
    // console.log("Clicked!!", myTitle);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={myDate}></ExpenseDate>

      <div className="expense-item__description">
        <h2>{myTitle}</h2>
        <div className="expense-item__price">${myPrice}</div>
      </div>
      <button onClick={clickHandler}>Change</button>
    </Card>
  );
};

export default ExpenseItem;
