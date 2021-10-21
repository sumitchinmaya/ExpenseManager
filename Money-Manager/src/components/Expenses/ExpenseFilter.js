import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
  const years = [2022,2021,2020,2019];
  const onYearChange=(event)=>{
    props.onYearChanged(event.target.value)
   // console.log(event.target.value);
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label> Filter by Year</label>
        <select value={props.selected} onChange={onYearChange}>
          {years.map((year, index) => {
            return <option key={index} value={year.toString()}>{year}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;