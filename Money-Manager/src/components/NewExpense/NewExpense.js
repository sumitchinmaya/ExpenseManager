import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const [model, setModel] = useState("0");
  const OnSave = (formData, modelClose) => {
    console.log(formData, modelClose);
    if (formData !== null) {
      const expenseData = {
        ...formData,
        id: Math.random().toString(),
      };
      props.onSaveNewExpense(expenseData);
    }
    setModel(modelClose);
  };
  const OnModelButtonClicked = () => {
    setModel(model == "0" && "1");
  };
  let modelContent = (
    <div className="new-expense button">
      <button type="submit" onClick={OnModelButtonClicked}>
        Add New Expense
      </button>
    </div>
  );
  if (model == "1") {
    modelContent = <ExpenseForm onSaveExpenseData={OnSave} />;
  }
  //  return (<div className="new-expense">
  //      <div className="new-expense button">
  //         <button type="submit">Add New Expense</button>
  //       </div>
  //  </div>);
  // return (<div className="new-expense">
  //     <ExpenseForm
  //     onSaveExpenseData={OnSave}
  //     />
  // </div>);
  return <div className="new-expense">{modelContent}</div>;
};
export default NewExpense;
