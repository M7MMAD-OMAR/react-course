import './ExpenseDate.css';

const ExpenseDate = (props) => {
    // const month = props.date.toLocaleString("en-US", {month: "long"});
    // const day = props.date.toLocaleString("en-US", {day: "2-digit"});
    // const year = props.date.getFullYear

    // get date and convert array
    const date_array = props.date.substring(0, 10).split('-')

    return (
        <div className='expense-date'>
            {/* month */}
            <div className='expense-date__month'>{toMonthName(date_array[1])}</div>
            {/* year */}
            <div className='expense-date__year'>{date_array[0]}</div>
            {/* day */}
            <div className='expense-date__day'>{date_array[2]}</div>
        </div>
    );
}

// convert month number to month name
const toMonthName = (monthNumber) => {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString('en-US', {
        month: 'long',
    });
}


export default ExpenseDate;
