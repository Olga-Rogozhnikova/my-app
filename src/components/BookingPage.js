import React, { useReducer } from "react";
import BookingForm from "./BookingForm";

const timeArrayEven = [
  {id: 1, value: "17:00"},
  {id: 2, value: "19:00"},
  {id: 3, value: "20:00"},
];

const timeArrayOdd = [
  {id: 1, value: "18:00"},
  {id: 2, value: "21:00"},
  {id: 3, value: "22:00"}
];

function timesFromDate(date) {
  if(date.day % 2 === 1)
    return timeArrayOdd;
  else
    return timeArrayEven;
}
function BookingPage() {

  const [availableTimes, dispatchDate] = useReducer(timesFromDate, timeArrayOdd);


  return (
    <BookingForm availableTimes={availableTimes} dispatchDate={dispatchDate}/>
  );
}

export default BookingPage;
export {timesFromDate};
