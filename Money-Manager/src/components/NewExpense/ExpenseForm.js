import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredtTitle] = useState("");
  const [enteredAmount, setEnteredtAmount] = useState("");
  const [enteredDate, setEnteredtDate] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });
  const OnTitleChange = (event) => {
    setEnteredtTitle(event.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value,
    //   };
    // });
  };
  const OnAmountChange = (event) => {
    setEnteredtAmount(event.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredAmount: event.target.value,
    //   };
    // });
  };
  const OnDateChange = (event) => {
    setEnteredtDate(event.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredDate: event.target.value,
    //   };
    // });
  };
  const OnCancel=()=>{
    props.onSaveExpenseData(null,"0");
  };
  const OnFormSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData,"0");
    setEnteredtTitle("");
    setEnteredtAmount("");
    setEnteredtDate("");
  };

  return (
    <form onSubmit={OnFormSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={OnTitleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={OnAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={OnDateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={OnCancel} type="submit">Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
