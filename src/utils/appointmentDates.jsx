import React from 'react';

function DateList({ lastDate }) {
    const currentDate = new Date();
    const dates = [];

    // Function to add days to a date
    const addDays = (date, days) => {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    };

    // Check if last date is within 15 days from the current date
    const isWithin15Days = (lastDate) => {
        const differenceInTime = lastDate.getTime() - currentDate.getTime();
        const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
        return differenceInDays <= 15;
    };

    // Generate date list
    const generateDateList = () => {
        let endDate = lastDate;
        if (!isWithin15Days(lastDate)) {
            endDate = addDays(currentDate, 14);
        }
        let currentDatePointer = new Date(currentDate);
        while (currentDatePointer <= endDate) {
            dates.push(new Date(currentDatePointer));
            currentDatePointer = addDays(currentDatePointer, 1);
        }
    };

    generateDateList();

    return (
        <div>
            <h2>Date List</h2>
            <ul>
                {dates.map((date, index) => (
                    <li key={index}>{date.toDateString()}</li>
                ))}
            </ul>
        </div>
    );
}

export default DateList;
