import React, { useState, useEffect } from "react";


function BookingForm() {
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
  
  function fetchAPI(date) {
    console.log(date)
    if(date.day % 2 === 1)
      return timeArrayOdd;
    else
      return timeArrayEven;
  }

  const [availableTimes, setAvailableTimes] = useState(timeArrayEven);
  const [date, setDate] = useState(new Date());
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState([{id: 1, value: 'Birthday'}, {id: 2, value: 'Anniversary'}])

  useEffect(() => {
    setAvailableTimes(fetchAPI(date))
  }, [availableTimes, date]);

  function handleChange(e) {
    setDate(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setDate(new Date());
    setGuests(1);
    console.log('Form submitted!')
  }

  return (
    <div>

      <h1 className="header reserveTableHeader">Reserve a table at Little Lemon restaurant</h1>

      <form className="form" onSubmit={handleSubmit}>

        <div className="formContainer">
          <label htmlFor="res-date" className="descriptionText">Choose date:</label>
          <input
            type="date"
            id="res-date"
            className="descriptionText"
            value={
              date.getFullYear().toString() +
              "-" +
              (date.getMonth() + 1).toString().padStart(2, 0) +
              "-" +
              date.getDate().toString().padStart(2, 0)
            }
            onChange={(e) => setDate(new Date(e.target.value))}
            />
        </div>

        <div className="formContainer">
          <label htmlFor="res-time" className="descriptionText">Choose time:</label>
          <select id="res-time " className="descriptionText">
            {availableTimes.map((time) => (
              <option key={time.id}>{time.value}</option>
            ))}
          </select>
        </div>

        <div className="formContainer">
          <label htmlFor="guests" className="descriptionText">Number of guests:</label>
          <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          className="descriptionText"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}/>
        </div>

        <div className="formContainer">
          <label htmlFor="occasion" className="descriptionText">Occasion:</label>
          <select id="occasion" className="descriptionText">
          {occasion.map((localState, index) => (
              <option key={localState.id}>{localState.value}</option>
            ))}
          </select>
        </div>

        <input
          type="submit"
          value="Reserve a table"
          className="buttons reserveTable"
        />

      </form>
    </div>
  );
}

export default BookingForm;
