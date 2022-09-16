import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString("en-US", {month: "long"});
    const day = props.date.toLocaleString("en-US", {day: "2-digit"});
    const year = props.date.getFullYear
    // let date_array = props.date.toString().split(',')

    console.log(props.date)

    return (
        <div className='expense-date'>
            {/* year */}
            <div className='expense-date__month'>{month}</div>
            {/* month */}
            <div className='expense-date__year'>{year}</div>
            {/* day */}
            <div className='expense-date__day'>{day}</div>
        </div>
    );
}

// convert month number to month name
const toMonthName = (monthNumber) => {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString('en-US', {
        month: 'short',
    });
}


export default ExpenseDate;
