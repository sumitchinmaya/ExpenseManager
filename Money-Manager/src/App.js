import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSE =[
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 194.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 27799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 11294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 4550,
    date: new Date(2021, 5, 12),
  },
];
const App=()=> {
  
  const[expense, setExpense]=useState(DUMMY_EXPENSE);
  const OnSaveNewExpense=(newExpenseData)=>{
    //this will update it immidiately as on the go function will put it at the latest position in the update queue
    setExpense((prevState)=>{
      return [newExpenseData,...prevState];
    });
  };
  return (
    <div>
      <h2>Money-Manager</h2>
      <NewExpense onSaveNewExpense={OnSaveNewExpense}/>
      <Expenses items={expense} />
    </div>
  );
}

export default App;
