import React from "react";

function BookingForm() {
  return (
    <div>
      <h1>Reserve a table at Little Lemon restaurant</h1>
      <form>
        <fieldset>
          <div className="field">
            <label>Date:</label>
            <input type="date"></input>
          </div>
          <div className="field">
            <label>Time:</label>
            <input type="time"></input>
          </div>
          <div className="field">
            <label>Number of guests:</label>
            <input type="range"></input>
          </div>
          <div className="field">
            <label>Occasion:</label>
            <select type="date">
                <option>Birthday</option>
                <option>Anniversary</option>
                <option></option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default BookingForm;
